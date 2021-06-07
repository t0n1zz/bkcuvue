@extends('_layouts.layout')

@section('css')
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700%7CRaleway:300,400,500,600,700,800,900%7CRoboto:700%2C500%2C400" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="{{ asset('css/public/indexlibs.css') }}">
@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- slider -->
@include('_components.slider')

<!-- content -->
<section id="content">
<div class="content-wrap">

  <!-- intro -->
  <div class="section header-stick">
    <div class="container clearfix">
      <div class="row">

        <div class="col-lg-8">
          <div class="heading-block bottommargin-sm">
            <h3>Apa Itu PUSKOPCUINA?</h3>
          </div>

          <p class="nobottommargin"><strong>PUSKOPCUINA</strong> merupakan lembaga yang tercipta dari kumpulan beberapa <strong>Credit Union (CU)</strong> di Indonesia yang memiliki pandangan yang sama dalam membantu anggota untuk membantu dirinya sendiri dan memberikan dampak positif bagi masyarakat sekitar. Kami percaya bahwa seseorang hanya bisa mencapai kesejahteraan apabila ia mampu menolong dirinya sendiri. Oleh karena itu kami menawarkan solusi-solusi yang cerdas serta terpercaya kepada CU dalam berkarya melalui pelayanan keuangan, diklat, pemberdayaan, pengorganisasian serta teknologi informasi.</p>
        </div>

        <div class="col-lg-4">
          <img src="{{ asset('images/tentang_cu.jpg') }}">
        </div>

      </div>
    </div>
  </div>

  <!-- artikel bkcu terbaru -->
  <div class="container clearfix">
    <div class="fancy-title title-border">
      <h3>ARTIKEL TERBARU</h3>
    </div>

    <div class="row bottommargin-sm clearfix">
      @php $imagepath = 'images/artikel/' @endphp
      <div class="col-lg-8 bottommargin">
        @foreach($artikelsBKCUNew as $item)
        <div class="ipost clearfix">
          <div class="entry-image">
            @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
              <a href="{{ route('artikel.lihat',$item->slug) }}"><img class="image_fade" src="{{ asset($imagepath . $item->gambar . '.jpg') }}" alt="Image"></a>
            @else
              <a href="{{ route('artikel.lihat',$item->slug) }}"><img class="image_fade" src="{{ asset('images/image-article.jpg') }}" alt="Image"></a>
            @endif
          </div>
          <div class="entry-title">
            <h3><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h3>
          </div>
          <ul class="entry-meta clearfix">
            <li><i class="icon-calendar3"></i>{{ $item->created_at->diffForHumans() }}</li>
            @if($item->kategori)
              <li><a href="{{ route('artikel.kategori',$item->kategori->slug) }}"><i class="icon-line-grid"></i>{{ $item->kategori->name }}</a></li>
            @else 
              <li><i class="icon-line-grid"></i>{{"-"}}</li> 
            @endif
            @if($item->penulis)
              <li><a href="{{ route('artikel.penulis',$item->penulis->slug) }}"><i class="icon-user"></i>{{ $item->penulis->name }}</a></li>
            @else 
              <li><i class="icon-user"></i>{{"-"}}</li> 
            @endif
          </ul>
          <div class="entry-content">
            <p>{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->content),200) }}</p>
          </div>
        </div>
        @break
        @endforeach
      </div>

      <div class="col-lg-4 bottommargin">
        @php $i = 0 @endphp
        @foreach($artikelsBKCUNew as $item)
        @php $i++ @endphp
        @if($i != 1)
        <div class="spost clearfix">
          <div class="entry-image">
            @if(!empty($item->gambar) && is_file($imagepath.$item->gambar."n.jpg"))
              <a href="{{ route('artikel.lihat',$item->slug) }}"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt=""></a>
            @else
            <a href="{{ route('artikel.lihat',$item->slug) }}"><img src="{{ asset('images/image-articlen.jpg') }}" alt=""></a>
            @endif
          </div>
          <div class="entry-c">
            <div class="entry-title">
              <h4><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h4>
            </div>
            <ul class="entry-meta">
              <li><i class="icon-calendar3"></i> {{ $item->created_at->diffForHumans()}}</li>
              @if($item->kategori)
                <li><a href="{{ route('artikel.kategori',$item->kategori->slug) }}"><i class="icon-line-grid"></i>{{ $item->kategori->name }}</a></li>
              @else 
                <li><i class="icon-line-grid"></i>{{"-"}}</li> 
              @endif
              @if($item->penulis)
                <li><a href="{{ route('artikel.penulis',$item->penulis->slug) }}"><i class="icon-user"></i>{{ $item->penulis->name }}</a></li>
              @else 
                <li><i class="icon-user"></i>{{"-"}}</li> 
              @endif
            </ul>
          </div>
        </div>
        @endif
        @endforeach
      </div>

    </div>
  </div>

  <!-- artikel cu terbaru -->
  @if(!$artikelsCUNew->isEmpty())
    <div class="container clearfix">
      <div class="fancy-title title-border">
        <h3>ARTIKEL CREDIT UNION</h3>
      </div>
      <div class="row">
        @foreach($artikelsCUNew as $items)
          @foreach($items as $item)
          <div class="col-lg-4 col-md-6">
            <div class="spost clearfix">
              <div class="entry-image">
                <a href="{{ route('artikel.lihat',$item->slug) }}">
                @if(!empty($item->gambar) && is_file($imagepath.$item->gambar."n.jpg"))
                  <img class="image_fade" src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="Image">
                @else
                  <img class="image_fade" src="{{ asset('images/image-articlen.jpg') }}" alt="Image">
                @endif
                </a>
              </div>
              <div class="entry-c">
                <div class="entry-title">
                  <h4><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h4>
                </div>
                <ul class="entry-meta clearfix">
                  <li><i class="icon-building"></i>{{ $item->cu ? "CU " . $item->cu->name : "-" }}</li>
                  @if($item->kategori)
                    <li><a href="{{ route('artikel.kategori',$item->kategori->slug) }}"><i class="icon-line-grid"></i>{{ $item->kategori->name }}</a></li>
                  @else 
                    <li><i class="icon-line-grid"></i>{{"-"}}</li> 
                  @endif
                </ul>
              </div>
            </div>
            <br/><br/>
          </div>
          @endforeach
        @endforeach
      </div>
    </div>
  @endif

  <!-- tentang cu -->
  <div class="container clearfix">
    <div class="promo promo-light bottommargin">
      <div class="heading-block bottommargin-sm">
        <h3>Apa itu Credit Union?</h3>
      </div>
      <p>
        Credit Union (CU) adalah lembaga yang dimiliki oleh sekumpulan orang yang saling percaya dalam ikatan pemersatu, yang
        bersepakat untuk menabungkan uang mereka sehingga menciptakan modal bersama guna dipinjamkan di antara sesama mereka dengan bunga
        yang layak untuk tujuan produktif dan kesejahteraan. 
      </p>
    </div>
  </div>

  <!-- ultah cu -->
  @if(!$birthdayList->isEmpty())
    <div class="container divcenter clearfix">
      <div class="heading-block center">
        <h2>SELAMAT ULANG TAHUN</h2>
        <span> PUSKOPCUINA mengucapkan selamat ulang tahun kepada:</span>
        <br/>
        @foreach($birthdayList as $item)
          <a href="{{ route('home.cu',$item->slug)}}" target="_blank" class="btn btn-primary"> CU {{ $item->name }} yang ke - {{ $item->usia }} </a>
        @endforeach
        <hr/>
        <span> Semoga terus berkarya, menjalankan misi sejati CU dan membawa perubahan yang lebih baik kepada anggota dan masyarakat sekitar</span>
      </div>
    </div>
  @endif

  <!-- cu -->
  <div class="section dark nobottommargin">

    <div class="container clearfix">

      <h3>Beberapa Credit Union yang tergabung</h3>

      <div id="oc-images2" class="owl-carousel image-carousel carousel-widget" data-margin="20" data-pagi="false" data-loop="true" data-items-xs="1" data-items-sm="2" data-items-md="3" data-items-lg="4" data-items-xl="5" data-autoplay="3000">
        @php $imagepathCu = 'images/cu/' @endphp
        @foreach($cus as $item)
        <div class="oc-item">
          <div class="ipost clearfix">
            <div class="entry-image">
              @if(!empty($item->gambar) && is_file($imagepathCu.$item->gambar.".jpg"))
                <a href="#"><img class="image_fade" src="{{ asset($imagepathCu . $item->gambar . 'n.jpg') }}" alt="Image"></a>
              @else
                <a href="#"><img class="image_fade" src="{{ asset('images/image-cu.jpg') }}" alt="Image"></a>
              @endif
            </div>
            <div class="entry-title">
              <h4><a href="{{ route('home.cu',$item->slug) }}">{{ "CU " . $item->name }}</a></h4>
            </div>
            <ul class="entry-meta clearfix">
              <li><i class="icon-map-marker"></i> {{ $item->provinces ? $item->provinces->name : "-"}}</li>
              @if($item->has_tp_count > 0)
              <li><i class="icon-home2"></i> {{ $item->has_tp_count }} TP/KP</li>
              @endif
            </ul>
          </div>
        </div>
        @endforeach

      </div>


    </div>

  </div>

  <a href="{{ route('cu') }}" class="button button-full center tright footer-stick">
    <div class="container clearfix">
      Untuk melihat semua Credit Union yang tergabung, silahkan <strong>Klik Disini</strong> <i class="icon-caret-right" style="top:4px;"></i>
    </div>
  </a>

