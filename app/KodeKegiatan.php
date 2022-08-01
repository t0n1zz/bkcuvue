<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class KodeKegiatan extends Model
{
    use Dataviewer, LogsActivity;
    protected $table = 'kegiatan_kode';
    protected static $logFillable = true;

    protected $fillable = [
        'kode', 'name', 'created_at', 'updated_at'
    ];

    protected $allowedFilters = [
        'id', 'kode', 'name'
    ];

    protected $orderable = [
        'id', 'kode', 'name'
    ];

    public static function initialize()
    {
        return [
            'kode' => '', 'name' => ''
        ];
    }

    public static $rules = [
        'kode' => 'required',
        'name' => 'required'
    ];

    public function hasKegiatan()
    {
        return $this->hasMany('App\Kegiatan','id_kode','id');
    }

}