<?php
namespace App\Http\Controllers;


use App\AssesmentCuleg;
use App\AssesmentCuleg1;
use App\AssesmentCuleg10;
use App\AssesmentCuleg11;
use App\AssesmentCuleg2;
use App\AssesmentCuleg3;
use App\AssesmentCuleg4;
use App\AssesmentCuleg5;
use App\AssesmentCuleg6;
use App\AssesmentCuleg7;
use App\AssesmentCuleg8;
use App\AssesmentCuleg9;
use App\Events\AssesmentEvent;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AssesmentCulegController extends Controller{

	protected $message = "Self assesment CULEG";


	public function index()
	{
		$table_data = AssesmentCuleg::with('cu','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11')->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = AssesmentCuleg::with('cu','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11')->where('id_cu',$id)->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function formatQuery($table_data){
		foreach($table_data as $t){									
		
			$t->total_skor_cu = ($t->p1 ? $t->p1->skor_cu_p1 : 0) + 
			($t->p2 ? $t->p2->skor_cu_p2 : 0) + ($t->p3 ? $t->p3->skor_cu_p3 : 0) + 
			($t->p4 ? $t->p4->skor_cu_p4 : 0) + ($t->p5 ? $t->p5->skor_cu_p5 : 0) +
			($t->p6 ? $t->p6->skor_cu_p6 : 0) + ($t->p7 ? $t->p7->skor_cu_p7 : 0) +
			($t->p8 ? $t->p8->skor_cu_p8 : 0) + ($t->p9 ? $t->p9->skor_cu_p9 : 0) +
			($t->p10 ? $t->p10->skor_cu_p10 : 0); 

			$t->total_skor_bkcu = ($t->p1 ? $t->p1->skor_bkcu_p1 : 0) + 
			($t->p2 ? $t->p2->skor_bkcu_p2 : 0) + ($t->p3 ? $t->p3->skor_bkcu_p3 : 0) + 
			($t->p4 ?$t->p4->skor_bkcu_p4 : 0) + ($t->p5 ? $t->p5->skor_bkcu_p5 : 0) +
			($t->p6 ? $t->p6->skor_bkcu_p6 : 0) + ($t->p7 ? $t->p7->skor_bkcu_p7 : 0) +
			($t->p8 ? $t->p8->skor_bkcu_p8 : 0) + ($t->p9 ? $t->p9->skor_bkcu_p9 : 0) +
			($t->p10 ? $t->p10->skor_bkcu_p10 : 0); 
			
			$t->total_skor_cu2 = ($t->p11 ? $t->p11->skor_cu_p11 : 0);
			$t->total_skor_bkcu2 = ($t->p11 ? $t->p11->skor_bkcu_p11 : 0);

		};

		return $table_data;
	}

	public function formatSingleQuery($t){
		$t->total_skor_cu = ($t->p1 ? $t->p1->skor_cu_p1 : 0) + 
		($t->p2 ? $t->p2->skor_cu_p2 : 0) + ($t->p3 ? $t->p3->skor_cu_p3 : 0) + 
		($t->p4 ? $t->p4->skor_cu_p4 : 0) + ($t->p5 ? $t->p5->skor_cu_p5 : 0) +
		($t->p6 ? $t->p6->skor_cu_p6 : 0) + ($t->p7 ? $t->p7->skor_cu_p7 : 0) +
		($t->p8 ? $t->p8->skor_cu_p8 : 0) + ($t->p9 ? $t->p9->skor_cu_p9 : 0) +
		($t->p10 ? $t->p10->skor_cu_p10 : 0) + ($t->p11 ? $t->p11->skor_cu_p11 : 0); 
		$t->total_skor_bkcu = ($t->p1 ? $t->p1->skor_bkcu_p1 : 0) + 
		($t->p2 ? $t->p2->skor_bkcu_p2 : 0) + ($t->p3 ? $t->p3->skor_bkcu_p3 : 0) + 
		($t->p4 ?$t->p4->skor_bkcu_p4 : 0) + ($t->p5 ?$t->p5->skor_bkcu_p5 : 0) +
		($t->p6 ?$t->p6->skor_bkcu_p6 : 0) + ($t->p7 ?$t->p7->skor_bkcu_p7 : 0) +
		($t->p8 ?$t->p8->skor_bkcu_p8 : 0) + ($t->p9 ?$t->p9->skor_bkcu_p9 : 0) +
		($t->p410 ?$t->p10->skor_bkcu_p10 : 0) + ($t->p11 ?$t->p11->skor_bkcu_p11 : 0); 

		return $t;
	}

	public function create()
	{
		$form = AssesmentCuleg::initialize();
		$p1 = AssesmentCuleg1::initialize();
		$p2 = AssesmentCuleg2::initialize();
		$p3 = AssesmentCuleg3::initialize();
		$p4 = AssesmentCuleg4::initialize();
		$p5 = AssesmentCuleg5::initialize();
		$p6 = AssesmentCuleg6::initialize();
		$p7 = AssesmentCuleg7::initialize();
		$p8 = AssesmentCuleg8::initialize();
		$p9 = AssesmentCuleg9::initialize();
		$p10 = AssesmentCuleg10::initialize();
		$p11 = AssesmentCuleg11::initialize();

		$form['p1'] = (object)$p1;
		$form['p2'] = (object)$p2;
		$form['p3'] = (object)$p3;
		$form['p4'] = (object)$p4;
		$form['p5'] = (object)$p5;
		$form['p6'] = (object)$p6;
		$form['p7'] = (object)$p7;
		$form['p8'] = (object)$p8;
		$form['p9'] = (object)$p9;
		$form['p10'] = (object)$p10;
		$form['p11'] = (object)$p11;


		return response()
			->json([
					'form' => $form,
					'rules' => AssesmentCuleg::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AssesmentCuleg::$rules);

		$periode = $request->periode;

		$kelasP1 = AssesmentCuleg1::create($request->p1);
		$kelasP2 = AssesmentCuleg2::create($request->p2);
		$kelasP3 = AssesmentCuleg3::create($request->p3);
		$kelasP4 = AssesmentCuleg4::create($request->p4);
		$kelasP5 = AssesmentCuleg5::create($request->p5);
		$kelasP6 = AssesmentCuleg6::create($request->p6);
		$kelasP7 = AssesmentCuleg7::create($request->p7);
		$kelasP8 = AssesmentCuleg8::create($request->p8);
		$kelasP9 = AssesmentCuleg9::create($request->p9);
		$kelasP10 = AssesmentCuleg10::create($request->p10);
		$kelasP11 = AssesmentCuleg11::create($request->p11);

		$kelas = AssesmentCuleg::create($request->all() + [
			'id_p1' => $kelasP1->id,
			'id_p2' => $kelasP2->id,
			'id_p3' => $kelasP3->id,
			'id_p4' => $kelasP4->id,
			'id_p5' => $kelasP5->id,
			'id_p6' => $kelasP6->id,
			'id_p7' => $kelasP7->id,
			'id_p8' => $kelasP8->id,
			'id_p9' => $kelasP9->id,
			'id_p10' => $kelasP10->id,
			'id_p11' => $kelasP11->id,
		]);

		if($request->status == 'BELUM DINILAI'){
			NotificationHelper::self_assesment($kelas,'menambah');
		}
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' periode ' .$periode. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = AssesmentCuleg::with('cu','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11')->findOrFail($id);

		$kelas = $this->formatSingleQuery($kelas);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function editPenilaian($id)
	{
		$kelas2 = AssesmentCuleg::findOrFail($id);
		$kelas2->status = 'BELUM SELESAI DINILAI';
		$kelas2->update();

		$kelas = AssesmentCuleg::with('cu','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11')->findOrFail($id);
		$kelas = $this->formatSingleQuery($kelas);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$cu = \Auth::user()->id_cu;

		$this->validate($request, AssesmentCuleg::$rules);

		$periode = $request->periode;

		$kelas = AssesmentCuleg::findOrFail($id);
		if($kelas->status == 'BELUM SELESAI DINILAI' && $cu != 0){
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' periode ' .$periode. ' tidak bisa diubah karena sedang dalam proses penilaian BKCU Kalimantan'
				]);
		}else{
			$kelasP1 = AssesmentCuleg1::findOrFail($kelas->id_p1);
			$kelasP2 = AssesmentCuleg2::findOrFail($kelas->id_p2);
			$kelasP3 = AssesmentCuleg3::findOrFail($kelas->id_p3);
			$kelasP4 = AssesmentCuleg4::findOrFail($kelas->id_p4);
			$kelasP5 = AssesmentCuleg5::findOrFail($kelas->id_p5);
			$kelasP6 = AssesmentCuleg6::findOrFail($kelas->id_p6);
			$kelasP7 = AssesmentCuleg7::findOrFail($kelas->id_p7);
			$kelasP8 = AssesmentCuleg8::findOrFail($kelas->id_p8);
			$kelasP9 = AssesmentCuleg9::findOrFail($kelas->id_p9);
			$kelasP10 = AssesmentCuleg10::findOrFail($kelas->id_p10);
			$kelasP11 = AssesmentCuleg11::findOrFail($kelas->id_p11);
	
			$kelas->update($request->all());	

			$kelasP1->update($request->p1);	
			$changes1 = $kelasP1->getChanges();
			if(!empty($changes1)){
				event(new AssesmentEvent($changes1, $id, 'p1'));
			}

			$kelasP2->update($request->p2);
			$changes2 = $kelasP2->getChanges();
			if(!empty($changes2)){
				event(new AssesmentEvent($changes2, $id, 'p2'));
			}

			$kelasP3->update($request->p3);
			$changes3 = $kelasP3->getChanges();
			if(!empty($changes3)){
				event(new AssesmentEvent($changes3, $id, 'p3'));
			}

			$kelasP4->update($request->p4);
			$changes4 = $kelasP4->getChanges();
			if(!empty($changes4)){
				event(new AssesmentEvent($changes4, $id, 'p4'));	
			}

			$kelasP5->update($request->p5);
			$changes5 = $kelasP5->getChanges();
			if(!empty($changes5)){
				event(new AssesmentEvent($changes5, $id, 'p4'));	
			}

			$kelasP6->update($request->p6);
			$changes6 = $kelasP6->getChanges();
			if(!empty($changes6)){
				event(new AssesmentEvent($changes6, $id, 'p6'));	
			}

			$kelasP7->update($request->p7);
			$changes7 = $kelasP7->getChanges();
			if(!empty($changes7)){
				event(new AssesmentEvent($changes7, $id, 'p7'));	
			}

			$kelasP8->update($request->p4);
			$changes8 = $kelasP8->getChanges();
			if(!empty($changes8)){
				event(new AssesmentEvent($changes8, $id, 'p8'));	
			}

			$kelasP9->update($request->p9);
			$changes9 = $kelasP9->getChanges();
			if(!empty($changes9)){
				event(new AssesmentEvent($changes9, $id, 'p9'));	
			}

			$kelasP10->update($request->p10);
			$changes10 = $kelasP10->getChanges();
			if(!empty($changes10)){
				event(new AssesmentEvent($changes10, $id, 'p10'));	
			}

			$kelasP11->update($request->p11);
			$changes11 = $kelasP11->getChanges();
			if(!empty($changes11)){
				event(new AssesmentEvent($changes11, $id, 'p11'));	
			}
	
			if($request->status == 'BELUM DINILAI'){
				NotificationHelper::self_assesment($kelas,'menambah');
			}else if($request->status == 'SUDAH DINILAI'){
				NotificationHelper::self_assesment($kelas,'memberikan penilaian pada');
			}

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' periode ' .$periode. ' berhasil diubah'
				]);
		}
	}

	public function updateSingle(Request $request, $id, $perspektif)
	{
		
		$cu = \Auth::user()->id_cu;
		$periode = $request->periode;
		$kelas = AssesmentCuleg::findOrFail($id);

		if($kelas->status == 'BELUM SELESAI DINILAI' && $cu != 0){
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' periode ' .$periode. ' tidak bisa diubah karena sedang dalam proses penilaian BKCU Kalimantan'
				]);
		}else{
			$kelas->update($request->all());

			if($perspektif == 'p1'){
				$kelasP1 = AssesmentCuleg1::findOrFail($kelas->id_p1);
				$kelasP1->update($request->p1);	
				$changes1 = $kelasP1->getChanges();
				if(!empty($changes1)){
					event(new AssesmentEvent($changes1, $id, 'p1'));
				}
			}else if($perspektif == 'p2'){
				$kelasP2 = AssesmentCuleg2::findOrFail($kelas->id_p2);
				$kelasP2->update($request->p2);
				$changes2 = $kelasP2->getChanges();
				if(!empty($changes2)){
					event(new AssesmentEvent($changes2, $id, 'p2'));
				}
			}else if($perspektif == 'p3'){
				$kelasP3 = AssesmentCuleg3::findOrFail($kelas->id_p3);
				$kelasP3->update($request->p3);	
				$changes3 = $kelasP3->getChanges();
				if(!empty($changes3)){
					event(new AssesmentEvent($changes3, $id, 'p3'));
				}
			}else if($perspektif == 'p4'){
				$kelasP4 = AssesmentCuleg4::findOrFail($kelas->id_p4);	
				$kelasP4->update($request->p4);	
				$changes4 = $kelasP4->getChanges();
				if(!empty($changes4)){
					event(new AssesmentEvent($changes4, $id, 'p4'));
				}
			}else if($perspektif == 'p5'){
				$kelasP5 = AssesmentCuleg5::findOrFail($kelas->id_p5);	
				$kelasP5->update($request->p5);	
				$changes5 = $kelasP5->getChanges();
				if(!empty($changes5)){
					event(new AssesmentEvent($changes5, $id, 'p5'));
				}
			}else if($perspektif == 'p6'){
				$kelasP6 = AssesmentCuleg6::findOrFail($kelas->id_p6);    
				$kelasP6->update($request->p6);    
				$changes6 = $kelasP6->getChanges();
				if(!empty($changes6)){
					event(new AssesmentEvent($changes6, $id, 'p6'));
				}
			}else if($perspektif == 'p7'){
				$kelasP7 = AssesmentCuleg7::findOrFail($kelas->id_p7);    
				$kelasP7->update($request->p7);    
				$changes7 = $kelasP7->getChanges();
				if(!empty($changes7)){
					event(new AssesmentEvent($changes7, $id, 'p7'));
				}
			}else if($perspektif == 'p8'){
				$kelasP8 = AssesmentCuleg8::findOrFail($kelas->id_p8);    
				$kelasP8->update($request->p8);    
				$changes8 = $kelasP8->getChanges();
				if(!empty($changes8)){
					event(new AssesmentEvent($changes8, $id, 'p8'));
				}
			}else if($perspektif == 'p9'){
				$kelasP9 = AssesmentCuleg9::findOrFail($kelas->id_p9);    
				$kelasP9->update($request->p9);    
				$changes9 = $kelasP9->getChanges();
				if(!empty($changes9)){
					event(new AssesmentEvent($changes9, $id, 'p9'));
				}
			}else if($perspektif == 'p10'){
				$kelasP10 = AssesmentCuleg10::findOrFail($kelas->id_p10);    
				$kelasP10->update($request->p10);    
				$changes10 = $kelasP10->getChanges();
				if(!empty($changes10)){
					event(new AssesmentEvent($changes10, $id, 'p10'));
				}
			}else if($perspektif == 'p11'){
				$kelasP11 = AssesmentCuleg11::findOrFail($kelas->id_p11);    
				$kelasP11->update($request->p11);    
				$changes11 = $kelasP11->getChanges();
				if(!empty($changes11)){
					event(new AssesmentEvent($changes11, $id, 'p11'));
				}
			}
			
			if($request->status == 'BELUM DINILAI'){
				NotificationHelper::self_assesment($kelas,'menambah');
			}else if($request->status == 'SUDAH DINILAI'){
				NotificationHelper::self_assesment($kelas,'memberikan penilaian pada');
			}
		}
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' periode ' .$periode. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = AssesmentCuleg::findOrFail($id);
		$kelasP1 = AssesmentCuleg1::findOrFail($kelas->id_p1);
		$kelasP2 = AssesmentCuleg2::findOrFail($kelas->id_p2);
		$kelasP3 = AssesmentCuleg3::findOrFail($kelas->id_p3);
		$kelasP4 = AssesmentCuleg4::findOrFail($kelas->id_p4);
		$kelasP5 = AssesmentCuleg5::findOrFail($kelas->id_p5);
		$kelasP6 = AssesmentCuleg6::findOrFail($kelas->id_p6);
		$kelasP7 = AssesmentCuleg7::findOrFail($kelas->id_p7);
		$kelasP8 = AssesmentCuleg8::findOrFail($kelas->id_p8);
		$kelasP9 = AssesmentCuleg9::findOrFail($kelas->id_p9);
		$kelasP10 = AssesmentCuleg10::findOrFail($kelas->id_p10);
		$kelasP11 = AssesmentCuleg11::findOrFail($kelas->id_p11);

		$periode = $kelas->periode;

		$kelas->delete();
		$kelasP1->delete();
		$kelasP2->delete();
		$kelasP3->delete();
		$kelasP4->delete();
		$kelasP5->delete();
		$kelasP6->delete();
		$kelasP7->delete();
		$kelasP8->delete();
		$kelasP9->delete();
		$kelasP10->delete();
		$kelasP11->delete();

		if($kelas->status == 'BELUM DINILAI'){
			NotificationHelper::self_assesment($kelas,'menghapus');
		}

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' periode ' .$periode. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = AssesmentCuleg::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\AssesmentCuleg')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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
	
	public function cariData($cu, $periode)
	{
		$table_data = AssesmentCuleg::where('id_cu',$cu)->where('periode',$periode)->first();
		
		return response()
		->json([
			'periode' => $table_data
		]);
	}
}