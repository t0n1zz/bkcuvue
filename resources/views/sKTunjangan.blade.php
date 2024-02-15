<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<body>
    <header></header>
    <div id="hal1">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <div id="title" class="text-center">KEPUTUSAN <br>
            GENERAL MANAGER PUSKOPCUINA <br>
            Nomor: {{$no_lengkap}}
        </div>
        <div id="title" class="text-center" style="margin-top: 12px">tentang</div>
        <div id="title" class="text-center">TUNJANGAN KELUARGA</div>
        <br>
        <table id="table">
            <tr class="tr-atas">
                <td style="vertical-align: top">Menimbang </td>
                <td style="vertical-align: top">:</td>
                <td colspan="2">
                    <div class="text-justify">a. Bahwa manajemen yang telah diangkat sebagai manajemen tetap diberikan
                        tunjangan tetap dan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tidak tetap sesuai dengan ketentuan yang
                        berlaku;
                    </div>
                    <div class="text-justify">b. Bahwa tunjangan keluarga merupakan tunjangan tetap yang diberikan
                        kepada manajemen yang &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sudah memiliki istri dan anak yang terdiri
                        atas
                        tunjangan istri dan tunjangan anak;</div>
                    <div class="text-justify">c. Bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan
                        huruf b perlu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dikeluarkan Surat Keputusan General Manager tentang
                        Tunjangan Keluarga;</div>
                </td>
            </tr>
            <div></div>
            <tr class="tr-atas">
                <td style="vertical-align: top">Mengingat</td>
                <td style="vertical-align: top">:&nbsp;</td>
                <td colspan="2">
                    <div>1. Undang-Undang No. 25 Tahun 1992 tentang Perkoperasian;</div>
                    <div>2. Anggaran Dasar PUSKOPCUINA;</div>
                    <div>3. Anggaran Rumah Tangga PUSKOPCUINA;</div>
                    <div>4. Manual Operasional (MO) <SPAN style="font-style: italic">Human Resource Management</SPAN>
                        PUSKOPCUINA;</div>
                    <div>5. Manual Operasional Keuangan PUSKOPCUINA;</div>
                </td>
            </tr>
            {{-- <tr class="tr-atas">
                <td style="vertical-align: top">Memperhatikan</td>
                <td style="vertical-align: top">:</td>
                <td colspan="2">
                    Surat permohonan pengajuan kenaikan golongan ruang dan perubahan Masa
                    Kerja Golongan (MKG) dari saudara {{ $data->aktivis->name }}
                </td>
            </tr> --}}
        </table>
        <div class="text-center" style="margin-top: 24px;font-weight: bold">MEMUTUSKAN</div>
        <table id="table">
            <tr>
                <td style="font-weight: bold">Menetapkan</td>
                <td>:&nbsp;</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td style="vertical-align: top">Kesatu</td>
                <td style="vertical-align: top">: </td>
                @if ($data->jenis == 'Anak')
                    <td if colspan="2" class="text-justify">Menetapkan saudara {{ $data->aktivis->name }} dengan
                        NIM.: {{ $data->aktivis->nim_cu }}
                        menerima tunjangan keluarga (anak ke-{{ $anak_ke }} atas nama {{ $data->name }})
                        NIK: {{ $data->nik }} dengan ketentuan 5% dari gaji pokok.</td>
                @else
                    <td colspan="2" class="text-justify">Menetapkan saudara {{ $data->aktivis->name }} dengan NIM.:
                        {{ $data->aktivis->nim_cu }}
                        menerima tunjangan keluarga (istri atas nama {{ $data->name }}) NIK: {{ $data->nik }} dengan
                        ketentuan 10% dari gaji pokok.</td>
                @endif
            </tr>
            <tr>
                <td style="vertical-align: top">Kedua</td>
                <td style="vertical-align: top">: </td>
                <td colspan="2" class="text-justify">Keputusan ini berlaku terhitung sejak tanggal ditetapkan, dan
                    apabila dikemudian hari terdapat kekeliruan akan diadakan perbaikan dan peninjauan kembali
                    sebagaimana mestinya.</td>
            </tr>
        </table>
        <div id="rightmost-div">
            <div>Ditetapkan di : Pontianak <br>Pada Tanggal : {{$tgl_acc}} <br><br> General Manager</div>
            <img class="ttdPersonalia" src="{{ asset('images/ttd cap.png') }}" alt="">
            <div>Erowin, S.Hut. <br>NIM. 19781217 200408 1 011</div>
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

    .tr-atas td {
        padding-top: 12px
    }

    #kode {
        font-size: 10px;
        text-align: right;
    }

    #title {
        font-size: 14px;
        text-align: center;
        font-weight: bold
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
        top: 850px;
        /* Adjust the vertical position as needed */
        right: 20px;
        /* Adjust the horizontal position as needed */
        transform: translate(70%, -65%);
        /* Center the div vertically */
        padding: 10px;
    }

    .alphabet-list {
        list-style: none;
        counter-reset: alphabet-counter;
        padding-left: 20px;
    }

    .alphabet-list li {
        position: relative;
        counter-increment: alphabet-counter;
        margin-bottom: 10px;
        padding-left: 30px;
    }

    .alphabet-list li:before {
        content: counter(alphabet-counter, lower-alpha) ". ";
        position: absolute;
        left: 0;
    }

    .number-list {
        list-style: none;
        counter-reset: number-counter;
        /* padding-left: 10px; */
    }

    .number-list li {
        position: relative;
        counter-increment: number-counter;
        margin-bottom: 10px;
        padding-left: 30px;
    }

    .number-list li:before {
        content: counter(number-counter) ". ";
        position: absolute;
        left: 0;
    }
</style>
