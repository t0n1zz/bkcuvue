<?php
namespace App;

use App\Traits\Loggable;
use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class KegiatanMateriNilai extends Model {
    
    use LogsActivity,Loggable;

    protected $table = 'kegiatan_materi_nilai';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = ['aktivis_id','kegiatan_id','materi_id','nilai'];

}