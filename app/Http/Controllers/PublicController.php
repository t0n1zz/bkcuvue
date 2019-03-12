<?php

namespace App\Http\Controllers;

use SEO;
use App\Cu;
use Response;
use App\Artikel;
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
        
        $artikels = $artikels->paginate(8)->appends($queries);

        SEO::setTitle($title . ' - Puskopdit BKCU Kalimantan');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('artikel', compact('title','subtitle','tipe','artikels'));
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
}
