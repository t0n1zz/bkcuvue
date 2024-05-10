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
        <h1>{{ $diklat->name }}</h1>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Kegiatan</li>
          <li class="breadcrumb-item active" aria-current="page">Diklat</li>
          <li class="breadcrumb-item active" aria-current="page">{{ $diklat->name }}</li>
        </ol>
      </nav>

    </div>
  </div>
</section>

<!-- content -->
<section id="content">
  <div class="content-wrap bg-light overflow-visible pb-0">

    <div class="container">
      <div class="single-event">
        <div class="row flex-lg-row-reverse gutter-40">

          <div  class="col-lg-4 position-lg-sticky h-100" style="top: 100px;">

            <div class="event-meta bg-white shadow-sm p-4 rounded-4 mb-3">
              <h4 class="mb-4 fs-5 fw-semibold">Informasi</h4>
              <ul class="mb-0">
                <li class="row gx-3 gy-4 mb-4">
                  <div class="col-auto">
                    <i class="box-square-sm d-flex align-items-center justify-content-center bi-people fs-3 color position-relative"></i>
                  </div>
                  <div class="col mb-0 op-09 ps-3 fs-6">
                    <b>Peserta Maksimal:</b> {{ $diklat->peserta_max }} <br/> 
                    <b>Peserta  Maksimal Per-CU</b> {{ $diklat->peserta_max_cu }}
                  </div>
                </li>

                <li class="row gx-3 gy-4 mb-4">
                  <div class="col-auto">
                    <i class="box-square-sm d-flex align-items-center justify-content-center bi-calendar4-event fs-3 color position-relative"></i>
                  </div>
                  <div class="col mb-0 op-09 ps-3 fs-6">
                    <b>Mulai:</b> {{ date('d-m-Y', strtotime($diklat->mulai)) }} <br/> 
                    <b>Selesai:</b> {{ date('d-m-Y', strtotime($diklat->selesai)) }}
                  </div>
                </li>

                <li class="row gx-3 gy-4 mb-4">
                  <div class="col-auto">
                    <i class="box-square-sm d-flex align-items-center justify-content-center bi-geo fs-3 color position-relative"></i>
                  </div>
                  <div class="col mb-0 op-09 ps-3 fs-6">
                    <b>Tempat:</b> {{ $diklat->tempat ? $diklat->tempat->name : 'Belum ditentukan tempat' }} <br/> 
                    <b>Kabupaten:</b> {{ $diklat->regencies ? $diklat->regencies->name : '-' }} <br/> 
                    <b>Provinsi:</b> {{ $diklat->provinces ? $diklat->provinces->name : '-' }} <br/> 
                  </div>
                </li>
              </ul>
            </div>
  
          </div>
  
          <div class="col-lg-8">
            <div class="entry-image">
              @php $imagepath = 'images/diklat/' @endphp
              @if(!empty($diklat->gambar) && is_file($imagepath.$diklat->gambar.".jpg"))
                <img src="{{ asset($imagepath . $diklat->gambar . '.jpg') }}" alt="{{ $diklat->name }}">
              @else
                <img src="{{ asset('images/image-article.jpg') }}" alt="{{ $diklat->name }}">
              @endif
            </div>
  
            @if($diklat->keterangan)
              <h4>Kerangka Acuan</h4>
              {!! $diklat->keterangan !!}
            @endif
  
            @if($diklat->jadwal)
              <h4>Jadwal</h4>
              {!! $diklat->jadwal !!}
            @endif
  
            <h4>Sasaran Peserta</h4>
            <div class="row col-mb-30">
              <div class="col-12">
                <ul class="iconlist">
                  @foreach($diklat->sasaran as $sasaran)
                    <li><i class="fa-solid fa-check"></i> {{ $sasaran->name }}</li>
                  @endforeach
                </ul>
              </div>  
            </div>
            
          </div>

        </div>
      </div>
    </div>

    <div class="bg-white w-100 py-4 shadow-sm position-sticky bottom-0 mt-6">
      <div class="row align-items-center justify-content-between mx-0 px-2">
        <div class="col-auto">
        </div>
        <div class="col">
          <div class="container px-0">
            <div class="row align-items-center justify-content-between mx-0">
              <div class="col-auto d-none d-md-block">
                <h4 class="fs-5 fw-medium mb-0">{{ $diklat->name }}</h4>
              </div>

              <div class="col-auto ms-md-auto">
              </div>
              <div class="col-auto">
                @if($diklat->status == 1)
                  <a href="#" class="btn rounded-4  btn-info">MENUNGGU</a>
                @elseif($diklat->status == 2)
                  <a href="#" class="btn rounded-4 btn-warning">PENDAFTARAN BUKA</a>
                @elseif($diklat->status == 3)
                  <a href="#" class="btn rounded-4  btn-secondary">PENDAFTARAN TUTUP</a>
                @elseif($diklat->status == 4)
                  <a href="#" class="btn rounded-4 btn-success">BERJALAN</a>  
                @elseif($diklat->status == 5)
                  <a href="#" class="btn rounded-4 btn-primary">TERLAKSANA</a>     
                @endif
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto">
        </div>
      </div>
    </div>

  </div>
</section>

@stop

@section('js')

@stop
