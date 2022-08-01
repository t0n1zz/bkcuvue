<?php
namespace App\Http\Controllers;

use DB;
use App\Cu;
use App\Tp;
use App\LaporanCu;
use App\LaporanTp;
use App\LaporanCuDraft;
use Illuminate\Http\Request;
use App\Support\LaporanCuHelper;
use App\Support\NotificationHelper;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\LaporanCuDraftImport;
use Maatwebsite\Excel\HeadingRowImport;
use Venturecraft\Revisionable\Revision;
use App\Imports\LaporanCuDraftAllImport;

class LaporanCuController extends Controller{

	protected $message = 'Laporan Cu';

	public function index()
	{
		$table_data = LaporanCu::select('laporan_cu.*',
			'cu.name as cu_name',
			'provinces.name as provinces_name')
			->leftjoin('cu','laporan_cu.id_cu','cu.id')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
				$join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanCuHelper::queryPerkembangan())])->Where('cu.deleted_at',null)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexTotal()
	{
		$table_data = LaporanCu::leftjoin('cu','laporan_cu.id_cu','cu.id')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
				$join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanCuHelper::queryPerkembanganTotal())])->Where('cu.deleted_at',null)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = LaporanCu::with('Cu')->where('id_cu',$id)->addSelect(['*',DB::raw(LaporanCuHelper::queryPerkembangan())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = LaporanCu::select('laporan_cu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporan_cu.id_cu','cu.id')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu WHERE periode <= '$periode' GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
				$join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanCuHelper::queryPerkembangan())])->Where('cu.deleted_at',null)->orWhere('cu.deleted_at','<','$periode')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriodeTotal($periode)
	{
		$table_data = LaporanCu::leftjoin('cu','laporan_cu.id_cu','cu.id')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
				$join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanCuHelper::queryPerkembanganTotal())])->Where('cu.deleted_at',null)->orWhere('cu.deleted_at','<','$periode')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexGerakan()
	{
		$table_cu = LaporanCu::select(DB::raw('periode, count(*) as cu'))->groupBy('periode')->orderBy('periode','desc')->get();

		$periodes = LaporanCu::distinct('periode')->orderBy('periode','desc')->pluck('periode');

		$table_data = collect();

		foreach($periodes as $periode){
			$table = LaporanCu::leftjoin('cu','laporan_cu.id_cu','cu.id')
				->leftjoin('provinces','cu.id_provinces','provinces.id')
				->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu WHERE periode <= '$periode' GROUP BY id_cu) latest_report"),function($join){
						$join->on('laporan_cu.id_cu','=','latest_report.id_cu');
						$join->on('laporan_cu.periode','=','latest_report.max_periode');
				})->addSelect([DB::raw('max(latest_report.max_periode) as periode, count(*) as cu'),DB::raw(LaporanCuHelper::queryPerkembanganTotal())])->Where('cu.deleted_at',null)->orWhere('cu.deleted_at','<','$periode')->first();

			$cu_sesuai = $table_cu->filter(function($item) use($periode){
				return $item->periode == $periode;
			})->first();

			$table->cu_sesuai = $cu_sesuai;

			$table_data->push($table);
			
		}

		return response()
			->json([
				'model' => $table_data
		]);
	}

	public function indexPearls()
	{
		$table_data = LaporanCu::select('laporan_cu.*',
			'cu.name as cu_name',
			'provinces.name as provinces_name')
			->leftjoin('cu','laporan_cu.id_cu','cu.id')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
        $join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanCuHelper::queryPEARLS())])->Where('cu.deleted_at',null)->orWhere('cu.deleted_at','<','max_periode')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsCu($id)
	{
		$table_data = LaporanCu::with('Cu')->where('id_cu',$id)->addSelect(['*',DB::raw(LaporanCuHelper::queryPEARLS())])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsPeriode($periode)
	{
		$table_data = LaporanCu::select('laporan_cu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporan_cu.id_cu','cu.id')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu WHERE periode <= '$periode' GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
        $join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw(LaporanCuHelper::queryPEARLS())])->Where('cu.deleted_at',null)->orWhere('cu.deleted_at','<','max_periode')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexDraft($id)
	{
		$table_data = LaporanCuDraft::with('Cu')->where('id_user',$id)->addSelect(['*',DB::raw(LaporanCuHelper::queryPerkembangan())])->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriode()
	{
		$table_data = LaporanCu::select('periode')->distinct()->orderBy('periode','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriodeCu($id)
	{
		$table_data = LaporanCu::select('id','periode')->where('id_cu',$id)->distinct()->orderBy('periode','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function detail($id)
	{
		$table_data = LaporanCu::with('cu')->where('id',$id)->addSelect(['*',DB::raw(LaporanCuHelper::queryPerkembangan())])->first();
	
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
		$table_data = LaporanCu::with('cu')->where('id',$id)->addSelect(['*',DB::raw(LaporanCuHelper::queryPEARLS())])->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => LaporanCu::initialize(),
					'rules' => LaporanCu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$name = $request->name;

		if($this->checkData($request)){
			$cu = Cu::findOrFail($request->id_cu);
			$kelas = LaporanCu::create($request->except('no_ba') + [
				'no_ba' => $cu->no_ba
			]);
			
			NotificationHelper::laporan_cu($kelas,'menambah');
			
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
	
	public function edit($id)
	{
		$kelas = LaporanCu::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$kelas = LaporanCu::findOrFail($id);

		$time = \Carbon\Carbon::now();
		$diff = $time->diffInHours($kelas->updated_at);

		$kelas->update($request->all());

		if($diff > 2){
			NotificationHelper::laporan_cu($kelas,'mengubah');
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanCu::findOrFail($id);
		$id_cu = $kelas->id_cu;

		if($kelas->tp){
			LaporanTp::whereHas('Tp',function($query) use ($id_cu){
				$query->where('id_cu',$id_cu);
			})->where('periode', $kelas->periode)->delete();
		}

		$kelas->delete();

		LaporanTp::flushCache();

		NotificationHelper::laporan_cu($kelas,'menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}

	public function uploadExcelAll(Request $request)
	{
		Excel::import(new LaporanCuDraftAllImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function uploadExcel(Request $request)
	{
		Excel::import(new LaporanCuDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function checkData($request)
	{
		$periode = LaporanCu::where('id_cu',$request->id_cu)->where('periode',$request->periode)->first();

		if($periode){
			return false;
		}

		$periodeTp = LaporanCu::where('id_cu',$request->id_cu)->where('periode',$request->periode)->where('tp','!=',0)->first();

		if($periodeTp){
			return false;
		}

		return true;
	}

	public function countDraft()
	{
			$id = \Auth::user()->id;

			$table_data = LaporanCuDraft::where('id_user',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
		$time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\LaporanCu')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

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
