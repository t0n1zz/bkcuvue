<?php
namespace App\Traits;

use Spatie\Activitylog\LogOptions;

trait Loggable
{
    public function getActivitylogOptions(): LogOptions
    {
        $logOptions = new LogOptions();

        $logOptions->logFillable = true;
        $logOptions->logOnlyDirty = true;

        return $logOptions;
    }
}
