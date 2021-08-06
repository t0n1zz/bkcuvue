<?php

namespace App\Http\Controllers;

use App\Cu;
use App\Tp;
use App\Artikel;
use App\ProdukCu;
use App\Dokumen;
use App\ArtikelPenulis;
use App\ArtikelKategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use SEO;

class PublicCuController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subdomain = Route::input('cu');

        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$subdomain)->first();

        if(!$cu){
            abort(404);
        }

        $artikelsUtama = Artikel::with('kategori')->where('id_cu',$cu->id)->where('terbitkan',1)->where('utamakan',1)->orderBy('created_at','desc')->take(6)->get();

        $artikelsNew = Artikel::with('kategori','penulis')->where('id_cu',$cu->id)->where('terbitkan',1)->where('utamakan','!=',1)->orderBy('created_at','desc')->take(5)->get();

        if($artikelsUtama->isEmpty()){
            $artikelsUtama = $artikelsNew;
            $artikelsNew = collect();
        }

        $kategories = ArtikelKategori::where('id_cu',$cu->id)->get()->chunk(8);

        // seo
        SEO::setTitle('Home - CU ' .$cu->name);
        SEO::setDescription(strip_tags($cu->deskripsi));
        SEO::opengraph()->setUrl(url()->full());

        return view('cu.index', compact('cu','artikelsUtama','artikelsNew','kategories'));
    }

    public function tp()
    {
        $subdomain = Route::input('cu');
        
        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$subdomain)->first();

        if(!$cu){
            abort(404);
        }

        $title = "Tempat/Kantor Pelayanan";
        $subtitle = 'Menampilkan ' . $title;

        $tps = Tp::where('id_cu',$cu->id)->paginate(9);

        // seo
        SEO::setTitle($title . ' - CU ' . $cu->name);
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());

        return view('cu.tp', compact('title','subtitle','tps'));
    }

    public function produk()
    {
        $subdomain = Route::input('cu');
        
        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$subdomain)->first();

        if(!$cu){
            abort(404);
        }

        $title = "Produk dan Pelayanan";
        $subtitle = 'Menampilkan ' . $title;

        $produks = ProdukCu::where('id_cu',$cu->id)->paginate(9);

         // seo
         SEO::setTitle($title . ' - CU ' . $cu->name);
         SEO::setDescription($subtitle);
         SEO::opengraph()->setUrl(url()->full());

        return view('cu.produk', compact('title','subtitle','produks'));
    }

    public function artikel()
    {
        $subdomain = Route::input('cu');

        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$subdomain)->first();

        if(!$cu){
            abort(404);
        }

        $title = 'Semua Kategori';
        $subtitle = 'Menampilkan semua artikel';
        $tipe = 'semua';

        $artikels = Artikel::with('kategori','penulis')->where('id_cu',$cu->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

         // seo
         SEO::setTitle($title . ' - CU ' . $cu->name);
         SEO::setDescription($subtitle);
         SEO::opengraph()->setUrl(url()->full());

        return view('cu.artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function artikelKategori($cu, $slug)
    {
        $cu = Cu::where('slug',$cu)->first();
        $kategori = ArtikelKategori::where('slug',$slug)->first();

        if(!$cu){
            abort(404);
        }

        if(!$kategori){
            abort(404);
        }

        $title = $kategori->name;
        $subtitle = 'Menampilkan ' . $kategori->name;
        $tipe = 'kategori';
        
        $artikels = Artikel::with('penulis')->where('id_artikel_kategori',$kategori->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

         // seo
         SEO::setTitle($title . ' - CU ' . $cu->name);
         SEO::setDescription($subtitle);
         SEO::opengraph()->setUrl(url()->full());

        return view('cu.artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function artikelPenulis($cu, $slug)
    {
        $cu = Cu::where('slug',$cu)->first();
        $penulis = ArtikelPenulis::where('slug',$slug)->first();

        if(!$cu){
            abort(404);
        }

        if(!$penulis){
            abort(404);
        }

        $title = 'Artikel oleh ' . $penulis->name;
        $subtitle = 'Menampilkan artikel yang ditulis oleh ' . $penulis->name;
        $tipe = 'penulis';
        
        $artikels = Artikel::with('kategori')->where('id_artikel_penulis',$penulis->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

         // seo
         SEO::setTitle($title . ' - CU ' . $cu->name);
         SEO::setDescription($subtitle);
         SEO::opengraph()->setUrl(url()->full());
         
         if($penulis->gambar){
             SEO::opengraph()->addImage(route('home') . 'images/penulis/' . $penulis->gambar. '.jpg');
         }

        return view('cu.artikel', compact('title','subtitle','tipe','artikels','penulis'));
    }

    public function artikelLihat($cu, $slug)
    {
        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$cu)->first();

        $artikel = Artikel::with('kategori','penulis')->where('slug',$slug)->where('terbitkan',1)->first();

        if(!$cu){
            abort(404);
        }

        if(!$artikel){
            abort(404);
        }

        if($artikel->kategori){
            $artikelsKategori = Artikel::where('id','!=',$artikel->id)->where('id_cu',$cu->id)->where('id_artikel_kategori',$artikel->kategori->id)->inRandomOrder()->take(4)->get();
        }

        $artikelsKategoriCount = $artikelsKategori->count();
        
        $artikelLain = "";
        if($artikelsKategoriCount < 4){
            $take = 4 - $artikelsKategoriCount;
            $artikelsLain = Artikel::where('id','!=',$artikel->id)->where('id_cu',$cu->id)->inRandomOrder()->take($take)->get();

            $artikelsTerkait = $artikelsKategori->toBase()->merge($artikelsLain);
        }else{
            $artikelsTerkait = $artikelsKategori;
        }

        $idList = $artikelsTerkait->pluck('id');
        $artikelsTerkait = $artikelsTerkait->chunk(2);

        $artikelsBKCUNew = Artikel::where('id_cu',0)->whereNotIn('id',$idList)->orderBy('created_at','desc')->take(5)->get();

        $artikelsCUNew = Artikel::where('id_cu',$cu->id)->whereNotIn('id',$idList)->orderBy('created_at','desc')->take(5)->get();

         // seo
         SEO::setTitle($artikel->name . ' - CU ' . $cu->name);
         SEO::setDescription(str_limit(strip_tags($artikel->content),200));
         SEO::opengraph()->setUrl(url()->full());
         if($artikel->gambar){
            SEO::opengraph()->addImage(route('home') . '/images/artikel/' . $artikel->gambar. '.jpg');
         }

        return view('cu.artikelLihat', compact('artikel','artikelsTerkait','artikelsBKCUNew','artikelsCUNew'));
    }

    public function artikelCari()
    {
        $subdomain = Route::input('cu');

        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$subdomain)->first();

        if(!$cu){
            abort(404);
        }

        $title = 'Artikel ' .request('cari');
        $subtitle = 'Menampilkan artikel ' . request('cari');
        $tipe = 'semua';

        $artikels = Artikel::with('kategori','penulis')->where('id_cu',$cu->id)->where('terbitkan',1)->where('name', 'like', '%' .request('cari'). '%')->orderBy('created_at','desc');

		$queries['cari_column'] = 'name';
        $queries['cari'] = request('cari');
        
        $artikels = $artikels->paginate(8)->appends($queries);

         // seo
         SEO::setTitle($title . ' - CU ' . $cu->name);
         SEO::setDescription($subtitle);
         SEO::opengraph()->setUrl(url()->full());

        return view('cu.artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function dokumen()
    {
        $subdomain = Route::input('cu');
        
        $cu = Cu::with('provinces')->withCount('hasTp')->where('slug',$subdomain)->first();

        if(!$cu){
            abort(404);
        }

        $title = "Dokumen";
        $subtitle = 'Menampilkan ' . $title;

        $dokumens = Dokumen::select('id','id_cu','name','status','filename','keterangan','tipe','format','link')
		->where('status','PUBLIK')
		->where('id_cu',$cu->id)
        ->get();

        SEO::setTitle($title . ' - CU ' . $cu->name);
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('cu.dokumen', compact('title','subtitle','dokumens'));
    }

    public function download_file($filename){
        $destinationPath = public_path() . "/files/dokumen/";
        $file= $destinationPath . $filename;

        return Response::download($file);
    }
}
