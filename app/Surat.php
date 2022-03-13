<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Surat extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes;

    protected $table = 'surat';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'name' => 'required'
    ];

    protected $fillable = [
        'id_cu','id_surat_kategori','id_surat_kode_temp','id_dokumen','name','hal','perihal','tipe','periode','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_surat_kategori','id_surat_kode_temp','id_dokumen','name','hal','perihal','tipe','periode','created_at','updated_at','deleted_at',

        'cu.name',
    ];

    protected $orderable = [
        'id','id_cu','id_surat_kategori','id_surat_kode_temp','id_dokumen','name','hal','perihal','tipe','periode','created_at','updated_at','deleted_at',

        'cu.name',
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '','id_surat_kategori' =>'','id_dokumen' =>'', 'name' => '','hal' => '', 'perihal' => '',  'tipe' => '','periode' => ''
        ];
    }

    public function kategori()
    {
        return $this->belongsTo('App\SuratKategori','id_surat_kategori','id');
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function suratKodeTemp()
    {
        return $this->belongsTo('App\SuratKodeTemp','id_surat_kode_temp','id');
    }

    public function dokumen()
    {
        return $this->belongsTo('App\Dokumen','id_dokumen','id');
    }
    
}