<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisAnggotaCu extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'aktivis_anggota_cu';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'id_aktivis','name','no_ba'
    ];

    protected $filter = [
        'name','no_ba','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
             'name' => '','no_ba' => ''
        ];
    }

    public function aktivis(){
        return $this->belongsTo('App\Aktivis','id_aktivis','id');
    }

}