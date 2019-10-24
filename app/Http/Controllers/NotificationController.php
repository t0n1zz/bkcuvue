<?php

namespace App\Http\Controllers;

use Auth;
use Response;
use App\User;
use Illuminate\Http\Request;

class NotificationController extends Controller
{

  public function get()
	{
		$id = auth('api')->user()->getId();
		$kelas = User::findOrFail($id);
		$notification = collect();
		$unreadNotification = count($kelas->unreadNotifications);

		$i = 0;
		foreach ($kelas->notifications as $notif) {
			$username = User::with('Cu','aktivis')->where('id',$notif->data['user'])->select('id','id_cu','name')->first();
			
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
    
  public function getAll()
	{
		$id = auth('api')->user()->getId();
		$kelas = User::findOrFail($id);
		$notification = collect();
		$unreadNotification = count($kelas->unreadNotifications);

		$i = 0;
		foreach ($kelas->notifications as $notif) {
			$username = User::with('Cu','aktivis')->where('id',$notif->data['user'])->select('id','id_cu','name')->first();
			
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
		
	public function markRead($id)
	{
		auth('api')->user()->unreadNotifications->where('id', $id)->markAsRead();

		return response()
				->json([
						'marked' => true
				]);
	}

	public function markAllRead()
	{
		$id = Auth::user('api')->getId();

		$kelas = User::findOrFail($id);

		$kelas->unreadNotifications->markAsRead();

		return response()
				->json([
						'marked' => true
				]);
	}
}
