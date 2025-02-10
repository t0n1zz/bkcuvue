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
use Spatie\Activitylog\Models\Activity;

class UserController extends Controller
{
	protected $imagepath = 'images/user/';
	
	protected $permissions = [
		'index_artikel',
		'create_artikel',
		'update_artikel',
		'destroy_artikel',
		'terbitkan_artikel',
		'utamakan_artikel',

		'create_artikel_simo',
		'update_artikel_simo',
		'destroy_artikel_simo',

		'index_user',
		'create_user',
		'update_user',
		'destroy_user',
		'reset_password',
		'status_user',
		'hak_akses_user',

		'index_artikel_penulis',
		'create_artikel_penulis',
		'update_artikel_penulis',
		'destroy_artikel_penulis',

		'index_artikel_kategori',
		'create_artikel_kategori',
		'update_artikel_kategori',
		'destroy_artikel_kategori',

		'index_pengumuman',
		'create_pengumuman',
		'update_pengumuman',
		'destroy_pengumuman',

		'index_saran',
		'destroy_saran',

		'index_error_log',
		'destroy_error_log',

		'index_anggota_cu',
		'create_anggota_cu',
		'update_anggota_cu',
		'destroy_anggota_cu',
		'upload_anggota_cu',
		'informasi_anggota_cu',

		'index_saldo',
		'create_saldo',
		'update_saldo',
		'destroy_saldo',

		'index_jalinan_klaim',
		'create_jalinan_klaim',
		'update_jalinan_klaim',
		'destroy_jalinan_klaim',
		'laporan_jalinan_klaim',
		'pencairan_jalinan_klaim',
		'verifikasi_pengurus_jalinan_klaim',
		'verifikasi_pengawas_jalinan_klaim',
		'verifikasi_manajemen_jalinan_klaim',

		'index_jalinan_iuran',
		'create_jalinan_iuran',
		'update_jalinan_iuran',
		'destroy_jalinan_iuran',

		'index_cu',
		'create_cu',
		'update_cu',
		'destroy_cu',

		'index_tp',
		'create_tp',
		'update_tp',
		'destroy_tp',

		'index_aktivis',
		'create_aktivis',
		'update_aktivis',
		'destroy_aktivis',

		'index_surat',
		'create_surat',
		'update_surat',
		'destroy_surat',

		'index_surat_masuk',
		'create_surat_masuk',
		'update_surat_masuk',
		'destroy_surat_masuk',

		'index_dokumen',
		'create_dokumen',
		'update_dokumen',
		'destroy_dokumen',

		'index_dokumen_kategori',
		'create_dokumen_kategori',
		'update_dokumen_kategori',
		'destroy_dokumen_kategori',

		'index_aset_tetap',
		'create_aset_tetap',
		'update_aset_tetap',
		'destroy_aset_tetap',

		'index_aset_tetap_jenis',
		'create_aset_tetap_jenis',
		'update_aset_tetap_jenis',
		'destroy_aset_tetap_jenis',

		'index_aset_tetap_lokasi',
		'create_aset_tetap_lokasi',
		'update_aset_tetap_lokasi',
		'destroy_aset_tetap_lokasi',

		'index_assesment_access',
		'create_assesment_access',
		'update_assesment_access',
		'destroy_assesment_access',

		'index_monitoring',
		'create_monitoring',
		'update_monitoring',
		'destroy_monitoring',

		'index_mitra_orang',
		'create_mitra_orang',
		'update_mitra_orang',
		'destroy_mitra_orang',

		'index_mitra_lembaga',
		'create_mitra_lembaga',
		'update_mitra_lembaga',
		'destroy_mitra_lembaga',

		'index_produk_cu',
		'create_produk_cu',
		'update_produk_cu',
		'destroy_produk_cu',

		'index_diklat_bkcu',
		'create_diklat_bkcu',
		'update_diklat_bkcu',
		'destroy_diklat_bkcu',

		'index_pertemuan_bkcu',
		'create_pertemuan_bkcu',
		'update_pertemuan_bkcu',
		'destroy_pertemuan_bkcu',

		'index_tempat',
		'create_tempat',
		'update_tempat',
		'destroy_tempat',

		'index_pemilihan',
		'create_pemilihan',
		'update_pemilihan',
		'destroy_pemilihan',

		'index_voting',
		'create_voting',
		'update_voting',
		'destroy_voting',

		'index_laporan_cu',
		'create_laporan_cu',
		'update_laporan_cu',
		'destroy_laporan_cu',
		'upload_laporan_cu',
		'diskusi_laporan_cu',

		'index_laporan_tp',
		'create_laporan_tp',
		'update_laporan_tp',
		'destroy_laporan_tp',
		'upload_laporan_tp',
		'diskusi_laporan_tp',

		'index_kubn',
		'create_kubn',
		'update_kubn',
		'destroy_kubn',

		'index_kombas',
		'create_kombas',
		'update_kombas',
		'destroy_kombas',

		'index_enterpreneur',
		'create_enterpreneur',
		'update_enterpreneur',
		'destroy_enterpreneur',

		'index_umkm',
		'create_umkm',
		'update_umkm',
		'destroy_umkm',

		'index_mentor',
		'create_mentor',
		'update_mentor',
		'destroy_mentor',

		'index_fasilitator',
		'create_fasilitator',
		'update_fasilitator',
		'destroy_fasilitator',

		'index_keahlian',
		'create_keahlian',
		'update_keahlian',
		'destroy_keahlian',

		'index_jenis_diklat',
		'create_jenis_diklat',
		'update_jenis_diklat',
		'destroy_jenis_diklat',

		'index_assesment_culeg',
		'create_assesment_culeg',
		'update_assesment_culeg',
		'destroy_assesment_culeg',
	];

