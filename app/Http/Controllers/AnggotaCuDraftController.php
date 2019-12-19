<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use Validator;
use App\Cu;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuDraft;
use App\AnggotaCuCuDraft;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;

class AnggotaCuDraftController extends Controller{

	protected $message = 'Anggota CU';

	public function index($cu, $tp)
	{
		if($cu == 'semua'){
			$table_data = AnggotaCuDraft::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->advancedFilter();
		}else{
			$table_data = AnggotaCuDraft::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu_not_keluar', function($query) use ($cu, $tp){ 
				if($tp != 'semua'){
					$query->where('anggota_cu_cu_draft.cu_id',$cu)->where('anggota_cu_cu_draft.tp_id',$tp);
				}else{
					$query->where('anggota_cu_cu_draft.cu_id',$cu);
				}
			})->advancedFilter();
		}

		$table_data = $this->formatQuery($table_data);
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function formatQuery($table_data){
		foreach($table_data as $t){
			$t->nik = $t->nik ? $t->nik . "​ " : '';
			$t->npwp = $t->npwp ? $t->npwp . "​ " : '';
			$t->no_ba = '';
			$t->tanggal_masuk = '';
			foreach($t->anggota_cu_cu_not_keluar as $ta){
				$tp_name = $ta->tp ? ' | ' . $ta->tp->name : '';
				$cu_name = $ta->cu ? $ta->cu->name : '';
				$t->no_ba .= $cu_name . $tp_name . ' : ' .$ta->no_ba;
				$t->tanggal_masuk .= ' CU ' . $ta->cu->name. ': ' .$ta->tanggal_masuk;
			}
		};

		return $table_data;
	}

	public function store($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = AnggotaCuDraft::findOrFail($id);
			$kelas2 = AnggotaCuCuDraft::where('anggota_cu_draft_id', $id);
			$kelas->nik = preg_replace('/[^A-Za-z0-9]/', '',$kelas->nik);

			$data = $kelas->toArray();
			$data2 = $kelas2->get()->toArray();

			unset($data['id']);
			unset($data2['id']);

			$kelas3 = AnggotaCu::create($data);

			$data2 = array_map(function($dat) use ($kelas3) {
					return array(
							'anggota_cu_id' => $kelas3->id,
							'cu_id' => $dat['cu_id'],
							'tp_id' => $dat['tp_id'],
							'no_ba' => $dat['no_ba'],
							'tanggal_masuk' => $dat['tanggal_masuk'],
							'tanggal_keluar' => $dat['tanggal_keluar'],
							'keterangan_masuk' => $dat['keterangan_masuk'],
							'keterangan_keluar' => $dat['keterangan_keluar'],
							'created_at' => $dat['created_at'],
							'updated_at' => $dat['updated_at'],
					);
			}, $data2);
			
			$kelas4 = AnggotaCuCu::insert($data2);

			$kelas->delete();
			$kelas2->delete();
			
			\DB::commit();

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' berhasil ditambah'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}		
	}


	public function storeAll($cu)
	{
		\DB::beginTransaction(); 
		try{
			if($cu == 'semua'){
				$kelas = AnggotaCuDraft::with('anggota_cu_cu_not_keluar');
			}else{
				$kelas = AnggotaCuDraft::with('anggota_cu_cu_not_keluar')->whereHas('anggota_cu_not_keluar', function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu);
				});
				$kelas->nik = preg_replace('/[^A-Za-z0-9]/', '',$kelas->nik);
			}

			foreach($kelas->get() as $item){
				$kelas2 = AnggotaCuCuDraft::where('anggota_cu_draft_id', $item->id);

				$data = $item->toArray(); 
				$data2 = $kelas2->get()->toArray(); 

				unset($data['id']);
				unset($data2['id']);

				$kelas3 = AnggotaCu::create($data);

				$data2 = array_map(function($dat) use ($kelas3) {
						return array(
								'anggota_cu_id' => $kelas3->id,
								'cu_id' => $dat['cu_id'],
								'tp_id' => $dat['tp_id'],
								'no_ba' => $dat['no_ba'],
								'tanggal_masuk' => $dat['tanggal_masuk'],
								'tanggal_keluar' => $dat['tanggal_keluar'],
								'keterangan_masuk' => $dat['keterangan_masuk'],
								'keterangan_keluar' => $dat['keterangan_keluar'],
								'created_at' => $dat['created_at'],
								'updated_at' => $dat['updated_at'],
						);
				}, $data2);

				$kelas4 = AnggotaCuCu::insert($data2);
				
				$kelas2->delete();
			}

			$kelas->delete();
			
			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' berhasil ditambah'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}		
	}
	
	public function edit($id)
	{
		$kelas = AnggotaCuDraft::with('anggota_cu_cu.cu','anggota_cu_cu.tp','Villages','Districts','Regencies','Provinces')->findOrFail($id);

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
			$rules = AnggotaCu::$rules;
			$rules['nik'] = $rules['nik'] . ',id,' . $id;
			$validationCertificate  = Validator::make($request->all(), $rules); 
			$name = $request->name;

			$kelas = AnggotaCuDraft::findOrFail($id);
			// dd($request->all());
			$kelas->update($request->all());

			$cuArray = $this->syncCu($request, $kelas);
			
			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' ' .$name. ' berhasil diubah'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}

	private function syncCu($request, $kelas)
	{
		if($request->anggota_cu_cu){
			$cus = $request->anggota_cu_cu;
			unset($cus['id']);
			unset($cus['name']);

			$cuArray = array();

			foreach($cus as $cu){
				$cuArray[$cu['no_ba']] = [
					'cu_id' => array_key_exists('cu_id', $cu) ? $cu['cu_id'] : null,
					'tp_id' => array_key_exists('tp_id', $cu) ? $cu['tp_id'] : null,
					'no_ba' => array_key_exists('no_ba', $cu) ? $cu['no_ba'] : null,
					'tanggal_masuk' => array_key_exists('tanggal_masuk', $cu) ? $cu['tanggal_masuk'] : null,
					'keterangan_masuk' => array_key_exists('keterangan_masuk', $cu) ? $cu['keterangan_masuk'] : null
				];
			}

			$kelas->anggota_cu()->sync($cuArray);
		}
		
		if($request->id_cu){
			$kelasCu = AnggotaCuCuDraft::where('anggota_cu_draft_id',$kelas->id)->first();

			if($kelasCu){
				$kelasCu = AnggotaCuCuDraft::where('anggota_cu_draft_id',$kelas->id);
				$kelasCu->update([
					'anggota_cu_draft_id' => $kelas->id,
					'cu_id' => $request->id_cu,
					'tp_id' => $request->tp_id,
					'no_ba' => $request->no_ba,
					'tanggal_masuk' => $request->tanggal_masuk,
					'keterangan_masuk' => $request->keterangan_masuk,
				]);
			}else{
				AnggotaCuCuDraft::create([
					'anggota_cu_draft_id' => $kelas->id,
					'cu_id' => $request->id_cu,
					'tp_id' => $request->tp_id,
					'no_ba' => $request->no_ba,
					'tanggal_masuk' => $request->tanggal_masuk,
					'keterangan_masuk' => $request->keterangan_masuk
				]);
			}
		}
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = AnggotaCuDraft::findOrFail($id);
			$name = $kelas->name;

			$kelas->delete();
			AnggotaCuCu::where('anggota_cu_id', $id)->delete();

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

	public function destroyAll($cu)
	{
		\DB::beginTransaction(); 
		try{
			if($cu == 'semua'){
				$kelas = AnggotaCuDraft::with('anggota_cu_cu_not_keluar');
			}else{
				$kelas = AnggotaCuDraft::with('anggota_cu_cu_not_keluar')->whereHas('anggota_cu_not_keluar', function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu);
				});
			}
			$kelas->delete();

			$kelas2 = AnggotaCuCuDraft::where('cu_id',$cu);
			$kelas2->delete();
			\DB::commit();

			return response()
				->json([
					'deleted' => true,
					'message' => $this->message. ' berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function count($cu)
	{
		if($cu == 'semua'){
			$table_data = AnggotaCuDraft::count();
		}else{
			$table_data = AnggotaCuDraft::with('anggota_cu_cu_not_keluar')->whereHas('anggota_cu_not_keluar', function($query) use ($cu){ 
				$query->where('anggota_cu_cu.cu_id',$cu);
			})->count();
		}
		
		return response()
		->json([
				'model' => $table_data
		]);
	}

}
