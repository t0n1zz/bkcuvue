<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AsetTetapGolongan extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'aset_tetap_golongan';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'kode' => 'required',
        'name' => 'required'
    ];
    
    protected $fillable = ['kode','name','keterangan'];

    protected $allowedFilters = [
        'id','kode','name','keterangan','created_at','updated_at','has_aset_tetap_count'
    ];

    protected $orderable = [
        'id','kode','name','keterangan','created_at','updated_at','has_aset_tetap_count'
    ];

    public static function initialize(){
        return [
            'kode' => '', 'name' => '', 'keterangan' => ''
        ];
    }

    public function haskelompok()
    {
        return $this->hasMany('App\AsetTetapKelompok','aset_tetap_kelompok_id','id');
    }
}