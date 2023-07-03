<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiIzin extends Model
{
    use Dataviewer;

    protected $table = 'presensi_izin';

    protected $fillable = [
        'id_user', 'id_aktivis', 'id_cu', 'jenis', 'alasan', 'tanggal_mulai', 'tanggal_selesai', 'lama', 'status'
    ];

    public static function initialize()
    {
        return [
            'id_aktivis' => '', 'id_user' => '', 'id_cu' => '', 'jenis' => '', 'alasan' => '', 'tanggal_mulai' => '', 'tanggal_selesai' => '', 'lama' => ''
        ];
    }
    public static $rules = [
        'id_aktivis' => 'required',
        'jenis' => 'required',
        'alasan' => 'required'
    ];
    protected $allowedFilters = [
        'tanggal_mulai'
    ];

    protected $orderable = [
        'tanggal_mulai'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name');
    }
}
