<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class SertifikatGenerate extends Model
{
    //
    use Dataviewer, LogsActivity, SoftDeletes;
    protected $table = 'sertifikat_generate';
    protected static $logFillable = true;

    protected $fillable = [
        'id_aktivis', 'id_kegiatan', 'nomor', 'periode', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id_aktivis', 'id_kegiatan', 'nomor', 'periode'
    ];

    protected $orderable = [
        'id_aktivis', 'id_kegiatan', 'nomor', 'periode'
    ];

    public static function initialize()
    {
        return [
            'id_aktivis' => '', 'id_kegiatan' => '', 'nomor' => '', 'periode' => ''
        ];
    }

    public static $rules = [
        'id_aktivis' => 'required',
        'id_kegiatan' => 'required',
        'nomor' => 'required',
        'periode' => 'required',
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
            ]
        ];
    }
}
