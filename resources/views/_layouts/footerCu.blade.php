@php $subdomain = Route::input('cu') @endphp
<footer id="footer" class="dark">

  <div class="container">

    <!-- Footer Widgets
    ============================================= -->
    <div class="footer-widgets-wrap clearfix">

      <div class="col_two_third">

        <div class="col_half">

          <div class="widget clearfix">
            <h4>CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</h4>

            <div>
              <address>
                <strong>Kantor:</strong><br>
                {{ $cu->alamat }}
                <br>
              </address>
              <abbr title="Phone Number"><strong>Phone:</strong></abbr> {{ $cu->telp }}<br>
              <abbr title="Email Address"><strong>Email:</strong></abbr>  {{ $cu->email }}
            </div>

          </div>

        </div>

        <div class="col_half col_last">

          <div class="widget widget_links clearfix">

            <h4>Navigasi Website</h4>

            <div class="col_full">
              <ul>
                <li><a href="{{ route('home') }}">PUSKOPCUINA</a></li>
                <li><a href="{{ route('home.cu', $subdomain) }}">CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</a></li>
                <li><a href="{{ route('artikel.cu', $subdomain) }}">Artikel</a></li>
                <li><a href="{{ route('tp', $subdomain) }}">Tempat/Kantor Pelayanan</a></li>
                <li><a href="{{ route('produk', $subdomain) }}">Produk & Pelayanan</a></li>
              </ul>
            </div>

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
              <h4>DATA PERIODE {{ date('F Y',strtotime($laporanCu->periode)) }}</h4>
              <p>Data Konsolidasi CU {{ ucwords(str_replace('-', ' ', $subdomain)) }} per {{ date('F Y',strtotime($laporanCu->periode)) }}</p>
            </div>

            <div class="col-lg-6 bottommargin-sm">
              <div class="counter counter-small"><span data-from="50" data-to="{{ $laporanCu->total_anggota }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
              <h5 class="nobottommargin">Anggota Credit Union</h5>
            </div>

            <div class="col-lg-6 bottommargin-sm">
              <div class="counter counter-small"><span data-from="1" data-to="{{ $aktivisCount }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
              <h5 class="nobottommargin">Aktivis Credit Union</h5>
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

    </div>

  </div><!-- #copyrights end -->

</footer>