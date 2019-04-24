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
        'nik' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'nik','name','alih_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','pendidikan','kontak','id_villages','id_districts','id_regencies','id_provinces',
    ];

    protected $allowedFilters = [
        'nik','name','alih_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','pendidikan','kontak','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name'
    ];

    protected $orderable = [
        'nik','name','alih_waris','tempat_lahir','tanggal_lahir','kelamin','agama','status','alamat','hp','email','darah','tinggi','lembaga','jabatan','pendidikan','kontak','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'nik' => '','name' => '','alih_waris' => '','tempat_lahir' => '','tanggal_lahir' => '','kelamin' => '','agama' => '','status' => '','alamat' => '','hp' => '','email' => '','darah' => '','tinggi' => '','kontak' => '','lembaga' => '','jabatan' => '','pendidikan' => '','id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => ''
        ];
    }

    public function anggota_cu(){
        $id = Auth::user()->getIdCu();

        if($id == 0){
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->withPivot('id','no_ba','tanggal_masuk')->withTimestamps();
        }else{
            return $this->belongsToMany('App\Cu','anggota_cu_cu')->where('cu.id',$id)->withPivot('id','no_ba','tanggal_masuk')->withTimestamps();
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