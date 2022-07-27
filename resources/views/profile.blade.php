@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- Page Title -->
<section id="page-title" class="page-title-mini">

  <div class="container clearfix">
    <h1>Profile</h1>
    <span>Pengenalan singkat mengenai PUSKOPCUINA</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item">Tentang Kami</li>
      <li class="breadcrumb-item active" aria-current="page">Profile Us</li>  
    </ol>
  </div>

</section><!-- #page-title end -->

<!-- Content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <!-- Title & image -->
      <div class="col_full">

        <div class="heading-block center nobottomborder">
          <h2>PUSKOPCUINA</h2>
          <span>Pengenalan singkat mengenai PUSKOPCUINA</span>
        </div>

        <!-- <div class="fslider" data-pagi="false" data-animation="fade">
          <div class="flexslider">
            <div class="slider-wrap">
              <div class="slide"><a href="#"><img src="{{ asset('images/bkcu.jpg') }}" alt="About Image"></a></div>
              <div class="slide"><a href="#"><img src="{{ asset('images/bkcu2.jpg') }}" alt="About Image"></a></div>
            </div>
          </div>
        </div> -->

      </div>

      <div class="promo promo-light bottommargin">
        <h3>Siapakah Kami?</h3>
        PUSKOPCUINA (awalnya BK3D Kalbar) berdiri pada tanggal 27 November 1988 di Pontianak.<br/>
        PUSKOPCUINA aktif mempromosikan dan memfasilitasi berdirinya credit union - credit union primer.<br/>
        <br/>
        Jaringan PUSKOPCUINA tersebar hampir ke seluruh wilayah Republik Indonesia.<br/>
        Mayoritas credit union anggota PUSKOPCUINA berkembang dengan baik; aset dan jumlah anggota cukup kencang peningkatannya.<br/><br/>
        Walaupun demikian, kami tetap menyadari masih diperlukan pembenahan-pembenahan baik internal maupun eksternal pada masa yang akan datang agar credit union mampu menghadapi berbagai dinamika yang terjadi.
      </div>

      <div class="clear"></div>

      <!-- data count -->
      <div class="col_one_fourth center">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-briefcase"></i>
        <div class="counter counter-large" style="color: #e74c3c;"><span data-from="10" data-to="{{ $manajemenBKCUCount }}" data-refresh-interval="50" data-speed="1200"></span></div>
        <h5>Manajemen PUSKOPCUINA</h5>
      </div>

      <div class="col_one_fourth center">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-building"></i>
        <div class="counter counter-large" style="color: #3498db;"><span data-from="10" data-to="{{ $cuCount }}" data-refresh-interval="50" data-speed="1000"></span></div>
        <h5>Credit Union</h5>
      </div>

      <div class="col_one_fourth center">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-line2-users"></i>
        <div class="counter counter-large" style="color: #16a085;"><span data-from="1000" data-to="{{ $dataGerakan->total_anggota }}" data-refresh-interval="50" data-speed="1900"></span></div>
        <h5>Anggota Credit Union</h5>
      </div>

      <div class="col_one_fourth center col_last">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-users"></i>
        <div class="counter counter-large" style="color: #9b59b6;"><span data-from="100" data-to="{{ $aktivisCount }}" data-refresh-interval="30" data-speed="1800"></span></div>
        <h5>Aktivis Credit Union</h5>
      </div>

      <div class="line"></div>

      <div class="heading-block center nobottomborder">
        <h3>Pengelola PUSKOPCUINA</h3>
      </div>

      <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">
        <li class="activeFilter"><a href="#" data-filter="*">Semua</a></li>
        <li><a href="#" data-filter=".pengurus">Pengurus</a></li>
        <li><a href="#" data-filter=".pengawas">Pengawas</a></li>
        <li><a href="#" data-filter=".penasihat">Penasihat</a></li>
        <li><a href="#" data-filter=".manajemen">Manajemen</a></li>
      </ul>

      <div class="clear"></div>

      <div id="portfolio" class="portfolio grid-container portfolio-6 portfolio-masonry clearfix" data-layout="fitRows">
      @php $imagepath = 'images/aktivis/' @endphp

        <!-- pengurus -->
        @foreach($pengurus as $item1)
        <article class="portfolio-item pengurus">
          <div class="portfolio-image">
            @if(!empty($item1->gambar) && is_file($imagepath.$item1->gambar.".jpg"))
              <img src="{{ asset($imagepath . $item1->gambar . 'n.jpg') }}" alt="{{ $item1->name }}">
            @else
              <img src="{{ asset('images/no_image_man.jpg') }}" alt="{{ $item1->name }}">
            @endif
          </div>
          <div class="portfolio-desc">
            <h5 class="mb-0">{{ $item1->name }}</h5>
            <span> {{ $item1->pekerjaan_aktif ? $item1->pekerjaan_aktif->name : '' }}</span>
          </div>
        </article>
        @endforeach

        <!-- pengawas -->
        @foreach($pengawas as $item2)
        <article class="portfolio-item pengawas">
          <div class="portfolio-image">
            @if(!empty($item2->gambar) && is_file($imagepath.$item2->gambar.".jpg"))
              <img src="{{ asset($imagepath . $item2->gambar . '.jpg') }}" alt="{{ $item2->name }}">
            @else
              <img src="{{ asset('images/no_image_man.jpg') }}" alt="{{ $item2->name }}">
            @endif
          </div>
          <div class="portfolio-desc">
            <h5 class="mb-0">{{ $item2->name }}</h5>
            <span> {{ $item2->pekerjaan_aktif ? $item2->pekerjaan_aktif->name : '' }}</span>
          </div>
        </article>
        @endforeach

        <!-- penasihat -->
        @foreach($penasihat as $item3)
        <article class="portfolio-item penasihat">
          <div class="portfolio-image">
            @if(!empty($item3->gambar) && is_file($imagepath.$item3->gambar.".jpg"))
              <img src="{{ asset($imagepath . $item3->gambar . '.jpg') }}" alt="{{ $item3->name }}">
            @else
              <img src="{{ asset('images/no_image_man.jpg') }}" alt="{{ $item3->name }}">
            @endif
          </div>
          <div class="portfolio-desc">
            <h5 class="mb-0">{{ $item3->name }}</h5>
            <span> {{ $item3->pekerjaan_aktif ? $item3->pekerjaan_aktif->name : '' }}</span>
          </div>
        </article>
        @endforeach

        <!-- manajemen -->
        @foreach($manajemen as $item4)
        <article class="portfolio-item manajemen">
          <div class="portfolio-image">
            @if(!empty($item4->gambar) && is_file($imagepath.$item4->gambar.".jpg"))
              <img src="{{ asset($imagepath . $item4->gambar . '.jpg') }}" alt="{{ $item4->name }}">
            @else
              <img src="{{ asset('images/no_image_man.jpg') }}" alt="{{ $item4->name }}">
            @endif
          </div>
          <div class="portfolio-desc">
            <h5 class="mb-0">{{ $item4->name }}</h5>
            <span> {{ $item4->pekerjaan_aktif ? $item4->pekerjaan_aktif->name : '' }}</span>
          </div>
        </article>
        @endforeach
        
      </div> 

      <div class="line"></div>

      <div class="divcenter center clearfix" style="max-width: 900px;">
        <br/>
        <h1>Pelayanan Kami</h1>
        <h2>Kami menyediakan Solusi, Cerdas & Terpercaya bagi anggota Credit Union.</h2>
      </div>
      <div class="line"></div>
      <div class="col_one_third">
        <div class="feature-box fbox-small fbox-plain">
          <div class="fbox-icon">
            <a href="#"><i class="icon-support"></i></a>
          </div>
          <h3>Keuangan</h3>
          <p>Layanan keuangan berupa simpanan dan pinjaman kepada Credit Union anggota PUSKOPCUINA.</p>
        </div>
      </div>

      <div class="col_one_third">
        <div class="feature-box fbox-small fbox-plain">
          <div class="fbox-icon">
            <a href="#"><i class="icon-group"></i></a>
          </div>
          <h3>Pemberdayaan</h3>
          <p>Membantu anggota dalam mengusahakan untuk mampu menolong dirinya sendiri melalui pemberdayaan produk anggota</p>
        </div>
      </div>

      <div class="col_one_third col_last">
        <div class="feature-box fbox-small fbox-plain">
          <div class="fbox-icon">
            <a href="#"><i class="icon-book2"></i></a>
          </div>
          <h3>Diklat</h3>
          <p>Berbagai macam pendidikan dan pelatihan guna menciptakan insan Credit Union yang unggul.</p>
        </div>
      </div>

      <div class="clear"></div>

      <div class="col_one_third nobottommargin">
        <div class="feature-box fbox-small fbox-plain">
          <div class="fbox-icon">
            <a href="#"><i class="icon-desktop"></i></a>
          </div>
          <h3>Teknologi Informasi</h3>
          <p>Agar mampu terus memberikan pelayanan maksimal dan terdepan kepada anggota maka kami menawarkan solusi dalam memenuhi kebutuhan akan teknologi informasi</p>
        </div>
      </div>

      <div class="col_one_third nobottommargin">
        <div class="feature-box fbox-small fbox-plain">
          <div class="fbox-icon">
            <a href="#"><i class="icon-health"></i></a>
          </div>
          <h3>Monitoring dan Evaluasi</h3>
          <p>Kami memperhatikan dan memastikan Credit Union anggota PUSKOPCUINA agar dapat terus beroperasi dengan maksimal</p>
        </div>
      </div>

      <div class="col_one_third col_last">
        <div class="feature-box fbox-small fbox-plain">
          <div class="fbox-icon">
            <a href="#"><i class="icon-zoom-in2"></i></a>
          </div>
          <h3>Pemeriksaan</h3>
          <p>Melakukan pemeriksaan terhadap tata kelola Credit Union agar mampu terus berkelanjutan dalam menjalankan misi sejati Credit Union</p>
        </div>
      </div>

      <div class="line"></div>

      <div class="heading-block center nobottomborder">
        <h3>Temui Kami Di</h3>
      

      <!-- <div id="google-map4" style="height: 250px; margin-bottom: 20px;" class="gmap"></div> -->

      <br/>
      <p class="nobottommargin">Jalan Imam Bonjol Gg. H. Mursyid 1 No. 7-8 Pontianak<br/>
      Kalimantan Barat 78123<br/>
      Telp : 0561-765591 • Fax : 0561-769459<br/>
      nacufina@puskopcuina.org</p>

      </div>

    </div>

    <!-- visi misi nilai -->
    
    <div class="row common-height">

      <div class="col-lg-3 dark col-padding ohidden" style="background-color: #282828;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
          <p style="line-height: 1.8;">Memastikan Keberlanjutan Gerakan Credit Union Melalui Tata Kelola Yang Sehat Dan Terintegrasi Berbasis Teknologi Untuk Meningkatkan Kualitas Anggota</p>
          <i class="icon-bulb bgicon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding ohidden" style="background-color: #34495e;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
          <p style="line-height: 1.8;">Menjadi Federasi Nasional Credit Union Yang Terintegrasi, Terpercaya Dan Berkelanjutan</p>
          <i class="icon-paperplane bgicon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding ohidden" style="background-color: #e74c3c;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Nilai-Nilai Inti</h3>
          <p style="line-height: 1.8;">SETIA dalam KESATUAN, MEMBERDAYAKAN secara UNGGUL dan INOVATIF dengan INTEGRITAS tinggi serta berperilaku RAMAH LINGKUNGAN</p>
          <i class="icon-settings bgicon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding ohidden" style="background-color: #9c1b1b;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Kebijakkan Mutu</h3>
          <p style="line-height: 1.8;">Kami Berkomitmen Untuk Menjadi Federasi Nasional Credit Union Yang Berkualitas Dengan Perbaikan Berkesinambungan Dan Mematuhi Peraturan Perundang-Undangan untuk Mencapai Kepuasan Anggota Dan Para Pihak</p>
          <i class="icon-line2-fire bgicon"></i>
        </div>
      </div>

      <div class="clear"></div>

    </div>
    <a href="#" class="button button-full center tright footer-stick">
      <div class="container clearfix">
        <strong><i>Slogan: Solusi Cerdas Terpercaya</i></strong>
      </div>
    </a>

  </div>

</section><!-- #content end -->

@stop

@section('js')
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key={{ env('GOOGLE_MAP') }}"></script>
<script src="{{ URL::asset('js/public/jquery.gmap.js') }}"></script>
<script>
$('#google-map4').gMap({
    address: 'Gg. H. Mursyid 1, Benua Melayu Laut, Pontianak Sel., Kota Pontianak, Kalimantan Barat 78243',
    maptype: 'ROADMAP',
    zoom: 16,
    markers: [
        {
            latitude: -0.039133,
            longitude: 109.349122,
            html: "PUSKOPCUINA",
        }
    ],
    icon: {
		image: "https://www.google.com/mapfiles/marker.png",
		shadow: "https://www.google.com/mapfiles/shadow50.png",
		iconsize: [20, 34],
		shadowsize: [37, 34],
		iconanchor: [9, 34],
		shadowanchor: [19, 34]
	},
    doubleclickzoom: false,
    controls: {
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false
    }
});
</script>
@stop
