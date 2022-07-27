<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class KegiatanMateriNilai extends Model {
    
    use LogsActivity, SoftDeletes;

    protected $table = 'kegiatan_materi_nilai';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = ['aktivis_id','kegiatan_id','materi_id','nilai'];

}