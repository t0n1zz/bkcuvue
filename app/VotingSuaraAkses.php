<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use Illuminate\Database\Eloquent\SoftDeletes;

class VotingSuaraAkses extends Model {

    use LogsActivity, Dataviewer, SoftDeletes;

    protected $table = 'voting_suara_akses';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'voting_id','voting_suara_id','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','voting_id','voting_suara_id','created_at','updated_at',
    ];

    protected $orderable = [
        'id','voting_id','voting_suara_id','created_at','updated_at',
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