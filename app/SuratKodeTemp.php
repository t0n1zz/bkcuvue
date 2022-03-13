<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class SuratKodeTemp extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'surat_kode_temp';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required',
    ];

    protected $fillable = ['id_surat_kode','id_user','id_surat','name'];

    protected $allowedFilters = [
        'id','id_surat_kode','id_user','id_surat','name','created_at','updated_at',
    ];

    protected $orderable = [
        'id','id_surat_kode','id_user','id_surat','name','created_at','updated_at'
    ];

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }

    public function surat()
    {
        return $this->belongsTo('App\Surat','id_surat','id')->select('id','name');
    }
}