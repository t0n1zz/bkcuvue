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
        'no_rek','anggota_cu_id','produk_cu_id','saldo','tanggal','lama_pinjaman'
    ];

    protected $filter = [
        'no_rek','anggota_cu_id','produk_cu_id','saldo','tanggal','lama_pinjaman','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'no_rek' => '','anggota_cu_id' => '','produk_cu_id' => '','saldo' => '','name' => '','no_ba' => '','lama_pinjaman' => ''
        ];
    }

    public function produk_cu()
    {
        return $this->belongsTo('App\ProdukCu','produk_cu_id','id')->select('id','name','id_cu');
    }

}