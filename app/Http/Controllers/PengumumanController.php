<?php
namespace App\Http\Controllers;

use DB;
use App\Pengumuman;
use App\Support\Helper;
use Illuminate\Http\Request;

class PengumumanController extends Controller{

	protected $message = 'Pengumuman';

	public function index()
	{
			$table_data = Pengumuman::with('cu')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id)
	{
		$table_data = Pengumuman::with('cu')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}


	public function create()
	{
		return response()
			->json([
					'form' => Pengumuman::initialize(),
					'rules' => Pengumuman::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Pengumuman::$rules);

		$name = $request->name;
	
		$kelas = Pengumuman::create($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Pengumuman::with('user')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Pengumuman::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Pengumuman::$rules);

		$name = $request->name;

		$kelas = Pengumuman::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = Pengumuman::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Pengumuman::count();
			}else{
					$table_data = Pengumuman::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
