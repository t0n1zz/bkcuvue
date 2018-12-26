@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 

<!-- Page Title -->
<section id="page-title">

  <div class="container clearfix">
    <h1>{{ $title }}</h1>
    <span>{{ $subtitle }}</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home.cu', $subdomain) }}">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
    </ol>
  </div>

</section><!-- #page-title end -->

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <!-- Posts -->
      <div id="posts" class="small-thumbs alt">
        @php $imagepath = 'images/produk/' @endphp
        @foreach($produks as $item)
        <div class="entry clearfix">
          <div class="entry-image">
            @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
              <a href="{{ asset($imagepath . $item->gambar . '.jpg') }}" data-lightbox="image"><img class="image_fade" src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
            @else
              <a href="{{ asset('images/image-cu.jpg') }}" data-lightbox="image"><img class="image_fade" src="{{ asset('images/no_image.jpg') }}" alt="{{ $item->name }}"></a>
            @endif
          </div>
          <div class="entry-c">
            <div class="entry-title">
              <h2>{{ $item->name }}</h2>
            </div>
          </div>
          <div class="entry-content">
              @if(!empty($item->keterangan))
                <strong>Keterangan:</strong> {!! $item->keterangan !!}
              @endif
              @if(!empty($item->aturan_setor))
                <strong>Aturan Setor:</strong> {!! $item->aturan_setor !!}
              @endif 
              @if(!empty($item->aturan_tarik))
                <strong>Aturan Tarik:</strong> {!! $item->aturan_tarik !!}
              @endif
              @if(!empty($item->aturan_balas_jasa))
                <strong>Aturan Balas Jasa:</strong> {!! $item->aturan_balas_jasa !!}
              @endif 
              @if(!empty($item->aturan_lain))
                <strong>Aturan Lain:</strong> {!! $item->aturan_lain !!}
              @endif    
               
          </div>
        </div>
        @endforeach

      </div>

      <!-- Pagination -->
      {{ $produks->links('_components.pagination') }}

    </div>

  </div>

</section>

@stop

@section('js')

@stop
