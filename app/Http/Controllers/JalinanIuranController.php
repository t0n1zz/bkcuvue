<?php
namespace App\Http\Controllers;

use DB;
use App\JalinanIuran;
use App\JalinanIuranAnggota;
use App\JalinanIuranProduk;
use Illuminate\Http\Request;

class JalinanIuranController extends Controller{


	public function index()
	{
    	$table_data = JalinanIuran::with('Cu')->advancedFilter();

			foreach($table_data as $t){
				$t->total = $this->tunas + $this->lintang;
			}

    	return response()
			->json([
				'model' => $table_data
			]);
	}

  public function indexCu($id)
	{
		$table_data = JalinanIuran::with('Cu')->where('id_cu',$id)->advancedFilter();

		foreach($table_data as $t){
			$t->total = $this->tunas + $this->lintang;
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create($cu, $bulan, $tahun)
	{
		$dateString = $tahun . '-' . $bulan . '-01';
		$lastDateOfMonth = date("Y-m-t", strtotime($dateString));

		$table_data = JalinanIuran::with('Cu')->where('id_cu',$cu)->where('periode', $lastDateOfMonth)->first();

		if($table_data){
			return response()
			->json([
				'form' => $table_data,
				'rules' => JalinanIuran::$rules,
				'option' => []
			]);
		}else{
			$produk_data = \App\ProdukCu::where('id_cu',$cu)->select('id', 'id_cu', 'name','tipe','jalinan')->where('jalinan', 1)->get();

			$simpanan_usia_nol = 0;
			$simpanan_usia_1_70 = 0;
			$simpanan_usia_60_70 = 0;

			$anggota_data = \App\AnggotaCuCu::with('anggota_cu_simple','anggota_produk_cu')->where('cu_id', $cu)
			->where('tanggal_masuk','<',$lastDateOfMonth)
			->whereHas('anggota_cu', function ($q){
				$q->whereNull('status_jalinan');
			})
			->select('id','anggota_cu_id','cu_id')
			->chunk(1000, function ($qs) use (&$total_simpanan, &$produk_data){
				foreach($qs as $q){
					foreach($q->anggota_produk_cu as $p){
						foreach($produk_data as $produk){
							// semua produk
							if($produk->id == $p->produk_cu_id){
									$produk->saldo += $p->saldo;
							}

							if($produk->tipe == 'Simpanan Pokok' || $produk->tipe == 'Simpanan Wajib' || $produk->tipe == 'Simpanan Non Saham'){
								$tanggal_lahir = \Carbon\Carbon::parse($q->anggota_cu->tanggal_lahir)->format('d/m/y');
								$tanggal_masuk = \Carbon\Carbon::parse($q->tanggal_masuk)->format('d/m/y');
								$date0 = \Carbon\Carbon::today()->subYears(0)->format('d/m/y');
								$date1 = \Carbon\Carbon::today()->subYears(1)->format('d/m/y');
								$date60 = \Carbon\Carbon::today()->subYears(60)->format('d/m/y');
								$date70 = \Carbon\Carbon::today()->subYears(70)->format('d/m/y');

								if($tanggal_lahir > $date0 && $tanggal_lahir < $date1){
									if($produk->id == $p->produk_cu_id){
										if($p->saldo > 5000000){
											$simpanan_usia_nol += ($p->saldo - 5000000);
										}
									}
								}

								if($tanggal_lahir > $date1 && $tanggal_lahir < $date70){
									if($produk->id == $p->produk_cu_id){
										if($p->saldo > 50000000){
											$simpanan_usia_1_70 += ($p->saldo - 50000000);
										}
									}
								}

								if($tanggal_masuk >= $date60 && $tanggal_lahir <= $date70){
									if($produk->id == $p->produk_cu_id){
										if($p->saldo > 10000000){
											$simpanan_usia_60_70 += ($p->saldo - 10000000);
										}
									}
								}
							}else{

							}
						}
					}
				}
			});

			return response()
				->json([
						'form' => JalinanIuran::initialize(),
						'produk_data' => $produk_data,
						'rules' => JalinanIuran::$rules,
						'option' => []
				]);
		}
	}

	public function store(Request $request)
	{
		$this->validate($request,JalinanIuran::$rules);

		$periode = $request->periode;

		$kelas = JalinanIuran::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Iuran JALINAN periode ' .$periode. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = JalinanIuran::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,JalinanIuran::$rules);

		$periode = $request->periode;

		$kelas = JalinanIuran::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Iuran JALINAN periode  ' .$periode. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = JalinanIuran::findOrFail($id);
		$periode = $kelas->periode;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Iuran JALINAN periode  ' .$periode. 'berhasil dihapus'
			]);
	}
}