</div>
</section>
@stop

@section('js')
<script src="{{ URL::asset('js/public/indexlibs.js') }}"></script>

<!-- ADD-ONS JS FILES -->
<script>
  var revapi224,
    tpj;
    (function() {
      if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();

      function onLoad() {
        if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
          if(tpj("#rev_slider_224_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_224_1");
          }else{
            revapi224 = tpj("#rev_slider_224_1").show().revolution({
              sliderType:"standard",
              jsFileLocation:"include/rs-plugin/js/",
              sliderLayout:"auto",
              dottedOverlay:"none",
              delay:9000,
          revealer: {
            direction: "bltr_skew",
            color: "#ffffff",
            duration: "1000",
            delay: "0",
            easing: "Power2.easeOut",
            spinner: "2",
            spinnerColor: "rgba(0,0,0,",
          },
                navigation: {
                  keyboardNavigation:"off",
                  keyboard_direction: "horizontal",
                  mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                  onHoverStop:"off",
                  touch:{
                    touchenabled:"on",
                    touchOnDesktop:"off",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                  }
                  ,
                  arrows: {
                    style:"gyges",
                    enable:true,
                    hide_onmobile:false,
                    hide_onleave:false,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                      h_align:"left",
                      v_align:"center",
                      h_offset:20,
                      v_offset:0
                    },
                    right: {
                      h_align:"right",
                      v_align:"center",
                      h_offset:20,
                      v_offset:0
                    }
                  }
                },
                responsiveLevels:[1240,1240,778,480],
                visibilityLevels:[1240,1240,778,480],
                gridwidth:[1240,1240,778,480],
                gridheight:[560,560,740,895],
                lazyType:"none",
                shadow:0,
                spinner:"spinner0",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  nextSlideOnWindowFocus:"off",
                  disableFocusListener:false,
                }
              });
            }; /* END OF revapi call */

        RsRevealerAddOn(tpj, revapi224, "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-2'><div class='rsaddon-revealer-2' style='border-top-color: #ffffff0.65); border-bottom-color: #ffffff0.15); border-left-color: #ffffff0.65); border-right-color: #ffffff0.15)'><\/div><\/div>");

      if(typeof ExplodingLayersAddOn !== "undefined") ExplodingLayersAddOn(tpj, revapi224);
      }; /* END OF ON LOAD FUNCTION */
    }()); /* END OF WRAPPING FUNCTION */
</script>
@stop
