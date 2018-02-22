<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Support\FilterPaginateOrder;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, FilterPaginateOrder;

    protected $table = 'users';

    public static $rules = [
        'id_pus' => 'required',
        'id_cu' => 'required',
        'nama' => 'required|min:5',
        'username' => 'required|min:5',
        'password' => 'required|min:5',
    ];

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $filter = [
        'id','id_cu','id_pus','nama','username','gambar','status','created_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'id_cu' => '0' , 'id_pus' => '0','id_artikel_penulis' => '0', 'nama' => '', 'username' => '', 'status' => '0', 'gambar' => ''
        ];
    }

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function getId(){
        return $this->id;
    }

    public function pus(){
        return $this->belongsTo('App\Pus','id_pus','id')->select('id','nama');
    }

    public function cu(){
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','nama');
    }
}
