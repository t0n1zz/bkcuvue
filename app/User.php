<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Support\Dataviewer;
use App\Support\ExposePermissions;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Traits\LogsActivity;
use Yadahan\AuthenticationLog\AuthenticationLogable;

class User extends Authenticatable
{
    use HasRoles, HasApiTokens, Notifiable, Dataviewer, ExposePermissions, LogsActivity,AuthenticationLogable;

    protected $table = 'users';
    protected $guard_name = 'api';
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

    protected $allowedFilters = [
        'id','id_cu','id_pus','name','email','username','gambar','status','created_at','updated_at'
    ];

    protected $orderable = [
        'id','id_cu','id_pus','name','email','username','gambar','status','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '0' , 'id_pus' => '1', 'name' => '','email' => '', 'username' => '', 'status' => '1', 'gambar' => ''
        ];
    }

    protected $hidden = [
        'password', 'remember_token',
    ];

    // protected $casts = [
    //     'status' => 'boolean',
    // ];

    public function findForPassport($username) {
        return $this->where('username', $username)->first();
    }
    
    public function getId(){
        return $this->id;
    }

    public function getIdCu()
    {
        return $this->id_cu;
    }

    public function Pus(){
        return $this->belongsTo('App\Pus','id_pus','id')->select('id','name');
    }

    public function Cu(){
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }

    public function Role(){
        return $this->belongsTo('Spatie\Permission\Models\Role','id_cu','id')->select('id','name');
    }
}
