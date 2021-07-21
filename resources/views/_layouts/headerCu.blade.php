<!-- Top Bar -->
<div id="top-bar">

  <div class="container clearfix">

    <div class="col_half nobottommargin">

      <!-- Top Links
      ============================================= -->
      <div class="top-links">
        <ul>
          <li><a href="{{ route('home') }}">PUSKOPCUINA</a></li>
        </ul>
      </div><!-- .top-links end -->

    </div>

    <div class="col_half fright col_last nobottommargin">

        <!-- Top Social
        ============================================= -->
        <div id="top-social">
          <ul>
            <li><a href="https://www.facebook.com/puskopcuina" class="si-facebook" target="_blank"><span class="ts-icon"><i class="icon-facebook"></i></span><span class="ts-text">Facebook</span></a></li>

            <li><a href="https://twitter.com/puskopcuina" class="si-twitter"><span class="ts-icon" target="_blank"><i class="icon-twitter"></i></span><span class="ts-text">Twitter</span></a></li>

            <li><a href="https://www.instagram.com/puskopcuina/" class="si-instagram" target="_blank"><span class="ts-icon"><i class="icon-instagram2"></i></span><span class="ts-text">Instagram</span></a></li>

            <li><a href="tel:+62561765591" class="si-call"><span class="ts-icon"><i class="icon-call"></i></span><span class="ts-text">+62 561-765591</span></a></li>

            <li><a href="mailto:cucoborneo@hotmail.com" class="si-email3"><span class="ts-icon"><i class="icon-email3"></i></span><span class="ts-text">cucoborneo@hotmail.com</span></a></li>
          </ul>
        </div><!-- #top-social end -->

      </div>
  </div>

</div>
    
<!-- header -->
<header id="header" class="full-header">

  <div id="header-wrap">

    <div class="container clearfix">

      <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

      <!-- Primary Navigation
      ============================================= -->
      <nav id="primary-menu">
        @php $subdomain = Route::input('cu') @endphp
        <ul>
          <!-- home -->
          <li class="{{ Request::is('/') ? 'current' : '' }}"><a href="{{ route('home.cu', $subdomain) }}"><div>CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</div></a>
          </li>

          <!-- artikel -->
          <li class="{{ Request::is('/artikel*') ? 'current' : '' }}"><a href="#"><div>Artikel</div></a>
            <ul>
              <li class="{{ Request::is('/artikel') ? 'current' : '' }}"><a href="{{ route('artikel.cu', $subdomain) }}"><div>Semua Kategori</div></a></li>
              @foreach($artikelKategoriList as $item)
              <li class="{{ Request::is('/artikel'.$item->slug) ? 'current' : '' }}"><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}""><div>{{ $item->name }}</div></a></li>
              @endforeach
            </ul>
          </li>

          <!-- tp/kp -->
          <li class="{{ Request::is('/tp') ? 'current' : '' }}"><a href="{{ route('tp', $subdomain) }}"><div>Tempat/Kantor Pelayanan</div></a>
          </li>

          <!-- produk -->
          <li class="{{ Request::is('/produk') ? 'current' : '' }}"><a href="{{ route('produk', $subdomain) }}"><div>Produk & Pelayanan</div></a>
          </li>

          <!-- produk -->
          <li class="{{ Request::is('/dokumen') ? 'current' : '' }}"><a href="{{ route('dokumen', $subdomain) }}"><div>Dokumen</div></a>
          </li>

        </ul>

        <!-- Top Search
        ============================================= -->
        <div id="top-search">
          <a href="#" id="top-search-trigger"><i class="icon-search3"></i><i class="icon-line-cross"></i></a>
          <form action="{{ route('artikel.cari.cu',['cu'=>$subdomain,'cari' => request('cari')] ) }}" method="get">
            <input type="text" name="cari" class="form-control" value="{{ request('cari') }}" placeholder="Cari Artikel">
          </form>
        </div><!-- #top-search end -->

      </nav><!-- #primary-menu end -->

    </div>

  </div>

</header>
