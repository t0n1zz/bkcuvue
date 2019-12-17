<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AnggotaCuCu extends Model {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'anggota_cu_cu';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'anggota_cu_id','cu_id','tp_id','no_ba', 'tanggal_masuk','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar','referral_nik','referral_ba','referral_name'
    ];

    protected $filter = [
        'anggota_cu_id','cu_id','tp_id','no_ba','tanggal_masuk','created_at','updated_at','keterangan_masuk', 'tanggal_keluar', 'keterangan_keluar','referral_nik','referral_ba','referral_name'
    ];

    public static function initialize()
    {
        return [
            'anggota_cu_id' => '','cu_id' => '','tp_id' => '','no_ba' => '','tanggal_masuk' => '','keterangan_masuk' => '', 'tanggal_keluar' => '', 'keterangan_keluar' => '','referral_nik' => '','referral_ba' => '','referral_name' => ''
        ];
    }

    public function anggotaCu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id');
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','cu_id','id')->select('id','no_ba','name','id_villages','id_districts','id_regencies','id_provinces');
    }

    public function tp()
    {
        return $this->belongsTo('App\Tp','tp_id','id')->select('id','no_tp','name');
    }

    public function jalinanKlaim()
    {
        return $this->belongsTo('App\JalinanKlaim','id','anggota_cu_cu_id');
    }

}