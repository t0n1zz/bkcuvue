<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanMateri extends Model {
    
    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_materi';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','name','filename','keterangan','tipe','format','link'];

    protected $allowedFilters = ['kegiatan_id','name','filename','tipe','created_at','updated_at','format','link'];

    protected $orderable = ['kegiatan_id','name','filename','tipe','created_at','updated_at','format','link'];

}