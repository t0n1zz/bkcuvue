<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiAlpa extends Model
{
    use Dataviewer;

    protected $table = 'presensi_alpha';
    protected $fillable = ['id_cu', 'id_aktivis', 'id_user', 'tanggal'];

    public static function initialize()
    {
        return [
            'id_cu' => '', 'id_aktivis' => '', 'id_user' => '', 'tanggal' => ''
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
