<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCu extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;
    use \Awobaz\Compoships\Compoships;

    protected $table = 'anggota_produk_cu';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'anggota_cu_id' => 'required',
        'anggota_cu_cu_id' => 'required',
        'produk_cu_id' => 'required',
        'no_rek' => 'required',
    ];

    protected $fillable = [
        'no_rek','anggota_cu_id','anggota_cu_cu_id','produk_cu_id','tanggal','tanggal_target','lama_pinjaman','lama_sisa_pinjaman','tujuan','pengurang','dpd','kolekbi','tanggal_bayar_akhir'
    ];

    protected $filter = [
        'no_rek','anggota_cu_id','anggota_cu_cu_id','produk_cu_id','tanggal','tanggal_target','lama_pinjaman','lama_sisa_pinjaman','tujuan','created_at','updated_at','pengurang','dpd'
    ];

    public static function initialize()
    {
        return [
            'no_rek' => '','anggota_cu_id' => '','anggota_cu_cu_id' => '','produk_cu_id' => '','name' => '','no_ba' => '','lama_pinjaman' => '','lama_sisa_pinjaman' => '','tanggal_target' => '','tujuan' => '','pengurang' => '','dpd' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\anggotaCu','anggota_cu_id','id');
    }

    public function anggota_cu_cu()
    {
        return $this->belongsTo('App\anggotaCuCu','anggota_cu_cu_id','id');
    }

    public function produk_cu()
    {
        return $this->belongsTo('App\ProdukCu','produk_cu_id','id')->select('id','name','id_cu','tipe');
    }

    public function transaksi(){
        return $this->hasMany('App\AnggotaProdukCuTransaksi','anggota_produk_cu_id','id');
    }

    public function usia($tanggal_lahir)
    {
        return \Carbon\Carbon::parse($this->tanggal)->diff(\Carbon\Carbon::parse($tanggal_lahir))->format('%y');
    }

    public function bulan()
    {
        return \Carbon\Carbon::parse($this->tanggal)->diff(\Carbon\Carbon::now())->format('%m');
    }

    public function hari($tanggal_masuk)
    {
        return \Carbon\Carbon::parse($this->tanggal)->diff(\Carbon\Carbon::parse($tanggal_masuk))->format('%d');
    }

}