<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCu extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'anggota_produk_cu';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'anggota_id','produk_cu_id','saldo'
    ];

    protected $filter = [
        'anggota_id','produk_cu_id','saldo','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'anggota_id' => '','produk_cu_id' => '','saldo' => '','name' => '','no_ba' => ''
        ];
    }

}