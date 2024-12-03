<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class JenisDiklat extends BaseEloquent {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'jenis_diklat';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required',
    ];
    
    protected $fillable = ['name','deskripsi'];

    protected $allowedFilters = [
        'id','name','deskripsi','created_at','updated_at','has_mentor_count'
    ];

    protected $orderable = [
        'id','name','deskripsi','created_at','updated_at','has_mentor_count'
    ];
    
    public static function initialize(){
        return [
             'name' => '', 'deskripsi' => ''
        ];
    }

    public function hasFasilitator()
    {
        return $this->hasMany('App\FasilitatorJenisDiklat','jenis_diklat_id','id');
    }
}