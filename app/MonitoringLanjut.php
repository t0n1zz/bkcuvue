<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class MonitoringLanjut extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'monitoring_lanjut';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'id_monitoring' => 'required',
    ];

    
    protected $fillable = [
        'id_monitoring','pencapaian','bukti','kendala','tindak','catatan'
    ];

    protected $allowedFilters = [
        'id','id_monitoring','pencapaian','bukti','kendala','tindak','catatan','created_at','updated_at',
    ];

    protected $orderable = [
        'id','id_monitoring','pencapaian','bukti','kendala','tindak','catatan','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'id' => '','id_monitoring' => '','pencapaian' => '','bukti' => '','kendala' => '','tindak' => '','catatan' => ''
        ];
    }
}