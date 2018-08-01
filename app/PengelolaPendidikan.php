<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class PengelolaPendidikan extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'pengelola_pendidikan';

    protected static $logFillable = true;

    protected $fillable = [
        'id_pengelola','name','tingkat','tempat','mulai','selesai'
    ];

    protected $filter = [
        'name','tingkat','tempat','mulai','selesai','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
             'name' => '','tingkat' => '','tempat' => '','mulai' => '','selesai' => ''
        ];
    }

    public function pengelola(){
        return $this->belongsTo('App\Pengelola','id_pengelola','id');
    }

}