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

    <div class="container clearfix">

      <!-- Posts -->
      <div id="posts" class="small-thumbs alt">
        @php $imagepath = 'images/produk_cu/' @endphp
        @foreach($produks as $item)
          <div class="container">

            <div class="pricing-box pricing-extended row align-items-stretch mb-5 mx-0">
              <div class="pricing-desc col-lg-7 p-4">
                <div class="pricing-title">
                  <h3>{{ $item->name }}</h3>
                </div>
                <div class="pricing-features pb-0">
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

              <div class="pricing-action-area col-lg d-flex flex-column justify-content-center">
                @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                  <img class="rounded-2 h-100" src="{{ asset($imagepath . $item->gambar . '.jpg') }}" alt="{{ $item->name }}">
                @endif
              </div>
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
