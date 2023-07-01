@extends('_layouts.layout')
@section('css')

@stop
@section('content')

    <!-- content -->
    <section id="content" style="text-align: start" class="container content-wrap">
        <div class="card" id="cardPP" style="margin-top:20px;margin-bottom:10px">
            <h2 class="text-center">SIMULASI PINJAMAN</h2>
            <div class="card-header">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="tipe" id="menurun"
                                        value="menurun">
                                    <label class="form-check-label" for="menurun">
                                        BUNGA MENURUN
                                    </label>
                                </div>
                                <div class="form-check" style="margin-left: 20px">
                                    <input class="form-check-input" type="radio" name="tipe" id="tetap"
                                        value="tetap">
                                    <label class="form-check-label" for="tetap">
                                        ANGSURAN TETAP
                                    </label>
                                </div>
                            </div>
                            <div class="col-full" style="margin-top: 10px">
                                <label>Jumlah Pinjaman:</label>
                                <input id="jumlahPinjaman" name="jumlahPinjaman" value="" class="form-control"
                                    placeholder="Jumlah Pinjaman">
                            </div>

                            <div class="col-full">
                                <label>Lama Pembayaran (Bulan):</label>
                                <input id="lamaPembayaran" name="lamaPembayaran" value="" class="form-control"
                                    placeholder="Lama Pembayaran">
                            </div>

                            <div class="col-full">
                                <label>Bunga Pinjaman % (p.a):</label>
                                <input id="bungaPinjaman" name="bungaPinjaman" class="form-control"
                                    placeholder="Bunga Pinjaman">
                            </div>

                            <div class="col-full" style="margin-top: 10px">
                                <button class="button button-3d nomargin" type="button" id="hitung" name="hitung"
                                    value="hitung">Hitung</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12" style="margin:20px">
                <table class="table-responsive table-striped">
                    <thead id="table_head" class="table table-bordered text-nowrap">
                    </thead>
                    <tbody id="table_body" class=" table table-bordered text-nowrap">
                    </tbody>
                </table>
            </div>
        </div>
    </section>

@stop

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/autonumeric@4.1.0"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#menurun').prop('checked', true);
            window.jumlahPinjaman = new AutoNumeric('#jumlahPinjaman', {
                allowDecimalPadding: false,
                createLocalList: false,
                minimumValue: "0",
                modifyValueOnWheel: false,
            });


            var formatter = new Intl.NumberFormat('en-ID', {
                style: 'currency',
                currency: 'IDR',
            });

            function formatToRp(nilai) {
                return 'Rp. ' + formatter.format(nilai).replace(/[IDR]/gi, '').replace(/(\.+\d{2})/, '').trimLeft()
            }

            $('#hitung').click(function() {
                var tipe = $('input[name="tipe"]:checked').val();

                var jumlahPinjaman = $('#jumlahPinjaman').val().replace(/,/g, '');
                var lamaPembayaran = $('#lamaPembayaran').val();
                var bungaPinjaman = $('#bungaPinjaman').val().replace(/,/g, '.').replace(/%/g, '');
                var pokok;

                if (tipe == 'menurun') {
                    pokok = Math.ceil((jumlahPinjaman / lamaPembayaran) / 100) * 100;
                } else {
                    jumlahAngsuran = Math.ceil((jumlahPinjaman * bungaPinjaman / 100) * (1 / (1 - (1 / Math
                        .pow((1 + bungaPinjaman / 100), lamaPembayaran)))) / 100) * 100
                }

                $('#table_head').empty()
                $('#table_body').empty()
                $('#table_head').append(
                    '<tr class="text-nowrap"><td>Bulan</td><td>Angsuran Pinjaman</td><td>Bunga</td><td>Angsuran Pokok</td><td>Sisa Pinjaman</td></tr>'
                    )
                $('#table_body').append('<tr><td></td><td>Saldo Awal</td><td></td><td></td><td>' +
                    formatToRp(jumlahPinjaman) + '</td></tr>')
                if (tipe == 'menurun') {
                    for (let index = 0; index < lamaPembayaran; index++) {
                        if (index == lamaPembayaran - 1) {
                            pokok = jumlahPinjaman
                        }
                        var bunga = Math.ceil(((bungaPinjaman / 100) * jumlahPinjaman) / 100) * 100
                        jumlahAngsuran = pokok + bunga
                        jumlahPinjaman = jumlahPinjaman - pokok
                        $('#table_body').append('<tr><td>' + (index + 1) + '</td><td>' + formatToRp(
                                jumlahAngsuran) + '</td><td>' + formatToRp(bunga) + '</td><td>' +
                            formatToRp(pokok) + '</td><td>' + formatToRp(jumlahPinjaman) + '</td></tr>')
                    }
                } else {
                    for (let index = 0; index < lamaPembayaran; index++) {
                        var bunga = Math.ceil(((bungaPinjaman / 100) * jumlahPinjaman) / 100) * 100
                        if (index == lamaPembayaran - 1) {
                            jumlahAngsuran = Math.ceil(jumlahPinjaman + bunga)
                        }
                        pokok = jumlahAngsuran - bunga
                        jumlahPinjaman = jumlahPinjaman - pokok
                        $('#table_body').append('<tr><td>' + (index + 1) + '</td><td>' + formatToRp(
                                jumlahAngsuran) + '</td><td>' + formatToRp(bunga) + '</td><td>' +
                            formatToRp(pokok) + '</td><td>' + formatToRp(jumlahPinjaman) + '</td></tr>')
                    }
                }
            });

        });
    </script>

@stop
