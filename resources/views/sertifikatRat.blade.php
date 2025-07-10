<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<style>
		@page {
			margin: 0;
		}
		@font-face{
			font-family: 'BrushScriptMT';
    		src: url('{{ storage_path("fonts/BrushScriptMT.ttf") }}') format('truetype');
		}
		@font-face {
			font-family: 'calibri-regular';
			src: url('{{ storage_path("fonts/calibri-regular.ttf") }}');
		}
		@font-face {
			font-family: 'Amasis';
			src: url('{{ storage_path("fonts/Amasis.ttf") }}');
		}
		.page {
			width: 1920pt;
			height: 1359pt;
			background-image: url('file://{{ $imagePath }}');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			position: fixed;
			/* PENTING: supaya tetap 1 halaman */
			top: 0;
			left: 0;
			overflow: hidden;
		}

		.nomor {
			  position: absolute;
			  top: 230pt;
			  left: 0;
			  width: 100%;
			  text-align: center;
			  font-family: 'calibri-regular';
			  font-size: 36pt; 
		}

		.diberikan {
			  position: absolute;
			  top: 300pt;
			  left: 0;
			  width: 100%;
			  text-align: center;
			  font-family: 'BrushScriptMT';
			  font-size: 64pt;
		}

		.nama {
			  position: absolute;
			  top: 440pt;
			  left: 0;
			  width: 100%;
			  text-align: center;
			  font-family: 'Amasis';
			  font-size: 52pt; 
		}

		.lembaga {
			  position: absolute;
			  top: 550pt;
			  left: 0;
			  width: 100%;
			  text-align: center;
			  font-family: 'Lato-Medium';
			  font-size: 40pt;
		}

		.deskripsi {
			  position: absolute;
			  top: 650pt;
			  left: 200pt;
			  width: 1520pt;
			  text-align: center;
			  font-family: 'calibri-regular';
			  font-size: 36pt; 
			  word-break: break-word;
			  line-height: 1.4;
		}

		.tgl {
			  position: absolute;
			  top: 950pt;
			  left: 0;
			  width: 100%;
			  text-align: center;
			  font-family: 'calibri-regular';
			  font-size: 36pt;
		}
		
		.text-shift1 {
			  transform: translateX(8.5%);
		}

		.text-shift {
			  transform: translateX(10%);
		}

		/* Halaman 2 */
		.page2 {
			width: 1920pt;
			height: 1359pt;
			background-image: url('file://{{ $backgroundMateriPath }}');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			position: fixed;
			top: 0;
			left: 0;
			overflow: hidden;
		}
		.judul-materi {
			top: 130pt;
			font-size: 64pt; 
			font-weight: bold; 
			text-align: center;
			left: 0;
			width: 100%;
			font-family: 'Amasis';
			position: absolute;
		}
		.tabel-materi {
			top: 300pt;
			width: 90%;
			margin: 0 auto;
			border-collapse: collapse;
			font-size: 36pt;
			position: absolute;
			left: 0;
			right: 0;
		}

		.tabel-materi th, .tabel-materi td {
			border: 1pt solid black;
			padding: 12pt;
			text-align: left;
			vertical-align: middle;
		}
	</style>
</head>
@if($imageDepan)
<body>
	<div class="page">
	
		<!-- 1. Nomor Sertifikat -->
		<div class="nomor text-shift1">
			Nomor: {{ $nomor }}
		</div>
	
		<!-- 2. Diberikan Kepada -->
		<div class="diberikan text-shift1">
			Diberikan Kepada
		</div>
	
		<!-- 3. Nama -->
		<div class="nama text-shift1">
			{{ $nama }}
		</div>
	
		<!-- 4. Lembaga -->
		<div class="lembaga text-shift1">
			{{ $lembaga }}
		</div>
	
		<!-- 5. Deskripsi Kegiatan -->
		<div class="deskripsi text-shift">
			Terima kasih atas partisipasinya menghadiri seminar dan rangkaian kegiatan<br>
			<strong>{{ $kegiatan }}</strong><br>
			Tahun Buku {{ $tahun }} di {{ $tempat }}
			tanggal {{ $tgl }} @if($tema)dengan tema<br>
			<em>“{{ $tema }}”</em>@endif
		</div>
	
		<!-- 6. Tanggal Generate -->
		<div class="tgl text-shift">
			Pontianak, {{ $tglGenerate }}
		</div>
	</div>
</body>
@endif
@if($imageBelakang)
	<body>
		<div class="page2">
			<div class="judul-materi">MATERI SEMINAR</div>
			<table class="tabel-materi">
				<thead>
					<tr>
						<th style="text-align: center">No</th>
						<th>Materi</th>
						<th>Waktu</th>
						<th>Narasumber</th>
					</tr>
				</thead>
				<tbody>
					@foreach ($listMateri as $index => $item)
						<tr>
							<td style="text-align: center">{{ $index + 1 }}</td>
							<td>{!! $item['nama'] !!}</td>
							<td>{{ $item['waktu'] }} Jam</td>
							<td>{{ $item['narasumber'] }}</td>
						</tr>
					@endforeach
				</tbody>
			</table>
			<div class="tgl">
				Pontianak, {{ $tglGenerate }}
			</div>
		</div>
	</body>
@endif
</html>