<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisDiklat extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'aktivis_diklat';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'id_aktivis','id_kegiatan','name','tempat','lembaga','mulai','selesai'
    ];

    protected $filter = [
        'name','id_kegiatan','tempat','lembaga','mulai','selesai','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
             'name' => '','id_kegiatan' => '','tempat' => '','lembaga' => '','mulai' => '','selesai' => ''
        ];
    }

    public function aktivis(){
        return $this->belongsTo('App\Aktivis','id_aktivis','id');
    }

    public function kegiatan(){
        return $this->belongsTo('App\Kegiatan','id_kegiatan','id');
    }

}