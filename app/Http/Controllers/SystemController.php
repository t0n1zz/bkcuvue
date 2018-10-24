<?php

namespace App\Http\Controllers;

use Auth;
use Response;
use App\User;
use Illuminate\Http\Request;

class SystemController extends Controller
{
    
  public function download_file($filename){
    $destinationPath = public_path() . "/files/";
    $file= $destinationPath . $filename;

    return Response::download($file);
  }

  public function getNotif()
	{
		$id = auth('api')->user()->getId();
		$kelas = User::findOrFail($id);
		$notification = collect();
		$unreadNotification = count($kelas->unreadNotifications);

		$i = 0;
		foreach ($kelas->notifications as $notif) {
			$username = User::where('id',$notif->data['user'])->select('name')->first();
			
			$n = collect($notif);
			$n->put('user',$username);
			$notification->push($n);
			if (++$i == 15) break;
		}

		return response()
			->json([
				'notification' => $notification,
				'unreadNotification' => $unreadNotification
			]);
	}
    
  public function getNotifAll()
	{
		$id = auth('api')->user()->getId();
		$kelas = User::findOrFail($id);
		$notification = collect();
		$unreadNotification = count($kelas->unreadNotifications);

		$i = 0;
		foreach ($kelas->notifications as $notif) {
			$username = User::where('id',$notif->data['user'])->select('name')->first();
			
			$n = collect($notif);
			$n->put('user',$username);
			$notification->push($n);
		}

		return response()
			->json([
				'notification' => $notification,
				'unreadNotification' => $unreadNotification
			]);
	}
		

	public function markAllNotifRead()
	{
		$id = Auth::user('api')->getId();

		$kelas = User::findOrFail($id);

		$kelas->unreadNotifications->markAsRead();

		return response()
				->json([
						'marked' => true
				]);
	}

	public function markNotifRead($id)
	{
		auth('api')->user()->unreadNotifications->where('id', $id)->markAsRead();

		return response()
				->json([
						'marked' => true
				]);
	}
  
}
