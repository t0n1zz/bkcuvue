<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Monitoring extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'monitoring';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'id_cu' => 'required',
        'id_tp' => 'required',
        'id_aktivis_cu' => 'required',
        'id_aktivis_bkcu' => 'required',
        'name' => 'required',
        'jenis' => 'required',
        'aspek' => 'required',
    ];

    
    protected $fillable = [
        'id_cu','id_tp','id_aktivis_cu','id_aktivis_bkcu','name','jenis','aspek','rekomendasi','tanggal'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_tp','id_aktivis_cu','id_aktivis_bkcu','name','jenis','aspek','tanggal','created_at','updated_at',
    ];

    protected $orderable = [
        'id','id_cu','id_tp','id_aktivis_cu','id_aktivis_bkcu','name','jenis','aspek','tanggal','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'id' => '','id_cu' => '','id_tp' => '','id_aktivis_cu' => '','id_aktivis_bkcu' => '','name' => '','jenis' => '','aspek' => '','rekomendasi' => '','tanggal' => ''
        ];
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');;
    }

    public function tp()
    {
        return $this->belongsTo('App\Tp','id_tp','id')->select('id','no_tp','name');
    }

    public function aktivis_cu()
    {
        return $this->belongsTo('App\Aktivis','id_aktivis_cu','id');
    }

    public function aktivis_bkcu()
    {
        return $this->belongsTo('App\Aktivis','id_aktivis_bkcu','id');
    }

    public function monitoring_rekom()
    {
        return $this->hasMany('App\MonitoringRekom','id_monitoring','id');
    }

    public function monitoring_rekom_ok()
    {
        return $this->hasMany('App\MonitoringRekom','id_monitoring','id')->where('status',1);
    }

    public function monitoring_pencapaian()
    {
        return $this->hasMany('App\MonitoringPencapaian','id_monitoring','id');
    }

    public function monitoring_rekom_last_year()
    {
        return $this->hasMany('App\MonitoringRekom','id_monitoring','id')->select('id','id_monitoring');
    }

    public function monitoring_rekom_ok_last_year()
    {
        return $this->hasMany('App\MonitoringRekom','id_monitoring','id')->select('id','id_monitoring','status')->where('status',1);
    }

    public function monitoring_rekom_last_month()
    {
        return $this->hasMany('App\MonitoringRekom', 'id_monitoring', 'id')->select('id','id_monitoring');
    }

    public function monitoring_rekom_ok_last_month()
    {
        return $this->hasMany('App\MonitoringRekom', 'id_monitoring', 'id')->select('id','id_monitoring','status')->where('status',1);
    }
}