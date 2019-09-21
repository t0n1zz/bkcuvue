<?php
namespace App;

use Auth;
use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaCu extends Model {
    
    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity;

    protected $table = 'anggota_cu';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required',
        'nik'=> 'sometimes|required|unique:anggota_cu',
    ];

    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'nik','name','alih_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','penghasilan','pendidikan','organisasi','kontak','id_villages','id_districts','id_regencies','id_provinces','gambar','npwp',
    ];

    protected $allowedFilters = [
        'nik','name','alih_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','penghasilan','pendidikan','organisasi','kontak','created_at','updated_at','npwp',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'nik','name','alih_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','penghasilan','pendidikan','organisasi','kontak','created_at','updated_at','npwp',
    ];

    public static function initialize()
    {
        return [
            'nik' => '','name' => '','alih_waris' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','lembaga' => '','jabatan' => '','penghasilan' => '', 'pendidikan' => '','organisasi' => '','id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '','gambar'=> '','npwp' => ''
        ];
    }

    public function anggota_cu(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->withTimestamps();
        }
    }

    public function anggota_cu_not_keluar(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->whereNull('tanggal_keluar')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->whereNull('tanggal_keluar')->withTimestamps();
        }
    }

    public function anggota_cu_keluar(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->whereNotNull('tanggal_keluar')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->whereNotNull('tanggal_keluar')->withTimestamps();
        }
    }

    public function anggota_produk_cu(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\ProdukCu','anggota_produk_cu')->withPivot('id','no_rek','saldo','tanggal','lama_pinjaman')->orderBy('anggota_produk_cu.tanggal','desc')->withTimestamps();
        }else{
            return $this->belongsToMany('App\ProdukCu','anggota_produk_cu')->where('id_cu',$id)->withPivot('id','no_rek','saldo','tanggal','lama_pinjaman')->orderBy('anggota_produk_cu.tanggal','desc')->withTimestamps();
        }
    }

    public function status_jalinan()
    {
        return $this->belongsTo('App\JalinanKlaim','id','anggota_cu_id')->select('anggota_cu_id','status_klaim');
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