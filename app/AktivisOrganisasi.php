<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisOrganisasi extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes, Loggable;

    protected $table = 'aktivis_organisasi';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'id_aktivis','tipe','name','jabatan','tempat','mulai','selesai'
    ];

    protected $filter = [
        'name','jabatan','tempat','mulai','selesai','created_at','updated_at'
    ];

    public static function initialize()
    {
        return ['aktif' => '', 'name' => '','jabatan' => '','tempat' => '','mulai' => '','selesai' => ''
        ];
    }

}