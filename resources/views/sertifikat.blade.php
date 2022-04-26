<body>
    <div class="depan">
        <table class="label" style="margin-top: 430px;margin-left: 1100px;font-size: 60px;">
            <tr>
                <td>
                    <div>Nomor :</div>
                </td>
                <td>
                    <div>{{$nomor}}</div>
                </td>
            </tr>
        </table>
        
        <div style="margin-top: 40px;margin-left: 1300px;font-size: 65px;">Diberikan Kepada</div>

        <table style="margin-top: 30px;margin-left: 1100px;font-size: 55px;text-align: left;">
            
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{{$nama}}</td>
                </tr>
    
                <tr>
                    <td>Jabatan</td>
                    <td>:</td>
                    <td>{{$jabatan}}</td>
                </tr>
    
                <tr>
                    <td>Asal Lembaga</td>
                    <td>:</td>
                    <td>{{$lembaga}}</td>
                </tr>
        </table>
        <div class="telah" style="font-size: 120px;margin-left: 815px; font-family: Edwardian Script ITC">Telah Mengikuti dan Menyelesaikan</div>
        <p class="isi"><span class="fontBold"><b>{{$kegiatan}}</b></span> bagi Credit Union yang diselenggarakan 
            <span>{{$tempat}}</span> pada tanggal <span>{{$tgl}}</span> selama <span>{{$hari}}</span> Hari Pelatihan, dengan materi seperti tertera di balik sertifikat ini.</p>
            <br>
        
    </div>
    <div class="ttdAtas"><p><span>Pontianak, {{$tglGenerate}}</p></div>
</body>

<body>
    <div class="belakang">
        <div>
        <table class="table center" style="width: 75%">
            <thead>
              <tr>
                <th scope="col" class="th">No</th>
                <th scope="col" class="th">Materi</th>
                <th scope="col" class="th">Nilai</th>
                <th scope="col" class="th">Waktu</th>
              </tr>
            </thead>

            <tbody>
                {{$no = 1}}
                @foreach ($listMateri as $list )
                    <tr>
                        <td class="fontNilai" style="text-align: center">{{$no++}}</td>
                        <td class="fontNilai" >{{$list->nama}}</td>
                        <td class="fontNilai" style="text-align: center">{{$list->nilai}}</td>
                        <td class="fontNilai" style="text-align: center">{{$list->waktu}} Jam</td>
                    </tr>
                @endforeach
                    <tr>
                        <td style="text-align: center"></td>
                        <th style="padding-left: 10px">RATA-RATA NILAI / TOTAL JAM</th>
                        <td class="td" style="padding-left: 10px" align="center"><b>{{strVal(round($averageNilai,0))}}</b></td>
                        <td class="td" style="padding-left: 10px" align="center"><b>{{strVal($sumWaktu)}} Jam</b></td>
                    </tr>
            </tbody>
          </table>
         </div>
         <div class="ttdBawah"> <p><span>Pontianak, {{$tglGenerate}}</p></div>
        </div>
</body>
<style>

.belakang{
    position: relative;
    overflow-x: auto; 
    clear:both; 
    width: 2608px; 
    height: 2003px;
    background-size: cover;
    display: inline-block;
    background-image: url({{url($imageBelakang)}});
} 

.depan{
    position: relative;
    clear:both; 
    width: 2608px; 
    height: 2003px;
    background-size: cover;
    display: inline-block;
    background-image: url({{url($imageDepan)}})
} 


.fontBold{
    font-size: 55px;
    font-weight: 800;
    font-family: 'Times New Roman';
    font-style: italic;
    

}

.fontNilai{
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 50px;
    padding-left: 10px;
}
.isi{
    font-size: 55px; 
    margin-left: 450px; 
    width: 2100px; 
    text-align: justify
}

.ttdAtas {
  left: 0;
  right: 0;
  bottom: 380px;
  font-size: 55px; 
  margin-right: 93px; 
  text-align: right;
  position: absolute;
}
.ttdBawah {
  left: 0;
  right: 0;
  bottom: 420px;
  font-size: 55px; 
  margin-right: 255px; 
  text-align: right;
  position: absolute;
}
    @font-face {
        font-family: 'Edwardian Script ITC';
        src: url({{url('css/public/fonts/edw.ttf')}});
    }

    .telah{
        font-family: 'Edwardian Script ITC';
    }

    #position{
        position: fixed;
    }

    @page {margin:0!important; padding:0!important}
    body{
        margin: 0px;
        padding: 0px;

    }

    .center {
        margin-left: auto;
        margin-right: auto;
        margin-top: 480px;
        font-size: 3em;
    }

  .table, .th, .td {
    border: 1px solid black;
    border-collapse: collapse;
    
    }

    div.static{
        position: static;
  border: 3px solid #73AD21;
    }
</style>
