<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class MitraLembaga extends Model {
    
    use Dataviewer, LogsActivity;

    protected $table = 'mitra_lembaga';
    protected static $logFillable = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = [
        'id_villages','id_districts','id_regencies','id_provinces','no_ba','name','name_legal','gambar','badan_hukum','alamat','pos','telp','hp','website','email','created_at','updated_at','deleted_at'    
    ];

    protected $allowedFilters = [
        'id','name','name_legal','badan_hukum','npwp','alamat','pos','telp','hp','website','email','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'id','name','name_legal','badan_hukum','npwp','alamat','pos','telp','hp','website','email','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    public static function initialize()
    {
        return [
            'id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'name' => '', 'gambar' => '',
            'badan_hukum' => '','npwp' => '', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => ''
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