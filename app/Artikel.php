<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;

class Artikel extends Model {

    use FilterPaginateOrder;

    protected $table = 'artikel';
    
    protected $fillable = [
        'nama','content','artikel_kategori_id','penulis','terbitkan','gambar','utamakan'
    ];

    protected $filter = [
        'id','nama','content','artikel_kategori_id','penulis','terbitkan','gambar','utamakan','created_at','artikel_kategori.nama'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'nama' => '', 'content' => '', 'artikel_kategori_id' => '', 'penulis' => '', 'terbitkan' => 'false', 'utamakan' => 'false', 'gambar' => ''
        ];
    }

    protected $casts = [
        'status' => 'boolean',
        'pilihan' => 'boolean',
    ];

    public function Artikel_Kategori()
    {
        return $this->belongsTo('App\Artikel_Kategori','artikel_kategori_id','id');
    }

}