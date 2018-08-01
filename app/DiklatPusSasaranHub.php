<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class DiklatPusSasaranHub extends Model {

    protected $table = 'diklat_pus_sasaran_hub';
    
    protected $fillable = [
        'id_kegiatan','id_sasaran'
    ];

    public function sasaran(){
        return $this->belongsTo('App\DiklatPusSasaran','id_sasaran','id');
    }
}