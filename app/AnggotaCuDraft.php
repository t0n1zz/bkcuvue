<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class AnggotaCuDraft extends Model {
    
    protected $table = 'anggota_cu_draft';
    protected $guarded = ['id'];

    public function anggota_cu_cu_not_keluar(){
        return $this->hasMany('App\AnggotaCuCuDraft','anggota_cu_id','id')->whereNull('tanggal_keluar');
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