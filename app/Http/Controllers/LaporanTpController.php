<?php
namespace App\Http\Controllers;

use DB;
use App\Tp;
use App\Cu;
use App\LaporanCu;
use App\LaporanTp;
use Illuminate\Http\Request;
use App\Support\LaporanTpHelper;
use App\Support\NotificationHelper;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\LaporanTpDraftImport;
use Maatwebsite\Excel\HeadingRowImport;
use Venturecraft\Revisionable\Revision;
use App\Imports\LaporanTpDraftAllImport;

class LaporanTpController extends Controller{

	protected $message = 'Laporan TP/KP';

	public function index($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->select('laporan_tp.*',
			'tp.name as tp_name',
			'provinces.name as provinces_name')
			->leftjoin('tp','laporan_tp.id_tp','tp.id')
			->leftjoin('provinces','tp.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM laporan_tp GROUP BY id_tp) latest_report"),function($join){
        $join->on('laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPerkembangan()
			)])->whereHas('Tp', function($query) use ($id){
				$query->where('id_cu',$id);
			})->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexTp($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->where('id_tp',$id)->addSelect(['*',DB::raw(LaporanTpHelper::queryPerkembangan())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($id, $periode)
	{
		$table_data = LaporanTp::with('Tp.Cu')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->select('laporan_tp.*',
		'tp.name as tp_name',
		'provinces.name as provinces_name')
		->leftjoin('tp','laporan_tp.id_tp','tp.id')
    ->leftjoin('provinces','tp.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM laporan_tp WHERE periode <= '$periode' GROUP BY id_tp) latest_report"),function($join){
        $join->on('laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPerkembangan())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearls()
	{
		$table_data = LaporanTp::select('laporan_tp.*',
			'tp.name as tp_name',
			'provinces.name as provinces_name')
			->leftjoin('tp','laporan_tp.id_tp','tp.id')
			->leftjoin('provinces','tp.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM laporan_tp GROUP BY id_tp) latest_report"),function($join){
        $join->on('laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsTp($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->where('id_tp',$id)->addSelect(['*',DB::raw(LaporanTpHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsPeriode($id, $periode)
	{
		$table_data = LaporanTp::with('Tp.Cu')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->select('laporan_tp.*',
		'tp.name as tp_name',
		'provinces.name as provinces_name')
		->leftjoin('tp','laporan_tp.id_tp','tp.id')
    ->leftjoin('provinces','tp.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM laporan_tp WHERE periode <= '$periode' GROUP BY id_tp) latest_report"),function($join){
        $join->on('laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function listLaporanTp($cu,$periode)
	{
		$table_data = LaporanTp::with('Tp.Cu')->select('id','id_tp')->whereHas('Tp', function($query) use ($cu){
			$query->where('id_cu',$cu);
		})->where('periode',$periode)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function detail($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->where('id',$id)->addSelect(['*',DB::raw(LaporanTpHelper::queryPerkembangan())])->first();

		$h = $table_data->revisionHistory;
		$history = collect();		
		foreach($h as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
		->json([
			'model' => $table_data,
			'history' => $history
		]);
	}

	public function detailPearls($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->where('id',$id)->addSelect(['*',DB::raw(LaporanTpHelper::queryPEARLS())])->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriode()
	{
		$table_data = LaporanTp::select('periode')->distinct()->orderBy('periode','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriodeTp($id,$periode)
	{
		$table_data = LaporanTp::with('tp')->select('id','id_tp')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->where('periode',$periode)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => LaporanTp::initialize(),
					'rules' => LaporanTp::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,LaporanTp::$rules);

		if($this->checkData($request)){
			$name = $request->name;

			$kelas = LaporanTp::create($request->all());

			// $this->konsolidasi($request);
			LaporanTpHelper::konsolidasi($request);
			
			NotificationHelper::laporan_tp($request,'menambah');

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' ' .$name. ' berhasil ditambah'
				]);
		}else{
			return response()
			->json([
				'saved' => false,
				'message' => 'Maaf laporan periode ini sudah ada, silahkan periksa kembali laporan konsolidasi dan laporan Tp'
			]);
		}	
	}

	public function show($id)
	{
		$kelas = LaporanTp::with('LaporanTpKategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = LaporanTp::with('Tp')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanTp::$rules);

		$kelas = LaporanTp::findOrFail($id);

		$time = \Carbon\Carbon::now();
		$diff = $time->diffInHours($kelas->updated_at);

		$kelas->update($request->all());

		LaporanTpHelper::konsolidasi($request);

		if($diff > 2){
			NotificationHelper::laporan_tp($request,'mengubah');
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = LaporanTp::findOrFail($id);
			$tp = Tp::findOrFail($kelas->id_tp);
			$name = $kelas->name;
			$periode = $kelas->periode;
			$id_cu = $tp->id_cu;
			
			$kelas->delete();

			$laporantp = LaporanTp::whereHas('Tp',function($query) use ($id_cu){
				$query->where('id_cu',$id_cu);
			})->where('periode',$periode)->get();

			if($laporantp){
				$kelas2 = LaporanCu::where('id_cu', $id_cu)->where('periode', $periode)->delete();
			}else{
				$cu = Cu::findOrFail($id_cu);
				$konsolidasi = [];

				foreach(LaporanTp::$summable as $col){
					$konsolidasi[$col] = $laporantp->sum($col);
				}

				$konsolidasi['id_cu'] = $id_cu;
				$konsolidasi['no_ba'] = $cu->no_ba;
				$konsolidasi['tp'] = $laporantp->count();

				$kelas2 = LaporanCu::where('id_cu',$id_cu)->where('periode',$periode)->first();

				$kelas3 = LaporanCu::findOrFail($kelas2->id);
				$kelas3->update($konsolidasi);
			}

			LaporanCu::flushCache();

			NotificationHelper::laporan_tp($kelas,'menghapus');

			\DB::commit();
			return response()
				->json([
					'deleted' => true,
					'message' => $this->message. ' ' .$name. 'berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}

	public function uploadExcel(Request $request)
	{
		Excel::import(new LaporanTpDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function uploadExcelAll(Request $request)
	{
		Excel::import(new LaporanTpDraftAllImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function checkData($request)
	{
		$periode = LaporanTp::where('id_tp',$request->id_tp)->where('periode',$request->periode)->first();

		if($periode){
			return false;
		}
		
		$tp = Tp::findOrFail($request->id_tp);

		$periodeCu = LaporanCu::where('id_cu',$tp->id_cu)->where('periode',$request->periode)->where('tp','==',0)->first();

		if($periodeCu){
			return false;
		}

		return true;
	}

	public function history()
  {
		$time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\LaporanTp')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

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
}
