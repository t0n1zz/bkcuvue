<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class Pekerjaan extends Model {
    
    protected $table = 'pekerjaan';

    
    public static $rules = [
        'name' => 'required',
    ];
    
    protected $fillable = ['name'];

    protected $filter = [
        'id','name'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'id' => '0', 'name' => ''
        ];
    }
}