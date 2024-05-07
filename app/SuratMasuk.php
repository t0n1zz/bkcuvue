<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class SuratMasuk extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'surat_masuk';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'perihal' => 'required',
    ];

    protected $fillable = ['id_cu','id_dokumen','name','pengirim','perihal','hal','terima_melalui','tgl_terima','tujuan','keterangan','periode'];

    protected $allowedFilters = [
        'id','id_cu','id_dokumen','name','perihal','hal','periode','created_at','updated_at','keterangan','terima_melalui'
    ];

    protected $orderable = [
        'id','id_cu','id_dokumen','name','perihal','hal','periode','created_at','updated_at','keterangan','terima_melalui'
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '','id_dokumen' => '','name' => '','pengirim' => '','perihal' => '','hal' => '','terima_melalui' => '','tgl_terima' => '','tujuan' => '','periode' => ''
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