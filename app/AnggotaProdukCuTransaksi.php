<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCuTransaksi extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'anggota_produk_cu_transaksi';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'anggota_produk_cu_id','saldo','tanggal'
    ];

    protected $filter = [
        'anggota_produk_cu_id','saldo','tanggal','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'anggota_produk_cu_id' => '','saldo' => ''
        ];
    }

}