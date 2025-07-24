<body>
	<div class="depan">
		<table style="margin-top: 430px;margin-left: 1100px;">
			<tr>
				<td><div class="nomor">Nomor :</div></td>
				<td><div class="nomor">{{$nomor}}</div></td>
			</tr>
		</table>

		<div style="margin-top: 40px;margin-left: 1300px;font-size: 60px; font-family: Calibri">Diberikan Kepada</div>

		<table style="margin-top: 30px;margin-left: 1000px;font-weight: bold">
			<tr>
				<td class="nomor">Nama</td><td class="nomor">:</td><td class="nomor">{{$nama}}</td>
			</tr>
			<tr>
				<td class="nomor">Jabatan</td><td class="nomor">:</td><td class="nomor">{{$jabatan}}</td>
			</tr>
			<tr>
				<td class="nomor">Asal Lembaga</td><td class="nomor">:</td><td class="nomor">{{$lembaga}}</td>
			</tr>
		</table>

		<div class="telah" style="font-size: 120px;margin-left: 815px;">Telah Mengikuti dan Menyelesaikan</div>
		
		<p class="isi"><span><b>{{$kegiatan}}</b></span> bagi Credit Union yang diselenggarakan
			{{-- bug !!! --}}
			@if($tempat !== '')
			<span>{{$tempat}}</span> 
			@endif
			pada tanggal <span>{{$tgl}}</span>
			@if(!$listMateri->first()). @endif 
			@if($listMateri->first())dengan materi seperti yang tertera di balik sertifikat ini.@endif
		</p>
		<br>
	</div>

	<div class="ttdAtas">
		<p><span>Pontianak, {{$tglGenerate}}</p>
	</div>
</body>

@if(!$imageBelakang == '')
<body>
	<div class="belakang">
		<table class="center" style="width: 75%">
			<thead>
				<tr>
					<th class="a">No</th>
					<th class="a">Materi</th>
					@if($averageNilai != 0)
					<th class="a">Nilai</th>
					<th class="a">Predikat</th>
					@endif
					<th class="a">Waktu</th>
				</tr>
			</thead>
			<tbody>
				{{$no = 1}}
				@foreach ($listMateri as $list)
				<tr style="font-family: Calibri">
					<td class="fontNilai" style="text-align: center">{{$no++}}</td>
					<td class="fontNilai">{{$list->nama}}</td>
					@if($averageNilai != 0)
					<td class="fontNilai" style="text-align: center">{{$list->nilai}}</td>
					<td class="fontNilai" style="text-align: center">
						@if($list->nilai >= 85)
							A
						@elseif($list->nilai >= 75)
							B
						@elseif($list->nilai >= 60)
							C
						@elseif($list->nilai >= 45)
							D
						@else
							E
						@endif
					</td>
					@endif
					<td class="fontNilai" style="text-align: center">{{$list->waktu}} Jam</td>
				</tr>
				@endforeach

				@if($averageNilai != 0)
				<tr>
					<td colspan="2" class="fontNilai" style="text-align: center">RATA-RATA NILAI / TOTAL JAM</td>
					<td class="fontNilai" style="text-align: center">{{strVal(round($averageNilai,0))}}</td>
					<td class="fontNilai" style="text-align: center">
						@if($averageNilai >= 85)
							A
						@elseif($averageNilai >= 75)
							B
						@elseif($averageNilai >= 60)
							C
						@elseif($averageNilai >= 45)
							D
						@else
							E
						@endif
					</td>
					<td class="fontNilai" style="text-align: center">{{strVal($sumWaktu)}} Jam</td>
				</tr>
				@else
				<tr>
					<td colspan="2" class="fontNilai" style="text-align: center">TOTAL JAM</td>
					<td class="fontNilai" style="text-align: center">{{strVal($sumWaktu)}} Jam</td>
				</tr>
				@endif
			</tbody>
		</table>

		<div class="ttdBawah">
			<p><span>Pontianak, {{$tglGenerate}}</p>
		</div>

		@if($averageNilai != 0)
		<div style="margin-top: 830px; margin-left: 255px;">
			<p style="font-family: Calibri, sans-serif; font-size: 40px;">Rentang Nilai :</p>

			<table style="border-collapse: collapse; width: 800px; font-family: Calibri, sans-serif; font-size: 40px; border: 1px solid black;">
				<tr>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">85.0 - 100</td>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">A (Baik Sekali)</td>
				</tr>
				<tr>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">75.0 - 84.9</td>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">B (Baik)</td>
				</tr>
				<tr>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">60.0 - 74.9</td>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">C (Cukup)</td>
				</tr>
				<tr>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">45.0 - 59.9</td>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">D (Kurang)</td>
				</tr>
				<tr>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">0 - 44.9</td>
					<td style="border: 1px solid black; padding: 10px 20px; text-align: left;">E (Buruk)</td>
				</tr>
			</table>
		</div>
		@endif
	</div>
</body>
@endif

<style>
	@font-face {
		font-family: 'Edwardian Script ITC';
		src: url({{url('css/public/fonts/edw.ttf')}});
	}

	@page {
		margin: 0 !important;
		padding: 0 !important;
	}

	body {
		margin: 0;
		padding: 0;
	}

	th, td {
		font-family: 'Calibri', sans-serif;
		font-size: 40px;
	}

	th.a {
		border: 1px solid black;
		text-align: center;
	}

	.nomor {
		font-size: 55px;
	}

	.depan, .belakang {
		position: relative;
		width: 2608px;
		height: 2003px;
		background-size: cover;
		display: inline-block;
	}

	.depan {
		background-image: url({{url($imageDepan)}});
	}

	.belakang {
		background-image: url({{url($imageBelakang)}});
	}

	.fontNilai {
		font-size: 45px;
		border: 1px solid black;
		padding-left: 10px;
	}

	.isi {
		font-size: 55px;
		margin-left: 450px;
		width: 2100px;
		text-align: justify;
	}

	.telah {
		font-size: 120px;
		font-family: 'Edwardian Script ITC';
	}

	.ttdAtas {
		position: absolute;
		bottom: 420px;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 55px;
		transform: translateX(8%);
		width: 100%;
		font-family: 'Calibri';
	}

	.ttdBawah {
		position: absolute;
		bottom: 430px;
		margin-left: 1820px;
		font-size: 55px;
		text-align: left;
		font-family: 'Calibri';
	}

	.center {
		margin-left: auto;
		margin-right: auto;
		margin-top: 300px;
		font-size: 4em;
	}
</style>
