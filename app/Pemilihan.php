<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pemilihan extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'pemilihan';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'name' => 'required'
    ];

    
    protected $fillable = [
        'id_cu','name','status','created_at','updated_at','deleted_at','suara','suara_ok','tingkat'
    ];

    protected $allowedFilters = [
        'id','id_cu','name','status','created_at','updated_at','deleted_at','suara','suara_ok','tingkat',

        'cu.name',
    ];

    protected $orderable = [
        'id','id_cu','name','status','created_at','updated_at','deleted_at','suara','suara_ok',

        'cu.name',
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '', 'name' => '', 'status' => '',  'suara' => '',  'suara_ok' => '', 'tingkat' => '', 'sumberSuara' => ''
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function calon(){
        return $this->belongsToMany('App\Aktivis','pemilihan_calon')->withPivot('id','skor','pengusung_cu_id')->withTimestamps();
    }

    public function hasCalon(){
        return $this->hasMany('App\PemilihanCalon','pemilihan_id','id');
    }

    public function hasSuara(){
        return $this->hasMany('App\PemilihanSuara','pemilihan_id','id');
    }
}