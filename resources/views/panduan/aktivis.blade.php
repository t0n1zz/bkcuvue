<div class="card" id="aktivis">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">17. Aktivis</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/aktivis.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman aktivis menampilkan semua aktivis yang telah ditulis sesuai dengan CU pada user tersebut. Pada halaman ini pengguna dapat memilih tingkatan aktivis yang ditampilkan (semua tingkat, manajemen, pengurus, pengawas, komite, penasihat, senior manajer, manajer, supervisor, staf, dan kontrak)<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>, selanjutnya pengguna juga dapat memilih apakah akan menampilkan aktivis yang masih aktif (masih bekerja) atau yang sudah tidak aktif (tidak bekerja) karena mengundurkan diri, diberhentikan, pensiun dan meninggal.<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>
        kemudian dapat menambah aktivis <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>, mengubah identitas aktivis seperti nama, alamat, nama anggota keluarga, dan keanggotaan di CU <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>, mengubah riwayat aktivis seperti pekerjaan, pendidikan, organisasi, dan diklat<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>, menghapus aktivis <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span>
    </p>

    <p>Berikut adalah rincian masing-masing tombol</p>

    <ol>
      <li><strong>Pilih Tingkat</strong> untuk memilih kelompok aktivis apa saja yang ditampilkan</li>
      <li><strong>Pilih Status Keaktifan</strong> untuk memilih aktivis berdasarkan status keaktifan/bekerja di lembaga (masih bekerja, mengundurkan diri, diberhentikan, pensiun, dan meninggal)</li>
      <li><strong>Tambah</strong> untuk menambah aktivis baru</li>
      <li><strong>Ubah Identitas</strong> untuk mengubah identitas aktivis yang sudah dipilih pada tabel</li>
      <li><strong>Ubah Riwayat</strong> untuk mengubah riwayat (pekerjaan, pendidikan, organisasi, dan diklat) aktivis yang sudah dipilih pada tabel</li>
      <li><strong>Hapus</strong> untuk menghapus aktivis yang sudah dipilih pada tabel</li>
    </ol>

    <hr/> 
    <h6>A. Menambah Aktivis</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/aktivis-tambah.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Untuk menambah aktivis pengguna mesti menekan tombol tambah pada halaman aktivis ataupun menekan tombol tambah aktivis pada menu diatas. Kemudian mengisi semua bagian yang ada sesuai dengan penjelasannya dan ketika sudah selesai maka menekan tombol simpan untuk menyimpan semua data yang telah diisi.
    </p>

    <p>
        Tahap pertama yang harus dilakukan adalah mengisi nomor identitas / NIK (no. KTP) kemudian apabila no. KTP tidak ada di database SIMO maka akan dimunculkan form untuk menambah data aktivis. Tetapi apabila no. KTP sudah terdaftar maka akan dimunculkan informasi yang sudah ada di database SIMO
    </p>

    <hr/> 
    <h6>B. Mengubah IDentitas Aktivis</h6>
    <p>
        Untuk mengubah identitas aktivis pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah.
    </p>

    <hr/> 
    <h6>C. Mengubah Riwayat Aktivis</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/aktivis-riwayat.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Untuk mengubah aktivis pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah. 

        Di halaman ini berisi bagian untuk melengkapi riwayat dan diawali dengan bagian identitas aktivis yang dipilih <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> Kemudian akan ada 4 bagian tabel berbeda yang masing-masing adalah untuk mengisi riwayat semua pekerjaan dari pertama kali bekerja sampai dengan saat ini baik di CU maupun di lembaga lain <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>, riwayat semua pendidikan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>,riwayat semua organisasi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span> dan riwayat semua diklat yang diikuti <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>
    </p>

    <div class="alert bg-info text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Pertanyaan?</span> Bagaimana jika pengguna ingin menambahkan data aktivis yang sudah tidak bekerja lagi atau yang sudah pensiun atau meninggal sebagai arsip data manajemen?
    </div>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/aktivis-tambah-berhenti.png') }}" class="img-thumbnail" alt="">
    </div>

    <p>Untuk menambahkan data aktivis tersebut, maka anda tetap melakukan penambahan data aktivis seperti biasa kemudian pada bagian melengkapi jabatan maka silahkan mengisi tanggal selesai dan ketika tanggal selesai kurang dari tanggal saat ini/sistem <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> maka akan muncul tempat untuk melengkapi keterangan tidak aktif yang bisa digunakan untuk memberikan keterangan kenapa aktivis itu sudah tidak aktif lagi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span></p>

    <div class="alert bg-info text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Pertanyaan?</span> Bagaimana jika ada aktivis yang datanya sudah ada di SIMO dan sekarang dia tidak aktif/bekerja lagi?
    </div>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/aktivis-tidak-aktif.png') }}" class="img-thumbnail" alt="">
    </div>

    <p>Pertama pilih dahulu aktivis di tabel dan kemudian tekan tombol ubah riwayat, kemudian pada bagian pekerjaan silahkan ubah pekerjaan/jabatan terakhir dari aktivis tersebut dan silahkan mengisi tanggal selesai dan ketika tanggal selesai kurang dari tanggal saat ini/sistem <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> maka akan muncul tempat untuk melengkapi keterangan tidak aktif yang bisa digunakan untuk memberikan keterangan kenapa aktivis itu sudah tidak aktif lagi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span></p>

    <hr/> 
    <h6>D. Menghapus Aktivis</h6>
    <p>
        Untuk menghapus aktivis pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol hapus.
    </p>
  </div>
  
</div>