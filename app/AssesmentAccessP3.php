<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentAccessP3 extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'assesment_access_p3';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    protected $fillable = [
        'p3a1_cu_penilaian','p3a1_cu_keterangan','p3a1_bkcu_penilaian','p3a1_bkcu_keterangan','p3a1_bkcu_rekomendasi',
        'p3a2_cu_penilaian','p3a2_cu_keterangan','p3a2_bkcu_penilaian','p3a2_bkcu_keterangan','p3a2_bkcu_rekomendasi',
        'p3a3_cu_penilaian','p3a3_cu_keterangan','p3a3_bkcu_penilaian','p3a3_bkcu_keterangan','p3a3_bkcu_rekomendasi',
        'p3a4_cu_penilaian','p3a4_cu_keterangan','p3a4_bkcu_penilaian','p3a4_bkcu_keterangan','p3a4_bkcu_rekomendasi',
        'p3a5_cu_penilaian','p3a5_cu_keterangan','p3a5_bkcu_penilaian','p3a5_bkcu_keterangan','p3a5_bkcu_rekomendasi',
        'p3a6_cu_penilaian','p3a6_cu_keterangan','p3a6_bkcu_penilaian','p3a6_bkcu_keterangan','p3a6_bkcu_rekomendasi',
        'p3a7_cu_penilaian','p3a7_cu_keterangan','p3a7_bkcu_penilaian','p3a7_bkcu_keterangan','p3a7_bkcu_rekomendasi',
        'p3a8_cu_penilaian','p3a8_cu_keterangan','p3a8_bkcu_penilaian','p3a8_bkcu_keterangan','p3a8_bkcu_rekomendasi',
        'p3a9_cu_penilaian','p3a9_cu_keterangan','p3a9_bkcu_penilaian','p3a9_bkcu_keterangan','p3a9_bkcu_rekomendasi',
        'p3b10_cu_penilaian','p3b10_cu_keterangan','p3b10_bkcu_penilaian','p3b10_bkcu_keterangan','p3b10_bkcu_rekomendasi',
        'p3b11_cu_penilaian','p3b11_cu_keterangan','p3b11_bkcu_penilaian','p3b11_bkcu_keterangan','p3b11_bkcu_rekomendasi',
        'p3b12_cu_penilaian','p3b12_cu_keterangan','p3b12_bkcu_penilaian','p3b12_bkcu_keterangan','p3b12_bkcu_rekomendasi',
        'p3b13_cu_penilaian','p3b13_cu_keterangan','p3b13_bkcu_penilaian','p3b13_bkcu_keterangan','p3b13_bkcu_rekomendasi',
        'p3b14_cu_penilaian','p3b14_cu_keterangan','p3b14_bkcu_penilaian','p3b14_bkcu_keterangan','p3b14_bkcu_rekomendasi',
        'p3b15_cu_penilaian','p3b15_cu_keterangan','p3b15_bkcu_penilaian','p3b15_bkcu_keterangan','p3b15_bkcu_rekomendasi',
        'p3b16_cu_penilaian','p3b16_cu_keterangan','p3b16_bkcu_penilaian','p3b16_bkcu_keterangan','p3b16_bkcu_rekomendasi',
        'p3b17_cu_penilaian','p3b17_cu_keterangan','p3b17_bkcu_penilaian','p3b17_bkcu_keterangan','p3b17_bkcu_rekomendasi',
        'p3b18_cu_penilaian','p3b18_cu_keterangan','p3b18_bkcu_penilaian','p3b18_bkcu_keterangan','p3b18_bkcu_rekomendasi',
        'p3b19_cu_penilaian','p3b19_cu_keterangan','p3b19_bkcu_penilaian','p3b19_bkcu_keterangan','p3b19_bkcu_rekomendasi',
        'p3b20_cu_penilaian','p3b20_cu_keterangan','p3b20_bkcu_penilaian','p3b20_bkcu_keterangan','p3b20_bkcu_rekomendasi',
        'p3b21_cu_penilaian','p3b21_cu_keterangan','p3b21_bkcu_penilaian','p3b21_bkcu_keterangan','p3b21_bkcu_rekomendasi',
        'p3b22_cu_penilaian','p3b22_cu_keterangan','p3b22_bkcu_penilaian','p3b22_bkcu_keterangan','p3b22_bkcu_rekomendasi',
        'p3b23_cu_penilaian','p3b23_cu_keterangan','p3b23_bkcu_penilaian','p3b23_bkcu_keterangan','p3b23_bkcu_rekomendasi',
        'p3b24_cu_penilaian','p3b24_cu_keterangan','p3b24_bkcu_penilaian','p3b24_bkcu_keterangan','p3b24_bkcu_rekomendasi',
        'p3b25_cu_penilaian','p3b25_cu_keterangan','p3b25_bkcu_penilaian','p3b25_bkcu_keterangan','p3b25_bkcu_rekomendasi',
        'p3b26_cu_penilaian','p3b26_cu_keterangan','p3b26_bkcu_penilaian','p3b26_bkcu_keterangan','p3b26_bkcu_rekomendasi',
    ];

    public static function initialize()
    {
        return [
            'p3a1_cu_penilaian' => null,'p3a1_cu_keterangan' => null,'p3a1_bkcu_penilaian' => null,'p3a1_bkcu_keterangan' => null,'p3a1_bkcu_rekomendasi' => null,
            'p3a2_cu_penilaian' => null,'p3a2_cu_keterangan' => null,'p3a2_bkcu_penilaian' => null,'p3a2_bkcu_keterangan' => null,'p3a2_bkcu_rekomendasi' => null,
            'p3a3_cu_penilaian' => null,'p3a3_cu_keterangan' => null,'p3a3_bkcu_penilaian' => null,'p3a3_bkcu_keterangan' => null,'p3a3_bkcu_rekomendasi' => null,
            'p3a4_cu_penilaian' => null,'p3a4_cu_keterangan' => null,'p3a4_bkcu_penilaian' => null,'p3a4_bkcu_keterangan' => null,'p3a4_bkcu_rekomendasi' => null,
            'p3a5_cu_penilaian' => null,'p3a5_cu_keterangan' => null,'p3a5_bkcu_penilaian' => null,'p3a5_bkcu_keterangan' => null,'p3a5_bkcu_rekomendasi' => null,
            'p3a6_cu_penilaian' => null,'p3a6_cu_keterangan' => null,'p3a6_bkcu_penilaian' => null,'p3a6_bkcu_keterangan' => null,'p3a6_bkcu_rekomendasi' => null,
            'p3a7_cu_penilaian' => null,'p3a7_cu_keterangan' => null,'p3a7_bkcu_penilaian' => null,'p3a7_bkcu_keterangan' => null,'p3a7_bkcu_rekomendasi' => null,
            'p3a8_cu_penilaian' => null,'p3a8_cu_keterangan' => null,'p3a8_bkcu_penilaian' => null,'p3a8_bkcu_keterangan' => null,'p3a8_bkcu_rekomendasi' => null,
            'p3a9_cu_penilaian' => null,'p3a9_cu_keterangan' => null,'p3a9_bkcu_penilaian' => null,'p3a9_bkcu_keterangan' => null,'p3a9_bkcu_rekomendasi' => null,
            'p3b10_cu_penilaian' => null,'p3b10_cu_keterangan' => null,'p3b10_bkcu_penilaian' => null,'p3b10_bkcu_keterangan' => null,'p3b10_bkcu_rekomendasi' => null,
            'p3b11_cu_penilaian' => null,'p3b11_cu_keterangan' => null,'p3b11_bkcu_penilaian' => null,'p3b11_bkcu_keterangan' => null,'p3b11_bkcu_rekomendasi' => null,
            'p3b12_cu_penilaian' => null,'p3b12_cu_keterangan' => null,'p3b12_bkcu_penilaian' => null,'p3b12_bkcu_keterangan' => null,'p3b12_bkcu_rekomendasi' => null,
            'p3b13_cu_penilaian' => null,'p3b13_cu_keterangan' => null,'p3b13_bkcu_penilaian' => null,'p3b13_bkcu_keterangan' => null,'p3b13_bkcu_rekomendasi' => null,
            'p3b14_cu_penilaian' => null,'p3b14_cu_keterangan' => null,'p3b14_bkcu_penilaian' => null,'p3b14_bkcu_keterangan' => null,'p3b14_bkcu_rekomendasi' => null,
            'p3b15_cu_penilaian' => null,'p3b15_cu_keterangan' => null,'p3b15_bkcu_penilaian' => null,'p3b15_bkcu_keterangan' => null,'p3b15_bkcu_rekomendasi' => null,
            'p3b16_cu_penilaian' => null,'p3b16_cu_keterangan' => null,'p3b16_bkcu_penilaian' => null,'p3b16_bkcu_keterangan' => null,'p3b16_bkcu_rekomendasi' => null,
            'p3b17_cu_penilaian' => null,'p3b17_cu_keterangan' => null,'p3b17_bkcu_penilaian' => null,'p3b17_bkcu_keterangan' => null,'p3b17_bkcu_rekomendasi' => null,
            'p3b18_cu_penilaian' => null,'p3b18_cu_keterangan' => null,'p3b18_bkcu_penilaian' => null,'p3b18_bkcu_keterangan' => null,'p3b18_bkcu_rekomendasi' => null,
            'p3b19_cu_penilaian' => null,'p3b19_cu_keterangan' => null,'p3b19_bkcu_penilaian' => null,'p3b19_bkcu_keterangan' => null,'p3b19_bkcu_rekomendasi' => null,
            'p3b20_cu_penilaian' => null,'p3b20_cu_keterangan' => null,'p3b20_bkcu_penilaian' => null,'p3b20_bkcu_keterangan' => null,'p3b20_bkcu_rekomendasi' => null,
            'p3b21_cu_penilaian' => null,'p3b21_cu_keterangan' => null,'p3b21_bkcu_penilaian' => null,'p3b21_bkcu_keterangan' => null,'p3b21_bkcu_rekomendasi' => null,
            'p3b22_cu_penilaian' => null,'p3b22_cu_keterangan' => null,'p3b22_bkcu_penilaian' => null,'p3b22_bkcu_keterangan' => null,'p3b22_bkcu_rekomendasi' => null,
            'p3b23_cu_penilaian' => null,'p3b23_cu_keterangan' => null,'p3b23_bkcu_penilaian' => null,'p3b23_bkcu_keterangan' => null,'p3b23_bkcu_rekomendasi' => null,
            'p3b24_cu_penilaian' => null,'p3b24_cu_keterangan' => null,'p3b24_bkcu_penilaian' => null,'p3b24_bkcu_keterangan' => null,'p3b24_bkcu_rekomendasi' => null,
            'p3b25_cu_penilaian' => null,'p3b25_cu_keterangan' => null,'p3b25_bkcu_penilaian' => null,'p3b25_bkcu_keterangan' => null,'p3b25_bkcu_rekomendasi' => null,
            'p3b26_cu_penilaian' => null,'p3b26_cu_keterangan' => null,'p3b26_bkcu_penilaian' => null,'p3b26_bkcu_keterangan' => null,'p3b26_bkcu_rekomendasi' => null,
        ];
    }
}

