<?php
namespace App\Region;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class Regencies extends Model {
    
    use FilterPaginateOrder, LogsActivity, Loggable;

    protected $table = 'regencies';

    protected static $logFillable = true;
    
    public static $rules = [
        'province_id' => 'required',
        'name' => 'required',
    ];
    
    protected $fillable = ['province_id','name'];

    protected $filter = [
        'id','province_id','name','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'province_id' => '0', 'name' => ''
        ];
    }

    public function Provinces()
    {
        return $this->belongsTo('App\Region\Provinces','province_id','id')->select('id','name');
    }
}