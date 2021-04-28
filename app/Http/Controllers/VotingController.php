<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Aktivis;
use App\Voting;
use App\VotingPilihan;
use App\VotingSuara;
use App\Support\Helper;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use App\Events\VotingEvent;

class VotingController extends Controller{

	protected $message = "Voting";

	public function index()
	{
		$table_data = Voting::with('cu')->withCount('hasPilihan')->withCount('hasSuara')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = Voting::withCount('hasPilihan')->where('id_cu', $id)->withCount('hasSuara')->advancedFilter();


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

	public function indexPilihan($name)
	{
		$table_data = [];
		$form = '';
		$suaras = VotingSuara::where('name', $name)->get();

		foreach($suaras as $suara){
		$voting = Voting::where('id', $suara->voting_id)->where('status',1)->first();

			if($voting){
				$table_data = $voting;
				$form = VotingSuara::where('name', $name)->where('voting_id', $voting->id)->first();
			}
		}
		
		return response()
				->json([
					'model' => $table_data,
					'form' => $form
				]);
	}

	public function indexSuara($id)
	{
		$table_data = VotingPilihan::where('voting_id', $id)->get();

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

		if($request->sumberSuara == 0){
			$kelas = Voting::create($request->except('status') + [
				'status' => '0'
			]);

			for ($x = 1; $x <= $request->suara; $x++) {
				VotingSuara::create([
					'voting_id' => $kelas->id,
					'name' => bin2hex(random_bytes(4))
				]);
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
					'name' => $dataSuara->name
				]);
			}
		}

		if($request->calon){
			$calonArray = array();

			foreach($request->calon as $calon){
				$calonArray[$calon['aktivis_id']] = [
					'skor' => 0,
					'pengusung_cu_id' => $calon['pengusung_cu_id']
				];
			}

			$kelas->calon()->sync($calonArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storePilihan(Request $request)
	{	
		$voting = Voting::findOrFail($request->voting_id);

		if($voting->status == 1){
			$cekSuara = VotingSuara::where('voting_id',$request->voting_id)->where('name',$request->name)->where('voting_calon_id',null)->first();
	
			if($cekSuara){
				\DB::beginTransaction(); 
				try{
					$kelasCalon = VotingPilihan::findOrFail($request->voting_calon_id);
					$skor = $kelasCalon->skor + 1;
					$kelasCalon->skor = $skor;
					$kelasCalon->update();
			
					$cekSuara->voting_calon_id = $request->voting_calon_id;
					$cekSuara->update();
	
					$kelasVoting = Voting::findOrFail($request->voting_id);
					$suara_ok = $kelasVoting->suara_ok + 1;
					$kelasVoting->suara_ok = $suara_ok;
					$kelasVoting->update();
					
					event(new VotingEvent($skor, $kelasVoting->id, $kelasCalon->id));

					Aktivis::flushCache();
					
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
		$kelas = Voting::with('calon.pekerjaan_aktif.cu','calon.pendidikan_tertinggi','cu','hasSuara')->findOrFail($id);


		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Voting::$rules);

		$name = $request->name;

		$kelas = Voting::findOrFail($id);

		if($request->calon){
			$calonArray = array();

			foreach($request->calon as $calon){
				$calonArray[$calon['aktivis_id']] = [
					'skor' => $calon['skor']
				];
			}

			$kelas->calon()->sync($calonArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function updateStatus($id)
	{
		$kelas = Voting::findOrFail($id);

		if($kelas->status == 1){
			$kelas->status  = 0;
		}else{
			$kelas->status  = 1;
			Voting::where('id','!=', $kelas->id)->update(['status' => 0]);
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function destroy($id)
	{
		$kelas = Voting::findOrFail($id);
		$name = $kelas->name;
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
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