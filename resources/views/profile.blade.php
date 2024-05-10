@extends('_layouts.layout')

@section('css')
<style>
  :root {
    --cnvs-secondary-color: #E9C46A;
    --cnvs-secondary-color-rgb: 233, 196, 106;
  }

  .services-grid .feature-box {
    padding: 2rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: .5rem;
    border: 1px solid var(--cnvs-secondary-color);
  }

  .services-grid .feature-box:hover {
    background-size: cover;
  }

  .dark .services-grid .feature-box .fbox-icon i {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .services-grid .feature-box,
  .services-grid .feature-box .fbox-icon,
  .services-grid .feature-box .fbox-content,
  .hover-button {
    transition: all .4s ease, border-color .0s ease;
  }

  .services-grid .feature-box {
    padding: 3rem;
    background-size: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .services-grid .feature-box:hover {
    transform: translateY(-6px);
    border-color: var(--cnvs-themecolor);
  }

  .services-grid .feature-box:not(:hover) .hover-button {
    opacity: 0;
    transform: translateY(-5px);
  }

  .services-grid .feature-box .fbox-icon,
  .services-grid .feature-box .fbox-content {
    transform: translateY(20px);
  }

  .services-grid .feature-box:hover .fbox-icon,
  .services-grid .feature-box:hover .fbox-content {
    transform: translateY(0px);
  }

  .dark .services-grid .feature-box:hover .fbox-icon i {
    background-color: #FFF;
  }

  .color-2,
  .h-color-2:hover {
    color: var(--cnvs-secondary-color) !important;
  }

  .bg-color-2,
  .h-bg-color-2:hover {
    background-color: var(--cnvs-secondary-color) !important;
  }
  }
</style>
@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- Page Title -->
<section class="page-title page-title-mini">
  <div class="container">
    <div class="page-title-row">

      <div class="page-title-content">
        <h1>Profile Singkat</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item">Tentang Kami</li>
          <li class="breadcrumb-item active" aria-current="page">Profile</li>  
        </ol>
      </nav>

    </div>
  </div>
</section>

<!-- Content -->
<section id="content">
  <div class="content-wrap">

    <div class="container">

      <div class="row col-mb-80 mb-0">

        <div class="col-12">
          <div class="heading-block text-center border-bottom-0">
            <h2>PUSKOPCUINA</h2>
            <span>Federasi Nasional Credit Union Indonesia</span>
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

      </div>

      <div class="promo promo-light p-4 p-md-5 mb-5">
        <div class="row align-items-center">
          <div class="col-12 col-lg">
            <h3>APA ITU PUSKOPCUINA?</h3>
            <span>
              PUSKOPCUINA (awalnya BK3D Kalbar) berdiri pada tanggal 27 November 1988 di Pontianak.
              PUSKOPCUINA aktif mempromosikan dan memfasilitasi berdirinya credit union - credit union primer.
              <br/><br/>
              Jaringan PUSKOPCUINA tersebar hampir ke seluruh wilayah Republik Indonesia.
              Mayoritas credit union anggota PUSKOPCUINA berkembang dengan baik; aset dan jumlah anggota cukup kencang peningkatannya.
              <br/><br/>
              Walaupun demikian, kami tetap menyadari masih diperlukan pembenahan-pembenahan baik internal maupun eksternal pada masa yang akan datang agar credit union mampu menghadapi berbagai dinamika yang terjadi.
            </span>
          </div>
        </div>
      </div>

      <div class="row col-mb-80 mb-0">

        <div class="col-lg-3 text-center" data-animate="bounceIn">
          <i class="i-plain i-xlarge mx-auto mb-0 bi-briefcase"></i>
          <div class="counter counter-large" style="color: #16a085;"><span data-from="10" data-to="{{ $manajemenBKCUCount }}" data-refresh-interval="50" data-speed="3500"></span></div>
          <h5>MANAJEMEN</h5>
        </div>

        <div class="col-lg-3 text-center" data-animate="bounceIn" data-delay="200">
          <i class="i-plain i-xlarge mx-auto mb-0 bi-building"></i>
          <div class="counter counter-large" style="color: #e74c3c;"><span data-from="10" data-to="{{ $cuCount }}" data-refresh-interval="50" data-speed="2500"></span></div>
          <h5>Credit Union</h5>
        </div>     

        <div class="col-lg-3 text-center" data-animate="bounceIn" data-delay="400">
          <i class="i-plain i-xlarge mx-auto mb-0 bi-person-badge"></i>
          <div class="counter counter-large" style="color: #9b59b6;"><span data-from="100" data-to="{{ $aktivisCount }}" data-refresh-interval="30" data-speed="2700"></span></div>
          <h5>Aktivis Credit Union</h5>
        </div>

        <div class="col-lg-3 text-center" data-animate="bounceIn" data-delay="600">
          <i class="i-plain i-xlarge mx-auto mb-0 bi-person"></i>
          <div class="counter counter-large" style="color: #3498db;"><span data-from="1000" data-to="{{ $dataGerakan->total_anggota }}" data-refresh-interval="50" data-speed="2000"></span></div>
          <h5>Anggota Credit Union</h5>
        </div>
        
      </div>
    </div>  

    <!-- what do we do -->
    @include('_components.whatwedo')

    <div class="container pt-5">
      @php $imagepath = 'images/aktivis/' @endphp
      <div class="heading-block text-center">
        <h2>TIM SCT</h2>
        <span>Pengurus, Pengawas, Penasihat dan Manajemen PUSKOPCUINA</span>
      </div>

      <!-- pengurus -->
      <section>
        <div class="fancy-title title-border title-center mt-5">
          <h3>PENGURUS</h3>
        </div>
  
        <div class="row col-mb-50 mb-0">
          @foreach($pengurus as $item)
          @php
          if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg")){
            $gambar = $imagepath . $item->gambar . '.jpg';
          }else{
            $gambar = 'images/no_image_man.jpg';
          }
          @endphp
          <div class="col-lg-3 col-md-6">
            <div class="team">
              <div class="team-image">
                <img src="{{ asset($gambar) }}" alt="{{ $item->name }}" class="rounded-6">
              </div>
              <div class="team-desc">
                <div class="team-title"><h4>{{ $item->name }}</h4><span>{{ $item->pekerjaan_aktif ? $item->pekerjaan_aktif->name : '' }}</span></div>
              </div>
            </div>
          </div>
          @endforeach
  
        </div>
      </section>

      <!-- pengawas -->
      <section>
        <div class="fancy-title title-border title-center mt-5">
          <h3>PENGAWAS</h3>
        </div>
  
        <div class="row col-mb-50 mb-0">
          @foreach($pengawas as $item)
          @php
          if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg")){
            $gambar = $imagepath . $item->gambar . '.jpg';
          }else{
            $gambar = 'images/no_image_man.jpg';
          }
          @endphp
          <div class="col-lg-3 col-md-6">
            <div class="team">
              <div class="team-image">
                <img src="{{ asset($gambar) }}" alt="{{ $item->name }}" class="rounded-6">
              </div>
              <div class="team-desc">
                <div class="team-title"><h4>{{ $item->name }}</h4><span>{{ $item->pekerjaan_aktif ? $item->pekerjaan_aktif->name : '' }}</span></div>
              </div>
            </div>
          </div>
          @endforeach
  
        </div>
      </section>

      <!-- penasihat -->
      <section>
        <div class="fancy-title title-border title-center mt-5">
          <h3>PENASIHAT</h3>
        </div>
  
        <div class="row col-mb-50 mb-0">
          @foreach($penasihat as $item)
          @php
          if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg")){
            $gambar = $imagepath . $item->gambar . '.jpg';
          }else{
            $gambar = 'images/no_image_man.jpg';
          }
          @endphp
          <div class="col-lg-3 col-md-6">
            <div class="team">
              <div class="team-image">
                <img src="{{ asset($gambar) }}" alt="{{ $item->name }}" class="rounded-6">
              </div>
              <div class="team-desc">
                <div class="team-title"><h4>{{ $item->name }}</h4><span>{{ $item->pekerjaan_aktif ? $item->pekerjaan_aktif->name : '' }}</span></div>
              </div>
            </div>
          </div>
          @endforeach
  
        </div>
      </section>

      <!-- manajemen -->
      <section>
        <div class="fancy-title title-border title-center mt-5">
          <h3>MANAJEMEN</h3>
        </div>
  
        <div class="row col-mb-50 mb-0">
          @foreach($manajemen as $item)
          @php
          if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg")){
            $gambar = $imagepath . $item->gambar . '.jpg';
          }else{
            $gambar = 'images/no_image_man.jpg';
          }
          @endphp
          <div class="col-lg-2 col-md-3">
            <div class="team">
              <div class="team-image">
                <img src="{{ asset($gambar) }}" alt="{{ $item->name }}" class="rounded-6">
              </div>
              <div class="team-desc">
                <div class="team-title"><h4>{{ $item->name }}</h4><span>{{ $item->pekerjaan_aktif ? $item->pekerjaan_aktif->name : '' }}</span></div>
              </div>
            </div>
          </div>
          @endforeach
  
        </div>
      </section>

    </div>

    <div class="section footer-stick center">
      <div class="heading-block">
        <h4 class="text-uppercase text-center">Temui Kami Di</h4>
        <!-- <div id="google-map4" style="height: 250px; margin-bottom: 20px;" class="gmap"></div> -->
  
        <br/>
        <p class="nobottommargin">Jl. Perdana Nomor 86A<br/>
        Kalimantan Barat 78121<br/>
        Telp : 0561-765591 • Fax : 0561-769459<br/>
        nacufina@puskopcuina.org</p>
      </div>

    </div>  

    <!-- visi misi nilai -->
    
    <div class="row align-items-stretch">

      <div class="col-lg-3 dark col-padding overflow-hidden" style="background-color: #282828;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
          <p style="line-height: 1.8;">Memastikan Keberlanjutan Gerakan Credit Union Melalui Tata Kelola Yang Sehat Dan Terintegrasi Berbasis Teknologi Untuk Meningkatkan Kualitas Anggota</p>
          <i class="bi-lightbulb bg-icon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding overflow-hidden" style="background-color: #34495e;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
          <p style="line-height: 1.8;">Menjadi Federasi Nasional Credit Union Yang Terintegrasi, Terpercaya Dan Berkelanjutan</p>
          <i class="bi-airplane bg-icon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding overflow-hidden" style="background-color: #e74c3c;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Nilai-Nilai Inti</h3>
          <p style="line-height: 1.8;">SETIA dalam KESATUAN, MEMBERDAYAKAN secara UNGGUL dan INOVATIF dengan INTEGRITAS tinggi serta berperilaku RAMAH LINGKUNGAN</p>
          <i class="bi-gear-fill bg-icon"></i>
        </div>
      </div>

      <div class="col-lg-3 dark col-padding overflow-hidden" style="background-color: #9c1b1b;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Kebijakkan Mutu</h3>
          <p style="line-height: 1.8;">Kami Berkomitmen Untuk Menjadi Federasi Nasional Credit Union Yang Berkualitas Dengan Perbaikan Berkesinambungan Dan Mematuhi Peraturan Perundang-Undangan untuk Mencapai Kepuasan Anggota Dan Para Pihak</p>
          <i class="bi-fire bg-icon"></i>
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
<script>
  var tpj = jQuery;
  var revapi19;
  tpj(document).ready(function() {
    if (tpj("#rev_slider_19_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_19_1");
    } else {
      revapi19 = tpj("#rev_slider_19_1").show().revolution({
        sliderType: "carousel",
        jsFileLocation: "include/rs-plugin/js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 7000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "on",
          tabs: {
            style: "hesperiden",
            enable: true,
            width: 260,
            height: 80,
            min_width: 260,
            wrapper_padding: 25,
            wrapper_color: "#F5F5F5",
            wrapper_opacity: "1",
            tmp: '<div class="tp-tab-content">  <span class="tp-tab-date">@{{param1}}</span>  <span class="tp-tab-title font-secondary">@{{title}}</span> <span class="tp-tab-date tp-tab-para">@{{param2}}</span></div><div class="tp-tab-image"></div>',
            visibleAmount: 9,
            hide_onmobile: false,
            hide_under: 480,
            hide_onleave: false,
            hide_delay: 200,
            direction: "horizontal",
            span: true,
            position: "outer-bottom",
            space: 0,
            h_align: "left",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 0
          }
        },
        carousel: {
          horizontal_align: "center",
          vertical_align: "center",
          fadeout: "on",
          vary_fade: "on",
          maxVisibleItems: 3,
          infinity: "on",
          space: 0,
          stretch: "off",
          showLayersAllTime: "off",
          easing: "Power3.easeInOut",
          speed: "800"
        },
        responsiveLevels: [1140, 992, 768, 576],
        visibilityLevels: [1140, 992, 768, 576],
        gridwidth: [850, 700, 400, 300],
        gridheight: [580, 600, 500, 400],
        lazyType: "single",
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
    }
  }); /* Revolution Slider End */

  jQuery(window).on('pluginCarouselReady', function() {
    jQuery('#oc-news').owlCarousel({
      items: 1,
      margin: 20,
      dots: false,
      nav: true,
      navText: ['<i class="uil uil-angle-left-b"></i>', '<i class="uil uil-angle-right-b"></i>'],
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        576: {
          items: 1,
          dots: true
        },
        768: {
          items: 2,
          dots: true
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  });
</script>
@stop
