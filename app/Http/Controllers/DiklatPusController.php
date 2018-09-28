<?php
namespace App\Http\Controllers;

use DB;
use App\DiklatPus;
use App\DiklatPusSasaranHub;
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
		$table_data = DiklatPus::with('tempat','sasaran','Regencies')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = DiklatPus::with('tempat')->where('periode',$periode)->advancedFilter();

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

		// dd(array_flatten($request->sasaran));

		$kelas = DiklatPus::create($request->all());

		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		// $this->input_sasaran($kelas->id,$request);
 
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = DiklatPus::with('tempat','sasaran')->findOrFail($id);

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

		$kelas->update($request->all());
		
		$this->input_sasaran($id,$request);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function input_sasaran($id_kegiatan,$request)
	{
			$sasarans = $request->sasaran;

			if(!empty($sasarans) && !empty($id_kegiatan)){
					DiklatPusSasaranHub::where('id_kegiatan',$id_kegiatan)->delete();

					foreach($sasarans as $sasaran){
						foreach($sasaran as $s){
							$kelasSasaran = new DiklatPusSasaranHub();
							$kelasSasaran->id_kegiatan = $id_kegiatan;
							$kelasSasaran->id_sasaran = $s;
							$kelasSasaran->save();
						}
					}
			}
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