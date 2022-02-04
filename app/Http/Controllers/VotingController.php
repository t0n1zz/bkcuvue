<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Aktivis;
use App\Voting;
use App\VotingPilihan;
use App\VotingPilihanCount;
use App\VotingSuara;
use App\VotingSuaraAkses;
use App\VotingTanggapan;
use App\VotingTanggapanSuara;
use App\Support\Helper;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use App\Events\VotingEvent;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\VotingSuaraImport;

class VotingController extends Controller{

	protected $message = "Voting";

	public function index()
	{
		$table_data = Voting::with('cu','kegiatan')->withCount('pilihan')->withCount('hasSuara')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = Voting::with('kegiatan')->withCount('pilihan')->where('id_cu', $id)->withCount('hasSuara')->advancedFilter();


		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexVoting()
	{
		$table_data = Voting::get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexVotingCu($cu)
	{
		$table_data = Voting::where('id_cu',$cu)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPilihan($name)
	{
		$table_data = [];
		$form = '';
		$suaras = VotingSuara::where('name', $name)->get();

		foreach($suaras as $suara){
			$voting = Voting::with('cu','pilihan','tanggapan')->where('id', $suara->voting_id)->where('status',1)->first();

			if($voting){
				$table_data = $voting;
				$form = VotingSuara::with('pilihan','cu')->where('name', $name)->where('voting_id', $voting->id)->first();

				$votingSuaraAkses = VotingSuaraAkses::where('voting_suara_id', $form->id)->where('voting_id', $voting->id)->first();

				if(!$votingSuaraAkses){
					VotingSuaraAkses::create([
						'voting_id' => $voting->id,
						'voting_suara_id' => $form->id,
					]);
				}
			}
		}
		
		return response()
				->json([
					'model' => $table_data,
					'form' => $form
				]);
	}

	public function indexDataSuara($id)
	{
		$table_data = VotingSuara::with('cu','akses')->where('voting_id', $id)->advancedFilter();

		foreach($table_data as $t){
			$t->link = url('') . '/admins/voting/pilih/' .  $t->name;
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexDataTanggapan($id)
	{
		$table_data = VotingTanggapanSuara::with('suara.pilihan','tanggapan')->where('voting_id', $id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexSuara($id)
	{
		$table_data = VotingPilihan::where('voting_id', $id)->orderByDesc('skor')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function checkUser($voting_id)
	{
		$user_id = Auth::user()->id_cu;
		$table_data = VotingSuara::where('voting_id',$voting_id)->where('user_id',$user_id)->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Voting::initialize(),
					'rules' => Voting::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{		
		$this->validate($request,Voting::$rules);

		$name = $request->name;
		$suara = str_replace( ',', '', $request->suara);

		if($request->sumberSuara == 0){
			$kelas = Voting::create($request->except('status','suara') + [
				'status' => '0',
				'suara' => $suara
			]);
			
			if($request->suara_tipe == 0){
				for ($x = 1; $x <= $request->suara; $x++) {
					VotingSuara::create([
						'voting_id' => $kelas->id,
						'name' => bin2hex(random_bytes(4))
					]);
				}
			}
		}else{
			$kelasVoting = Voting::findOrFail($request->sumberSuara);
			$suara = $kelasVoting->suara;

			$kelas = Voting::create($request->except('status','suara') + [
				'status' => '0',
				'suara' => $suara
			]);

			$kelasSuara = VotingSuara::where('voting_id',$kelasVoting->id)->get();
			
			foreach($kelasSuara as $dataSuara){
				VotingSuara::create([
					'voting_id' => $kelas->id,
					'id_cu' => $dataSuara->id_cu,
					'name' => $dataSuara->name,
				]);
			}
		}

		// return response()
		// 	->json([$request->pilihan, $kelas->pilihan]);
		
		if($request->pilihan){
			$this->syncPilihan($request, $kelas);
		}

		if($request->tanggapan){
			$this->syncTanggapan($request, $kelas);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeSuara(Request $request)
	{
		$voting = Voting::findOrFail($request->voting_id);
		if($voting->suara_ok > 0){
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);	
		}

		$countVotingSuara = 0;
		if($voting){
			$countVotingSuara = $voting->suara;
		}
		$countSuara = VotingSuara::where('voting_id', $request->voting_id)->count();

		if($countSuara < $voting->suara){
			$suaraDuplicate = VotingSuara::where('voting_id', $request->voting_id)->where('name', $request->name)->count();

			if($suaraDuplicate == 0){
				VotingSuara::create($request->all());
		
				return response()
					->json([
						'saved' => true,
						'message' => 'Suara dengan kode ' .$request->name. ' berhasil ditambah'
					]);
			}else{
				return response()
				->json([
					'saved' => false,
					'message' => 'Maaf suara dengan kode ' . $request->name . ' sudah pernah digunakan.'
				]);	
			}
		}else{
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf tidak bisa menambahkan suara lagi karena sudah mencapai jumlah maksimum suara untuk voting ini.'
				]);
		}
	}

	private function syncPilihan($request, $kelas)
	{
		$aTmp1 = [];
		$aTmp2 = [];
		foreach($kelas->pilihan as $aV){ $aTmp1[] = $aV['id']; }
		foreach($request->pilihan as $aV){ 
			if(array_key_exists('id', $aV)){
				$aTmp2[] = $aV['id']; 
			}
		}
		$diff = array_diff($aTmp1, $aTmp2);

		if($diff){
			$val = array_values($diff)[0];
			VotingPilihan::findOrFail($val)->delete();
		}

		foreach($request->pilihan as $pilihan){
			if(array_key_exists('id', $pilihan)){
				$kelasPilih = VotingPilihan::findOrFail($pilihan['id']);
				$kelasPilih->update([
					'voting_id' => $kelas->id,
					'name' => array_key_exists('name', $pilihan) ? $pilihan['name'] : null,
				]);
			}else{
				VotingPilihan::create([
					'voting_id' => $kelas->id,
					'name' => array_key_exists('name', $pilihan) ? $pilihan['name'] : null,
				]);
			}
		}
	}

	private function syncTanggapan($request, $kelas)
	{
		$aTmp1 = [];
		$aTmp2 = [];
		foreach($kelas->tanggapan as $aV){ $aTmp1[] = $aV['id']; }
		foreach($request->tanggapan as $aV){ 
			if(array_key_exists('id', $aV)){
				$aTmp2[] = $aV['id']; 
			}
		}
		$diff = array_diff($aTmp1, $aTmp2);

		if($diff){
			$val = array_values($diff)[0];
			VotingTanggapan::findOrFail($val)->delete();
		}

		foreach($request->tanggapan as $tanggapan){
			if(array_key_exists('id', $tanggapan)){
				$kelasPilih = VotingTanggapan::findOrFail($tanggapan['id']);
				$kelasPilih->update([
					'voting_id' => $kelas->id,
					'name' => array_key_exists('name', $tanggapan) ? $tanggapan['name'] : null,
				]);
			}else{
				VotingTanggapan::create([
					'voting_id' => $kelas->id,
					'name' => array_key_exists('name', $tanggapan) ? $tanggapan['name'] : null,
				]);
			}
		}
	}

	public function storePilihan(Request $request)
	{	
		$voting = Voting::findOrFail($request->voting_id);

		if($voting->status == 1){
			$cekSuara = VotingSuara::where('voting_id',$request->voting_id)->where('name',$request->name)->where('voting_pilihan_id',null)->first();
	
			if($cekSuara){
				\DB::beginTransaction(); 
				try{
					VotingPilihanCount::create([
						'voting_id' => $request->voting_id,
						'voting_pilihan_id' => $request->voting_pilihan_id,
						'voting_suara_id' => $cekSuara->id
					]);

					foreach($request->tanggapan as $a){
						if(array_key_exists('keterangan', $a)){
							VotingTanggapanSuara::create([
								'voting_id' => $request->voting_id,
								'voting_tanggapan_id' => $a['id'],
								'voting_suara_id' => $cekSuara->id,
								'keterangan' => $a['keterangan']
							]);
							$cekSuara->isTanggapan = 1;
						}
					}
					
					$pilihanCount = VotingPilihanCount::where('voting_pilihan_id',$request->voting_pilihan_id)->count();
					
					$kelasPilihan = VotingPilihan::findOrFail($request->voting_pilihan_id);
					// $kelasPilihan->skor = $pilihanCount;
					// $kelasPilihan->update();
			
					$cekSuara->voting_pilihan_id = $request->voting_pilihan_id;			
					$cekSuara->update();

					// $suaraOk = VotingSuara::where('voting_id',$request->voting_id)->whereNotNull('voting_pilihan_id')->count();
					// $voting->suara_ok = $suaraOk;
					// $voting->update();

					$tanggapanCount = 0;
					$tanggapanCount = VotingSuara::where('voting_id', $voting->id)->where('voting_pilihan_id', $request->voting_pilihan_id)->where('isTanggapan', 1)->count();
					
					event(new VotingEvent($pilihanCount, $tanggapanCount, $voting->id, $kelasPilihan->id));
					
					\DB::commit();
					return response()
						->json([
							'saved' => true,
							'message' => 'Voting telah berhasil dilakukan.',
						]);	
				} catch (\Exception $e){
					\DB::rollBack();
					abort(500, $e->getMessage());
				}
			}else{
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf, anda sudah melakukan voting'
					]);	
			}
		}else{
			return response()
					->json([
						'saved' => false,
						'message' => 'Maaf, voting belum aktif'
					]);
		}
	}

	public function edit($id)
	{
		$kelas = Voting::with('cu','kegiatan','pilihan','tanggapan')->findOrFail($id);

		foreach($kelas->pilihan as $t){
			$pilihanCount = VotingPilihanCount::where('voting_pilihan_id',$t->id)->count();
			$tanggapanCount = VotingSuara::where('voting_id', $id)->where('voting_pilihan_id', $t->id)->where('isTanggapan', 1)->count();

			$kelasPilihan = VotingPilihan::findOrFail($t->id);
			$kelasPilihan->skor = $pilihanCount;
			$kelasPilihan->skor_tanggapan = $tanggapanCount;
			$kelasPilihan->update();

			$t->skor = $pilihanCount;
			$t->skor_tanggapan = $tanggapanCount;
		}

		$suara_ok = VotingSuara::where('voting_id',$id)->whereNotNull('voting_pilihan_id')->count();
		$suara_akses = VotingSuaraAkses::where('voting_id',$id)->count();
		$kelas->suara_ok = $suara_ok;
		$kelas->suara_akses = $suara_akses;
		$kelas->update();

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function updateStatus($id, $cu)
	{
		$kelas = Voting::findOrFail($id);
		

		if($kelas->status == 1){
			$kelas->status  = 0;
		}else{
			$kelas->status  = 1;
			Voting::where('id_cu', $cu)->where('id','!=', $kelas->id)->update(['status' => 0]);
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function updateSuara(Request $request, $id)
	{
		$kelas = VotingSuara::findOrFail($id);

		$voting = Voting::findOrFail($kelas->voting_id);
		if($voting->suara_ok > 0){
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);	
		}

		$kelas->name = $request->name;
		$kelas->id_cu = $request->id_cu;

		$suaraDuplicate = VotingSuara::where('name', $request->name)->count();

		if($suaraDuplicate == 0){
			$kelas->update();

			return response()
				->json([
					'saved' => true,
					'message' => "Suara berhasil diubah"
				]);
		}else{
			return response()
			->json([
				'saved' => false,
				'message' => 'Maaf suara dengan kode ' . $request->name . ' sudah pernah digunakan.'
			]);	
		}
	
	}

	public function updateSuaraCu(Request $request)
	{
		$kelas = VotingSuara::findOrFail($request->id);
		$voting = Voting::findOrFail($kelas->voting_id);
		if($voting->suara_ok > 0){
			return response()
				->json([
					'saved' => false,
					'message' => "Maaf anda tidak bisa mengubah informasi CU di suara ini, karena voting sudah dilakukan"
				]);
		}else{
			$kelas->id_cu  = $request->id_cu;
			$kelas->update();
	
			return response()
				->json([
					'saved' => true,
					'message' => "CU Suara berhasil diubah"
				]);
		}
	}

	public function destroy($id)
	{
		$kelas = Voting::findOrFail($id);
		$name = $kelas->name;
		$kelas->delete();

		VotingPilihan::where('voting_id',$kelas->id)->delete();
		VotingPilihanCount::where('voting_id',$kelas->id)->delete();
		VotingSuara::where('voting_id',$kelas->id)->delete();
		VotingSuaraAkses::where('voting_id',$kelas->id)->delete();
		VotingTanggapan::where('voting_id',$kelas->id)->delete();
		VotingTanggapanSuara::where('voting_id',$kelas->id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroySuara($id)
	{
		$kelas = VotingSuara::findOrFail($id);
		
		$voting = Voting::findOrFail($kelas->voting_id);
		if($voting->suara_ok > 0){
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);	
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Suara berhasil dihapus'
			]);
	}

	public function uploadSuara(Request $request, $id)
	{
		$voting = Voting::findOrFail($id);
		if($voting->suara_ok > 0){
			return response()
				->json([
					'uploaded' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);	
		}

		$countVotingSuara = 0;
		if($voting){
			$countVotingSuara = $voting->suara;
		}
		
		$data = [
			'voting_id' => $id,
			'countVotingSuara' => $countVotingSuara,
		];

		Excel::import(new VotingSuaraImport($data), request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => 'Suara berhasil di upload, apabila ada suara yang tidak masuk maka silahkan periksa apakah ada potensi kode suara sama atau sudah melebihi batas maximum suara. Dan anda dapat menambahkan secara manual untuk suara yang kurang tersebut.'
			]);
	}

	public function countPilihan($id)
	{
			$table_data = VotingPilihan::where('voting_id',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function countSuara($id)
	{
			$table_data = VotingSuara::where('voting_id',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}