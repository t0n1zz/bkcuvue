<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentAccess extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'assesment_access';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'periode' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'id_cu','periode','status',
        'p1a1_cu_penilaian','p1a1_cu_keterangan','p1a1_bkcu_penilaian','p1a1_bkcu_keterangan','p1a1_bkcu_rekomendasi',
        'p1a2_cu_penilaian','p1a2_cu_keterangan','p1a2_bkcu_penilaian','p1a2_bkcu_keterangan','p1a2_bkcu_rekomendasi',
        'p1b3_cu_penilaian','p1b3_cu_keterangan','p1b3_bkcu_penilaian','p1b3_bkcu_keterangan','p1b3_bkcu_rekomendasi',
        'p1b4_cu_penilaian','p1b4_cu_keterangan','p1b4_bkcu_penilaian','p1b4_bkcu_keterangan','p1b4_bkcu_rekomendasi',
        'p1b5_cu_penilaian','p1b5_cu_keterangan','p1b5_bkcu_penilaian','p1b5_bkcu_keterangan','p1b5_bkcu_rekomendasi',
        'p1b6_cu_penilaian','p1b6_cu_keterangan','p1b6_bkcu_penilaian','p1b6_bkcu_keterangan','p1b6_bkcu_rekomendasi',
        'p1b7_cu_penilaian','p1b7_cu_keterangan','p1b7_bkcu_penilaian','p1b7_bkcu_keterangan','p1b7_bkcu_rekomendasi',
        'p1c8_cu_penilaian','p1c8_cu_keterangan','p1c8_bkcu_penilaian','p1c8_bkcu_keterangan','p1c8_bkcu_rekomendasi',
        'p1c9_cu_penilaian','p1c9_cu_keterangan','p1c9_bkcu_penilaian','p1c9_bkcu_keterangan','p1c9_bkcu_rekomendasi',
        'p1d10_cu_penilaian','p1d10_cu_keterangan','p1d10_bkcu_penilaian','p1d10_bkcu_keterangan','p1d10_bkcu_rekomendasi',
        'p1d11_cu_penilaian','p1d11_cu_keterangan','p1d11_bkcu_penilaian','p1d11_bkcu_keterangan','p1d11_bkcu_rekomendasi',
        'p1e12_cu_penilaian','p1e12_cu_keterangan','p1e12_bkcu_penilaian','p1e12_bkcu_keterangan','p1e12_bkcu_rekomendasi',
        'p1f13_cu_penilaian','p1f13_cu_keterangan','p1f13_bkcu_penilaian','p1f13_bkcu_keterangan','p1f13_bkcu_rekomendasi',
        'p1f14_cu_penilaian','p1f14_cu_keterangan','p1f14_bkcu_penilaian','p1f14_bkcu_keterangan','p1f14_bkcu_rekomendasi',
    ];

    protected $allowedFilters = [
        'id_cu','periode','status',
    ];

    protected $orderable = [
        'id_cu','periode','status',
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '','periode' => '','status' => '',
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }
}