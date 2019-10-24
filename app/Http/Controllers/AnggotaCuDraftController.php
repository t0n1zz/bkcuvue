<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use App\Cu;
use App\AnggotaCu;
use App\AnggotaCuDraft;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;

class AnggotaCuDraftController extends Controller{

	protected $message = 'Anggota CU';

	public function index()
	{
		$table_data = AnggotaCuDraft::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_not_keluar', function($query) use ($cu, $tp){ 
			if($tp != 'semua'){
				$query->where('anggota_cu_cu.cu_id',$cu)->where('anggota_cu_cu.tp_id',$tp);
			}else{
				$query->where('anggota_cu_cu.cu_id',$cu);
			}
		})->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function store($id)
	{
		$kelas = AnggotaCuDraft::findOrFail($id);
		$data = $kelas->toArray();

		$kelas2 = AnggotaCu::insert($data);

		$kelas->delete();
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}


	public function storeAll()
	{
		$id = \Auth::user()->id;

		$kelas = AnggotaCuDraft::where('id_user',$id);
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

		$kelas2 = AnggotaCu::insert($merged->toArray());

		$kelas->delete();
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}
	
	public function edit($id)
	{
		$kelas = AnggotaCuDraft::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,AnggotaCuDraft::$rules);

		$name = $request->name;

		$kelas = AnggotaCuDraft::findOrFail($id);

		$kelas->update($request->except(['id_cu','id_tp']));

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = AnggotaCuDraft::findOrFail($id);
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
		$kelas = AnggotaCuDraft::where('id_user',$id);

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

			$table_data = AnggotaCuDraft::where('id_user',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}


}
