<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanPeserta extends Model {

    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_peserta';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'aktivis_id','kegiatan_id','mitra_orang_id','anggota_cu_cu_id','lembaga_id','name_nametag','name_sertifikat','keterangan','keteranganBatal','datang','pulang','status','created_at','updated_at','kegiatan_name','tempat','lembaga_name','pekerjaan_name','pekerjaan_tingkat','tanggal_hadir','kegiatan_tipe','kegiatan_name','pendidikan_name','pendidikan_tingkat','penyelenggara'
    ];

    protected $allowedFilters = [
        'name_nametag','name_sertifikat','datang','pulang','status','kegiatan_name','tempat','lembaga_name','pekerjaan_name','pekerjaan_tingkat','tanggal_hadir','created_at','updated_at','kegiatan_tipe','kegiatan_name','pendidikan_name','pendidikan_tingkat','penyelenggara'
    ];

    protected $orderable = [
        'name_nametag','name_sertifikat','datang','pulang','status','kegiatan_name','tempat','lembaga_name','pekerjaan_name','pekerjaan_tingkat','tanggal_hadir','created_at','updated_at','kegiatan_tipe','kegiatan_name',
        'pendidikan_name','pendidikan_tingkat','penyelenggara'
    ];

    public static function initialize()
    {
        return [
            'name' => '','tempat' => '','lembaga_name' => '','datang' => '','pulang' => '','tanggal_hadir' => '',
        ];
    }
    
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }

    public function mitra_orang()
    {
        return $this->belongsTo('App\MitraOrang','mitra_orang_id','id');
    }

    public function kegiatan()
    {
        return $this->belongsTo('App\Kegiatan','kegiatan_id','id');
    }
}