<header id="header" class="header-size-sm" data-sticky-shrink="false">
  <div class="container">
    <div class="header-row justify-content-between">

      <!-- Logo
      ============================================= -->
      <div id="logo" class="col-auto ms-auto ms-mb-0 me-mb-0 order-md-2">
        <a href="{{ route('home') }}">
          <img class="logo-default mx-auto" srcset="{{ asset('images/logopus/logo.png') }}, {{ asset('images/logopus/logo@2x.png') }} 2x" src="{{ asset('images/logopus/logo@2x.png') }}" alt="PUSKOPCUINA Logo">
        </a>
      </div><!-- #logo end -->

      <div class="w-100 d-block d-md-none"></div>

      <div class="col-12 col-sm-6 col-md-4 justify-content-center justify-content-sm-start d-flex order-md-1 mb-4 mb-sm-0">
        <div class="d-flex">
          <a href="https://www.facebook.com/puskopcuina" target="_blank" class="social-icon rounded-circle bg-dark h-bg-facebook" style="--cnvs-socialicon-size:1.75rem;">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/puskopcuina" target="_blank" class="social-icon rounded-circle bg-dark h-bg-instagram" style="--cnvs-socialicon-size:1.75rem;">
            <i class="bi-instagram"></i>
            <i class="bi-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@PuskopcuinaOfficial" target="_blank" class="social-icon rounded-circle bg-dark h-bg-youtube" style="--cnvs-socialicon-size:1.75rem;">
            <i class="bi-youtube"></i>
            <i class="bi-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@puskopcuina" target="_blank" class="social-icon rounded-circle bg-dark h-bg-tiktok" style="--cnvs-socialicon-size:1.75rem;">
            <i class="bi-tiktok"></i>
            <i class="bi-tiktok"></i>
          </a>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4 order-md-3 mb-4 mb-md-0">
        <ul class="nav align-items-center justify-content-center justify-content-sm-end">
          <li class="nav-item">
            <div class="date-today text-uppercase badge bg-dark rounded-pill py-2 px-3 fw-medium"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div id="header-wrap" class="border-top border-f5">
    <div class="container">
      <div class="header-row justify-content-between flex-row-reverse flex-lg-row">

        <div class="header-misc">

          <!-- Top Search
							============================================= -->
          <div id="top-search" class="header-misc-icon">
            <a href="#" id="top-search-trigger"><i class="uil uil-search"></i><i class="bi-x-lg"></i></a>
          </div><!-- #top-search end -->

        </div>

        <div class="primary-menu-trigger">
          <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">
            <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
          </button>
        </div>

        <nav class="primary-menu with-arrows">
          <ul class="menu-container">
            <li class="menu-item menu-color-travel {{ Request::is('/') ? 'current' : '' }}">
              <a class="menu-link" href="{{ route('home') }}">
                <div>PUSKOPCUINA</div>
              </a>
            </li>
            <li class="menu-item mega-menu menu-color-home ">
              <a class="menu-link" href="#">
                <div>Artikel</div>
              </a>
              <div class="mega-menu-content mega-menu-style-2 border-0 rounded not-dark">
                <div class="container">
                  <div class="row">
                    <ul class="sub-menu-container mega-menu-column col-lg-3 dark bg-cover bg-center bg-overlay-mask overflow-hidden" data-class="down-xl:rounded up-xl:rounded-start" style="background-image: url({{ asset('images/image-articlen.jpg') }}); --cnvs-bg-overlay-mask-opacity: 0.65;">
                      <li class="menu-item">
                        <div class="widget px-3">
                          <h3 class="mb-2"><a href="{{ route('artikel') }}">ARTIKEL</a></h3>
                          <p class="mb-0">Melihat semua artikel yang telah dibuat oleh aktivis</p>
                        </div>
                      </li>
                    </ul>
                    @foreach($artikelKategoriList as $column)
                    <ul class="sub-menu-container mega-menu-column col">
                      @foreach($column as $item)
                      <li class="menu-item {{ Request::is('/artikel'.$item->slug) ? 'current' : '' }}">
                        <a class="menu-link" href="{{ route('artikel.kategori',$item->slug) }}">
                          <div>{{ $item->name }}</div>
                        </a>
                      </li>
                      @endforeach
                    </ul>
                    @endforeach
                  </div>
                </div>
              </div>
            </li>
            <li class="menu-item mega-menu menu-color-lifestyle ">
              <a class="menu-link" href="#">
                <div>Credit Union</div>
              </a>
              <div class="mega-menu-content mega-menu-style-2 border-0 rounded not-dark">
                <div class="container">
                  <div class="row">
                    <ul class="sub-menu-container mega-menu-column col-lg-3 dark bg-cover bg-center bg-overlay-mask overflow-hidden" data-class="down-xl:rounded up-xl:rounded-start" style="background-image: url({{ asset('images/kantorpuskop.png') }}); --cnvs-bg-overlay-mask-opacity: 0.65;">
                      <li class="menu-item">
                        <div class="widget px-3">
                          <h3 class="mb-2"><a href="{{ route('cu') }}">CREDIT UNION</a></h3>
                          <p class="mb-0">Melihat semua Credit Union anggota yang tersebar di Indonesia</p>
                        </div>
                      </li>
                    </ul>
                    @foreach($cuList as $column)
                    <ul class="sub-menu-container mega-menu-column col">
                      @foreach($column as $item)
                      <li class="menu-item">
                        <a class="menu-link" href="{{ route('home.cu',$item->slug) }}">
                          <div>{{ $item->name }}</div>
                        </a>
                      </li>
                      @endforeach
                    </ul>
                    @endforeach
                  </div>
                </div>
              </div>
            </li>
            <li class="menu-item mega-menu menu-color-tech ">
              <a class="menu-link" href="#">
                <div>Kegiatan</div>
              </a>
              <div class="mega-menu-content mega-menu-style-2 border-0 rounded not-dark">
                <div class="container">
                  <div class="row">
                    <ul class="sub-menu-container mega-menu-column col-lg-3 dark bg-cover bg-center bg-overlay-mask overflow-hidden" data-class="down-xl:rounded up-xl:rounded-start" style="background-image: url({{ asset('images/tentang_cu.png') }}); --cnvs-bg-overlay-mask-opacity: 0.65;">
                      <li class="menu-item">
                        <div class="widget px-3">
                          @foreach($periodeDiklatList as $column)
                            @foreach($column as $item)
                              <h3 class="mb-2"><a href="{{ route('diklat',$item) }}">KEGIATAN</a></h3>
                            @break
                            @endforeach
                          @break
                          @endforeach
                          <p class="mb-0">Kegiatan yang diselenggarakan oleh PUSKOPCUINA</p>
                        </div>
                      </li>
                    </ul>
                    @foreach($periodeDiklatList as $column)
                    <ul class="sub-menu-container mega-menu-column col">
                      @foreach($column as $item)
                      <li class="menu-item">
                        <a class="menu-link" href="{{ route('diklat',$item) }}">
                          <div>Periode {{ $item }}</div>
                        </a>
                      </li>
                      @endforeach
                    </ul>
                    @endforeach
                  </div>
                </div>
              </div>
            </li>
            <li class="menu-item mega-menu menu-color-food ">
              <a class="menu-link" href="#">
                <div>Tentang Kami</div>
              </a>
              <div class="mega-menu-content mega-menu-style-2 border-0 rounded not-dark">
                <div class="container">
                  <div class="row">
                    <ul class="sub-menu-container mega-menu-column col-lg-3 dark bg-cover bg-center bg-overlay-mask overflow-hidden" data-class="down-xl:rounded up-xl:rounded-start" style="background-image: url({{ asset('images/tentang_cu.png') }}); --cnvs-bg-overlay-mask-opacity: 0.65;">
                      <li class="menu-item">
                        <div class="widget px-3">
                          <h3 class="mb-2"><a href="{{ route('profile') }}">TENTANG KAMI</a></h3>
                          <p class="mb-0">Ingin tahu lebih banyak tentang kami</p>
                        </div>
                      </li>
                    </ul>
                    <ul class="sub-menu-container mega-menu-column col">
                      <li class="menu-item">
                        <a class="menu-link" href="{{ route('profile') }}">
                          <div>Profile</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a class="menu-link" href="{{ route('artikel.kategori','sejarah') }}">
                          <div>Sejarah</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a class="menu-link" href="{{ route('artikel.kategori','filosofi') }}">
                          <div>Filosofi</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu-item menu-color-travel {{ Request::is('dokumens') ? 'current' : '' }}">
              <a class="menu-link" href="{{ route('dokumens') }}">
                <div>Dokumen</div>
              </a>
            </li>
            <li class="menu-item menu-color-travel {{ Request::is('dokumens') ? 'current' : '' }}">
              <a class="menu-link" href="https://smartcu.id/" target="_blank">
                <div>sMartCU</div>
              </a>
            </li>
          </ul>
        </nav>

        <form class=" top-search-form" action="{{ route('artikel.cari',['cari' => request('cari')] ) }}" method="get">
          <input type="text" name="q" class="form-control" value="{{ request('cari') }}" placeholder="Ketik &amp; tekan tombol enter untuk mencari" autocomplete="off">
        </form>

      </div>
    </div>
  </div>

  <div class="header-wrap-clone"></div>

</header>