<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Cviebrock\EloquentSluggable\Sluggable;

class Artikel extends Model {

    use Dataviewer, LogsActivity, Sluggable;

    protected $table = 'artikel';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'id_cu' => 'required',
        'id_artikel_kategori' => 'required',
        'id_artikel_penulis' => 'required',
        'name' => 'required|min:5'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
            ]
        ];
    }
    
    protected $fillable = [
        'id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','gambar_thumb','utamakan'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','utamakan','created_at',
        
        'artikel_kategori.name','artikel_penulis.name','cu.name'
    ];

    protected $orderable = [
        'id','id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','utamakan','created_at',
        
        'artikel_kategori.name','artikel_penulis.name','cu.name'
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '' , 'id_artikel_kategori' => '','id_artikel_penulis' => '', 'name' => '', 'content' => '', 'terbitkan' => '', 'utamakan' => '', 'gambar' => ''
        ];
    }

    public function kategori()
    {
        return $this->belongsTo('App\ArtikelKategori','id_artikel_kategori','id')->select('id','name','slug','created_at');
    }

    public function penulis()
    {
        return $this->belongsTo('App\ArtikelPenulis','id_artikel_penulis','id')->select('id','slug','name');
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }
}