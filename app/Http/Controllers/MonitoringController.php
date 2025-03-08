<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Cu;
use App\Monitoring;
use App\MonitoringRekom;
use App\MonitoringPencapaian;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;
use App\Exports\Monitoring as ExportMonitoring;
use Maatwebsite\Excel\Facades\Excel;
use Venturecraft\Revisionable\Revision;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;

class MonitoringController extends Controller{
	protected $message = "Monitoring";

	public function index(Request $request, $status)
	{
		if($status == 'semua'){
			$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu')->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->advancedFilter();
		}elseif ($status == 'selesai') {
			$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
				->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')
				->havingRaw("monitoring_rekom_ok_count = monitoring_rekom_count")->get();
		} elseif($status == 'keputusan'){
			$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
				->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')
				->havingRaw("monitoring_pencapaian_count > 0")
				->havingRaw("monitoring_rekom_ok_count < monitoring_rekom_count")->get();
		} elseif($status == 'tidak_keputusan'){
			$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
				->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')
				->havingRaw("monitoring_pencapaian_count = 0")
				->havingRaw("monitoring_rekom_ok_count < monitoring_rekom_count")->get();
		}

		if($status != 'semua'){
			$table_data = $this->filter($status,$request,$table_data);
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKonsolidasi(Request $request, $tahun, $bulan)
	{
		$year = $tahun;
		$month = $bulan;
		$lastMonth = null;

		if ($month == 1) {
			$lastMonth = 12;
		} else {
			$lastMonth = $month - 1;
		}

		$lastDayOfLM = Carbon::create($year, $lastMonth)->endOfMonth()->day;
		$lastDayOfTM = Carbon::create($year, $month)->endOfMonth()->day;
		$dString = $year . '-' . $month . '-' . $lastDayOfTM;
		$dStringLM = $year . '-' . $lastMonth . '-' . $lastDayOfLM;
		$dStringLY = $year . '-01-01';
		$date = Carbon::createFromFormat('Y-m-d', $dString);
		$dateLY = Carbon::createFromFormat('Y-m-d', $dStringLY);
		$dateLM = Carbon::createFromFormat('Y-m-d', $dStringLM);

		$table_data = Cu::with('hasMonitoring', 'hasMonitoring.monitoring_rekom')->whereNull('deleted_at')->get();

		$table_data->each(function ($cu) use ($date, $dateLY, $dateLM) {
			$cu->hasMonitoring->each(function ($monitoring) use ($date, $dateLM, $dateLY) {

				$filteredRekom = $monitoring->monitoring_rekom->filter(function ($rekom) use ($date) {
					return $rekom->created_at <= $date;
				});

				$filteredRekomOk = $monitoring->monitoring_rekom->filter(function ($rekom) use ($date) {
					return $rekom->updated_at <= $date && $rekom->status == 1;
				});

				$filteredRekomLastYear = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLY) {
					return $rekom->created_at <= $dateLY;
				});

				$filteredRekomOkLastYear = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLY) {
					return $rekom->updated_at <= $dateLY && $rekom->status == 1;
				});

				$filteredRekomLastMonth = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLM) {
					return $rekom->created_at <= $dateLM;
				});

				$filteredRekomOkLastMonth = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLM) {
					return $rekom->updated_at <= $dateLM && $rekom->status == 1;
				});
				$monitoring->monitoring_rekom_count = $filteredRekom->count();
				$monitoring->monitoring_rekom_ok_count = $filteredRekomOk->count();
				$monitoring->monitoring_rekom_last_year_count = $filteredRekomLastYear->count();
				$monitoring->monitoring_rekom_ok_last_year_count = $filteredRekomOkLastYear->count();
				$monitoring->monitoring_rekom_last_month_count = $filteredRekomLastMonth->count();
				$monitoring->monitoring_rekom_ok_last_month_count = $filteredRekomOkLastMonth->count();
			});
		});


		$sum_tercapai = 0;
		$sum_tidak_tercapai = 0;
		$sum_rekom = 0;
		$table_data->each(function ($cu) use (&$sum_tercapai, &$sum_tidak_tercapai, &$sum_rekom) {

			$cu->jumlah_rekomendasi = $cu->hasMonitoring->sum('monitoring_rekom_count');
			$cu->tercapai = $cu->hasMonitoring->sum('monitoring_rekom_ok_count');
			$cu->tidak_tercapai = $cu->jumlah_rekomendasi - $cu->tercapai;
			$cu->presentase_tercapai = $cu->jumlah_rekomendasi != 0 && $cu->tercapai != 0 ? round(($cu->tercapai / $cu->jumlah_rekomendasi) * 100, 2) : 0;
			$cu->presentase_tidak_tercapai = $cu->jumlah_rekomendasi != 0 && $cu->tidak_tercapai != 0 ? round(($cu->tidak_tercapai / $cu->jumlah_rekomendasi) * 100, 2) : 0;
			if ($cu->presentase_tercapai >= 0 && $cu->presentase_tercapai <= 20.99) {
				$cu->kategori_kepatuhan = 'Sangat Tidak Tercapai';
			} elseif ($cu->presentase_tercapai >= 21 && $cu->presentase_tercapai <= 40.99) {
				$cu->kategori_kepatuhan = 'Tidak Tercapai';
			} elseif ($cu->presentase_tercapai >= 41 && $cu->presentase_tercapai <= 60.99) {
				$cu->kategori_kepatuhan = 'Cukup Tercapai';
			} elseif ($cu->presentase_tercapai >= 61 && $cu->presentase_tercapai <= 80.99) {
				$cu->kategori_kepatuhan = 'Tercapai';
			} elseif ($cu->presentase_tercapai >= 81 && $cu->presentase_tercapai <= 100) {
				$cu->kategori_kepatuhan = 'Sangat Tercapai';
			}
			$cu->rekom_des_tahun_lalu = $cu->hasMonitoring->sum('monitoring_rekom_last_year_count');
			$cu->rekom_bulan_ini = $cu->jumlah_rekomendasi;
			$cu->rekom_pertumbuhan = $cu->jumlah_rekomendasi != 0 ? $cu->jumlah_rekomendasi -  $cu->rekom_des_tahun_lalu : 0;
			$cu->presentase_rekom_ok_tahun_lalu = $cu->rekom_des_tahun_lalu != 0 && $cu->hasMonitoring->sum('monitoring_rekom_ok_last_year_count') != 0 ? round(($cu->hasMonitoring->sum('monitoring_rekom_ok_last_year_count') / $cu->rekom_des_tahun_lalu) * 100, 2) : 0;
			$cu->presentase_rekom_ok_bulan_lalu = $cu->hasMonitoring->sum('monitoring_rekom_last_month_count') != 0 && $cu->hasMonitoring->sum('monitoring_rekom_ok_last_month_count') != 0 ?
				round(($cu->hasMonitoring->sum('monitoring_rekom_ok_last_month_count') / $cu->hasMonitoring->sum('monitoring_rekom_last_month_count')) * 100, 2) : 0;
			$cu->presentase_rekom_ok_bulan_ini = $cu->tercapai != 0 && $cu->jumlah_rekomendasi != 0 ?  round(($cu->tercapai / $cu->jumlah_rekomendasi) * 100, 2) : 0;
			$cu->pertumbuhan_kumulatif = $cu->presentase_rekom_ok_bulan_ini != 0 && $cu->presentase_rekom_ok_tahun_lalu != 0 ?  round(($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_tahun_lalu), 2) : 0;
			$cu->pertumbuhan_bulan_ini = $cu->presentase_rekom_ok_bulan_ini != 0 && $cu->presentase_rekom_ok_bulan_lalu != 0 ?  round(($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu), 2) : 0;
			if ($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu == 0) {
				$cu->catatan = 'Tidak Ada Isi SIMO';
			} elseif ($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu < 0) {
				$cu->catatan = 'Penambahan Rekomendasi Audit';
			} elseif ($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu > 0) {
				$cu->catatan = 'Telah Melakukan Rekomendasi';
			}

			$sum_tercapai = $sum_tercapai + $cu->tercapai;
			$sum_tidak_tercapai = $sum_tidak_tercapai + $cu->tidak_tercapai;
			$sum_rekom = $sum_rekom + $cu->jumlah_rekomendasi;
		});



		$summary = [];
		$sum_persen_tercapai = $sum_rekom != 0 && $sum_tercapai != 0 ?  round(($sum_tercapai / $sum_rekom) * 100, 2) : 0;
		$sum_persen_tidak_tercapai = $sum_rekom != 0 && $sum_tidak_tercapai != 0 ?  round(($sum_tidak_tercapai / $sum_rekom) * 100, 2) : 0;
		$summary['sum_tercapai'] = $sum_tercapai;
		$summary['sum_tidak_tercapai'] = $sum_tidak_tercapai;
		$summary['sum_persen_tercapai'] = $sum_persen_tercapai;
		$summary['sum_persen_tidak_tercapai'] = $sum_persen_tidak_tercapai;
		$summary['sum_rekom'] = $sum_rekom;
		if ($sum_persen_tercapai  >= 0 && $sum_persen_tercapai <= 20.99) {
			$summary['kategori'] = 'Sangat Tidak Tercapai';
		} elseif ($sum_persen_tercapai  >= 21 && $sum_persen_tercapai <= 40.99) {
			$summary['kategori'] = 'Tidak Tercapai';
		} elseif ($sum_persen_tercapai  >= 41 && $sum_persen_tercapai  <= 60.99) {
			$summary['kategori'] = 'Cukup Tercapai';
		} elseif ($sum_persen_tercapai >= 61 && $sum_persen_tercapai  <= 80.99) {
			$summary['kategori'] = 'Tercapai';
		} elseif ($sum_persen_tercapai  >= 81 && $sum_persen_tercapai  <= 100) {
			$summary['kategori'] = 'Sangat Tercapai';
		}

		$table_data = $this->filter('konsolidasi', $request, $table_data);
		return response()
			->json([
				'model' => $table_data,
				'summary' => $summary
			]);
	}

	public function indexCu(Request $request,$cu, $tp, $status)
	{
		if ($tp != 'semua') {
			if($status == 'semua'){
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu')->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)->where('id_tp', $tp)->advancedFilter();
			} elseif ($status == 'selesai') {
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
					->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)->where('id_tp', $tp)
					->havingRaw("monitoring_rekom_ok_count = monitoring_rekom_count")->get();
			} elseif($status == 'keputusan'){
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
					->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)->where('id_tp', $tp)
					->havingRaw("monitoring_pencapaian_count > 0")
					->havingRaw("monitoring_rekom_ok_count < monitoring_rekom_count")->get();
			} elseif($status == 'tidak_keputusan'){
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
					->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)->where('id_tp', $tp)
					->havingRaw("monitoring_pencapaian_count = 0")
					->havingRaw("monitoring_rekom_ok_count < monitoring_rekom_count")->get();
			}

		} else {
			if ($status == 'semua') {
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)->advancedFilter();
			} elseif ($status == 'selesai') {
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
					->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)
					->havingRaw("monitoring_rekom_ok_count = monitoring_rekom_count")->get();
			} elseif($status == 'keputusan'){
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
					->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)
					->havingRaw("monitoring_pencapaian_count > 0")
					->havingRaw("monitoring_rekom_ok_count < monitoring_rekom_count")->get();
			} elseif($status == 'tidak_keputusan'){
				$table_data = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')
					->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)
					->havingRaw("monitoring_pencapaian_count = 0")
					->havingRaw("monitoring_rekom_ok_count < monitoring_rekom_count")->get();
			}
		}

		if($status !='semua'){
			$table_data = $this->filter($status,$request,$table_data);
		}

		$sum_tercapai= 0;
		$sum_rekom = 0;
		$data_sum = Monitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom')->withCount('monitoring_pencapaian', 'monitoring_rekom', 'monitoring_rekom_ok')->where('id_cu', $cu)->get();
		
		$data_sum->each(function ($monitoring) use(&$sum_tercapai, &$sum_rekom) {
			$sum_rekom = $sum_rekom + $monitoring->monitoring_rekom_count;
			$sum_tercapai = $sum_tercapai + $monitoring->monitoring_rekom_ok_count;
		});
		$sum_tidak_tercapai = $sum_rekom - $sum_tercapai;

		$summary = [];
		$sum_persen_tercapai = $sum_rekom != 0 && $sum_tercapai != 0 ?  round(($sum_tercapai / $sum_rekom) * 100, 2) : 0;
		$sum_persen_tidak_tercapai = $sum_rekom != 0 && $sum_tidak_tercapai != 0 ?  round(($sum_tidak_tercapai / $sum_rekom) * 100, 2) : 0;
		$summary['sum_tercapai'] = $sum_tercapai;
		$summary['sum_tidak_tercapai'] = $sum_tidak_tercapai;
		$summary['sum_persen_tercapai'] = $sum_persen_tercapai;
		$summary['sum_persen_tidak_tercapai'] = $sum_persen_tidak_tercapai;
		$summary['sum_rekom'] = $sum_rekom;

		if ($sum_persen_tercapai  >= 0 && $sum_persen_tercapai <= 20.99) {
			$summary['kategori'] = 'Sangat Tidak Tercapai';
		} elseif ($sum_persen_tercapai  >= 21 && $sum_persen_tercapai <= 40.99) {
			$summary['kategori'] = 'Tidak Tercapai';
		} elseif ($sum_persen_tercapai  >= 41 && $sum_persen_tercapai  <= 60.99) {
			$summary['kategori'] = 'Cukup Tercapai';
		} elseif ($sum_persen_tercapai >= 61 && $sum_persen_tercapai  <= 80.99) {
			$summary['kategori'] = 'Tercapai';
		} elseif ($sum_persen_tercapai  >= 81 && $sum_persen_tercapai  <= 100) {
			$summary['kategori'] = 'Sangat Tercapai';
		}
		

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function filter($status, $request, $table_data)
	{
		if ($status != 'semua') {
			$order_column = $request->order_column;
			$order_direction = $request->order_direction;
			$limit = $request->limit;
			$currentPage = LengthAwarePaginator::resolveCurrentPage();
			$perPage = $limit;

			if ($request->f) {
				$column = $request->f[0]['column'];
				$searchValue = $request->f[0]['query_1'];
				$filteredData = $table_data->filter(function ($item) use ($column, $searchValue) {
					return Str::contains(strtolower($item[$column]), strtolower($searchValue));
				});
				$table_data = $filteredData;
			}

			if ($order_direction == 'desc') {
				$table_data = $table_data->sortByDesc($order_column);
			} else {
				$table_data = $table_data->sortBy($order_column);
			}

			$currentPageResults = $table_data->slice(($currentPage - 1) * $perPage, $perPage)->values();

			return $table_data = new LengthAwarePaginator($currentPageResults, $table_data->count(), $perPage, $currentPage, [
				'path' => LengthAwarePaginator::resolveCurrentPath()
			]);
		}
	}

	public function get($id)
	{
		$table_data = Monitoring::where('id_cu',$id)->select('id','id_cu','name','tanggal')->orderBy('tanggal','desc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		$form = Monitoring::initialize();

		return response()
			->json([
					'form' => $form,
					'rules' => Monitoring::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request,Monitoring::$rules);

			$name = $request->name;

			$kelas = Monitoring::create($request->except('rekomendasi'));

			$this->syncRekom($request, $kelas);

			NotificationHelper::monitoring($kelas,'menambah temuan');

			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' temuan ' .$name. ' berhasil ditambah',
					'id' => $kelas->id
				]);	
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function edit($id)
	{
		$kelas = Monitoring::with('cu','tp','aktivis_cu.pekerjaan_aktif','aktivis_bkcu.pekerjaan_aktif','monitoring_rekom')->findOrFail($id);

		$kelas->total_rekom = count($kelas->monitoring_rekom);
		$kelas->rekom_ok = 0;
		foreach($kelas->monitoring_rekom as $k){
			if($k->status == 1){
				$kelas->rekom_ok += 1;
			}
		}

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request, Monitoring::$rules);

			$name = $request->name;

			$kelas = Monitoring::findOrFail($id);

			$kelas->update($request->except('rekomendasi'));

			$this->syncRekom($request, $kelas);

			\DB::commit();

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' temuan ' .$name. ' berhasil diubah'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function updateRekom($id)
	{
		$kelas = MonitoringRekom::findOrFail($id);

		$status = $kelas->status;

		if($status == 0){
			$kelas->status = 1;
		}else{
			$kelas->status = 0;
		}

		$kelas->update();

		Monitoring::flushCache();

		return response()
			->json([
				'saved' => true,
				'message' => 'Rekomendasi berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = Monitoring::findOrFail($id);
			$kelas2 = MonitoringRekom::where('id_monitoring',$id);
			$kelas3 = MonitoringPencapaian::where('id_monitoring',$id);

			$name = $kelas->name;

			$kelas->delete();
			$kelas2->delete();
			$kelas3->delete();
			
			\DB::commit();
			return response()
				->json([
					'deleted' => true,
					'message' =>  $this->message. ' temuan ' .$name. 'berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}			
	}

	private function syncRekom($request, $kelas)
	{
		if($request->rekomendasi){
			$rekoms = $request->rekomendasi;
			
			foreach($rekoms as $rekom){
				if(array_key_exists('id', $rekom)){
					$kelasRekom = MonitoringRekom::findOrFail($rekom['id']);
					$kelasRekom->update([
						'id_monitoring' => $kelas->id,
						'rekomendasi' => array_key_exists('rekomendasi', $rekom) ? $rekom['rekomendasi'] : null,
						'status' => array_key_exists('status', $rekom) ? $rekom['status'] : null,
					]);
				}else{
					MonitoringRekom::create([
						'id_monitoring' => $kelas->id,
						'rekomendasi' => array_key_exists('rekomendasi', $rekom) ? $rekom['rekomendasi'] : null,
						'status' => array_key_exists('status', $rekom) ? $rekom['status'] : null,
					]);
				}
			}
		}
	}

	public function count()
	{
			$table_data = Monitoring::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\Monitoring')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

    $history = collect();		
		foreach($table_data as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
			]);
	}

	public function downloadLaporan(Request $request){
		return Excel::download(new ExportMonitoring($request->id_cu,$request->id_tp), 'Laporan.xlsx');
	}

	public function getPeriode($kegiatan_tipe)
	{
		$table_data = Monitoring::selectRaw('YEAR(tanggal) as tahun')
			->distinct()
			->orderBy('tahun', 'desc')
			->pluck('tahun');

		return response()
			->json([
				'model' => $table_data
			]);
	}
	
}