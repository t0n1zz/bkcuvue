<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Illuminate\Database\Eloquent\SoftDeletes;

class VotingTanggapan extends Model {

    use LogsActivity, Dataviewer, SoftDeletes, Loggable;

    protected $table = 'voting_tanggapan';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'voting_id','name','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','voting_id','name','created_at','updated_at',
    ];

    protected $orderable = [
        'id','voting_id','name','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'voting_id' => '','name' => ''
        ];
    }

    public function voting()
    {
        return $this->belongsTo('App\Voting','voting_id','id');
    }

}