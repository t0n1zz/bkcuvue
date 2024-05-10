@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- page title -->
<section class="page-title page-title-mini">
  <div class="container">
    <div class="page-title-row">

      <div class="page-title-content">
        <h1>{{ $subtitle }}</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Credit Union</li>
        </ol>
      </nav>

    </div>
  </div>
</section>

<!-- content -->
<section id="content">
  <div class="content-wrap">
    <div class="container">
      <div class="grid-filter-wrap">
        <ul class="grid-filter" data-container="#portfolio">
          <li class="activeFilter"><a href="#" data-filter="*">SEMUA</a></li>
          @foreach($provinces as $item)
            @if($item->has_cu_count > 0)
              <li><a href="#" data-filter=".{{ $item->id }}">{{ $item->name }}</a></li>
            @endif
          @endforeach
        </ul>
      </div>    
    

      <!-- Posts -->
      <div id="portfolio" class="portfolio row grid-container gutter-30" data-layout="fitRows">
        @php $imagepath = 'images/cu/' @endphp
        @foreach($cus as $item)
          <article class="portfolio-item col-md-4 col-sm-6 col-12 {{ $item->id_provinces }}">
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
              <div class="entry-meta no-separator mb-1 mt-0">
                <ul>
                  <li><a class="text-uppercase fw-medium" href="#">{{$item->provinces->name }}</a></li>
                </ul>
              </div>
              <h3><a href="{{ route('home.cu', $item->slug) }}">CU {{ $item->name }}</a></h3>
              <span> {{ $item->alamat }}</span>
            </div>
          </article>
        @endforeach
      </div>

    </div>
  </div>
</div>
</section>

@stop

@section('js')

@stop
