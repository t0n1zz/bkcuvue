<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<body>
    <header></header>
    <div id="hal1">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <h6 class="text-center">SURAT CUTI TAHUNAN <br>
            Nomor: {{ $no_lengkap }}</h6>
        <br>
        <p>1. Diberikan cuti tahunan untuk tahun {{ \Carbon\Carbon::now()->format('Y') }} kepada manajemen PUSKOPCUINA:
        </p>
        <table id="table">
            <tr>
                <td><span></span>Nama</td>
                <td colspan="2"> : {{ $data->aktivis->name }}</td>
            </tr>
            <tr>
                <td>NIM</td>
                <td colspan="2"> : {{ $data->aktivis->nim_cu }}</td>
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
        </table>
        <br><br>
        <div class="text-justify" id="par">Selama {{ $data->lama }} hari kerja, terhitung mulai tanggal
            {{ $mulai }}
            sampai dengan {{ $selesai }} dengan ketentuan sebagai berikut :
        </div>
        <ul id="lowercase">
            <li class="text-justify">Sebelum menjalankan cuti tahunan wajib menyerahkan pekerjaannya kepada atasan
                langsungnya atau pejabat lain yang ditunjuk.</li>
            <li> Setelah selesai menjalankan cuti tahunan wajib melaporkan diri kepada atasan
                langsungnya dan bekerja kembali sebagaimana biasa.
            </li>
        </ul>
        <br>
        <div>2. Demikianlah surat cuti tahunan ini dibuat untuk dapat digunakan sebagaimana mestinya.</div>
        <div id="rightmost-div">
            <br>
            <div>Pontianak, {{$tgl_acc2}} <br> General Manager</div>
            <img class="ttdPersonalia" src="{{ asset('images/ttd cap.png') }}" alt="">
            <div>Erowin, S.Hut. <br>NIM. 19781217 200408 1 011</div>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br>
        <div>Tembusan disampaikan kepada Yth:</div>
        <div>1. Manajer Teknologi Informasi KSP PUSKOP Credit Union Indonesia (Skd)</div>
        <div>2. Personalia KSP PUSKOP Credit Union Indonesia (Skd)</div>
        <div>3. Yang bersangkutan</div>
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
        font-size: 13px;
    }

    #table-ttd div {
        margin-left: 50px
    }

    #kode {
        font-size: 10px
    }

    #hal1 {
        margin: 60px;
        margin-top: 10px;
    }

    .ttdPersonalia {
        height: 80px;

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

    #lowercase {
        list-style-type: lower-alpha;
        margin-left: 35px
            /* Use lower case letters (a, b, c, ...) */
    }

    #table {
        margin-left: 15px
    }

    #par {
        margin-left: 15px
    }

    #rightmost-div {
        position: absolute;
        top: 75%;
        /* Adjust the vertical position as needed */
        right: 20px;
        /* Adjust the horizontal position as needed */
        transform: translate(65%, -85%);
        /* Center the div vertically */
        padding: 10px;
    }
</style>
