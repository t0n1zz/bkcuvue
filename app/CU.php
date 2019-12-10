<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Cu extends BaseEloquent {
    
    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, LogsActivity, SoftDeletes, Sluggable;

    protected $table = 'cu';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 100; //Maintain a maximum of 100 changes at any point of time, while cleaning up old revisions.
    
    public static $rules = [
        'id_provinces' => 'required',
        'no_ba' => 'required',
        'name' => 'required|between:3,50'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
            ]
        ];
    }

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at','updated_at'
    );
    
    protected $fillable = [
      'id_villages','id_districts','id_regencies','id_provinces','no_ba','name','name_legal','gambar','badan_hukum','npwp','nik','situ','siusp','izin_operasional','alamat','pos','telp','hp','website','email','app','misi','visi','nilai','slogan','sejarah','deskripsi','ultah',
      'bergabung','created_at','updated_at','deleted_at'
    ];

    protected $allowedFilters = [
        'id','no_ba','name','name_legal','badan_hukum','npwp','nik','situ','siusp','izin_operasional','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at',
        
        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','has_tp_cu_count'
    ];

    protected $orderable = [
        'id','no_ba','name','name_legal','badan_hukum','npwp','nik','situ','siusp','izin_operasional','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at',

        'villages.name', 'districts.name', 'regencies.name', 'provinces.name','has_tp_cu_count'
    ];

    public static function initialize(){
        return [
            'id_villages' => '', 'id_districts' => '', 'id_regencies' => '', 'id_provinces' => '', 'no_ba' => '', 'name' => '','name_legal' => '', 'gambar' => '',
            'badan_hukum' => '','npwp' => '','nik' => '','situ' => '','siusp' => '','izin_operasional' => '', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => '', 'app' => '', 'ultah' => '', 'bergabung' => ''
        ];
    }
        
    public function LaporanCu()
    {
        return $this->hasMany('App\LaporanCu','id_cu','id');
    }

    public function hasTp()
    {
        return $this->hasMany('App\Tp','id_cu','id')->select('id','id_cu','name');
    }

    public function hasSimpanan()
    {
        return $this->hasMany('App\ProdukCu','id_cu','id')->select('id','id_cu','name', 'tipe')->whereIn('tipe',['Simpanan Pokok','Simpanan Wajib','Simpanan Non Saham']);
    }

    public function hasSimpananJalinan()
    {
        return $this->hasMany('App\ProdukCu','id_cu','id')->select('id','id_cu','name', 'tipe','jalinan')->whereIn('tipe',['Simpanan Pokok','Simpanan Wajib','Simpanan Non Saham'])->where('jalinan',1);
    }

    public function hasPinjaman()
    {
        return $this->hasMany('App\ProdukCu','id_cu','id')->select('id','id_cu','name', 'tipe')->whereIn('tipe',['Pinjaman Kapitalisasi','Pinjaman Umum','Pinjaman Produktif']);
    }

    public function hasPinjamanJalinan()
    {
        return $this->hasMany('App\ProdukCu','id_cu','id')->select('id','id_cu','name', 'tipe','jalinan')->whereIn('tipe',['Pinjaman Kapitalisasi','Pinjaman Umum','Pinjaman Produktif'])->where('jalinan',1);
    }

    public function hasUser()
    {
        return $this->hasMany('App\User','id_cu','id')->select('id','id_cu');
    }

    public function hasArtikel()
    {
        return $this->hasMany('App\Artikel','id_cu','id')->select('id','id_cu');
    }

    public function hasAnggotaCu()
    {
        return $this->hasMany('App\AnggotaCuCu','cu_id','id')->select('id','cu_id');
    }

    public function hasManajemen()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->whereIn('tingkat',[5,6,7,8,9])->where('status',1);
    }

    public function hasPengurus()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',1)->where('status',1);
    }

    public function hasPengawas()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',2)->where('status',1);
    }

    public function hasKomite()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',3)->where('status',1);
    }

    public function hasPenasihat()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',4)->where('status',1);
    }

    public function hasSeniorManajer()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',5)->where('status',1);
    }

    public function hasManajer()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',6)->where('status',1);
    }

    public function hasSupervisor()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',7)->where('status',1);
    }

    public function hasStaf()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',8)->where('status',1);
    }

    public function hasKontrak()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('tingkat',9)->where('status',1);
    }

    public function hasAktivisTidakAktif()
    {
        return $this->hasMany('App\AktivisPekerjaan','id_tempat','id')->select('id_aktivis','tipe','id_tempat','tingkat','selesai')->where('tipe',1)->where('status',3);
    }
    
    public function Provinces()
    {
        return $this->belongsTo('App\Region\Provinces','id_provinces','id')->select('id','name');
    }
		
    public function Regencies()
    {
        return $this->belongsTo('App\Region\Regencies','id_regencies','id')->select('id','name');
    }
		
    public function Districts()
    {
        return $this->belongsTo('App\Region\Districts','id_districts','id')->select('id','name');
    }
		
    public function Villages()
    {
        return $this->belongsTo('App\Region\Villages','id_villages','id')->select('id','name');
    }
}