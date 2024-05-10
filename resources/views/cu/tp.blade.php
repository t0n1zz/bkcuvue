@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 

<!-- Page Title -->
<section class="page-title page-title-mini">
  <div class="container">
    <div class="page-title-row">

      <div class="page-title-content">
        <h1>{{ $subtitle }}</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{ route('home.cu', $subdomain) }}">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
        </ol>
      </nav>

    </div>
  </div>
</section>

<!-- content -->
<section id="content">
  <div class="content-wrap">
    <div class="container">

      <!-- Posts -->
      <div id="portfolio" class="portfolio row grid-container gutter-30" data-layout="fitRows">
        @php $imagepath = 'images/tp/' @endphp
        @foreach($tps as $item)
          <article class="entry event col-12 mb-0">
            <div class="grid-inner bg-white row g-0 p-3 border-0 rounded-5 shadow-sm h-shadow all-ts h-translate-y-sm">
            
              <div class="col-md-4 mb-md-0">
                <a href="#" class="entry-image mb-0 h-100">
                  @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                    <img class="rounded-2 h-100 object-cover" src="{{ asset($imagepath . $item->gambar . '.jpg') }}" alt="{{ $item->name }}">
                  @else
                    <img class="rounded-2 h-100 object-cover" src="{{ asset('images/image-cu.jpg') }}" alt="{{ $item->name }}">
                  @endif
                </a>
              </div>

              <div class="col-md-8 p-4">
                <div class="entry-title nott">
                  <h3>{{ $item->name }} </h3>
                </div>
                <div class="entry-content my-3">
                  <ul class="iconlist iconlist-color">
                    @if(!empty($item->alamat))
                      <li><i class="bi-caret-right"></i> Alamat: {{ $item->alamat }}</li>
                    @endif  
                    @if(!empty($item->telp))
                      <li><i class="bi-caret-right"></i> No. Telp: {{ $item->telp }}</li>
                    @endif  
                    @if(!empty($item->hp))
                      <li><i class="bi-caret-right"></i> No. Hp: {{ $item->hp }}</li>
                    @endif   
                    @if(!empty($item->pos))
                      <li><i class="bi-caret-right"></i> Kode Pos: {{ $item->pos }}</li>
                    @endif  
                    @if(!empty($item->email))
                      <li><i class="bi-caret-right"></i> Email: {{ $item->email }}</li>
                    @endif  
                  </ul>
                </div>

              </div>
            </div>
          </article>
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
