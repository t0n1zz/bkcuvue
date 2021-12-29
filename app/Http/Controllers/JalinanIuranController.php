<?php
namespace App\Http\Controllers;

use DB;
use App\ProdukCu;
use App\JalinanIuran;
use App\JalinanIuranAnggota;
use App\JalinanIuranAnggotaTotal;
use App\JalinanIuranProduk;
use Illuminate\Http\Request;
use App\Jobs\CreateIuranJalinan;

class JalinanIuranController extends Controller{

	protected $message = 'Iuran Jalinan';

	public function index()
	{
		$table_data = JalinanIuran::with('Cu')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

  public function indexCu($id)
	{
		$table_data = JalinanIuran::with('Cu')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAnggota($id, $cu, $lokasi)
	{
		$t_data = array();
		$produk_data = ProdukCu::where('id_cu',$cu)->where('jalinan',1)->get();

		$kelas = JalinanIuranAnggotaTotal::with('anggota')->where('jalinan_iuran_id',$id)->where('lokasi', $lokasi)->chunk(100, function ($query) use (&$t_data, &$produk_data){
			foreach($query as $anggotaTotal){
				foreach($anggotaTotal->anggota as $anggota){
					foreach($produk_data as $produk){
						if($produk->id == $anggota->produk_cu_id){
							$anggotaTotal["X$produk->id"] = $anggota->saldo;
						}
					}
					$anggotaTotal['no_ba'] = $anggota->no_ba;
					$anggotaTotal['nik'] = $anggota->nik;
					$anggotaTotal['name'] = $anggota->name;
					$anggotaTotal['tanggal_cair'] = $anggota->tanggal_cair;
					$anggotaTotal['tanggal_lahir'] = $anggota->tanggal_lahir;
					$anggotaTotal['tanggal_masuk'] = $anggota->tanggal_masuk;
				}
				if($produk->tipe == 'Simpanan Pokok' || $produk->tipe == 'Simpanan Wajib' || $produk->tipe == 'Simpanan Non Saham'){
					$anggotaTotal['total'] = $anggotaTotal->total_simp;
				}else{
					$anggotaTotal['total'] = $anggotaTotal->total_pinj;
				}
				$anggotaTotal['pengurang'] = $anggotaTotal->total - $anggotaTotal->plafon;
			}
			$t_data = $query ;
		});

		return response()
		->json([
			'model' => $t_data
		]);
	}

	public function create($cu, $bulan, $tahun)
	{
		$dateString = $tahun . '-' . $bulan . '-01';
		$lastDateOfMonth = date("Y-m-t", strtotime($dateString));

		$table_data = JalinanIuran::where('id_cu',$cu)->where('periode', $lastDateOfMonth)->first();
		
		if(!$table_data){
			CreateIuranJalinan::dispatch($cu, $lastDateOfMonth);

			return response()
				->json([
					'saved' => true,
					'message' => 'Iuran Jalinan periode ' .$lastDateOfMonth. ' berhasil ditambah'
				]);	
		}else{
			return response()
				->json([
					'saved' => false,
					'message' => 'Iuran Jalinan periode ' .$lastDateOfMonth. ' sudah ada, silahkan cek kembali',
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
				'message' => 'Iuran Jalinan periode ' .$periode. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = JalinanIuran::with('produk.produk')->findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		// $this->validate($request,JalinanIuran::$rules);

		$periode = $request->periode;

		$kelas = JalinanIuran::findOrFail($id);

		$cu = \Auth::user()->id_cu;

		if($cu == 0){
			if($kelas->status == 0){
				$kelas->status = 1;
			}elseif($kelas->status == 1){
				$kelas->status = 2;
			}elseif($kelas->status == 2){
				$kelas->status = 1;
			}
		}else{
			if($kelas->status == 0){
				$kelas->status = 1;
			}elseif($kelas->status == 1){
				$kelas->status = 0;
			}
		}

		$kelas->update();
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Iuran Jalinan periode  ' .$periode. ' berhasil diubah',
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
				'message' => 'Iuran Jalinan periode  ' .$periode. 'berhasil dihapus'
			]);
	}
	
}