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
        'p411_cu_penilaian','p411_cu_keterangan','p411_bkcu_penilaian','p411_bkcu_keterangan','p411_bkcu_rekomendasi',
        'p412_cu_penilaian','p412_cu_keterangan','p412_bkcu_penilaian','p412_bkcu_keterangan','p412_bkcu_rekomendasi',
        'p413_cu_penilaian','p413_cu_keterangan','p413_bkcu_penilaian','p413_bkcu_keterangan','p413_bkcu_rekomendasi',
        'p414_cu_penilaian','p414_cu_keterangan','p414_bkcu_penilaian','p414_bkcu_keterangan','p414_bkcu_rekomendasi',
        'p415_cu_penilaian','p415_cu_keterangan','p415_bkcu_penilaian','p415_bkcu_keterangan','p415_bkcu_rekomendasi',
        'p416_cu_penilaian','p416_cu_keterangan','p416_bkcu_penilaian','p416_bkcu_keterangan','p416_bkcu_rekomendasi',
        'p417_cu_penilaian','p417_cu_keterangan','p417_bkcu_penilaian','p417_bkcu_keterangan','p417_bkcu_rekomendasi',
        'p418_cu_penilaian','p418_cu_keterangan','p418_bkcu_penilaian','p418_bkcu_keterangan','p418_bkcu_rekomendasi',
        'p419_cu_penilaian','p419_cu_keterangan','p419_bkcu_penilaian','p419_bkcu_keterangan','p4b9_bkcu_rekomendasi',
        'p4b20_cu_penilaian','p4b20_cu_keterangan','p4b20_bkcu_penilaian','p4b20_bkcu_keterangan','p4b20_bkcu_rekomendasi',
    ];

    public static function initialize()
    {
        return [
            'p4a1_cu_penilaian' => '','p4a1_cu_keterangan' => '','p4a1_bkcu_penilaian' => '','p4a1_bkcu_keterangan' => '','p4a1_bkcu_rekomendasi' => '',
            'p4a2_cu_penilaian' => '','p4a2_cu_keterangan' => '','p4a2_bkcu_penilaian' => '','p4a2_bkcu_keterangan' => '','p4a2_bkcu_rekomendasi' => '',
            'p4a3_cu_penilaian' => '','p4a3_cu_keterangan' => '','p4a3_bkcu_penilaian' => '','p4a3_bkcu_keterangan' => '','p4a3_bkcu_rekomendasi' => '',
            'p4a4_cu_penilaian' => '','p4a4_cu_keterangan' => '','p4a4_bkcu_penilaian' => '','p4a4_bkcu_keterangan' => '','p4a4_bkcu_rekomendasi' => '',
            'p4a5_cu_penilaian' => '','p4a5_cu_keterangan' => '','p4a5_bkcu_penilaian' => '','p4a5_bkcu_keterangan' => '','p4a5_bkcu_rekomendasi' => '',
            'p4a6_cu_penilaian' => '','p4a6_cu_keterangan' => '','p4a6_bkcu_penilaian' => '','p4a6_bkcu_keterangan' => '','p4a6_bkcu_rekomendasi' => '',
            'p4a7_cu_penilaian' => '','p4a7_cu_keterangan' => '','p4a7_bkcu_penilaian' => '','p4a7_bkcu_keterangan' => '','p4a7_bkcu_rekomendasi' => '',
            'p4a8_cu_penilaian' => '','p4a8_cu_keterangan' => '','p4a8_bkcu_penilaian' => '','p4a8_bkcu_keterangan' => '','p4a8_bkcu_rekomendasi' => '',
            'p4a9_cu_penilaian' => '','p4a9_cu_keterangan' => '','p4a9_bkcu_penilaian' => '','p4a9_bkcu_keterangan' => '','p4a9_bkcu_rekomendasi' => '',
            'p4a10_cu_penilaian' => '','p4a10_cu_keterangan' => '','p4a10_bkcu_penilaian' => '','p4a10_bkcu_keterangan' => '','p4a10_bkcu_rekomendasi' => '',
            'p411_cu_penilaian' => '','p411_cu_keterangan' => '','p411_bkcu_penilaian' => '','p411_bkcu_keterangan' => '','p411_bkcu_rekomendasi' => '',
            'p412_cu_penilaian' => '','p412_cu_keterangan' => '','p412_bkcu_penilaian' => '','p412_bkcu_keterangan' => '','p412_bkcu_rekomendasi' => '',
            'p413_cu_penilaian' => '','p413_cu_keterangan' => '','p413_bkcu_penilaian' => '','p413_bkcu_keterangan' => '','p413_bkcu_rekomendasi' => '',
            'p414_cu_penilaian' => '','p414_cu_keterangan' => '','p414_bkcu_penilaian' => '','p414_bkcu_keterangan' => '','p414_bkcu_rekomendasi' => '',
            'p415_cu_penilaian' => '','p415_cu_keterangan' => '','p415_bkcu_penilaian' => '','p415_bkcu_keterangan' => '','p415_bkcu_rekomendasi' => '',
            'p416_cu_penilaian' => '','p416_cu_keterangan' => '','p416_bkcu_penilaian' => '','p416_bkcu_keterangan' => '','p416_bkcu_rekomendasi' => '',
            'p417_cu_penilaian' => '','p417_cu_keterangan' => '','p417_bkcu_penilaian' => '','p417_bkcu_keterangan' => '','p417_bkcu_rekomendasi' => '',
            'p418_cu_penilaian' => '','p418_cu_keterangan' => '','p418_bkcu_penilaian' => '','p418_bkcu_keterangan' => '','p418_bkcu_rekomendasi' => '',
            'p419_cu_penilaian' => '','p419_cu_keterangan' => '','p419_bkcu_penilaian' => '','p419_bkcu_keterangan' => '','p4b9_bkcu_rekomendasi' => '',
            'p4b20_cu_penilaian' => '','p4b20_cu_keterangan' => '','p4b20_bkcu_penilaian' => '','p4b20_bkcu_keterangan' => '','p4b20_bkcu_rekomendasi' => '',
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