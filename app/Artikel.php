<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;

class Artikel extends Model {

    use FilterPaginateOrder;

    protected $table = 'artikel';

    public static $rules = [
        'id_cu' => 'required',
        'id_artikel_kategori' => 'required',
        'id_artikel_penulis' => 'required',
        'nama' => 'required|min:5',
        'penulis' => 'required'
    ];
    
    protected $fillable = [
        'id_cu','id_artikel_kategori','id_artikel_penulis','nama','content','penulis','terbitkan','gambar','gambar_thumb','utamakan'
    ];

    protected $filter = [
        'id','id_cu','id_artikel_kategori','id_artikel_penulis','nama','content','penulis','terbitkan','gambar','utamakan','created_at','artikel_kategori.nama'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'id_cu' => '0' , 'id_artikel_kategori' => '1', 'nama' => '', 'content' => '', 'penulis' => '', 'terbitkan' => '0', 'utamakan' => '0', 'gambar' => ''
        ];
    }

    protected $casts = [
        'status' => 'boolean',
        'pilihan' => 'boolean',
    ];

    public function Artikel_Kategori()
    {
        return $this->belongsTo('App\Artikel_Kategori','id_artikel_kategori','id')->select('id','nama');
    }

    public function Artikel_Penulis()
    {
        return $this->belongsTo('App\Artikel_Penulis','id_artikel_penulis','id')->select('id','nama');
    }
}