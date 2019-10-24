<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class AnggotaCuCuDraft extends Model {
    
    protected $table = 'anggota_cu_cu_draft';
    
    protected $fillable = [
        'anggota_cu_id','cu_id','tp_id','no_ba', 'tanggal_masuk','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar'
    ];

    public function anggotaCu()
    {
        return $this->belongsTo('App\AnggotaCuDraft','anggota_cu_id','id');
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','cu_id','id');
    }

    public function tp()
    {
        return $this->belongsTo('App\Tp','tp_id','id');
    }

}