<?php
namespace App;

use App\Traits\Loggable;
use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class VotingPilihanCount extends Model {

    use LogsActivity, Loggable;

    protected $table = 'voting_pilihan_count';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'voting_id','voting_pilihan_id','voting_suara_id','created_at','updated_at'
    ];

    protected $allowedFilters = [
        'id','voting_id','voting_pilihan_id','voting_suara_id','created_at','updated_at'
    ];

    protected $orderable = [
        'id','voting_id','voting_pilihan_id','voting_suara_id','created_at','updated_at'
    ];

    public static function initialize()
    {
        return [
            'voting_id' => '','voting_pilihan_id' => '','voting_suara_id' => ''
        ];
    }
}