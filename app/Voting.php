<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voting extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'voting';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'name' => 'required'
    ];

    
    protected $fillable = [
        'id_cu','id_kegiatan','name','name_kegiatan','status','created_at','updated_at','deleted_at','suara','suara_ok'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_kegiatan','name','name_kegiatan','status','created_at','updated_at','deleted_at','suara','suara_ok',

        'cu.name',
    ];

    protected $orderable = [
        'id','id_cu','id_kegiatan','name','name_kegiatan','status','created_at','updated_at','deleted_at','suara','suara_ok',

        'cu.name',
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '','id_kegiatan' =>'', 'name' => '','name_kegiatan', 'status' => '',  'suara' => '',  'suara_ok' => '', 'sumberSuara' => '0'
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function hasPilihan(){
        return $this->hasMany('App\VotingPilihan','pemilihan_id','id');
    }

    public function hasSuara(){
        return $this->hasMany('App\VotingSuara','pemilihan_id','id');
    }
}