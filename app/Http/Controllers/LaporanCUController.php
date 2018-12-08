<?php
namespace App\Http\Controllers;

use DB;
use App\Cu;
use App\Tp;
use App\LaporanCu;
use App\LaporanTp;
use App\LaporanCuDraft;
use App\Support\NotificationHelper;
use App\Support\LaporanQueryHelper;
use App\Imports\LaporanCuDraftImport;
use App\Imports\LaporanCuDraftAllImport;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\HeadingRowImport;
use Illuminate\Http\Request;

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
		})->addSelect([DB::raw(laporanQueryHelper::queryPerkembangan())])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = LaporanCu::with('Cu')->where('id_cu',$id)->addSelect(['*',DB::raw(laporanQueryHelper::queryPerkembangan())])->advancedFilter();

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
		})->addSelect([DB::raw(laporanQueryHelper::queryPerkembangan())])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexGerakan()
	{
		$table_data = LaporanCu::select(DB::raw(
			'max(id) as id, max(id_cu) as id_cu, periode, count(*) as cu, max(created_at) as created_at, max(updated_at) as updated_at, 
			sum(l_biasa) as l_biasa, 
			sum(l_lbiasa) as l_lbiasa, 
			sum(p_biasa) as p_biasa, 
			sum(p_lbiasa) as p_lbiasa,
			sum(total_anggota_lalu) as total_anggota_lalu,
			sum(aset) as aset,
			sum(aset_lalu) as aset_lalu,
			sum(aset_masalah) as aset_masalah,
			sum(aset_tidak_menghasilkan) as aset_tidak_menghasilkan,
			sum(aktiva_lancar) as aktiva_lancar,
			sum(simpanan_saham) as simpanan_saham,
			sum(simpanan_saham_lalu) as simpanan_saham_lalu,
			sum(simpanan_saham_des) as simpanan_saham_des,
			sum(nonsaham_unggulan) as nonsaham_unggulan,
			sum(nonsaham_harian) as nonsaham_harian,
			sum(hutang_spd) as hutang_spd,
			sum(hutang_tidak_berbiaya_30hari) as hutang_tidak_berbiaya_30hari,
			sum(total_hutang_pihak3) as total_hutang_pihak3,
			sum(piutang_beredar) as piutang_beredar,
			sum(piutang_anggota) as piutang_anggota,
			sum(piutang_lalai_1bulan) as piutang_lalai_1bulan,
			sum(piutang_lalai_12bulan) as piutang_lalai_12bulan,
			sum(dcr) as dcr,
			sum(dcu) as dcu,
			sum(iuran_gedung) as iuran_gedung,
			sum(donasi) as donasi,
			sum(bjs_saham) as bjs_saham,
			sum(beban_penyisihan_dcr) as beban_penyisihan_dcr, 
			sum(investasi_likuid) as investasi_likuid,
			sum(total_pendapatan) as total_pendapatan,
			sum(total_biaya) as total_biaya,
			sum(shu) as shu,
			sum(shu_lalu) as shu_lalu,
			sum(rata_aset) as rata_aset,
			sum(laju_inflasi) as laju_inflasi,
			sum(harga_pasar) as harga_pasar,
			sum(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota,
			sum((IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0))) as rasio_beredar,
			sum(((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0))) as rasio_lalai,
			sum((IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)))) as piutang_bersih
			'))->groupBy('periode')->advancedFilter();

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
		})->addSelect([DB::raw(laporanQueryHelper::queryPEARLS())])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsCu($id)
	{
		$table_data = LaporanCu::with('Cu')->where('id_cu',$id)->addSelect(['*',DB::raw(laporanQueryHelper::queryPEARLS())])->advancedFilter();

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
		})->addSelect([DB::raw(laporanQueryHelper::queryPEARLS())])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexDraft($id)
	{
		$table_data = LaporanCuDraft::with('Cu')->where('id_user',$id)->addSelect(['*',DB::raw(laporanQueryHelper::queryPerkembangan())])->get();

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
		$table_data = LaporanCu::with('cu')->where('id',$id)->addSelect(['*',DB::raw(laporanQueryHelper::queryPerkembangan())])->first();
	
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
		$table_data = LaporanCu::with('cu')->where('id',$id)->addSelect(['*',DB::raw(laporanQueryHelper::queryPEARLS())])->first();

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
		$this->validate($request,LaporanCu::$rules);

		$name = $request->name;

		$kelas = LaporanCu::create($request->all());

		NotificationHelper::store_laporan_cu($kelas,'Menambah');
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
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
		$this->validate($request,LaporanCu::$rules);

		$name = $request->name;

		$kelas = LaporanCu::findOrFail($id);

		$kelas->update($request->all());

		NotificationHelper::store_laporan_cu($kelas,'Mengubah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanCu::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		NotificationHelper::store_laporan_cu($kelas,'Menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
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

	public function countDraft()
	{
			$id = \Auth::user()->id;

			$table_data = LaporanCuDraft::where('id_user',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
