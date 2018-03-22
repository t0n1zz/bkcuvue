<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class Artikel extends Model {

    use FilterPaginateOrder, LogsActivity;

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

    protected $filter = [
        'id','id_cu','id_artikel_kategori','id_artikel_penulis','name','content','terbitkan','gambar','utamakan','created_at','artikel_kategori.name'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'id_cu' => '0' , 'id_artikel_kategori' => '0','id_artikel_penulis' => '0', 'name' => '', 'content' => '', 'terbitkan' => '0', 'utamakan' => '0', 'gambar' => ''
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

    public function CU()
    {
        return $this->belongsTo('App\CU','id_cu','id')->select('id','name');
    }
}