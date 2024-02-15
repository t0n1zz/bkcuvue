<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<body>
    <header></header>
    <div id="hal1" style="font-family: Times-Roman">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <table>
            <tr>
                <td class="text-left">Yth. General Manager PUSKOPCUINA</td>
                <td class="text-right">Pontianak, {{ $now }}</td>
            </tr>
            <tr>
                <td class="text-left">Pontianak</td>
            </tr>
        </table><br>

        <div>Dengan hormat, <br> Yang bertanda tangan di bawah ini :</div>
        <table id="table1">
            <tr>
                <td style="vertical-align: top">Nama Lengkap</td>
                <td style="vertical-align: top">:</td>
                <td colspan="2" style="font-weight: bold">{{ $data->aktivis->name }}</td>
            </tr>
            <tr>
                <td style="vertical-align: top">Jabatan</td>
                <td style="vertical-align: top">:</td>
                <td colspan="2" style="font-weight: bold">{{ $data->aktivis->pekerjaan_aktif->name }}</td>
            </tr>
            <tr>
                <td style="vertical-align: top">Bidang</td>
                <td style="vertical-align: top">:</td>
                    <td colspan="2" style="font-weight: bold">{{ $bidang_name }}</td>
            </tr>
            <tr>
                <td style="vertical-align: top">Atasan</td>
                <td style="vertical-align: top">:</td>
                <td colspan="2" style="font-weight: bold">{{ $data2->atasan->aktivis_atasan->name}}</td>
            </tr>
        </table><br>

        <div class="text-justify">Bermaksud mengajukan perubahan kepangkatan pada Golongan dan atau Masa Kerja Golongan
             (MKG)* terdapat pada data dibawah ini:</div>
        <table id="table2" border="1">
            <thead>
                <tr>
                    <th rowspan="2" class="text-center" style="font-weight: bold">Tanggal Perubahan</th>
                    <th colspan="2" class="text-center" style="font-weight: bold">Inpasing Lama</th>
                    <th colspan="2" class="text-center" style="font-weight: bold">Inpasing Baru</th>
                </tr>
                <tr>
                    <th class="text-center" style="font-weight: bold">Golongan</th>
                    <th class="text-center" style="font-weight: bold">MKG</th>
                    <th class="text-center" style="font-weight: bold">Golongan</th>
                    <th class="text-center" style="font-weight: bold">MKG</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    @if ($data->tgl_perubahan)
                        <td class="text-center" >{{$tgl_perubahan}}</td>
                    @else
                        <td class="text-center" >-</td>
                    @endif
                    <td class="text-center" >{{$prev_grd}}/{{$data->currentMkg->prev_grb}}</td>
                    <td class="text-center" >{{$data->currentMkg->prev_mkg}}</td>
                    <td class="text-center" >{{$curr_grd}}/{{$data->gr_b}}</td>
                    <td class="text-center" >{{$data->mkg}}</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
        <br>
        <div >Demikian permohonan kenaikan Golongan dan Masa Kerja Golongan ( MKG ) ini saya sampaikan atas perhatian dan kerjasamanya diucapkan terima kasih.</div>
        <br><br>
        <div>Yang Mengajukan</div>
        <img class="ttdPersonalia" src="{{ asset($ttd_pengaju) }}" alt="">
        <div>{{ $data->aktivis->name }} <br> NIM. {{ $data->aktivis->nim_cu }}</div>
    </div>
    <footer></footer>
</body>

<style>
    table {
        width: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 12pt;
    }

    #table-ttd div {
        margin-left: 50px
    }

    #kode {
        font-size: 10px
    }

    #hal1 {
        margin: 60px;
        margin-top: 10px
    }

    .ttdPersonalia {
        height: 60px;

    }

    #table1 {
        margin-left: 5px
    }

    header {
        margin: 10px;
        padding: 0;
        width: 100%;
        background-image: url({{ url('images/header.png') }});
        background-size: cover;
        background-position: center top;
        height: 120px;
        /* Adjust the height of the header as needed */
    }

    footer {
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        z-index: -1;
        margin: 0;
        padding: 0;
        width: 100%;
        background-image: url({{ url('images/footer.png') }});
        background-size: cover;
        background-position: center top;
        height: 80px;
        /* Adjust the height of the header as needed */
    }

    * {
        margin: 0;
        padding: 0;
    }

    #rightmost-div {
        position: absolute;
        top: 65%;
        /* Adjust the vertical position as needed */
        right: 20px;
        /* Adjust the horizontal position as needed */
        transform: translate(65%, -85%);
        /* Center the div vertically */
        padding: 10px;
    }
</style>
