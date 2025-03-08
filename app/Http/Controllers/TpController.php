<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Tp;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class TpController extends Controller{

	protected $imagepath = 'images/tp/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "TP/KP";

	public function index()
	{
		$table_data = Tp::with('Cu','Villages','Districts','Regencies','Provinces')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = Tp::with('Cu','Villages','Districts','Regencies','Provinces')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Tp::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function getCu($id)
	{
		$table_data = Tp::where('id_cu','=',$id)->select('id','no_tp','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Tp::initialize(),
					'rules' => Tp::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Tp::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'',$name);
		else
			$fileName = '';

		$kelas = Tp::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Tp ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Tp::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Tp::$rules);

		$name = $request->name;

		$kelas = Tp::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar,$name);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = Tp::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath  . $kelas->gambar . '.jpg');
			File::delete($this->imagepath  . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 'semua'){
					$table_data = TP::count();
			}else{
					$table_data = TP::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
		$time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\Tp')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

    $history = collect();		
		foreach($table_data as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
			]);
  }
}