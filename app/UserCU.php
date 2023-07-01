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

class UserCU extends Authenticatable
{
    use HasRoles, Notifiable, Dataviewer, ExposePermissions, LogsActivity, AuthenticationLogable;

    protected $table = 'userscu';
    protected $guard_name = 'userscu';
    protected static $ignoreChangedAttributes = ['login', 'updated_at'];
    protected static $logOnlyDirty = true;
    protected $guarded = [];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */


    protected $hidden = [
        'password', 'remember_token',
    ];

    public static $rules = [
        'g-recaptcha-response' => 'required|captcha'
    ];

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    // public function getJWTIdentifier()
    // {
    //     return $this->getKey();
    // }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */


    public function anggota_cu()
    {
        return $this->hasOne('App\AnggotaCu', 'id', 'anggota_cu_id');
    }

    public function anggota_cu_cu()
    {
        return $this->hasOne('App\AnggotaCuCu', 'id', 'anggota_cu_cu_id');
    }
}
