<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentCuleg5 extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'assesment_culeg5';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    protected $fillable = [
        'a1_cu_penilaian', 'a1_cu_keterangan', 'a1_bkcu_penilaian', 'a1_bkcu_keterangan', 'a1_bkcu_rekomendasi',
        'a2_cu_penilaian', 'a2_cu_keterangan', 'a2_bkcu_penilaian', 'a2_bkcu_keterangan', 'a2_bkcu_rekomendasi',
        'a3_cu_penilaian', 'a3_cu_keterangan', 'a3_bkcu_penilaian', 'a3_bkcu_keterangan', 'a3_bkcu_rekomendasi',
        'a4_cu_penilaian', 'a4_cu_keterangan', 'a4_bkcu_penilaian', 'a4_bkcu_keterangan', 'a4_bkcu_rekomendasi',
        'a5_cu_penilaian', 'a5_cu_keterangan', 'a5_bkcu_penilaian', 'a5_bkcu_keterangan', 'a5_bkcu_rekomendasi',
        'a6_cu_penilaian', 'a6_cu_keterangan', 'a6_bkcu_penilaian', 'a6_bkcu_keterangan', 'a6_bkcu_rekomendasi',
        'a7_cu_penilaian', 'a7_cu_keterangan', 'a7_bkcu_penilaian', 'a7_bkcu_keterangan', 'a7_bkcu_rekomendasi',
        'a8_cu_penilaian', 'a8_cu_keterangan', 'a8_bkcu_penilaian', 'a8_bkcu_keterangan', 'a8_bkcu_rekomendasi',
        'a9_cu_penilaian', 'a9_cu_keterangan', 'a9_bkcu_penilaian', 'a9_bkcu_keterangan', 'a9_bkcu_rekomendasi',
        'a10_cu_penilaian', 'a10_cu_keterangan', 'a10_bkcu_penilaian', 'a10_bkcu_keterangan', 'a10_bkcu_rekomendasi',
        'a11_cu_penilaian', 'a11_cu_keterangan', 'a11_bkcu_penilaian', 'a11_bkcu_keterangan', 'a11_bkcu_rekomendasi',
        'a12_cu_penilaian', 'a12_cu_keterangan', 'a12_bkcu_penilaian', 'a12_bkcu_keterangan', 'a12_bkcu_rekomendasi',
        'a13_cu_penilaian', 'a13_cu_keterangan', 'a13_bkcu_penilaian', 'a13_bkcu_keterangan', 'a13_bkcu_rekomendasi',
        'a14_cu_penilaian', 'a14_cu_keterangan', 'a14_bkcu_penilaian', 'a14_bkcu_keterangan', 'a14_bkcu_rekomendasi',
        'a15_cu_penilaian', 'a15_cu_keterangan', 'a15_bkcu_penilaian', 'a15_bkcu_keterangan', 'a15_bkcu_rekomendasi',
        'a16_cu_penilaian', 'a16_cu_keterangan', 'a16_bkcu_penilaian', 'a16_bkcu_keterangan', 'a16_bkcu_rekomendasi',
        'a17_cu_penilaian', 'a17_cu_keterangan', 'a17_bkcu_penilaian', 'a17_bkcu_keterangan', 'a17_bkcu_rekomendasi',
        'a18_cu_penilaian', 'a18_cu_keterangan', 'a18_bkcu_penilaian', 'a18_bkcu_keterangan', 'a18_bkcu_rekomendasi',
        'a19_cu_penilaian', 'a19_cu_keterangan', 'a19_bkcu_penilaian', 'a19_bkcu_keterangan', 'a19_bkcu_rekomendasi',
        'a20_cu_penilaian', 'a20_cu_keterangan', 'a20_bkcu_penilaian', 'a20_bkcu_keterangan', 'a20_bkcu_rekomendasi',
        'a21_cu_penilaian', 'a21_cu_keterangan', 'a21_bkcu_penilaian', 'a21_bkcu_keterangan', 'a21_bkcu_rekomendasi',
        'a22_cu_penilaian', 'a22_cu_keterangan', 'a22_bkcu_penilaian', 'a22_bkcu_keterangan', 'a22_bkcu_rekomendasi',
        'a23_cu_penilaian', 'a23_cu_keterangan', 'a23_bkcu_penilaian', 'a23_bkcu_keterangan', 'a23_bkcu_rekomendasi',

    ];

    public static function initialize()
    {
        return [
            'a1_cu_penilaian' => null, 'a1_cu_keterangan' => null, 'a1_bkcu_penilaian' => null, 'a1_bkcu_keterangan' => null, 'a1_bkcu_rekomendasi' => null,
            'a2_cu_penilaian' => null, 'a2_cu_keterangan' => null, 'a2_bkcu_penilaian' => null, 'a2_bkcu_keterangan' => null, 'a2_bkcu_rekomendasi' => null,
            'a3_cu_penilaian' => null, 'a3_cu_keterangan' => null, 'a3_bkcu_penilaian' => null, 'a3_bkcu_keterangan' => null, 'a3_bkcu_rekomendasi' => null,
            'a4_cu_penilaian' => null, 'a4_cu_keterangan' => null, 'a4_bkcu_penilaian' => null, 'a4_bkcu_keterangan' => null, 'a4_bkcu_rekomendasi' => null,
            'a5_cu_penilaian' => null, 'a5_cu_keterangan' => null, 'a5_bkcu_penilaian' => null, 'a5_bkcu_keterangan' => null, 'a5_bkcu_rekomendasi' => null,
            'a6_cu_penilaian' => null, 'a6_cu_keterangan' => null, 'a6_bkcu_penilaian' => null, 'a6_bkcu_keterangan' => null, 'a6_bkcu_rekomendasi' => null,
            'a7_cu_penilaian' => null, 'a7_cu_keterangan' => null, 'a7_bkcu_penilaian' => null, 'a7_bkcu_keterangan' => null, 'a7_bkcu_rekomendasi' => null,
            'a8_cu_penilaian' => null, 'a8_cu_keterangan' => null, 'a8_bkcu_penilaian' => null, 'a8_bkcu_keterangan' => null, 'a8_bkcu_rekomendasi' => null,
            'a9_cu_penilaian' => null, 'a9_cu_keterangan' => null, 'a9_bkcu_penilaian' => null, 'a9_bkcu_keterangan' => null, 'a9_bkcu_rekomendasi' => null,
            'a10_cu_penilaian' => null, 'a10_cu_keterangan' => null, 'a10_bkcu_penilaian' => null, 'a10_bkcu_keterangan' => null, 'a10_bkcu_rekomendasi' => null,
            'a11_cu_penilaian' => null, 'a11_cu_keterangan' => null, 'a11_bkcu_penilaian' => null, 'a11_bkcu_keterangan' => null, 'a11_bkcu_rekomendasi' => null,
            'a12_cu_penilaian' => null, 'a12_cu_keterangan' => null, 'a12_bkcu_penilaian' => null, 'a12_bkcu_keterangan' => null, 'a12_bkcu_rekomendasi' => null,
            'a13_cu_penilaian' => null, 'a13_cu_keterangan' => null, 'a13_bkcu_penilaian' => null, 'a13_bkcu_keterangan' => null, 'a13_bkcu_rekomendasi' => null,
            'a14_cu_penilaian' => null, 'a14_cu_keterangan' => null, 'a14_bkcu_penilaian' => null, 'a14_bkcu_keterangan' => null, 'a14_bkcu_rekomendasi' => null,
            'a15_cu_penilaian' => null, 'a15_cu_keterangan' => null, 'a15_bkcu_penilaian' => null, 'a15_bkcu_keterangan' => null, 'a15_bkcu_rekomendasi' => null,
            'a16_cu_penilaian' => null, 'a16_cu_keterangan' => null, 'a16_bkcu_penilaian' => null, 'a16_bkcu_keterangan' => null, 'a16_bkcu_rekomendasi' => null,
            'a17_cu_penilaian' => null, 'a17_cu_keterangan' => null, 'a17_bkcu_penilaian' => null, 'a17_bkcu_keterangan' => null, 'a17_bkcu_rekomendasi' => null,
            'a18_cu_penilaian' => null, 'a18_cu_keterangan' => null, 'a18_bkcu_penilaian' => null, 'a18_bkcu_keterangan' => null, 'a18_bkcu_rekomendasi' => null,
            'a19_cu_penilaian' => null, 'a19_cu_keterangan' => null, 'a19_bkcu_penilaian' => null, 'a19_bkcu_keterangan' => null, 'a19_bkcu_rekomendasi' => null,
            'a20_cu_penilaian' => null, 'a20_cu_keterangan' => null, 'a20_bkcu_penilaian' => null, 'a20_bkcu_keterangan' => null, 'a20_bkcu_rekomendasi' => null,
            'a21_cu_penilaian' => null, 'a21_cu_keterangan' => null, 'a21_bkcu_penilaian' => null, 'a21_bkcu_keterangan' => null, 'a21_bkcu_rekomendasi' => null,
            'a22_cu_penilaian' => null, 'a22_cu_keterangan' => null, 'a22_bkcu_penilaian' => null, 'a22_bkcu_keterangan' => null, 'a22_bkcu_rekomendasi' => null,
            'a23_cu_penilaian' => null, 'a23_cu_keterangan' => null, 'a23_bkcu_penilaian' => null, 'a23_bkcu_keterangan' => null, 'a23_bkcu_rekomendasi' => null,

        ];
    }
}

