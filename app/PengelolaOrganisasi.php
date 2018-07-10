<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class PengelolaOrganisasi extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'pengelola_organisasi';

    protected static $logFillable = true;

    protected $fillable = [
        'id_pengelola','tipe','name','jabatan','tempat','mulai','selesai'
    ];

    protected $filter = [
        'name','jabatan','tempat','mulai','selesai','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return ['aktif' => '', 'name' => '','jabatan' => '','tempat' => '','mulai' => '','selesai' => ''
        ];
    }

}