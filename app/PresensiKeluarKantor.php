<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiKeluarKantor extends Model
{
    use Dataviewer;

    protected $table = 'presensi_keluar_kantor';
    
    protected $fillable = [
        'id_absen', 'id_user', 'id_aktivis', 'jenis', 'alasan', 'lama', 'tanggal','id_cu'
    ];

    public static function initialize()
    {
        return [
            'id_absen' => '', 'id_user' => '', 'id_aktivis' => '', 'jenis' => '', 'alasan' => '', 'tanggal' => '', 'lama' => ''
        ];
    }

    protected $allowedFilters = [
        'tanggal','aktivis.name'
    ];

    protected $orderable = [
        'tanggal'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name');
    }
}
