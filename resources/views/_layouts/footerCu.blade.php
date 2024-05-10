@php $subdomain = Route::input('cu') @endphp
<footer id="footer" class="dark">

  <div class="container">

    <!-- Footer Widgets
    ============================================= -->
    <div class="footer-widgets-wrap">
      <div class="row col-mb-50">

        <div class="col-md-6">
          <div class="widget">
            <div class="row">
              <div class="col-lg-12">
                <h4>CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</h4>
  
                <div>
                  <address class="mb-2">
                    <strong>Kantor:</strong><br>
                    {{ $cu->alamat }}
                  </address>
                  <abbr title="Phone Number"><strong>Phone:</strong></abbr> {{ $cu->telp }}<br>
                  <abbr title="Email Address"><strong>Email:</strong></abbr>  {{ $cu->email }}
                </div>
              </div>
              
              @if($laporanCu)
                <div class="col-lg-12">
                  <br/>
                  <b>Data Konsolidasi CU {{ ucwords(str_replace('-', ' ', $subdomain)) }} per {{ date('F Y',strtotime($laporanCu->periode)) }}</b>
                </div>
      
                <div class="col-lg-6">
                  <div class="counter counter-small"><span data-from="50" data-to="{{ $laporanCu->total_anggota }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
                  <h5 class="mb-0">Anggota Credit Union</h5>
                </div>
      
                <div class="col-lg-6">
                  <div class="counter counter-small"><span data-from="1" data-to="{{ $aktivisCount }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
                  <h5 class="mb-0">Aktivis Credit Union</h5>
                </div> 
                
              @endif
            </div>

          </div>
        </div>

        <div class="col-md-3">
          <div class="widget widget_links clearfix">
            <h4>Navigasi Website</h4>

              <ul>
                <li><a href="{{ route('home.cu', $subdomain) }}">CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}</a></li>
                <li><a href="{{ route('artikel.cu', $subdomain) }}">Artikel</a></li>
                <li><a href="{{ route('tp', $subdomain) }}">Tempat/Kantor Pelayanan</a></li>
                <li><a href="{{ route('produk', $subdomain) }}">Produk & Pelayanan</a></li>
              </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="widget widget_links clearfix">
            <h4>Jaringan External</h4>

              <ul>
                <li><a href="https://puskopcuina.org/">PUSKOPCUINA</a></li>
                <li><a href="https://www.aaccu.coop/" target="_blank">ACCU</a></li>
                <li><a href="https://woccu.org/" target="_blank">WOCCU</a></li>
              </ul>
          </div>
        </div>
        
      </div>

    </div><!-- .footer-widgets-wrap end -->

  </div>

  <!-- Copyrights
  ============================================= -->
  <div id="copyrights">
    <div class="container">
      <div class="row col-mb-30">

        <div class="col-md-6 text-center text-md-start">
          Copyrights &copy; <?php echo date("Y") ?> All Rights Reserved by PUSKOPCUINA & CU {{ ucwords(str_replace('-', ' ', $subdomain)) }}<br>
        </div>

        <div class="col-md-6 text-center text-md-end">
          <div class="d-flex justify-content-center justify-content-md-end mb-2">
            @if(!empty($cu->facebook))
              <a href="{{ $cu->facebook }}" class="social-icon border-transparent si-small h-bg-facebook" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            @endif

            @if(!empty($cu->instagram))
              <a href="{{ $cu->instagram }}" class="social-icon border-transparent si-small h-bg-instagram" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-instagram"></i>
              </a>
            @endif

            @if(!empty($cu->youtube))
              <a href="{{ $cu->youtube }}" class="social-icon border-transparent si-small h-bg-youtube" target="_blank">
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-youtube"></i>
              </a>
            @endif

            @if(!empty($cu->tiktok))
              <a href="{{ $cu->tiktok }}" class="social-icon border-transparent si-small h-bg-tiktok" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-tiktok"></i>
              </a>
            @endif
          </div>
    
          <i class="bi-envelope2"></i> {{ $cu->email }} <span class="middot">&middot;</span> <i class="bi-headphones"></i> {{ $cu->telp }}

        </div>
      </div>
    </div>
  </div><!-- #copyrights end -->

</footer>