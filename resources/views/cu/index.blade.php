@extends('_layouts.layout')

@section('css')
<!-- <link rel="stylesheet" href="{{ asset('css/public/indexlibs.css') }}"> -->
<!-- plugins -->
<link rel="stylesheet" href="{{ asset('plugins/rs-plugin/css/settings.css') }}" media="screen">
<link rel="stylesheet" href="{{ asset('plugins/rs-plugin/css/layers.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/rs-plugin/css/navigation.css') }}">

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
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 

<!-- slider -->
@if($artikelsUtama->count() > 1)
@include('_components.sliderCU')
@endif

<section id="content">
  <div class="content-warp mt-5">
    <div class="container">
      <div class="row col-mb-50">
        <div class="col-md-5">
          @php $imagepathCu = 'images/cu/' @endphp
          @if(!empty($cu->gambar) && is_file($imagepathCu.$cu->gambar.".jpg"))
            <img src="{{ asset($imagepathCu . $cu->gambar . '.jpg') }}" alt="{{ $cu->name }}">
          @else
            <img src="{{ asset('images/image-cu.jpg') }}" alt="{{ $cu->name }}">
          @endif
        </div>
  
        <div class="col-md-7">
          <div class="heading-block ">
            <h2>Selamat datang di Credit Union {{ $cu->name }}</h2>
          </div>
  
          <p>
            Kami merupakan <strong>Credit Union</strong> yang memberikan pelayanan di wilayah <strong>{{ $cu->provinces ? ucfirst($cu->provinces->name) : ""}}</strong>
            @if(!empty($cu->ultah))
                @php 
                  $datejoin = new Date($cu->ultah); 
                  $datejoin2 = new Date($cu->bergabung); 
                @endphp
                {{ 'sejak '.$datejoin->format('Y'). ' dan tergabung dalam jaringan gerakan Credit Union PUSKOPCUINA sejak ' .$datejoin2->format('Y') }}
            @endif
            @if(!empty($cu->has_tp_count))
                {{'dan saat ini telah memiliki '.$cu->has_tp_count. ' tempat pelayanan/kantor pelayanan.'}}<br/>
            @endif
          </p>

          <div class="row col-mb-30">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <ul class="iconlist iconlist-color mb-0">
                @if(!empty($cu->badan_hukum))
                  <li><i class="fa-solid fa-caret-right"></i> No. Badan Hukum: {{ $cu->badan_hukum }}</li>
                @endif  
                @if(!empty($cu->npwp))
                  <li><i class="fa-solid fa-caret-right"></i> No. Pokok Wajib Pajak: {{ $cu->npwp }}</li>
                @endif  
                @if(!empty($cu->nik))
                  <li><i class="fa-solid fa-caret-right"></i> No. Induk Koperasi: {{ $cu->nik }}</li>
                @endif  
                @if(!empty($cu->situ))
                  <li><i class="fa-solid fa-caret-right"></i> No. Surat Izin Tempat usaha: {{ $cu->situ }}</li>
                @endif  
                @if(!empty($cu->izin_operasional))
                  <li><i class="fa-solid fa-caret-right"></i> No. Izin Operasional: {{ $cu->izin_operasional }}</li>
                @endif 
              </ul>
            </div>
          </div>

        </div>
  
      </div>
    </div>

    <!-- tentang cu -->
    <div class="container mt-5">
      <div class="promo promo-light p-5">
        <div class="heading-block">
          <h3>APA ITU CREDIT UNION?</h3>
        </div>
        <p class="mb-0">
          <strong>Credit Union (CU)</strong> adalah lembaga yang dimiliki oleh sekumpulan orang yang saling percaya dalam ikatan pemersatu, yang
          bersepakat untuk menabungkan uang mereka sehingga menciptakan modal bersama guna dipinjamkan di antara sesama mereka dengan bunga
          yang layak untuk tujuan produktif dan kesejahteraan.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ultah cu -->
