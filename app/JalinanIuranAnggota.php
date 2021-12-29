<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class JalinanIuranAnggota extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'jalinan_iuran_anggota';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'jalinan_iuran_id' => 'required',
        'anggota_cu_id' => 'required',
    ];

    protected $fillable = [
        'jalinan_iuran_id','anggota_cu_id','anggota_cu_cu_id','anggota_produk_cu_id','produk_cu_id','tanggal_masuk','tanggal_lahir','tanggal_cair','saldo','saldo_lama','saldo_baru','keterangan','created_at','updated_at','deleted_at','lokasi','no_ba','nik','name'
    ];

    protected $allowedFilters = [
        'id','jalinan_iuran_id','anggota_cu_id','anggota_cu_cu_id','anggota_produk_cu_id','tanggal_masuk','tanggal_sekarang','tanggal_cair','saldo','saldo_lama','saldo_baru','keterangan','created_at','updated_at','deleted_at','lokasi',

        'anggota_cu.name',
    ];

    protected $orderable = [
        'id','jalinan_iuran_id','anggota_cu_id','anggota_cu_cu_id','anggota_produk_cu_id','tanggal_masuk','tanggal_sekarang','tanggal_cair','saldo','saldo_lama','saldo_baru','keterangan','created_at','updated_at','deleted_at',

        'anggota_cu.name',
    ];
    
    public static function initialize(){
        return [
            'jalinan_iuran_id' => '', 'anggota_cu_id' => '', 'tanggal_masuk' => '','tanggal_sekarang' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select('id','nik','name','tanggal_lahir','kelamin','gambar');
    }

    public function anggota_cu_cu()
    {
        return $this->belongsTo('App\AnggotaCuCu','anggota_cu_cu_id','id')->select('id','no_ba');
    }

    public function usia_lahir()
    {
        return \Carbon\Carbon::parse($this->tanggal_lahir)->age;
    }

    public function usia_masuk()
    {
        return \Carbon\Carbon::parse($this->tanggal_masuk)->diff(\Carbon\Carbon::now())->format('%y');
    }
}