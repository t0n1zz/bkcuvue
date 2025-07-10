<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
// use Cviebrock\EloquentSluggable\Sluggable;

class Sertifikat extends Model
{
    use Dataviewer, LogsActivity, SoftDeletes;
    protected $table = 'sertifikat';
    protected static $logFillable = true;

    protected $fillable = [
        'kode_sertifikat', 'name', 'tipe', 'gambar_depan', 'gambar_belakang', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id', 'kode_sertifikat', 'name', 'tipe'
    ];

    protected $orderable = [
        'id', 'kode_sertifikat', 'name', 'tipe'
    ];

    public static function initialize()
    {
        return [
            'kode_sertifikat' => '', 'name' => '', 'tipe' => '', 'gambar_depan' => '', 'gambar_belakang' => ''
        ];
    }

    public static $rules = [
        'kode_sertifikat' => 'required',
        'name' => 'required',
        'tipe' => 'required'
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
