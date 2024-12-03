<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaCuCu extends Model {

    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes;
    use \Awobaz\Compoships\Compoships;

    protected $table = 'anggota_cu_cu';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $revisionEnabled = true;
    protected $revisionCleanup = true;
    protected $historyLimit = 500;

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at'
    );

    protected $fillable = [
        'anggota_cu_id','cu_id','tp_id','no_ba', 'tanggal_masuk','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar','referral_nik','referral_ba','referral_name','escete'
    ];

    protected $filter = [
        'anggota_cu_id','cu_id','tp_id','no_ba','tanggal_masuk','created_at','updated_at','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar','referral_nik','referral_ba','referral_name','escete'
    ];

    protected $allowedFilters = [
        'anggota_cu_id','cu_id','tp_id','no_ba','tanggal_masuk','created_at','updated_at','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar','referral_nik','referral_ba','referral_name','escete'
    ];

    protected $orderable = [
        'anggota_cu_id','cu_id','tp_id','no_ba','tanggal_masuk','created_at','updated_at','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar','referral_nik','referral_ba','referral_name','escete'
    ];

    public static function initialize()
    {
        return [
            'anggota_cu_id' => '','cu_id' => '','tp_id' => '','no_ba' => '','tanggal_masuk' => '','keterangan_masuk' => '', 'tanggal_keluar' => '', 'keterangan_keluar' => '','referral_nik' => '','referral_ba' => '','referral_name' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id');
    }

    public function anggota_cu_simple()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id')->select('id','status_jalinan','tanggal_lahir');
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','cu_id','id')->select('id','no_ba','name','id_villages','id_districts','id_regencies','id_provinces','escete');
    }

    public function tp()
    {
        return $this->belongsTo('App\Tp','tp_id','id')->select('id','no_tp','name');
    }

    public function jalinan_klaim()
    {
        return $this->belongsTo('App\JalinanKlaim','id','anggota_cu_cu_id');
    }

    public function produk_cu()
    {
        return $this->hasMany('App\ProdukCu','id_cu','cu_id')->select('id','id_cu','name','tipe');
    }

    public function anggota_produk_cu()
    {
        return $this->hasMany('App\AnggotaProdukCu','anggota_cu_cu_id','id');
    }

    public function usia()
    {
        return \Carbon\Carbon::parse($this->tanggal_masuk)->diff(\Carbon\Carbon::now())->format('%y');
    }

    public function usia_masuk($tanggal_lahir)
    {
        return \Carbon\Carbon::parse($this->tanggal_masuk)->diff(\Carbon\Carbon::parse($tanggal_lahir))->format('%y');
    }

    public function hari()
    {
        return \Carbon\Carbon::parse($this->tanggal_masuk)->diff(\Carbon\Carbon::now())->format('%d');
    }

}