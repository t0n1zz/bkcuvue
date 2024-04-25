<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use App\Traits\Loggable;

class Dokumen extends Model {
    
    use LogsActivity, Dataviewer,Loggable;

    protected $table = 'dokumen';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'id_dokumen_kategori' => 'required',
        'name' => 'required',
    ];
    
    protected $fillable = ['id_cu','name','id_dokumen_kategori','status','filename','keterangan','tipe','format','link'];

    protected $allowedFilters = ['id_cu','name','id_dokumen_kategori','status','filename','tipe','format','created_at','updated_at','link',

    'kategori.name','cu.name'];

    protected $orderable = ['id_cu','name','id_dokumen_kategori','status','filename','tipe','format','created_at','updated_at','link',
    
    'kategori.name','cu.name'];

    public static function initialize()
    {
        return [
            'id_cu' => '' , 'name' => '','id_dokumen_kategori' => '','status' => '', 'filename' => '', 'keterangan' => '', 'tipe' => '', 'link' => '', 'format' => ''
        ];
    }

    public function kategori()
    {
        return $this->belongsTo('App\DokumenKategori','id_dokumen_kategori','id')->select('id','name','slug','created_at');
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

}