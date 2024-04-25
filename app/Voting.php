<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voting extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes, Loggable;

    protected $table = 'voting';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'name' => 'required'
    ];

    protected $fillable = [
        'id_cu','id_kegiatan','name','name_kegiatan','status','created_at','updated_at','deleted_at','suara','suara_ok','suara_tipe','suara_akses','keterangan','lihat_hasil'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_kegiatan','name','name_kegiatan','status','created_at','updated_at','deleted_at','suara','suara_ok','suara_tipe','suara_akses','keterangan','lihat_hasil',

        'cu.name',
    ];

    protected $orderable = [
        'id','id_cu','id_kegiatan','name','name_kegiatan','status','created_at','updated_at','deleted_at','suara','suara_ok','suara_tipe','suara_akses','lihat_hasil',

        'cu.name',
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '','id_kegiatan' =>'', 'name' => '','name_kegiatan', 'status' => '',  'suara' => '',  'suara_ok' => '', 'suara_tipe' => '0', 'sumberSuara' => '','keterangan' => '','lihat_hasil' => ''
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function kegiatan()
    {
        return $this->belongsTo('App\Kegiatan','id_kegiatan','id')->select('id','name');
    }

    public function pilihan(){
        return $this->hasMany('App\VotingPilihan','voting_id','id');
    }

    public function tanggapan(){
        return $this->hasMany('App\VotingTanggapan','voting_id','id');
    }

    public function hasSuara(){
        return $this->hasMany('App\VotingSuara','voting_id','id');
    }
    
}