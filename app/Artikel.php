<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Artikel extends Model {

    use Dataviewer, LogsActivity;

    protected $table = 'artikel';

    protected static $logFillable = true;

    public static $rules = [
        'id_cu' => 'required',
        'id_artikel_kategori' => 'required',
        'id_artikel_penulis' => 'required',
        'name' => 'required|min:5'
    ];
    
    protected $fillable = [
        'id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','gambar_thumb','utamakan'
    ];

    protected $allowedFilters = [
        'id','id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','utamakan','created_at',
        
        'artikelKategori.name','artikelPenulis.name','cu.name'
    ];

    protected $orderable = [
        'id','id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','utamakan','created_at',
        
        'artikelKategori.name','artikelPenulis.name','cu.name'
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '' , 'id_artikel_kategori' => '','id_artikel_penulis' => '', 'name' => '', 'content' => '', 'terbitkan' => '', 'utamakan' => '', 'gambar' => ''
        ];
    }

    public function ArtikelKategori()
    {
        return $this->belongsTo('App\ArtikelKategori','id_artikel_kategori','id')->select('id','name','created_at');
    }

    public function ArtikelPenulis()
    {
        return $this->belongsTo('App\ArtikelPenulis','id_artikel_penulis','id')->select('id','name');
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }
}