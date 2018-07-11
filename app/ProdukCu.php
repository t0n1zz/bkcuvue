<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProdukCu extends Model {
    
    use FilterPaginateOrder, LogsActivity, SoftDeletes;

    protected $table = 'tp';
		protected static $logFillable = true;
		protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
      'id_cu','name','gambar','aturan_setor','aturan_tarik','aturan_balas_jasa','aturan_lain','keterangan','created_at','updated_at','deleted_at'
    ];

    protected $filter = [
        'name','created_at','updated_at', 'cu_name'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'id_cu' => '0', 'name' => '', 'gambar' => '', 'aturan_setor' => '', 'aturan_tarik' => '', 'aturan_balas_jasa' => '', 'aturan_lain' => '', 'keterangan' => ''
        ];
    }
        
    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

}