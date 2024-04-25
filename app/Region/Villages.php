<?php
namespace App\Region;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class Villages extends Model {
    
    use FilterPaginateOrder, LogsActivity, Loggable;

    protected $table = 'villages';

    protected static $logFillable = true;
    
    public static $rules = [
        'district_id' => 'required',
        'name' => 'required',
    ];
    
    protected $fillable = ['district_id','name'];

    protected $filter = [
        'id','district_id','name','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'district_id' => '0', 'name' => ''
        ];
    }

    public function Districts()
    {
        return $this->belongsTo('App\Region\Districts','district_id','id')->select('id','name');
    }
}