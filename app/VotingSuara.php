<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Illuminate\Database\Eloquent\SoftDeletes;

class VotingSuara extends Model {

    use LogsActivity, Dataviewer, SoftDeletes,Loggable;

    protected $table = 'voting_suara';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'voting_id','voting_pilihan_id','id_cu','name','created_at','updated_at','isTanggapan'
    ];

    protected $allowedFilters = [
        'id','voting_id','voting_pilihan_id','id_cu','name','created_at','updated_at','isTanggapan',
        'user.username'
    ];

    protected $orderable = [
        'id','voting_id','voting_pilihan_id','id_cu','name','created_at','updated_at','isTanggapan',
        'user.username'
    ];

    public static function initialize()
    {
        return [
            'voting_id' => '','voting_pilihan_id' => '','id_cu' => '','name' => ''
        ];
    }

    public function voting()
    {
        return $this->belongsTo('App\Voting','voting_id','id');
    }

    public function pilihan()
    {
        return $this->belongsTo('App\VotingPilihan','voting_pilihan_id','id');
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }

    public function akses()
    {
        return $this->belongsTo('App\VotingSuaraAkses','id','voting_suara_id');
    }

}