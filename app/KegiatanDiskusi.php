<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class KegiatanDiskusi extends BaseEloquent {
    
    use LogsActivity;

    protected $table = 'kegiatan_diskusi';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'content' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','kegiatan_diskusi_id','id_user','content'];

    public function User(){
        return $this->belongsTo('App\User','id_user','id');
    }
}