	public function index()
	{
		$table_data = User::with('pus','cu','aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('id','!=',1)->advancedFilter();
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = User::with('pus','cu','aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('id','!=',1)->where('id_cu',$id)->advancedFilter();
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCuPermission($id)
	{
		$table_data1 = User::with('aktivis.pekerjaan_aktif')->where('id_cu',$id)->permission('verifikasi_pengurus_jalinan_klaim')->get();
		$table_data2 = User::with('aktivis.pekerjaan_aktif')->where('id_cu',$id)->permission('verifikasi_pengawas_jalinan_klaim')->get();
		$table_data3 = User::with('aktivis.pekerjaan_aktif')->where('id_cu',$id)->permission('verifikasi_manajemen_jalinan_klaim')->get();
		
		return response()
		->json([
			'model1' => $table_data1,
			'model2' => $table_data2,
			'model3' => $table_data3,
		]);
	}

	public function getActivity($id)
	{
		$user = User::findOrFail($id);

		$table_data = Activity::causedBy($user)->orderBy('created_at','desc')->paginate();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexActivity()
	{
		$table_data = Activity::orderBy('created_at','desc')->paginate();

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
				$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar,'', $username);
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

			$this->hakAksesSave($request->permission,$kelas);

			return response()
				->json([
					'saved' => true,
					'message' => 'User ' .$username. ' berhasil ditambah'
				]);
	}

	public function edit($id)
	{
		$kelas = User::with('cu','aktivis','pus','roles')->findOrFail($id);
		
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
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar, $kelas->gambar, $username);
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

		$this->hakAksesSave($request->all(),$kelas);
		
		$user = Auth::user();

	  // add activity log for changing hak akses
		Activity()->performedOn($kelas)->causedBy($user)
		->withProperties(['attributes' => ['hak akses']])
		->log('updated');
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Hak Akses User ' .$kelas->username. ' berhasil diubah. Apabila user tersebut saat ini sudah login ke SIMO, maka untuk melihat perubahannya user tersebut mesti logout dan login lagi.'
			]);
	}

	public function updateFoto(Request $request, $id)
	{
		$kelas = User::findOrFail($id);

		$username = $kelas->username;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar,$kelas->gambar,$username);
		else
			$fileName = '';

		$kelas->update(['gambar' => $fileName]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Foto user ' .$username. ' berhasil diubah'
			]);
	}

	public function updateIdentitas(Request $request, $id)
	{
		$kelas = User::findOrFail($id);

		$kelas->update(['name' => $request->name, 'email' => $request->email]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Identitas user ' .$kelas->username. ' telah berhasil diubah, silahkan logout dan login kembali untuk melihat perubahannya'
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
		$kelas->isChangePassword = 1;
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
		$password = \Config::get('values.reset_password');
		$a = $password;

		$password = Hash::make($password);

		$username = $kelas->username;

		$kelas->password = $password;
		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => 'Password user ' .$username. ' telah berhasil direset menjadi ' . $a
			]);
	}

	public function destroy($id)
	{
		$kelas = User::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'User ' .$name. 'berhasil dihapus'
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
		
	public function hakAksesSave($request,$user)
	{
		foreach($this->permissions as $item){
			if(in_array($item, $request)) {
				if(!$user->hasPermissionTo($item)){
					$user->givePermissionTo($item);
				}
			}else{
				$user->revokePermissionTo($item);
			}
		}
	}

	public function count()
	{
			$id = Auth::user('api')->id_cu;

			if($id == 0){
					$table_data = User::count();
			}else{
					$table_data = User::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
