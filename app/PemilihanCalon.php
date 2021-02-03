<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class PemilihanCalon extends Model {

    use LogsActivity, Dataviewer;

    protected $table = 'pemilihan_calon';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'aktivis_id','pemilihan_id','pengusung_cu_id','skor','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','aktivis_id','pengusung_cu_id','pemilihan_id','skor','created_at','updated_at',
        'aktivis.name'
    ];

    protected $orderable = [
        'id','aktivis_id','pengusung_cu_id','pemilihan_id','skor','created_at','updated_at',
        'aktivis.name'
    ];

    public static function initialize()
    {
        return [
            'aktivis_id' => '','pemilihan_id' => '','pengusung_cu_id' => '','skor' => ''
        ];
    }
    
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','pengusung_cu_id','id');
    }

    public function pemilihan()
    {
        return $this->belongsTo('App\Pemilihan','pemilihan_id','id');
    }
}