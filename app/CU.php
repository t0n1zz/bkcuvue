<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cu extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'cu';
		protected static $logFillable = true;
		protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_provinces' => 'required',
        'no_ba' => 'required',
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
      'id_villages','id_districts','id_regencies','id_provinces','no_ba','name','gambar','badan_hukum','alamat','pos','telp','hp','website','email','app','deskripsi','ultah',
      'bergabung','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','no_ba','name','badan_hukum','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','villages_name', 'districts_name', 'regencies_name', 'provinces_name','has_tp_cu_count'
    ];

    protected $orderable = [
        'id','no_ba','name','badan_hukum','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','villages_name', 'districts_name', 'regencies_name', 'provinces_name','has_tp_cu_count'
    ];

    public static function initialize(){
        return [
            'id_villages' => '0', 'id_districts' => '0', 'id_regencies' => '0', 'id_provinces' => '0', 'no_ba' => '', 'name' => '', 'gambar' => '',
            'badan_hukum' => '', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => '', 'app' => '', 'ultah' => '', 'bergabung' => ''
        ];
    }
        
    public function LaporanCu()
    {
        return $this->hasMany('App\LaporanCu','id_cu','id');
    }

    public function hasTp()
    {
        return $this->hasMany('App\Tp','id_cu','id');
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