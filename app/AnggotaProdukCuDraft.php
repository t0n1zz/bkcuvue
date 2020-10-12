<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class AnggotaProdukCuDraft extends Model {

    protected $table = 'anggota_produk_cu_draft';

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select('id','name');
    }

    public function produk_cu()
    {
        return $this->belongsTo('App\ProdukCu','produk_cu_id','id')->select('id','name','id_cu','tipe');
    }

}