<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiCuti extends Model
{
    use Dataviewer;

    protected $table = 'presensi_cuti';

    protected $fillable = [
        'id_user', 'id_aktivis', 'id_cu', 'id_acc1', 'id_acc2', 'jenis', 'tanggal_mulai', 'tanggal_selesai', 'realisasi', 'tanggal', 'tanggal_acc1', 'tanggal_acc2', 'lama', 'status', 'status_acc1', 'status_acc2', 'alasan_penolakan', 'alasan'
    ];


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
