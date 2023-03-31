<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class EvaluasiKomponent extends Model
{
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'evaluasi_komponent';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    public static $rules = [
        'komponent' => 'required',
        'evaluasi_form_id' => 'required'
    ];

    // public function sluggable()
    // {
    //     return [
    //         'slug' => [
    //             'source' => 'komponent',
    //             'onUpdate' => true
    //         ]
    //     ];
    // }

    protected $fillable = [
        'komponent', 'evaluasi_form_id', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id', 'komponent'
    ];

    protected $orderable = [
        'id', 'komponent'
    ];

    public static function initialize()
    {
        return [
            'komponent' => '',
            'evaluasi_form_id' => ''
        ];
    }

    public function hasForm()
    {
        return $this->hasMany('App\FormEvaluasi', 'id', 'id');
    }

    public function subKomponen()
    {
        return $this->belongsTo('App\SubKomponen', 'evaluasi_komponent_id', 'id')->select('id', 'komponent');
    }
}
