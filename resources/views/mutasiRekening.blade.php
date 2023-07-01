@php
    $firstConditionFulfilled = false;
@endphp

@extends('_layouts.layout')

@section('css')

@stop

@section('content')

    <div id="loadingModal" class="modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <p>Mohon Tunggu...</p>
                </div>
            </div>
        </div>
    </div>

    <body class="stretched">
        <div class="container content-wrap">
            <div class="content-wrapper">
                <h1>MUTASI REKENING</h1>
                <div class="card text-center">
                    <h2>SIMPANAN</h2>
                    <div class="card-header">
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="nav-tabs-responsive" id="navbar">
                                <ul class="nav nav-tabs nav-justified" role="tablist" style="text-align: center">
                                    @foreach ($data as $produk)
                                        @if (
                                            $produk['produk_cu']['tipe'] == 'Simpanan Pokok' ||
                                                $produk['produk_cu']['tipe'] == 'Simpanan Wajib' ||
                                                $produk['produk_cu']['tipe'] == 'Simpanan Non Saham')
                                            @if ($loop->first)
                                                <li class="nav-item" id="{{ $produk['id'] }}"> <a
                                                        class="nav-link text active show" role="tab"
                                                        aria-selected="false" href="" data-toggle="tab"
                                                        onclick="setDataSimpanan({{ $produk['id'] }})"> <i
                                                            class="icon-user-plus mr-2"></i>{{ $produk['produk_cu']['name'] }}</a>
                                                </li>
                                            @else
                                                <li class="nav-item" id="{{ $produk['id'] }}"> <a class="nav-link text"
                                                        role="tab" aria-selected="false" href=""
                                                        data-toggle="tab" onclick="setDataSimpanan({{ $produk['id'] }})"> <i
                                                            class="icon-user-plus mr-2"></i>{{ $produk['produk_cu']['name'] }}</a>
                                                </li>
                                            @endif
                                        @endif
                                    @endforeach
                                </ul>
                            </div>
                            <table class="table table-bordered  table-hover" id="tableSimpanan">
                                <thead>
                                    <tr class="text-nowrap">
                                        <th>Tanggal</th>
                                        <th>Debet</th>
                                        <th>Kredit</th>
                                        <th>Saldo</th>
                                    </tr>
                                </thead>
                                <tbody id="isiTableSimpanan">
                                </tbody>
                            </table>
                            <div class="paginationSimpanan"></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav aria-label="Page navigation example" id="pageSimpanan">
                            <ul class="pagination">
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="card text-center" style="margin-top:10px">
                    <h2>PINJAMAN</h2>
                    <div class="card-header">
                        <div class="card-body">
                            <div class="table-responsive">
                                <div class="nav-tabs-responsive" id="navbar2">
                                    <ul class="nav nav-tabs nav-justified" role="tablist" style="text-align: center">
                                        @foreach ($data as $produk)
                                            @if (
                                                ($produk['produk_cu']['tipe'] == 'Pinjaman Kapitalisasi' ||
                                                    $produk['produk_cu']['tipe'] == 'Pinjaman Umum' ||
                                                    $produk['produk_cu']['tipe'] == 'Pinjaman Produktif') &&
                                                    !$firstConditionFulfilled)
                                                @php
                                                    $firstConditionFulfilled = true;
                                                @endphp
                                                <li class="nav-item" id="{{ $produk['id'] }}"> <a
                                                        class="nav-link text active show" role="tab"
                                                        aria-selected="false" href="" data-toggle="tab"
                                                        onclick="setDataPinjaman({{ $produk['id'] }})"> <i
                                                            class="icon-user-plus mr-2"></i>{{ $produk['produk_cu']['name'] }}</a>
                                                </li>
                                            @elseif (
                                                ($produk['produk_cu']['tipe'] == 'Pinjaman Kapitalisasi' ||
                                                    $produk['produk_cu']['tipe'] == 'Pinjaman Umum' ||
                                                    $produk['produk_cu']['tipe'] == 'Pinjaman Produktif') &&
                                                    $firstConditionFulfilled)
                                                <li class="nav-item" id="{{ $produk['id'] }}"> <a class="nav-link text"
                                                        role="tab" aria-selected="false" href=""
                                                        data-toggle="tab" onclick="setDataPinjaman({{ $produk['id'] }})">
                                                        <i
                                                            class="icon-user-plus mr-2"></i>{{ $produk['produk_cu']['name'] }}</a>
                                                </li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </div>
                                <table class="table table-bordered  table-hover" id="tablePinjaman">
                                    <thead>
                                        <tr class="text-nowrap">
                                            <th>Tanggal</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>Saldo</th>
                                        </tr>
                                    </thead>
                                    <tbody id="isiTablePinjaman">
                                    </tbody>
                                </table>
                                <div class="paginationPinjaman"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer" style="margin-bottom: 10px">
                    <nav aria-label="Page navigation example" id="pagePinjaman">
                        <ul class="pagination">
                        </ul>
                    </nav>
                </div>
            </div>
    </body>

@stop

