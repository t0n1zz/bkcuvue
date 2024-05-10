<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- Viewport Meta Tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
      404 - Not Found
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

</head>
<body class="stretched">
  <div id="wrapper" class="clearfix">


    <section id="content">
      <div class="content-wrap">
        <div class="container">

          <div class="row align-items-center col-mb-80">

            <div class="col-lg-12">
              <div class="error404 text-center">404</div>
              <h3 class="text-center">
                Ooopps.! Halaman yang kamu cari tidak ditemukan
                <br/>
                <small class="text-muted">Silahkan memeriksa kembali alamat website yang ingin kamu tuju</small>
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>

  </div>

</body>
</html>
