<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCuTransaksi extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'anggota_produk_cu_transaksi';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'anggota_produk_cu_id' => 'required',
    ];


    public static function boot()
    {
        parent::boot();
    }

    protected $fillable = [
        'anggota_produk_cu_id','saldo','saldo_akhir','tanggal','lama_sisa_pinjaman'
    ];

    protected $allowedFilters = [
        'anggota_produk_cu_id','saldo','saldo_akhir','tanggal','lama_sisa_pinjaman'
    ];
    
    protected $orderable = [
        'anggota_produk_cu_id','saldo','saldo_akhir','tanggal','lama_sisa_pinjaman','created_at'
    ];

    public static function initialize()
    {
        return [
            'anggota_produk_cu_id' => '','saldo' => '', 'saldo_akhir' => ''
        ];
    }

    public function usia()
    {
        return \Carbon\Carbon::parse($this->tanggal)->age;
    }

}