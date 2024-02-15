<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class MkgSekarang extends Model
{
    protected $table = 'mkg_current';

    protected $fillable = ['id_aktivis', 'id_cu', 'mkg', 'gr_d','gr_b','prev_mkg','prev_grd', 'prev_grb','pendidikan_tertinggi','tgl_masuk'];

    public static function initialize()
    {
        return [
            'id_aktivis' => '', 'id_cu' => '', 'mkg' => '', 'gr_d' => '', 'gr_b' => '', 'pendidikan_tertinggi' => ''
        ];
    }

    public function pekerjaan_aktif()
    {
        return $this->hasOne('App\AktivisPekerjaan', 'id_aktivis', 'id_aktivis')->where('status', 1)->latest()->select('id_aktivis','tingkat');
    }

    public function pengajuan()
    {
        return $this->hasOne('App\MkgPengajuan', 'id_aktivis', 'id_aktivis')->where('periode', Carbon::now()->year)->where('tgl_perubahan', '!=', null)->select('id_aktivis');
    }
}
