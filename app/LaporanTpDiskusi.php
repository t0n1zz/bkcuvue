<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class LaporanTpDiskusi extends BaseEloquent {
    
    use LogsActivity;
    
    protected $table = 'laporan_tp_diskusi';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'content' => 'required'
    ];
    
    protected $fillable = ['id_laporan','id_user','content'];

    public function User(){
        return $this->belongsTo('App\User','id_user','id');
    }
}