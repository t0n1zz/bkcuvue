<?php
namespace App\Http\Controllers;

use DB;
use App\Saran;
use App\Support\Helper;
use Illuminate\Http\Request;

class SaranController extends Controller{

	protected $message = 'Saran';

	public function index()
	{
			$table_data = Saran::with('user.cu','user.aktivis')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Saran::initialize(),
					'rules' => Saran::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Saran::$rules);
	
		$kelas = Saran::create($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Saran::with('user')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function destroy($id)
	{
		$kelas = Saran::findOrFail($id);

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Saran::count();
			}else{
					$table_data = Saran::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
