@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 
<!-- page title -->
<section id="page-title">

  <div class="container clearfix">
    <h1>{{ $title }}</h1>
    <span>{{ $subtitle }}</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home.cu',$subdomain) }}">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Artikel</li>
      <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
    </ol>
  </div>

</section>

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      @if($tipe == 'penulis')
      @php $imagepathPenulis = 'images/penulis/' @endphp
      <div class="card">
        <div class="card-header"><strong>Ditulis oleh <a href="#">{{ $penulis->name }}</a></strong></div>
        <div class="card-body">
          <div class="author-image">
            @if(!empty($item->gambar) && is_file($imagepathPenulis.$item->gambar.".jpg"))
              <img src="{{ asset($imagepathPenulis . $item->gambar . '.jpg') }}" alt="" class="rounded-circle">
            @else
              <img src="{{ asset('images/no_image_man.jpg') }}" alt="" class="rounded-circle">
            @endif
          </div>
          {{ $penulis->deskripsi }}
        </div>
      </div>

      <div class="line"></div>
      @endif

      <!-- Posts -->
      <div id="posts" class="post-grid grid-container clearfix" data-layout="fitRows">
        @php $imagepath = 'images/artikel/' @endphp
        @foreach($artikels as $item)
        <div class="entry clearfix">
          <div class="entry-image">
            @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
              <a href="{{ asset($imagepath . $item->gambar . '.jpg') }}" data-lightbox="image"><img class="image_fade" src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
            @else
              <a href="{{ asset('images/image-article.jpg') }}" data-lightbox="image"><img class="image_fade" src="{{ asset('images/image-articlen.jpg') }}" alt="{{ $item->name }}"></a>
            @endif
          </div>
          <div class="entry-title">
            <h2><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}">{{ $item->name }}</a></h2>
          </div>
          <ul class="entry-meta clearfix">
            <li><i class="icon-calendar3"></i> {{ $item->created_at->diffForHumans() }}</li>
            @if($tipe != 'kategori')
              @if($item->kategori)
                <li><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$item->kategori->slug]) }}"><i class="icon-line-grid"></i>{{ $item->kategori->name }}</a></li>
              @else 
                <li><i class="icon-line-grid"></i>{{"-"}}</li> 
              @endif
            @endif
            @if($tipe != 'pe nulis')
              @if($item->penulis)
                <li><a href="{{ route('artikel.penulis.cu',['cu'=>$subdomain,'slug'=>$item->penulis->slug]) }}"><i class="icon-user"></i>{{ $item->penulis->name }}</a></li>
              @else 
                <li><i class="icon-user"></i>{{"-"}}</li> 
              @endif
            @endif
          </ul>
          <div class="entry-content">
            <p>{{ Illuminate\Support\Str::limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->content),200) }}</p>
            <a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}"class="more-link">Selengkapnya</a>
          </div>
        </div>
        @endforeach

      </div>

      <!-- Pagination -->
      {{ $artikels->links('_components.pagination') }}

    </div>

  </div>

</section>

@stop

@section('js')

@stop
