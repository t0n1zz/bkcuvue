<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaCuCu extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'anggota_cu_cu';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'anggota_id','cu_id','no_ba', 'tanggal_masuk'
    ];

    protected $filter = [
        'anggota_id','cu_id','no_ba','tanggal_masuk','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'anggota_id' => '','cu_id' => '','no_ba' => '','tanggal_masuk' => ''
        ];
    }

}