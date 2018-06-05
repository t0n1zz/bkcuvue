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

	public static function store_laporan($id_cu,$id_laporan,$cu_name,$tp_name,$periodesave,$tipe)
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
