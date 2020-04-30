<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanPertanyaan extends Model {
    
    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_pertanyaan';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_user' => 'required',
        'id_cu' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','kegiatan_pertanyaan_id','id_user','id_cu','keterangan'];

    protected $allowedFilters = ['kegiatan_id','user.username','user.aktivis.name','cu.name','created_at','updated_at'];

    protected $orderable = ['kegiatan_id','user.username','user.aktivis.name','cu.name','created_at','updated_at'];

    public function cu(){
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name','no_ba');;
    }

    public function user(){
        return $this->belongsTo('App\User','id_user','id')->select('id','id_cu','id_aktivis','username');;
    }

    public function pilih(){
        return $this->belongsToMany('App\KegiatanPilih','kegiatan_pilih_pivot')->withPivot('nilai')->withTimestamps();
    }

    public function haskomentar()
    {
        return $this->hasMany('App\KegiatanPertanyaan','kegiatan_pertanyaan_id','id');
    }
}