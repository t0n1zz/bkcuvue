<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaProdukCu extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'anggota_produk_cu';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'anggota_cu_id' => 'required',
        'produk_cu_id' => 'required',
        'no_rek' => 'required',
    ];

    protected $fillable = [
        'no_rek','anggota_cu_id','produk_cu_id','saldo','tanggal','tanggal_target','lama_pinjaman','lama_sisa_pinjaman','tujuan'
    ];

    protected $filter = [
        'no_rek','anggota_cu_id','produk_cu_id','saldo','tanggal','tanggal_target','lama_pinjaman','lama_sisa_pinjaman','tujuan','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'no_rek' => '','anggota_cu_id' => '','produk_cu_id' => '','saldo' => '','name' => '','no_ba' => '','lama_pinjaman' => '','lama_sisa_pinjaman' => '','tanggal_target' => '','tujuan' => ''
        ];
    }

    public function produk_cu()
    {
        return $this->belongsTo('App\ProdukCu','produk_cu_id','id')->select('id','name','id_cu','tipe');
    }

}