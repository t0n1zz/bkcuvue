<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProdukCu extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'produk_cu';
    protected static $logFillable = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
        'id_cu','kode_produk','name','gambar','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id_cu','kode_produk','name','gambar','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','created_at','updated_at','deleted_at'
    ];

    protected $orderable = [
        'id_cu','kode_produk','name','gambar','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','created_at','updated_at','deleted_at'
    ];

    protected $filter = [
        'name','created_at','updated_at', 'cu_name'
    ];

    public static function initialize(){
        return [
            'id_cu' => '0','kode_produk' => '', 'name' => '', 'gambar' => '', 'aturan_setor' => '', 'aturan_tarik' => '', 'aturan_balas_jasa' => '', 'aturan_lain' => '', 'keterangan' => ''
        ];
    }
        
    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

}