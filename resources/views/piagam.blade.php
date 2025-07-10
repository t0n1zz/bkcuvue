<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <style>
        @page {
            margin: 0;
        }

        @font-face {
            font-family: 'edwardian-script';
            src: url('{{ storage_path("fonts/edw.ttf") }}');
        }

        @font-face {
            font-family: 'MPLUSRounded1c';
            src: url('{{ storage_path("fonts/MPLUSRounded1c-Medium.ttf") }}');
        }

        @font-face {
            font-family: 'MPLUSRounded1c-Black';
            src: url('{{ storage_path("fonts/MPLUSRounded1c-Black.ttf") }}');
        }

        @font-face {
            font-family: 'BrushScriptMT';
            src: url('{{ storage_path("fonts/BrushScriptMT.ttf") }}') format('truetype');
        }

        body {
            margin: 0;
            padding: 0;
        }

        .page {
            width: 1860pt;
            height: 2631pt;
            background-image: url('file://{{ $imagePath }}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
        }

        .nomor {
            position: absolute;
            top: 1000pt;
            left: 0;
            width: 100%;
            text-align: center;
            font-family: 'MPLUSRounded1c';
            font-size: 46pt;
        }

        .diberikan {
            position: absolute;
            top: 1150pt;
            left: 0;
            width: 100%;
            text-align: center;
            font-family: 'BrushScriptMT';
            font-size: 66pt;
        }

        .nama {
            position: absolute;
            top: 1250pt;
            left: 0;
            width: 100%;
            text-align: center;
            font-family: 'MPLUSRounded1c-Black';
            font-size: 54pt;
        }

        .sebagai {
            position: absolute;
            top: 1350pt;
            width: 100%;
            text-align: center;
            font-family: 'edwardian-script';
            font-size: 100pt;
        }

        .blok-kegiatan {
            position: absolute;
            top: 1540pt;
            left: 150pt;
            right: 150pt;
            text-align: center;
            font-size: 46pt;
            /* line-height: 1; */
            font-family: 'MPLUSRounded1c';
        }

        .tgl {
            margin-top: 60pt;
            text-align: center;
            font-family: 'MPLUSRounded1c';
            font-size: 46pt;
        }
    </style>
</head>

<body>
    <div class="page">
        <!-- 1. Nomor Sertifikat -->
        <div class="nomor">
            Nomor: {{ $nomor }}
        </div>

        <!-- 2. Diberikan Kepada -->
        <div class="diberikan">
            Diberikan Kepada
        </div>

        <!-- 3. Nama -->
        <div class="nama">
            {{ $nama }}
        </div>

        <!-- 4. Sebagai -->
        <div class="sebagai">
            Sebagai {{ $peranFix }}
        </div>

        <!-- 5. Kegiatan dan deskripsi jadi 1 kalimat -->
        <div class="blok-kegiatan">
             {{ $kegiatan }}<br> 
             <span style="line-height: 1">dari tanggal {{ $tgl }} {{$tempat}}</span><br>
             <div class="tgl">Pontianak, {{ $tglGenerate }}</div>
        </div>
    </div>
</body>

</html>