<?php
namespace App\Support;

use Auth;
use File;
use Image;
use Validator;
use Illuminate\Http\Request;
use App\User;
use App\Cu;
use App\Tp;
use App\Notifications\Notif;
use App\Notifications\Laporan;
use App\Notifications\DiklatBKCU;
use Illuminate\Support\Facades\Notification;

class NotificationHelper{

	public static function laporan_cu($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		Notification::send($users, new Notif(
			'laporanCu',
			$request->id,
			Auth::user()->username . $cu_name . strtolower($message). ' laporan periode ' .$periode
		));
	}

	public static function diskusi_cu($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		Notification::send($users, new Notif(
			'diskusiLaporanCu',
			$request->id,
			Auth::user()->username . $cu_name . strtolower($message). ' komentar pada laporan periode ' .$periode
		));
	}

	public static function laporan_tp($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');
		$tp = Tp::where('id',$request->id_tp)->select('id_cu','name')->first();

		Notification::send($users, new Notif(
			'laporanTp',
			$request->id,
			Auth::user()->username . $cu_name . strtolower($message). ' laporan ' .$tp->name. ' periode ' .$periode
		));
	}

	public static function diskusi_tp($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');
		$tp = Tp::where('id',$request->id_tp)->select('id_cu','name')->first();

		Notification::send($users, new Notif(
			'diskusiLaporanTp',
			$request->id,
			Auth::user()->username . $cu_name . strtolower($message). ' komentar pada laporan ' .$tp->name. ' periode ' .$periode
		));
	}

	public static function diklat_bkcu($id_cu, $kegiatan_id, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}

		Notification::send($users, new Notif(
			'diklatBKCU',
			$kegiatan_id,
			Auth::user()->username . $cu_name . strtolower($message)
		));
	}

	public static function diklat_bkcu_status($kegiatan_id, $id_cus, $message)
	{
		$users = User::permission(['index_diklat_bkcu'])->whereIn('id_cu', $id_cus)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	



		Notification::send($users, new Notif(
			'diklatBKCU',
			$kegiatan_id,
			strtolower($message)
		));
	}

	public static function pertemuan_bkcu($id_cu, $kegiatan_id, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}

		Notification::send($users, new Notif(
			'pertemuanBKCU',
			$kegiatan_id,
			Auth::user()->username . $cu_name . strtolower($message)
		));
	}

	public static function pertemuan_bkcu_status($kegiatan_id, $id_cus, $message)
	{
		$users = User::permission(['index_pertemuan_bkcu'])->whereIn('id_cu', $id_cus)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	

		Notification::send($users, new Notif(
			'pertemuanBKCU',
			$kegiatan_id,
			strtolower($message)
		));
	}

	public static function self_assesment($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_assesment_access'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_assesment_access'])->where('id_cu', 0)->where('status',1)->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		Notification::send($users, new Notif(
			'selfAssesment',
			$request->id_cu,
			Auth::user()->username . $cu_name . strtolower($message). ' self assesment ACCESS pada periode ' .$periode
		));
	}

	public static function monitoring($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_monitoring'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_monitoring'])->where('id_cu', 0)->where('status',1)->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		Notification::send($users, new Notif(
			'monitoring',
			$request->id,
			Auth::user()->username . $cu_name . strtolower($message)
		));
	}

	public static function monitoring_pencapaian($request, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_monitoring'])->where('id_cu', $request->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = ' (PUSKOPCUINA) ';
		}else{
			$users = User::permission(['index_monitoring'])->where('id_cu', 0)->where('status',1)->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = ' (CU ' .$cu->name. ') ';	
		}
		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		Notification::send($users, new Notif(
			'monitoring',
			$request->id_monitoring,
			Auth::user()->username . $cu_name . strtolower($message)
		));
	}

	public static function klaim_jalinan_verifikasi($request, $message)
	{
		if($request->anggota_cu_cu){
			$users = User::permission(['index_jalinan_klaim'])->where('id_cu', 0)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();
			$cu = Cu::where('id', Auth::user()->id_cu)->select('id', 'name')->first();
			$cu_name = 'CU ' .$cu->name. ' ';	

			Notification::send($users, new Notif(
				'klaimJALINAN',
				$request->anggota_cu_cu->id_cu,
				$cu_name . strtolower($message)
			));
		}
	}

	public static function klaim_jalinan_status($request, $message)
	{
		if($request->anggota_cu_cu){
			$users = User::permission(['index_jalinan_klaim'])->where('id_cu', $request->anggota_cu_cu->id_cu)->where('status',1)->where('login', '>=', \Carbon\Carbon::now()->subMonth(3))->get();	
			$cu_name = $request->anggota_cu->cu ? '(CU' .$request->anggota_cu->cu->name. ')' : '';
			
			if($request->anggota_cu){
				Notification::send($users, new Notif(
					'klaimJALINAN',
					$request->anggota_cu_cu->id_cu,
					strtolower($message) . ' atas nama ' . $request->anggota_cu->name . $cu_name
				));
			}
		}
	}

	public static function upload_notification($id_user,$tipe,$message)
	{
		$users = User::where('id', $id_user)->get();
		Notification::send($users, new Notif(
			$tipe,
			$id_user,
			$message
		));
	}
	
}