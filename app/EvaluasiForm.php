<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class EvaluasiForm extends Model
{
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'evaluasi_form';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        // 'name' => 'required'
    ];

    protected $fillable = [
        'kegiatan_id', 'name', 'tipe', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id', 'kegiatan_id', 'name', 'tipe', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $orderable = [
        'id', 'kegiatan_id', 'name', 'tipe', 'created_at', 'updated_at', 'deleted_at'
    ];

    public static function initialize()
    {
        return [
            'kegiatan_id' => '', 'name' => '', 'tipe' => ''
        ];
    }
}
