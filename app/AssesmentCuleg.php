<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use App\Support\LaporanCuHelper;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentCuleg extends BaseEloquent {
    
    use Dataviewer, SoftDeletes;

    protected $table = 'assesment_culeg';
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
        'id_p2','id_p3','id_p4','id_p5','id_p6','id_p7','id_p8','id_p9','id_p10','id_p11'
    ];

    protected $allowedFilters = [
        'id_cu','id_laporan_cu','periode','status','created_at','updated_at',
    ];

    protected $orderable = [
        'id_cu','id_laporan_cu','periode','status','created_at','updated_at',
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
        return $this->belongsTo('App\AssesmentCuleg1','id_p1','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + 
         IFNULL(a6_cu_penilaian, 0) + IFNULL(a7_cu_penilaian, 0) +
         IFNULL(a8_cu_penilaian, 0) + IFNULL(a9_cu_penilaian, 0) +
         IFNULL(a10_cu_penilaian, 0)
        ) as skor_cu_p1,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + 
         IFNULL(a6_bkcu_penilaian, 0) + IFNULL(a7_bkcu_penilaian, 0) +
         IFNULL(a8_bkcu_penilaian, 0) + IFNULL(a9_bkcu_penilaian, 0) +
         IFNULL(a10_bkcu_penilaian, 0)
        ) as skor_bkcu_p1
        '));
    }

    public function p2()
    {
        return $this->belongsTo('App\AssesmentCuleg2','id_p2','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0) + 
         IFNULL(a7_cu_penilaian, 0) + IFNULL(a8_cu_penilaian, 0) + 
         IFNULL(a9_cu_penilaian, 0) + IFNULL(a10_cu_penilaian, 0) + 
         IFNULL(a11_cu_penilaian, 0) + IFNULL(a12_cu_penilaian, 0) + 
         IFNULL(a13_cu_penilaian, 0)
        ) as skor_cu_p2,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0) + 
         IFNULL(a7_bkcu_penilaian, 0) + IFNULL(a8_bkcu_penilaian, 0) + 
         IFNULL(a9_bkcu_penilaian, 0) + IFNULL(a10_bkcu_penilaian, 0) + 
         IFNULL(a11_bkcu_penilaian, 0) + IFNULL(a12_bkcu_penilaian, 0) + 
         IFNULL(a13_bkcu_penilaian, 0)
        ) as skor_bkcu_p2
        '));
    }

    public function p3()
    {
        return $this->belongsTo('App\AssesmentCuleg3','id_p3','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0) + 
         IFNULL(a7_cu_penilaian, 0) + IFNULL(a8_cu_penilaian, 0) + 
         IFNULL(a9_cu_penilaian, 0) + IFNULL(a10_cu_penilaian, 0) + 
         IFNULL(a11_cu_penilaian, 0) + IFNULL(a12_cu_penilaian, 0) + 
         IFNULL(a13_cu_penilaian, 0) + IFNULL(a14_cu_penilaian, 0) 
        ) as skor_cu_p3,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0) + 
         IFNULL(a7_bkcu_penilaian, 0) + IFNULL(a8_bkcu_penilaian, 0) + 
         IFNULL(a9_bkcu_penilaian, 0) + IFNULL(a10_bkcu_penilaian, 0) + 
         IFNULL(a11_bkcu_penilaian, 0) + IFNULL(a12_bkcu_penilaian, 0) + 
         IFNULL(a13_bkcu_penilaian, 0) + IFNULL(a14_bkcu_penilaian, 0)
        ) as skor_bkcu_p3
        '));
    }

    public function p4()
    {
        return $this->belongsTo('App\AssesmentCuleg4','id_p4','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0)
        ) as skor_cu_p4,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0)
        ) as skor_bkcu_p4
        '));
    }

    public function p5()
    {
        return $this->belongsTo('App\AssesmentCuleg5','id_p5','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0) + 
         IFNULL(a7_cu_penilaian, 0) + IFNULL(a8_cu_penilaian, 0) + 
         IFNULL(a9_cu_penilaian, 0) + IFNULL(a10_cu_penilaian, 0) + 
         IFNULL(a11_cu_penilaian, 0) + IFNULL(a12_cu_penilaian, 0) + 
         IFNULL(a13_cu_penilaian, 0) + IFNULL(a14_cu_penilaian, 0) +
         IFNULL(a15_cu_penilaian, 0) + IFNULL(a16_cu_penilaian, 0) +
         IFNULL(a17_cu_penilaian, 0) + IFNULL(a18_cu_penilaian, 0) +
         IFNULL(a19_cu_penilaian, 0) + IFNULL(a20_cu_penilaian, 0) +
         IFNULL(a21_cu_penilaian, 0) + IFNULL(a22_cu_penilaian, 0) +
         IFNULL(a23_cu_penilaian, 0)
        ) as skor_cu_p5,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0) + 
         IFNULL(a7_bkcu_penilaian, 0) + IFNULL(a8_bkcu_penilaian, 0) + 
         IFNULL(a9_bkcu_penilaian, 0) + IFNULL(a10_bkcu_penilaian, 0) + 
         IFNULL(a11_bkcu_penilaian, 0) + IFNULL(a12_bkcu_penilaian, 0) + 
         IFNULL(a13_bkcu_penilaian, 0) + IFNULL(a14_bkcu_penilaian, 0) +
         IFNULL(a15_bkcu_penilaian, 0) + IFNULL(a16_bkcu_penilaian, 0) +
         IFNULL(a17_bkcu_penilaian, 0) + IFNULL(a18_bkcu_penilaian, 0) +
         IFNULL(a19_bkcu_penilaian, 0) + IFNULL(a20_bkcu_penilaian, 0) +
         IFNULL(a21_bkcu_penilaian, 0) + IFNULL(a22_bkcu_penilaian, 0) +
         IFNULL(a23_bkcu_penilaian, 0)
        ) as skor_bkcu_p5
        '));
    }

    public function p6()
    {
        return $this->belongsTo('App\AssesmentCuleg6','id_p6','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0)
        ) as skor_cu_p6,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0)
        ) as skor_bkcu_p6
        '));
    }

    public function p7()
    {
        return $this->belongsTo('App\AssesmentCuleg7','id_p7','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0) + 
         IFNULL(a7_cu_penilaian, 0) + IFNULL(a8_cu_penilaian, 0) + 
         IFNULL(a9_cu_penilaian, 0) + IFNULL(a10_cu_penilaian, 0) + 
         IFNULL(a11_cu_penilaian, 0)
        ) as skor_cu_p7,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0) + 
         IFNULL(a7_bkcu_penilaian, 0)
        ) as skor_bkcu_p7
        '));
    }

    public function p8()
    {
        return $this->belongsTo('App\AssesmentCuleg8','id_p8','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0)
        ) as skor_cu_p8,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0)
        ) as skor_bkcu_p8
        '));
    }

    public function p9()
    {
        return $this->belongsTo('App\AssesmentCuleg9','id_p9','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0)
        ) as skor_cu_p9,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0)
        ) as skor_bkcu_p9
        '));
    }

    public function p10()
    {
        return $this->belongsTo('App\AssesmentCuleg10','id_p10','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0) + 
         IFNULL(a7_cu_penilaian, 0) + IFNULL(a8_cu_penilaian, 0) + 
         IFNULL(a9_cu_penilaian, 0) + IFNULL(a10_cu_penilaian, 0) + 
         IFNULL(a11_cu_penilaian, 0) + IFNULL(a12_cu_penilaian, 0) + 
         IFNULL(a13_cu_penilaian, 0) + IFNULL(a14_cu_penilaian, 0)
        ) as skor_cu_p10,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0) + 
         IFNULL(a7_bkcu_penilaian, 0) + IFNULL(a8_bkcu_penilaian, 0) + 
         IFNULL(a9_bkcu_penilaian, 0) + IFNULL(a10_bkcu_penilaian, 0) + 
         IFNULL(a11_bkcu_penilaian, 0) + IFNULL(a12_bkcu_penilaian, 0) + 
         IFNULL(a13_bkcu_penilaian, 0) + IFNULL(a14_bkcu_penilaian, 0)
        ) as skor_bkcu_p10
        '));
    }

    public function p11()
    {
        return $this->belongsTo('App\AssesmentCuleg11','id_p11','id')
        ->select(DB::raw('*,
        (IFNULL(a1_cu_penilaian, 0) + IFNULL(a2_cu_penilaian, 0) + 
         IFNULL(a3_cu_penilaian, 0) + IFNULL(a4_cu_penilaian, 0) + 
         IFNULL(a5_cu_penilaian, 0) + IFNULL(a6_cu_penilaian, 0) + 
         IFNULL(a7_cu_penilaian, 0) + IFNULL(a8_cu_penilaian, 0) + 
         IFNULL(a9_cu_penilaian, 0) + IFNULL(a10_cu_penilaian, 0) + 
         IFNULL(a11_cu_penilaian, 0) + IFNULL(a12_cu_penilaian, 0) + 
         IFNULL(a13_cu_penilaian, 0) + IFNULL(a14_cu_penilaian, 0) +
         IFNULL(a15_cu_penilaian, 0) + IFNULL(a16_cu_penilaian, 0) +
         IFNULL(a17_cu_penilaian, 0) + IFNULL(a18_cu_penilaian, 0) +
         IFNULL(a19_cu_penilaian, 0) + IFNULL(a20_cu_penilaian, 0)
        ) as skor_cu_p11,
        (IFNULL(a1_bkcu_penilaian, 0) + IFNULL(a2_bkcu_penilaian, 0) + 
         IFNULL(a3_bkcu_penilaian, 0) + IFNULL(a4_bkcu_penilaian, 0) + 
         IFNULL(a5_bkcu_penilaian, 0) + IFNULL(a6_bkcu_penilaian, 0) + 
         IFNULL(a7_bkcu_penilaian, 0) + IFNULL(a8_bkcu_penilaian, 0) + 
         IFNULL(a9_bkcu_penilaian, 0) + IFNULL(a10_bkcu_penilaian, 0) + 
         IFNULL(a11_bkcu_penilaian, 0) + IFNULL(a12_bkcu_penilaian, 0) + 
         IFNULL(a13_bkcu_penilaian, 0) + IFNULL(a14_bkcu_penilaian, 0) +
         IFNULL(a15_bkcu_penilaian, 0) + IFNULL(a16_bkcu_penilaian, 0) +
         IFNULL(a17_bkcu_penilaian, 0) + IFNULL(a18_bkcu_penilaian, 0) +
         IFNULL(a19_bkcu_penilaian, 0) + IFNULL(a20_bkcu_penilaian, 0)
        ) as skor_bkcu_p11
        '));
    }

    
}