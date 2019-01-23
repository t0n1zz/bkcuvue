<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Aktivis extends Model {

    use Dataviewer, LogsActivity;

    protected $table = 'aktivis';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'nik'=>'required',
        'name'=>'required',
        'email' =>  'email'
    ];
    
    protected $fillable = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','gambar','darah','tinggi','berat','kontak','gambar','id_villages','id_districts','id_regencies','id_provinces'
    ];

    protected $allowedFilters = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','berat','kontak','created_at','updated_at',
        
        'pekerjaan_aktif.tingkat','pekerjaan_aktif.cu.name','pekerjaan_aktif.name','pendidikan_tertinggi.tingkat','pendidikan_tertinggi.name','villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','berat','kontak','created_at','updated_at',
        
        'aktivis_pekerjaan.tingkat', 'pekerjaan_aktif.tingkat'
    ];

    public static function initialize()
    {
        return [
            'nim' => '','nim_cu' => '','nik' => '','name' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','gambar'=> '','id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => ''
        ];
    }

    public function pendidikan(){
        return $this->hasOne('App\AktivisPendidikan','id_aktivis','id');
    }

    public function pendidikans(){
        return $this->hasMany('App\AktivisPendidikan','id_aktivis','id');
    }

    public function pendidikan_tertinggi(){
        return $this->hasOne('App\AktivisPendidikan','id_aktivis','id')->oldest();
    }

    public function pekerjaan(){
        return $this->hasOne('App\AktivisPekerjaan','id_aktivis','id');
    }

    public function pekerjaans(){
        return $this->hasMany('App\AktivisPekerjaan','id_aktivis','id')->orderBy('mulai','desc');
    }

    public function pekerjaan_aktif(){
        return $this->hasOne('App\AktivisPekerjaan','id_aktivis','id')->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'))->latest();
    }

    public function keluarga(){
        return $this->hasMany('App\AktivisKeluarga','id_aktivis','id');
    }

    public function anggotacu(){
        return $this->hasMany('App\AktivisAnggotaCU','id_aktivis','id');
    }

    public function organisasi(){
        return $this->hasMany('App\AktivisOrganisasi','id_aktivis','id');
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