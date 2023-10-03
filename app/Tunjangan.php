<?php

namespace App;

use App\Support\Dataviewer;
use Illuminate\Database\Eloquent\Model;

class Tunjangan extends Model
{
    use Dataviewer;
    protected $table = 'tunjangan_keluarga';

    protected $fillable = [
        'id_cu', 'id_aktivis', 'id_user', 'jenis', 'name', 'alamat', 'tempat_lahir', 'tempat_menikah','tanggal_lahir', 'tanggal_menikah', 'id_provinces', 'id_regencies', 'id_districts', 'id_villages',
        'ktp', 'akta', 'surat','nik','status'
    ];

    protected $allowedFilters = [
        'created_at','name','aktivis.name'
    ];

    protected $orderable = [
        'created_at'
    ];

    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis', 'id_aktivis', 'id')->select('id', 'name', 'nim_cu','gambar_ttd');
    }

    public static function initialize()
    {
        return [
            'id_cu'=>'', 'id_aktivis' => '', 'id_user' => '', 'jenis' => '', 'name' => '', 'alamat' => '', 'tempat_lahir' => '',
            'tempat_menikah' => '', 'tanggal_lahir'=>'', 'tanggal_menikah' => '', 'id_provinces' => '', 'id_regencies' => '',
            'id_districts' => '', 'id_villages'=>'', 'ktp' => '', 'akta_perkawinan' => '', 'surat_perkawinan' => '','nik'=>'','status'=>''
        ];
    }

    public static $rules = [
        'jenis' => 'required',
        'name' => 'required',
        'tempat_lahir' => 'required',
        'tanggal_lahir' => 'required',
        'nik'=>'required',
        'alamat'=>'required'
    ];

    public function Provinces()
    {
        return $this->belongsTo('App\Region\Provinces', 'id_provinces', 'id')->select('id', 'name');
    }

    public function Regencies()
    {
        return $this->belongsTo('App\Region\Regencies', 'id_regencies', 'id')->select('id', 'name');
    }

    public function Districts()
    {
        return $this->belongsTo('App\Region\Districts', 'id_districts', 'id')->select('id', 'name');
    }

    public function Villages()
    {
        return $this->belongsTo('App\Region\Villages', 'id_villages', 'id')->select('id', 'name');
    }
}
