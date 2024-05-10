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
        <h1>{{ $subtitle }}</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Kegiatan</li>
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
      
      <div class="grid-filter-wrap">

        <ul class="grid-filter" data-container="#portfolio">
          <li class="activeFilter"><a href="#" data-filter="*">Semua Bulan</a></li>
          <li><a href="#" data-filter=".2">Pendaftaran Buka</a></li>
          <li><a href="#" data-filter=".4">Kegiatan Berjalan</a></li>
          <li><a href="#" data-filter=".5">Kegiatan Terlaksana</a></li>
          <li><a href="#" data-filter=".01">Januari</a></li>
          <li><a href="#" data-filter=".02">Februari</a></li>
          <li><a href="#" data-filter=".03">Maret</a></li>
          <li><a href="#" data-filter=".04">April</a></li>
          <li><a href="#" data-filter=".05">Mei</a></li>
          <li><a href="#" data-filter=".06">Juni</a></li>
          <li><a href="#" data-filter=".07">Juli</a></li>
          <li><a href="#" data-filter=".08">Agustus</a></li>
          <li><a href="#" data-filter=".09">September</a></li>
          <li><a href="#" data-filter=".10">Oktober</a></li>
          <li><a href="#" data-filter=".11">November</a></li>
          <li><a href="#" data-filter=".12">Desember</a></li>
        </ul> 
      </div>  

      <div id="portfolio" class="portfolio row grid-container gutter-30" data-layout="fitRows">
        @foreach($kegiatans as $item)
          <article class="entry event col-12 mb-0 {{ date('m', strtotime($item->mulai)) }} {{ date('m', strtotime($item->selesai)) }} {{ $item->status }}">
            <div class="grid-inner bg-white row g-0 p-3 border-0 rounded-5 shadow-sm h-shadow all-ts h-translate-y-sm">
            
              <div class="col-md-4 mb-md-0">
                <a href="#" class="entry-image mb-0 h-100">
                  @php $imagepath = 'images/diklat/' @endphp
                  @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                    <img class="rounded-2 h-100 object-cover" src="{{ asset($imagepath . $item->gambar . '.jpg') }}" alt="{{ $item->name }}">
                  @else
                    <img class="rounded-2 h-100 object-cover" src="{{ asset('images/image-article.jpg') }}" alt="{{ $item->name }}">
                  @endif
                  <div class="bg-overlay">
                    <div class="bg-overlay-content justify-content-start align-items-start">
                      @if($item->status == 1)
                        <div class="badge bg-info">MENUNGGU</div>
                      @elseif($item->status == 2)  
                        <div class="badge bg-warning">PENDAFTARAN BUKA</div>
                      @elseif($item->status == 3)  
                        <div class="badge bg-secondary">PENDAFTARAN TUTUP</div>
                      @elseif($item->status == 4)  
                        <div class="badge bg-success"> BERJALAN</div>
                      @elseif($item->status == 5)  
                        <div class="badge bg-primary"> TERLAKSANA</div>  
                      @endif
                      <div class="badge bg-light text-dark"></div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-md-8 p-4">
                <div class="entry-meta no-separator mb-1 mt-0">
                  <ul>
                    <li><span class="text-uppercase fw-medium">#{{ $item->kode_diklat }}</span></li>
                    <li><span class="text-uppercase fw-medium">{{ date('l, jS F Y', strtotime($item->mulai)) }}</span></li>
                  </ul>
                </div>

                <div class="entry-title nott">
                  <h3> 
                    @if($item->slug)
                    <a href="{{ route('diklat.lihat',$item->slug) }}" style="color:black">
                      {{ $item->name }}
                    </a>
                    @else
                      {{ $item->name }}
                    @endif
                  </h3>
                </div>
                <div class="entry-content my-3">
                  <p class="mb-0">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->keterangan),200) }}</p>
                </div>

                <div class="entry-meta no-separator">
                  <ul>
                    <li><i class="uil uil-map-marker"></i> {{ $item->tempat ? $item->tempat->name : 'Belum ditentukan tempat' }}</li>
                    <li><i class="uil bi-person"></i> {{ $item->peserta_max }}</li>
                  </ul>
                </div>

                <hr/>
                
                @if($item->sasaran)
                <div class="tagcloud clearfix">
                  @foreach($item->sasaran as $sasaran)
                    <a href="#">{{ $sasaran->name }}</a>
                  @endforeach
                </div>
                @endif
              </div>
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
