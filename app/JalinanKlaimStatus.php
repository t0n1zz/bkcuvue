<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class JalinanKlaimStatus extends Model {
    
    use Dataviewer, LogsActivity,Loggable;

    protected $table = 'jalinan_klaim_status';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'jalinan_klaim_id' => 'required'
    ];

    protected $fillable = [
        'jalinan_klaim_id', 'cu_id', 'status_klaim',
    ];

    protected $allowedFilters = [
        'id','jalinan_klaim_id', 'cu_id', 'status_klaim','created_at','updated_at'
    ];

    protected $orderable = [
        'id','jalinan_klaim_id', 'cu_id', 'status_klaim','created_at','updated_at'
    ];

}