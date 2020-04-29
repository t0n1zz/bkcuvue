<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class KegiatanPanitia extends Model {

    protected $table = 'kegiatan_panitia';
    
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }
}