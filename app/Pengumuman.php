<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Pengumuman extends Model
{
    use Dataviewer, LogsActivity;

    protected $table = 'pengumuman';

    protected static $logFillable = true;

    public static $rules = [
        'name' => 'required|min:5'
    ];

    protected $fillable = [
        'id_cu','name'
    ];

    protected $allowedFilters = [
        'name','created_at','updated_at','cu.name'
    ];

    protected $orderable = [
        'name','created_at','updated_at','cu.name'
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '' ,'name' => '' ,
        ];
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }
}
