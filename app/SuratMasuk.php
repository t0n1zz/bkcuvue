<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class SuratMasuk extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes, Loggable;

    protected $table = 'surat_masuk';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required',
    ];

    protected $fillable = ['id_cu','id_dokumen','name','perihal','hal','periode'];

    protected $allowedFilters = [
        'id','id_cu','id_dokumen','name','perihal','hal','periode','created_at','updated_at',
    ];

    protected $orderable = [
        'id','id_cu','id_dokumen','name','perihal','hal','periode','created_at','updated_at'
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '','id_dokumen' => '','name' => '','perihal' => '','hal' => '','periode' => ''
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }

    public function dokumen()
    {
        return $this->belongsTo('App\Dokumen','id_dokumen','id');
    }

}