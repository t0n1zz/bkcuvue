<?php
namespace App;

use App\Support\Dataviewer;
use illuminate\Database\Eloquent\Model;

class AnggotaCuDraft extends Model {
    
    use Dataviewer;

    protected $table = 'anggota_cu_draft';
    
    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'nik','name','ahli_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','penghasilan','pengeluaran','pendidikan','organisasi','kontak','id_villages','id_districts','id_regencies','id_provinces','gambar','npwp','tanggal_meninggal','tanggal_cacat','pekerjaan','suku','nama_ibu','kk'
    ];

    protected $allowedFilters = [
        'nik','name','ahli_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','penghasilan','pengeluaran','pendidikan','organisasi','kontak','created_at','updated_at','npwp','tanggal_meninggal','tanggal_cacat','pekerjaan','suku','nama_ibu','kk',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'nik','name','ahli_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','penghasilan','pengeluaran','pendidikan','organisasi','kontak','created_at','updated_at','npwp','tanggal_meninggal','tanggal_cacat','pekerjaan','suku','nama_ibu','kk',
    ];

    public function anggota_cu(){
        return $this->belongsToMany('App\Cu','anggota_cu_cu_draft')->withPivot('id','cu_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->withTimestamps();
    }

    public function anggota_cu_cu(){
        return $this->hasMany('App\AnggotaCuCuDraft','anggota_cu_draft_id','id');
    }

    public function anggota_cu_cu_not_keluar(){
        return $this->hasMany('App\AnggotaCuCuDraft','anggota_cu_draft_id','id')->whereNull('tanggal_keluar');
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