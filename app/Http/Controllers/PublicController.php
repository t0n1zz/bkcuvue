<?php

namespace App\Http\Controllers;

use DB;
use SEO;
use App\Cu;
use Response;
use App\Artikel;
use App\Kegiatan;
use App\Download;
use App\Dokumen;
use App\Aktivis;
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

        $cus = Cu::with('Provinces')->withCount('hasTp')->inRandomOrder()->take(6)->get();

        // seo
        SEO::setTitle('Home - PUSKOPCUINA');
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
        SEO::setTitle('Artikel - PUSKOPCUINA');
        SEO::setDescription('Artikel PUSKOPCUINA');
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function artikelKategori($slug)
    {
        $kategori = ArtikelKategori::where('slug',$slug)->first();

        if(!$kategori){
            abort(404);
        }

        $title = $kategori->name;
        $subtitle = 'Menampilkan ' . $kategori->name;
        $tipe = 'kategori';
        
        $artikels = Artikel::with('penulis')->where('id_cu',0)->where('id_artikel_kategori',$kategori->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

        // seo
        SEO::setTitle($title. ' - PUSKOPCUINA');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('artikel', compact('title','subtitle','tipe','artikels'));
    }

    public function artikelPenulis($slug)
    {
        $penulis = ArtikelPenulis::where('slug',$slug)->first();

        if(!$penulis){
            abort(404);
        }

        $title = 'Artikel oleh ' . $penulis->name;
        $subtitle = 'Menampilkan artikel yang ditulis oleh ' . $penulis->name;
        $tipe = 'penulis';
        
        $artikels = Artikel::with('kategori')->where('id_cu',0)->where('id_artikel_penulis',$penulis->id)->where('terbitkan',1)->orderBy('created_at','desc')->paginate(8);

         // seo
         SEO::setTitle($title. ' - PUSKOPCUINA');
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

        if(!$artikel){
            abort(404);
        }

        if($artikel && $artikel->kategori){
            $artikelsKategori = Artikel::where('id','!=',$artikel->id)->where('id_cu',0)->where('id_artikel_kategori',$artikel->kategori->id)->inRandomOrder()->take(4)->get();
            $artikelsKategoriCount = $artikelsKategori->count();
        }else{
            $artikelsKategoriCount = 0;
        }
        
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
         SEO::setTitle($artikel->name. ' - PUSKOPCUINA');
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

        $artikels = Artikel::with('kategori','penulis')->where('id_cu',0)->where('terbitkan',1)->where('name', 'like', '%' .request('cari'). '%')->orderBy('created_at','desc')->paginate(8);

				$q_anggotaCuCuueries['cari_column'] = 'name';
        $q_anggotaCuCuueries['cari'] = request('cari');
        3;

        SEO::setTitle($title . ' - PUSKOPCUINA');
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
        SEO::setTitle('Diklat - PUSKOPCUINA');
        SEO::setDescription('Diklat PUSKOPCUINA');
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('diklat', compact('title','subtitle','kegiatans'));
    }

    public function diklatLihat($slug)
    {
        $diklat = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->whereIn('status',[1,2,3,4,5])->where('slug', $slug)->first();

        if(!$diklat){
            abort(404);
        }

         // seo
         SEO::setTitle($diklat->name. ' - PUSKOPCUINA');
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

        SEO::setTitle($title . ' - PUSKOPCUINA');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('cu', compact('title','subtitle','cus','provinces'));
    }

    public function dokumen()
    {
        $title = "Dokumen";
        $subtitle = 'Menampilkan ' . $title;

        $dokumens = Dokumen::select('id','id_cu','name','status','filename','keterangan','tipe','format','link')
				->where('status','PUBLIK')
				->where('id_cu',0)
        ->get();

        SEO::setTitle($title . ' - PUSKOPCUINA');
        SEO::setDescription($subtitle);
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

        return view('dokumen', compact('title','subtitle','dokumens'));
    }

    public function download_file($filename){
        $destinationPath = public_path() . "/files/dokumen/";
        $file= $destinationPath . $filename;

        return Response::download($file);
    }

    public function profile()
    {
        SEO::setTitle('Profile - PUSKOPCUINA');
        SEO::setDescription('PUSKOPCUINA (awalnya BK3D Kalbar) berdiri pada tanggal 27 November 1988 di Pontianak.
        Sebagai credit union sekunder,PUSKOPCUINA aktif mempromosikan dan memfasilitasi berdirinya credit union - credit union primer.
        ');  
        SEO::opengraph()->setUrl(url()->full());
        SEO::opengraph()->addProperty('type', 'articles');

				$pengurus = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				}])->whereHas('pekerjaan', function($query){
					$query->where('tingkat',1)->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				})->select('id','name','gambar')->orderBy('name')->get();

				$pengurus = $this->profileFormatQuery($pengurus);

				$pengawas = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				}])->whereHas('pekerjaan', function($query){
					$query->where('tingkat',2)->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				})->select('id','name','gambar')->orderBy('name')->get();

				$pengawas = $this->profileFormatQuery($pengawas);

				$penasihat = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				}])->whereHas('pekerjaan', function($query){
					$query->where('tingkat',4)->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				})->select('id','name','gambar')->orderBy('name')->get();

				$penasihat = $this->profileFormatQuery($penasihat);

				$manajemen = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				}])->whereHas('pekerjaan', function($query){
					$query->whereIn('tingkat',[5,6,7,8,9,12])->where('tipe',3)->where('id_tempat',1)
					->where('status',1);
				})->select('id','name','gambar')->orderBy('name')->get();

				$manajemen = $this->profileFormatQuery($manajemen);

        return view('profile', compact('pengurus','pengawas','penasihat','manajemen'));
    }

		public function profileFormatQuery($table_data){
			foreach($table_data as $t){
				$t->pekerjaan_aktif = '';

				if(isset($t->pekerjaans[0])){
					if($t->pekerjaans[0]->status == 1){
						$t->pekerjaan_aktif = $t->pekerjaans[0];
						if($t->pekerjaan_aktif->tipe == 3){
							$t->pekerjaan_aktif->cu->name = 'PUSKOPCUINA';
						}
						if ($t->pekerjaan_aktif->tingkat == 1) {
							$t->pekerjaan_aktif->tingkat_name = 'Pengurus';
						} else if($t->pekerjaan_aktif->tingkat == 2) {
							$t->pekerjaan_aktif->tingkat_name = 'Pengawas';
						}	else if($t->pekerjaan_aktif->tingkat == 3) {
							$t->pekerjaan_aktif->tingkat_name = 'Komite';
						} else if($t->pekerjaan_aktif->tingkat == 4) {
							$t->pekerjaan_aktif->tingkat_name = 'Penasihat';
						} else if($t->pekerjaan_aktif->tingkat == 5) {
							$t->pekerjaan_aktif->tingkat_name = 'Senior Manajer';
						} else if($t->pekerjaan_aktif->tingkat == 6) {
							$t->pekerjaan_aktif->tingkat_name = 'Manajer';
						} else if($t->pekerjaan_aktif->tingkat == 7) {
							$t->pekerjaan_aktif->tingkat_name = 'Supervisor';
						} else if($t->pekerjaan_aktif->tingkat == 8) {
							$t->pekerjaan_aktif->tingkat_name = 'Staf';
						} else if($t->pekerjaan_aktif->tingkat == 9) {
							$t->pekerjaan_aktif->tingkat_name = 'Kontrak';
						} else if($t->pekerjaan_aktif->tingkat == 10) {
							$t->pekerjaan_aktif->tingkat_name = 'Kolektor';
						} else if($t->pekerjaan_aktif->tingkat == 11) {
							$t->pekerjaan_aktif->tingkat_name = 'Kelompok Inti';
						} else if($t->pekerjaan_aktif->tingkat == 12) {
							$t->pekerjaan_aktif->tingkat_name = 'Supporting Unit';
						} else if($t->pekerjaan_aktif->tingkat == 13) {
							$t->pekerjaan_aktif->tingkat_name = 'Vendor sMartCU';
						}
					}
				}
			}
			return $table_data;
		}

    public function admins()
    {
        return view('admins');
    }

    public function testroute()
    {    
      abort(404);
				
			// $kelas = \App\JalinanIuran::with('anggota.anggota_cu','anggota.anggota_cu_cu')->findOrFail(1);
			// $produks = \App\ProdukCu::where('id_cu',22)->where('jalinan',1)->get();
			// $kelas = \App\JalinanIuranAnggota::with('anggota_cu','anggota_cu_cu')->where('jalinan_iuran_id',1)->where('lokasi', 5)->get();

			// $result = array();
			// foreach($kelas as $anggota){
			// 	$result[$anggota->anggota_cu_id] = $anggota;	
			// }

			// foreach($result as $r){
			// 	foreach($kelas as $anggota){
			// 		if($r->anggota_cu_id == $anggota->anggota_cu_id){
			// 			foreach($produks as $produk){
			// 				if($produk->id == $anggota->produk_cu_id){
			// 					$r["X$produk->id"] = $r->saldo;
			// 				}
			// 			}
			// 		}
			// 	}
			// }

			// return response()->json($result);

			// $this->permission();
    }

		public function iuran(){
			$cu = 22;
			$dateString = '2021-12-01';
			$lastDateOfMonth = date("Y-m-t", strtotime($dateString));

			$kelas = \App\JalinanIuran::create([
				'id_cu' => $cu,
				'periode' => $dateString,
				'status' => '0'
			]);

			$produk_data = \App\ProdukCu::where('id_cu',$cu)->select('id', 'id_cu', 'name','tipe','jalinan')->where('jalinan', 1)->get();

			$total_simpanan = 0;
			$total_pinjaman = 0;
			$total_sheet_3 = 0;
			$kurang_sheet_3 = 0;
			$plafon_sheet_3 = 0;
			$total_sheet_4 = 0;
			$kurang_sheet_4 = 0;
			$plafon_sheet_4 = 0;
			$total_sheet_5 = 0;
			$kurang_sheet_5 = 0;
			$plafon_sheet_5 = 0;
			$total_sheet_6_dulu = 0;
			$total_sheet_6_sekarang = 0;
			$kurang_sheet_6 = 0;
			$plafon_sheet_6 = 0;
			$total_sheet_7_dulu = 0;
			$total_sheet_7_sekarang = 0;
			$kurang_sheet_7 = 0;
			$plafon_sheet_7 = 0;
			$total_sheet_8 = 0;
			$kurang_sheet_8 = 0;
			$total_sheet_9 = 0;
			$kurang_sheet_9 = 0;
			$total_sheet_10 = 0;
			$kurang_sheet_10 = 0;
			$total_sheet_11 = 0;
			$kurang_sheet_11 = 0;
			$total_sheet_12 = 0;
			$kurang_sheet_12 = 0;
			$plafon_sheet_12 = 0;
			$total_sheet_13 = 0;
			$kurang_sheet_13 = 0;
			$plafon_sheet_13 = 0;
			$total_sheet_14 = 0;
			$kurang_sheet_14 = 0;
			$plafon_sheet_14 = 0;
			$total_sheet_15 = 0;
			$kurang_sheet_15 = 0;
			$total_sheet_16 = 0;
			$kurang_sheet_16 = 0;
			$total_sheet_17 = 0;
			$kurang_sheet_17 = 0;
			$total_sheet_18 = 0;
			$kurang_sheet_18 = 0;
			$total_sheet_19 = 0;
			$kurang_sheet_19 = 0;
			$total_sheet_20 = 0;
			$kurang_sheet_20 = 0;
			$total_sheet_21 = 0;
			$kurang_sheet_21 = 0;
			$plafon_sheet_21 = 0;
			$total_sheet_22 = 0;
			$kurang_sheet_22 = 0;
			$plafon_sheet_22 = 0;
			$total_sheet_23 = 0;
			$kurang_sheet_23 = 0;
			$total_sheet_24 = 0;
			$kurang_sheet_24 = 0;
			$total_sheet_25 = 0;
			$kurang_sheet_25 = 0;
			$total_sheet_26 = 0;
			$kurang_sheet_26 = 0;

			$anggota_data = \App\AnggotaCuCu::with('anggota_cu_simple','anggota_produk_cu.transaksi')->where('cu_id', $cu)
			->where('tanggal_masuk','<',$lastDateOfMonth)
			->whereHas('anggota_cu', function ($q_anggotaCuCu){
					$q_anggotaCuCu->whereNull('status_jalinan');
			})
			->select('id','anggota_cu_id','cu_id')
			->chunk(1000, function ($qs) use (
				&$kelas,
				&$produk_data, 
				&$total_simpanan, 
				&$total_simpanan_kurang, 
				&$total_pinjaman, 
				&$total_pinjaman_kurang, 
				&$total_sheet_3,
				&$kurang_sheet_3,
				&$plafon_sheet_3,
				&$total_sheet_4,
				&$kurang_sheet_4,
				&$plafon_sheet_4,
				&$total_sheet_5,
				&$kurang_sheet_5,
				&$plafon_sheet_5,
				&$total_sheet_6_dulu,
				&$total_sheet_6_sekarang,
				&$kurang_sheet_6,
				&$plafon_sheet_6,
				&$total_sheet_7_dulu,
				&$total_sheet_7_sekarang,
				&$kurang_sheet_7,
				&$plafon_sheet_7,
				&$total_sheet_8,
				&$kurang_sheet_8,
				&$total_sheet_9,
				&$kurang_sheet_9,
				&$total_sheet_10,
				&$kurang_sheet_10,
				&$total_sheet_11,
				&$kurang_sheet_11,
				&$total_sheet_12,
				&$kurang_sheet_12,
				&$plafon_sheet_12,
				&$total_sheet_13,
				&$kurang_sheet_13,
				&$plafon_sheet_13,
				&$total_sheet_14,
				&$kurang_sheet_14,
				&$plafon_sheet_14,
				&$total_sheet_15,
				&$kurang_sheet_15,
				&$total_sheet_16,
				&$kurang_sheet_16,
				&$total_sheet_17,
				&$kurang_sheet_17,
				&$total_sheet_18,
				&$kurang_sheet_18,
				&$total_sheet_19,
				&$kurang_sheet_19,
				&$total_sheet_20,
				&$kurang_sheet_20,
				&$total_sheet_21,
				&$kurang_sheet_21,
				&$plafon_sheet_21,
				&$total_sheet_22,
				&$kurang_sheet_22,
				&$plafon_sheet_22,
				&$total_sheet_23,
				&$kurang_sheet_23,
				&$total_sheet_24,
				&$kurang_sheet_24,
				&$total_sheet_25,
				&$kurang_sheet_25,
				&$total_sheet_26,
				&$kurang_sheet_26
			){
				foreach($qs as $q_anggotaCuCu){
					foreach($q_anggotaCuCu->anggota_produk_cu as $q_anggotaProdukCu){
						foreach($produk_data as $produk){
							// saldo semua produk
							if($produk->id == $q_anggotaProdukCu->produk_cu_id){
								$produk->saldo += $q_anggotaProdukCu->saldo;

								\App\JalinanIuranProduk::create([
									'jalinan_iuran_id' => $kelas->id,
									'produk_cu_id' => $q_anggotaProdukCu->id,
									'saldo' => $q_anggotaProdukCu->saldo,
								]);
							}
											
							if($q_anggotaProdukCu->pengurang != '1'){
								// simpanan
								if($produk->tipe == 'Simpanan Pokok' || $produk->tipe == 'Simpanan Wajib' || $produk->tipe == 'Simpanan Non Saham'){
									
									if($produk->id == $q_anggotaProdukCu->produk_cu_id){
										// total simpanan
										$total_simpanan += $q_anggotaProdukCu->saldo;

										$selisih_usia = $q_anggotaCuCu->usia() - $q_anggotaCuCu->anggota_cu_simple->usia();
										$usia_masuk = $q_anggotaCuCu->usia() - $selisih_usia;

										// sheet 3
										if($q_anggotaCuCu->anggota_cu_simple->usia() >= 0 && $q_anggotaCuCu->anggota_cu_simple->usia() <= 1){
											$total_sheet_3 += $q_anggotaProdukCu->saldo;
											$plafon_sheet_3 += 5000000;
											if($q_anggotaProdukCu->saldo > 5000000){
												$kurang_sheet_3 += ($q_anggotaProdukCu->saldo - 5000000);
											}

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'3');
										}

										// sheet 4
										if($q_anggotaCuCu->anggota_cu_simple->usia() > 1 && $q_anggotaCuCu->anggota_cu_simple->usia() <= 70){
											$total_sheet_4 += $q_anggotaProdukCu->saldo;
											$plafon_sheet_4 += 50000000;
											if($q_anggotaProdukCu->saldo > 50000000){
												$kurang_sheet_4 += ($q_anggotaProdukCu->saldo - 50000000);
											}

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'4');
										}

										// sheet 5
										if($usia_masuk >= 60 && $usia_masuk <= 70){
											$total_sheet_5 += $q_anggotaProdukCu->saldo;
											$plafon_sheet_5 += 10000000;
											if($q_anggotaProdukCu->saldo > 10000000){
												$kurang_sheet_5 += ($q_anggotaProdukCu->saldo - 10000000);
											}

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'5');
										}

										if($q_anggotaCuCu->anggota_cu_simple->usia() > 70){
											// sheet 6
											if($usia_masuk < 60){
												$total_sheet_6_sekarang += $q_anggotaProdukCu->saldo;
												foreach($q_anggotaProdukCu->transaksi as $trans){
													$selisih_usia_trans = $q_anggotaCuCu->usia() - $trans->usia();
													$usia_masuk_trans = $q_anggotaCuCu->usia() - $selisih_usia_trans;

													if($usia_masuk_trans <= 70){
														$total_sheet_6_lama = $trans->saldo_akhir;
														break;
													}
												}
												if($total_sheet_6_lama > 50000000){
													$plafon_sheet_6 += 50000000;
													$kurang_sheet_6 += ($total_sheet_6_lama - 50000000);
												}else{
													$plafon_sheet_6 += total_sheet_6_lama;
												}

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'6');
											}
											
											// sheet 7
											if($usia_masuk >= 60 && $usia_masuk <= 70){
												$total_sheet_7_sekarang += $q_anggotaProdukCu->saldo;
												foreach($q_anggotaProdukCu->transaksi as $trans){
													$selisih_usia_trans = $q_anggotaCuCu->usia() - $trans->usia();
													$usia_masuk_trans = $q_anggotaCuCu->usia() - $selisih_usia_trans;

													if($usia_masuk_trans <= 70){
														$total_sheet_7_lama = $trans->saldo_akhir;
														break;
													}
												}
												if($total_sheet_7_lama > 10000000){
													$plafon_sheet_7 += 10000000;
													$kurang_sheet_7 += ($total_sheet_7_lama - 10000000);
												}else{
													$plafon_sheet_7 += total_sheet_7_lama;
												}

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'7');
											}
										}
	
										// sheet 8
										if($usia_masuk >= 70){
											$total_sheet_8 += $q_anggotaProdukCu->saldo;
											$kurang_sheet_8 += $q_anggotaProdukCu->saldo;

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'8');
										}
									}

								//pinjaman	
								}else{
									
									if($produk->id == $q_anggotaProdukCu->produk_cu_id){
										// total pinjaman
										$total_pinjaman += $q_anggotaProdukCu->saldo;

										$selisih_usia_pinj = $q_anggotaCuCu->usia() - $q_anggotaProdukCu->usia();
										$usia_cair = $q_anggotaCuCu->usia() - $selisih_usia_pinj;
										$hari_cair = $q_anggotaCuCu->hari() - $q_anggotaProdukCu->hari();

										// pinjaman kapitalisasi
										if($produk->tipe == 'Pinjaman Kapitalisasi'){
											// sheet 9
											if($q_anggotaCuCu->anggota_cu_simple->usia() < 30){
												$total_sheet_9 += $q_anggotaProdukCu->saldo;
												$kurang_sheet_9 += $q_anggotaProdukCu->saldo;

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'9');
											}
											// sheet 14
											if($q_anggotaProdukCu->saldo > 25000000){
												$plafon_sheet_14 += 25000000;
												$total_sheet_9 += $q_anggotaProdukCu->saldo;
												$kurang_sheet_13 += ($q_anggotaProdukCu->saldo - 25000000);

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'14');
											}
											// sheet 16
											if($hari_cair < 30){
												$total_sheet_16 += $q_anggotaProdukCu->saldo;
												$kurang_sheet_16 += $q_anggotaProdukCu->saldo;

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'16');
											}

											// sheet 18
											if($q_anggotaCuCu->dpd > 90){
												$total_sheet_18 += $q_anggotaProdukCu->saldo;
												$kurang_sheet_18 += $q_anggotaProdukCu->saldo;

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'18');
											}

											// sheet 23
											if($q_anggotaCuCu->dpd > 1825){
												$total_sheet_23 += $q_anggotaProdukCu->saldo;
												$kurang_sheet_23 += $q_anggotaProdukCu->saldo;

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'23');
											}
											
										}

										// sheet 12
										if($produk->tipe == 'Pinjaman Umum'){
											if($usia_cair < 60){
												$total_sheet_12 += $q_anggotaProdukCu->saldo;
												$plafon_sheet_12 += 150000000;
												if($q_anggotaProdukCu->saldo > 150000000){
													$kurang_sheet_12 += ($q_anggotaProdukCu->saldo - 150000000);
												}

												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'12');
											}
										}
	
										// sheet 13
										if($usia_cair > 60 && $usia_cair <= 70){
											$total_sheet_13 += $q_anggotaProdukCu->saldo;
											$plafon_sheet_13 += 50000000;
											if($q_anggotaProdukCu->saldo > 50000000){
												$kurang_sheet_13 += ($q_anggotaProdukCu->saldo - 50000000);
											}

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'13');
										}

										// sheet 15
										if($q_anggotaCuCu->anggota_cu_simple->usia() > 70){
											$total_sheet_15 += $q_anggotaProdukCu->saldo;
											$kurang_sheet_15 += $q_anggotaProdukCu->saldo;

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'15');
										}

										// sheet 17
										if($q_anggotaCuCu->dpd > 180){
											$total_sheet_17 += $q_anggotaProdukCu->saldo;
											$kurang_sheet_17 += $q_anggotaProdukCu->saldo;

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'17');
										}

										// sheet 21
										if($produk->tipe == 'Pinjaman Produktif'){
											if($usia_cair < 55){
												if($q_anggotaProdukCu->bulan() <= 36){
													$total_sheet_21 += $q_anggotaProdukCu->saldo;
													$plafon_sheet_21 += 300000000;
													if($q_anggotaProdukCu->saldo > 300000000){
														$kurang_sheet_21 += ($q_anggotaProdukCu->saldo - 300000000);
													}
													$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'21');
												}
											}
										}

										// sheet 24
										if($q_anggotaCuCu->dpd > 5475){
											$total_sheet_24 += $q_anggotaProdukCu->saldo;
											$kurang_sheet_24 += $q_anggotaProdukCu->saldo;

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'24');
										}

										// sheet 26
										if($q_anggotaCuCu->usia() <= 17){
											$total_sheet_26 += $q_anggotaProdukCu->saldo;
											$kurang_sheet_26 += $q_anggotaProdukCu->saldo;

											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'26');
										}
									}
								}
								// sheet 10
								if($produk->id == $q_anggotaProdukCu->produk_cu_id){
									$sp = 0;
									$sw = 0;
									$snh = 0;
									if($produk->tipe == 'Simpanan Pokok'){
										$sp = $q_anggotaProdukCu->saldo;
									}
									if($produk->tipe == 'Simpanan Wajib'){
										$sw = $q_anggotaProdukCu->saldo;
									}
									if($produk->tipe == 'Simpanan Non Saham'){
										$snh = $q_anggotaProdukCu->saldo;
									}
								}
								if($produk->tipe == 'Pinjaman Kapitalisasi'){
									if($q_anggotaCuCu->dpd > 90){
										$total_simp = $sp + $sw + $snh;
										if($q_anggotaProdukCu->saldo > $total_simp){
											$kurang_sheet_10 += $q_anggotaProdukCu->saldo;
										}else{
											$pengurang = $total_simp - $q_anggotaProdukCu->saldo;
											$kurang_sheet_10 += $pengurang;
										}
										$total_sheet_10 += $q_anggotaProdukCu->saldo;

										$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'10');
									}
								}
							}else{
								if($produk->id == $q_anggotaProdukCu->produk_cu_id){

									//sheet 11
									$total_sheet_11 += $q_anggotaProdukCu->saldo;
									$kurang_sheet_11 += $q_anggotaProdukCu->saldo;

									//sheet 19
									$total_sheet_19 += $q_anggotaProdukCu->saldo;
									$kurang_sheet_19 += $q_anggotaProdukCu->saldo;

									//sheet 20
									$total_sheet_20 += $q_anggotaProdukCu->saldo;
									$kurang_sheet_20 += $q_anggotaProdukCu->saldo;

									//sheet 25
									$total_sheet_25 += $q_anggotaProdukCu->saldo;
									$kurang_sheet_25 += $q_anggotaProdukCu->saldo;

									$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'25');
								}
							}
						}
					}
				}
			});

			$kelas->update([
				'total_simpanan' => $total_simpanan,
				'total_pinjaman' => $total_pinjaman,
				'total_sheet_3' => $total_sheet_3,
				'kurang_sheet_3' => $kurang_sheet_3,
				'plafon_sheet_3' => $plafon_sheet_3,
				'total_sheet_4' => $total_sheet_4,
				'kurang_sheet_4' => $kurang_sheet_4,
				'plafon_sheet_4' => $plafon_sheet_4,
				'total_sheet_5' => $total_sheet_5,
				'kurang_sheet_5' => $kurang_sheet_5,
				'plafon_sheet_5' => $plafon_sheet_5,
				'total_sheet_6_dulu' => $total_sheet_6_dulu,
				'total_sheet_6_sekarang' => $total_sheet_6_sekarang,
				'kurang_sheet_6' => $kurang_sheet_6,
				'plafon_sheet_6' => $plafon_sheet_6,
				'total_sheet_7_dulu' => $total_sheet_7_dulu,
				'total_sheet_7_sekarang' => $total_sheet_7_sekarang,
				'kurang_sheet_7' => $kurang_sheet_7,
				'plafon_sheet_7' => $plafon_sheet_7,
				'kurang_sheet_8' => $kurang_sheet_8,
				'total_sheet_8' => $total_sheet_8,
				'kurang_sheet_9' => $kurang_sheet_9,
				'total_sheet_9' => $total_sheet_9,
				'kurang_sheet_10' => $kurang_sheet_10,
				'total_sheet_10' => $total_sheet_10,
				'kurang_sheet_11' => $kurang_sheet_11,
				'total_sheet_11' => $total_sheet_11,
				'kurang_sheet_12' => $kurang_sheet_12,
				'total_sheet_12' => $total_sheet_12,
				'kurang_sheet_13' => $kurang_sheet_13,
				'total_sheet_13' => $total_sheet_13,
				'kurang_sheet_14' => $kurang_sheet_14,
				'total_sheet_14' => $total_sheet_14,
				'kurang_sheet_15' => $kurang_sheet_15,
				'total_sheet_15' => $total_sheet_15,
				'kurang_sheet_16' => $kurang_sheet_16,
				'total_sheet_16' => $total_sheet_16,
				'kurang_sheet_17' => $kurang_sheet_17,
				'total_sheet_17' => $total_sheet_17,
				'kurang_sheet_18' => $kurang_sheet_18,
				'total_sheet_18' => $total_sheet_18,
				'kurang_sheet_19' => $kurang_sheet_19,
				'total_sheet_19' => $total_sheet_19,
				'kurang_sheet_20' => $kurang_sheet_20,
				'total_sheet_20' => $total_sheet_20,
				'kurang_sheet_21' => $kurang_sheet_21,
				'total_sheet_21' => $total_sheet_21,
				'kurang_sheet_22' => $kurang_sheet_22,
				'total_sheet_22' => $total_sheet_22,
				'kurang_sheet_23' => $kurang_sheet_23,
				'total_sheet_23' => $total_sheet_23,
				'kurang_sheet_24' => $kurang_sheet_24,
				'total_sheet_24' => $total_sheet_24,
				'kurang_sheet_25' => $kurang_sheet_25,
				'total_sheet_25' => $total_sheet_25,
				'kurang_sheet_26' => $kurang_sheet_26,
				'total_sheet_26' => $total_sheet_26,
			]);

			return response()
			->json([
					'produk_data' => $produk_data,
					'total_simpanan' => $total_simpanan,
					'total_pinjaman' => $total_pinjaman,
					'total_sheet_3' => $total_sheet_3,
					'kurang_sheet_3' => $kurang_sheet_3,
					'plafon_sheet_3' => $plafon_sheet_3,
					'total_sheet_4' => $total_sheet_4,
					'kurang_sheet_4' => $kurang_sheet_4,
					'plafon_sheet_4' => $plafon_sheet_4,
					'total_sheet_5' => $total_sheet_5,
					'kurang_sheet_5' => $kurang_sheet_5,
					'plafon_sheet_5' => $plafon_sheet_5,
					'total_sheet_6_dulu' => $total_sheet_6_dulu,
					'total_sheet_6_sekarang' => $total_sheet_6_sekarang,
					'kurang_sheet_6' => $kurang_sheet_6,
					'plafon_sheet_6' => $plafon_sheet_6,
					'total_sheet_7_dulu' => $total_sheet_7_dulu,
					'total_sheet_7_sekarang' => $total_sheet_7_sekarang,
					'kurang_sheet_7' => $kurang_sheet_7,
					'plafon_sheet_7' => $plafon_sheet_7,
					'kurang_sheet_8' => $kurang_sheet_8,
					'total_sheet_8' => $total_sheet_8,
					'kurang_sheet_9' => $kurang_sheet_9,
					'total_sheet_9' => $total_sheet_9,
					'kurang_sheet_10' => $kurang_sheet_10,
					'total_sheet_10' => $total_sheet_10,
					'kurang_sheet_11' => $kurang_sheet_11,
					'total_sheet_11' => $total_sheet_11,
					'kurang_sheet_12' => $kurang_sheet_12,
					'total_sheet_12' => $total_sheet_12,
					'kurang_sheet_13' => $kurang_sheet_13,
					'total_sheet_13' => $total_sheet_13,
					'kurang_sheet_14' => $kurang_sheet_14,
					'total_sheet_14' => $total_sheet_14,
					'kurang_sheet_15' => $kurang_sheet_15,
					'total_sheet_15' => $total_sheet_15,
					'kurang_sheet_16' => $kurang_sheet_16,
					'total_sheet_16' => $total_sheet_16,
					'kurang_sheet_17' => $kurang_sheet_17,
					'total_sheet_17' => $total_sheet_17,
					'kurang_sheet_18' => $kurang_sheet_18,
					'total_sheet_18' => $total_sheet_18,
					'kurang_sheet_19' => $kurang_sheet_19,
					'total_sheet_19' => $total_sheet_19,
					'kurang_sheet_20' => $kurang_sheet_20,
					'total_sheet_20' => $total_sheet_20,
					'kurang_sheet_21' => $kurang_sheet_21,
					'total_sheet_21' => $total_sheet_21,
					'kurang_sheet_22' => $kurang_sheet_22,
					'total_sheet_22' => $total_sheet_22,
					'kurang_sheet_23' => $kurang_sheet_23,
					'total_sheet_23' => $total_sheet_23,
					'kurang_sheet_24' => $kurang_sheet_24,
					'total_sheet_24' => $total_sheet_24,
					'kurang_sheet_25' => $kurang_sheet_25,
					'total_sheet_25' => $total_sheet_25,
					'kurang_sheet_26' => $kurang_sheet_26,
					'total_sheet_26' => $total_sheet_26,
			]);
		}

		public function snapshot($kelas, $q_anggotaCuCu, $q_anggotaProdukCu,$lokasi){
			\App\JalinanIuranAnggota::create([
				'jalinan_iuran_id' => $kelas->id,
				'anggota_cu_id' => $q_anggotaCuCu->anggota_cu_id,
				'anggota_cu_cu_id' => $q_anggotaCuCu->id,
				'anggota_produk_cu_id' => $q_anggotaProdukCu->id,
				'produk_cu_id' => $q_anggotaProdukCu->produk_cu_id,
				'saldo' => $q_anggotaProdukCu->saldo,
				'umur_masuk' => $q_anggotaCuCu->tanggal_masuk,
				'umur_sekarang' => $q_anggotaCuCu->anggota_cu->tanggal_lahir,
				'lokasi' => $lokasi
			]);
		}

		public function migrate_tp(){
			$kelas = \App\AnggotaCu::whereIn('nik',[
				'6109053012720001',
				'6109052508430001',
			])->select('id','nik')->get();

			foreach($kelas as $k){
				$kelas2 = \App\AnggotaCuCu::where('anggota_cu_id', $k->id)->whereNull('tanggal_keluar')->first();
				$kelas2->tanggal_keluar = '2021-09-21';
				$kelas2->keterangan_keluar = 'mutasi anggota';
				$kelas2->update();

				\App\AnggotaCuCu::create([
					'anggota_cu_id' => $k->id,
					'cu_id' => '41',
					'tp_id' => '132',
					'no_ba' => $kelas2->no_ba,
					'tanggal_masuk' => '2021-09-21',
					'keterangan_masuk' => 'mutasi anggota'
				]);
			}
		}

		public function permission(){
			// create permission
			\Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'index_surat_kategori']); 
			\Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'create_surat_kategori']); 
			\Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'update_surat_kategori']); 
			\Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'destroy_surat_kategori']);
			
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
