<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Kegiatan extends BaseEloquent {
    
    use Dataviewer, LogsActivity, Sluggable,  SoftDeletes;

    protected $table = 'kegiatan';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'name' => 'required'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
            ]
        ];
    }
    
    protected $fillable = [
      'id_regencies','id_districts','id_regencies','id_provinces','id_tempat','kode_diklat','name','periode','durasi','mulai','selesai','jadwal','keterangan','keteranganBatal','status','tipe','peserta_max','peserta_max_cu','peserta_min','created_at','updated_at','deleted_at','gambar','tipe_tempat','keputusan_cu','keputusan_user','pertanyaan_cu','pertanyaan_user'
    ];

    protected $allowedFilters = [
        'id','id_tempat','kode_diklat','name','periode','durasi','mulai','selesai','status','peserta_max','peserta_max_cu','peserta_min','created_at','updated_at','deleted_at','tipe_tempat',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','tempat.name'
    ];

    protected $orderable = [
        'id','id_tempat','kode_diklat','name','periode','durasi','mulai','selesai','status','peserta_max','peserta_max_cu','peserta_min','created_at','updated_at','deleted_at','tipe_tempat',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','tempat.name'
    ];
    
    public static function initialize(){
        return [
            'id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'id_tempat' => '', 'kode_diklat' => '', 'name' => '', 'kota' => '', 'tipe' => '', 'periode' => '','durasi' => '', 'mulai' => '', 'selesai' => '','jadwal' => '', 'keterangan' => '', 'status' => '', 'peserta_max' => '', 'peserta_min' => '', 'gambar' => '', 'tipe_tempat' => ''
        ];
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
        
    public function tempat(){
        return $this->belongsTo('App\Tempat','id_tempat','id');
    }

    public function sasaran(){
        return $this->belongsToMany('App\Sasaran','kegiatan_sasaran')->withTimestamps();
    }

    public function panitia_dalam(){
        return $this->belongsToMany('App\Aktivis','kegiatan_panitia')->where('asal','dalam')->withPivot('peran','keterangan','asal')->withTimestamps();
    }

    public function panitia_luar(){
        return $this->belongsToMany('App\MitraOrang','kegiatan_panitia','kegiatan_id','aktivis_id')->where('asal','luar')->withPivot('peran','keterangan','asal')->withTimestamps();
    }

    public function peserta(){
        return $this->belongsToMany('App\Peserta','kegiatan_peserta')->withTimestamps();
    }

    public function pilih(){
        return $this->hasMany('App\KegiatanPilih','kegiatan_id','id');
    }

    public function hasPeserta(){
        return $this->hasMany('App\KegiatanPeserta','kegiatan_id','id');
    }

    public function hasKeputusan(){
        return $this->hasMany('App\KegiatanKeputusan','kegiatan_id','id');
    }

    public function hasMateri(){
        return $this->hasMany('App\KegiatanMateri','kegiatan_id','id');
    }
}