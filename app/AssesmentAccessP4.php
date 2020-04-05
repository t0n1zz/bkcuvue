<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentAccessP4 extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'assesment_access_p4';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    protected $fillable = [
        'p4a1_cu_penilaian','p4a1_cu_keterangan','p4a1_bkcu_penilaian','p4a1_bkcu_keterangan','p4a1_bkcu_rekomendasi',
        'p4a2_cu_penilaian','p4a2_cu_keterangan','p4a2_bkcu_penilaian','p4a2_bkcu_keterangan','p4a2_bkcu_rekomendasi',
        'p4a3_cu_penilaian','p4a3_cu_keterangan','p4a3_bkcu_penilaian','p4a3_bkcu_keterangan','p4a3_bkcu_rekomendasi',
        'p4a4_cu_penilaian','p4a4_cu_keterangan','p4a4_bkcu_penilaian','p4a4_bkcu_keterangan','p4a4_bkcu_rekomendasi',
        'p4a5_cu_penilaian','p4a5_cu_keterangan','p4a5_bkcu_penilaian','p4a5_bkcu_keterangan','p4a5_bkcu_rekomendasi',
        'p4a6_cu_penilaian','p4a6_cu_keterangan','p4a6_bkcu_penilaian','p4a6_bkcu_keterangan','p4a6_bkcu_rekomendasi',
        'p4a7_cu_penilaian','p4a7_cu_keterangan','p4a7_bkcu_penilaian','p4a7_bkcu_keterangan','p4a7_bkcu_rekomendasi',
        'p4a8_cu_penilaian','p4a8_cu_keterangan','p4a8_bkcu_penilaian','p4a8_bkcu_keterangan','p4a8_bkcu_rekomendasi',
        'p4a9_cu_penilaian','p4a9_cu_keterangan','p4a9_bkcu_penilaian','p4a9_bkcu_keterangan','p4a9_bkcu_rekomendasi',
        'p4a10_cu_penilaian','p4a10_cu_keterangan','p4a10_bkcu_penilaian','p4a10_bkcu_keterangan','p4a10_bkcu_rekomendasi',
        'p4b11_cu_penilaian','p4b11_cu_keterangan','p4b11_bkcu_penilaian','p4b11_bkcu_keterangan','p4b11_bkcu_rekomendasi',
        'p4b12_cu_penilaian','p4b12_cu_keterangan','p4b12_bkcu_penilaian','p4b12_bkcu_keterangan','p4b12_bkcu_rekomendasi',
        'p4b13_cu_penilaian','p4b13_cu_keterangan','p4b13_bkcu_penilaian','p4b13_bkcu_keterangan','p4b13_bkcu_rekomendasi',
        'p4b14_cu_penilaian','p4b14_cu_keterangan','p4b14_bkcu_penilaian','p4b14_bkcu_keterangan','p4b14_bkcu_rekomendasi',
        'p4b15_cu_penilaian','p4b15_cu_keterangan','p4b15_bkcu_penilaian','p4b15_bkcu_keterangan','p4b15_bkcu_rekomendasi',
        'p4b16_cu_penilaian','p4b16_cu_keterangan','p4b16_bkcu_penilaian','p4b16_bkcu_keterangan','p4b16_bkcu_rekomendasi',
        'p4b17_cu_penilaian','p4b17_cu_keterangan','p4b17_bkcu_penilaian','p4b17_bkcu_keterangan','p4b17_bkcu_rekomendasi',
        'p4b18_cu_penilaian','p4b18_cu_keterangan','p4b18_bkcu_penilaian','p4b18_bkcu_keterangan','p4b18_bkcu_rekomendasi',
        'p4b19_cu_penilaian','p4b19_cu_keterangan','p4b19_bkcu_penilaian','p4b19_bkcu_keterangan','p4b19_bkcu_rekomendasi',
        'p4b20_cu_penilaian','p4b20_cu_keterangan','p4b20_bkcu_penilaian','p4b20_bkcu_keterangan','p4b20_bkcu_rekomendasi',
    ];

    public static function initialize()
    {
        return [
            'p4a1_cu_penilaian' => null,'p4a1_cu_keterangan' => null,'p4a1_bkcu_penilaian' => null,'p4a1_bkcu_keterangan' => null,'p4a1_bkcu_rekomendasi' => null,
            'p4a2_cu_penilaian' => null,'p4a2_cu_keterangan' => null,'p4a2_bkcu_penilaian' => null,'p4a2_bkcu_keterangan' => null,'p4a2_bkcu_rekomendasi' => null,
            'p4a3_cu_penilaian' => null,'p4a3_cu_keterangan' => null,'p4a3_bkcu_penilaian' => null,'p4a3_bkcu_keterangan' => null,'p4a3_bkcu_rekomendasi' => null,
            'p4a4_cu_penilaian' => null,'p4a4_cu_keterangan' => null,'p4a4_bkcu_penilaian' => null,'p4a4_bkcu_keterangan' => null,'p4a4_bkcu_rekomendasi' => null,
            'p4a5_cu_penilaian' => null,'p4a5_cu_keterangan' => null,'p4a5_bkcu_penilaian' => null,'p4a5_bkcu_keterangan' => null,'p4a5_bkcu_rekomendasi' => null,
            'p4a6_cu_penilaian' => null,'p4a6_cu_keterangan' => null,'p4a6_bkcu_penilaian' => null,'p4a6_bkcu_keterangan' => null,'p4a6_bkcu_rekomendasi' => null,
            'p4a7_cu_penilaian' => null,'p4a7_cu_keterangan' => null,'p4a7_bkcu_penilaian' => null,'p4a7_bkcu_keterangan' => null,'p4a7_bkcu_rekomendasi' => null,
            'p4a8_cu_penilaian' => null,'p4a8_cu_keterangan' => null,'p4a8_bkcu_penilaian' => null,'p4a8_bkcu_keterangan' => null,'p4a8_bkcu_rekomendasi' => null,
            'p4a9_cu_penilaian' => null,'p4a9_cu_keterangan' => null,'p4a9_bkcu_penilaian' => null,'p4a9_bkcu_keterangan' => null,'p4a9_bkcu_rekomendasi' => null,
            'p4a10_cu_penilaian' => null,'p4a10_cu_keterangan' => null,'p4a10_bkcu_penilaian' => null,'p4a10_bkcu_keterangan' => null,'p4a10_bkcu_rekomendasi' => null,
            'p4b11_cu_penilaian' => null,'p4b11_cu_keterangan' => null,'p4b11_bkcu_penilaian' => null,'p4b11_bkcu_keterangan' => null,'p4b11_bkcu_rekomendasi' => null,
            'p4b12_cu_penilaian' => null,'p4b12_cu_keterangan' => null,'p4b12_bkcu_penilaian' => null,'p4b12_bkcu_keterangan' => null,'p4b12_bkcu_rekomendasi' => null,
            'p4b13_cu_penilaian' => null,'p4b13_cu_keterangan' => null,'p4b13_bkcu_penilaian' => null,'p4b13_bkcu_keterangan' => null,'p4b13_bkcu_rekomendasi' => null,
            'p4b14_cu_penilaian' => null,'p4b14_cu_keterangan' => null,'p4b14_bkcu_penilaian' => null,'p4b14_bkcu_keterangan' => null,'p4b14_bkcu_rekomendasi' => null,
            'p4b15_cu_penilaian' => null,'p4b15_cu_keterangan' => null,'p4b15_bkcu_penilaian' => null,'p4b15_bkcu_keterangan' => null,'p4b15_bkcu_rekomendasi' => null,
            'p4b16_cu_penilaian' => null,'p4b16_cu_keterangan' => null,'p4b16_bkcu_penilaian' => null,'p4b16_bkcu_keterangan' => null,'p4b16_bkcu_rekomendasi' => null,
            'p4b17_cu_penilaian' => null,'p4b17_cu_keterangan' => null,'p4b17_bkcu_penilaian' => null,'p4b17_bkcu_keterangan' => null,'p4b17_bkcu_rekomendasi' => null,
            'p4b18_cu_penilaian' => null,'p4b18_cu_keterangan' => null,'p4b18_bkcu_penilaian' => null,'p4b18_bkcu_keterangan' => null,'p4b18_bkcu_rekomendasi' => null,
            'p4b19_cu_penilaian' => null,'p4b19_cu_keterangan' => null,'p4b19_bkcu_penilaian' => null,'p4b19_bkcu_keterangan' => null,'p4b19_bkcu_rekomendasi' => null,
            'p4b20_cu_penilaian' => null,'p4b20_cu_keterangan' => null,'p4b20_bkcu_penilaian' => null,'p4b20_bkcu_keterangan' => null,'p4b20_bkcu_rekomendasi' => null,
        ];
    }
}