@section('js')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript">
        var data;
        var produkTransaksiSimpananIndex;
        var produkTransaksiPinjamanIndex;
        var currentPageSimpanan = 1;
        var currentPagePinjaman = 1;

        function addCommas(nStr) {
            nStr += '';
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }

        function getData(id_simpanan, id_pinjaman) {
            $('#loadingModal').show();
            $(".modal-backdrop").show();
            $('#loadingModal').modal('show');
            $.ajax({
                url: 'getRekening',
                type: 'get',
                data: {
                    'id_produk_simpanan': id_simpanan,
                    'id_produk_pinjaman': id_pinjaman
                },
                dataType: 'json',
                success: function(response) {
                    handleResponseSimpanan(response['dataSimpanan']['data'],response.linksSimpanan);
                    handleResponsePinjaman(response['dataPinjaman']['data'],response.linksPinjaman)
                    $('#loadingModal').hide();
                    $(".modal-backdrop").hide();
                    $('body').removeClass('modal-open');
                    $('body').css('overflow', 'auto');
                }
            });
        }

         function getDataChangeTab(id,tipe) {
            $('#loadingModal').show();
            $(".modal-backdrop").show();
            $('#loadingModal').modal('show');
            $.ajax({
                url: 'getRekening',
                type: 'get',
                data: {
                    'id': id,
                    'tipe': tipe
                },
                dataType: 'json',
                success: function(response) {
                    if(tipe=='simpanan'){
                        handleResponseSimpanan(response['dataSimpanan']['data'],response.linksSimpanan);
                    }else{
                        handleResponsePinjaman(response['dataPinjaman']['data'],response.linksPinjaman)
                    }
                    $('#loadingModal').hide();
                    $(".modal-backdrop").hide();
                    $('body').removeClass('modal-open');
                    $('body').css('overflow', 'auto');
                }
            });
        }

        function handleResponseSimpanan(response,page) {
            var dataSimpanan = response;
            var len = dataSimpanan.length;
            $('#tableSimpanan tbody').empty();
            for (var i = 0; i < len; i++) {
                var saldoDebet = 0;
                var saldoKredit = 0;
                if (dataSimpanan) {
                    var parts = dataSimpanan[i]['tanggal'].split("-");
                    var formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
                    if (dataSimpanan[i]['saldo'] < 0) {
                        saldoDebet = dataSimpanan[i]['saldo'] * -1
                    } else {
                        saldoKredit = dataSimpanan[i]['saldo']
                    }
                    $('#tableSimpanan tbody').append('<tr><td class="text-nowrap">' + formattedDate +
                        '</td><td>' + addCommas(saldoDebet) + '</td><td>' + addCommas(saldoKredit) + '</td><td>' +
                        addCommas(dataSimpanan[i]['saldo_akhir']) + '</td></tr>');
                }
            }

            $('.paginationSimpanan').html(page);
        }

        function handleResponsePinjaman(response,page) {
            var dataPinjaman = response;
            var len = dataPinjaman.length;
            $('#tablePinjaman tbody').empty();
            for (var i = 0; i < len; i++) {
                var saldo = 0;
                if(i!=0){
                    saldo = dataPinjaman[i]['saldo']*-1
                }
                if (dataPinjaman) {
                     var parts = dataPinjaman[i]['tanggal'].split("-");
                    var formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
                    $('#tablePinjaman tbody').append('<tr><td class="text-nowrap">' + formattedDate +
                        '</td><td>' + 0 + '</td><td>' + addCommas(saldo) + '</td><td>' +
                        addCommas(dataPinjaman[i]['saldo_akhir']) + '</td></tr>');
                }
            }
            $('.paginationPinjaman').html(page);
        }

        function setDataSimpanan(val) {
            getDataChangeTab(val, 'simpanan');
        }

        function loadPage(url,tipe) {
            $('#loadingModal').show();
            $(".modal-backdrop").show();
            $('#loadingModal').modal('show');
            var activeTabIdSimpanan = 0;
            var activeTabIdPinjaman = 0;
            var id = 0;

            $('#navbar .nav-link.active').each(function() {
                activeTabIdSimpanan = $(this).parent().attr('id');
            });

            $('#navbar2 .nav-link.active').each(function() {
                activeTabIdPinjaman = $(this).parent().attr('id');
            });


            if(tipe=='simpanan'){
                id = activeTabIdSimpanan
            }else{
                id = activeTabIdPinjaman
            }

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: {
                    'id': id,
                    'tipe': tipe
                },

                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                success: function(response) {
                    if(tipe=='simpanan'){
                        handleResponseSimpanan(response['dataSimpanan']['data'],response.linksSimpanan);
                    }else{
                        handleResponsePinjaman(response['dataPinjaman']['data'],response.linksPinjaman)
                    }
                    $('.pagination').html(response.links);
                    $('#loadingModal').hide();
                    $('body').removeClass('modal-open');
                    $(".modal-backdrop").hide();
                    $('body').css('overflow', 'auto');
                }
            });
        }

        function setDataPinjaman(val) {
            getDataChangeTab(val, 'pinjaman');
        }


        $(document).on('click', '.paginationSimpanan a', function(event) {
            event.preventDefault();
            var url = $(this).attr('href');
            loadPage(url,'simpanan');
        });

         $(document).on('click', '.paginationPinjaman a', function(event) {
                event.preventDefault();
                var url = $(this).attr('href');
                loadPage(url,'pinjaman');
        });

        $(document).ready(function() {
            var activeTabIdSimpanan = 0;
            var activeTabIdPinjaman = 0;
            $('#navbar .nav-link.active').each(function() {
                activeTabIdSimpanan = $(this).parent().attr('id');
            });

            $('#navbar2 .nav-link.active').each(function() {
                activeTabIdPinjaman = $(this).parent().attr('id');
            });

            getData(activeTabIdSimpanan, activeTabIdPinjaman);
        });
    </script>



    <style type="text/css">
        .nav-link.text.active.show {
            background: #007BFF;
            color: white;
        }

        .nav-link.text.active {
            background: #007BFF;
            color: white;
        }

        .card {
            /* border-block: 5px black; */
        }

        #halaman {
            pointer-events: none
        }

        #halaman2 {
            pointer-events: none
        }

        .bd-example-modal-lg .modal-dialog {
            display: table;
            position: relative;
            margin: 0 auto;
            top: calc(50% - 24px);
        }

        .bd-example-modal-lg .modal-dialog .modal-content {
            background-color: transparent;
            border: none;
        }
    </style>
