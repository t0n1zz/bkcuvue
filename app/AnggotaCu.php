<?php
namespace App;

use Auth;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaCu extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'anggota_cu';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'nik'=> 'sometimes|required|unique:anggota_cu',
        'name' => 'required',
        'ahli_waris' => 'required',
        'kelamin' => 'required',
        'tanggal_lahir' => 'required',
        'tempat_lahir' => 'required',
        'id_provinces' => 'required',
        'alamat' => 'required',
    ];

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

    public static function initialize()
    {
        return [
            'nik' => '','name' => '','ahli_waris' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','lembaga' => '','jabatan' => '','penghasilan' => '','pengeluaran' => '', 'pendidikan' => '','organisasi' => '','id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '','gambar'=> '','npwp' => '','tanggal_meninggal'=> '','tanggal_cacat'=> '','pekerjaan' => '','suku' => '','nama_ibu' => '','kk' => '',
        ];
    }

    public function anggota_cu_cu(){
        return $this->hasMany('App\AnggotaCuCu','anggota_cu_id','id');
    }

    public function anggota_cu_cu_not_keluar(){
        return $this->hasMany('App\AnggotaCuCu','anggota_cu_id','id')->whereNull('tanggal_keluar');
    }

    public function anggota_cu_cu_keluar(){
        return $this->hasMany('App\AnggotaCuCu','anggota_cu_id','id')->whereNotNull('tanggal_keluar');
    }

    public function anggota_cu(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','cu_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','cu_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->withTimestamps();
        }
    }

    public function anggota_cu_not_keluar(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','cu_id','tp_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->whereNull('tanggal_keluar')->select('cu.id','cu.name','anggota_cu_cu.*')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','cu_id','tp_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->select('cu.id','cu.name','anggota_cu_cu.*')->whereNull('tanggal_keluar')->withTimestamps();
        }
    }

    public function anggota_cu_keluar(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','cu_id','tp_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->whereNotNull('tanggal_keluar')->select('cu.id','cu.name','anggota_cu_cu.*')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','cu_id','tp_id','no_ba','tanggal_masuk','tanggal_keluar','keterangan_masuk','keterangan_keluar')->select('cu.id','cu.name','anggota_cu_cu.*')->whereNotNull('tanggal_keluar')->withTimestamps();
        }
    }

    public function anggota_produk_cu(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\ProdukCu','anggota_produk_cu')->select('produk_cu.id','anggota_produk_cu.id','id_cu','kode_produk','name','jalinan','tipe')->withPivot('id','no_rek','saldo','tanggal','lama_pinjaman')->orderBy('anggota_produk_cu.tanggal','desc')->withTimestamps();
        }else{
            return $this->belongsToMany('App\ProdukCu','anggota_produk_cu')->select('produk_cu.id','anggota_produk_cu.id','id_cu','kode_produk','name','jalinan','tipe')->where('id_cu',$id)->withPivot('id','no_rek','saldo','tanggal','lama_pinjaman')->orderBy('anggota_produk_cu.tanggal','desc')->withTimestamps();
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