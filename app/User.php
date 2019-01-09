<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Support\Dataviewer;
use App\Support\ExposePermissions;

use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Traits\LogsActivity;
use Yadahan\AuthenticationLog\AuthenticationLogable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasRoles, Notifiable, Dataviewer, ExposePermissions, LogsActivity,AuthenticationLogable;

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
        'id','id_cu','id_pus','name','email','username','gambar','status','created_at','updated_at','login'
    ];

    protected $orderable = [
        'id','id_cu','id_pus','name','email','username','gambar','status','created_at','updated_at','login'
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

     // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
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
