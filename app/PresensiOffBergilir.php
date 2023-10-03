<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiOffBergilir extends Model
{
    use Dataviewer;

    protected $table = 'presensi_off_bergilir';
    protected $fillable = ['id_cu', 'id_aktivis', 'id_user', 'tanggal'];

    public static function initialize()
    {
        return [
            'id_cu' => '', 'id_aktivis' => '', 'id_user' => '', 'tanggal' => ''
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