// ADD COLUMN p3a1_cu_penilaian TINYINT(1), ADD COLUMN p3a1_cu_keterangan TEXT, ADD COLUMN p3a1_bkcu_penilaian TINYINT(1), ADD COLUMN p3a1_bkcu_keterangan TEXT, ADD COLUMN p3a1_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a2_cu_penilaian TINYINT(1), ADD COLUMN p3a2_cu_keterangan TEXT, ADD COLUMN p3a2_bkcu_penilaian TINYINT(1), ADD COLUMN p3a2_bkcu_keterangan TEXT, ADD COLUMN p3a2_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a3_cu_penilaian TINYINT(1), ADD COLUMN p3a3_cu_keterangan TEXT, ADD COLUMN p3a3_bkcu_penilaian TINYINT(1), ADD COLUMN p3a3_bkcu_keterangan TEXT, ADD COLUMN p3a3_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a4_cu_penilaian TINYINT(1), ADD COLUMN p3a4_cu_keterangan TEXT, ADD COLUMN p3a4_bkcu_penilaian TINYINT(1), ADD COLUMN p3a4_bkcu_keterangan TEXT, ADD COLUMN p3a4_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a5_cu_penilaian TINYINT(1), ADD COLUMN p3a5_cu_keterangan TEXT, ADD COLUMN p3a5_bkcu_penilaian TINYINT(1), ADD COLUMN p3a5_bkcu_keterangan TEXT, ADD COLUMN p3a5_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a6_cu_penilaian TINYINT(1), ADD COLUMN p3a6_cu_keterangan TEXT, ADD COLUMN p3a6_bkcu_penilaian TINYINT(1), ADD COLUMN p3a6_bkcu_keterangan TEXT, ADD COLUMN p3a6_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a7_cu_penilaian TINYINT(1), ADD COLUMN p3a7_cu_keterangan TEXT, ADD COLUMN p3a7_bkcu_penilaian TINYINT(1), ADD COLUMN p3a7_bkcu_keterangan TEXT, ADD COLUMN p3a7_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a8_cu_penilaian TINYINT(1), ADD COLUMN p3a8_cu_keterangan TEXT, ADD COLUMN p3a8_bkcu_penilaian TINYINT(1), ADD COLUMN p3a8_bkcu_keterangan TEXT, ADD COLUMN p3a8_bkcu_rekomendasi TEXT,
// ADD COLUMN p3a9_cu_penilaian TINYINT(1), ADD COLUMN p3a9_cu_keterangan TEXT, ADD COLUMN p3a9_bkcu_penilaian TINYINT(1), ADD COLUMN p3a9_bkcu_keterangan TEXT, ADD COLUMN p3a9_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b10_cu_penilaian TINYINT(1), ADD COLUMN p3b10_cu_keterangan TEXT, ADD COLUMN p3b10_bkcu_penilaian TINYINT(1), ADD COLUMN p3b10_bkcu_keterangan TEXT, ADD COLUMN p3b10_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b11_cu_penilaian TINYINT(1), ADD COLUMN p3b11_cu_keterangan TEXT, ADD COLUMN p3b11_bkcu_penilaian TINYINT(1), ADD COLUMN p3b11_bkcu_keterangan TEXT, ADD COLUMN p3b11_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b12_cu_penilaian TINYINT(1), ADD COLUMN p3b12_cu_keterangan TEXT, ADD COLUMN p3b12_bkcu_penilaian TINYINT(1), ADD COLUMN p3b12_bkcu_keterangan TEXT, ADD COLUMN p3b12_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b13_cu_penilaian TINYINT(1), ADD COLUMN p3b13_cu_keterangan TEXT, ADD COLUMN p3b13_bkcu_penilaian TINYINT(1), ADD COLUMN p3b13_bkcu_keterangan TEXT, ADD COLUMN p3b13_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b14_cu_penilaian TINYINT(1), ADD COLUMN p3b14_cu_keterangan TEXT, ADD COLUMN p3b14_bkcu_penilaian TINYINT(1), ADD COLUMN p3b14_bkcu_keterangan TEXT, ADD COLUMN p3b14_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b15_cu_penilaian TINYINT(1), ADD COLUMN p3b15_cu_keterangan TEXT, ADD COLUMN p3b15_bkcu_penilaian TINYINT(1), ADD COLUMN p3b15_bkcu_keterangan TEXT, ADD COLUMN p3b15_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b16_cu_penilaian TINYINT(1), ADD COLUMN p3b16_cu_keterangan TEXT, ADD COLUMN p3b16_bkcu_penilaian TINYINT(1), ADD COLUMN p3b16_bkcu_keterangan TEXT, ADD COLUMN p3b16_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b17_cu_penilaian TINYINT(1), ADD COLUMN p3b17_cu_keterangan TEXT, ADD COLUMN p3b17_bkcu_penilaian TINYINT(1), ADD COLUMN p3b17_bkcu_keterangan TEXT, ADD COLUMN p3b17_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b18_cu_penilaian TINYINT(1), ADD COLUMN p3b18_cu_keterangan TEXT, ADD COLUMN p3b18_bkcu_penilaian TINYINT(1), ADD COLUMN p3b18_bkcu_keterangan TEXT, ADD COLUMN p3b18_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b19_cu_penilaian TINYINT(1), ADD COLUMN p3b19_cu_keterangan TEXT, ADD COLUMN p3b19_bkcu_penilaian TINYINT(1), ADD COLUMN p3b19_bkcu_keterangan TEXT, ADD COLUMN p3b19_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b20_cu_penilaian TINYINT(1), ADD COLUMN p3b20_cu_keterangan TEXT, ADD COLUMN p3b20_bkcu_penilaian TINYINT(1), ADD COLUMN p3b20_bkcu_keterangan TEXT, ADD COLUMN p3b20_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b21_cu_penilaian TINYINT(1), ADD COLUMN p3b21_cu_keterangan TEXT, ADD COLUMN p3b21_bkcu_penilaian TINYINT(1), ADD COLUMN p3b21_bkcu_keterangan TEXT, ADD COLUMN p3b21_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b22_cu_penilaian TINYINT(1), ADD COLUMN p3b22_cu_keterangan TEXT, ADD COLUMN p3b22_bkcu_penilaian TINYINT(1), ADD COLUMN p3b22_bkcu_keterangan TEXT, ADD COLUMN p3b22_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b23_cu_penilaian TINYINT(1), ADD COLUMN p3b23_cu_keterangan TEXT, ADD COLUMN p3b23_bkcu_penilaian TINYINT(1), ADD COLUMN p3b23_bkcu_keterangan TEXT, ADD COLUMN p3b23_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b24_cu_penilaian TINYINT(1), ADD COLUMN p3b24_cu_keterangan TEXT, ADD COLUMN p3b24_bkcu_penilaian TINYINT(1), ADD COLUMN p3b24_bkcu_keterangan TEXT, ADD COLUMN p3b24_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b25_cu_penilaian TINYINT(1), ADD COLUMN p3b25_cu_keterangan TEXT, ADD COLUMN p3b25_bkcu_penilaian TINYINT(1), ADD COLUMN p3b25_bkcu_keterangan TEXT, ADD COLUMN p3b25_bkcu_rekomendasi TEXT,
// ADD COLUMN p3b26_cu_penilaian TINYINT(1), ADD COLUMN p3b26_cu_keterangan TEXT, ADD COLUMN p3b26_bkcu_penilaian TINYINT(1), ADD COLUMN p3b26_bkcu_keterangan TEXT, ADD COLUMN p3b26_bkcu_rekomendasi TEXT;