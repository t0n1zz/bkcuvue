<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pengaturan extends Model
{
    protected $table = 'pengaturan';
    protected $fillable = ['id_cu','cuti','mkg','tunjangan','periode'];


    public function suratCuti()
    {
        return $this->hasOne('App\SuratKategori', 'id', 'cuti')->select('id','id_surat_kode','name');
    }

    public function suratMkg()
    {
        return $this->hasOne('App\SuratKategori', 'id', 'mkg')->select('id', 'id_surat_kode', 'name');
    }

    public function suratTunjangan()
    {
        return $this->hasOne('App\SuratKategori', 'id', 'tunjangan')->select('id', 'id_surat_kode', 'name');
    }
}
