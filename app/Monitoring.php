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
        'perspektif' => 'required',
    ];

    
    protected $fillable = [
        'id_cu','id_tp','id_aktivis_cu','id_aktivis_bkcu','name','jenis','perspektif','rekomendasi','tanggal'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_tp','id_aktivis_cu','id_aktivis_bkcu','name','jenis','perspektif','tanggal','created_at','updated_at',
    ];

    protected $orderable = [
        'id','id_cu','id_tp','id_aktivis_cu','id_aktivis_bkcu','name','jenis','perspektif','tanggal','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'id' => '','id_cu' => '','id_tp' => '','id_aktivis_cu' => '','id_aktivis_bkcu' => '','name' => '','jenis' => '','perspektif' => '','rekomendasi' => '','tanggal' => ''
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

    public function monitoring_lanjut()
    {
        return $this->hasMany('App\MonitoringLanjut','id_monitoring','id');
    }
}