<body>
    <div class="depan">
        <table style="margin-top: 430px;margin-left: 1100px;">
            <tr>
                <td>
                    <div class="nomor">Nomor :</div>
                </td>
                <td>
                    <div class="nomor">{{ $nomor }}</div>
                </td>
            </tr>
        </table>

        <div style="margin-top: 40px;margin-left: 1300px;font-size: 60px; font-family: Calibri">Diberikan Kepada</div>

        <table style="margin-top: 30px;margin-left: 1100px;font-weight: bold">

            <tr>
                <td class="nomor">Nama</td>
                <td class="nomor">:</td>
                <td class="nomor">{{ $nama }}</td>
            </tr>

            <tr>
                <td class="nomor">Jabatan</td>
                <td class="nomor">:</td>
                <td class="nomor">{{ $jabatan }}</td>
            </tr>

            <tr>
                <td class="nomor">Asal Lembaga</td>
                <td class="nomor">:</td>
                <td class="nomor">{{ $lembaga }}</td>
            </tr>
        </table>
        <div class="telah" style="font-size: 120px;margin-left: 815px; font-family: Edwardian Script ITC">Telah
            Mengikuti dan Menyelesaikan</div>
        <p class="isi"><span><b>{{ $kegiatan }}</b></span> bagi Credit Union yang diselenggarakan
            <span>{{ $tempat }}</span> pada tanggal <span>{{ $tgl }}</span> selama
            <span>{{ $hari }}</span> Hari Pelatihan, dengan materi seperti tertera di balik sertifikat ini.
        </p>
        <br>
    </div>
    <div class="ttdAtas">
        <p><span>Pontianak, {{ $tglGenerate }}</p>
    </div>
</body>


<body>
    <div class="belakang">
        <div>
            <table class="table center" style="width: 75%">
                <thead>
                    <tr>
                        <th scope="col" class="a">No</th>
                        <th scope="col" class="a">Materi</th>
                        @if ($averageNilai != 0)
                            <th scope="col" class="a">Nilai</th>
                            <th scope="col" class="a">Predikat</th>
                        @endif
                        <th scope="col" class="a">Waktu</th>
                    </tr>
                </thead>

                <tbody>
                    {{ $no = 1 }}
                    @foreach ($listMateri as $list)
                        <tr style="font-family: Calibri">
                            <td class="fontNilai" style="text-align: center">{{ $no++ }}</td>
                            <td class="fontNilai">{{ $list->nama }}</td>
                            @if ($averageNilai != 0)
                                <td class="fontNilai" style="text-align: center">{{ $list->nilai }}</td>
                                @if ($list->nilai <= 100 && $list->nilai >= 85)
                                    <td class="fontNilai" style="text-align: center">A</td>
                                @elseif($list->nilai <= 84.9 && $list->nilai >= 75)
                                    <td class="fontNilai" style="text-align: center">B</td>
                                @elseif($list->nilai <= 74.9 && $list->nilai >= 60)
                                    <td class="fontNilai" style="text-align: center">C</td>
                                @elseif($list->nilai <= 59.5 && $list->nilai >= 45)
                                    <td class="fontNilai" style="text-align: center">D</td>
                                @elseif($list->nilai <= 44.5 && $list->nilai >= 0)
                                    <td class="fontNilai" style="text-align: center">E</td>
                                @endif
                            @endif
                            <td class="fontNilai" style="text-align: center">{{ $list->waktu }} Jam</td>
                        </tr>
                    @endforeach
                    @if ($averageNilai != 0)
                        <tr>
                            <td colspan="2" class="fontNilai" style="padding-left: 10px; text-align: center">
                                RATA-RATA NILAI / TOTAL JAM</td>
                            <td class="fontNilai" style="padding-left: 10px; text-align: center">
                                {{ strVal(round($averageNilai, 0)) }}</td>
                            @if ($averageNilai <= 100 && $averageNilai >= 85)
                                <td class="fontNilai" style="padding-left: 10px; text-align: center">A</td>
                            @elseif($averageNilai <= 84.9 && $averageNilai >= 75)
                                <td class="fontNilai" style="padding-left: 10px; text-align: center">B></td>
                            @elseif($averageNilai <= 74.9 && $averageNilai >= 60)
                                <td class="fontNilai" style="padding-left: 10px; text-align: center">C</td>
                            @elseif($averageNilai <= 59.5 && $averageNilai >= 45)
                                <td class="fontNilai" style="padding-left: 10px; text-align: center">D</td>
                            @elseif($averageNilai <= 44.5 && $averageNilai >= 0)
                                <td class="fontNilai" style="padding-left: 10px; text-align: center">E</td>
                            @endif
                            <td class="fontNilai" style="padding-left: 10px; text-align: center">
                                {{ strVal($sumWaktu) }} Jam </td>
                        </tr>
                    @else
                        <tr>
                            <td colspan="2" class="fontNilai" style="padding-left: 10px; text-align: center">TOTAL
                                JAM</td>
                            <td class="fontNilai" style="padding-left: 10px; text-align: center">
                                {{ strVal($sumWaktu) }} Jam </td>
                        </tr>
                    @endif
                </tbody>
            </table>
        </div>
        <div class="ttdBawah">
            <p><span>Pontianak, {{ $tglGenerate }}</p>
        </div>
        @if ($averageNilai != 0)
            <div class="rentangNilai">
                <p><span>Rentang Nilai :</p>
            </div>
            <div class="gradeBawah">
                <table class="tb">
                    <tr>
                        <td class="fontNilai"> 85.0 - 100 </td>
                        <td class="fontNilai"> A (Baik Sekali) </td>
                    </tr>
                    <tr>
                        <td class="fontNilai"> 75.0 - 84.9 </td>
                        <td class="fontNilai"> B (Baik) </td>
                    </tr>
                    <tr>
                        <td class="fontNilai"> 60.0 - 74.9 </td>
                        <td class="fontNilai"> C (Cukup) </td>
                    </tr>
                    <tr>
                        <td class="fontNilai"> 45.0 - 59.9 </td>
                        <td class="fontNilai"> D (Kurang) </td>
                    </tr>
                    <tr>
                        <td class="fontNilai"> 0 - 44.9 </td>
                        <td class="fontNilai"> E (Buruk) </td>
                    </tr>
                </table>
            </div>
        @endif
    </div>
