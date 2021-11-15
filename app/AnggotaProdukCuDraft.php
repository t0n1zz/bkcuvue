<?php
namespace App;

use App\Support\Dataviewer;
use illuminate\Database\Eloquent\Model;

class AnggotaProdukCuDraft extends Model {

    use Dataviewer;

    protected $table = 'anggota_produk_cu_draft';

    protected $fillable = [
        'id_cu','no_ba','no_rek', 'anggota_cu_id','anggota_cu_cu_id','produk_cu_id', 'saldo', 'tanggal_buka', 'tanggal_transaksi', 'lama_pinjaman', 'tujuan', 'tanggal_target'
    ];

    protected $allowedFilters = [
        'id_cu','no_ba','no_rek', 'anggota_cu_id','produk_cu_id', 'saldo', 'tanggal_buka', 'tanggal_transaksi', 'lama_pinjaman', 'tujuan', 'tanggal_target',

        'anggota_cu.name', 'anggota_cu.nik'
    ];

    protected $orderable = [
        'id_cu','no_ba','no_rek', 'anggota_cu_id','produk_cu_id', 'saldo', 'tanggal_buka', 'tanggal_transaksi', 'lama_pinjaman', 'tujuan', 'tanggal_target',
    ];

    public function cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select('id','name','nik');
    }

    public function produk_cu()
    {
        return $this->belongsTo('App\ProdukCu','produk_cu_id','id')->select('id','name','id_cu','tipe');
    }

}