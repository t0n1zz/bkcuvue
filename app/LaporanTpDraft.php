<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LaporanTpDraft extends Model
{
    protected $table = 'laporan_tp_draft';
    protected $guarded = ['id'];

    public function Cu()
    {
        return $this->belongsTo('App\Cu','no_ba','no_ba')->select('id','no_ba','name')->withTrashed();
    }

    public function Tp()
    {
        return $this->belongsTo('App\Cu','no_tp','no_tp')->select('id','no_tp','name')->withTrashed();
    }
}
