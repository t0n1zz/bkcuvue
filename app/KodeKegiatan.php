<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class KodeKegiatan extends Model
{
    use Dataviewer, LogsActivity;
    protected $table = 'kegiatan_kode';
    protected static $logFillable = true;

    protected $fillable = [
        'kode', 'nama', 'created_at', 'updated_at'
    ];

    protected $allowedFilters = [
        'id', 'kode', 'nama'
    ];

    protected $orderable = [
        'id', 'kode', 'nama'
    ];

    public static function initialize()
    {
        return [
            'kode' => '', 'nama' => ''
        ];
    }

    public static $rules = [
        'kode' => 'required',
        'nama' => 'required'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'nama',
                'onUpdate' => true
            ]
        ];
    }
}