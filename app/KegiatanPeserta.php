<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class KegiatanPeserta extends Model {

    use Dataviewer;

    protected $table = 'kegiatan_peserta';

    protected $fillable = [
        'aktivis_id','kegiatan_id','name_nametag','name_sertifikat','keterangan','keteranganBatal','datang','pulang','status','created_at','updated_at',''
    ];

    protected $allowedFilters = [
        'aktivis.name','name_nametag','name_sertifikat','datang','pulang','status'
    ];

    protected $orderable = [
        'name_nametag','name_sertifikat','datang','pulang','status'
    ];
    
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }

    public function kegiatan()
    {
        return $this->belongsTo('App\Kegiatan','kegiatan_id','id');
    }
}