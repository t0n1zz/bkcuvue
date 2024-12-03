<?php
namespace App\Http\Controllers;

use App\Fasilitator;
use App\FasilitatorJenisDiklat;
use Illuminate\Http\Request;
use App\Support\Helper;

class FasilitatorController extends Controller{

	public function index()
	{
    	$table_data = Fasilitator::with('Cu','jenis_diklat','anggota_cu')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}
  
  public function indexCu($id)
	{
		$table_data = Fasilitator::with('Cu','jenis_diklat','anggota_cu')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexJenisDiklat($id)
	{
		$table_data = FasilitatorJenisDiklat::where('id_fasilitator',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = Fasilitator::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Fasilitator::initialize(),
					'rules' => Fasilitator::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Fasilitator::$rules);

		$name = $request->name;

		$kelas = Fasilitator::create($request->all());
		
		if(!empty($request->jenis_diklat)){
			foreach($request->jenis_diklat as $a){
				$jenis_diklat_id = array_key_exists('jenis_diklat_id', $a) ? $a['jenis_diklat_id'] : null;

				$this->saveJenisDiklat(null, $kelas->id, $jenis_diklat_id);
			}
		}

		return response()
			->json([
				'saved' => true,
				'message' => 'Fasilitator ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function saveJenisDiklat($id, $id_fasilitator, $jenis_diklat_id)
	{
		if($id){
			$kelas = FasilitatorJenisDiklat::findOrFail($id);
		}else{
			$kelas = new FasilitatorJenisDiklat();
		}

		$kelas->fasilitator_id = $id_fasilitator;
		$kelas->jenis_diklat_id = $jenis_diklat_id;

		$kelas->save();
	}

	public function edit($id)
	{
		$kelas = Fasilitator::with('Cu','anggota_cu','jenis_diklat')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Fasilitator::$rules);

		$name = $request->name;

		$kelas = Fasilitator::findOrFail($id);

		$kelas->update($request->all());

		if(!empty($request->jenis_diklat)){
			foreach($request->jenis_diklat as $a){
				$jenis_diklat_id = array_key_exists('jenis_diklat_id', $a) ? $a['jenis_diklat_id'] : null;

				$this->saveJenisDiklat(array_key_exists('id', $a) ? $a['id'] : null, $kelas->id,$jenis_diklat_id);
			}
		}

		\App\JenisDiklat::flushCache();
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Fasilitator ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Fasilitator::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Fasilitator ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Fasilitator::count();
			}else{
					$table_data = Fasilitator::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}