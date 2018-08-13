<?php

namespace App\Http\Controllers;

use Auth;
use Hash;
use Image; 
use File;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use App\Support\Helper;
use Illuminate\Notifications\DatabaseNotification;

class UserController extends Controller
{
  protected $imagepath = 'images/user/';

	public function index()
	{
			$table_data = User::with('Cu','pus')->select('id','id_cu','id_pus','name','email','username','gambar','status','created_at')->filterPaginateOrder();
			
    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id)
	{
			$table_data = User::with('Cu','pus')->where('id_cu',$id)->select('id','id_cu','id_pus','name','email','username','gambar','status','created_at')->filterPaginateOrder();
			
    	return response()
			->json([
				'model' => $table_data
			]);
	}
	
	public function create()
	{
		return response()
			->json([
					'form' => User::initialize(),
					'rules' => User::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		// validate request
		$this->validate($request,User::$rules);

		$username = $request->username;
		$password = $request->password;
		$passwordConfirm = $request->passwordConfirm;

		//check data
		$this->checkData($request);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request);
		else
			$fileName = '';

		//password encryption	
		$password = Hash::make($password);

		// save user
		$kelas = User::create($request->except('gambar','password','status','id_pus') + [
			'gambar' => $fileName, 
			'password' => $password, 
			'status' => 1,
			'id_pus' => 1
		]);

		$this->hakAksesSave($request,$kelas);

		return response()
			->json([
				'saved' => true,
				'message' => 'User ' .$username. ' berhasil ditambah'
			]);
	}

	public function edit($id)
	{
		$kelas = User::with('Cu','pus','roles')->findOrFail($id);
		
		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function editHakAkses($id)
	{
		$kelas = User::findOrFail($id);
		
		$table_data = $kelas->getAllPermissions();

		return response()
			->json([
				'model' => $table_data,
			]);
	}

	public function update(Request $request, $id)
	{
		$kelas = User::findOrFail($id);

		$username = $kelas->username;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request,$kelas);
		else
			$fileName = '';

		

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);

		return response()
			->json([
				'saved' => true,
				'message' => 'User ' .$username. ' berhasil diubah'
			]);
	}

  public function updateStatus($id)
	{
		$kelas = User::findOrFail($id);

		$username = $kelas->username;

		if($kelas->status == 1){
			$kelas->status = 0;
			$message = 'User ' .$username. ' berhasil dinon-aktifkan';
		}else{
			$kelas->status = 1;
			$message = 'User ' .$username. ' berhasil diaktifkan';
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function updateHakAkses(Request $request, $id)
	{
		$kelas = User::findOrFail($id);
		$this->hakAksesSave($request,$kelas);

		return response()
			->json([
				'saved' => true,
				'message' => 'Hak Akses User ' .$kelas->username. ' berhasil diubah'
			]);
	}

	public function updateFoto(Request $request, $id)
	{
		$kelas = User::findOrFail($id);

		$username = $kelas->username;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request,$kelas);
		else
			$fileName = '';

		$kelas->update(['gambar' => $fileName]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Foto user ' .$username. ' berhasil diubah'
			]);
	}

