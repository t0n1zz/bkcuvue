<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class KegiatanPeserta extends BaseEloquent {

    use Dataviewer;

    protected $table = 'kegiatan_peserta';

    protected $fillable = [
        'aktivis_id','kegiatan_id','name_nametag','name_sertifikat','keterangan','keteranganBatal','datang','pulang','status','created_at','updated_at','name','tempat','lembaga','tanggal_hadir'
    ];

    protected $allowedFilters = [
        'aktivis.name','name_nametag','name_sertifikat','datang','pulang','status','name','tempat','lembaga','tanggal_hadir'
    ];

    protected $orderable = [
        'name_nametag','name_sertifikat','datang','pulang','status','name','tempat','lembaga','tanggal_hadir'
    ];

    public static function initialize()
    {
        return [
            'name' => '','tempat' => '','lembaga' => '','datang' => '','pulang' => '','tanggal_hadir' => '',
        ];
    }
    
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }

    public function kegiatan()
    {
        return $this->belongsTo('App\Kegiatan','kegiatan_id','id');
    }
}