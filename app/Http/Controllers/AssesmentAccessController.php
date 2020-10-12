<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\AssesmentAccess;
use App\AssesmentAccessP1;
use App\AssesmentAccessP2;
use App\AssesmentAccessP3;
use App\AssesmentAccessP4;
use App\Events\AssesmentEvent;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AssesmentAccessController extends Controller{

	protected $message = "Self assesment ACCESS branding";

	public function index()
	{
		$table_data = AssesmentAccess::with('cu','p1','p2','p3','p4')->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = AssesmentAccess::with('cu','p1','p2','p3','p4')->where('id_cu',$id)->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function formatQuery($table_data){
		foreach($table_data as $t){
			$t->bobot_cu_p1 = 0;
			$t->bobot_bkcu_p1 = 0;
			$t->bobot_cu_p2 = 0;
			$t->bobot_bkcu_p2 = 0;
			$t->bobot_cu_p3 = 0;
			$t->bobot_bkcu_p3 = 0;
			$t->bobot_cu_p4 = 0;
			$t->bobot_bkcu_p5 = 0;

			if($t->p1){
				$t->bobot_cu_p1 = round(($t->p1->skor_cu_p1 / 56) * 40 ,2);
				$t->bobot_bkcu_p1 = round(($t->p1->skor_bkcu_p1 / 56) * 40 ,2);
			}
			if($t->p2){
				$t->bobot_cu_p2 = round(($t->p2->skor_cu_p2 / 108) * 20 ,2);
				$t->bobot_bkcu_p2 = round(($t->p2->skor_bkcu_p2 / 108) * 20 ,2);
			}
			if($t->p3){
				$t->bobot_cu_p3 = round(($t->p3->skor_cu_p3 / 104) * 20 ,2);
				$t->bobot_bkcu_p3 = round(($t->p3->skor_bkcu_p3 / 104) * 20 ,2);
			}
			if($t->p4){
				$t->bobot_cu_p4 = round(($t->p4->skor_cu_p4 / 80) * 20 ,2);
				$t->bobot_bkcu_p4 = round(($t->p4->skor_bkcu_p4 / 80) * 20 ,2);
			}

			$t->total_skor_cu = ($t->p1 ? $t->p1->skor_cu_p1 : 0) + 
			($t->p2 ? $t->p2->skor_cu_p2 : 0) + ($t->p3 ? $t->p3->skor_cu_p3 : 0) + 
			($t->p4 ? $t->p4->skor_cu_p4 : 0); 
			$t->total_skor_bkcu = ($t->p1 ? $t->p1->skor_bkcu_p1 : 0) + 
			($t->p2 ? $t->p2->skor_bkcu_p2 : 0) + ($t->p3 ? $t->p3->skor_bkcu_p3 : 0) + 
			($t->p4 ?$t->p4->skor_bkcu_p4 : 0); 

			$t->total_bobot_cu = round($t->bobot_cu_p1 + $t->bobot_cu_p2 + $t->bobot_cu_p3 + $t->bobot_cu_p4, 2); 
			$t->total_bobot_bkcu = round($t->bobot_bkcu_p1 + $t->bobot_bkcu_p2 + $t->bobot_bkcu_p3 + $t->bobot_bkcu_p4, 2); 
		};

		return $table_data;
	}

	public function formatSingleQuery($t){
		$t->bobot_cu_p1 = 0;
		$t->bobot_bkcu_p1 = 0;
		$t->bobot_cu_p2 = 0;
		$t->bobot_bkcu_p2 = 0;
		$t->bobot_cu_p3 = 0;
		$t->bobot_bkcu_p3 = 0;
		$t->bobot_cu_p4 = 0;
		$t->bobot_bkcu_p5 = 0;

		if($t->p1){
			$t->bobot_cu_p1 = round(($t->p1->skor_cu_p1 / 56) * 40 ,2);
			$t->bobot_bkcu_p1 = round(($t->p1->skor_bkcu_p1 / 56) * 40 ,2);
		}
		if($t->p2){
			$t->bobot_cu_p2 = round(($t->p2->skor_cu_p2 / 108) * 20 ,2);
			$t->bobot_bkcu_p2 = round(($t->p2->skor_bkcu_p2 / 108) * 20 ,2);
		}
		if($t->p3){
			$t->bobot_cu_p3 = round(($t->p3->skor_cu_p3 / 104) * 20 ,2);
			$t->bobot_bkcu_p3 = round(($t->p3->skor_bkcu_p3 / 104) * 20 ,2);
		}
		if($t->p4){
			$t->bobot_cu_p4 = round(($t->p4->skor_cu_p4 / 80) * 20 ,2);
			$t->bobot_bkcu_p4 = round(($t->p4->skor_bkcu_p4 / 80) * 20 ,2);
		}

		$t->total_skor_cu = ($t->p1 ? $t->p1->skor_cu_p1 : 0) + 
		($t->p2 ? $t->p2->skor_cu_p2 : 0) + ($t->p3 ? $t->p3->skor_cu_p3 : 0) + 
		($t->p4 ? $t->p4->skor_cu_p4 : 0); 
		$t->total_skor_bkcu = ($t->p1 ? $t->p1->skor_bkcu_p1 : 0) + 
		($t->p2 ? $t->p2->skor_bkcu_p2 : 0) + ($t->p3 ? $t->p3->skor_bkcu_p3 : 0) + 
		($t->p4 ?$t->p4->skor_bkcu_p4 : 0); 

		$t->total_bobot_cu = round($t->bobot_cu_p1 + $t->bobot_cu_p2 + $t->bobot_cu_p3 + $t->bobot_cu_p4, 2); 
		$t->total_bobot_bkcu = round($t->bobot_bkcu_p1 + $t->bobot_bkcu_p2 + $t->bobot_bkcu_p3 + $t->bobot_bkcu_p4, 2); 

		return $t;
	}

	public function create()
	{
		$form = AssesmentAccess::initialize();
		$p1 = AssesmentAccessP1::initialize();
		$p2 = AssesmentAccessP2::initialize();
		$p3 = AssesmentAccessP3::initialize();
		$p4 = AssesmentAccessP4::initialize();

		$form['p1'] = (object)$p1;
		$form['p2'] = (object)$p2;
		$form['p3'] = (object)$p3;
		$form['p4'] = (object)$p4;

		return response()
			->json([
					'form' => $form,
					'rules' => AssesmentAccess::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AssesmentAccess::$rules);

		$periode = $request->periode;

		$kelasP1 = AssesmentAccessP1::create($request->p1);
		$kelasP2 = AssesmentAccessP2::create($request->p2);
		$kelasP3 = AssesmentAccessP3::create($request->p3);
		$kelasP4 = AssesmentAccessP4::create($request->p4);

		$kelas = AssesmentAccess::create($request->all() + [
			'id_p1' => $kelasP1->id,
			'id_p2' => $kelasP2->id,
			'id_p3' => $kelasP3->id,
			'id_p4' => $kelasP4->id,
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
		$kelas = AssesmentAccess::with('cu','p1','p2','p3','p4')->findOrFail($id);

		$kelas = $this->formatSingleQuery($kelas);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function editPenilaian($id)
	{
		$kelas2 = AssesmentAccess::findOrFail($id);
		$kelas2->status = 'BELUM SELESAI DINILAI';
		$kelas2->update();

		$kelas = AssesmentAccess::with('cu','p1','p2','p3','p4')->findOrFail($id);
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

		$this->validate($request, AssesmentAccess::$rules);

		$periode = $request->periode;

		$kelas = AssesmentAccess::findOrFail($id);
		if($kelas->status == 'BELUM SELESAI DINILAI' && $cu != 0){
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' periode ' .$periode. ' tidak bisa diubah karena sedang dalam proses penilaian BKCU Kalimantan'
				]);
		}else{
			$kelasP1 = AssesmentAccessP1::findOrFail($kelas->id_p1);
			$kelasP2 = AssesmentAccessP2::findOrFail($kelas->id_p2);
			$kelasP3 = AssesmentAccessP3::findOrFail($kelas->id_p3);
			$kelasP4 = AssesmentAccessP4::findOrFail($kelas->id_p4);
	
			$kelas->update($request->all());	
			$kelasP1->update($request->p1);	
			$kelasP2->update($request->p2);	
			$kelasP3->update($request->p3);	
			$kelasP4->update($request->p4);	

			event(new AssesmentEvent($kelasP1, $id, 'p1'));
			event(new AssesmentEvent($kelasP2, $id, 'p2'));
			event(new AssesmentEvent($kelasP3, $id, 'p3'));
			event(new AssesmentEvent($kelasP4, $id, 'p4'));
	
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
		$kelas = AssesmentAccess::findOrFail($id);

		if($kelas->status == 'BELUM SELESAI DINILAI' && $cu != 0){
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' periode ' .$periode. ' tidak bisa diubah karena sedang dalam proses penilaian BKCU Kalimantan'
				]);
		}else{
			$kelas->update($request->all());

			if($perspektif == 'p1'){
				$kelasP1 = AssesmentAccessP1::findOrFail($kelas->id_p1);
				$kelasP1->update($request->p1);	
				event(new AssesmentEvent($kelasP1, $id, 'p1'));
			}else if($perspektif == 'p2'){
				$kelasP2 = AssesmentAccessP2::findOrFail($kelas->id_p2);
				$kelasP2->update($request->p2);	;
				event(new AssesmentEvent($kelasP2, $id, 'p2'));
			}else if($perspektif == 'p3'){
				$kelasP3 = AssesmentAccessP3::findOrFail($kelas->id_p3);
				$kelasP3->update($request->p3);	
				event(new AssesmentEvent($kelasP3, $id, 'p3'));
			}else if($perspektif == 'p4'){
				$kelasP4 = AssesmentAccessP4::findOrFail($kelas->id_p4);	
				$kelasP4->update($request->p4);	
				event(new AssesmentEvent($kelasP4, $id, 'p4'));
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
		$kelas = AssesmentAccess::findOrFail($id);
		$kelasP1 = AssesmentAccessP1::findOrFail($kelas->id_p1);
		$kelasP2 = AssesmentAccessP2::findOrFail($kelas->id_p2);
		$kelasP3 = AssesmentAccessP3::findOrFail($kelas->id_p3);
		$kelasP4 = AssesmentAccessP4::findOrFail($kelas->id_p4);

		$periode = $kelas->periode;

		$kelas->delete();
		$kelasP1->delete();
		$kelasP2->delete();
		$kelasP3->delete();
		$kelasP4->delete();

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
	
	public function cariData($cu, $periode)
	{
		$table_data = AssesmentAccess::where('id_cu',$cu)->where('periode',$periode)->first();
		
		return response()
		->json([
			'periode' => $table_data
		]);
	}
}