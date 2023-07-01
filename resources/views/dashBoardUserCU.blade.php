@extends('_layouts.layout')

@section('css')

@stop

@section('content')

    <body class="stretched">
        @csrf
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <div class="container">
            <div class="row">
                <div class="profile-nav col-md-3">
                    <div class="panel">
                        <div class="user-heading round" style="padding-bottom: 45px">
                            <a href="#">
                                @if (Auth::user()->anggota_cu->gambar)
                                    <img
                                        src="{{ asset('/images/AnggotaCu/' . Auth::user()->anggota_cu->gambar . '.jpg') }}">
                                @else
                                    @if (Auth::user()->anggota_cu->kelamin == 'PEREMPUAN')
                                        <img src="{{ asset('/images/no_image_woman.jpg') }}">
                                    @else
                                        <img src="{{ asset('/images/no_image_man.jpg') }}">
                                    @endif
                                @endif
                            </a>
                            <h1 style="font-weight: 500">{{ Auth::user()->name }}</h1>
                            <p style="font-weight: 400">{{ Auth::user()->anggota_cu_cu->no_ba }}</p>
                        </div>
                    </div>
                </div>
                <div class="profile-info col-md-9">
                    <div class="panel2">
                        <h1 style="text-align: center">PROFIL</h1>
                        <div class="panel-body bio-graph-info">
                            <div class="row justify-content-md-center">
                                <div class="bio-row">
                                    <p><span>Nama </span> {{ Auth::user()->name }}</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Tgl.Lahir </span>
                                        {{ date('d-m-Y', strtotime(Auth::user()->anggota_cu->tanggal_lahir)) }} </p>
                                </div>
                                <div class="bio-row">
                                    <p><span>No.BA </span> {{ Auth::user()->anggota_cu_cu->no_ba }}</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Tgl. Jadi Anggota</span>
                                        {{ date('d-m-Y', strtotime(Auth::user()->anggota_cu_cu->tanggal_masuk)) }}</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Pekerjaan </span> {{ Auth::user()->anggota_cu->pekerjaan }}</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Email </span>
                                        @if (Auth::user()->anggota_cu->email)
                                            {{ Auth::user()->anggota_cu->email }}
                                        @else
                                            Belum Ada
                                        @endif
                                    </p>
                                </div>
                                <div class="bio-row">
                                    <p><span>No. HP </span> {{ str_replace("'", '', Auth::user()->anggota_cu->hp) }}</p>
                                </div>
                                <div class="bio-row">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container"style="margin-top:20px">
            <div class="row text-center">
                <div class="col" style="margin-top: 10px">
                    <a href="/mutasirekening" class="button button-border button-rounded nomargin" aria-expanded="false"
                        style="height: 80px;width:100%">
                        <div>MUTASI REKENING</div>
                    </a>
                </div>
                <div class="col" style="margin-top: 10px">
                    <a href="/simulasipinjaman" class="button button-border button-rounded nomargin"
                        style="height:80px;width:100%">
                        <div>SIMULASI PINJAMAN</div>
                    </a>
                </div>
                <div class="col" style="margin-top: 10px">
                    <a href="/logout" class="button button-border button-rounded nomargin" style="height: 80px;width:100%">
                        <div>LOGOUT</div>
                    </a>
                </div>
            </div>
            {{-- <a href="/kalenderkegiatan" class="button button button-border button-rounded center"><div>KALENDER KEGIATAN</div></a> --}}
            <div class="card" id="cardPP" style="margin-top:20px;margin-bottom:10px">
                <h2 class="text-center">DATA PENGHASILAN DAN PENGELUARAN</h2>
                <div class="card-header">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                {{-- <input type="text" id="datepicker" name="date"> --}}
                                <label for="pemasukkan">Penghasilan:</label>
                                <input type="text" id="pemasukkan" name="pemasukkan" value="" class="form-control"
                                    placeholder="Pemasukkan">
                                <label for="pengeluaran" style="margin-top: 10px">Pengeluaran:</label>
                                <input type="pengeluaran" id="pengeluaran" name="pengeluaran" value=""
                                    class="form-control" placeholder="Pengeluaran">
                                <div class="alert alert-danger" role="alert" id="alert" style="margin-top: 10px">
                                    Penghasilan dan Pengeluaran Harus Diisi
                                </div>
                                <div style="margin-top:10px">
                                    <button class="button button-3d nomargin" type="button" id="simpan"
                                        name="login">Simpan</button>
                                </div>

                            </div>
                            <div class="col-md-6 table-responsive">
                                <table class="table table-bordered  table-hover" id="tablePP">
                                    <thead>
                                        <tr class="text-nowrap">
                                            <th>Tanggal</th>
                                            <th>Pemasukkan</th>
                                            <th>Pengeluaran</th>
                                        </tr>
                                    </thead>
                                    <tbody id="isiTable">
                                    </tbody>
                                    <span></span>
                                </table>
                                <div class="pagination"></div>
                                <div id="emptyDataMessage" class="centered-message" style="display: none;">Belum Terdapat
                                    Data</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

@stop

