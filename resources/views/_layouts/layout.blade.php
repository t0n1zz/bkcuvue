<!DOCTYPE html>
<html lang="en">
@php
$subdomain = Route::input('cu');
if($subdomain){
$cu = App\Cu::where('slug',$subdomain)->first();
}
@endphp

<head>
    <meta charset="utf-8">
    <!-- Viewport Meta Tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        @if($subdomain)
        CU {{ $cu->name }} - PUSKOPCUINA
        @else
        PUSKOPCUINA
        @endif
    </title>

    <!-- icon -->
    <link rel="icon" href="{{asset('images/logo.png')}}" sizes="16x16">
    <link rel="icon" href="{{asset('images/logo.png')}}" sizes="32x32">
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="76x76" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="120x120" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="152x152" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="180x180" />

    <!-- seo -->
    {!! SEO::generate(true) !!}

    <link rel="stylesheet" href="{{ asset('css/public/style.css') }}">

    <!-- Font Imports -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- fonts -->
    <link rel="stylesheet" href="{{ asset('css/public/font-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('css/public/et-line.css') }}">

    <!-- style -->
    <link rel="stylesheet" href="{{ asset('css/public/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('css/public/news.css') }}">
    <!-- <link rel="stylesheet" href="{{ asset('css/public/libs.css') }}"> -->
    <!-- <link rel="stylesheet" href="{{ asset('css/public/myStyle.css') }}"> -->

    <!-- external css -->
    @yield('css')

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js">
    </script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js">
    </script>
    <![endif]-->

    <style>
        /* Revolution Slider Styles */
        .hesperiden .tp-tab {
            border-bottom: 0;
        }

        .hesperiden .tp-tab:hover,
        .hesperiden .tp-tab.selected {
            background-color: #E5E5E5;
        }
    </style>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7HX764W96"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-T7HX764W96');
    </script> -->
</head>

<body class="stretched">

    <!-- wrapper -->
    <div id="wrapper">

        <!-- header -->
        @if($subdomain)
        @include('_layouts.headerCu')
        @else
        @include('_layouts.header')
        @endif

        <!-- content -->
        @yield('content')

        <!-- footer -->
        @if($subdomain)
        @include('_layouts.footerCu')
        @else
        @include('_layouts.footer')
        @endif

    </div>

    <!-- go to top -->
    <div id="gotoTop" class="uil uil-angle-up"></div>

    <!-- js -->
    <!-- <script src="{{ URL::asset('js/public/libs.js') }}"></script> -->
    <script src="{{ URL::asset('js/public/jquery.js') }}"></script>
    <script src="{{ URL::asset('js/public/plugins.min.js') }}"></script>
    <script src="{{ URL::asset('js/public/functions.bundle.js') }}"></script>
    <script src="{{ URL::asset('js/public/plugins.infinitescroll.js') }}"></script>
    <script>
        		// Navbar on hover
		jQuery('.nav.tab-hover a.nav-link').hover(function() {
			jQuery(this).tab('show');
		});

		// Current Date
		var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			a = new Date();

			jQuery('.date-today').html( weekday[a.getDay()] + ', ' + month[a.getMonth()] + ' ' + a.getDate() );

		// Infinity Scroll
		jQuery(window).on( 'load', function(){

			var $container = jQuery('.infinity-wrapper');

			$container.infiniteScroll({
				path: '.load-next-portfolio',
				button: '.load-next-portfolio',
				scrollThreshold: false,
				history: false,
				status: '.page-load-status'
			});

			$container.on( 'load.infiniteScroll', function( event, response, path ) {
				var $items = jQuery( response ).find('.infinity-loader');
				// append items after images loaded
				$items.imagesLoaded( function() {
					$container.append( $items );
					$container.isotope( 'insert', $items );
					setTimeout( function(){
						SEMICOLON.Modules.flexSlider();
					}, 1000 );
				});
			});

		});
    </script>

    <!-- external js -->
    @yield('js')


</body>

</html>