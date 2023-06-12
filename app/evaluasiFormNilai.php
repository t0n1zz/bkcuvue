<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class evaluasiFormNilai extends Model
{
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'evaluasi_form_nilai';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        // 'name' => 'required'
    ];

    protected $fillable = [
        'evaluasi_form_id', 'nilai', 'saran', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id', 'evaluasi_form_id', 'nilai', 'saran', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $orderable = [
        'id', 'evaluasi_form_id', 'nilai', 'saran', 'created_at', 'updated_at', 'deleted_at'
    ];

    public static function initialize()
    {
        return [
            'evaluasi_form_id' => '', 'nilai' => '', 'saran' => '',
        ];
    }
}
