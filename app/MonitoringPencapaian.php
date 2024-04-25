<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class MonitoringPencapaian extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes,Loggable;

    protected $table = 'monitoring_pencapaian';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'id_monitoring' => 'required',
    ];

    
    protected $fillable = [
        'id_monitoring','pencapaian','bukti','kendala','tindak','catatan','gambar'
    ];

    protected $allowedFilters = [
        'id','id_monitoring','id_user','pencapaian','bukti','kendala','tindak','catatan','created_at','updated_at','gambar'
    ];

    protected $orderable = [
        'id','id_monitoring','id_user','pencapaian','bukti','kendala','tindak','catatan','created_at','updated_at','gambar'
    ];

    public static function initialize()
    {
        return [
            'id' => '','id_monitoring' => '','pencapaian' => '','bukti' => '','kendala' => '','tindak' => '','catatan' => '','gambar' => ''
        ];
    }
}