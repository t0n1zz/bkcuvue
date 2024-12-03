<?php

namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\MitraOrang;
use App\KegiatanPeserta;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class MitraOrangController extends Controller
{

	protected $imagepath = 'images/mitra_orang/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Mitra Perserorangan";

	public function index()
	{
		$table_data = MitraOrang::with('Cu','Villages', 'Districts', 'Regencies', 'Provinces')->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id)
	{
		$table_data = MitraOrang::with('Cu','Villages', 'Districts', 'Regencies', 'Provinces')->where('id_cu',$id)->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
			->json([
				'model' => $table_data
			]);
	}


	public function indexPeserta($kegiatan_id)
	{
		$kegiatanPeserta = KegiatanPeserta::where('kegiatan_id', $kegiatan_id)->whereNotNull('mitra_orang_id')->pluck('mitra_orang_id')->toArray();

		$table_data = MitraOrang::with('Villages', 'Districts', 'Regencies', 'Provinces')->whereNotIn('id', $kegiatanPeserta)->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function formatQuery($table_data)
	{
		foreach ($table_data as $t) {
			if ($t->pekerjaan_tingkat == 1) {
				$t->pekerjaan_tingkat = 'Pengurus';
			} else if ($t->pekerjaan_tingkat == 2) {
				$t->pekerjaan_tingkat = 'Pengawas';
			} else if ($t->pekerjaan_tingkat == 3) {
				$t->pekerjaan_tingkat = 'Komite';
			} else if ($t->pekerjaan_tingkat == 4) {
				$t->pekerjaan_tingkat = 'Penasihat';
			} else if ($t->pekerjaan_tingkat == 5) {
				$t->pekerjaan_tingkat = 'Senior Manajer';
			} else if ($t->pekerjaan_tingkat == 6) {
				$t->pekerjaan_tingkat = 'Manajer';
			} else if ($t->pekerjaan_tingkat == 7) {
				$t->pekerjaan_tingkat = 'Supervisor';
			} else if ($t->pekerjaan_tingkat == 8) {
				$t->pekerjaan_tingkat = 'Staf';
			} else if ($t->pekerjaan_tingkat == 9) {
				$t->pekerjaan_tingkat = 'Kontrak';
			} else if ($t->pekerjaan_tingkat == 10) {
				$t->pekerjaan_tingkat = 'Kolektor';
			} else if ($t->pekerjaan_tingkat == 11) {
				$t->pekerjaan_tingkat = 'Kelompok Inti';
			} else if ($t->pekerjaan_tingkat == 12) {
				$t->pekerjaan_tingkat = 'Supporting Unit';
			} else if ($t->pekerjaan_tingkat == 13) {
				$t->pekerjaan_tingkat = 'Vendor sMartCU';
			} else if ($t->pekerjaan_tingkat == 14) {
				$t->pekerjaan_tingkat = 'Magang';
			}
		}

		return $table_data;
	}

	public function create()
	{
		return response()
			->json([
				'form' => MitraOrang::initialize(),
				'rules' => MitraOrang::$rules,
				'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request, MitraOrang::$rules);

		$name = $request->name;

		// processing single image upload
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, '', $name);
		else
			$fileName = '';

		$kelas = MitraOrang::create($request->except('gambar') + [
			'gambar' => $fileName
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil ditambah',
				'id' => $kelas->id
			]);
	}

	public function edit($id)
	{
		$kelas = MitraOrang::with('Villages', 'Districts', 'Regencies', 'Provinces')->findOrFail($id);

		return response()
			->json([
				'form' => $kelas,
				'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, MitraOrang::$rules);

		$name = $request->name;

		$kelas = MitraOrang::findOrFail($id);

		// processing single image upload
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, $kelas->gambar, $name);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = MitraOrang::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
			]);
	}

	public function count()
	{
		$id = \Auth::user()->id_cu;

		if($id == 0){
				$table_data = MitraOrang::count();
		}else{
				$table_data = MitraOrang::where('id_cu',$id)->count();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function history()
	{
		$time = \Carbon\Carbon::now()->subMonths(6);

		$table_data = Revision::with('revisionable')->where('revisionable_type', 'App\MitraOrang')->where('created_at', '>=', $time)->orderBy('created_at', 'desc')->take(5);

		$history = collect();
		foreach ($table_data as $hs) {
			$n = collect($hs);
			$n->put('user', $hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
			]);
	}
}
