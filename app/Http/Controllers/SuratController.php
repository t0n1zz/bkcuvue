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
use Illuminate\Support\Carbon;
use PDO;

class SuratController extends Controller{

	protected $filepath = 'files/dokumen/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Surat';

	public function indexCu($cu, $tipe, $periode)
	{
		if($periode == 'semua'){
			if($tipe == 'semua'){
				$table_data = Surat::with('kategori','tipe','Cu','dokumen','temp.user')
					->where('id_cu',$cu)
					->advancedFilter();
			}else{
				$table_data = Surat::with('kategori','tipe','Cu','dokumen','temp.user')
					->where('id_cu',$cu)
					->where('id_surat_kode',$tipe)
					->advancedFilter();
			}
		}else{
			if($tipe == 'semua'){
				$table_data = Surat::with('kategori','tipe','Cu','dokumen','temp.user')
					->where('id_cu',$cu)
					->where('periode',$periode)
					->advancedFilter();
			}else{
				$table_data = Surat::with('kategori','tipe','Cu','dokumen','temp.user')
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

		// clean surat with null id_surat that less than today
		SuratKodeTemp::where('id_surat_kode',$suratKode->id)->whereNull('id_surat')->where('created_at', '<', Carbon::now()->subDay())->delete();
		
		// check if there is blocking surat kode by this user
		$suratKodeTemp = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->where('id_user', $id_user)->whereNull('id_surat')->first();
		
		// if yes then use the blocking surat kode by this user
		if($suratKodeTemp){		
			// if more than 30 minutes
			if(time() >= strtotime($suratKodeTemp->created_at) + 1800){
				$suratKodeTemp->created_at = Carbon::now()->timestamp;
				$suratKodeTemp->update();

				return response()
					->json([
							'model' => [ 
								'tipe' => '1',
								'kategori' => $suratKategori,
								'suratKode' => $suratKode,
								'kode' => $suratKodeTemp->kode,
								'periode' => $periode,
								'bulan' => $bulan,
								'waktu' => (strtotime($suratKodeTemp->created_at) + 1800 - time())
							],
					]);
			}else{

				return response()
					->json([
							'model' => [ 
								'tipe' => '2',
								'kategori' => $suratKategori,
								'suratKode' => $suratKode,
								'kode' => $suratKodeTemp->kode,
								'periode' => $periode,
								'bulan' => $bulan,
								'waktu' => (strtotime($suratKodeTemp->created_at) + 1800 - time())
							],
					]);
			}
		// if no 
		}else{

			// check if there is blocking surat kode by general
			$suratKodeTempKosong = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->whereNull('id_surat')->orderBy('created_at', 'desc')->first();

			// if yes then use the blocking surat kode by general
			if($suratKodeTempKosong){
				// if more than 30 minutes
				if(time() >= strtotime($suratKodeTempKosong->created_at) + 1800)
				{	
					$suratKodeTempKosong->id_user = $id_user;
					$suratKodeTempKosong->created_at = Carbon::now()->timestamp;
					$suratKodeTempKosong->update();

					return response()
						->json([
								'model' => [ 
									'tipe' => '3',
									'kategori' => $suratKategori,
									'suratKode' => $suratKode,
									'kode' => $suratKodeTempKosong->kode,
									'periode' => $periode,
									'bulan' => $bulan,
									'waktu' => (strtotime($suratKodeTempKosong->created_at) + 1800 - time())
								],
						]);
				}else{
					$suratKodeTempLatest = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->orderBy('created_at','desc')->first();

					$suratKodeTemp2 = SuratKodeTemp::create([
						'id_surat_kode' => $suratKode->id,
						'id_user' => $id_user,
						'kode' => $suratKodeTempLatest->kode + 1,
						'periode' => $periode,
						'bulan' => $bulan
					]);

					return response()
						->json([
								'model' => [ 
									'tipe' => '4',
									'kategori' => $suratKategori,
									'suratKode' => $suratKode,
									'kode' => $suratKodeTempLatest->kode + 1,
									'periode' => $periode,
									'bulan' => $bulan,
									'waktu' => (strtotime($suratKodeTemp2->created_at) + 1800 - time())
								],
						]);
				}
			// if no then use recent surat kode	
			}else{
				// $suratKodeTemp = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->orderBy('created_at','desc')->first();

				// if($suratKodeTemp){
				// 	$kode = $suratKodeTemp->kode;
				// }else{
				// 	$kode = 0;
				// }

				$suratKodeTemp2 = SuratKodeTemp::create([
					'id_surat_kode' => $suratKode->id,
					'id_user' => $id_user,
					'kode' => $suratKode->kode + 1,
					'periode' => $periode,
					'bulan' => $bulan
				]);

				return response()
					->json([
							'model' => [ 
								'tipe' => '5',
								'kategori' => $suratKategori,
								'suratKode' => $suratKode,
								'kode' => $suratKode->kode + 1,
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
		$id_user = Auth::user()->id;
		$suratKodeTempKosong = SuratKodeTemp::where('id_surat_kode',$request->id_surat_kode)->where('kode', $request->kode)->where('id_user',$id_user)->whereNull('id_surat')->first();

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
				'name' => $request->name,
				'filename' => $formatedName,
				'link' => $request->link,
				'format' => $format,
				'tipe' => $fileExtension,
				'status' => 'INTERNAL',
				'keterangan' => $request->perihal
			]);

			// $request['id_surat_kode'] = $suratKodeTempKosong->id;

			$kelas = Surat::create($request->except('id_dokumen') + [
				'id_dokumen' => $kelasDokumen->id
			]);

			$suratKodeTempDesc = SuratKodeTemp::where('id_surat_kode', $request->id_surat_kode)->orderBy('created_at','desc')->first();

			$suratKode = SuratKode::findOrFail($request->id_surat_kode);

			if($suratKodeTempDesc->kode == $request->kode){
				if($request->kode >= $suratKode->kode){
					$suratKode->kode = $request->kode;
					$suratKode->update();
				}
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
		$suratKode = SuratKode::findOrFail($kelas->id_surat_kode);
		$suratKategori = SuratKategori::where('id_surat_kode',$kelas->id_surat_kode)->get();
		$periode = \Carbon\Carbon::now()->year;

		return response()
				->json([
						'model' => [
							'kategori' => $suratKategori,
							'suratKode' => $suratKode,
							'periode' => $periode
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

			if($kelas->id_dokumen){
				$kelasDokumen = Dokumen::where('id',$kelas->id_dokumen)->first();
	
				if($kelasDokumen){
					if(!empty($kelasDokumen->filename)){
						File::delete($this->filepath . $kelasDokumen->filename);
					}
					$kelasDokumen->delete();
				}
			}

			$kelas->delete();
			SuratKodeTemp::where('id_surat', $id)->delete();

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
