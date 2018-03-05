<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class ArtikelKategori extends Model {
    
    protected $table = 'artikelKategori';
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required',
        'deskripsi' => 'required|min:5'
    ];
    
    protected $fillable = ['id_cu','name','deskripsi'];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public function artikel(){
        return $this->hasMany('App\Artikel','id_artikel_kategori','id')
                    ->where('status','=','1')
                    ->orderBy('created_at','desc')
                    ->take(3);
    }

    public static function initialize(){
        return [
            'id_cu' => '0', 'name' => '', 'deskripsi' => ''
        ];
    }

    public function hasartikel(){
        return $this->hasMany('App\Artikel','id_artikel_kategori','id');
    }
}