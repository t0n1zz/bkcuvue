<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;

class LaporanCu extends Model {

    use FilterPaginateOrder, LogsActivity;

    protected $table = 'laporancu';

    protected static $logFillable = true;

    public static $rules = [
        'no_ba' => 'required',
        'periode' => 'required',
    ];
    
    protected $fillable = [
        'no_ba','l_biasa','l_lbiasa','p_biasa','p_lbiasa','totalanggota_lalu','aset','aset_lalu','aset_masalah','aset_tidak_menghasilkan','aktivalancar','simpanansaham','simpanansaham_lalu','simpanansaham_des','nonsaham_unggulan','nonsaham_harian','hutangspd','hutang_tidak_berbiaya_30hari','piutangberedar','piutanganggota','piutanglalai_1bulan','piutanglalai_12bulan','dcr','dcu','totalhutang_pihak3','iuran_gedung','donasi','bjs_saham','beban_penyisihandcr','investasi_likuid','totalpendapatan','totalbiaya','shu','shu_lalu','rataaset','lajuinflasi','hargapasar','periode'
    ];

    protected $filter = [
        'no_ba','cu_name','l_biasa','l_lbiasa','p_biasa','p_lbiasa','total_anggota','total_anggota_lalu','aset','aset_lalu','aset_masalah','aset_tidak_menghasilkan','aktiva_lancar','simpanan_saham','simpanan_saham_lalu','simpanan_saham_des','nonsaham_unggulan','nonsaham_harian','hutang_spd','hutang_tidak_berbiaya_30hari','piutang_beredar','piutang_bersih','piutang_anggota','piutang_lalai_1bulan','piutang_lalai_12bulan','rasio_piutang_beredar','rasio_piutang_lalai','dcr','dcu','total_hutang_pihak3','iuran_gedung','donasi','bjs_saham','beban_penyisihan_dcr','investasi_likuid','total_pendapatan','total_biaya','shu','shu_lalu','rata_aset','laju_inflasi','harga_pasar','periode',
        'cu.name','provinces.name','cu_name','provinces_name','laporancu.no_ba',
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize()
    {
        return [
            'no_ba' => '0','cu_name' => '0','l_biasa' => '0','l_lbiasa' => '0','p_biasa' => '0','p_lbiasa' => '0','totalanggota_lalu' => '0','aset' => '0','aset_lalu' => '0','aset_masalah' => '0','aset_tidak_menghasilkan' => '0','aktivalancar' => '0','simpanansaham' => '0','simpanansaham_lalu' => '0','simpanansaham_des' => '0','nonsaham_unggulan' => '0','nonsaham_harian' => '0','hutangspd' => '0','hutang_tidak_berbiaya_30hari' => '0','piutangberedar' => '0','piutanganggota' => '0','piutanglalai_1bulan' => '0','piutanglalai_12bulan' => '0','dcr' => '0','dcu' => '0','totalhutang_pihak3' => '0','iuran_gedung' => '0','donasi' => '0','bjs_saham' => '0','beban_penyisihandcr' => '0','investasi_likuid' => '0','totalpendapatan' => '0','totalbiaya' => '0','shu' => '0','shu_lalu' => '0','rataaset' => '0','lajuinflasi' => '0','hargapasar' => '0','periode' => ''
        ];
    }

    public function CU()
    {
        return $this->belongsTo('App\CU','no_ba','no_ba')->select('id','no_ba','name','id_provinces');
    }

    public function hasCU()
    {
        return $this->hasMany('App\CU','no_ba','no_ba')->select('no_ba');
    }

}