	public function updatePassword(Request $request, $id)
	{
		$kelas = User::findOrFail($id);

		if (!Hash::check(request('password_old'), $kelas->password)) {
				return response()->json([
						'message' => 'Password lama anda salah',
						'status' => 500
				], 500);
		}

		if (Hash::check(request('password'), $kelas->password)) {
			return response()->json([
					'message' => 'Password baru tidak boleh sama dengan yang lama',
					'status' => 500
			], 500);
		}
	
		$password = $request->password;
		$password = Hash::make($password);

		$username = $kelas->username;

		$kelas->password = $password;
		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => 'Password user ' .$username. ' telah berhasil diubah'
			]);
	}

	public function updateResetPassword($id)
	{
		$kelas = User::findOrFail($id);
		$password = env('RESET_PASSWORD');
		$password = Hash::make($password);

		$username = $kelas->username;

		$kelas->password = $password;
		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => 'Password user ' .$username. ' telah berhasil direset'
			]);
	}

	private function checkData($request)
	{
		$username = $request->username;
		$password = $request->password;
		$passwordConfirm = $request->passwordConfirm;

		//check username
		$checkUsername = User::where('username',$username)->first();
		if(!empty($checkUsername)){
			return response()
				->json([
					'saved' => false,
					'message' => 'Oops terjadi kesalahan: username tidak tersedia, silahkan coba username lain.'
				]);
		}

		//confirm password
		if($password != $passwordConfirm){
			return response()
				->json([
					'saved' => false,
					'message' => 'Oops terjadi kesalahan: password dengan password konfirmasi tidak sama.'
				]);
		}
	}

	private function image_processing($request)
	{
		$this->validate($request, [
    		'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
    	]);

		$path = public_path($this->imagepath);
		$imageData = $request->gambar;
		list($width, $height) = getimagesize($imageData);

		$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$request->name),10,'') . '_' .uniqid();
		$fileName =  $formatedName. '.jpg';
		$fileName2 =  $formatedName. 'n.jpg';

		//image
		if($width > 720){
				Image::make($imageData->getRealPath())->resize(720, null,
						function ($constraint) {
								$constraint->aspectRatio();
						})
						->save($path . $fileName);
		}else{
				Image::make($imageData->getRealPath())->save($path . $fileName);
		}

		//thumbnail image
		Image::make($imageData->getRealPath())->resize(200, 200,
						function ($constraint) {
								$constraint->aspectRatio();
						})
						->save($path . $fileName2);

		return $formatedName;
	}

	public function hakAkses($request,$permission,$user)
	{
		if($request == true) {
			if(!$user->hasPermissionTo($permission)){
				$user->givePermissionTo($permission);
			}
		}else{
			$user->revokePermissionTo($permission);
		}
	}
		
	public function hakAksesSave($request,$user)
	{
		$this->hakAkses($request->index_artikel,'index_artikel',$user);
		$this->hakAkses($request->create_artikel,'create_artikel',$user);
		$this->hakAkses($request->update_artikel,'update_artikel',$user);
		$this->hakAkses($request->destroy_artikel,'destroy_artikel',$user);
		$this->hakAkses($request->terbitkan_artikel,'terbitkan_artikel',$user);
		$this->hakAkses($request->utamakan_artikel,'utamakan_artikel',$user);
		$this->hakAkses($request->index_artikel_penulis,'index_artikel_penulis',$user);
		$this->hakAkses($request->create_artikel_penulis,'create_artikel_penulis',$user);
		$this->hakAkses($request->update_artikel_penulis,'update_artikel_penulis',$user);
		$this->hakAkses($request->destroy_artikel_penulis,'destroy_artikel_penulis',$user);
		$this->hakAkses($request->index_artikel_kategori,'index_artikel_kategori',$user);
		$this->hakAkses($request->create_artikel_kategori,'create_artikel_kategori',$user);
		$this->hakAkses($request->update_artikel_kategori,'update_artikel_kategori',$user);
		$this->hakAkses($request->destroy_artikel_kategori,'destroy_artikel_kategori',$user);
		$this->hakAkses($request->index_diklat_pus,'index_diklat_pus',$user);
		$this->hakAkses($request->create_diklat_pus,'create_diklat_pus',$user);
		$this->hakAkses($request->update_diklat_pus,'update_diklat_pus',$user);
		$this->hakAkses($request->destroy_diklat_pus,'destroy_diklat_pus',$user);
		$this->hakAkses($request->index_diklat_tempat,'index_diklat_tempat',$user);
		$this->hakAkses($request->create_diklat_tempat,'create_diklat_tempat',$user);
		$this->hakAkses($request->update_diklat_tempat,'update_diklat_tempat',$user);
		$this->hakAkses($request->destroy_diklat_tempat,'destroy_diklat_tempat',$user);
		$this->hakAkses($request->index_cu,'index_cu',$user);
		$this->hakAkses($request->create_cu,'create_cu',$user);
		$this->hakAkses($request->update_cu,'update_cu',$user);
		$this->hakAkses($request->destroy_cu,'destroy_cu',$user);
		$this->hakAkses($request->index_tp,'index_tp',$user);
		$this->hakAkses($request->create_tp,'create_tp',$user);
		$this->hakAkses($request->update_tp,'update_tp',$user);
		$this->hakAkses($request->destroy_tp,'destroy_tp',$user);
		$this->hakAkses($request->index_produk_cu,'index_produk_cu',$user);
		$this->hakAkses($request->create_produk_cu,'create_produk_cu',$user);
		$this->hakAkses($request->update_produk_cu,'update_produk_cu',$user);
		$this->hakAkses($request->destroy_produk_cu,'destroy_produk_cu',$user);
		$this->hakAkses($request->index_pengelola,'index_pengelola',$user);
		$this->hakAkses($request->create_pengelola,'create_pengelola',$user);
		$this->hakAkses($request->update_pengelola,'update_pengelola',$user);
		$this->hakAkses($request->destroy_pengelola,'destroy_pengelola',$user);
		$this->hakAkses($request->index_laporan_cu,'index_laporan_cu',$user);
		$this->hakAkses($request->create_laporan_cu,'create_laporan_cu',$user);
		$this->hakAkses($request->update_laporan_cu,'update_laporan_cu',$user);
		$this->hakAkses($request->destroy_laporan_cu,'destroy_laporan_cu',$user);
		$this->hakAkses($request->diskusi_laporan_cu,'diskusi_laporan_cu',$user);
		$this->hakAkses($request->index_laporan_tp,'index_laporan_tp',$user);
		$this->hakAkses($request->create_laporan_tp,'create_laporan_tp',$user);
		$this->hakAkses($request->update_laporan_tp,'update_laporan_tp',$user);
		$this->hakAkses($request->destroy_laporan_tp,'destroy_laporan_tp',$user);
		$this->hakAkses($request->diskusi_laporan_tp,'diskusi_laporan_tp',$user);
		$this->hakAkses($request->index_user,'index_user',$user);
		$this->hakAkses($request->create_user,'create_user',$user);
		$this->hakAkses($request->update_user,'update_user',$user);
		$this->hakAkses($request->destroy_user,'destroy_user',$user);
		$this->hakAkses($request->reset_password,'reset_password',$user);
		$this->hakAkses($request->hak_akses_user,'hak_akses_user',$user);
		$this->hakAkses($request->status_user,'status_user',$user);
	}
		
	public function markAllNotifRead()
	{
		$id = Auth::user()->getId();

		$kelas = User::findOrFail($id);

		$kelas->unreadNotifications->markAsRead();

		return response()
				->json([
						'marked' => true
				]);
	}

	public function markNotifRead($id)
	{
		auth()->user()->unreadNotifications->where('id', $id)->markAsRead();

		return response()
				->json([
						'marked' => true
				]);
	}
}
