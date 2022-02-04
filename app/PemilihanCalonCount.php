<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class PemilihanCalonCount extends Model {

    use LogsActivity;

    protected $table = 'pemilihan_calon_count';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'pemilihan_id','pemilihan_calon_id','pemilihan_suara_id','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','pemilihan_id','pemilihan_calon_id','pemilihan_suara_id','created_at','updated_at'
    ];

    protected $orderable = [
        'id','pemilihan_id','pemilihan_calon_id','pemilihan_suara_id','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'pemilihan_id' => '','pemilihan_calon_id' => '','pemilihan_suara_id' => ''
        ];
    }

    public function calon()
    {
        return $this->belongsTo('App\PemilihanCalon','pemilihan_calon_id','id');
    }
}