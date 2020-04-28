<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanTanggapan extends Model {
    
    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_tanggapan';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_user' => 'required',
        'id_cu' => 'required'
    ];
    
    protected $fillable = ['kegiatan_id','kegiatan_tanggapan_id','id_user','id_cu','keterangan'];

    protected $allowedFilters = ['kegiatan_id','user.aktivis.name','created_at','updated_at'];

    protected $orderable = ['kegiatan_id','user.aktivis.name','created_at','updated_at'];

    public function cu(){
        return $this->belongsTo('App\Cu','id_cu','id');
    }

    public function user(){
        return $this->belongsTo('App\User','id_user','id');
    }

    public function pilih(){
        return $this->belongsToMany('App\KegiatanPilih','kegiatan_pilih_pivot')->withPivot('nilai')->withTimestamps();
    }

    public function haskomentar()
    {
        return $this->hasMany('App\KegiatanTanggapan','kegiatan_tanggapan_id','id');
    }
}