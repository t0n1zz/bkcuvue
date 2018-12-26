@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- Page Title -->
<section id="page-title" class="page-title-mini">

  <div class="container clearfix">
    <h1>Profile</h1>
    <span>Pengenalan singkat mengenai Puskopdit BKCU Kalimantan</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item">Tentang Kami</li>
      <li class="breadcrumb-item active" aria-current="page">Profile Us</li>
    </ol>
  </div>

</section><!-- #page-title end -->

<!-- Content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <!-- Title & image -->
      <div class="col_full">

        <div class="heading-block center nobottomborder">
          <h2>Puskopdit BKCU Kalimantan</h2>
          <span>Pengenalan singkat mengenai Puskopdit BKCU Kalimantan</span>
        </div>

        <div class="fslider" data-pagi="false" data-animation="fade">
          <div class="flexslider">
            <div class="slider-wrap">
              <div class="slide"><a href="#"><img src="{{ asset('images/bkcu.jpg') }}" alt="About Image"></a></div>
              <div class="slide"><a href="#"><img src="{{ asset('images/bkcu2.jpg') }}" alt="About Image"></a></div>
            </div>
          </div>
        </div>

      </div>

      <!-- data count -->
      <div class="col_one_fourth center" data-animate="bounceIn">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-building"></i>
        <div class="counter counter-large" style="color: #3498db;"><span data-from="10" data-to="43" data-refresh-interval="50" data-speed="1000"></span></div>
        <h5>Credit Union</h5>
      </div>

      <div class="col_one_fourth center" data-animate="bounceIn" data-delay="200">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-briefcase"></i>
        <div class="counter counter-large" style="color: #e74c3c;"><span data-from="10" data-to="45" data-refresh-interval="50" data-speed="1200"></span></div>
        <h5>Manajemen</h5>
      </div>

      <div class="col_one_fourth center" data-animate="bounceIn" data-delay="400">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-line2-users"></i>
        <div class="counter counter-large" style="color: #16a085;"><span data-from="1000" data-to="476147" data-refresh-interval="50" data-speed="1900"></span></div>
        <h5>Anggota Credit Union</h5>
      </div>

      <div class="col_one_fourth center col_last" data-animate="bounceIn" data-delay="600">
        <i class="i-plain i-xlarge divcenter nobottommargin icon-users"></i>
        <div class="counter counter-large" style="color: #9b59b6;"><span data-from="100" data-to="1741" data-refresh-interval="30" data-speed="1800"></span></div>
        <h5>Aktivis Credit Union</h5>
      </div>

      <div class="clear"></div>

      <div class="promo promo-light bottommargin">
        <h3>Siapakah Kami?</h3>
        Puskopdit BKCU Kalimantan (awalnya BK3D Kalbar) berdiri pada tanggal 27 November 1988 di Pontianak.<br/>
        Sebagai credit union sekunder,Puskopdit BKCU Kalimantan aktif mempromosikan dan memfasilitasi berdirinya credit union - credit union primer.<br/>
        <br/>
        Jaringan Puskopdit BKCU Kalimantan tersebar hampir ke seluruh wilayah Republik Indonesia.<br/>
        Mayoritas credit union anggota Puskopdit BKCU Kalimantan berkembang dengan baik;aset dan jumlah anggota cukup kencang peningkatannya.<br/><br/>
        Walaupun demikian, kami tetap menyadari masih diperlukan pembenahan-pembenahan baik internal maupun eksternal pada masa yang akan datang agar credit union mampu menghadapi berbagai dinamika yang terjadi.
      </div>

      <div class="clear"></div>

      <div class="divcenter center clearfix" style="max-width: 900px;">
        <br/>
        <h1>Pelayanan Kami</h1>
        <h2>Kami menyediakan Solusi, Cerdas & Terpercaya bagi anggota Credit Union.</h2>
      </div>
      <div class="line"></div>
      <div class="col_one_third">
        <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn">
          <div class="fbox-icon">
            <a href="#"><i class="icon-support"></i></a>
          </div>
          <h3>Keuangan</h3>
          <p>Layanan keuangan berupa simpanan dan pinjaman kepada Credit Union anggota Puskopdit BKCU Kalimantan.</p>
        </div>
      </div>

      <div class="col_one_third">
        <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="600">
          <div class="fbox-icon">
            <a href="#"><i class="icon-group"></i></a>
          </div>
          <h3>Pemberdayaan</h3>
          <p>Membantu anggota dalam mengusahakan untuk mampu menolong dirinya sendiri melalui pemberdayaan produk anggota</p>
        </div>
      </div>

      <div class="col_one_third col_last">
        <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="200">
          <div class="fbox-icon">
            <a href="#"><i class="icon-book2"></i></a>
          </div>
          <h3>Diklat</h3>
          <p>Berbagai macam pendidikan dan pelatihan guna menciptakan insan Credit Union yang unggul.</p>
        </div>
      </div>

      <div class="clear"></div>

      <div class="col_one_third nobottommargin">
        <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1200">
          <div class="fbox-icon">
            <a href="#"><i class="icon-desktop"></i></a>
          </div>
          <h3>Teknologi Informasi</h3>
          <p>Agar mampu terus memberikan pelayanan maksimal dan terdepan kepada anggota maka kami menawarkan solusi dalam memenuhi kebutuhan akan teknologi informasi</p>
        </div>
      </div>

      <div class="col_one_third nobottommargin">
        <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1600">
          <div class="fbox-icon">
            <a href="#"><i class="icon-health"></i></a>
          </div>
          <h3>Monitoring dan Evaluasi</h3>
          <p>Kami memperhatikan dan memastikan Credit Union anggota Puskopdit BKCU Kalimantan agar dapat terus beroperasi dengan maksimal</p>
        </div>
      </div>

      <div class="col_one_third col_last">
        <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1000">
          <div class="fbox-icon">
            <a href="#"><i class="icon-zoom-in2"></i></a>
          </div>
          <h3>Pemeriksaan</h3>
          <p>Melakukan pemeriksaan terhadap tata kelola Credit Union agar mampu terus berkelanjutan dalam menjalankan misi sejati Credit Union</p>
        </div>
      </div>

      <div class="line"></div>

      <h3>Temui Kami Di</h3>

      <div id="map" data-position-latitude="-0.03946" data-position-longitude="109.34875"></div>
      <script>
          (function($) {
              $.fn.CustomMap = function(options) {

                  var posLatitude = $('#map').data('position-latitude'),
                          posLongitude = $('#map').data('position-longitude');

                  var settings = $.extend({
                      home: {
                          latitude: posLatitude,
                          longitude: posLongitude
                      },
                      text: '<div class="map-popup"><h4>Puskopdit BKCU Kalimantan | Kantor Pusat</h4><p>Kantor Pusat dan Kantor District Office Barat.</p></div>',
                      icon_url: $('#map').data('marker-img'),
                      zoom: 15
                  }, options);

                  var coords = new google.maps.LatLng(settings.home.latitude, settings.home.longitude);

                  return this.each(function() {
                      var element = $(this);

                      var options = {
                          zoom: settings.zoom,
                          center: coords,
                          mapTypeId: google.maps.MapTypeId.ROADMAP,
                          mapTypeControl: false,
                          scaleControl: false,
                          streetViewControl: false,
                          panControl: true,
                          disableDefaultUI: true,
                          zoomControlOptions: {
                              style: google.maps.ZoomControlStyle.DEFAULT
                          },
                          overviewMapControl: true,
                      };

                      var map = new google.maps.Map(element[0], options);

                      var icon = {
                          url: settings.icon_url,
                          origin: new google.maps.Point(0, 0)
                      };

                      var marker = new google.maps.Marker({
                          position: coords,
                          map: map,
                          icon: icon,
                          draggable: false
                      });

                      var info = new google.maps.InfoWindow({
                          content: settings.text
                      });

                      google.maps.event.addListener(marker, 'click', function() {
                          info.open(map, marker);
                      });

                      var styles = [{
                          "featureType": "landscape",
                          "stylers": [{
                              "saturation": -100
                          }, {
                              "lightness": 65
                          }, {
                              "visibility": "on"
                          }]
                      }, {
                          "featureType": "poi",
                          "stylers": [{
                              "saturation": -100
                          }, {
                              "lightness": 51
                          }, {
                              "visibility": "simplified"
                          }]
                      }, {
                          "featureType": "road.highway",
                          "stylers": [{
                              "saturation": -100
                          }, {
                              "visibility": "simplified"
                          }]
                      }, {
                          "featureType": "road.arterial",
                          "stylers": [{
                              "saturation": -100
                          }, {
                              "lightness": 30
                          }, {
                              "visibility": "on"
                          }]
                      }, {
                          "featureType": "road.local",
                          "stylers": [{
                              "saturation": -100
                          }, {
                              "lightness": 40
                          }, {
                              "visibility": "on"
                          }]
                      }, {
                          "featureType": "transit",
                          "stylers": [{
                              "saturation": -100
                          }, {
                              "visibility": "simplified"
                          }]
                      }, {
                          "featureType": "administrative.province",
                          "stylers": [{
                              "visibility": "on"
                          }]
                      }, {
                          "featureType": "water",
                          "elementType": "labels",
                          "stylers": [{
                              "visibility": "on"
                          }, {
                              "lightness": -25
                          }, {
                              "saturation": -100
                          }]
                      }, {
                          "featureType": "water",
                          "elementType": "geometry",
                          "stylers": [{
                              "hue": "#ffff00"
                          }, {
                              "lightness": -25
                          }, {
                              "saturation": -97
                          }]
                      }];

                      map.setOptions({
                          styles: styles
                      });
                  });

              };
          }(jQuery));

          jQuery(document).ready(function() {
              jQuery('#map').CustomMap();
          });
      </script>

      <p class="nobottommargin">Jalan Imam Bonjol Gg. H. Mursyid 1 No. 7-8 Pontianak<br/>
      Kalimantan Barat 78123<br/>
      Telp : 0561-765591 • Fax : 0561-769459<br/>
      cucoborneo@hotmail.com</p>

      <br/>
    </div>

    <!-- visi misi nilai -->
    
    <div class="row common-height">

      <div class="col-lg-4 dark col-padding ohidden" style="background-color: #282828;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Misi</h3>
          <p style="line-height: 1.8;">Transform, agency working families thinkers who make change happen communities. Developing nations legal aid public sector our ambitions future aid The Elders economic security Rosa.</p>
          <i class="icon-bulb bgicon"></i>
        </div>
      </div>

      <div class="col-lg-4 dark col-padding ohidden" style="background-color: #34495e;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Visi</h3>
          <p style="line-height: 1.8;">Frontline respond, visionary collaborative cities advancement overcome injustice, UNHCR public-private partnerships cause. Giving, country educate rights-based approach; leverage disrupt solution.</p>
          <i class="icon-paperplane bgicon"></i>
        </div>
      </div>

      <div class="col-lg-4 dark col-padding ohidden" style="background-color: #e74c3c;">
        <div>
          <h3 class="uppercase" style="font-weight: 600;">Nilai-Nilai Inti</h3>
          <p style="line-height: 1.8;">Sustainability involvement fundraising campaign connect carbon rights, collaborative cities convener truth. Synthesize change lives treatment fluctuation participatory monitoring underprivileged equal.</p>
          <i class="icon-settings bgicon"></i>
        </div>
      </div>

      <div class="clear"></div>

    </div>
    <a href="#" class="button button-full center tright footer-stick">
      <div class="container clearfix">
        <strong><i>Slogan: Solusi Cerdas Terpercaya</i></strong>
      </div>
    </a>

  </div>

</section><!-- #content end -->

@stop

@section('js')

@stop
