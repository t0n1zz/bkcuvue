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
        Halaman klaim JALINAN di kelompokan dalam 7 bagian yaitu: 
        bagian verifikasi yang berarti klaim sudah terinput tapi masih membutuhkan verifikasi dari user yang dimiliki oleh pengurus (biasanya ketua pengurus), pengawas (biasanya ketua pengawas), dan manajemen (biasanya GM atau pimpinan manajemen) dengan cara masing-masing dari ketiga user tersebut membuka SIMO dan masuk ke bagian ini juga dan memilih klaim mana yang akan diverifikasi di tabel kemudian menekan tombol verifikasi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>,
        
        <br/> <br/>
        kemudian apabila ketiga user tersebut sudah melakukan verifikasi maka akan otomatis masuk ke bagian menunggu yang berarti pengajuan sudah diterima oleh BKCU Kalimantan dan sedang dalam proses analisa <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>,
        Kemudian bagian ini adalah bagian dimana ada pengajuan klaim yang dokumennya tidak lengkap menurut staf JALINAN BKCU Kalimantan dan berarti CU mesti melengkapinya dan melakukan konfirmasi ulang ke staf JALINAN BKCU Kalimantan apabila sudah melengkapi dokumen yang dibutuhkan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>, 
        
        <br/> <br/>
        Selanjutnya adalah bagian ditolak yang merupakan bagian dimana pengajuan ditolak oleh staf JALINAN BKCU Kalimantan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>, Kemudian apabila pengajuan disetujui maka akan muncul dibagian disetujui dan tinggal menunggu proses pencairan saja oleh bagian SPD BKCU Kalimantan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span> 
        
        <br/> <br/>
        dan apabila sudah dicairkan maka akan pindah ke bagian Dicairkan dan kemudian apabila dari CU sudah menyerahkan hasil pencairan klaim beserta semua dokumen pendukung kepada alih waris anggota atau yang bersangkutan maka bisa menekan tombol selesai pada klaim tersebut <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span> dan otomatis pengajuan yang sudah selesai akan pindah ke bagian selesai <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">7</span>

        <br/> <br/>
        Kemudian pada ada halaman ini pengguna dapat menambah klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>,
        mengubah klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>, 
        menghapus klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span>
    </p>

    <p>Berikut adalah rincian masing-masing bagian</p>

    <ol>
      <li><strong>Tab Verifikasi</strong> untuk menampilkan daftar klaim yang masih belum diverifikasi oleh user pengurus, user pengawas dan user manajemen yang telah ditunjuk dan diberitahukan kepada BKCU Kalimantan untuk bisa melakukan verifikasi</li>
      <li><strong>Tab Menunggu</strong> untuk menampilkan daftar klaim yang masih dalam status memunggu</li>
      <li><strong>Tab Dokument Tidak Lengkap</strong> untuk menampilkan daftar klaim yang masih dalam status memunggu</li>
      <li><strong>Tab Ditolak</strong> untuk menampilkan daftar klaim yang status nya sudah ditolak</li>
      <li><strong>Tab Disetujui</strong> untuk menampilkan daftar klaim yang status nya sudah disetujui dan menunggu dicairkan</li>
      <li><strong>Tab Dicairkan</strong> untuk menampilkan daftar klaim yang status nya sudah dicairkan</li>
      <li><strong>Tab Selesai</strong> untuk menampilkan daftar klaim yang status nya sudah selesai</li>
      <li><strong>Tambah</strong> untuk menambah klaim JALINAN </li>
      <li><strong>Ubah</strong> untuk mengubah klaim JALINAN yang sudah dipilih pada tabel</li>
      <li><strong>Verifikasi</strong> untuk verifikasi klaim JALINAN yang sudah dipilih pada tabel</li>
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

        <br/><br/>
        Kemudian apabila sudah melakukan pengisian nomor identitas anggota/NIK (no. KTP) dan anggota yang akan diajukan klaimnya ada di SIMO maka selanjutnya memilih Keanggotaan CU dan memilih tipe klaim (meninggal atau cacat)

        <br/><br/>
        Dan kemudian apabila sudah silahkan melengkapi form yang ada sesuai dengan kenyataan.
    </p>

    <div class="alert bg-info text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Info!</span> Apabila nomor identitas anggota/NIK (no. KTP) tidak ada yang berarti data anggota CU belum ada pada database Anggota CU di SIMO, maka silahkan menekan tombol tambah anggota CU untuk menambahkan terlebih dahulu anggota tersebut baru kemudian akan diarahkan kembali ke form pengajuan klaim ini.
    </div>

    <p>Berikut adalah rincian masing-masing bagian</p>

    <ol>
      <li><strong>Form NIK klaim JALINAN</strong> untuk memeriksa apakah anggota dengan no. KTP sudah ada di database SIMO</li>
      <li><strong>Panel identitas anggota CU</strong> menampilkan identitas anggota CU</li>
      <li><strong>Pilih keanggotaan CU</strong> untuk memilih keanggotaan anggota CU</li>
      <li><strong>Pilih tipe</strong> untuk memilih tipe klaim (meninggal atau cacat)</li>
      <li><strong>Informasi produk</strong> untuk menampilkan informasi semua produk yang dimiliki oleh anggota tersebut</li>
      <li><strong>Form JALINAN</strong> untuk menampilkan form klaim yang mesti dilengkapi sesuai dengan keterangannya</li>
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

    <hr/> 
    <h6>D. Verifikasi Klaim JALINAN </h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-verifi.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Untuk verifikasi klaim JALINAN pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol verifikasi dan tombol verifikasi hanya akan muncul di user yang sudah ditentukan/diberitahukan kepada BKCU Kalimantan sebagai verifikator (biasanya 1 dari ketua pengurus, 1 dari ketua pengawas, dan 1 dari pimpinan manajemen/GM).

    </p>

    <div class="alert bg-warning text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Penting!</span> Proses verifikasi mesti dilakukan untuk agar pengajuan klaim dapat diproses oleh bagian JALINAN di BKCU Kalimantan
    </div>
  </div>
  
</div>