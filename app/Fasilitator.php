<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Fasilitator extends BaseEloquent {

    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'fasilitator';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $revisionEnabled = true;
    protected $revisionCleanup = true;
    protected $historyLimit = 500;
    
    public static $rules = [
        'anggota_cu_id' => 'required',
        'id_cu' => 'required'
    ];

    protected $fillable = [
        'anggota_cu_id','id_cu','deskripsi'
    ];

    protected $allowedFilters = [
        'id','anggota_cu_id','id_cu','deskripsi','created_at','updated_at',

        'anggota_cu.name','cu.name'
    ];

    protected $orderable = [
        'id','anggota_cu_id','id_cu','deskripsi','created_at','updated_at',

        'anggota_cu.name','cu.name'
    ];
    
    public static function initialize(){
        return [
            'anggota_cu_id' => '','id_cu' => '', 'deskripsi' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id');
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name','id_provinces')->withTrashed();
    }

    public function jenis_diklat(){
        return $this->belongsToMany('App\JenisDiklat','fasilitator_jenis_diklat')->withPivot('id','jenis_diklat_id','fasilitator_id')->withTimestamps();
    }
}