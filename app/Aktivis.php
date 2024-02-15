<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Aktivis extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'aktivis';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    public static $rules = [
        'name' => 'required',
        'nik'=> 'sometimes|required|unique:aktivis',
    ];
    
    protected $fillable = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','gambar','darah','tinggi','berat','kontak','gambar','id_villages','id_districts','id_regencies','id_provinces','npwp','gambar_ttd'
    ];

    protected $allowedFilters = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','berat','kontak','created_at','updated_at','npwp',
        
        'pekerjaan_aktif.tingkat','pekerjaan_aktif.cu.name','pekerjaan_aktif.name','pendidikan_tertinggi.tingkat','pendidikan_tertinggi.name','villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','berat','kontak','created_at','updated_at','npwp',
        
        'aktivis_pekerjaan.tingkat', 'pekerjaan_aktif.tingkat'
    ];

    public static function initialize()
    {
        return [
            'nim' => '','nim_cu' => '','nik' => '','name' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','gambar'=> '','id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'npwp' => '',
            'gambar_ttd'=>''
        ];
    }
    
    public function pendidikan(){
        return $this->hasOne('App\AktivisPendidikan','id_aktivis','id');
    }

    public function pendidikans(){
        return $this->hasMany('App\AktivisPendidikan','id_aktivis','id');
    }

    public function pendidikan_tertinggi(){
        return $this->hasOne('App\AktivisPendidikan','id_aktivis','id')->latest('mulai');
    }

    public function pekerjaan(){
        return $this->hasOne('App\AktivisPekerjaan','id_aktivis','id');
    }

    public function pekerjaans(){
        return $this->hasMany('App\AktivisPekerjaan','id_aktivis','id')->orderBy('mulai','desc');
    }

    public function pekerjaan_aktif(){
        return $this->hasOne('App\AktivisPekerjaan','id_aktivis','id')->where('status',1)->latest();
    }

    public function pekerjaan_tidak_aktif(){
        return $this->hasOne('App\AktivisPekerjaan','id_aktivis','id')->where('status',3)->latest();
    }

    public function keluarga(){
        return $this->hasMany('App\AktivisKeluarga','id_aktivis','id');
    }

    public function anggota_cu(){
        return $this->hasMany('App\AktivisAnggotaCu','id_aktivis','id');
    }

    public function organisasi(){
        return $this->hasMany('App\AktivisOrganisasi','id_aktivis','id');
    }

    public function diklat(){
        return $this->hasMany('App\KegiatanPeserta','aktivis_id','id');
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

    public function atasanByAktivis()
    {
        return $this->hasOne('App\StrukturOrganisasi', 'id_aktivis', 'id')->select('id', 'id_aktivis', 'id_user_atasan', 'id_bidang', 'id_aktivis_atasan');
    }

    public function mkg()
    {
        return $this->hasOne('App\MkgSekarang', 'id_aktivis', 'id')->select('id','id_aktivis');
    }

    
}