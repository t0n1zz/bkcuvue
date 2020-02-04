@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- page title -->
<section id="page-title">

  <div class="container clearfix">
    <h1>{{ $diklat->name }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Kegiatan</li>
      <li class="breadcrumb-item active" aria-current="page">Diklat</li>
      <li class="breadcrumb-item active" aria-current="page">{{ $diklat->name }}</li>
    </ol>
  </div>

</section>

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

    <div class="nobottommargin clearfix">

      <div class="single-event">

        <div class="col_three_fourth">
          <div class="entry-image nobottommargin">
            @php $imagepath = 'images/diklat/' @endphp
            @if(!empty($diklat->gambar) && is_file($imagepath.$diklat->gambar.".jpg"))
              <img src="{{ asset($imagepath . $diklat->gambar . '.jpg') }}" alt="{{ $diklat->name }}">
              <hr/>
            @else
             
            @endif
          </div>

          <h3>1. Kerangka Acuan</h3>
          {!! $diklat->keterangan !!}

          <h3>2. Jadwal</h3>
          {!! $diklat->jadwal !!}

          <h3>3. Sasaran Peserta</h4>
          <div class="tagcloud clearfix">
            @foreach($diklat->sasaran as $sasaran)
              <a href="#">{{ $sasaran->name }}</a>
            @endforeach
          </div>
          
        </div>

        <div class="col_one_fourth col_last">

          <div class="card events-meta mb-3">
            <div class="card-header"><h5 class="mb-0">Event Info:</h5></div>
            <div class="card-body">
              <ul class="iconlist nobottommargin">
                <li>Mulai: <span class="text-muted">{{ date('d-m-Y', strtotime($diklat->mulai)) }}</span></li>
                <li>Selesai: <span class="text-muted">{{ date('d-m-Y', strtotime($diklat->selesai)) }}</span></li>
                <li>Peserta Maksimal: <span class="text-muted">{{ $diklat->peserta_max }}</span></li>
                <li>Peserta Maksimal Per-CU: <span class="text-muted">{{ $diklat->peserta_max_cu }}</span></li>
                <li>Tempat: <span class="text-muted">{{ $diklat->tempat ? $diklat->tempat->name : 'Belum ditentukan tempat' }}</span></li>
                <li>Kabupaten/Kota: <span class="text-muted">{{ $diklat->regencies ? $diklat->regencies->name : '-' }}</span></li>
                <li>Provinsi: <span class="text-muted">{{ $diklat->provinces ? $diklat->provinces->name : '-' }}</span></li>
              </ul>
            </div>
          </div>

          @if($diklat->status == 1)
            <a href="#" class="btn btn-info btn-block btn-lg">MENUNGGU</a>
          @elseif($diklat->status == 2)
            <a href="#" class="btn btn-warning btn-block btn-lg">PENDAFTARAN BUKA</a>
          @elseif($diklat->status == 3)
            <a href="#" class="btn btn-secondary btn-block btn-lg">PENDAFTARAN TUTUP</a>
          @elseif($diklat->status == 4)
            <a href="#" class="btn btn-success btn-block btn-lg">BERJALAN</a>  
            @elseif($diklat->status == 5)
            <a href="#" class="btn btn-primary btn-block btn-lg">TERLAKSANA</a>     
          @endif

        </div>

      </div>

      </div>

    </div>

  </div>

</section>

@stop

@section('js')

@stop
