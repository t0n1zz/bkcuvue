<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class Saran extends BaseEloquent
{
    use Dataviewer;

    protected $table = 'saran';


    public static $rules = [
        'content' => 'required|min:5'
    ];

    protected $fillable = [
        'id_user','name','bidang','content',
    ];

    protected $allowedFilters = [
        'name','content','bidang','user.name','created_at','updated_at'
    ];

    protected $orderable = [
        'name','content','bidang','user.name','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'id_user' => '' ,'name' => '' ,'content' => '' ,'bidang' => '' ,
        ];
    }

    public function user()
    {
        return $this->belongsTo('App\User','id_user','id')->select('id','id_cu','id_aktivis','username');
    }
}
