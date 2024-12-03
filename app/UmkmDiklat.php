<?php
namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class UmkmDiklat extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'umkm_diklat';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_umkm' => 'required',
        'name' => 'required',
    ];
    
    protected $fillable = ['id_umkm','name','deskripsi','tanggal_mulai','tanggal_selesai','fasilitator','tempat'];

    protected $allowedFilters = [
        'id','id_umkm','name','deskripsi','tanggal_mulai','tanggal_selesai','fasilitator','tempat','created_at','updated_at'
    ];

    protected $orderable = [
        'id','id_umkm','name','deskripsi','tanggal_mulai','tanggal_selesai','fasilitator','tempat','created_at','updated_at'
    ];
    
    public static function initialize(){
        return [
            'id_umkm' => '','name' => '', 'deskripsi' => '','tanggal_mulai' => '','tanggal_selesai' => '','fasilitator' => '','tempat' => ''
        ];
    }
}