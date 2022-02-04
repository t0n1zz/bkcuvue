<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use Illuminate\Database\Eloquent\SoftDeletes;

class PemilihanSuaraAkses extends Model {

    use LogsActivity, Dataviewer, SoftDeletes;

    protected $table = 'pemilihan_suara_akses';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'pemilihan_id','pemilihan_suara_id','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','pemilihan_id','pemilihan_suara_id','created_at','updated_at',
    ];

    protected $orderable = [
        'id','pemilihan_id','pemilihan_suara_id','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'pemilihan_id' => '','name' => ''
        ];
    }

    public function pemilihan()
    {
        return $this->belongsTo('App\Voting','pemilihan_id','id');
    }

}