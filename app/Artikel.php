<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;

class Artikel extends Model {

    use FilterPaginateOrder;

    protected $table = 'artikel';

    public static $rules = [
        'nama' => 'required|min:5',
        'penulis' => 'required',
        'artikel_kategori_id' => 'required',
        'content' => 'required|min:10'
    ];
    
    protected $fillable = [
        'nama','content','artikel_kategori_id','penulis','terbitkan','gambar','gambar_thumb','utamakan'
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
            'nama' => '', 'content' => '', 'artikel_kategori_id' => '1', 'penulis' => '', 'terbitkan' => '0', 'utamakan' => '0', 'gambar' => ''
        ];
    }

    protected $casts = [
        'status' => 'boolean',
        'pilihan' => 'boolean',
    ];

    public function Artikel_Kategori()
    {
        return $this->belongsTo('App\Artikel_Kategori','artikel_kategori_id','id')->select('id','nama');
    }

}