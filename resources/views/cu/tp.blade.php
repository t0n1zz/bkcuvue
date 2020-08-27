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
      <li class="breadcrumb-item active" aria-current="page">Tempat/Kantor Pelayanan</li>
    </ol>
  </div>

</section><!-- #page-title end -->

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <!-- Posts -->
      <div id="posts" class="post-grid grid-container grid-3 clearfix" data-layout="fitRows">
        @php $imagepath = 'images/tp/' @endphp
        @foreach($tps as $item)
        <div class="entry clearfix">
          <div class="entry-image">
            @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
              <a href="{{ asset($imagepath . $item->gambar . '.jpg') }}" data-lightbox="image"><img class="image_fade" src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt="{{ $item->name }}"></a>
            @else
              <a href="{{ asset('images/image-cu.jpg') }}" data-lightbox="image"><img class="image_fade" src="{{ asset('images/image-cu.jpg') }}" alt="{{ $item->name }}"></a>
            @endif
          </div>
          <div class="entry-title">
            <h2>{{ $item->name }}</h2>
          </div>
          <div class="entry-content">
            <ul class="iconlist iconlist-color">
              @if(!empty($item->alamat))
                <li><i class="icon-caret-right"></i> Alamat: {{ $item->alamat }}</li>
              @endif  
              @if(!empty($item->telp))
                <li><i class="icon-caret-right"></i> No. Telp: {{ $item->telp }}</li>
              @endif  
              @if(!empty($item->hp))
                <li><i class="icon-caret-right"></i> No. Hp: {{ $item->hp }}</li>
              @endif   
              @if(!empty($item->pos))
                <li><i class="icon-caret-right"></i> Kode Pos: {{ $item->pos }}</li>
              @endif  
              @if(!empty($item->email))
                <li><i class="icon-caret-right"></i> Email: {{ $item->email }}</li>
              @endif  
            </ul>
          </div>
        </div>
        @endforeach

      </div>

      <!-- Pagination -->
      {{ $tps->links('_components.pagination') }}

    </div>

  </div>

</section>

@stop

@section('js')

@stop
