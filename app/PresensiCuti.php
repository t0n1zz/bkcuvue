<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class PresensiCuti extends Model
{
    use Dataviewer;

    protected $table = 'presensi_cuti';

    protected $fillable = [
        'id_user', 'id_aktivis', 'id_cu', 'id_acc1','id_acc2','tgl_pengajuan_mulai','tgl_pengajuan_masuk','realisasi','tgl_pengajuan','tgl_acc1','tgl_acc2','lama','status'
    ];


    protected $allowedFilters = [
        'tanggal_pengajuan'
    ];

    protected $orderable = [
        'tanggal_pengajuan'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name');
    }
}
