@php $subdomain = Route::input('cu') @endphp
<!-- Top Bar
============================================= -->
<div id="top-bar">
  <div class="container">

    <div class="row justify-content-between">
      <div class="col-12 col-md-auto">
      </div>

      <div class="col-12 col-md-auto">
        <!-- Top Social
        ============================================= -->
        <ul id="top-social">
          @if(!empty($cu->facebook))
            <li><a href="{{ $cu->facebook }}" class="h-bg-facebook"><span class="ts-icon"><i class="fa-brands fa-facebook-f"></i></span><span class="ts-text">Facebook</span></a></li>
          @endif

          @if(!empty($cu->instagram))
            <li><a href="{{ $cu->instagram }}" class="h-bg-instagram"><span class="ts-icon"><i class="fa-brands fa-instagram"></i></span><span class="ts-text">Instagram</span></a></li>
          @endif

          @if(!empty($cu->youtube))
            <li><a href="{{ $cu->youtube }}" class="h-bg-youtube"><span class="ts-icon"><i class="fa-brands fa-youtube"></i></span><span class="ts-text">Youtube</span></a></li>
          @endif

          @if(!empty($cu->tiktok))
            <li><a href="{{ $cu->tiktok }}" class="h-bg-tiktok"><span class="ts-icon"><i class="fa-brands fa-tiktok"></i></span><span class="ts-text">Tiktok</span></a></li>
          @endif

          <li><a href="tel:+1.11.85412542" class="h-bg-call"><span class="ts-icon"><i class="fa-solid fa-phone"></i></span><span class="ts-text">{{ $cu->telp }}</span></a></li>

          <li><a href="mailto:info@canvas.com" class="h-bg-email3"><span class="ts-icon"><i class="fa-solid fa-envelope"></i></span><span class="ts-text">{{ $cu->email }}</span></a></li>

          <li class="top-links-item"><a href="{{ route('home') }}">PUSKOPCUINA</a></li>
        </ul><!-- #top-social end -->
      </div>

    </div>
  </div>
</div><!-- #top-bar end -->

<header id="header" class="full-header">
  <div id="header-wrap">
    <div class="container">
      <div class="header-row">
  
        <div id="logo">
          @php $imagepathCu = 'images/logo/' @endphp
          @if(!empty($cu->logo) && is_file($imagepathCu.$cu->logo.".jpg"))
            <a href="{{ route('home.cu', $subdomain) }}">
              <img class="logo-default" src="{{ asset($imagepathCu . $cu->logo . '.jpg') }}" alt="{{ $cu->name }}">
            </a>
          @endif
        </div>
  
        <div class="header-misc ">
          <div id="top-search" class="header-misc-icon">
            <a href="#" id="top-search-trigger"><i class="uil uil-search"></i><i class="bi-x-lg"></i></a>
          </div>
        </div>

        <div class="primary-menu-trigger">
          <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">
            <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
          </button>
        </div>

        <nav class="primary-menu">
          <ul class="menu-container">
            <!-- home -->
            <li class="menu-item {{ Request::is('/') ? 'current' : '' }}"><a class="menu-link" href="{{ route('home.cu', $subdomain) }}"><div>CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</div></a>
            </li>
      
            <!-- artikel -->
            <li class="menu-item {{ Request::is('/artikel*') ? 'current' : '' }}"><a class="menu-link" href="#"><div>Artikel</div></a>
              <ul class="sub-menu-container">
                <li class="menu-item {{ Request::is('/artikel') ? 'current' : '' }}"><a class="menu-link" href="{{ route('artikel.cu', $subdomain) }}"><div>Semua Kategori</div></a></li>
                @foreach($artikelKategoriList as $item)
                <li class="menu-item {{ Request::is('/artikel'.$item->slug) ? 'current' : '' }}"><a class="menu-link" href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}""><div>{{ $item->name }}</div></a></li>
                @endforeach
              </ul>
            </li>
      
            <!-- tp/kp -->
            <li class="menu-item {{ Request::is('/tp') ? 'current' : '' }}"><a class="menu-link" href="{{ route('tp', $subdomain) }}"><div>Tempat/Kantor Pelayanan</div></a>
            </li>
      
            <!-- produk -->
            <li class="menu-item {{ Request::is('/produk') ? 'current' : '' }}"><a class="menu-link" href="{{ route('produk', $subdomain) }}"><div>Produk & Pelayanan</div></a>
            </li>
      
            <!-- dokumen -->
            <li class="menu-item {{ Request::is('/dokumen') ? 'current' : '' }}"><a class="menu-link" href="{{ route('dokumen', $subdomain) }}"><div>Dokumen</div></a>
            </li>
      
          </ul>
        </nav>

        <form class=" top-search-form" action="{{ route('artikel.cari.cu',['cu'=>$subdomain,'cari' => request('cari')] ) }}" method="get">
          <input type="text" name="q" class="form-control" value="{{ request('cari') }}" placeholder="Ketik &amp; tekan tombol enter untuk mencari" autocomplete="off">
        </form>
      </div>
    </div>
  </div>
  <div class="header-wrap-clone"></div>
</header><!-- #header end -->
