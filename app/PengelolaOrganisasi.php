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
        'id_pengelola','tipe','name','jabatan','tempat','mulai','selesai','sekarang'
    ];

    protected $filter = [
        'tipe','name','jabatan','tempat','mulai','selesai','sekarang','created_at','updated_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'tipe' => '','name' => '','jabatan' => '','tempat' => '','mulai' => '','selesai' => '','sekarang' => ''
        ];
    }

}