<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class LaporanTpDraft extends Model
{
    use LogsActivity;

    protected $table = 'laporan_tp_draft';
    protected $guarded = ['id'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public function Tp()
    {
        return $this->belongsTo('App\Tp', 'no_tp', 'no_tp')->select('id', 'no_tp', 'name')->withTrashed();
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu', 'no_ba', 'no_ba')->select('id', 'no_ba', 'name')->withTrashed();
    }
}
