<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class JalinanIuranAnggota extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'jalinan_iuran_anggota';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'jalinan_iuran_id' => 'required',
        'anggota_cu_id' => 'required',
    ];

    
    protected $fillable = [
        'jalinan_iuran_id','anggota_cu_id','umur_masuk','umur_sekarang','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','jalinan_iuran_id','anggota_cu_id','umur_masuk','umur_sekarang','created_at','updated_at','deleted_at',

        'anggota_cu.name',
    ];

    protected $orderable = [
        'id','jalinan_iuran_id','anggota_cu_id','umur_masuk','umur_sekarang','created_at','updated_at','deleted_at',

        'anggota_cu.name',
    ];
    
    public static function initialize(){
        return [
            'jalinan_iuran_id' => '', 'anggota_cu_id' => '', 'umur_masuk' => '','umur_sekarang' => ''
        ];
    }

    public function anggota()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select('id','name');
    }

    public function produk()
    {
        return $this->hasMany('App\JalinanIuranProduk','anggota_cu_id','anggota_cu_id');
    }
}