@section('js')

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/autonumeric@4.1.0"></script>
    <script type="text/javascript">
        (function($) {
            $(document).ready(function() {
                $("#datepicker").datepicker();
            });
        })(jQuery);

        var formatter = new Intl.NumberFormat('en-ID', {
            style: 'currency',
            currency: 'IDR',
        });

        function formatToRp(nilai) {
            return 'Rp. ' + formatter.format(nilai).replace(/[IDR]/gi, '').replace(/(\.+\d{2})/, '').trimLeft()
        }

        function handleResponse(res) {
            $('#tablePP tbody').empty();
            var data = res['data']['data']
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i]) {
                        var parts = data[i]['tgl_input'].split("-");
                        var formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
                        $('#tablePP tbody').append('<tr><td class="text-nowrap">' + formattedDate +
                            '</td><td class="text-nowrap">' + formatToRp(data[i]['penghasilan']) + '</td><td class="text-nowrap">' + formatToRp(data[i]['pengeluaran']) + '</td></tr>');

                    }
                }
            } else {
                $("#emptyDataMessage").show();
            }

        }

        function getData() {
            $.ajax({
                url: '/storePenghasilan',
                type: 'GET',
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                success: function(response) {
                    handleResponse(response)
                    $('.pagination').html(response.links);
                }
            });
        }

        $(document).ready(function() {
            getData();

            function loadPage(url) {
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    success: function(response) {
                        handleResponse(response)
                        $('.pagination').html(response.links);
                    }
                });
            }

            $('#alert').hide();
            window.pemasukkan = new AutoNumeric('#pemasukkan', {
                allowDecimalPadding: false,
                createLocalList: false,
                minimumValue: "0",
                modifyValueOnWheel: false,
            });

            window.pengeluaran = new AutoNumeric('#pengeluaran', {
                allowDecimalPadding: false,
                createLocalList: false,
                minimumValue: "0",
                modifyValueOnWheel: false,
            });


            $(document).on('click', '.pagination a', function(event) {
                event.preventDefault();
                var url = $(this).attr('href');
                loadPage(url);
            });


            $("#simpan").click(function() {
                var pemasukkan = $('#pemasukkan').val().replace(/,/g, '');
                var pengeluaran = $('#pengeluaran').val().replace(/,/g, '');
                if (pemasukkan == '' || pengeluaran == '') {
                    $('#alert').show();
                } else {
                    $.ajax({
                        url: "/storePenghasilan",
                        cache: false,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            "_token": "{{ csrf_token() }}",
                            "penghasilan": pemasukkan,
                            "pengeluaran": pengeluaran
                        },

                        success: function(response) {
                            handleResponse(response);
                            $("#emptyDataMessage").hide();
                            $('.pagination').html(response.links);
                        },
                    });
                }
            });



        });
    </script>


    <style type="text/css">
        body {
            color: #797979;
            background: #f1f2f7;
            font-family: 'Open Sans', sans-serif;
            padding: 0px !important;
            margin: 0px !important;
            font-size: 15px;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
        }

        .profile-nav,
        .profile-info {
            margin-top: 30px;
        }

        .profile-nav .user-heading {
            background: #1ABC9C;
            color: #fff;
            border-radius: 4px 4px 0 0;
            -webkit-border-radius: 4px 4px 0 0;
            padding: 30px;
            text-align: center;
        }

        .profile-nav .user-heading.round a {
            border-radius: 50%;
            -webkit-border-radius: 50%;
            border: 10px solid rgba(255, 255, 255, 0.3);
            display: inline-block;
        }

        .profile-nav .user-heading a img {
            width: 112px;
            height: 112px;
            border-radius: 50%;
            -webkit-border-radius: 50%;
        }

        .profile-nav .user-heading h1 {
            font-size: 22px;
            font-weight: 300;
            margin-bottom: 5px;
        }

        .profile-nav .user-heading p {
            font-size: 12px;
        }


        .r-activity {
            /* margin: 6px 0 0; */
            font-size: 12px;
        }


        .panel2 {
            border: 2px solid black;
            padding-left: 60px;
        }

        .panel {
            border: 2px solid black;
        }

        .thead {
            color: #1ABC9C
        }


        .p-text-area,
        .p-text-area:focus {
            border: none;
            font-weight: 300;
            box-shadow: none;
            color: #c3c3c3;
            font-size: 16px;
        }

        .profile-info .panel-footer {
            background-color: #f8f7f5;
            border-top: 1px solid #e7ebee;
        }

        .profile-info .panel-footer ul li a {
            color: #7a7a7a;
        }

        .bio-graph-heading {
            background: #1ABC9C;
            color: #fff;
            text-align: center;
            font-style: italic;
            padding: 40px 110px;
            border-radius: 4px 4px 0 0;
            -webkit-border-radius: 4px 4px 0 0;
            font-size: 16px;
            font-weight: 300;
        }

        .bio-graph-info {
            color: #89817e;
        }

        .bio-graph-info h1 {
            font-size: 22px;
            font-weight: 300;
            margin: 0 0 20px;
        }

        .bio-row {
            width: 50%;
            float: left;
        }

        .bio-row p span {
            font-weight: 600;
            width: 150px;
            display: inline-block;
        }

        .bio-chart,
        .bio-desk {
            /* float: left; */
        }

        .bio-chart {
            width: 40%;
        }

        .file-pos {
            margin: 6px 0 10px 0;
        }

        #cardPP {
            border: 2px solid black;
        }

        #tablePP {
            text-align: center
        }

        .centered-message {
            text-align: center;
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
