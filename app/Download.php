<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class Download extends Model
{
    use Dataviewer, LogsActivity,Loggable;

    protected $table = 'download';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required|between:5,100'
    ];
    
    protected $fillable = ['name','filename','content'];

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
