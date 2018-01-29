<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class CU extends Model {
    
    protected $table = 'cu';
    
    public static $rules = [
        'id_province' => 'required',
        'no_ba' => 'required',
        'nama' => 'required|between:3,50'
    ];
    
    protected $fillable = [
      'id_vilages','id_district','id_regency','id_province','no_ba','nama','gambar','badan_hukum','alamat','pos',
      'telp','hp','website','email','app','deskripsi','ultah',
      'bergabung','created_at','updated_at','deleted_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'id_vilages' => '0', 'id_district' => '0', 'id_regency' => '0', 'id_province' => '0', 'no_ba' => '0', 'nama' => '', 'gambar' => '',
            'badan_hukum' => '0', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => '', 'app' => '', 'ultah' => '', 'bergabung' => ''
        ];
    }
}