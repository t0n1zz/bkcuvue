<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class AsetTetap extends Model {
    
    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity;

    protected $table = 'aset_tetap';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    
    public static $rules = [
        'name' => 'required',
        'kode'=> 'sometimes|required|unique:aset_tetap',
    ];

    public static function boot()
    {
        parent::boot();
    }
    
    protected $fillable = [
        'aktivis_id','kode','name','jenis','merk','tipe','lokasi','kondisi','gambar'
    ];

    protected $allowedFilters = [
        'aktivis_id','kode','name','jenis','merk','tipe','lokasi','kondisi','gambar','created_at','updated_at',
        
        'aktivs.name'
    ];

    protected $orderable = [
        'aktivis_id','kode','name','jenis','merk','tipe','lokasi','kondisi','gambar','created_at','updated_at',
    ];

    public static function initialize()
    {
        return [
            'aktivis_id' => '','kode' => '','name' => '','jenis' => '','merk' => '','tipe' => '','lokasi' => '','kondisi' => '','gambar' => ''
        ];
    }
		
    public function aktivis()
    {
        return $this->belongsTo('App\Aktivis','aktivis_id','id');
    }

    public function asetTetapJenis()
    {
        return $this->belongsTo('App\AsetTetapJenis','aset_tetap_jenis_id','id');
    }
}