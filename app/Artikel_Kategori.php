<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class Artikel_Kategori extends Model {
    
    protected $table = 'artikel_kategori';
    
    public static $rules = [
        'nama' => 'required|between:3,50'
    ];
    
    protected $fillable = ['nama','jumlah'];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public function artikel(){
        return $this->hasMany('App\Artikel','kategori','id')
                    ->where('status','=','1')
                    ->orderBy('created_at','desc')
                    ->take(3);
    }

    public function hasartikel(){
        return $this->hasMany('App\Artikel','kategori','id');
    }
}