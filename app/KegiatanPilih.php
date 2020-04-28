<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class KegiatanPilih extends Model {
    
    protected $table = 'kegiatan_pilih';
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','name'];
}