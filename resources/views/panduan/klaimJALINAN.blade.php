<div class="card" id="klaimJALINAN">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">13. Klaim JALINAN</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman klaim JALINAN menampilkan semua klaim JALINAN yang telah ditulis sesuai dengan CU pada user tersebut. 

        Halaman klaim JALINAN di kelompokan dalam 3 bagian yaitu 
        bagian menunggu yang berarti klaim masih dalam status menunggu atau baru diajukan ke Puskopdit BKCU Kalimantan dan masih belum atau sedang di verifikasi oleh staf JALINAN Puskopdit BKCU Kalimantan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>,
        kemudian bagian klaim yang sudah dicairkan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>,
        dan bagian klaim yang ditolak <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>,

        Kemudian pada ada halaman ini pengguna dapat menambah klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>,
        mengubah klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>, 
        menghapus klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span>
    </p>

    <p>Berikut adalah rincian masing-masing bagian</p>

    <ol>
      <li><strong>Tab Menunggu</strong> untuk menampilkan daftar klaim yang masih dalam status memunggu</li>
      <li><strong>Tab Dicarikan</strong> untuk menampilkan daftar klaim yang status nya sudah dicarikan</li>
      <li><strong>Tab Ditolak</strong> untuk menampilkan daftar klaim yang status nya sudah ditolak</li>
      <li><strong>Tambah</strong> untuk menambah klaim JALINAN </li>
      <li><strong>Ubah</strong> untuk mengubah klaim JALINAN yang sudah dipilih pada tabel</li>
      <li><strong>Hapus</strong> untuk menghapus klaim JALINAN yang sudah dipilih pada tabel</li>
    </ol>

    <hr/> 
    <h6>A. Menambah Klaim JALINAN</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-tambah.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Untuk menambah klaim JALINAN pengguna mesti menekan tombol tambah pada halaman klaim JALINAN ataupun menekan tombol tambah klaim JALINAN pada menu diatas. Kemudian mengisi semua bagian yang ada sesuai dengan penjelasannya dan ketika sudah selesai maka menekan tombol simpan untuk menyimpan semua data yang telah diisi.
    </p>

    <p>
        Tahap pertama yang harus dilakukan adalah mengisi nomor identitas anggota/NIK (no. KTP) kemudian apabila no. KTP tidak ada di database SIMO maka akan dimunculkan form untuk menambah data klaim JALINAN. Tetapi apabila no. KTP sudah terdaftar maka akan dimunculkan informasi yang sudah ada di database SIMO maka akan dimunculkan informasi penolakan bahwa no. KTP sudah terdaftar.
    </p>

    <p>Berikut adalah rincian masing-masing bagian</p>

    <ol>
      <li><strong>Form NIK klaim JALINAN</strong> untuk memeriksa apakah anggota dengan no. KTP sudah ada di database SIMO</li>
      <li><strong>Panel identitas anggota CU</strong> menampilkan identitas anggota CU</li>
      <li><strong>Panel keanggotaan anggota CU</strong> untuk informasi keanggotaan anggota di CU</li>
      <li><strong>Form pengajuan JALINAN</strong> untuk mengisi informasi terkait klaim JALINAN</li>
    </ol>
    
    <hr/> 
    <h6>B. Mengubah Klaim JALINAN</h6>
    <p>
        Untuk mengubah identitas klaim JALINAN pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah.
    </p>

    <hr/> 
    <h6>C. Menghapus Klaim JALINAN </h6>
    <p>
        Untuk menghapus klaim JALINAN pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol hapus.
    </p>
  </div>
  
</div>