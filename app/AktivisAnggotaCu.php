<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisAnggotaCu extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'aktivis_anggota_cu';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'id_aktivis','name','no_ba','id_cu','tangggal_masuk'
    ];

    protected $filter = [
        'name','no_ba','id_cu','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
             'id_cu' => '','no_ba' => '', 'tanggal_masuk' => '',
        ];
    }

    public function aktivis(){
        return $this->belongsTo('App\Aktivis','id_aktivis','id');
    }

}