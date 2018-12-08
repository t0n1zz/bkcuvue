<?php
namespace App\Support;

use File;
use Image;
use Validator;
use Illuminate\Http\Request;
use App\User;
use App\Notifications\Laporan;
use Illuminate\Support\Facades\Notification;

class NotificationHelper{

	public static function store_diskusi_laporan($id_cu,$id_laporan,$cu_name,$tp_name,$periodesave,$tipe,$content)
	{
		$users = User::where('id_cu',$id_cu)->get();

		foreach ($users as $user) {
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

	public static function store_laporan_cu($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		if($id_cu == '0'){
			self::store_laporan($request->id_cu,$request->id,'BKCU','',$periode,$tipe);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			self::store_laporan('0',$request->id,$cu->name,'',$periode,$tipe);
		}
	}

	public static function store_laporan_tp($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');
		
		if($id_cu == '0'){
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			self::store_laporan($request->id_tp,$request->id,'BKCU',$tp->name,$periode,$tipe);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			self::store_laporan('0',$request->id,$cu->name,$tp->name,$periode,$tipe);
		}
	}

	public function store_laporan($id_cu,$id_laporan,$cu_name,$tp_name,$periodesave,$tipe)
	{
		$users = User::where('id_cu',$id_cu)->get();
		foreach ($users as $user) {
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
