@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanCU')

@php $subdomain = Route::input('cu') @endphp 

<div class="container clearfix">

  <!-- intro -->
  <div class="col_two_fifth topmargin-sm bottommargin">
    @php $imagepathCu = 'images/cu/' @endphp
    @if(!empty($cu->gambar) && is_file($imagepathCu.$cu->gambar.".jpg"))
      <img src="{{ asset($imagepathCu . $cu->gambar . '.jpg') }}" alt="{{ $cu->name }}">
    @else
      <img src="{{ asset('images/image-cu.jpg') }}" alt="{{ $cu->name }}">
    @endif

  </div>

  <div class="col_three_fifth topmargin-sm bottommargin-lg col_last">

    <div class="heading-block ">
      <h2>Credit Union {{ $cu->name }}</h2>
      <span>Selamat datang di Credit Union {{ $cu->name }}</span>
    </div>

    <p>
      Kami merupakan <strong>Credit Union</strong> yang memberikan pelayanan di wilayah <strong>{{ $cu->provinces ? ucfirst($cu->provinces->name) : ""}}</strong>
      @if(!empty($cu->bergabung))
          @php $datejoin = new Date($cu->bergabung) @endphp
          {{ 'sejak '.$datejoin->format('Y') }}
      @endif
      @if(!empty($cu->has_tp_count))
          {{'dan saat ini telah memiliki '.$cu->has_tp_count. ' tempat pelayanan/kantor pelayanan'}}<br/>
      @endif
    </p>

    <div class="col_half nobottommargin">
      <ul class="iconlist iconlist-color nobottommargin">
        @if(!empty($cu->badan_hukum))
          <li><i class="icon-caret-right"></i> No. Badan Hukum: {{ $cu->badan_hukum }}</li>
        @endif  
        @if(!empty($cu->npwp))
          <li><i class="icon-caret-right"></i> No. Pokok Wajib Pajak: {{ $cu->npwp }}</li>
        @endif  
        @if(!empty($cu->nik))
          <li><i class="icon-caret-right"></i> No. Induk Koperasi: {{ $cu->nik }}</li>
        @endif  
        @if(!empty($cu->situ))
          <li><i class="icon-caret-right"></i> No. Surat Izin Tempat usaha: {{ $cu->situ }}</li>
        @endif  
      </ul>
    </div>

    <div class="col_half nobottommargin col_last">
      <ul class="iconlist iconlist-color nobottommargin">
        @if(!empty($cu->izin_operasional))
          <li><i class="icon-caret-right"></i> No. Izin Operasional: {{ $cu->izin_operasional }}</li>
        @endif 
        @if(!empty($cu->ultah))
          <li><i class="icon-caret-right"></i> Tanggal Berdiri: {{ $cu->ultah }}</li>
        @endif 
        @if(!empty($cu->bergabung))
          <li><i class="icon-caret-right"></i> Tanggal Bergabung dengan Puskopdit BKCU Kalimantan: {{ $cu->bergabung }}</li>
        @endif 
      </ul>
    </div>

  </div>
</div>

<div class="container clearfix">
  <div class="promo promo-light bottommargin">
    <div class="heading-block bottommargin-sm">
      <h3>Apa itu Credit Union?</h3>
    </div>
    <p>
      Credit Union (CU) adalah lembaga yang dimiliki oleh sekumpulan orang yang saling percaya dalam ikatan pemersatu, yang
      bersepakat untuk menabungkan uang mereka sehingga menciptakan modal bersama guna dipinjamkan di antara sesama mereka dengan bunga
      yang layak untuk tujuan produktif dan kesejahteraan. 
    </p>
  </div>
</div>

<div class="section">
  <div class="container clearfix">
    <h3>Temui Kami:</h3>
  
    <div class="col_half nobottommargin">
      <ul class="iconlist iconlist-color">
        @if(!empty($cu->alamat))
          <li><i class="icon-caret-right"></i> Alamat: {{ $cu->alamat }}</li>
        @endif  
        @if(!empty($cu->telp))
          <li><i class="icon-caret-right"></i> No. Telp: {{ $cu->telp }}</li>
        @endif  
        @if(!empty($cu->hp))
          <li><i class="icon-caret-right"></i> No. Hp: {{ $cu->hp }}</li>
        @endif   
      </ul>
    </div>
  
    <div class="col_half nobottommargin col_last">
      <ul class="iconlist iconlist-color">
        @if(!empty($cu->pos))
          <li><i class="icon-caret-right"></i> Kode Pos: {{ $cu->pos }}</li>
        @endif  
        @if(!empty($cu->email))
          <li><i class="icon-caret-right"></i> Email: {{ $cu->email }}</li>
        @endif  
        @if(!empty($cu->website))
          <li><i class="icon-caret-right"></i> Website: {{ $cu->website }}</li>
        @endif  
      </ul>
    </div>

  </div>
