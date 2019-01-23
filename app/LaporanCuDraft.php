<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class LaporanCuDraft extends Model
{
    use LogsActivity;

    protected $table = 'laporan_cu_draft';
    protected $guarded = ['id'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public static $rules = [
        'periode' => 'required',
    ];

    public function Cu()
    {
        return $this->belongsTo('App\Cu','no_ba','no_ba')->select('id','no_ba','name')->withTrashed();
    }
}
