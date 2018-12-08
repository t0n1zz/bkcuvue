<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use App\Tp;
use App\LaporanTp;
use App\LaporanTpDraft;
use App\Support\ImageProcessing;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;

class LaporanTpDraftController extends Controller{

	protected $message = 'Laporan Tp [Draft]';

	public function index()
	{
		$id = Auth::user()->id;
		$table_data = LaporanTpDraft::with('Cu','Tp')->where('id_user',$id)->addSelect(['*',DB::raw('
			(IFNULL(laporan_tp_draft.l_biasa, 0) + IFNULL(laporan_tp_draft.l_lbiasa,0) + IFNULL(laporan_tp_draft.P_biasa,0) + IFNULL(laporan_tp_draft.P_lbiasa,0)) as total_anggota,
			(IFNULL(laporan_tp_draft.piutang_beredar,0)/IFNULL(laporan_tp_draft.aset,0)) as rasio_beredar,
			((IFNULL(laporan_tp_draft.piutang_lalai_1bulan,0) + IFNULL(laporan_tp_draft.piutang_lalai_12bulan,0))/IFNULL(laporan_tp_draft.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(laporan_tp_draft.piutang_beredar,0) - (IFNULL(laporan_tp_draft.piutang_lalai_1bulan,0) + IFNULL(laporan_tp_draft.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function store($id)
	{
		$kelas = LaporanTpDraft::findOrFail($id);
		$Tp = Tp::where('no_tp',$kelas->no_tp)->first();
		$kelas->id_tp = $Tp->id;
		$data = $kelas->toArray();
		unset($value['id']);
		unset($value['id_user']);
		unset($value['id_cu']);
		unset($value['no_ba']);   

		LaporanTp::insert($data);
		

		$kelas->delete();

		// $this->store_notification($request,'Menambah');
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}


	public function storeAll()
	{
		$id = \Auth::user()->id;

		$kelas = LaporanTpDraft::where('id_user',$id);
		$laporan = $kelas->get()->toArray();
		$cu = Cu::select('id','no_ba')->get()->toArray();
		$tp = Tp::select('id','no_tp')->get()->toArray();

		$merged = collect($laporan)->map(function ($value) use ($cu) {
				foreach($cu as $array){
						if($value["no_ba"] == $array["no_ba"]){
							$value["id_cu"] = $array["id"];
						}
				}
				return $value;
		});

		$merged = collect($laporan)->map(function ($value) use ($tp) {
				foreach($tp as $array){
						if($value["no_tp"] == $array["no_tp"]){
							$value["id_tp"] = $array["id"];
						}
				}
				return $value;
		});

		foreach ($merged as $key => $value) {
			unset($value['id']);
			unset($value['id_user']);
			unset($value['id_cu']);
			unset($value['no_ba']);
			$merged[$key] = $value;

			if (!isset($value['id_tp'])) {
				unset($merged[$key]);
			}
		};   

		LaporanTp::insert($merged->toArray());

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
		$kelas = LaporanTpDraft::findOrFail($id);
		$Tp = Tp::where('no_tp', $kelas->no_tp)->first();
		$kelas->id_tp = $Tp->id;
		$kelas->id_tp = 'konsolidasi';

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanTpDraft::$rules);

		$name = $request->name;

		$kelas = LaporanTpDraft::findOrFail($id);

		$kelas->update($request->except(['id_tp','id_tp']));

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanTpDraft::findOrFail($id);
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
		$kelas = LaporanTpDraft::where('id_user',$id);

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

			$table_data = LaporanTpDraft::where('id_user',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
