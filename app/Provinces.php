<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class Provinces extends Model {
    
    use FilterPaginateOrder, LogsActivity;

    protected $table = 'provinces';

    protected static $logFillable = true;
    
    public static $rules = [
        'name' => 'required',
    ];
    
    protected $fillable = ['id_cu','name'];

    protected $filter = [
        'id','name'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }


    public static function initialize(){
        return [
           'name' => ''
        ];
    }

    public function CU(){
        return $this->hasMany('App\CU','id','id_provinces');
    }

}