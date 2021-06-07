<header id="header" class="full-header">

  <div id="header-wrap">

    <div class="container clearfix">

      <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

      <!-- Logo
      ============================================= -->
      <div id="logo" class="d-none d-sm-block">
        <a href="{{ route('home') }}" class="standard-logo" data-dark-logo="{{ asset('images/logoD.png') }}"><img src="{{ asset('images/logoD.png') }}" alt="PUSKOPCUINA Logo"></a>
        <a href="{{ route('home') }}" class="retina-logo" data-dark-logo="{{ asset('images/logoD.png') }}"><img src="{{ asset('images/logoD.png') }}" alt="PUSKOPCUINA Logo"></a>
      </div>

      <div id="logo" class="d-block d-sm-none">
        <a href="{{ route('home') }}" class="standard-logo" data-dark-logo="{{ asset('images/logoM.png') }}"><img src="{{ asset('images/logoM.png') }}" alt="PUSKOPCUINA Logo"></a>
        <a href="{{ route('home') }}" class="retina-logo" data-dark-logo="{{ asset('images/logoM.png') }}"><img src="{{ asset('images/logoM.png') }}" alt="PUSKOPCUINA Logo"></a>
      </div>
      
      <!-- #logo end -->

      <!-- Primary Navigation
      ============================================= -->
      <nav id="primary-menu">

        <ul>
          <!-- home -->
          <li class="{{ Request::is('/') ? 'current' : '' }}"><a href="{{ route('home') }}"><div>Home</div></a>
          </li>

          <!-- artikel -->
          <li class="{{ Request::is('/artikel*') ? 'current' : '' }}"><a href="#"><div>Artikel</div></a>
            <ul>
              <li class="{{ Request::is('/artikel') ? 'current' : '' }}"><a href="{{ route('artikel') }}"><div>Semua Kategori</div></a></li>
              @foreach($artikelKategoriList as $item)
              <li class="{{ Request::is('/artikel'.$item->slug) ? 'current' : '' }}"><a href="{{ route('artikel.kategori',$item->slug) }}""><div>{{ $item->name }}</div></a></li>
              @endforeach
            </ul>
          </li>

          <!-- kegiatan -->
          <li class="{{ Request::is('/kegiatan*') ? 'current' : '' }}"><a href="#"><div>Kegiatan</div></a>
            <ul>

              <!-- diklat -->
              <li class="{{ Request::is('/kegiatan/diklat*') ? 'current' : '' }}"><a href="#"><div>Diklat</div></a>
                <ul>
                  @foreach($periodeDiklatList as $items)
                    <li><a href="{{ route('diklat',$items) }}"><div>{{ $items }}</div></a></li>
                  @endforeach
                </ul>
              </li>
              
            </ul>
          </li>

          <!-- cu -->
          <li class="mega-menu"><a href="#"><div>Credit Union</div></a>
            <div class="mega-menu-content style-2 clearfix">
            @php $i = 0 @endphp
              @foreach($cuList as $items)
              @php $i++ @endphp
              <ul class="mega-menu-column col-lg-3">
                <li>
                  <ul>
                    @if($i == 1)
                      <li><a href="{{ route('cu')}}"><div>SEMUA CREDIT UNION</div></a></li>
                    @endif
                    @foreach($items as $item)
                    <li><a href="{{ route('home.cu',$item->slug)}}"><div>{{ "CU " . $item->name }}</div></a></li>
                    @endforeach
                  </ul>
                </li>
              </ul>
              @endforeach
            </div>
          </li>

          <!-- tentang -->
          <li class="{{ Request::is('/tentang_kami*') ? 'current' : '' }}"><a href="#"><div>Tentang Kami</div></a>
            <ul>

              <!-- profile -->
              <li class="{{ Request::is('/tentang_kami/profile') ? 'current' : '' }}"><a href="{{ route('profile') }}"><div>Profile</div></a></li>

              <!-- sejarah -->
              <li class="{{ Request::is('/artikel/kategori/sejarah') ? 'current' : '' }}"><a href="{{ route('artikel.kategori','sejarah') }}""><div>Sejarah</div></a></li>

              <!-- filosofi -->
              <li class="{{ Request::is('/artikel/kategori/filosofi') ? 'current' : '' }}"><a href="{{ route('artikel.kategori','filosofi') }}""><div>Filosofi</div></a></li>

              <!-- dokumen -->
              <li class="{{ Request::is('/dokumen') ? 'current' : '' }}"><a href="{{ route('dokumen') }}"><div>Dokumen</div></a></li>
            </ul>
          </li>
        </ul>

        <!-- Top Search
        ============================================= -->
        <div id="top-search">
          <a href="#" id="top-search-trigger"><i class="icon-search3"></i><i class="icon-line-cross"></i></a>
          <form action="{{ route('artikel.cari',['cari' => request('cari')] ) }}" method="get">
            <input type="text" name="cari" class="form-control" value="{{ request('cari') }}" placeholder="Cari Artikel">
          </form>
        </div><!-- #top-search end -->

      </nav><!-- #primary-menu end -->

    </div>

  </div>

</header>
