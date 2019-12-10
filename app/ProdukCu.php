<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProdukCu extends BaseEloquent {
    
    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'produk_cu';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 100; //Maintain a maximum of 100 changes at any point of time, while cleaning up old revisions.
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required|between:3,50'
    ];

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at','updated_at'
    );
    
    protected $fillable = [
        'id_cu','kode_produk','name','gambar','tipe','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','jalinan','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id_cu','kode_produk','name','gambar','tipe','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','jalinan','created_at','updated_at','deleted_at'
    ];

    protected $orderable = [
        'id_cu','kode_produk','name','gambar','tipe','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','jalinan','created_at','updated_at','deleted_at'
    ];

    protected $filter = [
        'name','created_at','updated_at', 'cu_name'
    ];

    public static function initialize(){
        return [
            'id_cu' => '','kode_produk' => '', 'name' => '', 'gambar' => '', 'tipe' => '', 'aturan_setor' => '', 'aturan_tarik' => '', 'aturan_balas_jasa' => '', 'aturan_lain' => '', 'keterangan' => '', 'jalinan' => ''
        ];
    }
        
    public function cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

}