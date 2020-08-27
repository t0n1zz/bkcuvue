<div class="card" id="laporanPerkembangan">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">19. Laporan Statistik CU</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/laporanPerkembangan.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman laporan perkembangan CU menampilkan semua laporan perkembangan CU yang telah dibuat sesuai dengan CU pada user tersebut. Pada halaman ini pengguna dapat memilih jenis laporan yang terdiri dari konsolidasi dan TP/KP <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>. Kemudian terdapat tab tabel statistik yang menampilkan laporan keuangan CU per-periode <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>, kemudian tab tabel P.E.A.R.L.S. yang menampilkan perhitungan P.E.A.R.L.S. <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>, dan selanjutnya terdapat infografis yang menampilkan grafik interaktif <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span> <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>.

        Selanjutnya pengguna dapat menambah laporan perkembangan CU<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span>,
        mengubah produk laporan perkembangan CU<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">7</span>, 
        menghapus laporan perkembangan CU<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">8</span>, 
        menampilkan detail laporan perkembangan CU<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">9</span>
    </p>

    <p>Berikut adalah rincian masing-masing tombol</p>

    <ol>
      <li><strong>Pilih TP/KP</strong> untuk memilih jenis laporan</li>
      <li><strong>Tab Tabel Statistik</strong> untuk menampilkan laporan keuangan CU per-periode</li>
      <li><strong>Tab Tabel P.E.A.R.L.S.</strong> untuk menampilkan laporan P.E.A.R.L.S.</li>
      <li><strong>Tab Tabel Inforgrafis</strong> untuk menampilkan grafik interaktif</li>
      <li><strong>Tambah</strong> untuk menambah laporan perkembangan CU</li>
      <li><strong>Ubah</strong> untuk mengubah laporan perkembangan CU yang sudah dipilih pada tabel</li>
      <li><strong>Hapus</strong> untuk menghapus laporan perkembangan CU yang sudah dipilih pada tabel</li>
      <li><strong>Detail</strong> untuk melihat detail laporan perkembangan CU yang sudah dipilih pada tabel</li>
    </ol>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/laporanPerkembangan-pearls.png') }}" class="img-thumbnail" alt="">
    </div>

    <p>
      Pada tab P.E.A.R.L.S. tampil semua perhitungan indikator dan masing-masing indikator bisa di klik untuk menampilkan detail perhitungan dan bisa langsung melakukan pengubahan terhadap akun-akun yang berpengaruh pada perhitungan indikator tersebut.
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/laporanPerkembangan-modalPearls.png') }}" class="img-thumbnail" alt="">
    </div>

    <hr/> 
    <h6>A. Menambah Laporan Perkembangan CU</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/laporanPerkembangan-tambah.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Sebelum menambah laporan perkembangan CU, pengguna bisa memilih apakah akan menambah laporan konsolidasi atau TP/KP. 

      <div class="alert bg-warning text-white alert-styled-left alert-dismissible">
        <span class="font-weight-semibold">Penting!</span> Apabila menambah laporan TP/KP maka sistem secara otomatis akan melakukan perhitungan untuk membuat laporan konsolidasi maka tidak perlu lagi menambahkan laporan konsolidasi secara terpisah.
      </div>   
    </p>
    <hr/> 
    <h6>B. Mengubah Laporan Perkembangan CU</h6>
    <p>
        Untuk mengubah laporan perkembangan CU pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah.
    </p>

    <hr/> 
    <h6>C. Menghapus Laporan Perkembangan CU</h6>
    <p>
        Untuk menghapus laporan perkembangan CU pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol hapus.
    </p>

    <hr/> 
    <h6>D. Detail Laporan Perkembangan CU</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/laporanPerkembangan-detail1.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Untuk melihat detail laporan perkembangan CU pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol detail.
    </p>
    <p>
        Pada halaman ini akan ditampilkan detail laporan perkembangan CU sesuai dengan periode yang dipilih. Pada halaman ini terdapat grafik interaktif dan juga perhitungan P.E.A.R.L.S., serta bagian diskusi yang dapat digunakan untuk berdiskusi dengan Puskopdit BKCU Kalimantan terkait laporan pada periode tersebut dan juga terdapat bagian revisi yang merupakan fitur keamanan yang akan menampilkan semua pengubahan yang dilakukan pada laporan periode tersebut agar dapat mengurangi resiko kehilangan data apabila salah mengubah data laporan.
    </p>
  </div>
  
</div>