<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class PemilihanSuara extends Model {

    use LogsActivity, Dataviewer;

    protected $table = 'pemilihan_suara';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'pemilihan_id','pemilihan_calon_id','name','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','pemilihan_id','pemilihan_calon_id','name','created_at','updated_at',
        'user.username'
    ];

    protected $orderable = [
        'id','pemilihan_id','pemilihan_calon_id','name','created_at','updated_at',
        'user.username'
    ];

    public static function initialize()
    {
        return [
            'pemilihan_id' => '','pemilihan_calon_id' => '','name' => ''
        ];
    }

    public function pemilihan()
    {
        return $this->belongsTo('App\Pemilihan','pemilihan_id','id');
    }

    public function calon()
    {
        return $this->belongsTo('App\PemilihanCalon','pemilihan_calon_id','id');
    }
}