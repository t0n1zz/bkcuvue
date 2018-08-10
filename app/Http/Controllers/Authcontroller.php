<?php

namespace App\Http\Controllers;

use DB;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;
use App\User;
use Response;

class Authcontroller extends Controller
{
	// login
	public function login()
	{
		// check username
		$user = User::where('username',request('username'))->first();
		if (!$user) {
			return response()->json([
				'message' => 'Maaf username salah.',
				'status' => 422
			], 422);
		}

		// check password
		if (!Hash::check(request('password'), $user->password)) {
			return response()->json([
				'message' => 'Maaf password salah.',
				'status' => 422
			], 422);
		}

		Auth::attempt(array('username' => request('username'), 'password' => request('password')));

		$client = DB::table('oauth_clients')
			->where('password_client', true)
			->first();
			
		if (!$client) {
			return response()->json([
					'message' => 'Maaf terjadi kesalahan konfigurasi.',
					'status' => 500
			], 500);
		}	

		// Send an internal API request to get an access token
		$data = [
			'grant_type' => 'password',
			'client_id' => $client->id,
			'client_secret' => $client->secret,
			'username' => request('username'),
			'password' => request('password'),
		];

		$request = Request::create('/oauth/token', 'POST', $data);

		$response = app()->handle($request);

		// Check if the request was successful
		if ($response->getStatusCode() != 200) {
			return response()->json([
				'message' => 'Maaf terjadi kesalahan login, mohon ulangi lagi.',
				'status' => 422
			], 422);
		}

		// Get the data from the response
		$data = json_decode($response->getContent());

		// Format the final response in a desirable format
		return response()->json([
			'token' => $data->access_token,
			'user' => $user,
			'status' => 200
			], 200);

	}
	
	// logout
	public function logout()
	{
		$accessToken = auth()->user()->token();

		$refreshToken = DB::table('oauth_refresh_tokens')
				->where('access_token_id', $accessToken->id)
				->update([
						'revoked' => true
				]);

		$accessToken->revoke();

		return response()->json(['status' => 200]);
	}

	// check user
	public function userId()
	{
			$id = auth()->user()->getId();

			return response()
			->json([
					$id
			]);
	}

	public function getUser()
	{
		return auth()->user();
	}

	public function profile()
	{
		$id = auth()->user()->getId();

		$kelas = User::with('pus','cu')->findOrFail($id);
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
						'model' => $kelas,
						'notification' => $notification,
						'unreadNotification' => $unreadNotification
				]);
	}

}
