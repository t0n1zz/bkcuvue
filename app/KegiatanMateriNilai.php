<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class KegiatanMateriNilai extends Model {
    
    use LogsActivity;

    protected $table = 'kegiatan_materi_nilai';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = ['aktivis_id','kegiatan_id','materi_id','nilai'];

}