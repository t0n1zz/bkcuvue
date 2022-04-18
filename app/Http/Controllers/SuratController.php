<?php
namespace App\Http\Controllers;

use DB;
use App\Surat;
use App\SuratKode;
use App\SuratKodeTemp;
use App\SuratKategori;
use App\Support\Helper;
use App\Dokumen;
use App\DokumenKategori;
use Illuminate\Http\Request;
use File;
use Image;
use Auth;

class SuratController extends Controller{

	protected $filepath = 'files/dokumen/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Surat';

	public function indexCu($cu, $tipe, $periode)
	{
		if($periode == 'semua'){
			if($tipe == 'semua'){
				$table_data = Surat::with('kategori','tipe','Cu','dokumen')
					->where('id_cu',$cu)
					->advancedFilter();
			}else{
				$table_data = Surat::with('kategori','tipe','Cu','dokumen')
					->where('id_cu',$cu)
					->where('id_surat_kode',$tipe)
					->advancedFilter();
			}
		}else{
			if($tipe == 'semua'){
				$table_data = Surat::with('kategori','tipe','Cu','dokumen')
					->where('id_cu',$cu)
					->where('periode',$periode)
					->advancedFilter();
			}else{
				$table_data = Surat::with('kategori','tipe','Cu','dokumen')
					->where('id_cu',$cu)
					->where('periode',$periode)
					->where('id_surat_kode',$tipe)
					->advancedFilter();
			}
		}
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriode($cu)
	{
		$table_data = SuratKode::where('id_cu',$cu)->distinct('periode')->pluck('periode');

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getKode($id)
	{

		$id_user = Auth::user()->id;
		$id_cu = Auth::user()->id_cu;
		$periode = \Carbon\Carbon::now()->year;
		$bulan = $this->numberToRomanRepresentation(\Carbon\Carbon::now()->month);

		$suratKode = SuratKode::findOrFail($id);
		$suratKategori = SuratKategori::where('id_surat_kode',$suratKode->id)->get();

		// check if there is blocking surat kode by this user
		$suratKodeTemp = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->where('id_user', $id_user)->whereNull('id_surat')->first();
			
		// if yes then use the blocking surat kode by this user
		if($suratKodeTemp){		
			if(time() >= strtotime($suratKodeTemp->created_at) + 1800){
				$suratKodeTemp->delete();
				$kode = $suratKode;

				$suratKodeTemp2 = SuratKodeTemp::create([
					'id_surat_kode' => $kode->id,
					'id_user' => $id_user,
					'kode' => $kode->kode,
					'periode' => $periode,
					'bulan' => $bulan
				]);

				return response()
					->json([
							'model' => [ 
								'kategori' => $suratKategori,
								'suratKode' => $kode,
								'kode' => $kode->kode,
								'periode' => $periode,
								'bulan' => $bulan,
								'waktu' => (strtotime($suratKodeTemp2->created_at) + 1800 - time())
							],
					]);
			}else{
				return response()
					->json([
							'model' => [ 
								'kategori' => $suratKategori,
								'suratKode' => $suratKode,
								'kode' => $suratKode->kode,
								'periode' => $periode,
								'bulan' => $bulan,
								'waktu' => (strtotime($suratKodeTemp->created_at) + 1800 - time())
							],
					]);
			}
		// if no 
		}else{

			// check if there is blocking surat kode by general
			$suratKodeTempKosong = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->whereNull('id_surat')->first();

			// if yes then use the blocking surat kode by general
			if($suratKodeTempKosong){
				// if more than 30 minutes
				if(time() >= strtotime($suratKodeTempKosong->created_at) + 1800)
				{
					$suratKodeTempKosong->delete();

					$kode = $suratKode;
		
					$suratKodeTemp2 = SuratKodeTemp::create([
						'id_surat_kode' => $kode->id,
						'id_user' => $id_user,
						'kode' => $kode->kode,
						'periode' => $periode,
						'bulan' => $bulan,
					]);

					return response()
						->json([
								'model' => [ 
									'kategori' => $suratKategori,
									'suratKode' => $kode,
									'kode' => $kode->kode,
									'periode' => $periode,
									'bulan' => $bulan,
									'waktu' => (strtotime($suratKodeTemp2->created_at) + 1800 - time())
								],
						]);
				}else{
					$kode = SuratKode::where('id_cu',$id_cu)->where('periode',$periode)->where('kode', $suratKodeTempKosong->kode)->first();

					$kode->kode = $kode->kode + 1;

					$suratKodeTemp2 = SuratKodeTemp::create([
						'id_surat_kode' => $kode->id,
						'id_user' => $id_user,
						'kode' => $kode->kode,
						'periode' => $periode,
						'bulan' => $bulan
					]);

					return response()
						->json([
								'model' => [ 
									'kategori' => $suratKategori,
									'suratKode' => $kode,
									'kode' => $kode->kode,
									'periode' => $periode,
									'bulan' => $bulan,
									'waktu' => (strtotime($suratKodeTemp2->created_at) + 1800 - time())
								],
						]);
				}
			// if no then use recent surat kode	
			}else{
				$kode = $suratKode;
		
				$suratKodeTemp2 = SuratKodeTemp::create([
					'id_surat_kode' => $kode->id,
					'id_user' => $id_user,
					'kode' => $kode->kode,
					'periode' => $periode,
					'bulan' => $bulan
				]);

				return response()
					->json([
							'model' => [ 
								'kategori' => $suratKategori,
								'suratKode' => $suratKode,
								'kode' => $kode->kode,
								'periode' => $periode,
								'bulan' => $bulan,
								'waktu' => (strtotime($suratKodeTemp2->created_at) + 1800 - time())
							],
					]);
			}
		}
	}

	public function create()
	{
		return response()
			->json([
					'form' => Surat::initialize(),
					'rules' => Surat::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Surat::$rules);

		$name = $request->name;

		$suratKodeTempKosong = SuratKodeTemp::where('id_surat_kode',$request->id_surat_kode)->where('kode', $request->kode)->whereNull('id_surat')->first();

		if($suratKodeTempKosong){
			$id_cu = Auth::user()->id_cu;
			$periode = \Carbon\Carbon::now()->year;

			$format = $request->format;
			$formatedName = '';
			$fileExtension = 'link';

			if($format == 'upload'){
				$file = $request->content;
				
				$fileExtension = $file->getClientOriginalExtension();
				$filename = $file->getClientOriginalName();
				$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). '.' . $fileExtension;
				$file->move($this->filepath,$formatedName);
			}

			$dokumenKategori = DokumenKategori::where('id_cu',$id_cu)->where('name','surat')->first();

			if(!$dokumenKategori){
				$dokumenKategori = DokumenKategori::create([
					'id_cu' => $id_cu,
					'name' => 'surat',
					'slug' => 'surat',
					'deskripsi' => 'surat'
				]);
			}

			$kelasDokumen = Dokumen::create([ 
				'id_cu' => $id_cu,
				'id_dokumen_kategori' => $dokumenKategori->id,
				'name' => $request->hal,
				'filename' => $formatedName,
				'link' => $request->link,
				'format' => $format,
				'tipe' => $fileExtension,
				'status' => 'INTERNAL',
				'keterangan' => $request->perihal
			]);

			$request['id_surat_kode'] = $suratKodeTempKosong->id;

			$kelas = Surat::create($request->except('id_dokumen') + [
				'id_dokumen' => $kelasDokumen->id
			]);

			$suratKode = SuratKode::where('id_cu',$id_cu)->where('periode', $periode)->first();
			if($suratKode->kode == $request->kode){
				$suratKode->kode = $request->kode + 1;
				$suratKode->update();
			}

			$suratKodeTempKosong->id_surat = $kelas->id;
			$suratKodeTempKosong->update();

			return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
		}else{
			return response()
			->json([
				'saved' => false,
				'message' => $this->message. ' ' .$name. ' tidak berhasil ditambah, silahkan coba lagi.'
			]);
		}
	}

	public function edit($id)
	{
		$kelas = Surat::findOrFail($id);
		$suratKategori = SuratKategori::where('id_surat_kode',$kelas->id_surat_kode)->get();

		return response()
				->json([
						'model' => [
							'kategori' => $suratKategori,
						],
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Surat::$rules);

		$name = $request->name;

		$kelas = Surat::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = Surat::findOrFail($id);
			$name = $kelas->name;

			$kelasDokumen = Dokumen::findOrFail($kelas->id_dokumen);

			if(!empty($kelasDokumen->filename)){
				File::delete($this->filepath . $kelasDokumen->filename);
			}
	
			$kelasDokumen->delete();
	
			$kelas->delete();

			\DB::commit();
			return response()
				->json([
					'deleted' => true,
					'message' => $this->message. ' ' .$name. 'berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Surat::count();
			}else{
					$table_data = Surat::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function numberToRomanRepresentation($number) {
    $map = array('M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1);
    $returnValue = '';
    while ($number > 0) {
        foreach ($map as $roman => $int) {
            if($number >= $int) {
                $number -= $int;
                $returnValue .= $roman;
                break;
            }
        }
    }
    return $returnValue;
	}
}
