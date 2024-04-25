<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Nilai extends Model
{
    use Dataviewer, LogsActivity, SoftDeletes,Loggable;
    protected $table = 'kegiatan_materi_nilai';
    protected static $logFillable = true;

    protected $fillable = [
        'kegiatan_peserta_id', 'kegiatan_id', 'materi_id', 'nilai', 'created_at', 'updated_at', 'deleted_at'
    ];

    protected $allowedFilters = [
        'id', 'nilai',
    ];

    protected $orderable = [
        'id', 'nilai'
    ];

    public static function initialize()
    {
        return [
            'kegiatan_peserta_id' => '', 'kegiatan_id' => '', 'materi_id' => '', 'nilai' => ''
        ];
    }

    public static $rules = [
        'kegiatan_peserta_id' => 'required',
        'kegiatan_id' => 'required',
        'materi_id' => 'required',
        'nilai' => 'required',
    ];

    public function listMateri()
    {
        return $this->belongsTo('App\KegiatanListMateri', 'materi_id', 'id');
    }
}