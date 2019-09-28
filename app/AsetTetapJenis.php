<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Cviebrock\EloquentSluggable\Sluggable;

class AsetTetapJenis extends Model {
    
    use Dataviewer, LogsActivity, Sluggable;

    protected $table = 'aset_tetap_jenis';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required',
        'deskripsi' => 'required|min:5'
    ];
    
    protected $fillable = ['name','deskripsi'];

    protected $allowedFilters = [
        'id','name','deskripsi','created_at','updated_at','has_aset_tetap_count'
    ];

    protected $orderable = [
        'id','name','deskripsi','created_at','updated_at','has_aset_tetap_count'
    ];

    public static function initialize(){
        return [
            'name' => '', 'deskripsi' => ''
        ];
    }

    public function hasasettetap()
    {
        return $this->hasMany('App\AsetTetap','aset_tetap_jenis_id','id');
    }
}