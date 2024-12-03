<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class KubnAnggota extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'kubn_anggota';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'anggota_cu_id' => 'required',
        'kubn_id' => 'required',
    ];

    protected $fillable = ['kubn_id','anggota_cu_id','jabatan','tanggal_mulai','tanggal_selesai','keterangan'];

    protected $allowedFilters = [
        'kubn_id','anggota_cu_id','jabatan','tanggal_mulai','tanggal_selesai','keterangan','created_at','updated_at'
    ];

    protected $orderable = [
        'kubn_id','anggota_cu_id','jabatan','tanggal_mulai','tanggal_selesai','keterangan','created_at','updated_at'
    ];
    
    public static function initialize(){
        return [
            'kubn_id' => '','anggota_cu_id' => '', 'jabatan' => '','tanggal_mulai' => '','tanggal_selesai' => '','keterangan' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCu','anggota_cu_id','id');
    }
}