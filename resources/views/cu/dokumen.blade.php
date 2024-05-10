@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 

<!-- page title -->
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

      @foreach($dokumens as $item)
      <div class="promo promo-light p-4 p-md-5 mb-3">
        <div class="row align-items-center">
          <div class="col-12 col-lg">
            <small class="text-muted"><i class="bi-clock"></i> {{ $item->created_at->diffForHumans() }}</small> <br/>
            <h3>{{ $item->name }}</h3>
            @if($item->keterangan != '')
            <span>{{ $item->keterangan }}</span>
            @endif
          </div> 
          <div class="col-12 col-lg-auto mt-4 mt-lg-0">
            @if($item->format == 'upload')
              @if(!empty($item->filename))
                <a href="{{ route('files', $item->filename )}}" class="button button-large button-circle button-black m-0">Download</a>
              @else
                <a href="#" class="button button-large button-circle button-black m-0">File tidak ditemukan</a>
              @endif
            @else
              <a href="{{ $item->link }}" class="button button-large button-circle button-black m-0" target="_blank">Download</a>
            @endif
          </div>
        </div>
      </div>
      @endforeach

    </div>
  </div>
</section>

@stop

@section('js')

@stop
