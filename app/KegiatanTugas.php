<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanTugas extends Model {
    
    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_tugas';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_user' => 'required',
        'id_cu' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','kegiatan_tugas_id','id_user','id_cu','name','tipe','filename','terjawab','keterangan'];

    protected $allowedFilters = ['kegiatan_id','user.username','user.aktivis.name','cu.name','created_at','updated_at','name','keterangan'];

    protected $orderable = ['kegiatan_id','user.username','user.aktivis.name','cu.name','created_at','updated_at','name'];

    public function cu(){
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name','no_ba');;
    }

    public function user(){
        return $this->belongsTo('App\User','id_user','id')->select('id','id_cu','id_aktivis','username');;
    }

    public function hasjawaban()
    {
        return $this->hasMany('App\KegiatanTugasJawaban','kegiatan_tugas_id','id');
    }
}