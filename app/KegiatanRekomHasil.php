<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class KegiatanRekomHasil extends Model {
    
    use LogsActivity, Dataviewer;

    protected $table = 'kegiatan_rekom_hasil';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'kegiatan_rekom_id' => 'required',
        'id_user' => 'required',
        'id_cu' => 'required'
    ];
    
    protected $fillable = [
        'kegiatan_id','kegiatan_rekom_id','id_user','id_cu','tercapai','keterangan','bukti','gambar'
    ];

    protected $allowedFilters = ['kegiatan_id','user.username','user.aktivis.name','cu.name','created_at','updated_at','tercapai'];

    protected $orderable = ['kegiatan_id','user.username','user.aktivis.name','cu.name','created_at','updated_at','tercapai'];

    public function cu(){
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name','no_ba');
    }

    public function user(){
        return $this->belongsTo('App\User','id_user','id')->select('id','id_cu','id_aktivis','username');
    }

    public function rekom(){
        return $this->belongsTo('App\KegiatanRekom','kegiatan_rekom_id','id');
    }
}