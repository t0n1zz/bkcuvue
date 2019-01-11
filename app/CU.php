<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Cu extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes, Sluggable;

    protected $table = 'cu';
    protected static $logFillable = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_provinces' => 'required',
        'no_ba' => 'required',
        'name' => 'required|between:3,50'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
            ]
        ];
    }
    
    protected $fillable = [
      'id_villages','id_districts','id_regencies','id_provinces','no_ba','name','name_legal','gambar','badan_hukum','npwp','nik','situ','siusp','izin_operasional','alamat','pos','telp','hp','website','email','app','misi','visi','nilai','slogan','sejarah','deskripsi','ultah',
      'bergabung','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','no_ba','name','name_legal','badan_hukum','npwp','nik','situ','siusp','izin_operasional','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','has_tp_cu_count'
    ];

    protected $orderable = [
        'id','no_ba','name','name_legal','badan_hukum','npwp','nik','situ','siusp','izin_operasional','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','has_tp_cu_count'
    ];

    public static function initialize(){
        return [
            'id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'no_ba' => '', 'name' => '','name_legal' => '', 'gambar' => '',
            'badan_hukum' => '','npwp' => '','nik' => '','situ' => '','siusp' => '','izin_operasional' => '', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => '', 'app' => '', 'ultah' => '', 'bergabung' => ''
        ];
    }
        
    public function LaporanCu()
    {
        return $this->hasMany('App\LaporanCu','id_cu','id');
    }

    public function hasTp()
    {
        return $this->hasMany('App\Tp','id_cu','id')->select('id','id_cu','name');
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