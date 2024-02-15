<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<body>
    <header></header>
    <div id="hal1">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <table>
            <tr>
                <td class="text-left">Yth. General Manager PUSKOPCUINA</td>
                <td class="text-right">{{ $now }}</td>
            </tr>
            <tr>
                <td class="text-left">di Pontianak</td>
            </tr>
        </table><br>

        <div>Dengan hormat, <br> Yang bertanda tangan di bawah ini:</div>
        <table>
            <tr>
                <td>Nama Lengkap</td>
                <td>: </td>
                <td colspan="2">{{ $data->aktivis->name }}</td>
            </tr>
            <tr>
                <td>Jabatan</td>
                <td>: </td>
                <td colspan="2">{{ $data->aktivis->pekerjaan_aktif->name }}</td>
            </tr>
            <tr>
                <td>Bidang</td>
                <td>: </td>
                @if ($is_manager)
                    <td colspan="2">{{ $bidang_name }}</td>
                @else
                    <td colspan="2">{{ $data2->atasan->bidang->name }}</td>
                @endif
            </tr>
            <tr>
                <td>Atasan</td>
                <td>: </td>
                <td colspan="2">{{ $data2->atasan->aktivis_atasan->name }}</td>
            </tr>
        </table><br>
        <div class="text-justify">
            Istri saya telah melahirkan seorang anak di {{ $data->tempat_lahir }} pada tanggal {{ $tgl_lahir }}.
            Sehubungan dengan itu, bermaksud mengajukan permohonan Tunjangan anak dengan keterangan sebagai berikut :
        </div>
        <table>
            <tr>
                <td>Nama Lengkap</td>
                <td>: </td>
                <td colspan="2">{{$data->name}}</td>
            </tr>
            <tr>
                <td>Tempat & Tgl. Lahir</td>
                <td>: </td>
                <td colspan="2">{{$data->tempat_lahir}}, {{$tgl_lahir}}</td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>: </td>
                <td colspan="2">{{$data->alamat}}</td>
            </tr>
        </table>
        <br>
        <div>
            Sebagai bahan pertimbangan, bersama ini terlampir : <br>
            1. Akta Kelahiran <br>
            2. Surat Keterangan Kelahiran
        </div><br>
        <div class="text-justify">Demikian permohonan tunjangan anak ini saya sampaikan atas perhatian dan kerjasamanya
            diucapkan terima kasih.</div><br>
        <div>Yang Mengajukan</div>
        <img class="ttdPersonalia" src="{{ asset($ttd_pengaju) }}" alt="">
        <div>{{ $data->aktivis->name }} <br> NIM. {{ $data->aktivis->nim_cu }}</div></div>
        <footer></footer>
</body>

<style>
    table {
        width: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 12px;
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
