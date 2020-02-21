<?php
namespace App;

use DB;
use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AssesmentAccess extends BaseEloquent {
    
    use Dataviewer, SoftDeletes;

    protected $table = 'assesment_access';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'periode' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'id_cu','periode','status','id_p1',
        'id_p2','id_p3','id_p4'
    ];

    protected $allowedFilters = [
        'id_cu','periode','status',
    ];

    protected $orderable = [
        'id_cu','periode','status',
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '','periode' => '','status' => ''
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function p1()
    {
        return $this->belongsTo('App\AssesmentAccessP1','id_p1','id');
    }

    public function p2()
    {
        return $this->belongsTo('App\AssesmentAccessP2','id_p2','id');
    }

    public function p3()
    {
        return $this->belongsTo('App\AssesmentAccessP3','id_p3','id');
    }

    public function p4()
    {
        return $this->belongsTo('App\AssesmentAccessP4','id_p4','id');
    }
}