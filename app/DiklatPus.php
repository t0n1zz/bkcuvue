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
      'id_tempat','kode_diklat','name','kota','tipe','periode','tanggal','tanggal2','tujuan','ruang','informasi','deskripsi','peserta','keterangan','status','max','min','created_at','updated_at','deleted_at'
    ];

    protected $filter = [
        'id','id_tempat','kode_diklat','name','kota','tipe','periode','tanggal','tanggal2','tujuan','ruang','informasi','deskripsi','peserta','keterangan','status','max','min','created_at','updated_at','deleted_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'id_tempat' => '0', 'kode_diklat' => '', 'name' => '', 'kota' => '', 'tipe' => '', 'periode' => '', 'tanggal' => '', 'tanggal2' => '', 'tujuan' => '', 'ruang' => '', 'informasi' => '', 'deskripsi' => '', 'peserta' => '', 'keterangan' => '', 'status' => '', 'max' => '0', 'min' => '0'
        ];
    }
        
    public function tempat(){
        return $this->belongsTo('App\KegiatanTempat','id_tempat','id');
    }

    public function sasaranhub(){
        return $this->hasmany('App\KegiatanSasaranHub','id_kegiatan','id');
    }

    public function prasyarat(){
        return $this->hasMany('App\KegiatanPrasyarat','id_prasyarat','id');
    }

    public function total_peserta(){
        return $this->hasmany('App\KegiatanPeserta','id_kegiatan','id');
    }
}