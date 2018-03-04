<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Support\FilterPaginateOrder;
use App\Support\ExposePermissions;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Traits\LogsActivity;

class User extends Authenticatable
{
    use HasRoles, HasApiTokens, Notifiable, FilterPaginateOrder, ExposePermissions, LogsActivity;

    protected $table = 'users';
    protected static $logAttributes = ['id_pus','id_cu','name', 'email', 'username','status'];
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['can'];

    public static $rules = [
        'name' => 'required|min:5',
        'email' => 'required|email',
        'username' => 'required|min:5',
        'password' => 'required|min:5',
    ];

    protected $fillable = [
        'id_pus','id_cu','name','email','username', 'password','gambar','status'
    ];

    protected $filter = [
        'id','id_cu','id_pus','name','email','username','gambar','status','created_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'id_cu' => '0' , 'id_pus' => '0', 'name' => '','email' => '', 'username' => '', 'status' => '0', 'gambar' => ''
        ];
    }

    protected $hidden = [
        'password', 'remember_token',
    ];

    // protected $casts = [
    //     'status' => 'boolean',
    // ];

    public function getId(){
        return $this->id;
    }

    public function pus(){
        return $this->belongsTo('App\Pus','id_pus','id')->select('id','name');
    }

    public function CU(){
        return $this->belongsTo('App\CU','id_cu','id')->select('id','name');
    }

    public function Role(){
        return $this->belongsTo('Spatie\Permission\Models\Role','id_cu','id')->select('id','name');
    }
}
