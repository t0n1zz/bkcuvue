<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentCuleg7 extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'assesment_culeg7';
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