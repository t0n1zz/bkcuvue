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
    
    <!-- css -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="{{ asset('css/public/libs.css') }}">
    <link rel="stylesheet" href="{{ asset('css/public/myStyle.css') }}">

    <!-- fonts -->
    <link rel="stylesheet" href="{{ asset('css/public/font-icons.css') }}">

    <!-- external css -->
    @yield('css')

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js">
    </script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js">
    </script>
    <![endif]-->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7HX764W96"></script>
    <script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-T7HX764W96');
    </script>
</head>
<body class="no-transition" style="background-image: url({{ asset('images/patterns/default.png') }}); background-attachment: fixed;">

    <!-- wrapper -->
    <div id="wrapper" class="clearfix">

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
    <div id="gotoTop" class="icon-angle-up"></div>

    <!-- js -->
    <script src="{{ URL::asset('js/public/libs.js') }}"></script>

    <!-- external js -->
    @yield('js')

</body>
</html>
