<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AsetTetapJenis extends Model {
    
    use Dataviewer, LogsActivity;

    protected $table = 'aset_tetap_jenis';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'aset_tetap_kelompok_id' => 'required',
        'kode'=> 'sometimes|required',
        'name' => 'required',

    ];
    
    protected $fillable = ['aset_tetap_kelompok_id','kode','name','keterangan'];

    protected $allowedFilters = [
        'id','aset_tetap_kelompok_id','kode','name','keterangan','created_at','updated_at','has_aset_tetap_count',

        'kelompok.name'
    ];

    protected $orderable = [
        'id','aset_tetap_kelompok_id','kode','name','keterangan','created_at','updated_at','has_aset_tetap_count'
    ];

    public static function initialize(){
        return [
            'aset_tetap_kelompok_id' => '','kode' => '', 'name' => '', 'keterangan' => ''
        ];
    }

    public function hasasettetap()
    {
        return $this->hasMany('App\AsetTetap','aset_tetap_jenis_id','id');
    }
}