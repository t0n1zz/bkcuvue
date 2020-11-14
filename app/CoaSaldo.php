<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class CoaSaldo extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'coa_saldo';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_coa' => 'required',
        'id_cu' => 'required',
        'periode' => 'required'
    ];

    protected $fillable = ['id_coa','id_cu','id_tp','saldo','periode'];

    protected $allowedFilters = [
        'id','id_coa','id_cu','id_tp','saldo','periode'
    ];

    protected $orderable = [
        'id','id_coa','id_cu','id_tp','saldo','periode'
    ];

    public static function initialize(){
        return [
            'id_coa' => '','id_cu' => '', 'id_tp' => '', 'saldo' => '', 'periode' => ''
        ];
    }
}