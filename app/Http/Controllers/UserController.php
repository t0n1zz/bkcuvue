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

class UserController extends Controller
{
  protected $imagepath = 'images/user/';

	public function index()
	{
			$table_data = User::with('CU','pus','roles')->select('id','id_cu','id_pus','name','username','gambar','status','created_at')->filterPaginateOrder();
			
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
		$this->check_data($request);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = $this->image_processing($request);
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
		
		//assigning user role
		$role = Role::findOrFail($request->peran);
		$user = User::where('username',$username)->first();
		$user->assignrole($role->name);

		return response()
			->json([
				'saved' => true,
				'message' => 'User ' .$username. ' berhasil ditambah'
			]);
	}

	public function edit($id)
	{
		$kelas = User::with('CU','pus')->findOrFail($id);
		
		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

  public function updateStatus($id)
	{
		$kelas = User::findOrFail($id);

		if($kelas->status == 1){
			$kelas->status = 0;
			$message = "User berhasil dinon-aktifkan";
		}else{
			$kelas->status = 1;
			$message = "User berhasil diaktifkan";
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}
    
	public function getUser(){
			$id = Auth::user()->getId();

			return response()
			->json([
					$id
			]);
	}

	public function userData(){
			$id = Auth::user()->getId();

			$kelas = User::with('pus','cu')->findOrFail($id);

			return response()
					->json([
							'model' => $kelas
					]);
	}

	private function check_data($request)
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
}
