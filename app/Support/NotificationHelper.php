<?php
namespace App\Support;

use File;
use Image;
use Validator;
use Illuminate\Http\Request;
use App\User;
use App\Cu;
use App\Tp;
use App\Notifications\Laporan;
use App\Notifications\DiklatBKCU;
use Illuminate\Support\Facades\Notification;

class NotificationHelper{

	// laporan
	public static function store_laporan_cu($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		if($id_cu == '0'){
			self::laporan($request->id_cu,$request->id,'BKCU','',$periode,$tipe);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			self::laporan('0',$request->id,$cu->name,'',$periode,$tipe);
		}
	}

	public static function store_laporan_tp($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');
		
		if($id_cu == '0'){
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			self::laporan($request->id_tp,$request->id,'BKCU',$tp->name,$periode,$tipe);
		}else{
			$tp = Tp::where('id',$request->id_tp)->select('id_cu','name')->first();
			$cu = Cu::where('id',$tp->id_cu)->select('name')->first();
			self::laporan('0',$request->id,$cu->name,$tp->name,$periode,$tipe);
		}
	}

	public static function store_diskusi_laporan($id_cu,$id_laporan,$cu_name,$tp_name,$periodesave,$tipe,$content)
	{
		$users = User::where('id_cu',$id_cu)->get();

		foreach ($users as $user) {
			if($user->can['diskusi_laporan_cu'] || $user->can['diskusi_laporan_tp']){
				Notification::send($user, new Laporan(
					$id_laporan, 
					$cu_name,
					$tp_name,
					$tipe.' komentar pada laporan periode '.$periodesave,
					$content,
					$tipe.' diskusilaporan'
				));
			}
		}
	}

	public static function laporan($id_cu,$id_laporan,$cu_name,$tp_name,$periodesave,$tipe)
	{
		$users = User::where('id_cu',$id_cu)->get();
		foreach ($users as $user) {
			if($user->can['index_laporan_cu'] || $user->can['index_laporan_tp']){
				Notification::send($user, new Laporan(
					$id_laporan,
					$cu_name,
					$tp_name,
					$tipe.' laporan periode '.$periodesave,
					'',
					$tipe.' laporancu'
				));
			}
		}
	}

	// diklat
	public static function store_diklat_bkcu($id_cu, $id, $message)
	{
		if($id_cu == '0'){	
			$users = User::where('id_cu','>', 0)->orWhereNotNull('id_cu')->where('status',1)->get();
		}else{
			$users = User::where('id_cu', 0)->where('status',1)->get();
		}

		foreach ($users as $user) {
			if($user->can['index_diklat_bkcu']){
				Notification::send($user, new DiklatBKCU(
					$id,
					$message
				));
			}
		}
	}

	public static function status_peserta_diklat_bkcu($id_cu, $id, $message)
	{
		$users = User::where('id_cu', $id_cu)->where('status',1)->get();

		foreach ($users as $user) {
			if($user->can['index_diklat_bkcu']){
				Notification::send($user, new DiklatBKCU(
					$id,
					$message
				));
			}
		}
	}

}
