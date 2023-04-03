<?php
namespace App\Http\Controllers;

use DB;
use App\ErrorLog;
use App\Support\Helper;
use Illuminate\Http\Request;

class ErrorLogController extends Controller{

	protected $message = 'ErrorLog';

	public function index()
	{
			$table_data = ErrorLog::advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function show($id)
	{
		$kelas = ErrorLog::findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function destroy($id)
	{
		$kelas = ErrorLog::findOrFail($id);

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			$table_data = ErrorLog::count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
