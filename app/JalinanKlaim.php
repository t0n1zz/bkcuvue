<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class JalinanKlaim extends Model {

    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, FilterPaginateOrder, LogsActivity;

    protected $table = 'jalinan_klaim';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'anggota_cu_id' => 'required',
        'tipe' => 'required',
        'kategori_penyakit' => 'required',
        'tanggal_mati' => 'required',
        'status_klaim' => 'required',
        'tunas_diajukan' => 'required',
        'tunas_disetujui' => 'required'
    ];

    protected $fillable = [
        'anggota_cu_id', 'anggota_cu_cu_id', 'tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim','keterangan_klaim','tunas_diajukan','tunas_disetujui','lintang_diajukan','lintang_disetujui','tanggal_pencairan','verifikasi_pengurus','verifikasi_pengawas','verifikasi_manajemen'
    ];

    protected $allowedFilters = [
        'id','anggota_cu_id', 'anggota_cu_cu_id', 'tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim','created_at','updated_at','keterangan_klaim','tunas_diajukan','tunas_disetujui','lintang_diajukan','lintang_disetujui','tanggal_pencairan',
        
        'anggota_cu.nik','anggota_cu.name','anggota_cu.tanggal_lahir','anggota_cu_cu.no_ba','anggota_cu_cu.tanggal_masuk','verifikasi_pengurus.name','verifikasi_pengawas.name','verifikasi_manajemen.name'
    ];

    protected $orderable = [
        'id','anggota_cu_id', 'anggota_cu_cu_id', 'tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim','created_at','updated_at','keterangan_klaim','tunas_diajukan','tunas_disetujui','lintang_diajukan','lintang_disetujui','tanggal_pencairan',

        'anggota_cu.nik','anggota_cu.name','anggota_cu.tanggal_lahir','anggota_cu_cu.no_ba','anggota_cu_cu.tanggal_masuk','verifikasi_pengurus.name','verifikasi_pengawas.name','verifikasi_manajemen.name',
    ];

    public static function initialize()
    {
        return [
            'anggota_cu_id' => '', 'anggota_cu_cu_id' => '','tipe' => '','kategori_penyakit' => '','tanggal_mati' => '', 'keterangan_mati' => '', 'keterangan' => '', 'status_klaim' => '','keterangan_klaim'=> '','tunas_diajukan'=> '','tunas_disetujui'=> '','lintang_diajukan'=> '','lintang_disetujui'=> '','tanggal_pencairan' => '','verifikasi_pengurus' => '','verifikasi_pengawas' => '','verifikasi_manajemen' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select(DB::raw('*, TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) AS usia, TIMESTAMPDIFF(YEAR, tanggal_lahir, tanggal_meninggal) AS usia_meninggal, TIMESTAMPDIFF(YEAR, tanggal_lahir, tanggal_cacat) AS usia_cacat'));
    }

    public function anggota_cu_cu()
    {
        return $this->belongsTo('App\AnggotaCuCu','anggota_cu_cu_id','id')->select(DB::raw('*, TIMESTAMPDIFF(MONTH, tanggal_masuk, CURDATE()) AS lama_menjadi_anggota'));
    }

    public function verifikasi_pengurus()
    {
        return $this->belongsTo('App\User','verifikasi_pengurus','id')->select('id','id_aktivis','username','name');
    }

    public function verifikasi_pengawas()
    {
        return $this->belongsTo('App\User','verifikasi_pengawas','id')->select('id','id_aktivis','username','name');
    }

    public function verifikasi_manajemen()
    {
        return $this->belongsTo('App\User','verifikasi_manajemen','id')->select('id','id_aktivis','username','name');
    }

}