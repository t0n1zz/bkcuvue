@php $subdomain = Route::input('cu') @endphp
<footer id="footer" class="dark">

  <div class="container">

    <!-- Footer Widgets
    ============================================= -->
    <div class="footer-widgets-wrap clearfix">

      <div class="col_two_third">

        <div class="col_half">

          <div class="widget clearfix">
            <h4>PUSKOPCUINA </h4>
            <p>Merupakan lembaga yang tercipta dari kumpulan beberapa <strong>Credit Union (CU)</strong> di Indonesia yang memiliki pandangan yang sama dalam membantu anggota untuk membantu dirinya sendiri dan memberikan dampak positif bagi masyarakat sekitar.</p>

            <div style="background: url({{ asset('images/map.png') }}) no-repeat center center; background-size: 100%;">
              <address>
                <strong>Kantor:</strong><br>
                Jl. Imam Bonjol, Gang Haji Mursyid 1 No. 7-8<br>
                Pontianak, Kalimantan Barat 78123<br>
              </address>
              <abbr title="Phone Number"><strong>Phone:</strong></abbr> +62 561-765591<br>
              <abbr title="Email Address"><strong>Email:</strong></abbr> cucoborneo@hotmail.com
            </div>

          </div>

        </div>

        <div class="col_half col_last">

          <div class="widget widget_links clearfix">

            <h4>Navigasi Website</h4>
            
            @if($subdomain)
              <div class="col_full">
                <ul>
                  <li><a href="{{ route('home') }}">PUSKOPCUINA</a></li>
                  <li><a href="{{ route('home.cu', $subdomain) }}">CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</a></li>
                  <li><a href="{{ route('artikel.cu', $subdomain) }}">Artikel</a></li>
                  <li><a href="{{ route('tp', $subdomain) }}">Tempat/Kantor Pelayanan</a></li>
                  <li><a href="{{ route('produk', $subdomain) }}">Produk & Pelayanan</a></li>
                </ul>
              </div>
            @else
              <div class="col_half">
                <ul>
                  <li><a href="{{ route('home') }}">Home</a></li>
                  <li><a href="{{ route('artikel') }}">Artikel</a></li>
                  <li><a href="{{ route('cu') }}">Credit Union</a></li>
                  <li><a href="{{ route('profile') }}">Profile</a></li>
                </ul>
              </div>

              <div class="col_half col_last">
                <ul>
                  <li><a href="{{ route('artikel.kategori','sejarah') }}">Sejarah</a></li>
                  <li><a href="{{ route('artikel.kategori','filosofi') }}">Filosofi</a></li>
                  <li><a href="{{ route('dokumen') }}">Dokumen</a></li>
                </ul>
              </div>
            @endif

          </div>

          <div class="widget widget_links clearfix">

            <h4>Jaringan External</h4>

            <ul>
              <li><a href="http://www.aaccu.coop/" target="_blank">ACCU</a></li>
              <li><a href="http://woccu.org/" target="_blank">WOCCU</a></li>
            </ul>

          </div>

        </div>

      </div>

      <div class="col_one_third col_last">

        <div class="widget clearfix" style="margin-bottom: -20px;">

          <div class="row">

            <div class="col-lg-12">
              <h4>DATA PERIODE {{ date('F Y',strtotime($dataGerakan->periode)) }}</h4>
              <p>Data akumulasi dari gerakan PUSKOPCUINA per {{ date('F Y',strtotime($dataGerakan->periode)) }}</p>
            </div>

            <div class="col-lg-6 bottommargin-sm">
              <div class="counter counter-small"><span data-from="50" data-to="{{ $dataGerakan->total_anggota }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
              <h5 class="nobottommargin">Anggota Credit Union</h5>
            </div>

            <div class="col-lg-6 bottommargin-sm">
              <div class="counter counter-small"><span data-from="10" data-to="{{ $cuCount }}" data-refresh-interval="5" data-speed="1000" data-comma="true"></span></div>
              <h5 class="nobottommargin">Credit Union</h5>
            </div>

            <div class="col-lg-6 bottommargin-sm">
              <div class="counter counter-small"><span data-from="50" data-to="{{ $aktivisCount }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
              <h5 class="nobottommargin">Aktivis Credit Union</h5>
            </div> 

            <div class="col-lg-6 bottommargin-sm">
              <div class="counter counter-small"><span data-from="50" data-to="{{ $manajemenBKCUCount }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
              <h5 class="nobottommargin">Manajemen PUSKOPCUINA</h5>
            </div> 

          </div>

        </div>


      </div>

    </div><!-- .footer-widgets-wrap end -->

  </div>

  <!-- Copyrights
  ============================================= -->
  <div id="copyrights">

    <div class="container clearfix">

      <div class="col_half">
        Copyrights &copy; <?php echo date("Y") ?> All Rights Reserved by PUSKOPCUINA<br>
      </div>

      <div class="col_half col_last tright">
        <div class="fright clearfix">
          <a href="https://www.facebook.com/puskopcuina" class="social-icon si-small si-borderless si-facebook" target="_blank">
            <i class="icon-facebook"></i>
            <i class="icon-facebook"></i>
          </a>

          <a href="https://twitter.com/puskopcuina" class="social-icon si-small si-borderless si-twitter" target="_blank">
            <i class="icon-twitter"></i>
            <i class="icon-twitter"></i>
          </a>

          <a href="https://www.instagram.com/puskopcuina/" class="social-icon si-small si-borderless si-instagram" target="_blank">
            <i class="icon-instagram2"></i>
            <i class="icon-instagram2"></i>
          </a>
        </div>

        <div class="clear"></div>

        <i class="icon-envelope2"></i> cucoborneo@hotmail.com <span class="middot">&middot;</span> <i class="icon-headphones"></i> +62 561-765591
      </div>

    </div>

  </div><!-- #copyrights end -->

</footer>