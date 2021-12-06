<?php

namespace App;

use illuminate\Database\Eloquent\Model;

class KegiatanPilihPivot extends Model
{

    protected $table = 'kegiatan_pilih_pivot';

    protected $fillable = ['kegiatan_pilih_id', 'kegiatan_tanggapan_id', 'nilai'];
}
