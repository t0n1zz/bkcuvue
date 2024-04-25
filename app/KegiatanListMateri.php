<?php

namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use App\Traits\Loggable;

class KegiatanListMateri extends Model
{
    use LogsActivity, Dataviewer,Loggable;

    protected $table = 'kegiatan_list_materi';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'kegiatan_id' => 'required',
        'nama' => 'required',
        'waktu' => 'required',
    ];

    protected $fillable = ['kegiatan_id', 'nama', 'waktu'];

    protected $allowedFilters = ['kegiatan_id', 'nama', 'waktu'];

    protected $orderable = ['kegiatan_id', 'nama', 'waktu'];

    public function nilai()
    {
        return $this->hasMany('App\Nilai', 'materi_id', 'id');
    }
}