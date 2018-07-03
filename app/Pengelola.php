<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class Pengelola extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'pengelola';

    protected static $logFillable = true;

    public static $rules = [
        'nik'=>'required',
        'name'=>'required',
        'email' =>  'email'
    ];
    
    protected $fillable = [
        'nim','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','gambar','darah','tinggi','berat','kontak','gambar','id_villages','id_districts','id_regencies','id_provinces'
    ];

    protected $filter = [
        'nim','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','berat','kontak','created_at','updated_at','pengelola_pekerjaan.tingkat', 'pekerjaan_aktif.tingkat'
    ];

    public static function initialize()
    {
        return [
            'nim' => '','nik' => '','name' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','gambar'=> '','id_villages' => '0', 'id_districts' => '0', 'id_regencies' => '0', 'id_provinces' => '0'
        ];
    }

    public function pendidikan(){
        return $this->hasOne('App\PengelolaPendidikan','id_pengelola','id');
    }

    public function pendidikans(){
        return $this->hasMany('App\PengelolaPendidikan','id_pengelola','id');
    }

    public function pendidikan_tertinggi(){
        return $this->hasOne('App\PengelolaPendidikan','id_pengelola','id')->oldest();
    }

    public function pekerjaan(){
        return $this->hasOne('App\PengelolaPekerjaan','id_pengelola','id');
    }

    public function pekerjaans(){
        return $this->hasMany('App\PengelolaPekerjaan','id_pengelola','id')->orderBy('mulai','desc');
    }

    public function pekerjaan_aktif(){
        return $this->hasOne('App\PengelolaPekerjaan','id_pengelola','id')->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'))->latest();
    }

    public function keluarga(){
        return $this->hasMany('App\PengelolaKeluarga','id_pengelola','id');
    }

    public function anggotacu(){
        return $this->hasMany('App\PengelolaAnggotaCU','id_pengelola','id');
    }

    public function organisasi(){
        return $this->hasMany('App\PengelolaOrganisasi','id_pengelola','id');
    }

    public function Provinces()
    {
        return $this->belongsTo('App\Region\Provinces','id_provinces','id')->select('id','name');
    }
		
    public function Regencies()
    {
        return $this->belongsTo('App\Region\Regencies','id_regencies','id')->select('id','name');
    }
		
    public function Districts()
    {
        return $this->belongsTo('App\Region\Districts','id_districts','id')->select('id','name');
    }
		
    public function Villages()
    {
        return $this->belongsTo('App\Region\Villages','id_villages','id')->select('id','name');
    }
}