<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class MitraOrang extends Model {
    
    use Dataviewer, LogsActivity;

    protected $table = 'mitra_orang';
    protected static $logFillable = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = [
        'nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','gambar','darah','tinggi','lembaga','jabatan','pendidikan','kontak','gambar','id_villages','id_districts','id_regencies','id_provinces'
    ];

    protected $allowedFilters = [
        'nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','pendidikan','kontak','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'nim','nim_cu','nik','name','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','pendidikan','kontak','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'nik' => '','name' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','lembaga' => '','jabatan' => '','pendidikan' => '','gambar'=> '','id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => ''
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