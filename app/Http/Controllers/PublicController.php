<?php

namespace App\Http\Controllers;

use DB;
use SEO;
use App\Cu;
use Response;
use App\Artikel;
use App\Kegiatan;
use App\Download;
use App\ArtikelPenulis;
use App\ArtikelKategori;
use App\Region\Provinces;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Route;

class PublicController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artikelsUtama = Artikel::with('kategori','penulis','Cu')->where('terbitkan',1)->where('utamakan',1)->orderBy('created_at','desc')->take(11)->get()->chunk(4);

        $artikelsBKCUNew = Artikel::with('kategori','penulis','Cu')->where('id_cu',0)->where('terbitkan',1)->where('utamakan','!=',1)->orderBy('created_at','desc')->take(7)->get();

        $artikelsCUNew = Artikel::with('kategori','penulis','Cu')->where('id_cu','!=',0)->where('terbitkan',1)->orderBy('created_at','desc')->take(15)->get()->chunk(5);

        $cus = Cu::with('Provinces')->withCount('hasTp')->inRandomOrder()->take(10)->get();

        // seo
        SEO::setTitle('Home - Puskopdit BKCU Kalimantan');
        SEO::setDescription('lembaga yang tercipta dari kumpulan beberapa Credit Union (CU) di Indonesia yang memiliki pandangan yang sama dalam membantu anggota untuk membantu dirinya sendiri dan memberikan dampak positif bagi masyarakat sekitar.');
        SEO::opengraph()->setUrl(url()->full());
        
        return view('index', compact('artikelsUtama','artikelsBKCUNew','artikelsCUNew','cus'));
    }

    public function panduan()
    {
        return view('panduan.index');
    }

    public function artikel()
    {
        $title = 'Semua Kategori';
        $subtitle = 'Menampilkan semua artikel';
        $tipe = 'semua';

        $artikels = Artikel::with('kategori','penulis')->where('id_cu',0)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

        // seo
        SEO::setTitle('Artikel - Puskopdit BKCU Kalimantan');
        SEO::setDescription('Artikel Puskopdit BKCU Kalimantan');
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function artikelKategori($slug)
    {
        $kategori = ArtikelKategori::where('slug',$slug)->first();

        $title = $kategori->name;
        $subtitle = 'Menampilkan ' . $kategori->name;
        $tipe = 'kategori';
        
        $artikels = Artikel::with('penulis')->where('id_cu',0)->where('id_artikel_kategori',$kategori->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

        // seo
        SEO::setTitle($title. ' - Puskopdit BKCU Kalimantan');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function artikelPenulis($slug)
    {
        $penulis = ArtikelPenulis::where('slug',$slug)->first();

        $title = 'Artikel oleh ' . $penulis->name;
        $subtitle = 'Menampilkan artikel yang ditulis oleh ' . $penulis->name;
        $tipe = 'penulis';
        
        $artikels = Artikel::with('kategori')->where('id_cu',0)->where('id_artikel_penulis',$penulis->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

         // seo
         SEO::setTitle($title. ' - Puskopdit BKCU Kalimantan');
         SEO::setDescription($subtitle);
         SEO::opengraph()->setUrl(url()->full());
         SEO::opengraph()->addProperty('type', 'articles');
         
         if($penulis->gambar){
            SEO::opengraph()->addImage(route('home') . 'images/penulis/' . $penulis->gambar. '.jpg');
         }

        return view('artikel', compact('title','subtitle','tipe','artikels','penulis'));
    }

    public function artikelLihat($slug)
    {
        $artikel = Artikel::with('kategori','penulis')->where('slug',$slug)->where('terbitkan',1)->first();

        if($artikel && $artikel->kategori){
            $artikelsKategori = Artikel::where('id','!=',$artikel->id)->where('id_cu',0)->where('id_artikel_kategori',$artikel->kategori->id)->inRandomOrder()->take(4)->get();
        }

        $artikelsKategoriCount = $artikelsKategori->count();
        
        $artikelLain = "";
        if($artikelsKategoriCount < 4){
            $take = 4 - $artikelsKategoriCount;
            $artikelsLain = Artikel::where('id','!=',$artikel->id)->where('id_cu',0)->inRandomOrder()->take($take)->get();

            $artikelsTerkait = $artikelsKategori->toBase()->merge($artikelsLain);
        }else{
            $artikelsTerkait = $artikelsKategori;
        }

        $idList = $artikelsTerkait->pluck('id');
        $artikelsTerkait = $artikelsTerkait->chunk(2);

        $artikelsBKCUNew = Artikel::where('id_cu',0)->whereNotIn('id',$idList)->orderBy('created_at','desc')->take(5)->get();

        $artikelsCUNew = Artikel::where('id_cu','!=',0)->whereNotIn('id',$idList)->orderBy('created_at','desc')->take(5)->get();

         // seo
         SEO::setTitle($artikel->name. ' - Puskopdit BKCU Kalimantan');
         SEO::setDescription(str_limit(strip_tags($artikel->content),200));
         SEO::opengraph()->setUrl(url()->full());
         SEO::opengraph()->addProperty('type', 'articles');

         if($artikel->gambar){
            SEO::opengraph()->addImage(route('home') . '/images/artikel/' . $artikel->gambar. '.jpg');
         }

        return view('artikelLihat', compact('artikel','artikelsTerkait','artikelsBKCUNew','artikelsCUNew'));
    }

    public function artikelCari()
    {
        $title = 'Artikel ' .request('cari');
        $subtitle = 'Menampilkan artikel ' . request('cari');
        $tipe = 'semua';

        $artikels = Artikel::with('kategori','penulis')->where('id_cu',0)->where('terbitkan',1)->where('name', 'like', '%' .request('cari'). '%')->orderBy('created_at','desc');

		$queries['cari_column'] = 'name';
        $queries['cari'] = request('cari');
        3;

        SEO::setTitle($title . ' - Puskopdit BKCU Kalimantan');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('artikel', compact('title','subtitle','tipe','artikels'));
    }


    public function diklat($periode)
    {
        $title = 'Diklat ' . $periode;
        $subtitle = 'Menampilkan Diklat tahun buku ' . $periode;

        $kegiatans = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->where('periode',$periode)->whereIn('status',[1,2,3,4,5])->orderBy('mulai')->get();

        // seo
        SEO::setTitle('Diklat - Puskopdit BKCU Kalimantan');
        SEO::setDescription('Diklat Puskopdit BKCU Kalimantan');
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('diklat', compact('title','subtitle','kegiatans'));
    }

    public function diklatLihat($slug)
    {
        $diklat = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->whereIn('status',[1,2,3,4,5])->where('slug', $slug)->first();

         // seo
         SEO::setTitle($diklat->name. ' - Puskopdit BKCU Kalimantan');
         SEO::setDescription(str_limit(strip_tags($diklat->keterangan),200));
         SEO::opengraph()->setUrl(url()->full());
         SEO::opengraph()->addProperty('type', 'articles');

         if($diklat->gambar){
            SEO::opengraph()->addImage(route('home') . '/images/diklat/' . $diklat->gambar. '.jpg');
         }

        return view('diklatLihat', compact('diklat'));
    }

    public function cu()
    {
        $title = "Credit Union";
        $subtitle = 'Menampilkan ' . $title;

        $provinces = Provinces::withCount('hasCu')->orderBy('name')->get();
        $cus = Cu::orderBy('name')->get();

        SEO::setTitle($title . ' - Puskopdit BKCU Kalimantan');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('cu', compact('title','subtitle','cus','provinces'));
    }

    public function dokumen()
    {
        $title = "Dokumen";
        $subtitle = 'Menampilkan ' . $title;

        $dokumens = Download::all();

        SEO::setTitle($title . ' - Puskopdit BKCU Kalimantan');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('dokumen', compact('title','subtitle','dokumens'));
    }

    public function download_file($filename){
        $destinationPath = public_path() . "/files/";
        $file= $destinationPath . $filename;

        return Response::download($file);
    }

    public function profile()
    {
        SEO::setTitle('Profile - Puskopdit BKCU Kalimantan');
        SEO::setDescription('Puskopdit BKCU Kalimantan (awalnya BK3D Kalbar) berdiri pada tanggal 27 November 1988 di Pontianak.
        Sebagai credit union sekunder,Puskopdit BKCU Kalimantan aktif mempromosikan dan memfasilitasi berdirinya credit union - credit union primer.
        ');
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('profile');
    }

    public function admins()
    {
        return view('admins');
    }

    public function testroute()
    {       
        $a = \Spatie\Activitylog\Models\Activity::orderBy('created_at','desc')->paginate();
        return response()->json($a);

        // $users = \App\User::where('login', '>=', \Carbon\Carbon::now()->subMonth(6))->get();	
        // return response()
		// 	->json($users);
            
        // $kelas = App\User::permission('verifikasi_manajemen_jalinan_klaim')->get();
		// $from = \Carbon\Carbon::now()->subYears(30)->format('Y-m-d');
		// $to = \Carbon\Carbon::now()->subYears(20)->format('Y-m-d');

		// $table_data = \App\JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereHas('anggota_cu', function($query) use ($from, $to){ 
		// 	$query->whereBetween('tanggal_lahir',[$from, $to]);
		// })->get();

		// return response()
		// 	->json([
		// 		'model' => $table_data
		// 	]);

		// create permission
        // \Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'index_pertemuan_bkcu']); 
        // \Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'create_pertemuan_bkcu']); 
        // \Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'update_pertemuan_bkcu']); 
		// \Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'destroy_pertemuan_bkcu']);
		
		// give permission
		// $users = App\User::where('id','!=',1)->where('id_cu',0)->get();
		// $users = App\User::find(1);
		
		// foreach($users as $user){
		// 	$user->givePermissionTo([
	
		// 			'index_artikel',
		// 			'create_artikel',
		// 			'update_artikel',
		// 			'destroy_artikel',
		// 			'terbitkan_artikel',
		// 			'utamakan_artikel',
	
		// 			'index_user',
		// 			'create_user',
		// 			'update_user',
		// 			'destroy_user',
		// 			'reset_password',
		// 			'status_user',
		// 			'hak_akses_user',
	
		// 			'index_artikel_penulis',
		// 			'create_artikel_penulis',
		// 			'update_artikel_penulis',
		// 			'destroy_artikel_penulis',
	
		// 			'index_artikel_kategori',
		// 			'create_artikel_kategori',
		// 			'update_artikel_kategori',
		// 			'destroy_artikel_kategori',
	
		// 			'index_cu',
		// 			'create_cu',
		// 			'update_cu',
		// 			'destroy_cu',
	
		// 			'index_tp',
		// 			'create_tp',
		// 			'update_tp',
		// 			'destroy_tp',
	
		// 			'index_aktivis',
		// 			'create_aktivis',
		// 			'update_aktivis',
		// 			'destroy_aktivis',
	
		// 			'index_produk_cu',
		// 			'create_produk_cu',
		// 			'update_produk_cu',
		// 			'destroy_produk_cu',
	
		// 			'index_diklat_bkcu',
		// 			'create_diklat_bkcu',
		// 			'update_diklat_bkcu',
		// 			'destroy_diklat_bkcu',
	
		// 			'index_tempat',
		// 			'create_tempat',
		// 			'update_tempat',
		// 			'destroy_tempat',
	
		// 			'index_laporan_cu',
		// 			'create_laporan_cu',
		// 			'update_laporan_cu',
		// 			'destroy_laporan_cu',
		// 			'upload_laporan_cu',
		// 			'diskusi_laporan_cu',
	
		// 			'index_laporan_tp',
		// 			'create_laporan_tp',
		// 			'update_laporan_tp',
		// 			'destroy_laporan_tp',
		// 			'upload_laporan_tp',
		// 			'diskusi_laporan_tp',
		// 	]);
		// }
		
		// echo $users->getAllPermissions();
    }
}
