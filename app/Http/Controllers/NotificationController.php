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
		// $id = auth('api')->user()->getId();
		// $kelas = User::findOrFail($id);
		$notification = auth('api')->user()->notifications->take(10);
		$unreadNotification = auth('api')->user()->unreadNotifications->take(11)->count();

		return response()
			->json([
				'notification' => $notification,
				'unreadNotification' => $unreadNotification
			]);
	}
    
  public function getAll()
	{
		// $id = auth('api')->user()->getId();
		// $kelas = User::findOrFail($id);
		$notification = auth('api')->user()->notifications->get();
		$unreadNotification = auth('api')->user()->unreadNotifications->get()->count();

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
