<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class Artikel_Penulis extends Model {
    
    protected $table = 'artikel_penulis';
    
    public static $rules = [
        'id_cu' => 'required',
        'nama' => 'required',
        'deskripsi' => 'required|min:5'
    ];
    
    protected $fillable = ['id_cu','id_staf','nama','deskripsi','gambar'];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public function artikel(){
        return $this->hasMany('App\Artikel','id_artikel_penulis','id')
                    ->where('status','=','1')
                    ->orderBy('created_at','desc')
                    ->take(3);
    }

    public static function initialize(){
        return [
            'id_cu' => '0','id_staf' => '0', 'nama' => '', 'deskripsi' => '','gambar' => '',
        ];
    }

    public function hasartikel(){
        return $this->hasMany('App\Artikel','id_artikel_penulis','id');
    }
}