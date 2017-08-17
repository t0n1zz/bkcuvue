<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;

class Artikel extends Model {

    use FilterPaginateOrder;

    protected $table = 'artikel';
    
    protected $fillable = [
        'judul','content','kategori','penulis','status','gambar','pilihan'
    ];

    protected $filter = [
        'id','judul','content','kategori','penulis','status','gambar','pilihan','created_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'judul' => '', 'content' => '', 'kategori' => '', 'penulis' => '', 'status' => false, 'pilihan' => false, 'gambar' => ''
        ];
    }

    protected $casts = [
        'status' => 'boolean',
        'pilihan' => 'boolean',
    ];

    public function KategoriArtikel()
    {
        return $this->belongsTo('App\KategoriArtikel','kategori','id');
    }

}