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
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->get();	
			$cu_name = ' (Puskopdit BKCU Kalimantan) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->get();
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
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->get();	
			$cu_name = ' (Puskopdit BKCU Kalimantan) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->get();
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
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->get();	
			$cu_name = ' (Puskopdit BKCU Kalimantan) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->get();
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
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $request->id_cu)->where('status',1)->get();	
			$cu_name = ' (Puskopdit BKCU Kalimantan) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->get();
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
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $id_cu)->where('status',1)->get();	
			$cu_name = ' (Puskopdit BKCU Kalimantan) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->get();
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
		$users = User::permission(['index_diklat_bkcu'])->whereIn('id_cu', $id_cus)->where('status',1)->get();	

		Notification::send($users, new Notif(
			'diklatBKCU',
			$kegiatan_id,
			strtolower($message)
		));
	}

	public static function pertemuan_bkcu($id_cu, $kegiatan_id, $message)
	{
		if(Auth::user()->id_cu == 0){
			$users = User::permission(['index_laporan_cu'])->where('id_cu', $id_cu)->where('status',1)->get();	
			$cu_name = ' (Puskopdit BKCU Kalimantan) ';
		}else{
			$users = User::permission(['index_laporan_cu'])->where('id_cu', 0)->where('status',1)->get();
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
		$users = User::permission(['index_pertemuan_bkcu'])->whereIn('id_cu', $id_cus)->where('status',1)->get();	

		Notification::send($users, new Notif(
			'pertemuanBKCU',
			$kegiatan_id,
			strtolower($message)
		));
	}
}