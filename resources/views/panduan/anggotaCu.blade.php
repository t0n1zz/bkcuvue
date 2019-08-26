<div class="card" id="anggotaCU">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">12. Anggota CU</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/anggotaCu.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman anggota CU menampilkan semua anggota CU yang telah ditulis sesuai dengan CU pada user tersebut. 

        Pada halaman ini pengguna dapat menambah anggota CU <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>,
        mengubah identitas anggota CU <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>, 
        mengubah produk anggota CU <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>, 
        mengajukan anggota CU untuk klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>, 
        menghapus anggota CU <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>
    </p>

    <p>Berikut adalah rincian masing-masing tombol</p>

    <ol>
      <li><strong>Tambah</strong> untuk menambah anggota CU baru</li>
      <li><strong>Ubah Identitas</strong> untuk mengubah identitas anggota CU yang sudah dipilih pada tabel</li>
      <li><strong>Ubah Produk</strong> untuk mengubah produk anggota CU yang sudah dipilih pada tabel</li>
      <li><strong>Ajukan Klaim JALINAN</strong> untuk mengajukan anggota CU yang sudah dipilih pada tabel untuk klaim JALINAN</li>
      <li><strong>Hapus</strong> untuk menghapus anggota CU yang sudah dipilih pada tabel</li>
    </ol>

    <hr/> 
    <h6>A. Menambah Anggota CU</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/anggotaCu-tambah.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Untuk menambah anggota CU pengguna mesti menekan tombol tambah pada halaman anggota CU ataupun menekan tombol tambah anggota CU pada menu diatas. Kemudian mengisi semua bagian yang ada sesuai dengan penjelasannya dan ketika sudah selesai maka menekan tombol simpan untuk menyimpan semua data yang telah diisi.
    </p>

    <p>
        Tahap pertama yang harus dilakukan adalah mengisi nomor identitas anggota/NIK (no. KTP) kemudian apabila no. KTP tidak ada di database SIMO maka akan dimunculkan form untuk menambah data anggota CU. Tetapi apabila no. KTP sudah terdaftar maka akan dimunculkan informasi yang sudah ada di database SIMO dan bisa dilengkapi informasi no. BA, tanggal masuk serta apabila ada perubahan dari data Identitas anggota maka bisa langsung di ubah.
    </p>

    <p>Berikut adalah rincian masing-masing bagian</p>

    <ol>
      <li><strong>Form NIK anggota CU</strong> untuk memeriksa apakah anggota dengan no. KTP sudah ada di database SIMO</li>
      <li><strong>Form Identitas</strong> untuk melengkapi informasi identitas anggota</li>
    </ol>

    <p>
        Setelah selesai mengisi identitas anggota maka akan berpindah ke form untuk menambah data produk anggota (simpanan dan pinjaman)
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/anggotaCu-produk.png') }}" class="img-thumbnail" alt="">
    </div>
    
    <hr/> 
    <h6>B. Mengubah Identitas Anggota CU</h6>
    <p>
        Untuk mengubah identitas anggota CU pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah identitas.
    </p>

    <hr/> 
    <h6>C. Mengubah Produk Anggota CU</h6>
    <p>
        Untuk mengubah produk anggota CU pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah produk.
    </p>

    <hr/> 
    <h6>D. Ajukan Klaim JALINAN</h6>
    <p>
        Untuk mengajukan anggota CU untuk Klaim JALINAN pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ajukan klaim JALINAN.
    </p>

    <hr/> 
    <h6>E. Menghapus Anggota CU</h6>
    <p>
        Untuk menghapus anggota CU pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol hapus.
    </p>
  </div>
  
</div>