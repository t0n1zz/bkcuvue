<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class KegiatanPeserta extends Model {

    use Dataviewer;

    protected $table = 'kegiatan_peserta';

    protected $fillable = [
        'aktivis_id','kegiatan_id','keterangan','created_at','updated_at'
      ];

    protected $allowedFilters = [
        'aktivis.name'
    ];

    protected $orderable = [
        'aktivis.name','created_at'
    ];
    
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }
}