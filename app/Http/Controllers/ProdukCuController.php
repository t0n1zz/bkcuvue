<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\ProdukCu;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class ProdukCuController extends Controller{

	protected $imagepath = 'images/produk_cu/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Produk dan pelayanan";

	public function index()
	{
		$table_data = ProdukCu::with('Cu')->select(
			DB::raw('*, (SELECT name FROM cu WHERE produk_cu.id_cu = cu.id) as cu_name')
		)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = ProdukCu::where('id_cu',$id)->select(
			DB::raw('*, (SELECT name FROM cu WHERE produk_cu.id_cu = cu.id) as cu_name')
		)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = ProdukCu::where('id_cu',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCuJalinan($id)
	{
		$table_data = ProdukCu::where('id_cu',$id)->where('jalinan',1)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getSimpananCu($id)
	{
		$table_data = ProdukCu::where('id_cu',$id)->whereIn('tipe',['Simpanan Pokok','Simpanan Wajib','Simpanan Non Saham'])->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getPinjamanCu($id)
	{
		$table_data = ProdukCu::where('id_cu',$id)->whereIn('tipe',['Pinjaman Kapitalisasi','Pinjaman Umum','Pinjaman Produktif'])->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => ProdukCu::initialize(),
					'rules' => ProdukCu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,ProdukCu::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height, $request->gambar, '', $name);
		else
			$fileName = '';

		$kelas = ProdukCu::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = ProdukCu::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, ProdukCu::$rules);

		$name = $request->name;

		$kelas = ProdukCu::findOrFail($id);

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
		$kelas = ProdukCu::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
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

			if($id == 0){
					$table_data = ProdukCu::count();
			}else{
					$table_data = ProdukCu::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\ProdukCu')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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