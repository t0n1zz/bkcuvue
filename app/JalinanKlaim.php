<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class JalinanKlaim extends Model {

    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'jalinan_klaim';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $revisionEnabled = true;
    protected $revisionCleanup = true;
    protected $historyLimit = 500;

    public static $rules = [
        'anggota_cu_id' => 'required',
        'tipe' => 'required',
        'kategori_penyakit' => 'required',
        'tanggal_mati' => 'required',
        'status_klaim' => 'required',
        'lintang_diajukan' => 'required',
        'lintang_disetujui' => 'required'
    ];

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at'
    );

    protected $fillable = [
        'anggota_cu_id', 'anggota_cu_cu_id', 'tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim','keterangan_klaim','tunas_diajukan','tunas_disetujui','lintang_diajukan','lintang_disetujui','tanggal_pencairan','verifikasi_pengurus','verifikasi_pengawas','verifikasi_manajemen','surat_nomor','surat_tanggal',
        'dokumen_ktp','dokumen_meninggal','dokumen_pinjaman_1','dokumen_pinjaman_2','dokumen_pinjaman_3','dokumen_pinjaman_4','dokumen_pinjaman_5','dokumen_pinjaman_6','buku_simpanan_1','buku_simpanan_2','buku_simpanan_3','buku_simpanan_4','buku_simpanan_5','buku_pinjaman_1','buku_pinjaman_2','buku_pinjaman_3',
        'id_koreksi'
    ];

    protected $allowedFilters = [
        'id','anggota_cu_id', 'anggota_cu_cu_id', 'tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim','created_at','updated_at','keterangan_klaim','tunas_diajukan','tunas_disetujui','lintang_diajukan','lintang_disetujui','tanggal_pencairan','surat_nomor','surat_tanggal',
        
        'anggota_cu.nik','anggota_cu.name','anggota_cu.tanggal_lahir','anggota_cu_cu.no_ba','anggota_cu_cu.tanggal_masuk','verifikasi_pengurus.name','verifikasi_pengawas.name','verifikasi_manajemen.name'
    ];

    protected $orderable = [
        'id','anggota_cu_id', 'anggota_cu_cu_id', 'tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim','created_at','updated_at','keterangan_klaim','tunas_diajukan','tunas_disetujui','lintang_diajukan','lintang_disetujui','tanggal_pencairan','surat_nomor','surat_tanggal',

        'anggota_cu.nik','anggota_cu.name','anggota_cu.tanggal_lahir','anggota_cu_cu.no_ba','anggota_cu_cu.tanggal_masuk',
        'verifikasi_pengurus.name','verifikasi_pengawas.name','verifikasi_manajemen.name',
    ];

    public static function initialize()
    {
        return [
            'anggota_cu_id' => '', 'anggota_cu_cu_id' => '','tipe' => '','kategori_penyakit' => '','tanggal_mati' => '', 'keterangan_mati' => '', 'keterangan' => '', 'status_klaim' => '0','keterangan_klaim'=> '','tunas_diajukan'=> '','tunas_disetujui'=> '','lintang_diajukan'=> '','lintang_disetujui'=> '','tanggal_pencairan' => '','verifikasi_pengurus' => '','verifikasi_pengawas' => '','verifikasi_manajemen' => '','surat_nomor'  => '','surat_tanggal'  => '','dokumen_ktp' => '','dokumen_meninggal' => '','dokumen_pinjaman_1' => '','dokumen_pinjaman_2' => '','dokumen_pinjaman_3' => '','dokumen_pinjaman_4' => '','dokumen_pinjaman_5' => '','dokumen_pinjaman_6' => '', 'id_koreksi' => '','buku_simpanan_1' => '','buku_simpanan_2' => '','buku_simpanan_3' => '','buku_simpanan_4' => '','buku_simpanan_5' => '','buku_pinjaman_1' => '','buku_pinjaman_2' => '','buku_pinjaman_3' => '',
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select(DB::raw('*, TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) AS usia, TIMESTAMPDIFF(YEAR, tanggal_lahir, tanggal_meninggal) AS usia_meninggal, TIMESTAMPDIFF(YEAR, tanggal_lahir, tanggal_cacat) AS usia_cacat'));
    }

    public function anggota_cu_cu()
    {
        // todo: bukan curdate tapi tanggal meninggal
        return $this->belongsTo('App\AnggotaCuCu','anggota_cu_cu_id','id')->select(DB::raw('*, TIMESTAMPDIFF(MONTH, tanggal_masuk, CURDATE()) AS lama_menjadi_anggota'));
    }

    public function verifikasi_pengurus_data()
    {
        return $this->belongsTo('App\User','verifikasi_pengurus','id')->select('id','id_aktivis','username','name');
    }

    public function verifikasi_pengawas_data()
    {
        return $this->belongsTo('App\User','verifikasi_pengawas','id')->select('id','id_aktivis','username','name');
    }

    public function verifikasi_manajemen_data()
    {
        return $this->belongsTo('App\User','verifikasi_manajemen','id')->select('id','id_aktivis','username','name');
    }

}