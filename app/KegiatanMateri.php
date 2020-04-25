<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class KegiatanMateri extends BaseEloquent {
    
    use LogsActivity;

    protected $table = 'kegiatan_materi';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'content' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','content'];

}