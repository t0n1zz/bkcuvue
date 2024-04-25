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
      @php $imagepathCu = 'images/logo/' @endphp
      @if(!empty($cu->logo) && is_file($imagepathCu.$cu->logo.".jpg"))
        <img src="{{ asset($imagepathCu . $cu->logo . '.jpg') }}" alt="{{ $cu->name }}" style="width:10em;">
      @endif
      <h2>Credit Union {{ $cu->name }}</h2>
      <span>Selamat datang di Credit Union {{ $cu->name }}</span>
    </div>

    <p>
      Kami merupakan <strong>Credit Union</strong> yang memberikan pelayanan di wilayah <strong>{{ $cu->provinces ? ucfirst($cu->provinces->name) : ""}}</strong>
      @if(!empty($cu->ultah))
          @php $datejoin = \Carbon\Carbon::parse($cu->ultah)->format('Y') @endphp
          {{ 'sejak '.$datejoin }}
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
          <li><i class="icon-caret-right"></i> Tanggal Bergabung dengan PUSKOPCUINA: {{ $cu->bergabung }}</li>
        @endif 
      </ul>
    </div>

  </div>
</div>

<!-- ultah cu -->
@foreach($birthdayList as $item)
  @if($item->name == $cu->name)
    <div class="container divcenter clearfix">
      <div class="heading-block center">
        <h2>SELAMAT ULANG TAHUN</h2>
        <span>PUSKOPCUINA mengucapkan selamat ulang tahun kepada </span>
        <br/>
        <a href="#" class="btn btn-primary"> CU {{ $item->name }} yang ke - {{ $item->usia }} </a>
        <hr/>
        <span>Semoga terus berkarya, menjalankan misi sejati CU dan membawa perubahan yang lebih baik kepada anggota dan masyarakat sekitar</span>
      </div>
    </div>
  @endif
@endforeach

<!-- artikel terbaru -->
<div class="container clearfix">
  <div class="fancy-title title-border">
    <h3>ARTIKEL</h3>
  </div>

  <div class="row bottommargin-sm clearfix">
    @php $imagepath = 'images/artikel/' @endphp
    <div class="col-lg-8 bottommargin">
      @foreach($artikelsNew as $item)
      <div class="ipost clearfix">
        <div class="entry-image">
          @if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
            <a href="{{ route('artikel.lihat',$item->slug) }}"><img class="image_fade" src="{{ asset($imagepath . $item->gambar . '.jpg') }}" alt="Image"></a>
          @else
            <a href="{{ route('artikel.lihat',$item->slug) }}"><img class="image_fade" src="{{ asset('images/image-article.jpg') }}" alt="Image"></a>
          @endif
        </div>
        <div class="entry-title">
          <h3><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h3>
        </div>
        <ul class="entry-meta clearfix">
          <li><i class="icon-calendar3"></i>{{ $item->created_at->diffForHumans() }}</li>
          @if($item->kategori)
            <li><a href="{{ route('artikel.kategori',$item->kategori->slug) }}"><i class="icon-line-grid"></i>{{ $item->kategori->name }}</a></li>
          @else 
            <li><i class="icon-line-grid"></i>{{"-"}}</li> 
          @endif
          @if($item->penulis)
            <li><a href="{{ route('artikel.penulis',$item->penulis->slug) }}"><i class="icon-user"></i>{{ $item->penulis->name }}</a></li>
          @else 
            <li><i class="icon-user"></i>{{"-"}}</li> 
          @endif
        </ul>
        <div class="entry-content">
          <p>{{ Illuminate\Support\Str::limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->content),200) }}</p>
        </div>
      </div>
      @break
      @endforeach
    </div>

    <div class="col-lg-4 bottommargin">
      @php $i = 0 @endphp
      @foreach($artikelsNew as $item)
      @php $i++ @endphp
      @if($i != 1)
      <div class="spost clearfix">
        <div class="entry-image">
          @if(!empty($item->gambar) && is_file($imagepath.$item->gambar."n.jpg"))
            <a href="{{ route('artikel.lihat',$item->slug) }}"><img src="{{ asset($imagepath . $item->gambar . 'n.jpg') }}" alt=""></a>
          @else
          <a href="{{ route('artikel.lihat',$item->slug) }}"><img src="{{ asset('images/image-articlen.jpg') }}" alt=""></a>
          @endif
        </div>
        <div class="entry-c">
          <div class="entry-title">
            <h4><a href="{{ route('artikel.lihat',$item->slug) }}">{{ $item->name }}</a></h4>
          </div>
          <ul class="entry-meta">
            <li><i class="icon-calendar3"></i> {{ $item->created_at->diffForHumans()}}</li>
          </ul>
        </div>
      </div>
      @endif
      @endforeach
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
@if(!empty($cu->misi) && !empty($cu->visi) && !empty($cu->nilai))
<section id="content" >
<div class="content-wrap notoppadding">
  <div class="row common-height">

    <div class="col-lg-4 dark col-padding ohidden" style="background-color: #282828;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
        <p style="line-height: 1.8;">{!! $cu->misi !!}</p>
        <i class="icon-bulb bgicon"></i>
      </div>
    </div>

    <div class="col-lg-4 dark col-padding ohidden" style="background-color: #34495e;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
        <p style="line-height: 1.8;">{!! $cu->visi !!}</p>
        <i class="icon-paperplane bgicon"></i>
      </div>
    </div>

    <div class="col-lg-4 dark col-padding ohidden" style="background-color: #e74c3c;">
      <div>
        <h3 class="uppercase" style="font-weight: 600;">Nilai-Nilai Inti</h3>
        <p style="line-height: 1.8;">{!! $cu->nilai !!}</p>
        <i class="icon-settings bgicon"></i>
      </div>
    </div>

    <div class="clear"></div>
  </div>
  <a href="#" class="button button-full center tright footer-stick">
    <div class="container clearfix">
      <strong><i>Slogan: {!! $cu->slogan !!}</i></strong>
    </div>
  </a>
</div>
</section>  
@endif

@stop

@section('js')

@stop
