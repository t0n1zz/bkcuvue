<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class PengelolaAnggotaCu extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'pengelola_anggota_cu';

    protected static $logFillable = true;

    protected $fillable = [
        'id_pengelola','name','no_ba'
    ];

    protected $filter = [
        'name','no_ba','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
             'name' => '','no_ba' => ''
        ];
    }

    public function pengelola(){
        return $this->belongsTo('App\Pengelola','id_pengelola','id');
    }

}