</body>

<style>
    th {
        font-family: 'Calibri';
        font-size: 40px;
    }

    th.a {
        font-family: 'Calibri';
        font-size: 40px;
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
    }

    td {
        font-family: 'Calibri';
        font-size: 40px;
        text-align: left;
    }

    .kegiatan {
        font-weight: bold;
        font-style: italic;
        font-family: 'Calibri', sans-serif;
    }

    .rentangNilai {
        left: 0;
        right: 0;
        bottom: 430px;
        font-size: 55px;
        margin-left: 255px;
        text-align: left;
        position: absolute;
    }

    .nomor {
        font-size: 55px;
        font-family: 'Calibri';
    }

    .belakang {
        position: relative;
        overflow-x: auto;
        clear: both;
        width: 2608px;
        height: 2003px;
        background-size: cover;
        display: inline-block;
        background-image: url({{ url($imageBelakang) }});
    }

    .depan {
        position: relative;
        clear: both;
        width: 2608px;
        height: 2003px;
        background-size: cover;
        display: inline-block;
        background-image: url({{ url($imageDepan) }})
    }

    .fontBold {
        font-size: 55px;
        font-weight: 800;
        font-family: 'Calibri';
        font-style: italic;
    }

    .fontNilai {
        font-family: 'Calibri';
        border: 1px solid black;
        border-collapse: collapse;
        font-size: 45px;
        padding-left: 10px;
    }

    .isi {
        font-family: 'Calibri';
        font-size: 55px;
        margin-left: 450px;
        width: 2100px;
        text-align: justify
    }

    .ttdAtas {
        left: 0;
        right: 0;
        bottom: 365px;
        font-size: 55px;
        margin-right: 97px;
        text-align: right;
        position: absolute;
    }

    .ttdBawah {
        left: 0;
        right: 0;
        bottom: 390px;
        font-size: 55px;
        margin-right: 255px;
        text-align: right;
        position: absolute;
    }

    .gradeBawah {
        left: 0;
        right: 0;
        bottom: 90px;
        font-size: 55px;
        margin-left: 255px;
        text-align: left;
        position: absolute;
    }


    table.tb {
        border: 1px solid #ddd;
        text-align: left;
        border-collapse: collapse;
    }


    @font-face {
        /* font-family: 'Calibri'; */
        font-family: 'Edwardian Script ITC';
        src: url({{ url('css/public/fonts/edw.ttf') }});
        /* src: url({{ url('css/public/fonts/Calibri Regular.ttf') }});     */
    }

    p {
        font-family: 'Calibri';
        src: url({{ url('css/public/fonts/Calibri Regilar.ttf') }});
    }

    .font-bold {
        font-family: 'Calibri';
        src: url({{ url('css/public/fonts/Calibri Bold.ttf') }});
    }

    .font-bold-italic {
        font-family: 'Calibri';
        src: url({{ url('css/public/fonts/Calibri Bold Italic.ttf') }});
    }

    .telah {
        font-family: 'Edwardian Script ITC';
        src: url({{ url('css/public/fonts/edw.ttf') }});
    }

    #position {
        position: fixed;
    }

    @page {
        margin: 0 !important;
        padding: 0 !important
    }

    body {
        margin: 0px;
        padding: 0px;

    }

    .center {
        margin-left: auto;
        margin-right: auto;
        margin-top: 300px;
        font-size: 4em;


    }

    .table,
    .th,
    .td {
        border: 1px solid black;
        border-collapse: collapse;

    }

    div.static {
        position: static;
        border: 3px solid #73AD21;
    }

    table.tb {
        border: 1px solid #ddd;
        text-align: left;
        border-collapse: collapse;

    }

    th.thh,
    td.tdd {
        padding: 15px;
        border: 1px solid #ddd;
        text-align: center;
    }

    .tb {
        border: 1px solid #ddd;
        text-align: left;
        border-collapse: collapse;
        left: 0;
        right: 0;
        bottom: 390px;
        font-size: 45px;
        margin-left: 0px;
        text-align: center;
        position: absolute;

    }
</style>
