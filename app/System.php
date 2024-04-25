<?php

namespace App;

use App\Traits\Loggable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class System extends Model
{
    use LogsActivity, Loggable;

    protected $table = 'system';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'version','nik'
    ];
}
