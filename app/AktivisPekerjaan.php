<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisPekerjaan extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'aktivis_pekerjaan';

    protected static $logFillable = true;

    protected $fillable = [
        'id_aktivis','id_tempat','id_tp','lembaga_lain','tipe','name','tingkat','mulai','selesai'
    ];

    protected $filter = [
        'id_tempat','id_tp','tipe','name','tingkat','mulai','selesai','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'id_tempat' => '','id_tp' => '','tipe' => '','lembaga_lain' => '','name' => '','tingkat' => '','mulai' => '','selesai' => ''
        ];
    }

    public function aktivis(){
        return $this->belongsTo('App\Aktivis','id_aktivis','id');
    }

    public function lembaga(){
        return $this->belongsTo('App\Lembaga','id_tempat','id')->select(array('id','name'));
    }

    public function cu(){
        return $this->belongsTo('App\Cu','id_tempat','id')->select(array('id','no_ba','name'))->withTrashed();
    }

    public function tp(){
        return $this->belongsTo('App\Tp','id_tp','id')->select(array('id','name'))->withTrashed();
    }

}