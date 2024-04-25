<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class SertifikatGenerate extends Model
{
  //
  use Dataviewer, LogsActivity, SoftDeletes,Loggable;
  protected $table = 'sertifikat_generate';
  protected static $logFillable = true;

  protected $fillable = [
    'kegiatan_peserta_id', 'id_kegiatan', 'nomor', 'periode', 'created_at', 'updated_at', 'deleted_at'
  ];

  protected $allowedFilters = [
    'kegiatan_peserta_id', 'id_kegiatan', 'nomor', 'periode'
  ];

  protected $orderable = [
    'kegiatan_peserta_id', 'id_kegiatan', 'nomor', 'periode'
  ];

  public static function initialize()
  {
    return [
      'kegiatan_peserta_id' => '', 'id_kegiatan' => '', 'nomor' => '', 'periode' => ''
    ];
  }

  public static $rules = [
    'kegiatan_peserta_id' => 'required',
    'id_kegiatan' => 'required',
    'nomor' => 'required',
    'periode' => 'required',
  ];

  public function kegiatan()
  {
    return $this->belongsTo('App\Kegiatan', 'id_kegiatan', 'id')->select('id', 'name');
  }

  public function peserta()
  {
    return $this->belongsTo('App\KegiatanPeserta', 'kegiatan_peserta_id', 'id');
  }
}
