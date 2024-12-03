@php $subdomain = Route::input('cu') @endphp
<footer id="footer" class="dark">

  <div class="container">

    <!-- Footer Widgets
    ============================================= -->
    <div class="footer-widgets-wrap">
      <div class="row col-mb-50">

        <div class="col-lg-8">
          <div class="row col-mb-50">

            <div class="col-md-6">
              <div class="widget">
                <h4>PUSKOPCUINA </h4>
                <p>Merupakan lembaga yang tercipta dari kumpulan beberapa <strong>Credit Union (CU)</strong> di Indonesia yang memiliki pandangan yang sama dalam membantu anggota untuk membantu dirinya sendiri dan memberikan dampak positif bagi masyarakat sekitar.</p>
    
                <div style="background: url({{ asset('images/map.png') }}) no-repeat center center; background-size: 100%;">
                  <address>
                    <strong>Kantor:</strong><br>
                    Jl. Perdana Nomor 86A<br>
                    Pontianak, Kalimantan Barat 78121<br>
                  </address>
                  <abbr title="Phone Number"><strong>Phone:</strong></abbr> +62 561-765591<br>
                  <abbr title="Email Address"><strong>Email:</strong></abbr> nacufina@puskopcuina.org
                </div>
    
              </div>
            </div>

            <div class="col-md-6">
              <div class="widget widget_links">
                <h4>Navigasi Website</h4>
                  <ul>
                    <li><a href="{{ route('home') }}">Home</a></li>
                    <li><a href="{{ route('artikel') }}">Artikel</a></li>
                    <li><a href="{{ route('cu') }}">Credit Union</a></li>
                    <li><a href="{{ route('profile') }}">Profile</a></li>
                    <li><a href="{{ route('artikel.kategori','sejarah') }}">Sejarah</a></li>
                    <li><a href="{{ route('artikel.kategori','filosofi') }}">Filosofi</a></li>
                    <li><a href="{{ route('dokumens') }}">Dokumen</a></li>
                    <li><a href="https://smartcu.id/" target="_blank">sMartCU</a></li>
                  </ul>
              </div>

              <div class="widget widget_links">
                <h4>Jaringan External</h4>

                <ul>
                  <li><a href="https://www.aaccu.coop/" target="_blank">ACCU</a></li>
                  <li><a href="https://woccu.org/" target="_blank">WOCCU</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        <div class="col-lg-4">
          <div class="widget">
    
            @if($dataGerakan)
            <div class="row col-mb-30">
              <div class="col-lg-12">
                <h4>DATA PERIODE {{ date('F Y',strtotime($dataGerakan->periode)) }}</h4>
                <p>Data akumulasi dari gerakan PUSKOPCUINA per {{ date('F Y',strtotime($dataGerakan->periode)) }}</p>
              </div>
    
              <div class="col-lg-6 bottommargin-sm">
                <div class="counter counter-small"><span data-from="50" data-to="{{ $dataGerakan->total_anggota }}" data-refresh-interval="100" data-speed="2000" data-comma="true"></span></div>
                <h5 class="nobottommargin">Anggota Credit Union</h5>
              </div>
    
              <div class="col-lg-6 bottommargin-sm">
                <div class="counter counter-small"><span data-from="5" data-to="{{ $cuCount }}" data-refresh-interval="100" data-speed="5" data-comma="true"></span></div>
                <h5 class="nobottommargin">Credit Union</h5>
              </div>
    
              <div class="col-lg-6 bottommargin-sm">
                <div class="counter counter-small"><span data-from="10" data-to="{{ $aktivisCount }}" data-refresh-interval="100" data-speed="20" data-comma="true"></span></div>
                <h5 class="nobottommargin">Aktivis Credit Union</h5>
              </div> 
    
              <div class="col-lg-6 bottommargin-sm">
                <div class="counter counter-small"><span data-from="1" data-to="{{ $manajemenBKCUCount }}" data-refresh-interval="100" data-speed="5" data-comma="true"></span></div>
                <h5 class="nobottommargin">Manajemen PUSKOPCUINA</h5>
              </div> 

            </div>
            @endif
    
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
          Copyrights &copy; <?php echo date("Y") ?> All Rights Reserved by PUSKOPCUINA<br>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="d-flex justify-content-center justify-content-md-end mb-2">
            <a href="https://www.facebook.com/puskopcuina" class="social-icon border-transparent si-small h-bg-facebook" target="_blank">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://www.instagram.com/puskopcuina/" class="social-icon border-transparent si-small h-bg-instagram" target="_blank">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/@PUSKOPCUINA" class="social-icon border-transparent si-small h-bg-youtube" target="_blank">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-youtube"></i>
            </a>

            <a href="https://www.tiktok.com/@puskopcuina" class="social-icon border-transparent si-small h-bg-tiktok" target="_blank">
              <i class="fa-brands fa-tiktok"></i>
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
    
          <i class="bi-envelope2"></i> nacufina@puskopcuina.org <span class="middot">&middot;</span> <i class="bi-headphones"></i> +62 561-765591
        </div>

      </div>
    </div>
  </div><!-- #copyrights end -->

</footer>