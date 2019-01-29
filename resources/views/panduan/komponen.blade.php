<div class="card" id="komponen">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">5. Pengenalan Komponen</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    Berikut adalah beberapa bagian komponen yang ada pada semua halaman dalam aplikasi SIMO

    {{-- header --}}
    <hr/>
    <h6 id="komponen-header">A. Header</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/komponen-header.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Header adalah bar teratas pada aplikasi SIMO yang memberikan informasi dan akses cepat kepada beberapa fungsi esensial, serta juga menjadi bagian untuk membuka halaman-halaman lain pada aplikasi.
    </p>
    
    <p>
      Header terbagi menjadi 2 bagian dimana pada bagian pertama menampilkan nama aplikasi, versi aplikasi, jenis user yang sedang terhubung, notifikasi serta menu user. 
    </p>

    {{-- notifikasi --}}
    <hr/>
    <h6>B. Notifikasi</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/komponen-notification.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Pada bagian notifikasi yang bisa diakses dengan menekan icon lonceng pada header bagian pertama akan menampilkan pemberitahuan terbaru mengenai interaksi antara CU dengan Puskopdit BKCU Kalimantan (dan sebaliknya). Sebagai contoh apabila user Puskopdit BKCU Kalimantan melakukan komentar pada salah satu laporan CU pengguna, maka akan muncul pemberitahuan terdapat komentar pada laporan tersebut dan pengguna tinggal menekan pada notifikasi tersebut untuk langsung melihat komentar apa yang ada.
    </p>

    {{-- menu user --}}
    <hr/>
    <h6 id="komponen-menuUser">C. Menu User</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/komponen-menuUser.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Bagian ini dapat diakses dengan menekan pada foto serta nama pengguna di header bagian pertama setelah icon lonceng notifikasi. Pada bagian ini terdapat beberapa pilihan yaitu:
      <ul>
        <li>Profile: untuk melihat profile user yang berguna untuk melakukan pengubahan password, foto, nama dan email, serta melihat aktivitas pengguna.</li>
        <li>Masukkan Saran: akan menampilkan kotak dialog yang bisa pengguna isi apabila terdapat saran/kritik terhadap aplikasi SIMO. Kami sebagai pengembang aplikasi SIMO sangat membutuhkan saran/kritik dari pengguna demi membuat aplikas ini menjadi semakin memberikan nilai guna lebih.</li>
        <li>Panduan: akan menampilkan halaman panduan ini.</li>
        <li>Changelog: akan menampilkan halaman yang menampilkan sejarah versi aplikasi SIMO beserta penjelasan apa saja yang baru, yang telah diperbaiki dan yang telah dihapus dari aplikasi SIMO.</li>
        <li>Logout: berfungsi untuk mengakhiri sesi penggunaan pengguna pada aplikasi SIMO.</li>
      </ul>     
    </p>

    {{-- navigasi --}}
    <hr/>
    <h6>D. Navigasi</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/komponen-navigasi.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Bagian navigasi adalah bagian yang terletak pada header bagian kedua. Bagian ini berfungsi sebagai tempat pengguna untuk berpindah ke halaman lain. Masing-masing halaman yang ditampilkan adalah sesuai dengan hak akses dari pengguna.
    </p>

    {{-- pencarian --}}
    <hr id="komponen-pencarian" />
    <h6>E. Pencarian</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/komponen-pencarian.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Pada setiap beberapa halaman yang dibuka untuk menampilkan data dalam bentuk tabel atau pun kartu, ada bagian khusus yang berguna untuk memudahkan dalam pencarian data. Pada bagian inilah pengguna bisa melakukan pencarian data dengan parameter yang spesifik, dimulai dari paling kiri <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>  pengguna bisa menentukan pencarian berdasarkan kolom apa, misal berdasarkan nama, tanggal, ataupun berdasarkan jumlah tertentu. Selanjutnya bagian operator <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> yang akan menyesuaikan dengan kolom yang dipilih, misal pencarian nama maka operatornya bisa berdasarkan kata yang terkandung didalamnya, atau berdasarkan huruf awal atau akhir.
    </p>

    <p>
      Kemudian dibawahnya terdapat tombol untuk menambah parameter pencarian <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span> yang berguna untuk menambahkan pencarian tambahan selain pencarian pertama, jadi bisa melakukan pencarian misal mencari data berdasarkan nama yang mengandung kata "budi" yang lahir pada bulan april.
    </p>
  
    <p>
      Dibawah kanan maka akan ada kontrol entry <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">8</span>  yang berfungsi untuk mengatur jumlah data yang ditampilkan pada saat itu kemudian disebelahnya ada kontrol urutan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">9</span> yang berguna untuk mengatur data yang ditampilkan diurutkan berdasarkan apa. Dan terakhir ada tombol panah <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">10</span> yang berguna untuk mengatur arah pengurutan data (dari kecil ke besar/awal atau besar ke kecil/akhir)
    </p>

    <p>
      Kemudian apabila melakukan pencarian maka akan muncul tombol <button class="btn btn-warning"><i class="icon-reset"></i> Reset pencarian</button> yang berguna untuk mereset/menghapus semua pencarian yang ada.
    </p>

    <p>Berikut adalah rincian masing-masing bagian pada pencarian</p>

    <ol>
      <li><strong>Parameter kolom</strong> untuk memilih kolom mana yang akan digunakan sebagai pencarian</li>
      <li><strong>Parameter operator</strong> untuk memilih jenis pencarian yang akan dilakukan</li>
      <li><strong>Parameter kata kunci</strong> untuk mengisi kata kunci pencarian, parameter ini akan berubah-ubah sesuai dengan kolom dan operator yang dipilih.</li>
      <li><strong>Tombol hapus pencarian</strong> untuk menghapus paramter pencarian</li>
      <li><strong>Tombol mengecilkan panel</strong> untuk mengecilkan panel pencarian ini</li>
      <li><strong>Tombol tambah parameter pencarian</strong> untuk menambah parameter pencarian</li>
      <li><strong>Tombol pencarian</strong> untuk melakukan pencarian</li>
      <li><strong>Kontrol entri</strong> untuk mengatur berapa banyak data yang akan dimunculkan</li>
      <li><strong>Kontrol urutkan</strong> untuk mengatur pengurutan data</li>
      <li><strong>Tombol arah pengurutan</strong> untuk mengatur arah pengurutan data</li>
    </ol>

    {{-- konten --}}
    <hr/>
    <h6>F. Konten</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/komponen-tabel.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Bagian konten adalah bagian yang terletak dibawah bagian <a href="#komponen-pencarian">E. Pencarian</a> yang berguna untuk menampilkan data dan juga melakukan pengolahan terhadap data yang dipilih seperti menambah, mengubah, menghapus, mengubah kolom mana saja yang ditampilkan/disembunyikan, dan pengolahan dengan excel untuk download dan upload (tidak semua) data dalam bentuk excel
    </p>

    <p>Berikut adalah rincian masing-masing bagian pada konten</p>

    <ol>
      <li><strong>Baris tombol</strong> untuk melakukan pengolahan terhadap data yang dipilih, tombol tersebut disesuaikan dengan hak akses user dan fungsi dari masing-masing halaman</li>
      <li><strong>Tombol kolom</strong> untuk menampikan dan menyembunyikan kolom</li>
      <li><strong>Tombol Excel</strong> untuk download dan upload data dalam format excel</li>
      <li><strong>Konten</strong> merupakan bagian yang menampilkan semua data </li>
      <li><strong>Status</strong> merupakan bagian yang menampilkan jumlah semua data yang ada</li>
      <li><strong>Pagination</strong> merupakan bagian untuk pindah ke data selanjutnya</li>
    </ol>

  </div>
</div>