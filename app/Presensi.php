<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class Presensi extends Model
{
    use Dataviewer;
    protected $table = 'presensi';
    protected $fillable = ['id_cu', 'id_aktivis', 'id_user', 'id_qr', 'name', 'kegiatan_name','id_kegiatan', 'kode', 'tanggal', 'status_jarak', 'jam_masuk', 'jam_pulang','lon','lat'];

    public static function initialize()
    {
        return [
            'id_cu' => '', 'id_aktivis' => '', 'id_user' => '', 'id_qr' => '', 'name' => '', 'id_kegiatan', 'kegiatan_name','status_jarak' => '', 'kode' => '', 'tanggal' => '', 'jam_masuk' => '', 'jam_pulang' => ''
        ];
    }

    public static function initializeSasaran()
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

    public function kegiatan()
    {
        return $this->hasOne('App\Kegiatan', 'id', 'id_kegiatan')->select('id', 'name');
    }

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name');
    }

    public function seragam()
    {
        return $this->belongsToMany('App\Seragam', 'pelanggaran_seragam')->withTimestamps();
    }

    public function seragamKerja()
    {
        return $this->hasOne('App\PresensiPelanggaranSeragam', 'id_absen', 'id')->select('id', 'id_absen', 'seragam_name');
    }

    public function keterlambatan()
    {
        return $this->hasOne('App\PresensiKeterlambatan', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama');
    }

    public function keterlambatanP()
    {
        return $this->hasOne('App\PresensiKeterlambatan', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama')->where('jenis', 'PRIBADI');
    }

    public function keterlambatanK()
    {
        return $this->hasOne('App\PresensiKeterlambatan', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama')->whereNull('alasan');
    }

    public function keluarP()
    {
        return $this->hasMany('App\PresensiKeluarKantor', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama')->where('jenis', 'PRIBADI');
    }

    public function keluarK()
    {
        return $this->hasMany('App\PresensiKeluarKantor', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama')->where('jenis', 'URUSAN KANTOR');
    }

    public function pulangP()
    {
        return $this->hasOne('App\PresensiPulangAwal', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama')->where('jenis', 'PRIBADI');
    }

    public function pulangK()
    {
        return $this->hasOne('App\PresensiPulangAwal', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama')->where('jenis', 'URUSAN KANTOR');
    }

    public function pulang_awal()
    {
        return $this->hasOne('App\PresensiPulangAwal', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama');
    }

    public function keluar()
    {
        return $this->hasMany('App\PresensiKeluarKantor', 'id_absen', 'id')->select('id_absen', 'jenis', 'lama');
    }

    public function qr()
    {
        return $this->hasOne('App\QrPresensi', 'id', 'id_qr')->select('id','jam_pulang');
    }

}
