<div class="card" id="selfAssesment">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">21. Self Assesment Access Branding</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/selfAssesment.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman self assesment menampilkan semua self assesment yang dikerjakan sesuai dengan CU pada user terserbut. Pada halaman ini pengguna dapat menambahkan self assesment <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>,
        
        <br/> <br/>
        Kemudian dapat juga mengubah self assesment <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> selama self assesment tersebut belum dinilai atau diperiksa oleh pihak PUSKOPCUINA, 
        
        <br/><br/>
        Kemudian terdapat juga tombol lihat <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span> yang berguna untuk melihat hasil self assesment yang lengkap dengan penilaian dari PUSKOPCUINA yang berguna sebagai bahan evaluasi dan peningkatan untuk kedepannya. Dan kemudian terdapat tombol hapus yang berfungsi untuk menghapus self assesment <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>.

        <br/> <br/>
        Pada bagian tabel <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span> terdapat ringkasan hasil pengisian self assesment dari CU dan BKCU beserta score nya dan juga terdapat status yang menampilkan:
        <ol>
          <li><span class="badge badge-primary">SUDAH DINILAI</span> yang berarti bahwa self assesment tersebut sudah dilakukan penilaian oleh pihak PUSKOPCUINA</li>
          <li><span class="badge badge-warning">BELUM SELESAI DIISI</span> yang berarti bahwa self assesment tersebut belum selesai di isi oleh CU dan tidak akan bisa dinilai sebelum diselesaikan pengisian</li>
          <li><span class="badge badge-secondary">BELUM DINILAI</span> yang berarti bahwa self assesment tersebut sudah diisi oleh pihak CU tapi belum dilakukan penilaian oleh pihak PUSKOPCUINA</li>
          <li><span class="badge badge-success">BELUM SELESAI DINILAI</span> yang berarti bahwa self assesment tersebut sudah diisi oleh pihak CU tapi belum selesai dilakukan penilaian oleh pihak PUSKOPCUINA</li>
        </ol>  
    </p>

    <hr/> 
    <h6>A. Menambah Self Assesment Access Branding</h6>
    
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/selfAssesment-tambah.png') }}" class="img-thumbnail" alt="">
    </div>

    <p>
      Untuk melakukan penambahan harus dimulai dengan memilih periode waktu yang daftar periode waktunya muncul otomatis berdasarkan pada pengisian pada Laporan Statistik CU 
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/selfAssesment-form.png') }}" class="img-thumbnail" alt="">
    </div>

    <p>
      Kemudian setelah melakukan pemilihan periode maka otomatis form pengisian akan muncul dimana terdapat beberapa bagian yaitu:  

      <br/><br/>
      Tombol simpan draft <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> yang berguna untuk memungkinan user melakukan penyimpanan data walaupun form belum terisi sampai selesai dan nanti form yang disimpan draft akan memiliki status <span class="badge badge-warning">BELUM SELESAI DIISI</span>
      
      <br/><br/> 
      Selanjutnya terdapat tab navigasi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> yang terdiri dari 5 bagian dimana 4 diantaranya adalah 4 macam perspektif dalam ACCESS branding dan bagian terakhir yang kelima adalah kesimpulan yang berisi ringkasan semua penilaian

      <br/><br/> 
      Kemudian di masing-masing perspektif terdapat juga tombol tombol <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span> yang menampilkan berapa banyak yang GOOD atau POOR atau yang lainnya sesuai pada perspektif tersebut. Kemudian jika dalam keadaan tidak menambah melainkan pada saat melihat data maka tombol tersebut juga berfungsi sebagai filter dimana jika menekan tombol GOOD maka akan menampilkan saja indikator yang memiliki penilaian GOOD

      <br/><br/> 
      Selanjutnya adalah bagian dari indikator tersebut yang berisi judul dari indikator <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>. Dan kemudian didalamnya terdapat beberapa tombol yang digunakan untuk mengisi nilai sesuai indikator tersebut, apakah POOR, FAIR, GOOD atau EXCELLENT <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span> beserta dengan bagian keterangan yang wajib diisi dan biasanya berisi penjelasan mengenai kenapa indikator tersebut diberi nilai <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">7</span>

      <br/><br/>
      Dan khusus untuk perspektif 1 yaitu keuangan terdapat tambahan komponen yaitu nilai P.E.A.R.L.S. <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span> yang akan memudahkan dalam melakukan penilaian dan bisa di klik untuk menampilkan rumusan dari nilai P.E.A.R.L.S. tersebut.
    </p>

    <div class="alert bg-warning text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Penting!</span> Pengisian harus dilakukan bertahap yang berarti jika belum selesai mengisi indikator pertama maka indikator berikutnya tidak akan muncul. Begitu juga dengan perspektif, apabila perspektif pertama belum diisi maka yang selanjutnya juga tidak bisa diisi.
    </div>

    <hr/> 
    <h6>B. Melihat Self Assesment Access Branding</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/selfAssesment-lihat.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman ini diakses dengan menekan tombol lihat setelah memilih assesment mana yang ingin dilihat di tabel. Disini akan menampilkan penilaian dari CU dan PUSKOPCUINA lengkap dengan keterangan dan rekomendasi yang dapat digunakan sebagai arsip dan juga bahan evaluasi untuk peningkatan kedepannya
    </p>
    
    <hr/> 
    <h6>C. Mengubah Self Assesment Access Branding</h6>
    <p>
        Untuk mengubah self assesment pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah. self assesment yang sedang dinilai atau yang sudah dinilai tidak dapat diubah lagi.
    </p>

    <hr/> 
    <h6>D. Menghapus Self Assesment Access Branding </h6>
    <p>
        Untuk menghapus self assesment pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol hapus.
    </p>

  </div>
  
</div>