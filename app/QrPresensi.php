<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Illuminate\Database\Eloquent\SoftDeletes;

class QrPresensi extends Model
{
    use Dataviewer;
    use SoftDeletes;
    protected $table = 'qr_absen';
    protected $dates = ['deleted_at'];
    protected $fillable = ['id_cu', 'id_kegiatan', 'id_user', 'kegiatan_name', 'id_tp', 'kode_qr', 'status', 'jenis', 'lama_waktu', 'jam_masuk', 'jam_pulang'];

    protected $allowedFilters = [
        'kegiatan_name', 'created_at', 'updated_at'
    ];

    protected $orderable = [
        'kegiatan_name', 'created_at', 'updated_at'
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '', 'id_kegiatan' => '', 'id_tp' => '', 'kegiatan_name' => '', 'id_user' => '', 'kode_qr' => '', 'status' => '', 'jenis' => '', 'lama_waktu' => '',
            'jam_pulang' => '', 'jam_masuk' => '','isPulang'=>''
        ];
    }

    public function kegiatan()
    {
        return $this->hasOne('App\Kegiatan', 'id', 'id_kegiatan')->select('id', 'name','mulai');
    }
}
