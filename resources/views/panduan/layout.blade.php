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
	<title>Panduan SIMO</title>
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
	<link rel="stylesheet" type="text/css" href="{{mix('css/admin/libs.css')}}" >
	<link rel="stylesheet" type="text/css" href="{{asset('css/admin/v-tooltip-style.css')}}" >
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script type="text/javascript" src="{{ URL::asset('js/admin/libs.js') }}"></script>
	<script type="text/javascript" src="{{ URL::asset('js/admin/prism.min.js') }}"></script>
	<script type="text/javascript" src="{{ URL::asset('js/admin/sticky.min.js') }}"></script>
	<script type="text/javascript" src="{{ URL::asset('js/admin/components_scrollspy.js') }}"></script>

	<!-- /core JS files -->

	<!-- Html5 Shim and Respond.js IE8 support of Html5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/Html5shiv/3.7.0/Html5shiv.js"></script>
	<script  src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body data-spy="scroll" data-target=".sidebar-component-right">
	
	<!-- first navbar -->
	<div class="navbar navbar-expand-md navbar-dark bg-indigo d-print-none">

		<div class="navbar-brand wmin-0 mr-0">
				<router-link :to="{ name: 'dashboard' }" class="d-inline-block">
						<img src="/images/simo.png">
				</router-link>
		</div>

		<div class="d-md-none">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
				<i class="icon-tree5"></i>
			</button>
		</div>

		<div class="collapse navbar-collapse" id="navbar-mobile">
				<span class="navbar-text ml-md-3 mr-md-auto">
					<span class="badge bg-info-400">
							<span>3.0.6</span>
					</span>
				</span>
			</div>
	</div>

	<!-- second navbar -->
	<div class="navbar navbar-expand-md navbar-light d-print-none">
			<div class="text-center d-md-none w-100">
					<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-navigation">
							<i class="icon-unfold mr-2"></i>
							Menu
					</button>
			</div>

			<div class="navbar-collapse collapse" id="navbar-navigation">


				<!-- navbar right -->
				<ul class="navbar-nav ml-md-auto">

					<!-- print -->
					<li class="nav-item">
						<a href="#" onclick="printfunc()" class="navbar-nav-link"><i class="icon-printer2 mr-2"></i>  PRINT/CETAK PANDUAN</a>
					</li>
				</ul>
			</div>
	</div>

	<!-- header -->
	<div class="page-header">
		<div class="page-header-content header-elements-md-inline">

			<div class="page-title d-flex">
				<h4>
					<i class="icon-book3 mr-2"></i>
					<span class="font-weight-semibold">Panduan SIMO</span>
					<small class="d-block text-muted">Pengenalan dan tata cara penggunaan aplikasi SIMO</small>	
				</h4>
			</div>

		</div>
	</div>

	<!-- content -->
	<div class="page-content">
		<div class="content-wrapper">

			<div class="content">
				<div class="d-flex align-items-start flex-column flex-md-row">

					<div class="w-100 order-2 order-md-1">
						<!-- content -->
						@yield('content')
					</div>

					<!-- sidebar -->
					@include('panduan.sidebar')

				</div>
			</div>

		</div>
	</div>

	<!-- footer -->
	<div class="navbar navbar-expand-lg navbar-light d-print-none">
		<div class="text-center d-lg-none w-100">
			<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
				<i class="icon-unfold mr-2"></i>
				SIMO © {{ date("Y") }}. All Rights Reserved by Puskopdit BKCU Kalimantan
			</button>
		</div>

		<div class="navbar-collapse collapse" id="navbar-footer">
			<span class="navbar-text">
				© {{ date("Y") }}. All Rights Reserved by <a href="https://puskopditbkcukalimantan.org/" target="_blank">Puskopdit BKCU Kalimantan</a>
			</span>
		</div>
	</div>

	<script>
	function printfunc() {
		window.print();
	}
</script>
</body>
</Html>
