@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- Page Title -->
<section id="page-title">
  @php $subdomain = Route::input('cu') @endphp 
  <div class="container clearfix">
    <h1>{{ $artikel->kategori ? $artikel->kategori->name : ""}}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home.cu', $subdomain)}}">Home</a></li>
      <li class="breadcrumb-item">Artikel</li>
      @if($artikel->kategori)
        <li class="breadcrumb-item"><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$artikel->kategori->slug]) }}">{{ $artikel->kategori->name }}</a></li>
      @else
      <li class="breadcrumb-item">-</li>
      @endif
      <li class="breadcrumb-item active" aria-current="page">{{ $artikel->name }}</li>
    </ol>
  </div>

</section>

<!-- Content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <div class="single-post nobottommargin">

        <!-- Entry Image -->
        <div class="entry-image bottommargin">
          @php $imagepath = 'images/artikel/' @endphp
          @if(!empty($artikel->gambar) && is_file($imagepath.$artikel->gambar.".jpg"))
            <img src="{{ asset($imagepath . $artikel->gambar . '.jpg') }}" alt="{{ $artikel->name }}">
          @else
          <img src="{{ asset('images/image-article.jpg') }}" alt="{{ $artikel->name }}">
          @endif
        </div><!-- .entry-image end -->

        <!-- Post Content -->
        <div class="postcontent nobottommargin clearfix">

          <!-- Single Post -->
          <div class="entry clearfix">

            <!-- Entry Title -->
            <div class="entry-title">
              <h2>{{ $artikel->name }}</h2>
            </div>

            <!-- Entry Meta -->
            <ul class="entry-meta clearfix">
              <li><i class="icon-calendar3"></i> {{ $artikel->created_at->diffForHumans() }}</li>
              @if($artikel->kategori)
                <li><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$artikel->kategori->slug]) }}"><i class="icon-line-grid"></i>{{ $artikel->kategori->name }}</a></li>
              @else 
                <li><i class="icon-line-grid"></i>{{"-"}}</li> 
              @endif
              @if($artikel->penulis)
                <li><a href="{{ route('artikel.penulis',['cu'=>$subdomain,'slug'=>$artikel->penulis->slug]) }}"><i class="icon-user"></i>{{ $artikel->penulis->name }}</a></li>
              @else 
                <li><i class="icon-user"></i>{{"-"}}</li> 
              @endif
            </ul>

            <!-- Entry Content -->
            <div class="entry-content notopmargin">

              <!-- post -->
              {!! $artikel->content !!}

              <!-- Post Single - Share
              ============================================= -->
              <div class="si-share noborder clearfix">
                <span>Share this Post:</span>
                <div>
                  <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(Request::fullUrl()) }}" target="_blank" class="social-icon si-borderless si-facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                  </a>
                  <a href="https://twitter.com/intent/tweet?url={{ urlencode(Request::fullUrl()) }}" target="_blank" class="social-icon si-borderless si-twitter">
                    <i class="icon-twitter"></i>
                    <i class="icon-twitter"></i>
                  </a>
                </div>
              </div><!-- Post Single - Share End -->

            </div>
          </div><!-- .entry end -->

          <!-- Penulis -->
          @if($artikel->penulis)
          @php $imagepathPenulis = 'images/penulis/' @endphp

          <div class="card">
            <div class="card-header"><strong>Ditulis oleh <a href="#">{{ $artikel->penulis->name }}</a></strong></div>
            <div class="card-body">
              <div class="author-image">
                @if(!empty($artikel->penulis->gambar) && is_file($imagepathPenulis.$artikel->penulis->gambar.".jpg"))
                  <img src="{{ asset($imagepathPenulis . $artikel->penulis->gambar . '.jpg') }}" alt="" class="rounded-circle">
                @else
                  <img src="{{ asset('images/no_image_man.jpg') }}" alt="" class="rounded-circle">
                @endif
              </div>
              {{ $artikel->penulis->deskripsi }}
            </div>
          </div>

          <div class="line"></div>
          @endif

          <h4>Artikel Terkait:</h4>

          <div class="related-posts clearfix">
            @php $i=0 @endphp
            @foreach($artikelsTerkait as $items)
            @php $i++ @endphp
            <div class="col_half nobottommargin @if ($i > 1) col_last @endif">

              @foreach($items as $item)
              <div class="mpost clearfix">
                <div class="entry-image">
                  @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                    <a href="#"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
                  @else
                    <a href="#"><img src="{{ asset('images/image-articlen.jpg') }}" alt="{{ $item->name }}"></a>
                  @endif
                </div>
                <div class="entry-c">
                  <div class="entry-title">
                    <h4><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}">{{ $item->name }}</a></h4>
                  </div>
                  <ul class="entry-meta clearfix">
                    <li><i class="icon-calendar3"></i>{{ $item->created_at->diffForHumans() }}</li>
                  </ul>
                  <div class="entry-content">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->content),100) }}</div>
                </div>
              </div>
              @endforeach

            </div>
            @endforeach

          </div>

        </div>

        <!-- Sidebar
        ============================================= -->
        <div class="sidebar nobottommargin col_last clearfix">
        <div class="sidebar-widgets-wrap">

          <div class="widget widget_links clearfix">

            <h4>Kategori Artikel</h4>
            <ul>
              @foreach($artikelKategoriList as $item)
                <li><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}""><div>{{ $item->name }}</div></a></li>
              @endforeach
            </ul>

          </div>

          <div class="widget clearfix">

            <h4>Artikel Terbaru</h4>

            <div class="tabs nobottommargin clearfix" id="sidebar-tabs">

              <ul class="tab-nav clearfix">
                <li><a href="#tabs-1">CU</a></li>
                <li><a href="#tabs-2">BKCU Kalimantan</a></li>
              </ul>

              <div class="tab-container">

                <div class="tab-content clearfix" id="tabs-1">
                  <div id="recent-post-list-sidebar">

                  @foreach($artikelsCUNew as $item)
                  <div class="spost clearfix">
                    <div class="entry-image">
                      @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                        <a href="#"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
                      @else
                        <a href="#"><img src="{{ asset('images/image-articlen.jpg') }}" alt="{{ $item->name }}"></a>
                      @endif
                    </div>
                    <div class="entry-c">
                      <div class="entry-title">
                        <h4><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}">{{ $item->name }}</a></h4>
                      </div>
                      <ul class="entry-meta clearfix">
                        <li><i class="icon-calendar3"></i>{{ $item->created_at->diffForHumans() }}</li>
                      </ul>
                    </div>
                  </div>
                  @endforeach

                  </div>
                </div>

                <div class="tab-content clearfix" id="tabs-2">
                  <div id="popular-post-list-sidebar">

                  @foreach($artikelsBKCUNew as $item)
                  <div class="spost clearfix">
                    <div class="entry-image">
                      @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                        <a href="#"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
                      @else
                        <a href="#"><img src="{{ asset('images/image-articlen.jpg') }}" alt="{{ $item->name }}"></a>
                      @endif
                    </div>
                    <div class="entry-c">
                      <div class="entry-title">
                        <h4><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h4>
                      </div>
                      <ul class="entry-meta clearfix">
                        <li><i class="icon-calendar3"></i>{{ $item->created_at->diffForHumans() }}</li>
                      </ul>
                    </div>
                  </div>
                  @endforeach

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div><!-- .sidebar end -->

      </div>

    </div>

  </div>

</section>

@stop

@section('js')

@stop
