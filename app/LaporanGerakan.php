<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class LaporanGerakan extends BaseEloquent {

    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'laporan_gerakan';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $revisionEnabled = true;
    protected $revisionCleanup = true;
    protected $historyLimit = 50;

    public static $rules = [
        'periode' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at'
    );
    
    protected $fillable = [
        'periode','lk','pr','aset','shu','piutang_anggota','piutang_lalai','simpanan_anggota','dcu','dcr','aset_lancar','periode',
    ];

    protected $allowedFilters = [
        'periode','lk','pr','aset','shu','piutang_anggota','piutang_lalai','simpanan_anggota','dcu','dcr','aset_lancar','periode',
    ];

    protected $orderable = [
        'periode','lk','pr','aset','shu','piutang_anggota','piutang_lalai','simpanan_anggota','dcu','dcr','aset_lancar','periode',
    ];

    public static function initialize()
    {
        return [
            'periode' => '','lk' => '','pr' => '','aset' => '','shu' => '','piutang_anggota' => '','piutang_lalai' => '','simpanan_anggota' => '','dcu' => '','dcr' => '','aset_lancar' => '','periode' => '',
        ];
    }

}