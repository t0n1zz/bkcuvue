<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tp extends BaseEloquent {
    
    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'tp';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 100; //Maintain a maximum of 100 changes at any point of time, while cleaning up old revisions.
    
    public static $rules = [
        'id_provinces' => 'required',
        'no_tp' => 'required',
        'name' => 'required|between:3,50'
    ];

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at','updated_at'
    );
    
    protected $fillable = [
      'id_cu','id_villages','id_districts','id_regencies','id_provinces','no_tp','name','gambar','alamat','pos','telp','hp','email','deskripsi','ultah','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','id_cu','no_tp','id_villages','id_districts','id_regencies','id_provinces','no_tp','name','alamat','pos','telp','hp','email','deskripsi','ultah','created_at','updated_at','deleted_at', 
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name', 'cu.name',
    ];

    protected $orderable = [
        'id','id_cu','no_tp','id_villages','id_districts','id_regencies','id_provinces','no_tp','name','alamat','pos','telp','hp','email','deskripsi','ultah','created_at','updated_at','deleted_at', 
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name', 'cu.name',
    ];

    public static function initialize(){
        return [
            'id_cu' => '0', 'id_villages' => '0', 'id_districts' => '0', 'id_regencies' => '0', 'id_provinces' => '0', 'no_tp' => '', 'name' => '', 'gambar' => '', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'email' => '', 'deskripsi' => '', 'ultah' => '',
        ];
    }
        
    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function LaporanTp()
    {
        return $this->hasMany('App\LaporanTp','id_tp','id');
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
}