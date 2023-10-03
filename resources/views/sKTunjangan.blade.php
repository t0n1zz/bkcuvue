<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<body>
    <header></header>
    <div id="hal1">
        <div id="kode" class="text-right">FM-PSL-05, Rev00/02.01.2019</div>
        <h6 class="text-center">KEPUTUSAN <br>
            GENERAL MANAGER PUSKOPCUINA <br>
            Nomor: 4/PKCU/GM/SK/V/2020
        </h6>
        <h6 class="text-center">tentang</h6>
        <h6 class="text-center">TUNJANGAN KELUARGA</h6>
        <br>
        <table id="table">
            <tr>
                <td style="vertical-align: top">Menimbang :</td>
                <td colspan="2">
                    <ul class="alphabet-list">
                        <li class="text-justify">Bahwa manajemen yang telah diangkat sebagai manajemen tetap diberikan
                            tunjangan tetap dan
                            tidak tetap sesuai dengan ketentuan yang berlaku;</li>
                        <li class="text-justify">Bahwa tunjangan keluarga merupakan tunjangan tetap yang diberikan
                            kepada manajemen yang
                            sudah memiliki istri dan anak yang terdiri atas tunjangan istri dan tunjangan anak;</li>
                        <li class="text-justify">Bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan
                            huruf b perlu
                            dikeluarkan Surat Keputusan General Manager tentang Tunjangan Keluarga;</li>
                    </ul>
                </td>
            </tr>
        </table>

        <table id="table">
            <tr>
                <td style="vertical-align: top">Mengingat :</td>
                <td colspan="2">
                    <ul class="number-list">
                        <li>Undang-Undang No. 25 Tahun 1992 tentang Perkoperasian;</li>
                        <li>Anggaran Dasar dan Anggaran Rumah Tangga;</li>
                        <li>Manual Operasional Human Resource Management;</li>
                        <li>Manual Operasioanal Keuangan;</li>
                    </ul>
                </td>
            </tr>
        </table>
        <h6 class="text-center">MEMUTUSKAN</h6>
        <table id="table">
            <tr>
                <td style="font-weight: bold">Menetapkan</td>
                <td>:  </td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td style="vertical-align: top">Kesatu</td>
                <td style="vertical-align: top">:  </td>
                @if ($data->jenis=='Anak')
                    <td if colspan="2" class="text-justify">Menetapkan saudara {{$data->aktivis->name}} dengan NIM.: {{$data->aktivis->nim_cu}}
                    menerima tunjangan keluarga (anak ke-{{$anak_ke}} atas nama {{$data->name}}) NIK:{{$data->nik}} dengan ketentuan 5% dari gaji pokok.</td>
                @else
                     <td colspan="2" class="text-justify">Menetapkan saudara {{$data->aktivis->name}} dengan NIM.: {{$data->aktivis->nim_cu}}
                    menerima tunjangan keluarga (istri atas nama {{$data->name}}) NIK:{{$data->nik}} dengan ketentuan 10% dari gaji pokok.</td>
                @endif
            </tr>
            <tr>
                <td style="vertical-align: top">Kedua</td>
                <td style="vertical-align: top">:  </td>
                <td colspan="2" class="text-justify">Keputusan ini berlaku terhitung sejak tanggal ditetapkan, dan
                    apabila dikemudian hari terdapat kekeliruan akan diadakan perbaikan dan peninjauan kembali
                    sebagaimana mestinya.</td>
            </tr>
        </table>
        <div id="rightmost-div">
            <div>Ditetapkan di : Pontianak <br>Pada Tanggal : 15 Juni 2023 <br><br> General Manager</div>
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
        top: 901px;
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
