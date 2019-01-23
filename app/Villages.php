<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class Villages extends Model {
    
    use FilterPaginateOrder, LogsActivity;

    protected $table = 'villages';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required',
    ];
    
    protected $fillable = ['id_cu','name'];

    protected $filter = [
        'id','name'
    ];

    public static function initialize(){
        return [
           'name' => ''
        ];
    }

}