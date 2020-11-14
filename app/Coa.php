<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class Coa extends Model {
    
    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'coa';
    protected $dates = ['deleted_at'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'kode' => 'sometimes|required|unique:coa',
        'name' => 'required',
        'id_induk' => 'required'
    ];

    protected $fillable = ['id_induk','kode','name','tipe','level','keterangan'];

    protected $allowedFilters = [
        'id','id_induk','kode','name','tipe','level','keterangan'
    ];

    protected $orderable = [
        'id','id_induk','kode','name','tipe','level','keterangan'
    ];

    public static function initialize(){
        return [
            'id_induk' => '','kode' => '', 'name' => '', 'tipe' => '','tipe' => '','level' => '','keterangan' => '',
        ];
    }

    public function induk()
    {
        return $this->belongsTo('App\Coa','id_induk','id');
    }

}