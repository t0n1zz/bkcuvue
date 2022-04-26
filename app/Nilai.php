<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Nilai extends Model
{
    use Dataviewer, LogsActivity, SoftDeletes;
    protected $table = 'kegiatan_materi_nilai';
    protected static $logFillable = true;

    protected $fillable = [
        'aktivis_id', 'kegiatan_id', 'materi_id', 'nilai', 'created_at', 'updated_at', 'deleted_at'
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
            'aktivis_id' => '', 'kegiatan_id' => '', 'materi_id' => '', 'nilai' => ''
        ];
    }

    public static $rules = [
        'aktivis_id' => 'required',
        'kegiatan_id' => 'required',
        'materi_id' => 'required',
        'nilai' => 'required',
    ];

    public function listMateri()
    {
        return $this->belongsTo('App\KegiatanListMateri', 'materi_id', 'id');
    }
}