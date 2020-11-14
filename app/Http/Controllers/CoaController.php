<?php
namespace App\Http\Controllers;

use DB;
use Validator;
use App\Coa;
use Illuminate\Http\Request;

class CoaController extends Controller{


	public function index()
	{
    	$table_data = Coa::with('induk')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Coa::orderby('kode','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }

	public function create()
	{
		return response()
			->json([
					'form' => Coa::initialize(),
					'rules' => Coa::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Coa::$rules);

		\DB::beginTransaction(); 
		try{
			
			$name = $request->name;
			$tipe = '';
			$level = '';

			if($request->id_induk == 0){
				$tipe = 'G';
				$level = 1;
			}else{
				$kelasInduk = Coa::findOrFail($request->id_induk);
				
				$tipe = 'P';
				$level = $kelasInduk->level + 1;

				if($kelasInduk->tipe == 'P'){
					$kelasInduk->tipe = 'G';
					$kelasInduk->update();
				}
			}

			$kelas = Coa::create($request->except('tipe','level') + [
				'tipe' => $tipe,
				'level' => $level
			]);

			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => 'CoA ' .$name. ' berhasil ditambah',
					'id' => $kelas->id
				]);	
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}

	public function edit($id)
	{
		$kelas = Coa::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$rules = Coa::$rules;
		$rules['kode'] = $rules['kode'] . ',id,' . $id;
		$validationCertificate  = Validator::make($request->all(), $rules); 

		\DB::beginTransaction(); 
		try{
			$kelas = Coa::findOrFail($id);

			$name = $request->name;
			$tipe = '';
			$level = '';
			$id_induk_sebelumnya = $kelas->id_induk;

			if($request->id_induk == 0){
				$tipe = 'G';
				$level = 1;
			}else{
				$kelasInduk = Coa::findOrFail($request->id_induk);
				
				$tipe = 'P';
				$level = $kelasInduk->level + 1;

				if($kelasInduk->tipe == 'P'){
					$kelasInduk->tipe = 'G';
					$kelasInduk->update();
				}
			}

			$kelas->update($request->except('tipe','level') + [
				'tipe' => $tipe,
				'level' => $level
			]);

			if($id_induk_sebelumnya != 0){
				$kelasAdaIndukSebelumnya = Coa::where('id_induk', $id_induk_sebelumnya)->first();

				if(!$kelasAdaIndukSebelumnya){
					$kelasIndukSebelumnya = Coa::findOrFail($id_induk_sebelumnya);
					if($kelasIndukSebelumnya->tipe == 'G'){
						$kelasIndukSebelumnya->tipe = 'P';
						$kelasIndukSebelumnya->update();
					}
				}
			}

			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => 'CoA ' .$name. ' berhasil diubah',
					'id' => $kelas->id
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function destroy($id)
	{
		$kelas = Coa::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'CoA ' .$name. 'berhasil dihapus'
			]);
	}
}