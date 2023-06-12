<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PresensiPelanggaranSeragam extends Model
{
    protected $table = 'presensi_seragam_kerja';

    protected $fillable = [
        'id_absen', 'seragam_name', 'created_at', 'updated_at'
    ];
}
