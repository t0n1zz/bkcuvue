<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class JalinanKlaim extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'anggota_cu_klaim';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'anggota_cu_id','tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim'
    ];

    protected $filter = [
        'anggota_cu_id','tipe','kategori_penyakit', 'tanggal_mati','keterangan_mati','keterangan','status_klaim'
    ];

    public static function initialize()
    {
        return [
            'anggota_cu_id' => '','tipe' => '','kategori_penyakit' => '','tanggal_mati' => '', 'keterangan_mati' => '', 'keterangan' => '', 'status_klaim' => ''
        ];
    }

    public function anggota_cu()
    {
        return $this->belongsTo('App\AnggotaCU','anggota_cu_id','id');
    }

}