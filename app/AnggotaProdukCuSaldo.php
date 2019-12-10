<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCuSaldo extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'anggota_produk_cu_saldo';
    protected $dates = ['deleted_at'];
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