</div>

<div class="container clearfix">
  <div class="postcontent">

    @if(!$artikelsUtama->isEmpty())
      <div class="@if(!$artikelsNew->isEmpty()) col_three_fifth @else col_full @endif">
        <div class="fslider flex-thumb-grid grid-6" data-speed="400" data-arrows="true" data-thumbs="true" data-easing="easeOutQuad">
          <div class="flexslider">
            <div class="slider-wrap">
              @php $imagepath = 'images/artikel/' @endphp
              @foreach($artikelsUtama as $item)
                @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                  <div class="slide" data-thumb="{{ asset($imagepath . $item->gambar . 'n.jpg') }}">
                @else
                  <div class="slide" data-thumb="{{ asset( 'images/image-articlen.jpg') }}">
                @endif
                <a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}">
                  @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
                    <img src="{{ asset($imagepath . $item->gambar . '.jpg') }}" alt="{{ $item->name }}">
                  @else
                    <img src="{{ asset( 'images/image-article.jpg') }}" alt="{{ $item->name }}">
                  @endif
                  <div class="overlay">
                    <div class="text-overlay">
                      <div class="text-overlay-title">
                        <h3>{{ $item->name }}</h3>
                      </div>
                      <div class="text-overlay-meta">
                        <span>{{ $item->kategori ? $item->kategori->name : "-" }}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              @endforeach

            </div>
          </div>
        </div>
      </div>
    @endif

    @if(!$artikelsNew->isEmpty())
      <div class="col_two_fifth col_last">

        @foreach($artikelsNew as $item)
        <div class="spost clearfix">
          <div class="entry-c">
            <div class="entry-title">
              <h4><a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}">{{ $item->name }}</a></h4>
            </div>
          </div>
        </div>
        @endforeach

      </div>
    @endif

  </div>

  <div class="sidebar col_last">
    <div class="sidebar-widgets-wrap clearfix">
      <div class="widget widget_links clearfix">
        @if(!$kategories->isEmpty())
          <h4>Kategori Artikel</h4>
        @endif
        @php  $i = 0  @endphp
        @foreach($kategories as $items)
          @php $i++ @endphp
          <div class="col_half nobottommargin @if ($i > 1) col_last  @endif">
            <ul>
              @foreach($items as $item)
                <li><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}">{{ $item->name }}</a></li>
              @endforeach
            </ul>
          </div>
        @endforeach
      </div>
    </div>
  </div>
</div>

@if($cu->deskripsi)
<div class="container clearfix">
  <div class="heading-block topmargin-lg center">
    <h2>Tentang Kami</h2>
    <span class="divcenter">Mengenai CU {{$cu->name}}</span>
  </div>
  {!! $cu->deskripsi !!}
</div>
@endif  

<!-- visi misi nilai -->
@if(!empty($cu->misi) && !empty($cu->visi) && !empty($cu->nilai) && !empty($cu->slogan))
<section id="content" >
<div class="content-wrap notoppadding">
  <div class="row common-height">

    <div class="col-lg-4 dark col-padding ohidden" style="background-color: #282828;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
        <p style="line-height: 1.8;">{{ $cu->misi }}</p>
        <i class="icon-bulb bgicon"></i>
      </div>
    </div>

    <div class="col-lg-4 dark col-padding ohidden" style="background-color: #34495e;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
        <p style="line-height: 1.8;">{{ $cu->visi }}</p>
        <i class="icon-paperplane bgicon"></i>
      </div>
    </div>

    <div class="col-lg-4 dark col-padding ohidden" style="background-color: #e74c3c;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Nilai-Nilai Inti</h3>
        <p style="line-height: 1.8;">{{ $cu->nilai }}</p>
        <i class="icon-settings bgicon"></i>
      </div>
    </div>

    <div class="clear"></div>
  </div>
  <a href="#" class="button button-full center tright footer-stick">
    <div class="container clearfix">
      <strong><i>Slogan: {{ $cu->slogan }}</i></strong>
    </div>
  </a>
</div>
</section>  
@endif

@stop

@section('js')

@stop
