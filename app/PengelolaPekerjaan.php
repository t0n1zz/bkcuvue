<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class PengelolaPekerjaan extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'pengelola_pekerjaan';

    protected static $logFillable = true;

    protected $fillable = [
        'id_pengelola','id_tempat','tipe','name','tingkat','mulai','selesai','sekarang'
    ];

    protected $filter = [
        'id_tempat','tipe','name','tingkat','mulai','selesai','sekarang','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'id_tempat' => 0,'tipe' => '','name' => '','tingkat' => '','mulai' => '','selesai' => '','sekarang' => ''
        ];
    }

    public function pengelola(){
        return $this->belongsTo('App\Pengelola','id_pengelola','id');
    }

    public function lembaga(){
        return $this->belongsTo('App\Lembaga','id_tempat','id')->select(array('id','name'));
    }

    public function cu(){
        return $this->belongsTo('App\Cu','id_tempat','id')->select(array('id','no_ba','name'))->withTrashed();
    }

}