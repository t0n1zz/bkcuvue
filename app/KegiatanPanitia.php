<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class KegiatanPanitia extends Model {

    protected $table = 'kegiatan_panitia';
    
    public function kegiatan()
    {
        return $this->belongsTo('App\Kegiatan','kegiatan_id','id');
    }

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }
    
    public function mitra_orang()
    {
        return $this->belongsTo('App\MitraOrang','aktivis_id','id');
    }

    public function mitra_lembaga()
    {
        return $this->belongsTo('App\MitraLembaga','aktivis_id','id');
    }

}