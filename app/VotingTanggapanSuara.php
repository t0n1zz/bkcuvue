<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;
use Illuminate\Database\Eloquent\SoftDeletes;

class VotingTanggapanSuara extends Model {

    use LogsActivity, Dataviewer, SoftDeletes;

    protected $table = 'voting_tanggapan_suara';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'voting_id','voting_tanggapan_id','voting_suara_id','keterangan','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','voting_id','voting_tanggapan_id','voting_suara_id','keterangan','created_at','updated_at','deleted_at','tanggapan.name','suara.name'
    ];

    protected $orderable = [
        'id','voting_id','voting_tanggapan_id','voting_suara_id','keterangan','created_at','updated_at','deleted_at','tanggapan.name','suara.name'
    ];

    public static function initialize()
    {
        return [
            'voting_id' => '','voting_tanggapan_id' => '','voting_suara_id' => '','keterangan' => ''
        ];
    }

    public function voting()
    {
        return $this->belongsTo('App\Voting','voting_id','id');
    }

    public function suara()
    {
        return $this->belongsTo('App\VotingSuara','voting_suara_id','id');
    }

    public function tanggapan()
    {
        return $this->belongsTo('App\VotingTanggapan','voting_tanggapan_id','id');
    }

}