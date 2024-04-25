<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use App\Traits\Loggable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class JalinanIuran extends Model {
    
    use Dataviewer, LogsActivity,  SoftDeletes,Loggable;

    protected $table = 'jalinan_iuran';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_cu' => 'required',
        'periode' => 'required',
    ];

    protected $fillable = [
        'id_cu','periode','status','created_at','updated_at','deleted_at',
        'total_simpanan',
        'total_simpanan_kurang',
        'total_pinjaman',
        'total_pinjaman_kurang',
        'total_sheet_3',
        'kurang_sheet_3',
        'plafon_sheet_3',
        'total_sheet_4',
        'kurang_sheet_4',
        'plafon_sheet_4',
        'total_sheet_5',
        'kurang_sheet_5',
        'plafon_sheet_5',
        'total_sheet_6_dulu',
        'total_sheet_6_sekarang',
        'kurang_sheet_6',
        'plafon_sheet_6',
        'total_sheet_7_dulu',
        'total_sheet_7_sekarang',
        'kurang_sheet_7',
        'plafon_sheet_7',
        'total_sheet_8',
        'kurang_sheet_8',
        'total_sheet_9',
        'kurang_sheet_9',
        'total_sheet_10',
        'kurang_sheet_10',
        'total_sheet_11',
        'kurang_sheet_11',
        'total_sheet_12',
        'kurang_sheet_12',
        'plafon_sheet_12',
        'total_sheet_13',
        'kurang_sheet_13',
        'plafon_sheet_13',
        'total_sheet_14',
        'kurang_sheet_14',
        'plafon_sheet_14',
        'total_sheet_15',
        'kurang_sheet_15',
        'total_sheet_16',
        'kurang_sheet_16',
        'total_sheet_17',
        'kurang_sheet_17',
        'total_sheet_18',
        'kurang_sheet_18',
        'total_sheet_19',
        'kurang_sheet_19',
        'total_sheet_20',
        'kurang_sheet_20',
        'total_sheet_21',
        'kurang_sheet_21',
        'plafon_sheet_21',
        'total_sheet_22',
        'kurang_sheet_22',
        'plafon_sheet_22',
        'total_sheet_23',
        'kurang_sheet_23',
        'total_sheet_24',
        'kurang_sheet_24',
        'total_sheet_25',
        'kurang_sheet_25',
        'total_sheet_26',
        'kurang_sheet_26',
    ];

    protected $allowedFilters = [
        'id','id_cu','periode','status','created_at','updated_at','deleted_at',
        
        'cu.name',

        'total_simpanan',
        'total_pinjaman',
        'total_sheet_3',
        'kurang_sheet_3',
        'plafon_sheet_3',
        'total_sheet_4',
        'kurang_sheet_4',
        'plafon_sheet_4',
        'total_sheet_5',
        'kurang_sheet_5',
        'plafon_sheet_5',
        'total_sheet_6_dulu',
        'total_sheet_6_sekarang',
        'kurang_sheet_6',
        'plafon_sheet_6',
        'total_sheet_7_dulu',
        'total_sheet_7_sekarang',
        'kurang_sheet_7',
        'plafon_sheet_7',
        'total_sheet_8',
        'kurang_sheet_8',
        'total_sheet_9',
        'kurang_sheet_9',
        'total_sheet_10',
        'kurang_sheet_10',
        'total_sheet_11',
        'kurang_sheet_11',
        'total_sheet_12',
        'kurang_sheet_12',
        'plafon_sheet_12',
        'total_sheet_13',
        'kurang_sheet_13',
        'plafon_sheet_13',
        'total_sheet_14',
        'kurang_sheet_14',
        'plafon_sheet_14',
        'total_sheet_15',
        'kurang_sheet_15',
        'total_sheet_16',
        'kurang_sheet_16',
        'total_sheet_17',
        'kurang_sheet_17',
        'total_sheet_18',
        'kurang_sheet_18',
        'total_sheet_19',
        'kurang_sheet_19',
        'total_sheet_20',
        'kurang_sheet_20',
        'total_sheet_21',
        'kurang_sheet_21',
        'plafon_sheet_21',
        'total_sheet_22',
        'kurang_sheet_22',
        'plafon_sheet_22',
        'total_sheet_23',
        'kurang_sheet_23',
        'total_sheet_24',
        'kurang_sheet_24',
        'total_sheet_25',
        'kurang_sheet_25',
        'total_sheet_26',
        'kurang_sheet_26',
    ];

    protected $orderable = [
        'id','id_cu','periode','status','created_at','updated_at','deleted_at',

        'cu.name',
        'total_simpanan',
        'total_pinjaman',
        'total_sheet_3',
        'kurang_sheet_3',
        'plafon_sheet_3',
        'total_sheet_4',
        'kurang_sheet_4',
        'plafon_sheet_4',
        'total_sheet_5',
        'kurang_sheet_5',
        'plafon_sheet_5',
        'total_sheet_6_dulu',
        'total_sheet_6_sekarang',
        'kurang_sheet_6',
        'plafon_sheet_6',
        'total_sheet_7_dulu',
        'total_sheet_7_sekarang',
        'kurang_sheet_7',
        'plafon_sheet_7',
        'total_sheet_8',
        'kurang_sheet_8',
        'total_sheet_9',
        'kurang_sheet_9',
        'total_sheet_10',
        'kurang_sheet_10',
        'total_sheet_11',
        'kurang_sheet_11',
        'total_sheet_12',
        'kurang_sheet_12',
        'plafon_sheet_12',
        'total_sheet_13',
        'kurang_sheet_13',
        'plafon_sheet_13',
        'total_sheet_14',
        'kurang_sheet_14',
        'plafon_sheet_14',
        'total_sheet_15',
        'kurang_sheet_15',
        'total_sheet_16',
        'kurang_sheet_16',
        'total_sheet_17',
        'kurang_sheet_17',
        'total_sheet_18',
        'kurang_sheet_18',
        'total_sheet_19',
        'kurang_sheet_19',
        'total_sheet_20',
        'kurang_sheet_20',
        'total_sheet_21',
        'kurang_sheet_21',
        'plafon_sheet_21',
        'total_sheet_22',
        'kurang_sheet_22',
        'plafon_sheet_22',
        'total_sheet_23',
        'kurang_sheet_23',
        'total_sheet_24',
        'kurang_sheet_24',
        'total_sheet_25',
        'kurang_sheet_25',
        'total_sheet_26',
        'kurang_sheet_26',
    ];
    
    public static function initialize(){
        return [
            'id_cu' => '', 'periode' => '', 'status' => '',
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name');
    }

    public function produk(){
        return $this->hasMany('App\JalinanIuranProduk','jalinan_iuran_id','id');
    }

    public function anggota(){
        return $this->hasMany('App\JalinanIuranAnggota','jalinan_iuran_id','id');
    }
}