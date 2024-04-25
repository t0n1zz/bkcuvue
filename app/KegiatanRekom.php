<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use App\Traits\Loggable;

class KegiatanRekom extends Model {
    
    use LogsActivity, Dataviewer, Loggable;

    protected $table = 'kegiatan_rekom';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = [
        'kegiatan_id','name','pic','waktu','tipe','no'
    ];

    protected $allowedFilters = [
        'kegiatan_id','name','pic','waktu','tipe','created_at','updated_at','no'
    ];

    protected $orderable = [
        'kegiatan_id','name','pic','waktu','tipe','created_at','updated_at','no'
    ];

    public function Kegiatan(){
        return $this->belongsTo('App\Kegiatan','kegiatan_id','id');
    }

    public function hasil(){
        return $this->hasMany('App\KegiatanRekomHasil','kegiatan_rekom_id','id');
    }
}