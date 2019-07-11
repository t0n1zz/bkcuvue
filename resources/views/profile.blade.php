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
    <span>Pengenalan singkat mengenai Puskopdit BKCU Kalimantan</span>
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
          <h2>Puskopdit BKCU Kalimantan</h2>
          <span>Pengenalan singkat mengenai Puskopdit BKCU Kalimantan</span>
        </div>

        <div class="fslider" data-pagi="false" data-animation="fade">
          <div class="flexslider">
            <div class="slider-wrap">
              <div class="slide"><a href="#"><img src="{{ asset('images/bkcu.jpg') }}" alt="About Image"></a></div>
              <div class="slide"><a href="#"><img src="{{ asset('images/bkcu2.jpg') }}" alt="About Image"></a></div>
            </div>
          </div>
        </div>

      </div>

      <!-- data count -->
      <div class="col_one_fourth center" data-animate="bounceIn" data-delay="200">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-briefcase"></i>
        <div class="counter counter-large" style="color: #e74c3c;"><span data-from="10" data-to="{{ $manajemenBKCUCount }}" data-refresh-interval="50" data-speed="1200"></span></div>
        <h5>Manajemen BKCU</h5>
      </div>

      <div class="col_one_fourth center" data-animate="bounceIn">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-building"></i>
        <div class="counter counter-large" style="color: #3498db;"><span data-from="10" data-to="{{ $cuCount }}" data-refresh-interval="50" data-speed="1000"></span></div>
        <h5>Credit Union</h5>
      </div>

      <div class="col_one_fourth center" data-animate="bounceIn" data-delay="400">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-line2-users"></i>
        <div class="counter counter-large" style="color: #16a085;"><span data-from="1000" data-to="{{ $dataGerakan->total_anggota }}" data-refresh-interval="50" data-speed="1900"></span></div>
        <h5>Anggota Credit Union</h5>
      </div>

      <div class="col_one_fourth center col_last" data-animate="bounceIn" data-delay="600">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-users"></i>
        <div class="counter counter-large" style="color: #9b59b6;"><span data-from="100" data-to="{{ $aktivisCount }}" data-refresh-interval="30" data-speed="1800"></span></div>
        <h5>Aktivis Credit Union</h5>
      </div>

      <div class="clear"></div>

      <div class="promo promo-light bottommargin">
        <h3>Siapakah Kami?</h3>
        Puskopdit BKCU Kalimantan (awalnya BK3D Kalbar) berdiri pada tanggal 27 November 1988 di Pontianak.<br/>
        Sebagai credit union sekunder,Puskopdit BKCU Kalimantan aktif mempromosikan dan memfasilitasi berdirinya credit union - credit union primer.<br/>
        <br/>
        Jaringan Puskopdit BKCU Kalimantan tersebar hampir ke seluruh wilayah Republik Indonesia.<br/>
        Mayoritas credit union anggota Puskopdit BKCU Kalimantan berkembang dengan baik;aset dan jumlah anggota cukup kencang peningkatannya.<br/><br/>
        Walaupun demikian, kami tetap menyadari masih diperlukan pembenahan-pembenahan baik internal maupun eksternal pada masa yang akan datang agar credit union mampu menghadapi berbagai dinamika yang terjadi.
      </div>

      <div class="clear"></div>

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
          <p>Layanan keuangan berupa simpanan dan pinjaman kepada Credit Union anggota Puskopdit BKCU Kalimantan.</p>
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
          <p>Kami memperhatikan dan memastikan Credit Union anggota Puskopdit BKCU Kalimantan agar dapat terus beroperasi dengan maksimal</p>
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

      <h3>Temui Kami Di</h3>

      <div id="google-map4" style="height: 250px; margin-bottom: 20px;" class="gmap"></div>

      <p class="nobottommargin">Jalan Imam Bonjol Gg. H. Mursyid 1 No. 7-8 Pontianak<br/>
      Kalimantan Barat 78123<br/>
      Telp : 0561-765591 • Fax : 0561-769459<br/>
      cucoborneo@hotmail.com</p>

      <br/>
    </div>

    <!-- visi misi nilai -->
    
    <div class="row common-height">

      <div class="col-lg-3 dark col-padding ohidden" style="background-color: #282828;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
          <p style="line-height: 1.8;">Memastikan Keberlanjutan Gerakan Credit Union Melalui Tata Kelola Yang Sehat dan Terintegrasi Untuk Meningkatkan Kualitas Anggota</p>
          <i class="icon-bulb bgicon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding ohidden" style="background-color: #34495e;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
          <p style="line-height: 1.8;">Menjadi Gerakan Credit Union Nusantara Berbasis Komunitas Yang Terintegrasi, Tangguh Dan Berkelanjutan</p>
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
          <p style="line-height: 1.8;">Kami Berkomitmen Untuk Menjadi Mitra Credit Union yang Berkualitas dengan Perbaikan Berkesinambungan dan Mematuhi Peraturan Perundangan untuk Mencapai Kepuasan Anggota dan <i>Stakeholder</i>.</p>
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
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2kJmqYT0ClNQjXeW6HZtftdUPuPEz8DU"></script>
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
            html: "Puskopdit BKCU Kalimantan",
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
