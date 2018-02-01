<!DOCTYPE Html>
<Html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta name="description" content="">
    <meta name="author" content="">
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <title>SIMO</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <!-- icon-->
    <link rel="icon" href="{{asset('images/logo.png')}}" sizes="16x16">
    <link rel="icon" href="{{asset('images/logo.png')}}" sizes="32x32">
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}"/>
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="76x76" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="120x120" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="152x152" />
    <link rel="apple-touch-icon" href="{{asset('images/logo.png')}}" sizes="180x180" />

    <!-- Global stylesheets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="{{asset('css/admin/icons/icomoon/styles.css')}}" >
    <link rel="stylesheet" type="text/css" href="{{asset('css/admin/bootstrap.css')}}" >
    <link rel="stylesheet" type="text/css" href="{{asset('css/admin/core.css')}}" >
    <link rel="stylesheet" type="text/css" href="{{asset('css/admin/components.css')}}" >
    <link rel="stylesheet" type="text/css" href="{{asset('css/admin/colors.css')}}" >
    <link rel="stylesheet" type="text/css" href="{{asset('css/admin/extras/animate.min.css')}}" >
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/loaders/pace.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/core/libraries/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/core/libraries/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/loaders/blockui.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/ui/nicescroll.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/ui/drilldown.js') }}"></script>
    <!-- /core JS files -->

    <!-- Theme JS files -->
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/editors/summernote/summernote.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/forms/selects/bootstrap_select.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/admin/plugins/ui/prism.min.js') }}"></script>
    <!-- /Theme JS files -->

    <!-- Html5 Shim and Respond.js IE8 support of Html5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/Html5shiv/3.7.0/Html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

    <div id="app"></div>

    {{-- vue js file --}}
    <script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
    {{-- /vue js file --}}
</body>
</Html>
