<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<body>
    <header></header>
    <div id="hal1">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <h6 class="text-center">PERMOHONAN PENGAJUAN CUTI MANAJEMEN</h6>
        <table border="1">
            <tr>
                <td>Nama</td>
                <td colspan="2"> : {{ $data->aktivis->name }}</td>
            </tr>
            <tr>
                <td>Jabatan</td>
                <td colspan="2"> : {{ $data->aktivis->pekerjaan_aktif->name }}</td>
            </tr>
            <tr>
                <td>Bidang</td>
                @if ($is_manager)
                    <td colspan="2"> : {{ $bidang_name }}</td>
                @else
                    <td colspan="2"> : {{ $data2->atasan->bidang->name }}</td>
                @endif
            </tr>
            <tr>
                <td>Atasan</td>
                <td colspan="2"> : {{ $data2->atasan->aktivis_atasan->name }}</td>
            </tr>
        </table>
        <h6 class="text-center">URAIAN</h6>
        <table border="1">
            <tr>
                <td>Jenis Cuti</td>
                <td colspan="2"> : {{ ucfirst($data->jenis) }}</td>
            </tr>
            <tr>
                <td>Lama Cuti</td>
                <td colspan="2"> : {{ $data->lama }} Hari Kerja</td>
            </tr>
            <tr>
                <td>Periode Cuti</td>
                <td colspan="2">Tanggal dimulai : {{ $mulai }} <br> Tanggal selesai : {{ $selesai }}</td>
            </tr>
            <tr>
                <td>Mulai Masuk Kembali</td>
                <td colspan="2">Tanggal Masuk {{ $masuk }}</td>
            </tr>
        </table><br>
        <div>Alasan Cuti: </div>
        <div>1. {{ $data->alasan }}</div>
        <p class="text-justify">Selama melaksanakan masa cuti, seluruh tugas dan tanggungjawab pekerjaan diserahkan
            kepada
            {{ $data2->atasan->aktivis_atasan->name }}</p>
        <br>
        <div>Pontianak, {{ $tgl_pengajuan }} <br> Yang Mengajukan</div>
        <img class="ttdPersonalia" src="{{ asset($ttd_pengaju) }}" alt="">
        <div>{{ $data->aktivis->name }} <br> NIM. {{ $data->aktivis->nim_cu }}</div>
        <div></div>
        <br>
        <hr>
        <h6 class="text-center">VERIFIKASI KEPEGAWAIAN</h6>
        <div>Cuti yang diambil dalam tahun ini : </div>
        <table>
            <tr>
                <td>1. Cuti Tahunan</td>
                <td>: {{ $data->lama }} Hari, tgl {{ $mulai }} s.d. {{ $selesai }}</td>
            </tr>
            <tr>
                <td>2. Cuti Menikah</td>
                <td>: .... Hari, tgl ..... s.d. .....</td>
            </tr>
            <tr>
                <td>3. Cuti Melahirkan</td>
                <td>: .... Hari, tgl ..... s.d. .....</td>
            </tr>
            <tr>
                <td>4. Karena Alasan Penting</td>
                <td>: .... Hari, tgl ..... s.d. .....</td>
            </tr>
            <tr>
                <td>Sisa Cuti Yang Boleh Diambil</td>
                @if ($sisaCuti > 0)
                    <td>: {{ $sisaCuti }} hari</td>
                @else
                    <td>: 0 hari</td>
                @endif
            </tr>
        </table>
        <br>
        <div>Pontianak, {{$tgl_pengajuan}} <br> Staf Personalia</div>
        <img class="ttdPersonalia" src="{{ asset($ttd_personalia) }}" alt="">
        <div>{{$personalia->aktivis2->name}} <br>NIM. {{$personalia->aktivis2->nim_cu}}</div>
    </div>
    <footer></footer>
</body>

<body>
    <header></header>
    <div id="hal1">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <h6 class="text-center">PERSETUJUAN CUTI</h6>
        <br>
        <div>Memperhatikan permohonan cuti :</div>
        <br>
        <table>
            <tr>
                <td>Nama</td>
                <td>: {{ $data2->atasan->aktivis_atasan->name }}</td>
            </tr>
            <tr>
                <td>Jabatan</td>
                @if ($is_manager)
                    <td colspan="2"> : General Manager</td>
                @else
                    <td>: Manajer {{ $data2->atasan->bidang->name }}</td>
                @endif
            </tr>
            <tr>
                <td>NIM</td>
                <td>: {{ $data2->atasan->aktivis_atasan->nim_cu }}</td>
            </tr>
            <tr>
                <td>Permohonan Cuti</td>
                <td>: Cuti Tahunan</td>
            </tr>
        </table>
        <br>
        @if (!$data->alasan_penolakan)
            <div>Cuti disetujui mulai : {{ $mulai }} s.d. {{ $selesai }}</div>
            <br>
        @endif
        @if ($data->alasan_penolakan)
            <div>Cuti ditolak karena :</div>
            <p>{{ $data->alasan_penolakan }}</p>
            <br>
        @endif
        <p class="text-justify">Jika diperlukan untuk bekerja selama cuti, maka yang bersangkutan bersedia dipanggil
            untuk bekerja. </p>
        <br>
        <div class="text-center">Pontianak, {{ $tgl_acc2 }}</div>
        <br>
        <div>
            <div>Mengetahui,</div>
            <div>Manajer {{ $data2->atasan->bidang->name }},</div>
            <img class="ttdPersonalia" src="{{ asset($ttd_atasan) }}" alt="">
            <div>{{ $data2->atasan->aktivis_atasan->name }} <br>NIM. {{ $data2->atasan->aktivis_atasan->nim_cu }}</div>
        </div>
        <div id="rightmost-div">
            <div>disetujui oleh,</div>
            <div>Personalia,</div>
            <img class="ttdPersonalia" src="{{ asset($ttd_personalia) }}" alt="">
            <div>{{ $personalia->aktivis2->name }} <br>NIM. {{ $personalia->aktivis2->nim_cu }}</div>
        </div>
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
        font-size: 12px;
    }

    #table-ttd div {
        margin-left: 50px
    }

    #kode {
        font-size: 10px
    }

    #hal1 {
        margin: 40px
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
