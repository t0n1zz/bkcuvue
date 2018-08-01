<?php
namespace App\Http\Controllers;

use DB;
use App\DiklatPus;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class DiklatPusController extends Controller{

	protected $width = 200;
	protected $height = 200;
	protected $message = "Diklat Puskopdit";

	public function index()
	{
		$table_data = DiklatPus::with('tempat','sasaran_hub.sasaran')->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = DiklatPus::with('tempat')->where('periode',$periode)->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => DiklatPus::initialize(),
					'rules' => DiklatPus::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,DiklatPus::$rules);

		$name = $request->name;


		$kelas = DiklatPus::create();
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = DiklatPus::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, DiklatPus::$rules);

		$name = $request->name;

		$kelas = DiklatPus::findOrFail($id);

		$kelas->update();	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = DiklatPus::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}