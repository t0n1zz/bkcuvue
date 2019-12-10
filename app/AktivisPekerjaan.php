<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisPekerjaan extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'aktivis_pekerjaan';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'id_aktivis','id_tempat','id_tp','lembaga_lain','tipe','name','tingkat','mulai','selesai','status','keterangan_tidak_aktif'
    ];

    protected $filter = [
        'id_tempat','id_tp','tipe','name','tingkat','mulai','selesai','created_at','updated_at','status','keterangan_tidak_aktif'
    ];

    public static function initialize()
    {
        return [
            'id_tempat' => '','id_tp' => '','tipe' => '','lembaga_lain' => '','name' => '','tingkat' => '','mulai' => '','selesai' => '','status' => '', 'keterangan_tidak_aktif' => ''
        ];
    }

    public function aktivis(){
        return $this->belongsTo('App\Aktivis','id_aktivis','id');
    }

    public function lembaga(){
        return $this->belongsTo('App\Lembaga','id_tempat','id')->select('id','name');
    }

    public function cu(){
        return $this->belongsTo('App\Cu','id_tempat','id')->select('id','no_ba','name')->withTrashed();
    }

    public function tp(){
        return $this->belongsTo('App\Tp','id_tp','id')->select('id','name')->withTrashed();
    }

}