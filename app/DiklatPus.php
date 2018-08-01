<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class DiklatPus extends Model {
    
    use FilterPaginateOrder, LogsActivity, SoftDeletes;

    protected $table = 'diklat_pus';
    protected static $logFillable = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_tempat' => 'required',
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
      'id_tempat','kode_diklat','name','kota','periode','mulai','selesai','keterangan','status','peserta_max','peserta_min','created_at','updated_at','deleted_at'
    ];

    protected $filter = [
        'id','id_tempat','kode_diklat','name','kota','periode','mulai','selesai','keterangan','status','peserta_max','peserta_min','created_at','updated_at','deleted_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'id_tempat' => '0', 'kode_diklat' => '', 'name' => '', 'kota' => '', 'tipe' => '', 'periode' => '', 'mulai' => '', 'selesai' => '','keterangan' => '', 'status' => '', 'peserta_max' => '0', 'peserta_min' => '0'
        ];
    }
        
    public function tempat(){
        return $this->belongsTo('App\DiklatPusTempat','id_tempat','id');
    }

    public function sasaran_hub(){
        return $this->hasmany('App\DiklatPusSasaranHub','id_kegiatan','id');
    }

    public function prasyarat(){
        return $this->hasMany('App\DiklatPusPrasyarat','id_prasyarat','id');
    }

    public function total_peserta(){
        return $this->hasmany('App\DiklatPusPeserta','id_kegiatan','id');
    }
}