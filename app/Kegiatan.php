<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kegiatan extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'kegiatan';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_tempat' => 'required',
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
      'id_regencies','id_districts','id_regencies','id_provinces','id_tempat','kode_diklat','name','periode','durasi','mulai','selesai','jadwal','keterangan','keteranganBatal','status','tipe','peserta_max','peserta_max_cu','peserta_min','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','id_tempat','kode_diklat','name','periode','durasi','mulai','selesai','status','peserta_max','peserta_max_cu','peserta_min','created_at','updated_at','deleted_at',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','tempat.name'
    ];

    protected $orderable = [
        'id','id_tempat','kode_diklat','name','periode','durasi','mulai','selesai','status','peserta_max','peserta_max_cu','peserta_min','created_at','updated_at','deleted_at',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','tempat.name'
    ];
    
    public static function initialize(){
        return [
            'id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'id_tempat' => '', 'kode_diklat' => '', 'name' => '', 'kota' => '', 'tipe' => '', 'periode' => '','durasi' => '', 'mulai' => '', 'selesai' => '','jadwal' => '', 'keterangan' => '', 'status' => '', 'peserta_max' => '', 'peserta_min' => ''
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

    public function prasyarat(){
        return $this->hasMany('App\KegiatanPrasyarat','id_prasyarat','id');
    }

    public function total_peserta(){
        return $this->hasmany('App\KegiatanPeserta','id_kegiatan','id');
    }
}