// ADD COLUMN p1a1_cu_penilaian TINYINT(1), ADD COLUMN p1a1_cu_keterangan TEXT, ADD COLUMN p1a1_bkcu_penilaian TINYINT(1), ADD COLUMN p1a1_bkcu_keterangan TEXT, ADD COLUMN p1a1_bkcu_rekomendasi TEXT,
// ADD COLUMN p1a2_cu_penilaian TINYINT(1), ADD COLUMN p1a2_cu_keterangan TEXT, ADD COLUMN p1a2_bkcu_penilaian TINYINT(1), ADD COLUMN p1a2_bkcu_keterangan TEXT, ADD COLUMN p1a2_bkcu_rekomendasi TEXT,
// ADD COLUMN p1b3_cu_penilaian TINYINT(1), ADD COLUMN p1b3_cu_keterangan TEXT, ADD COLUMN p1b3_bkcu_penilaian TINYINT(1), ADD COLUMN p1b3_bkcu_keterangan TEXT, ADD COLUMN p1b3_bkcu_rekomendasi TEXT,
// ADD COLUMN p1b4_cu_penilaian TINYINT(1), ADD COLUMN p1b4_cu_keterangan TEXT, ADD COLUMN p1b4_bkcu_penilaian TINYINT(1), ADD COLUMN p1b4_bkcu_keterangan TEXT, ADD COLUMN p1b4_bkcu_rekomendasi TEXT,
// ADD COLUMN p1b5_cu_penilaian TINYINT(1), ADD COLUMN p1b5_cu_keterangan TEXT, ADD COLUMN p1b5_bkcu_penilaian TINYINT(1), ADD COLUMN p1b5_bkcu_keterangan TEXT, ADD COLUMN p1b5_bkcu_rekomendasi TEXT,
// ADD COLUMN p1b6_cu_penilaian TINYINT(1), ADD COLUMN p1b6_cu_keterangan TEXT, ADD COLUMN p1b6_bkcu_penilaian TINYINT(1), ADD COLUMN p1b6_bkcu_keterangan TEXT, ADD COLUMN p1b6_bkcu_rekomendasi TEXT,
// ADD COLUMN p1b7_cu_penilaian TINYINT(1), ADD COLUMN p1b7_cu_keterangan TEXT, ADD COLUMN p1b7_bkcu_penilaian TINYINT(1), ADD COLUMN p1b7_bkcu_keterangan TEXT, ADD COLUMN p1b7_bkcu_rekomendasi TEXT,
// ADD COLUMN p1c8_cu_penilaian TINYINT(1), ADD COLUMN p1c8_cu_keterangan TEXT, ADD COLUMN p1c8_bkcu_penilaian TINYINT(1), ADD COLUMN p1c8_bkcu_keterangan TEXT, ADD COLUMN p1c8_bkcu_rekomendasi TEXT,
// ADD COLUMN p1c9_cu_penilaian TINYINT(1), ADD COLUMN p1c9_cu_keterangan TEXT, ADD COLUMN p1c9_bkcu_penilaian TINYINT(1), ADD COLUMN p1c9_bkcu_keterangan TEXT, ADD COLUMN p1c9_bkcu_rekomendasi TEXT,
// ADD COLUMN p1d10_cu_penilaian TINYINT(1), ADD COLUMN p1d10_cu_keterangan TEXT, ADD COLUMN p1d10_bkcu_penilaian TINYINT(1), ADD COLUMN p1d10_bkcu_keterangan TEXT, ADD COLUMN p1d10_bkcu_rekomendasi TEXT,
// ADD COLUMN p1d11_cu_penilaian TINYINT(1), ADD COLUMN p1d11_cu_keterangan TEXT, ADD COLUMN p1d11_bkcu_penilaian TINYINT(1), ADD COLUMN p1d11_bkcu_keterangan TEXT, ADD COLUMN p1d11_bkcu_rekomendasi TEXT,
// ADD COLUMN p1e12_cu_penilaian TINYINT(1), ADD COLUMN p1e12_cu_keterangan TEXT, ADD COLUMN p1e12_bkcu_penilaian TINYINT(1), ADD COLUMN p1e12_bkcu_keterangan TEXT, ADD COLUMN p1e12_bkcu_rekomendasi TEXT,
// ADD COLUMN p1f13_cu_penilaian TINYINT(1), ADD COLUMN p1f13_cu_keterangan TEXT, ADD COLUMN p1f13_bkcu_penilaian TINYINT(1), ADD COLUMN p1f13_bkcu_keterangan TEXT, ADD COLUMN p1f13_bkcu_rekomendasi TEXT,
// ADD COLUMN p1f14_cu_penilaian TINYINT(1), ADD COLUMN p1f14_cu_keterangan TEXT, ADD COLUMN p1f14_bkcu_penilaian TINYINT(1), ADD COLUMN p1f14_bkcu_keterangan TEXT, ADD COLUMN p1f14_bkcu_rekomendasi TEXT,