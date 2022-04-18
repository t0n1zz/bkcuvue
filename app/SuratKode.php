<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class SuratKode extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'surat_kode';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_surat_kode' => 'required',
        'id_cu' => 'required',
        'name' => 'required',
    ];

    protected $fillable = ['id_surat_kode','id_cu','name','tipe','periode'];

    protected $allowedFilters = [
        'id','id_surat_kode','id_cu','name','tipe','periode','created_at','updated_at',
    ];

    protected $orderable = [
        'id','id_surat_kode','id_cu','name','tipe','periode','created_at','updated_at'
    ];

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }

    public function kode()
    {
        return $this->belongsTo('App\SuratKode','id_surat_kode','id');
    }

    public function hassurat()
    {
        return $this->hasMany('App\Surat','id_surat_kode','id');
    }
}