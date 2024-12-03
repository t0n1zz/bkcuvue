@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 
<!-- page title -->
<section class="page-title page-title-mini">
  <div class="container">
    <div class="page-title-row">

      <div class="page-title-content">
        <h1>{{ $subtitle }}</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{ route('home.cu',$subdomain) }}">Home</a></li>
          <li class="breadcrumb-item">Artikel</li>
          <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
        </ol>
      </nav>

    </div>
  </div>
</section>

<!-- content -->
<section id="content">
  <div class="content-wrap pt-5" style="overflow: visible;">
    @php
      $imagepath = 'images/artikel/';
    @endphp

    <!-- if artikel penulis -->
    @if($tipe == 'penulis')
      @php    
        $imagepathPenulis = 'images/penulis/';
        if(!empty($penulis->gambar) && is_file($imagepathPenulis.$penulis->gambar.".jpg")){
          $gambar = $imagepathPenulis . $penulis->gambar . '.jpg';
        }else{
          $gambar = 'images/no_image_man.jpg';
        }
      @endphp
      <div class="container">
        <div class="card border-default mb-6">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-auto">
                <img src="{{ asset($gambar) }}" alt="Author Image" class="rounded-circle square square-md">
              </div>
              <div class="col">
                <div class="d-flex align-items-start mb-2">
                  <div>
                    <h5 class="text-medium fw-semibold mb-0"><a href="#" class="text-dark">{{ $penulis->name }}</a></h5>
                  </div>
                </div>
                <p class="mb-3 text-muted">{{ $penulis->deskripsi }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    @endif

    <!-- artikel utama -->
    @if(isset($artikelsUtama))
      @if($artikelsUtama->count() > 0)
        <div class="container">
          <div class="fancy-title title-border">
            <h3>Artikel Utama {{ $title != 'Semua Kategori' ? $title : '' }}</h3>
          </div>
          <div class="row border-between">
            <div class="col-lg-7 mb-5">
              @foreach ($artikelsUtama as $artikel)
              @php
                if(!empty($artikel->gambar) && is_file($imagepath.$artikel->gambar.".jpg")){
                  $gambar = $imagepath . $artikel->gambar . '.jpg';
                }else{
                  $gambar = 'images/image-article.jpg';
                }
              @endphp
                <article class="entry border-bottom-0 mb-0">
                  <div class="entry-image">
                    <a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$artikel->slug]) }}"><img src="{{ asset($gambar) }}" alt="Image 3"></a>
                  </div>
                  <div class="entry-title">
                    <div class="entry-meta no-separator mb-1 mt-0">
                      <ul>
                        <li><a class="text-uppercase fw-medium" href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$artikel->kategori->slug]) }}">{{$artikel->kategori ?$artikel->kategori->name : '' }}</a></li>
                      </ul>
                    </div>
                    <h3><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$artikel->slug]) }}" class="stretched-link color-underline"><span>{{ $artikel->name }}</span></a></h3>
                  </div>
                  <div class="entry-meta">
                    <ul>
                      <li>{{ $artikel->created_at->format('j M Y') }}</li>
                    </ul>
                  </div>
                  <div class="entry-content">
                    <p>{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $artikel->content),200) }}</p>
                  </div>
                </article>
              @break
              @endforeach
            </div>

            <div class="col-lg-5">
              <div class="row posts-md col-mb-30">
              @php $i = 1 @endphp
              @foreach ($artikelsUtama as $artikel)
              @php $i++ @endphp
              @php
                if(!empty($artikel->gambar) && is_file($imagepath.$artikel->gambar.".jpg")){
                  $gambar = $imagepath . $artikel->gambar . '.jpg';
                }else{
                  $gambar = 'images/image-article.jpg';
                }
              @endphp
              @if($i != 1)
                <article class="entry col-12">
                  <div class="grid-inner row gutter-20">
                    <div class="col-md-4">
                      <a class="entry-image" href="{{ route('artikel.lihat',$artikel->slug) }}"><img src="{{ asset($gambar) }}" alt="Image"></a>
                    </div>
                    <div class="col-md-8">
                      <div class="entry-title title-xs">
                        <div class="entry-meta no-separator mb-1 mt-0">
                          <ul>
                            <li><a class="text-uppercase fw-medium" href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$artikel->kategori->slug]) }}">{{$artikel->kategori ?$artikel->kategori->name : '' }}</a></li>
                          </ul>
                        </div>
                        <h3><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$artikel->slug]) }}" class="stretched-link color-underline">{{ $artikel->name }}</a></h3>
                      </div>
                      <div class="entry-meta no-separator">
                        <ul>
                          <li>{{ $artikel->created_at->format('j M Y') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              @endif
              @endforeach
              </div>
            </div>
          </div>
        </div>  
      @else
        <div class="mb-5"></div>
      @endif
    @endif

    <!-- all artikel -->
    @if($artikels->count() > 0)
      <div class="container">       
        <div class="row col-mb-50">
          <div class="col-12">
            <div class="fancy-title title-border">
              <h3>Semua Artikel {{ $title != 'Semua Kategori' ? $title : '' }}</h3>
            </div>
            <div class="row posts-md col-mb-30">
              @foreach($artikels as $artikel)
              @php
                if(!empty($artikel->gambar) && is_file($imagepath.$artikel->gambar.".jpg")){
                  $gambar = $imagepath . $artikel->gambar . '.jpg';
                }else{
                  $gambar = 'images/image-article.jpg';
                }
              @endphp
                <div class="entry col-sm-6 col-lg-3">
                  <div class="grid-inner">
                    <div class="entry-image">
                      <a href="{{ route('artikel.lihat',$artikel->slug) }}"><img src="{{ asset($gambar) }}" alt="Image"></a>
                    </div>
                    <div class="entry-title title-xs text-transform-none">
                      <div class="entry-meta no-separator mb-1 mt-0">
                          <ul>
                            <li><a class="text-uppercase fw-medium" href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$artikel->kategori->slug]) }}">{{$artikel->kategori ?$artikel->kategori->name : '' }}</a></li>
                          </ul>
                        </div>
                      <h3><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$artikel->slug]) }}">{{ $artikel->name }}</a></h3>
                    </div>
                    <div class="entry-meta no-separator">
                      <ul>
                        <li><a href="#"><i class="bi-clock"></i> {{ $artikel->created_at->diffForHumans() }}</a></li>
                      </ul>
                    </div>
                    <div class="entry-content">
                      <p>{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $artikel->content),200) }}</p>
                    </div>
                  </div>
                </div>
              @endforeach
            </div>
          </div>
        </div>

        <!-- Pagination -->
        {{ $artikels->links('_components.pagination') }}

      </div>
    @endif

    @if(isset($artikelsUtama))
      @if($artikelsUtama->count() < 1 && $artikels->count() < 1)
        <div class="container">
          <div class="promo promo-light p-4 p-md-5 mb-3">
            <div class="row align-items-center">
              <div class="col-12 col-lg">
                <h3>Maaf, belum terdapat artikel</h3>
                <span>Silahkan kembali ke <a href="{{ route('home.cu',$subdomain) }}">halaman utama</a></span>
              </div> 
            </div>
          </div>
        </div>
      @endif
    @endif

  </div>
</section>

@stop

@section('js')
<script>
  jQuery(window).on( 'pluginCarouselReady', function(){
    jQuery('#oc-news').owlCarousel({
      items: 1,
      margin: 20,
      dots: false,
      nav: true,
      navText: ['<i class="uil uil-angle-left-b"></i>','<i class="uil uil-angle-right-b"></i>'],
      responsive:{
        0:{ items: 1,dots: true, },
        576:{ items: 1,dots: true },
        768:{ items: 2,dots:true },
        992:{ items: 2 },
        1200:{ items: 3 }
      }
    });
  });
</script>
@stop