@foreach($birthdayList as $item)
  @if($item->name == $cu->name)
  <div class="section mt-5 mb-0" style="padding: 120px 0; background-image: url({{ asset('images/dirgahayu.png') }}); background-size: auto; background-repeat: repeat">

    <!-- Wave Shape
    ============================================= -->
    <div class="wave-top" style="position: absolute; top: 0; left: 0; width: 100%; background-image: url({{ asset('images/wave-3.svg') }}); height: 12px; z-index: 2; background-repeat: repeat-x;"></div>

    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <div class="card shadow text-center" data-animate="shake" style="opacity: 1 !important">
            <div class="card-body">
              <div class="color h1 mb-3"><i class="bi-heart-fill"></i></div>
              <small class="text-uppercase fw-normal ls-2 text-muted mb-3 d-block">HARI INI CU {{ $item->name }} MERAYAKAN</small>
              <h5 class="display-1 fw-bold mb-3 font-secondary">ULANG TAHUN KE {{ $item->usia }}</h5>
              <hr/>
              <p class="text-uppercase fw-medium text-muted">Semoga kami bisa terus berkarya, menjalankan misi sejati CU dan membawa perubahan yang lebih baik kepada anggota dan masyarakat sekitar</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>

      </div>
    </div>

    <!-- Wave Shape
    ============================================= -->
    <div class="wave-bottom" style="position: absolute; top: auto; bottom: 0; left: 0; width: 100%; background-image: url({{ asset('images/wave-3.svg') }}); height: 12px; z-index: 2; background-repeat: repeat-x; transform: rotate(180deg);"></div>

  </div>
  @endif
@endforeach

<!-- artikel terbaru -->

@if($artikelsNew->count() > 1)
<div class="section bg-transparent m-0">
  <div class="container">
    <h4 class="mb-3 ls-1 text-uppercase fw-bold">Artikel Terbaru</h4>

    <div id="oc-news" class="owl-carousel fixed-nav top-nav carousel-widget posts-md customjs">
      @php $imagepath = 'images/artikel/'; @endphp
      @foreach ($artikelsNew as $key => $artikel)
      @php
        if(!empty($artikel->gambar) && is_file($imagepath.$artikel->gambar.".jpg")){
          $gambar = $imagepath . $artikel->gambar . '.jpg';
        }else{
          $gambar = 'images/image-article.jpg';
        }
      @endphp
      <div class="entry mb-0" style="background: url({{ asset($gambar) }}) center center; background-size: cover; height: 400px;">
        <div class="bg-overlay">
          <div class="bg-overlay-content text-overlay-mask dark desc-sm align-items-end justify-content-start p-4">
            <div class="position-relative w-100">
              @if($artikel->kategori)
                <div class="entry-categories"><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$artikel->kategori->slug]) }}" class="bg-fashion">{{$artikel->kategori->name}}</a></div>
              @endif
              <div class="entry-title text-transform-none">
                <h3 class="fw-semibold mb-2"><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$artikel->slug]) }}" class="text-light">{{ $artikel->name }}</a></h3>
              </div>
              <div class="entry-meta no-separator">
                <ul>
                  @if($artikel->penulis)
                  <li><span>by</span> <a href="{{ route('artikel.penulis.cu',['cu'=>$subdomain, 'slug'=>$artikel->penulis->slug]) }}">{{$artikel->penulis->name}}</a></li>
                  @endif
                  <li><i class="bi-clock"></i><a href="#">{{ $artikel->created_at->format('j M Y') }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</div>
@endif

<!-- visi misi nilai -->
@if(!empty($cu->misi) && !empty($cu->visi) && !empty($cu->nilai))
<section id="content" >
<div class="content-wrap notoppadding">
  <div class="row align-items-stretch">

    <div class="col-lg-4 dark col-padding overflow-hidden" style="background-color: #282828;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
        <p style="line-height: 1.8;">{!! $cu->misi !!}</p>
        <i class="bi-lightbulb bg-icon"></i>
      </div>
    </div>

    <div class="col-lg-4 dark col-padding overflow-hidden" style="background-color: #34495e;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
        <p style="line-height: 1.8;">{!! $cu->visi !!}</p>
        <i class="bi-airplane bg-icon"></i>
      </div>
    </div>

    <div class="col-lg-4 dark col-padding overflow-hidden" style="background-color: #e74c3c;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Nilai-Nilai Inti</h3>
        <p style="line-height: 1.8;">{!! $cu->nilai !!}</p>
        <i class="bi-gear-fill bg-icon"></i>
      </div>
    </div>

    <div class="clear"></div>
  </div>
  <a href="#" class="button button-full center tright footer-stick">
    <div class="container clearfix">
      <strong><i>Slogan: {!! $cu->slogan !!}</i></strong>
    </div>
  </a>
</div>
</section>  
@endif

@stop

@section('js')
<!-- <script src="{{ URL::asset('js/public/indexlibs.js') }}"></script> -->

<!-- SLIDER REVOLUTION 5.x SCRIPTS  -->
<script src="{{ URL::asset('plugins/rs-plugin/js/jquery.themepunch.tools.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/jquery.themepunch.revolution.min.js') }}"></script>

<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.actions.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.carousel.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.kenburn.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.migration.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.navigation.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.parallax.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.slideanims.min.js') }}"></script>
<script src="{{ URL::asset('plugins/rs-plugin/js/extensions/revolution.extension.video.min.js') }}"></script>

<!-- ADD-ONS JS FILES -->
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
