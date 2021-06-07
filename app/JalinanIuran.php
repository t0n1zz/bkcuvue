<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class JalinanIuran extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'jalinan_iuran';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_cu' => 'required',
        'periode' => 'required',
    ];

    protected $fillable = [
        'id_cu','periode','status','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','id_cu','periode','status','created_at','updated_at','deleted_at',
        
        'cu.name',
    ];

    protected $orderable = [
        'id','id_cu','periode','status','created_at','updated_at','deleted_at',

        'cu.name',
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '', 'periode' => '', 'status' => '',
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function anggota(){
        return $this->belongsToMany('App\Anggota','jalinan_iuran_anggota')->withPivot('umur_masuk','umur_sekarang')->withTimestamps();
    }

    public function hasCalon(){
        return $this->hasMany('App\PemilihanCalon','pemilihan_id','id');
    }

    public function hasSuara(){
        return $this->hasMany('App\PemilihanSuara','pemilihan_id','id');
    }
}