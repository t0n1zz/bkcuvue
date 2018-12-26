<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Pengumuman extends Model
{
    use Dataviewer, LogsActivity;

    protected $table = 'pengumuman';

    protected static $logFillable = true;

    public static $rules = [
        'name' => 'required|min:5'
    ];

    protected $fillable = [
        'name',
    ];

    protected $allowedFilters = [
        'name'
    ];

    protected $orderable = [
        'name'
    ];

    public static function initialize()
    {
        return [
            'name' => '' ,
        ];
    }
}
