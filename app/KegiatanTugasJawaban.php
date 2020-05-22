<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanTugasJawaban extends Model {
    
    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_tugas_jawaban';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_user' => 'required',
        'id_cu' => 'required'
    ];
    
    protected $fillable = ['kegiatan_tugas_id','id_user','id_cu','name','tipe','filename','terjawab'];

    protected $allowedFilters = ['user.username','user.aktivis.name','cu.name','created_at','updated_at','name'];

    protected $orderable = ['user.username','user.aktivis.name','cu.name','created_at','updated_at','name'];

    public function cu(){
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name','no_ba');;
    }

    public function user(){
        return $this->belongsTo('App\User','id_user','id')->select('id','id_cu','id_aktivis','username');;
    }
}