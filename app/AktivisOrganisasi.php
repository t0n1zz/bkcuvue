<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class AktivisOrganisasi extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'aktivis_organisasi';

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