// ADD COLUMN p4a1_cu_penilaian TINYINT(1), ADD COLUMN p4a1_cu_keterangan TEXT, ADD COLUMN p4a1_bkcu_penilaian TINYINT(1), ADD COLUMN p4a1_bkcu_keterangan TEXT, ADD COLUMN p4a1_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a2_cu_penilaian TINYINT(1), ADD COLUMN p4a2_cu_keterangan TEXT, ADD COLUMN p4a2_bkcu_penilaian TINYINT(1), ADD COLUMN p4a2_bkcu_keterangan TEXT, ADD COLUMN p4a2_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a3_cu_penilaian TINYINT(1), ADD COLUMN p4a3_cu_keterangan TEXT, ADD COLUMN p4a3_bkcu_penilaian TINYINT(1), ADD COLUMN p4a3_bkcu_keterangan TEXT, ADD COLUMN p4a3_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a4_cu_penilaian TINYINT(1), ADD COLUMN p4a4_cu_keterangan TEXT, ADD COLUMN p4a4_bkcu_penilaian TINYINT(1), ADD COLUMN p4a4_bkcu_keterangan TEXT, ADD COLUMN p4a4_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a5_cu_penilaian TINYINT(1), ADD COLUMN p4a5_cu_keterangan TEXT, ADD COLUMN p4a5_bkcu_penilaian TINYINT(1), ADD COLUMN p4a5_bkcu_keterangan TEXT, ADD COLUMN p4a5_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a6_cu_penilaian TINYINT(1), ADD COLUMN p4a6_cu_keterangan TEXT, ADD COLUMN p4a6_bkcu_penilaian TINYINT(1), ADD COLUMN p4a6_bkcu_keterangan TEXT, ADD COLUMN p4a6_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a7_cu_penilaian TINYINT(1), ADD COLUMN p4a7_cu_keterangan TEXT, ADD COLUMN p4a7_bkcu_penilaian TINYINT(1), ADD COLUMN p4a7_bkcu_keterangan TEXT, ADD COLUMN p4a7_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a8_cu_penilaian TINYINT(1), ADD COLUMN p4a8_cu_keterangan TEXT, ADD COLUMN p4a8_bkcu_penilaian TINYINT(1), ADD COLUMN p4a8_bkcu_keterangan TEXT, ADD COLUMN p4a8_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a9_cu_penilaian TINYINT(1), ADD COLUMN p4a9_cu_keterangan TEXT, ADD COLUMN p4a9_bkcu_penilaian TINYINT(1), ADD COLUMN p4a9_bkcu_keterangan TEXT, ADD COLUMN p4a9_bkcu_rekomendasi TEXT,
// ADD COLUMN p4a10_cu_penilaian TINYINT(1), ADD COLUMN p4a10_cu_keterangan TEXT, ADD COLUMN p4a10_bkcu_penilaian TINYINT(1), ADD COLUMN p4a10_bkcu_keterangan TEXT, ADD COLUMN p4a10_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b11_cu_penilaian TINYINT(1), ADD COLUMN p4b11_cu_keterangan TEXT, ADD COLUMN p4b11_bkcu_penilaian TINYINT(1), ADD COLUMN p4b11_bkcu_keterangan TEXT, ADD COLUMN p4b11_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b12_cu_penilaian TINYINT(1), ADD COLUMN p4b12_cu_keterangan TEXT, ADD COLUMN p4b12_bkcu_penilaian TINYINT(1), ADD COLUMN p4b12_bkcu_keterangan TEXT, ADD COLUMN p4b12_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b13_cu_penilaian TINYINT(1), ADD COLUMN p4b13_cu_keterangan TEXT, ADD COLUMN p4b13_bkcu_penilaian TINYINT(1), ADD COLUMN p4b13_bkcu_keterangan TEXT, ADD COLUMN p4b13_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b14_cu_penilaian TINYINT(1), ADD COLUMN p4b14_cu_keterangan TEXT, ADD COLUMN p4b14_bkcu_penilaian TINYINT(1), ADD COLUMN p4b14_bkcu_keterangan TEXT, ADD COLUMN p4b14_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b15_cu_penilaian TINYINT(1), ADD COLUMN p4b15_cu_keterangan TEXT, ADD COLUMN p4b15_bkcu_penilaian TINYINT(1), ADD COLUMN p4b15_bkcu_keterangan TEXT, ADD COLUMN p4b15_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b16_cu_penilaian TINYINT(1), ADD COLUMN p4b16_cu_keterangan TEXT, ADD COLUMN p4b16_bkcu_penilaian TINYINT(1), ADD COLUMN p4b16_bkcu_keterangan TEXT, ADD COLUMN p4b16_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b17_cu_penilaian TINYINT(1), ADD COLUMN p4b17_cu_keterangan TEXT, ADD COLUMN p4b17_bkcu_penilaian TINYINT(1), ADD COLUMN p4b17_bkcu_keterangan TEXT, ADD COLUMN p4b17_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b18_cu_penilaian TINYINT(1), ADD COLUMN p4b18_cu_keterangan TEXT, ADD COLUMN p4b18_bkcu_penilaian TINYINT(1), ADD COLUMN p4b18_bkcu_keterangan TEXT, ADD COLUMN p4b18_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b19_cu_penilaian TINYINT(1), ADD COLUMN p4b19_cu_keterangan TEXT, ADD COLUMN p4b19_bkcu_penilaian TINYINT(1), ADD COLUMN p4b19_bkcu_keterangan TEXT, ADD COLUMN p4b19_bkcu_rekomendasi TEXT,
// ADD COLUMN p4b20_cu_penilaian TINYINT(1), ADD COLUMN p4b20_cu_keterangan TEXT, ADD COLUMN p4b20_bkcu_penilaian TINYINT(1), ADD COLUMN p4b20_bkcu_keterangan TEXT, ADD COLUMN p4b20_bkcu_rekomendasi TEXT;