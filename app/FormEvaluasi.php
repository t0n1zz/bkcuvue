<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class FormEvaluasi extends Model
{
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'evaluasi_form';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    public static $rules = [
        'nama' => 'required'
    ];

    // public function sluggable()
    // {
    //     return [
    //         'slug' => [
    //             'source' => 'nama',
    //             'onUpdate' => true
    //         ]
    //     ];
    // }

    protected $fillable = [
        'nama', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id', 'nama'
    ];

    protected $orderable = [
        'id',  'nama'
    ];

    public static function initialize()
    {
        return [
            'name' => ''
        ];
    }
}
