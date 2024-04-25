@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- page title -->
<section id="page-title">

  <div class="container clearfix">
    <h1>{{ $title }}</h1>
    <span>{{ $subtitle }}</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Kegiatan</li>
      <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
    </ol>
  </div>

</section>

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">
        <li class="activeFilter"><a href="#" data-filter="*">Semua</a></li>
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

      <div class="clear"></div>

      <div id="portfolio" class="portfolio grid-container portfolio-2 clearfix">
        @foreach($kegiatans as $item)
        <div class="portfolio-item nopadding {{ date('m', strtotime($item->mulai)) }} {{ date('m', strtotime($item->selesai)) }}">
          <div class="card" style="margin:5px;">
            <div class="card-header inline-block ">
              <h3 class="card-title">
                @if($item->slug)
                <a href="{{ route('diklat.lihat',$item->slug) }}" style="color:black">
                  {{ $item->name }}
                </a>
                @else
                  {{ $item->name }}
                @endif
							</h3>
							<span class="text-muted">
                Kode: {{ $item->kode_diklat }} / Durasi: {{ $item->durasi }} jam / Status: 
                @if($item->status == 1)
                  <span class="badge badge-info">MENUNGGU</span>
                @elseif($item->status == 2)  
                  <span class="badge badge-warning">PENDAFTARAN BUKA</span>
                @elseif($item->status == 3)  
                  <span class="badge badge-secondary">PENDAFTARAN TUTUP</span>
                @elseif($item->status == 4)  
                  <span class="badge badge-success"> BERJALAN</span>
                @elseif($item->status == 5)  
                  <span class="badge badge-primary"> TERLAKSANA</span>  
                @endif  
              </span>
            </div>
            <div class="card-body">
              {{ Illuminate\Support\Str::limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->keterangan),200) }}

              <hr/>

              <div class="row" style="padding-left: 1em">
                <div class="col-md-6">
                  <ul class="list">
                    <li>Mulai: <span class="text-muted">{{ date('d-m-Y', strtotime($item->mulai)) }}</span></li>
                    <li>Selesai: <span class="text-muted">{{ date('d-m-Y', strtotime($item->selesai)) }}</span></li>
                    <li>Peserta Maksimal: <span class="text-muted">{{ $item->peserta_max }}</span></li>
                    <li>Peserta Maksimal Per-CU: <span class="text-muted">{{ $item->peserta_max_cu }}</span></li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list">
                    <li>Tempat: <span class="text-muted">{{ $item->tempat ? $item->tempat->name : 'Belum ditentukan tempat' }}</span></li>
                    <li>Kabupaten/Kota: <span class="text-muted">{{ $item->regencies ? $item->regencies->name : '-' }}</span></li>
                    <li>Provinsi: <span class="text-muted">{{ $item->provinces ? $item->provinces->name : '-' }}</span></li>
                  </ul>
                </div>
              </div>

              <hr/>
              
              @if($item->sasaran)
              <div style="margin-bottom: .5rem">
                <b>Sasaran Peserta</b>
              </div>
              <div class="tagcloud clearfix">
                @foreach($item->sasaran as $sasaran)
                  <a href="#">{{ $sasaran->name }}</a>
                @endforeach
              </div>
              @endif
            </div>
          </div>
        </div>
        @endforeach
      </div>


    </div>

  </div>

</section>

@stop

@section('js')

@stop
