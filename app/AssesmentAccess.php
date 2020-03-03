<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use App\Support\LaporanCuHelper;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentAccess extends BaseEloquent {
    
    use Dataviewer, SoftDeletes;

    protected $table = 'assesment_access';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'id_laporan_cu' => 'required',
        'periode' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'id_cu','id_laporan_cu','periode','status','id_p1',
        'id_p2','id_p3','id_p4'
    ];

    protected $allowedFilters = [
        'id_cu','id_laporan_cu','periode','status',
    ];

    protected $orderable = [
        'id_cu','id_laporan_cu','periode','status',
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '','id_laporan_cu' => '','periode' => '','status' => ''
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function LaporanCu()
    {
        return $this->belongsTo('App\LaporanCu','id_laporan_cu','id')->addSelect(['*',DB::raw(LaporanCuHelper::queryPEARLS())]);
    }

    public function p1()
    {
        return $this->belongsTo('App\AssesmentAccessP1','id_p1','id')
        ->select(DB::raw('*,
        (IFNULL(p1a1_cu_penilaian, 0) + IFNULL(p1a2_cu_penilaian, 0) + 
         IFNULL(p1b3_cu_penilaian, 0) + IFNULL(p1b4_cu_penilaian, 0) + 
         IFNULL(p1b5_cu_penilaian, 0) + 
         IFNULL(p1b7_cu_penilaian, 0) + IFNULL(p1c8_cu_penilaian, 0) +
         IFNULL(p1c9_cu_penilaian, 0) + IFNULL(p1d10_cu_penilaian, 0) +
         IFNULL(p1d11_cu_penilaian, 0) + IFNULL(p1e12_cu_penilaian, 0) +
         IFNULL(p1f13_cu_penilaian, 0) + IFNULL(p1f14_cu_penilaian, 0)
        ) as skor_cu_p1,
        (IFNULL(p1a1_bkcu_penilaian, 0) + IFNULL(p1a2_bkcu_penilaian, 0) + 
         IFNULL(p1b3_bkcu_penilaian, 0) + IFNULL(p1b4_bkcu_penilaian, 0) + 
         IFNULL(p1b5_bkcu_penilaian, 0) + 
         IFNULL(p1b7_bkcu_penilaian, 0) + IFNULL(p1c8_bkcu_penilaian, 0) +
         IFNULL(p1c9_bkcu_penilaian, 0) + IFNULL(p1d10_bkcu_penilaian, 0) +
         IFNULL(p1d11_bkcu_penilaian, 0) + IFNULL(p1e12_bkcu_penilaian, 0) +
         IFNULL(p1f13_bkcu_penilaian, 0) + IFNULL(p1f14_bkcu_penilaian, 0)
        ) as skor_bkcu_p1
        '));
    }

    public function p2()
    {
        return $this->belongsTo('App\AssesmentAccessP2','id_p2','id')
        ->select(DB::raw('*,
        (IFNULL(p2a1_cu_penilaian, 0) + IFNULL(p2a2_cu_penilaian, 0) + 
         IFNULL(p2a3_cu_penilaian, 0) + IFNULL(p2a4_cu_penilaian, 0) + 
         IFNULL(p2a5_cu_penilaian, 0) + IFNULL(p2a6_cu_penilaian, 0) + 
         IFNULL(p2a7_cu_penilaian, 0) + IFNULL(p2a8_cu_penilaian, 0) + 
         IFNULL(p2a9_cu_penilaian, 0) + IFNULL(p2a10_cu_penilaian, 0) + 
         IFNULL(p2a11_cu_penilaian, 0) + IFNULL(p2b12_cu_penilaian, 0) + 
         IFNULL(p2b13_cu_penilaian, 0) + IFNULL(p2b14_cu_penilaian, 0) + 
         IFNULL(p2b15_cu_penilaian, 0) + IFNULL(p2b16_cu_penilaian, 0) + 
         IFNULL(p2b17_cu_penilaian, 0) + IFNULL(p2b18_cu_penilaian, 0) + 
         IFNULL(p2b19_cu_penilaian, 0) + IFNULL(p2b20_cu_penilaian, 0) + 
         IFNULL(p2b21_cu_penilaian, 0) + IFNULL(p2b22_cu_penilaian, 0) + 
         IFNULL(p2b23_cu_penilaian, 0) + IFNULL(p2b24_cu_penilaian, 0) + 
         IFNULL(p2b25_cu_penilaian, 0) + IFNULL(p2b26_cu_penilaian, 0) + 
         IFNULL(p2b27_cu_penilaian, 0)
        ) as skor_cu_p2,
        (IFNULL(p2a1_bkcu_penilaian, 0) + IFNULL(p2a2_bkcu_penilaian, 0) + 
         IFNULL(p2a3_bkcu_penilaian, 0) + IFNULL(p2a4_bkcu_penilaian, 0) + 
         IFNULL(p2a5_bkcu_penilaian, 0) + IFNULL(p2a6_bkcu_penilaian, 0) + 
         IFNULL(p2a7_bkcu_penilaian, 0) + IFNULL(p2a8_bkcu_penilaian, 0) + 
         IFNULL(p2a9_bkcu_penilaian, 0) + IFNULL(p2a10_bkcu_penilaian, 0) + 
         IFNULL(p2a11_bkcu_penilaian, 0) + IFNULL(p2b12_bkcu_penilaian, 0) + 
         IFNULL(p2b13_bkcu_penilaian, 0) + IFNULL(p2b14_bkcu_penilaian, 0) + 
         IFNULL(p2b15_bkcu_penilaian, 0) + IFNULL(p2b16_bkcu_penilaian, 0) + 
         IFNULL(p2b17_bkcu_penilaian, 0) + IFNULL(p2b18_bkcu_penilaian, 0) + 
         IFNULL(p2b19_bkcu_penilaian, 0) + IFNULL(p2b20_bkcu_penilaian, 0) + 
         IFNULL(p2b21_bkcu_penilaian, 0) + IFNULL(p2b22_bkcu_penilaian, 0) + 
         IFNULL(p2b23_bkcu_penilaian, 0) + IFNULL(p2b24_bkcu_penilaian, 0) + 
         IFNULL(p2b25_bkcu_penilaian, 0) + IFNULL(p2b26_bkcu_penilaian, 0) + 
         IFNULL(p2b27_bkcu_penilaian, 0)
        ) as skor_bkcu_p2
        '));
    }

    public function p3()
    {
        return $this->belongsTo('App\AssesmentAccessP3','id_p3','id')
        ->select(DB::raw('*,
        (IFNULL(p3a1_cu_penilaian, 0) + IFNULL(p3a2_cu_penilaian, 0) + 
         IFNULL(p3a3_cu_penilaian, 0) + IFNULL(p3a4_cu_penilaian, 0) + 
         IFNULL(p3a5_cu_penilaian, 0) + IFNULL(p3a6_cu_penilaian, 0) + 
         IFNULL(p3a7_cu_penilaian, 0) + IFNULL(p3a8_cu_penilaian, 0) + 
         IFNULL(p3a9_cu_penilaian, 0) + IFNULL(p3b10_cu_penilaian, 0) + 
         IFNULL(p3b11_cu_penilaian, 0) + IFNULL(p3b12_cu_penilaian, 0) + 
         IFNULL(p3b13_cu_penilaian, 0) + IFNULL(p3b14_cu_penilaian, 0) + 
         IFNULL(p3b15_cu_penilaian, 0) + IFNULL(p3b16_cu_penilaian, 0) + 
         IFNULL(p3b17_cu_penilaian, 0) + IFNULL(p3b18_cu_penilaian, 0) + 
         IFNULL(p3b19_cu_penilaian, 0) + IFNULL(p3b20_cu_penilaian, 0) + 
         IFNULL(p3b21_cu_penilaian, 0) + IFNULL(p3b22_cu_penilaian, 0) + 
         IFNULL(p3b23_cu_penilaian, 0) + IFNULL(p3b24_cu_penilaian, 0) + 
         IFNULL(p3b25_cu_penilaian, 0) + IFNULL(p3b26_cu_penilaian, 0)
        ) as skor_cu_p3,
        (IFNULL(p3a1_bkcu_penilaian, 0) + IFNULL(p3a2_bkcu_penilaian, 0) + 
         IFNULL(p3a3_bkcu_penilaian, 0) + IFNULL(p3a4_bkcu_penilaian, 0) + 
         IFNULL(p3a5_bkcu_penilaian, 0) + IFNULL(p3a6_bkcu_penilaian, 0) + 
         IFNULL(p3a7_bkcu_penilaian, 0) + IFNULL(p3a8_bkcu_penilaian, 0) + 
         IFNULL(p3a9_bkcu_penilaian, 0) + IFNULL(p3b10_bkcu_penilaian, 0) + 
         IFNULL(p3b11_bkcu_penilaian, 0) + IFNULL(p3b12_bkcu_penilaian, 0) + 
         IFNULL(p3b13_bkcu_penilaian, 0) + IFNULL(p3b14_bkcu_penilaian, 0) + 
         IFNULL(p3b15_bkcu_penilaian, 0) + IFNULL(p3b16_bkcu_penilaian, 0) + 
         IFNULL(p3b17_bkcu_penilaian, 0) + IFNULL(p3b18_bkcu_penilaian, 0) + 
         IFNULL(p3b19_bkcu_penilaian, 0) + IFNULL(p3b20_bkcu_penilaian, 0) + 
         IFNULL(p3b21_bkcu_penilaian, 0) + IFNULL(p3b22_bkcu_penilaian, 0) + 
         IFNULL(p3b23_bkcu_penilaian, 0) + IFNULL(p3b24_bkcu_penilaian, 0) + 
         IFNULL(p3b25_bkcu_penilaian, 0) + IFNULL(p3b26_bkcu_penilaian, 0)
        ) as skor_bkcu_p3
        '));
    }

    public function p4()
    {
        return $this->belongsTo('App\AssesmentAccessP4','id_p4','id')
        ->select(DB::raw('*,
        (IFNULL(p4a1_cu_penilaian, 0) + IFNULL(p4a2_cu_penilaian, 0) + 
         IFNULL(p4a3_cu_penilaian, 0) + IFNULL(p4a4_cu_penilaian, 0) + 
         IFNULL(p4a5_cu_penilaian, 0) + IFNULL(p4a6_cu_penilaian, 0) + 
         IFNULL(p4a7_cu_penilaian, 0) + IFNULL(p4a8_cu_penilaian, 0) + 
         IFNULL(p4a9_cu_penilaian, 0) + IFNULL(p4a10_cu_penilaian, 0) + 
         IFNULL(p4b11_cu_penilaian, 0) + IFNULL(p4b12_cu_penilaian, 0) + 
         IFNULL(p4b13_cu_penilaian, 0) + IFNULL(p4b14_cu_penilaian, 0) + 
         IFNULL(p4b15_cu_penilaian, 0) + IFNULL(p4b16_cu_penilaian, 0) + 
         IFNULL(p4b17_cu_penilaian, 0) + IFNULL(p4b18_cu_penilaian, 0) + 
         IFNULL(p4b19_cu_penilaian, 0) + IFNULL(p4b20_cu_penilaian, 0)
        ) as skor_cu_p4,
        (IFNULL(p4a1_bkcu_penilaian, 0) + IFNULL(p4a2_bkcu_penilaian, 0) + 
         IFNULL(p4a3_bkcu_penilaian, 0) + IFNULL(p4a4_bkcu_penilaian, 0) + 
         IFNULL(p4a5_bkcu_penilaian, 0) + IFNULL(p4a6_bkcu_penilaian, 0) + 
         IFNULL(p4a7_bkcu_penilaian, 0) + IFNULL(p4a8_bkcu_penilaian, 0) + 
         IFNULL(p4a9_bkcu_penilaian, 0) + IFNULL(p4a10_bkcu_penilaian, 0) + 
         IFNULL(p4b11_bkcu_penilaian, 0) + IFNULL(p4b12_bkcu_penilaian, 0) + 
         IFNULL(p4b13_bkcu_penilaian, 0) + IFNULL(p4b14_bkcu_penilaian, 0) + 
         IFNULL(p4b15_bkcu_penilaian, 0) + IFNULL(p4b16_bkcu_penilaian, 0) + 
         IFNULL(p4b17_bkcu_penilaian, 0) + IFNULL(p4b18_bkcu_penilaian, 0) + 
         IFNULL(p4b19_bkcu_penilaian, 0) + IFNULL(p4b20_bkcu_penilaian, 0)
        ) as skor_bkcu_p4
        '));
    }
}