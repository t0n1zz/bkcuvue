<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\AssesmentAccess;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AssesmentAccessController extends Controller{

	protected $message = "Self Assesment ACCESS Branding";

	public function index()
	{
		$table_data = AssesmentAccess::with('cu')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AssesmentAccess::initialize(),
					'rules' => AssesmentAccess::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AssesmentAccess::$rules);

		$periode = $request->periode;

		$kelas = AssesmentAccess::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$periode. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = AssesmentAccess::with('Cu')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, AssesmentAccess::$rules);

		$periode = $request->periode;

		$kelas = AssesmentAccess::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$periode. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = AssesmentAccess::findOrFail($id);
		$periode = $kelas->periode;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = AssesmentAccess::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\AssesmentAccess')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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