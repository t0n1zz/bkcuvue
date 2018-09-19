<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;

class LaporanCu extends Model {

    use \Venturecraft\Revisionable\RevisionableTrait;
    use Dataviewer, SoftDeletes;

    protected $table = 'laporan_cu';
    protected $dates = ['deleted_at'];
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 500; //Maintain a maximum of 500 changes at any point of time, while cleaning up old revisions.

    public static $rules = [
        'id_cu' => 'required',
        'periode' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
    }

    protected $dontKeepRevisionOf = array(
        'deleted_at'
    );
    
    protected $fillable = [
        'id_cu','no_ba','l_biasa','l_lbiasa','p_biasa','p_lbiasa','total_anggota_lalu','aset','aset_lalu','aset_masalah','aset_tidak_menghasilkan','aktiva_lancar','simpanan_saham','simpanan_saham_lalu','simpanan_saham_des','nonsaham_unggulan','nonsaham_harian','hutangspd','hutang_tidak_berbiaya_30hari','piutang_beredar','piutang_anggota','piutang_lalai_1bulan','piutang_lalai_12bulan','dcr','dcu','total_hutang_pihak3','iuran_gedung','donasi','bjs_saham','beban_penyisihan_dcr','investasi_likuid','total_pendapatan','total_biaya','shu','shu_lalu','rata_aset','laju_inflasi','harga_pasar','periode'
    ];

    protected $allowedFilters = [
        'id','id_cu','no_ba','cu_name','l_biasa','l_lbiasa','p_biasa','p_lbiasa','total_anggota','total_anggota_lalu','aset','aset_lalu','aset_masalah','aset_tidak_menghasilkan','aktiva_lancar','simpanan_saham','simpanan_saham_lalu','simpanan_saham_des','nonsaham_unggulan','nonsaham_harian','hutang_spd','hutang_tidak_berbiaya_30hari','piutang_beredar','piutang_bersih','piutang_anggota','piutang_lalai_1bulan','piutang_lalai_12bulan','rasio_piutang_beredar','rasio_piutang_lalai','dcr','dcu','total_hutang_pihak3','iuran_gedung','donasi','bjs_saham','beban_penyisihan_dcr','investasi_likuid','total_pendapatan','total_biaya','shu','shu_lalu','rata_aset','laju_inflasi','harga_pasar','periode','tp','created_at','updated_at',

        'cu.name','provinces.name','laporan_cu.no_ba',

        'p1','p2','e1','e5','e6','e9','a1','a2','r7_1','r7_2','r9','l1','s10','s11'
    ];

    protected $orderable = [
        'id','id_cu','no_ba','l_biasa','l_lbiasa','p_biasa','p_lbiasa','total_anggota','total_anggota_lalu','aset','aset_lalu','aset_masalah','aset_tidak_menghasilkan','aktiva_lancar','simpanan_saham','simpanan_saham_lalu','simpanan_saham_des','nonsaham_unggulan','nonsaham_harian','hutang_spd','hutang_tidak_berbiaya_30hari','piutang_beredar','piutang_bersih','piutang_anggota','piutang_lalai_1bulan','piutang_lalai_12bulan','rasio_piutang_beredar','rasio_piutang_lalai','dcr','dcu','total_hutang_pihak3','iuran_gedung','donasi','bjs_saham','beban_penyisihan_dcr','investasi_likuid','total_pendapatan','total_biaya','shu','shu_lalu','rata_aset','laju_inflasi','harga_pasar','periode','tp','created_at','updated_at',

        'cu.name','provinces.name','laporan_cu.no_ba',

        'p1','p2','e1','e5','e6','e9','a1','a2','r7_1','r7_2','r9','l1','s10','s11'
    ];

    public static function initialize()
    {
        return [
            'id_cu' => '0','id_tp' => 'konsolidasi','l_biasa' => '0','l_lbiasa' => '0','p_biasa' => '0','p_lbiasa' => '0','total_anggota_lalu' => '0','aset' => '0','aset_lalu' => '0','aset_masalah' => '0','aset_tidak_menghasilkan' => '0','aktiva_lancar' => '0','simpanan_saham' => '0','simpanan_saham_lalu' => '0','simpanan_saham_des' => '0','nonsaham_unggulan' => '0','nonsaham_harian' => '0','hutang_spd' => '0','hutang_tidak_berbiaya_30hari' => '0','piutang_beredar' => '0','piutang_anggota' => '0','piutang_lalai_1bulan' => '0','piutang_lalai_12bulan' => '0','dcr' => '0','dcu' => '0','total_hutang_pihak3' => '0','iuran_gedung' => '0','donasi' => '0','bjs_saham' => '0','beban_penyisihan_dcr' => '0','investasi_likuid' => '0','total_pendapatan' => '0','total_biaya' => '0','shu' => '0','shu_lalu' => '0','rata_aset' => '0','laju_inflasi' => '0','harga_pasar' => '0','periode' => ''
        ];
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','no_ba','name','id_provinces');
    }

    public function hasCu()
    {
        return $this->hasMany('App\Cu','id_cu','id')->select('no_ba');
    }

}