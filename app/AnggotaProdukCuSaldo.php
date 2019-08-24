<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCuSaldo extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'anggota_produk_cu_saldo';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'anggota_produk_cu_saldo_id','saldo'
    ];

    protected $filter = [
        'anggota_produk_cu_saldo_id','saldo'
    ];

    public static function initialize()
    {
        return [
            'anggota_produk_cu_saldo_id' => '','saldo' => ''
        ];
    }

}