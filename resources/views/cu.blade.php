@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

<!-- Page Title -->
<section id="page-title">

  <div class="container clearfix">
    <h1>{{ $title }}</h1>
    <span>{{ $subtitle }}</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Credit Union</li>
    </ol>
  </div>

</section><!-- #page-title end -->

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

    <!-- Portfolio Filter
      ============================================= -->
      <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">

        <li class="activeFilter"><a href="#" data-filter="*">Semua</a></li>
        @foreach($provinces as $item)
          @if($item->has_cu_count > 0)
            <li><a href="#" data-filter=".{{ $item->id }}">{{ $item->name }}</a></li>
          @endif
        @endforeach

      </ul><!-- #portfolio-filter end -->

      <div class="clear"></div>

      <!-- Posts -->
      <div id="portfolio" class="portfolio grid-container portfolio-4 portfolio-masonry clearfix">
        @php $imagepath = 'images/cu/' @endphp
        @foreach($cus as $item)
        <article class="portfolio-item {{ $item->id_provinces }}">
          <div class="portfolio-image">
            @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
              <a href="{{ route('home.cu', $item->slug) }}"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
              <div class="portfolio-overlay">
                <a href="{{ asset($imagepath . $item->gambar . '.jpg') }}" class="left-icon" data-lightbox="image"><i class="icon-line-plus"></i></a>
                <a href="{{ route('home.cu', $item->slug) }}" class="right-icon"><i class="icon-line-arrow-right"></i></a>
              </div>
            @else
              <a href="{{ route('home.cu', $item->slug) }}"><img src="{{ asset('images/image-cu.jpg') }}" alt="{{ $item->name }}"></a>
              <div class="portfolio-overlay">
                <a href="{{ asset('images/image-cu.jpg') }}" class="left-icon" data-lightbox="image"><i class="icon-line-plus"></i></a>
                <a href="{{ route('home.cu', $item->slug) }}" class="right-icon"><i class="icon-line-arrow-right"></i></a>
              </div>
            @endif
          </div>
          <div class="portfolio-desc">
            <h3><a href="{{ route('home.cu', $item->slug) }}">CU {{ $item->name }}</a></h3>
            <span> {{ $item->alamat }}</span>
          </div>
        </article>
        @endforeach

      </div>

    </div>

  </div>

</section>

@stop

@section('js')

@stop
