<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class PengelolaKeluarga extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'pengelola_keluarga';

    protected static $logFillable = true;

    protected $fillable = [
        'id_pengelola','name','tipe'
    ];

    protected $filter = [
        'name','tipe','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
             'name' => '','tipe' => ''
        ];
    }

    public function pengelola(){
        return $this->belongsTo('App\Pengelola','id_pengelola','id');
    }

}