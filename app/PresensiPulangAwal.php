<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiPulangAwal extends Model
{
    use Dataviewer;

    protected $table = 'presensi_pulang_cepat';
    
    protected $fillable = [
        'id_absen', 'id_user', 'id_aktivis', 'jenis', 'alasan', 'jam_pulang', 'tanggal', 'lama','id_cu'
    ];

    public static function initialize()
    {
        return [
            'id_absen' => '', 'id_aktivis' => '', 'id_user' => '', 'jenis' => '', 'alasan' => '', 'tanggal' => '', 'jam_pulang' => ''
        ];
    }

    protected $allowedFilters = [
        'tanggal'
    ];

    protected $orderable = [
        'tanggal'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name');
    }
}
