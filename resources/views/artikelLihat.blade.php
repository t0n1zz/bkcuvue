@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- Page Title -->
<section class="page-title page-title-mini">
  <div class="container">
    <div class="page-title-row">

      <div class="page-title-content">
        <h1>{{ $artikel->kategori ? $artikel->kategori->name : ""}}</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item">Artikel</li>
        @if($artikel->kategori)
          <li class="breadcrumb-item"><a href="{{ route('artikel.kategori',$artikel->kategori->slug) }}">{{ $artikel->kategori->name }}</a></li>
        @else
        <li class="breadcrumb-item">-</li>
        @endif
        <li class="breadcrumb-item active" aria-current="page">{{ str_limit($artikel->name, 100) }}</li>
        </ol>
      </nav>

    </div>
  </div>
</section>

<section id="content">
  <div class="content-warp pt-3">
    <div class="container">

      <div class="row mt-5">
        <!-- content -->
        <div class="col-lg-12">
          <div class="entry">

            <!-- title -->
            <h2 class="mb-3 fw-bold h1">{{ $artikel->name }}</h2>
            <div class="entry-meta d-flex justify-content-between mb-4">
              <ul>
                @if($artikel->penulis)
                  <li><span>by</span> <a href="{{ route('artikel.penulis',$artikel->penulis->slug) }}">{{ $artikel->penulis->name }}</a></li>
                @endif
                <li><i class="bi-clock"></i><a href="#">{{ $artikel->created_at->format('j F Y') }}</a></li>
              </ul>
              <ul>
                @if($artikel->kategori)
                  <li><a href="{{ route('artikel.kategori',$artikel->kategori->slug) }}" class="btn btn-primary text-white"><i class="bi-bookmark"></i> {{ $artikel->kategori->name }}</a></li>
                @endif
              </ul>
            </div>

            <!-- share -->
            <div class="card border-0 border-top rounded-0 border-default mt-4 mb-5">
              <div class="card-body pt-3 px-0">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-6 fw-semibold mb-0">Share:</h6>
                  <div class="d-flex">
                    <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(Request::fullUrl()) }}" class="social-icon text-white border-transparent rounded-circle bg-facebook" title="Facebook" style="--cnvs-socialicon-size:2rem;">
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="https://twitter.com/intent/tweet?url={{ urlencode(Request::fullUrl()) }}" class="social-icon text-white border-transparent rounded-circle bg-twitter" title="Twitter" style="--cnvs-socialicon-size:2rem;">
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-twitter"></i>
                    </a>

                    <a href="https://www.linkedin.com/sharing/share-offsite/?url={{ urlencode(Request::fullUrl()) }}" class="social-icon text-white border-transparent rounded-circle bg-linkedin" title="linkedin" style="--cnvs-socialicon-size:2rem;">
                      <i class="fa-brands fa-linkedin-p"></i>
                      <i class="fa-brands fa-linkedin-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- image & Kategori -->
            <div class="entry-image">

              <!-- image -->
              @php $imagepath = 'images/artikel/' @endphp
              @if(!empty($artikel->gambar) && is_file($imagepath.$artikel->gambar.".jpg"))
                <img src="{{ asset($imagepath . $artikel->gambar . '.jpg') }}" alt="{{ $artikel->name }}">
              @else
                <img src="{{ asset('images/image-article.jpg') }}" alt="{{ $artikel->name }}">
              @endif

              <!-- kategori -->
              

            </div>

            <!-- content -->
            <div class="entry-content mt-0">
              {!! $artikel->content !!}
            </div>

            <!-- penulis -->
            @if($artikel->penulis)
              <div class="line"></div>
              @php    
                $imagepathPenulis = 'images/penulis/';
                if(!empty($artikel->penulis->gambar) && is_file($imagepathPenulis.$artikel->penulis->gambar.".jpg")){
                  $gambar = $imagepathPenulis . $artikel->penulis->gambar . '.jpg';
                }else{
                  $gambar = 'images/no_image_man.jpg';
                }
              @endphp

              <div class="card border-default mb-6">
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col-auto">
                      <img src="{{ asset($gambar) }}" alt="Author Image" class="rounded-circle square square-md">
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-start mb-2">
                        <div>
                          <h5 class="text-medium fw-semibold mb-0"><a href="#" class="text-dark">{{ $artikel->penulis->name }}</a></h5>
                        </div>
                        <a href="{{ route('artikel.penulis',$artikel->penulis->slug) }}" class="btn btn-light btn-sm rounded-pill px-3 ms-auto">BACA POSTINGAN LAINNYA</a>
                      </div>
                      <p class="mb-3 text-muted">{{ $artikel->penulis->deskripsi }}</p>
                    </div>
                  </div>
                </div>
						  </div>

            @endif

            <!-- artikel terkait -->
            <div class="line"></div>
            <h4>Artikel Terkait:</h4>
            <div class="posts-sm row col-mb-30 related-posts">
              @foreach($artikelsTerkait as $items)
              @foreach($items as $item)
                <div class="entry col-md-6">
                  <div class="grid-inner row align-items-center no-gutter">
                    <div class="col-auto">
                      <div class="entry-image">
                        @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                          <a href="{{ route('artikel.lihat',$item->slug) }}"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
                        @else
                          <a href="{{ route('artikel.lihat',$item->slug) }}"><img src="{{ asset('images/image-articlen.jpg') }}" alt="{{ $item->name }}"></a>
                        @endif
                      </div>
                    </div>
                    <div class="col ps-3">
                      <div class="entry-title">
                        <h4 class="fw-medium"><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h4>
                      </div>
                      <div class="entry-meta">
                        <ul>
                          @if($item->penulis)
                            <li><span>by</span> <a href="{{ route('artikel.penulis',$item->penulis->slug) }}">{{ $item->penulis->name }}</a></li>
                          @endif
                          <li>{{ $item->created_at->format('j M Y') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              @endforeach
              @endforeach
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</section>


@stop

@section('js')

@stop
