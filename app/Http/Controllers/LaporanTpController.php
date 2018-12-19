<?php
namespace App\Http\Controllers;

use DB;
use App\LaporanCu;
use App\LaporanTp;
use App\Imports\LaporanTpDraftImport;
use App\Imports\LaporanTpDraftAllImport;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\HeadingRowImport;
use App\Support\NotificationHelper;
use App\Support\LaporanTpHelper;
use Illuminate\Http\Request;

class LaporanTpController extends Controller{

	protected $message = 'Laporan TP/KP';

	public function index($id)
	{
		$table_data = LaporanTp::with('Tp')->select('Laporan_tp.*',
			'tp.name as tp_name',
			'provinces.name as provinces_name')
			->leftjoin('tp','Laporan_tp.id_tp','tp.id')
			->leftjoin('provinces','tp.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
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
		$table_data = LaporanTp::with('Tp')->where('id_tp',$id)->addSelect(['*',DB::raw(LaporanTpHelper::queryPerkembangan())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($id, $periode)
	{
		$table_data = LaporanTp::with('Tp')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->select('Laporan_tp.*',
		'tp.name as tp_name',
		'provinces.name as provinces_name')
		->leftjoin('tp','Laporan_tp.id_tp','tp.id')
    ->leftjoin('provinces','tp.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp WHERE periode <= '$periode' GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPerkembangan())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearls()
	{
		$table_data = LaporanTp::select('Laporan_tp.*',
			'tp.name as tp_name',
			'provinces.name as provinces_name')
			->leftjoin('tp','Laporan_tp.id_tp','tp.id')
			->leftjoin('provinces','tp.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsTp($id)
	{
		$table_data = LaporanTp::with('Tp')->where('id_tp',$id)->addSelect(['*',DB::raw(LaporanTpHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsPeriode($id, $periode)
	{
		$table_data = LaporanTp::with('Tp')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->select('Laporan_tp.*',
		'tp.name as tp_name',
		'provinces.name as provinces_name')
		->leftjoin('tp','Laporan_tp.id_tp','tp.id')
    ->leftjoin('provinces','tp.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp WHERE periode <= '$periode' GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanTpHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function listLaporanTp($cu,$periode)
	{
		$table_data = LaporanTp::with('Tp')->select('id','id_tp')->whereHas('Tp', function($query) use ($cu){
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

		$name = $request->name;

		$kelas = LaporanTp::create($request->all());

		// $this->konsolidasi($request);
		LaporanTpHelper::konsolidasi($request);

		NotificationHelper::store_laporan_tp($request,'Menambah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
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

		$name = $request->name;

		$kelas = LaporanTp::findOrFail($id);

		$kelas->update($request->all());

		LaporanTpHelper::konsolidasi($request);

		NotificationHelper::store_laporan_tp($request,'Mengubah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanTp::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		NotificationHelper::store_laporan_tp($kelas,'Menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
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
}
