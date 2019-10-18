<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class ErrorLog extends Model
{
    use Dataviewer;

    protected $table = 'error_log';

    public static $rules = [
        'content' => 'required'
    ];

    protected $fillable = [
        'id_user','content','status'
    ];

    protected $allowedFilters = [
        'user.name','status','created_at','updated_at'
    ];

    protected $orderable = [
       'user.name','status','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'id_user' => '' ,'request' => '' ,'content' => '' ,
        ];
    }

    public function user()
    {
        return $this->belongsTo('App\User','id_user','id')->select('id','id_cu','name');
    }
}
