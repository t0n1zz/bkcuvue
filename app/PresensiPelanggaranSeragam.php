<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PresensiPelanggaranSeragam extends Model
{
    protected $table = 'presensi_seragam_kerja';

    protected $fillable = [
        'id_absen', 'seragam_name', 'created_at', 'updated_at'
    ];

    public static function initialize()
    {
        return [
            'id_user' => "", 'id_absen' => 0, 'id_aktivis' => "", 'id_cu' => "", 'id_seragam_kerja' => "", 'seragam' => [], 'seragamName' => "",
        ];
    }

    public function seragam()
    {
        return $this->hasMany('App\Seragam', 'presensi_id', 'id')->get();
    }
}
