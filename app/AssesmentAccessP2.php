<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentAccessP2 extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'assesment_access_p2';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    protected $fillable = [
        'p2a1_cu_penilaian','p2a1_cu_keterangan','p2a1_bkcu_penilaian','p2a1_bkcu_keterangan','p2a1_bkcu_rekomendasi',
        'p2a2_cu_penilaian','p2a2_cu_keterangan','p2a2_bkcu_penilaian','p2a2_bkcu_keterangan','p2a2_bkcu_rekomendasi',
        'p2a3_cu_penilaian','p2a3_cu_keterangan','p2a3_bkcu_penilaian','p2a3_bkcu_keterangan','p2a3_bkcu_rekomendasi',
        'p2a4_cu_penilaian','p2a4_cu_keterangan','p2a4_bkcu_penilaian','p2a4_bkcu_keterangan','p2a4_bkcu_rekomendasi',
        'p2a5_cu_penilaian','p2a5_cu_keterangan','p2a5_bkcu_penilaian','p2a5_bkcu_keterangan','p2a5_bkcu_rekomendasi',
        'p2a6_cu_penilaian','p2a6_cu_keterangan','p2a6_bkcu_penilaian','p2a6_bkcu_keterangan','p2a6_bkcu_rekomendasi',
        'p2a7_cu_penilaian','p2a7_cu_keterangan','p2a7_bkcu_penilaian','p2a7_bkcu_keterangan','p2a7_bkcu_rekomendasi',
        'p2a8_cu_penilaian','p2a8_cu_keterangan','p2a8_bkcu_penilaian','p2a8_bkcu_keterangan','p2a8_bkcu_rekomendasi',
        'p2a9_cu_penilaian','p2a9_cu_keterangan','p2a9_bkcu_penilaian','p2a9_bkcu_keterangan','p2a9_bkcu_rekomendasi',
        'p2a10_cu_penilaian','p2a10_cu_keterangan','p2a10_bkcu_penilaian','p2a10_bkcu_keterangan','p2a10_bkcu_rekomendasi',
        'p2a11_cu_penilaian','p2a11_cu_keterangan','p2a11_bkcu_penilaian','p2a11_bkcu_keterangan','p2a11_bkcu_rekomendasi',
        'p2b12_cu_penilaian','p2b12_cu_keterangan','p2b12_bkcu_penilaian','p2b12_bkcu_keterangan','p2b12_bkcu_rekomendasi',
        'p2b13_cu_penilaian','p2b13_cu_keterangan','p2b13_bkcu_penilaian','p2b13_bkcu_keterangan','p2b13_bkcu_rekomendasi',
        'p2b14_cu_penilaian','p2b14_cu_keterangan','p2b14_bkcu_penilaian','p2b14_bkcu_keterangan','p2b14_bkcu_rekomendasi',
        'p2b15_cu_penilaian','p2b15_cu_keterangan','p2b15_bkcu_penilaian','p2b15_bkcu_keterangan','p2b15_bkcu_rekomendasi',
        'p2b16_cu_penilaian','p2b16_cu_keterangan','p2b16_bkcu_penilaian','p2b16_bkcu_keterangan','p2b16_bkcu_rekomendasi',
        'p2b17_cu_penilaian','p2b17_cu_keterangan','p2b17_bkcu_penilaian','p2b17_bkcu_keterangan','p2b17_bkcu_rekomendasi',
        'p2b18_cu_penilaian','p2b18_cu_keterangan','p2b18_bkcu_penilaian','p2b18_bkcu_keterangan','p2b18_bkcu_rekomendasi',
        'p2b19_cu_penilaian','p2b19_cu_keterangan','p2b19_bkcu_penilaian','p2b19_bkcu_keterangan','p2b19_bkcu_rekomendasi',
        'p2b20_cu_penilaian','p2b20_cu_keterangan','p2b20_bkcu_penilaian','p2b20_bkcu_keterangan','p2b20_bkcu_rekomendasi',
        'p2b21_cu_penilaian','p2b21_cu_keterangan','p2b21_bkcu_penilaian','p2b21_bkcu_keterangan','p2b21_bkcu_rekomendasi',
        'p2b22_cu_penilaian','p2b22_cu_keterangan','p2b22_bkcu_penilaian','p2b22_bkcu_keterangan','p2b22_bkcu_rekomendasi',
        'p2b23_cu_penilaian','p2b23_cu_keterangan','p2b23_bkcu_penilaian','p2b23_bkcu_keterangan','p2b23_bkcu_rekomendasi',
        'p2b24_cu_penilaian','p2b24_cu_keterangan','p2b24_bkcu_penilaian','p2b24_bkcu_keterangan','p2b24_bkcu_rekomendasi',
        'p2b25_cu_penilaian','p2b25_cu_keterangan','p2b25_bkcu_penilaian','p2b25_bkcu_keterangan','p2b25_bkcu_rekomendasi',
        'p2b26_cu_penilaian','p2b26_cu_keterangan','p2b26_bkcu_penilaian','p2b26_bkcu_keterangan','p2b26_bkcu_rekomendasi',
        'p2b27_cu_penilaian','p2b27_cu_keterangan','p2b27_bkcu_penilaian','p2b27_bkcu_keterangan','p2b27_bkcu_rekomendasi',
    ];

    public static function initialize()
    {
        return [
            'p2a1_cu_penilaian'  => '','p2a1_cu_keterangan'  => '','p2a1_bkcu_penilaian'  => '','p2a1_bkcu_keterangan'  => '','p2a1_bkcu_rekomendasi'  => '',
            'p2a2_cu_penilaian'  => '','p2a2_cu_keterangan'  => '','p2a2_bkcu_penilaian'  => '','p2a2_bkcu_keterangan'  => '','p2a2_bkcu_rekomendasi'  => '',
            'p2a3_cu_penilaian'  => '','p2a3_cu_keterangan'  => '','p2a3_bkcu_penilaian'  => '','p2a3_bkcu_keterangan'  => '','p2a3_bkcu_rekomendasi'  => '',
            'p2a4_cu_penilaian'  => '','p2a4_cu_keterangan'  => '','p2a4_bkcu_penilaian'  => '','p2a4_bkcu_keterangan'  => '','p2a4_bkcu_rekomendasi'  => '',
            'p2a5_cu_penilaian'  => '','p2a5_cu_keterangan'  => '','p2a5_bkcu_penilaian'  => '','p2a5_bkcu_keterangan'  => '','p2a5_bkcu_rekomendasi'  => '',
            'p2a6_cu_penilaian'  => '','p2a6_cu_keterangan'  => '','p2a6_bkcu_penilaian'  => '','p2a6_bkcu_keterangan'  => '','p2a6_bkcu_rekomendasi'  => '',
            'p2a7_cu_penilaian'  => '','p2a7_cu_keterangan'  => '','p2a7_bkcu_penilaian'  => '','p2a7_bkcu_keterangan'  => '','p2a7_bkcu_rekomendasi'  => '',
            'p2a8_cu_penilaian'  => '','p2a8_cu_keterangan'  => '','p2a8_bkcu_penilaian'  => '','p2a8_bkcu_keterangan'  => '','p2a8_bkcu_rekomendasi'  => '',
            'p2a9_cu_penilaian'  => '','p2a9_cu_keterangan'  => '','p2a9_bkcu_penilaian'  => '','p2a9_bkcu_keterangan'  => '','p2a9_bkcu_rekomendasi'  => '',
            'p2a10_cu_penilaian'  => '','p2a10_cu_keterangan'  => '','p2a10_bkcu_penilaian'  => '','p2a10_bkcu_keterangan'  => '','p2a10_bkcu_rekomendasi'  => '',
            'p2a11_cu_penilaian'  => '','p2a11_cu_keterangan'  => '','p2a11_bkcu_penilaian'  => '','p2a11_bkcu_keterangan'  => '','p2a11_bkcu_rekomendasi'  => '',
            'p2b12_cu_penilaian'  => '','p2b12_cu_keterangan'  => '','p2b12_bkcu_penilaian'  => '','p2b12_bkcu_keterangan'  => '','p2b12_bkcu_rekomendasi'  => '',
            'p2b13_cu_penilaian'  => '','p2b13_cu_keterangan'  => '','p2b13_bkcu_penilaian'  => '','p2b13_bkcu_keterangan'  => '','p2b13_bkcu_rekomendasi'  => '',
            'p2b14_cu_penilaian'  => '','p2b14_cu_keterangan'  => '','p2b14_bkcu_penilaian'  => '','p2b14_bkcu_keterangan'  => '','p2b14_bkcu_rekomendasi'  => '',
            'p2b15_cu_penilaian'  => '','p2b15_cu_keterangan'  => '','p2b15_bkcu_penilaian'  => '','p2b15_bkcu_keterangan'  => '','p2b15_bkcu_rekomendasi'  => '',
            'p2b16_cu_penilaian'  => '','p2b16_cu_keterangan'  => '','p2b16_bkcu_penilaian'  => '','p2b16_bkcu_keterangan'  => '','p2b16_bkcu_rekomendasi'  => '',
            'p2b17_cu_penilaian'  => '','p2b17_cu_keterangan'  => '','p2b17_bkcu_penilaian'  => '','p2b17_bkcu_keterangan'  => '','p2b17_bkcu_rekomendasi'  => '',
            'p2b18_cu_penilaian'  => '','p2b18_cu_keterangan'  => '','p2b18_bkcu_penilaian'  => '','p2b18_bkcu_keterangan'  => '','p2b18_bkcu_rekomendasi'  => '',
            'p2b19_cu_penilaian'  => '','p2b19_cu_keterangan'  => '','p2b19_bkcu_penilaian'  => '','p2b19_bkcu_keterangan'  => '','p2b19_bkcu_rekomendasi'  => '',
            'p2b20_cu_penilaian'  => '','p2b20_cu_keterangan'  => '','p2b20_bkcu_penilaian'  => '','p2b20_bkcu_keterangan'  => '','p2b20_bkcu_rekomendasi'  => '',
            'p2b21_cu_penilaian'  => '','p2b21_cu_keterangan'  => '','p2b21_bkcu_penilaian'  => '','p2b21_bkcu_keterangan'  => '','p2b21_bkcu_rekomendasi'  => '',
            'p2b22_cu_penilaian'  => '','p2b22_cu_keterangan'  => '','p2b22_bkcu_penilaian'  => '','p2b22_bkcu_keterangan'  => '','p2b22_bkcu_rekomendasi'  => '',
            'p2b23_cu_penilaian'  => '','p2b23_cu_keterangan'  => '','p2b23_bkcu_penilaian'  => '','p2b23_bkcu_keterangan'  => '','p2b23_bkcu_rekomendasi'  => '',
            'p2b24_cu_penilaian'  => '','p2b24_cu_keterangan'  => '','p2b24_bkcu_penilaian'  => '','p2b24_bkcu_keterangan'  => '','p2b24_bkcu_rekomendasi'  => '',
            'p2b25_cu_penilaian'  => '','p2b25_cu_keterangan'  => '','p2b25_bkcu_penilaian'  => '','p2b25_bkcu_keterangan'  => '','p2b25_bkcu_rekomendasi'  => '',
            'p2b26_cu_penilaian'  => '','p2b26_cu_keterangan'  => '','p2b26_bkcu_penilaian'  => '','p2b26_bkcu_keterangan'  => '','p2b26_bkcu_rekomendasi'  => '',
            'p2b27_cu_penilaian'  => '','p2b27_cu_keterangan'  => '','p2b27_bkcu_penilaian'  => '','p2b27_bkcu_keterangan'  => '','p2b27_bkcu_rekomendasi'  => '',
        ];
    }
}


