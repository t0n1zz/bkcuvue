<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisKeluarga extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'aktivis_keluarga';

    protected static $logFillable = true;

    protected $fillable = [
        'id_aktivis','name','tipe'
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

    public function aktivis(){
        return $this->belongsTo('App\Aktivis','id_aktivis','id');
    }

}