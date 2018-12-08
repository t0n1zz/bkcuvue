<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use App\Cu;
use App\LaporanCu;
use App\LaporanCuDraft;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;

class LaporanCuDraftController extends Controller{

	protected $message = 'Laporan Cu [Draft]';

	public function index()
	{
		$id = Auth::user()->id;
		$table_data = LaporanCuDraft::with('Cu')->where('id_user',$id)->addSelect(['*',DB::raw('
			(IFNULL(laporan_cu_draft.l_biasa, 0) + IFNULL(laporan_cu_draft.l_lbiasa,0) + IFNULL(laporan_cu_draft.P_biasa,0) + IFNULL(laporan_cu_draft.P_lbiasa,0)) as total_anggota,
			(IFNULL(laporan_cu_draft.piutang_beredar,0)/IFNULL(laporan_cu_draft.aset,0)) as rasio_beredar,
			((IFNULL(laporan_cu_draft.piutang_lalai_1bulan,0) + IFNULL(laporan_cu_draft.piutang_lalai_12bulan,0))/IFNULL(laporan_cu_draft.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(laporan_cu_draft.piutang_beredar,0) - (IFNULL(laporan_cu_draft.piutang_lalai_1bulan,0) + IFNULL(laporan_cu_draft.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function store($id)
	{
		$kelas = LaporanCuDraft::findOrFail($id);
		$cu = Cu::where('no_ba',$kelas->no_ba)->first();
		$kelas->id_cu = $cu->id;
		$data = $kelas->toArray();
		unset($data['id']);
		unset($data['id_user']);   

		$kelas2 = LaporanCu::insert($data);

		$kelas->delete();

		$this->store_notification($kelas2,'Mengupload');
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}


	public function storeAll()
	{
		$id = \Auth::user()->id;

		$kelas = LaporanCuDraft::where('id_user',$id);
		$laporan = $kelas->get()->toArray();
		$cu = Cu::select('id','no_ba')->get()->toArray();

		$merged = collect($laporan)->map(function ($value) use ($cu) {
				foreach($cu as $array){
						if($value["no_ba"] == $array["no_ba"]){
							$value["id_cu"] = $array["id"];
						}
				}
				return $value;
		});

		foreach ($merged as $key => $value) {
			unset($value['id']);
			unset($value['id_user']);
			$merged[$key] = $value;

			if (!isset($value['id_cu'])) {
				unset($merged[$key]);
			}
		};   

		$kelas2 = LaporanCu::insert($merged->toArray());

		$kelas->delete();

		// $this->store_notification($request,'Menambah');
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}
	
	public function edit($id)
	{
		$kelas = LaporanCuDraft::findOrFail($id);
		$cu = Cu::where('no_ba', $kelas->no_ba)->first();
		$kelas->id_cu = $cu->id;
		$kelas->id_tp = 'konsolidasi';

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanCuDraft::$rules);

		$name = $request->name;

		$kelas = LaporanCuDraft::findOrFail($id);

		$kelas->update($request->except(['id_cu','id_tp']));

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanCuDraft::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyAll()
	{
		$id = \Auth::user()->id;	
		$kelas = LaporanCuDraft::where('id_user',$id);

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id;

			$table_data = LaporanCuDraft::where('id_user',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	private function store_notification($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		if($id_cu == '0'){
			NotificationHelper::store_laporan($request->id_cu,$request->id,'BKCU','',$periode,$tipe);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			NotificationHelper::store_laporan('0',$request->id,$cu->name,'',$periode,$tipe);
		}
	}
}