// ADD COLUMN p2a1_cu_penilaian TINYINT(1), ADD COLUMN p2a1_cu_keterangan TEXT, ADD COLUMN p2a1_bkcu_penilaian TINYINT(1), ADD COLUMN p2a1_bkcu_keterangan TEXT, ADD COLUMN p2a1_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a2_cu_penilaian TINYINT(1), ADD COLUMN p2a2_cu_keterangan TEXT, ADD COLUMN p2a2_bkcu_penilaian TINYINT(1), ADD COLUMN p2a2_bkcu_keterangan TEXT, ADD COLUMN p2a2_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a3_cu_penilaian TINYINT(1), ADD COLUMN p2a3_cu_keterangan TEXT, ADD COLUMN p2a3_bkcu_penilaian TINYINT(1), ADD COLUMN p2a3_bkcu_keterangan TEXT, ADD COLUMN p2a3_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a4_cu_penilaian TINYINT(1), ADD COLUMN p2a4_cu_keterangan TEXT, ADD COLUMN p2a4_bkcu_penilaian TINYINT(1), ADD COLUMN p2a4_bkcu_keterangan TEXT, ADD COLUMN p2a4_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a5_cu_penilaian TINYINT(1), ADD COLUMN p2a5_cu_keterangan TEXT, ADD COLUMN p2a5_bkcu_penilaian TINYINT(1), ADD COLUMN p2a5_bkcu_keterangan TEXT, ADD COLUMN p2a5_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a6_cu_penilaian TINYINT(1), ADD COLUMN p2a6_cu_keterangan TEXT, ADD COLUMN p2a6_bkcu_penilaian TINYINT(1), ADD COLUMN p2a6_bkcu_keterangan TEXT, ADD COLUMN p2a6_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a7_cu_penilaian TINYINT(1), ADD COLUMN p2a7_cu_keterangan TEXT, ADD COLUMN p2a7_bkcu_penilaian TINYINT(1), ADD COLUMN p2a7_bkcu_keterangan TEXT, ADD COLUMN p2a7_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a8_cu_penilaian TINYINT(1), ADD COLUMN p2a8_cu_keterangan TEXT, ADD COLUMN p2a8_bkcu_penilaian TINYINT(1), ADD COLUMN p2a8_bkcu_keterangan TEXT, ADD COLUMN p2a8_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a9_cu_penilaian TINYINT(1), ADD COLUMN p2a9_cu_keterangan TEXT, ADD COLUMN p2a9_bkcu_penilaian TINYINT(1), ADD COLUMN p2a9_bkcu_keterangan TEXT, ADD COLUMN p2a9_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a10_cu_penilaian TINYINT(1), ADD COLUMN p2a10_cu_keterangan TEXT, ADD COLUMN p2a10_bkcu_penilaian TINYINT(1), ADD COLUMN p2a10_bkcu_keterangan TEXT, ADD COLUMN p2a10_bkcu_rekomendasi TEXT,
// ADD COLUMN p2a11_cu_penilaian TINYINT(1), ADD COLUMN p2a11_cu_keterangan TEXT, ADD COLUMN p2a11_bkcu_penilaian TINYINT(1), ADD COLUMN p2a11_bkcu_keterangan TEXT, ADD COLUMN p2a11_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b1_cu_penilaian TINYINT(1), ADD COLUMN p2b1_cu_keterangan TEXT, ADD COLUMN p2b11_bkcu_penilaian TINYINT(1), ADD COLUMN p2b11_bkcu_keterangan TEXT, ADD COLUMN p2b11_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b12_cu_penilaian TINYINT(1), ADD COLUMN p2b12_cu_keterangan TEXT, ADD COLUMN p2b12_bkcu_penilaian TINYINT(1), ADD COLUMN p2b12_bkcu_keterangan TEXT, ADD COLUMN p2b12_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b13_cu_penilaian TINYINT(1), ADD COLUMN p2b13_cu_keterangan TEXT, ADD COLUMN p2b13_bkcu_penilaian TINYINT(1), ADD COLUMN p2b13_bkcu_keterangan TEXT, ADD COLUMN p2b13_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b14_cu_penilaian TINYINT(1), ADD COLUMN p2b14_cu_keterangan TEXT, ADD COLUMN p2b14_bkcu_penilaian TINYINT(1), ADD COLUMN p2b14_bkcu_keterangan TEXT, ADD COLUMN p2b14_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b15_cu_penilaian TINYINT(1), ADD COLUMN p2b15_cu_keterangan TEXT, ADD COLUMN p2b15_bkcu_penilaian TINYINT(1), ADD COLUMN p2b15_bkcu_keterangan TEXT, ADD COLUMN p2b15_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b16_cu_penilaian TINYINT(1), ADD COLUMN p2b16_cu_keterangan TEXT, ADD COLUMN p2b16_bkcu_penilaian TINYINT(1), ADD COLUMN p2b16_bkcu_keterangan TEXT, ADD COLUMN p2b16_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b17_cu_penilaian TINYINT(1), ADD COLUMN p2b17_cu_keterangan TEXT, ADD COLUMN p2b17_bkcu_penilaian TINYINT(1), ADD COLUMN p2b17_bkcu_keterangan TEXT, ADD COLUMN p2b17_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b18_cu_penilaian TINYINT(1), ADD COLUMN p2b18_cu_keterangan TEXT, ADD COLUMN p2b18_bkcu_penilaian TINYINT(1), ADD COLUMN p2b18_bkcu_keterangan TEXT, ADD COLUMN p2b18_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b19_cu_penilaian TINYINT(1), ADD COLUMN p2b19_cu_keterangan TEXT, ADD COLUMN p2b19_bkcu_penilaian TINYINT(1), ADD COLUMN p2b19_bkcu_keterangan TEXT, ADD COLUMN p2b19_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b20_cu_penilaian TINYINT(1), ADD COLUMN p2b20_cu_keterangan TEXT, ADD COLUMN p2b20_bkcu_penilaian TINYINT(1), ADD COLUMN p2b20_bkcu_keterangan TEXT, ADD COLUMN p2b20_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b21_cu_penilaian TINYINT(1), ADD COLUMN p2b21_cu_keterangan TEXT, ADD COLUMN p2b21_bkcu_penilaian TINYINT(1), ADD COLUMN p2b21_bkcu_keterangan TEXT, ADD COLUMN p2b21_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b22_cu_penilaian TINYINT(1), ADD COLUMN p2b22_cu_keterangan TEXT, ADD COLUMN p2b22_bkcu_penilaian TINYINT(1), ADD COLUMN p2b22_bkcu_keterangan TEXT, ADD COLUMN p2b22_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b23_cu_penilaian TINYINT(1), ADD COLUMN p2b23_cu_keterangan TEXT, ADD COLUMN p2b23_bkcu_penilaian TINYINT(1), ADD COLUMN p2b23_bkcu_keterangan TEXT, ADD COLUMN p2b23_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b24_cu_penilaian TINYINT(1), ADD COLUMN p2b24_cu_keterangan TEXT, ADD COLUMN p2b24_bkcu_penilaian TINYINT(1), ADD COLUMN p2b24_bkcu_keterangan TEXT, ADD COLUMN p2b24_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b25_cu_penilaian TINYINT(1), ADD COLUMN p2b25_cu_keterangan TEXT, ADD COLUMN p2b25_bkcu_penilaian TINYINT(1), ADD COLUMN p2b25_bkcu_keterangan TEXT, ADD COLUMN p2b25_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b26_cu_penilaian TINYINT(1), ADD COLUMN p2b26_cu_keterangan TEXT, ADD COLUMN p2b26_bkcu_penilaian TINYINT(1), ADD COLUMN p2b26_bkcu_keterangan TEXT, ADD COLUMN p2b26_bkcu_rekomendasi TEXT,
// ADD COLUMN p2b27_cu_penilaian TINYINT(1), ADD COLUMN p2b27_cu_keterangan TEXT, ADD COLUMN p2b27_bkcu_penilaian TINYINT(1), ADD COLUMN p2b27_bkcu_keterangan TEXT, ADD COLUMN p2b27_bkcu_rekomendasi TEXT;