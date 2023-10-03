<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StrukturOrganisasi extends Model
{
    protected $table = 'struktur_organisasi';

    protected $fillable = [
        'id_bidang', 'id_aktivis', 'id_user',
        'id_user_atasan', 'id_aktivis_atasan', 'id_cu', 'created_at', 'updated_at', 'deleted_at'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name');
    }

    public function aktivis_atasan()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis_atasan', 'id')->select('id', 'name', 'nim_cu', 'gambar_ttd');
    }

    public function bidang()
    {
        return $this->belongsTo('App\Bidang', 'id_bidang', 'id')->select('id', 'name', 'level');
    }
}
