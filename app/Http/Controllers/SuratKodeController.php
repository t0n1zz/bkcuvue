<?php
namespace App\Http\Controllers;


use DB;
use Auth;
use App\SuratKode;
use Illuminate\Http\Request;

class SuratKodeController extends Controller{


	public function index()
	{
			DB::statement(DB::raw('set @cnt:=0'));

    	$table_data = SuratKode::with('Cu')->withCount('hasSurat')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$id_cu = Auth::user()->id_cu;
		$periode = \Carbon\Carbon::now()->year;
		$table_data = SuratKode::where('id_cu',$id_cu)->where('periode',$periode)->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCu($id)
	{
		$table_data = SuratKode::with('Cu')->withCount('hasSurat')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = SuratKode::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => SuratKode::initialize(),
					'rules' => SuratKode::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,SuratKode::$rules);

		$name = $request->name;
		
		$kelas = SuratKode::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kode ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = SuratKode::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,SuratKode::$rules);

		$name = $request->name;

		$kelas = SuratKode::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kode ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = SuratKode::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Kode ' .$name. 'berhasil dihapus'
			]);
	}
}