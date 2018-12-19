<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LaporanCuDraft extends Model
{
    protected $table = 'laporan_cu_draft';
    protected $guarded = ['id'];

    public static $rules = [
        'periode' => 'required',
    ];

    public function Cu()
    {
        return $this->belongsTo('App\Cu','no_ba','no_ba')->select('id','no_ba','name')->withTrashed();
    }
}
