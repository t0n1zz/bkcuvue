<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AsetTetapKelompok extends Model {
    
    use Dataviewer, LogsActivity;

    protected $table = 'aset_tetap_kelompok';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'aset_tetap_golongan_id' => 'required',
        'kode'=> 'sometimes|required|unique:aset_tetap',
        'name' => 'required'
    ];
    
    protected $fillable = ['aset_tetap_golongan_id','kode','name','keterangan'];

    protected $allowedFilters = [
        'id','aset_tetap_golongan_id','kode','name','keterangan','created_at','updated_at','has_aset_tetap_count',

        'golongan.name'
    ];

    protected $orderable = [
        'id','aset_tetap_golongan_id','kode','name','keterangan','created_at','updated_at','has_aset_tetap_count'
    ];

    public static function initialize(){
        return [
            'aset_tetap_golongan_id' => '','kode' => '', 'name' => '', 'keterangan' => ''
        ];
    }

    public function hasjenis()
    {
        return $this->hasMany('App\AsetTetapJenis','aset_tetap_jenis_id','id');
    }
}