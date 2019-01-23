<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tempat extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'kegiatan_tempat';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
        'id_villages','id_districts','id_regencies','id_provinces','name','alamat','pos','telp','hp','website','email','gambar','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','name','alamat','pos','telp','hp','website','email','created_at','updated_at','deleted_at',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'id','name','alamat','pos','telp','hp','website','email','created_at','updated_at','deleted_at',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    public static function initialize(){
        return [
            'id_tempat' => '', 'id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'name' => '', 'alamat' => '', 'gambar' => '','pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => ''
        ];
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