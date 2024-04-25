<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;
use Cviebrock\EloquentSluggable\Sluggable;

class ArtikelSimo extends Model {

    use Dataviewer, LogsActivity, Sluggable,Loggable;

    protected $table = 'artikel_simo';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'name' => 'required',
        'ringkasan' => 'required'
    ];

    public function sluggable():array
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
            ]
        ];
    }
    
    protected $fillable = [
        'name','content','gambar','utamakan','ringkasan'
    ];

    protected $allowedFilters = [
        'id','name','content','gambar','utamakan','created_at','ringkasan'
    ];

    protected $orderable = [
        'id','name','content','gambar','utamakan','created_at', 'ringkasan'
    ];

    public static function initialize()
    {
        return [
            'name' => '','ringkasan' => '', 'content' => '', 'utamakan' => '', 'gambar' => ''
        ];
    }
}