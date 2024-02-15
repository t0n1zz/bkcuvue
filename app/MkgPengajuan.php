<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class MkgPengajuan extends Model
{
    use Dataviewer;
    protected $table = 'mkg_pengajuan';
    protected $fillable = ['id_aktivis', 'id_cu','id_user', 'mkg', 'gr_d', 'gr_b','pendidikan_tertinggi','periode','approval_stat','id_sk','tgl_acc','tgl_perubahan'];

    public static function initialize()
    {
        return [
            'id_aktivis'=>'', 'id_cu'=>'', 'mkg'=>'', 'gr_d'=>'', 'gr_b'=>'', 'pendidikan_tertinggi'=>'', 'periode'=>'', 'approval_stat'=>''
        ];
    }

    protected $allowedFilters = [
        'created_at','aktivis.name'
    ];

    protected $orderable = [
        'created_at'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name', 'nim_cu', 'gambar_ttd');
    }

    public function sk()
    {
        return $this->hasOne('App\Surat', 'id', 'id_sk')->select('id', 'name');
    }

    public function currentMkg()
    {
        return $this->hasOne('App\MkgSekarang', 'id_aktivis', 'id_aktivis')->select('id_aktivis','prev_mkg','prev_grd','prev_grb');
    }
}
