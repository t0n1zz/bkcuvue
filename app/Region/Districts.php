<?php
namespace App\Region;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class Districts extends Model {
    
    use FilterPaginateOrder, LogsActivity, Loggable;

    protected $table = 'districts';

    protected static $logFillable = true;
    
    public static $rules = [
        'regency_id' => 'required',
        'name' => 'required',
    ];
    
    protected $fillable = ['regency_id','name'];

    protected $filter = [
        'id','regency_id','name','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'regency_id' => '0', 'name' => ''
        ];
    }

    public function Regencies()
    {
        return $this->belongsTo('App\Region\Regencies','regency_id','id')->select('id','name');
    }
}