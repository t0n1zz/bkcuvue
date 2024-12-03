<?php
namespace App\Http\Controllers;

use App\Mentor;
use App\MentorKeahlian;
use Illuminate\Http\Request;
use App\Support\Helper;

class MentorController extends Controller{

	public function index()
	{
    	$table_data = Mentor::with('Cu','keahlian','anggota_cu')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}
  
  public function indexCu($id)
	{
		$table_data = Mentor::with('Cu','keahlian','anggota_cu')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexKeahlian($id)
	{
		$table_data = MentorKeahlian::where('id_mentor',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = Mentor::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Mentor::initialize(),
					'rules' => Mentor::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Mentor::$rules);

		$name = $request->name;

		$kelas = Mentor::create($request->all());
		
		if(!empty($request->keahlian)){
			foreach($request->keahlian as $a){
				$keahlian_id = array_key_exists('keahlian_id', $a) ? $a['keahlian_id'] : null;

				$this->saveKeahlian(null, $kelas->id, $keahlian_id);
			}
		}

		return response()
			->json([
				'saved' => true,
				'message' => 'Mentor ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function saveKeahlian($id, $id_mentor, $keahlian_id)
	{
		if($id){
			$kelas = MentorKeahlian::findOrFail($id);
		}else{
			$kelas = new MentorKeahlian();
		}

		$kelas->mentor_id = $id_mentor;
		$kelas->keahlian_id = $keahlian_id;

		$kelas->save();
	}

	public function edit($id)
	{
		$kelas = Mentor::with('Cu','anggota_cu','keahlian')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Mentor::$rules);

		$name = $request->name;

		$kelas = Mentor::findOrFail($id);

		$kelas->update($request->all());

		if(!empty($request->keahlian)){
			foreach($request->keahlian as $a){
				$keahlian_id = array_key_exists('keahlian_id', $a) ? $a['keahlian_id'] : null;

				$this->saveKeahlian(array_key_exists('id', $a) ? $a['id'] : null, $kelas->id,$keahlian_id);
			}
		}

		\App\Keahlian::flushCache();
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Mentor ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Mentor::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Mentor ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Mentor::count();
			}else{
					$table_data = Mentor::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}