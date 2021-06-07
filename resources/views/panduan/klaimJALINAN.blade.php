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
        Halaman klaim JALINAN di kelompokan dalam 8 bagian yaitu: 
        bagian verifikasi yang berarti klaim sudah terinput tapi masih membutuhkan verifikasi dari user yang dimiliki oleh pengurus (biasanya ketua pengurus), pengawas (biasanya ketua pengawas), dan manajemen (biasanya GM atau pimpinan manajemen) dengan cara masing-masing dari ketiga user tersebut membuka SIMO dan masuk ke bagian ini juga dan memilih klaim mana yang akan diverifikasi di tabel kemudian menekan tombol verifikasi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>,
        
        <br/> <br/>
        kemudian apabila ketiga user tersebut sudah melakukan verifikasi maka akan otomatis masuk ke bagian menunggu yang berarti pengajuan sudah diterima oleh BKCU Kalimantan dan sedang dalam proses analisa <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>,
        Kemudian bagian ini adalah bagian dimana ada pengajuan klaim yang dokumennya tidak lengkap menurut staf JALINAN BKCU Kalimantan dan berarti CU mesti melengkapinya dan melakukan konfirmasi ulang ke staf JALINAN BKCU Kalimantan apabila sudah melengkapi dokumen yang dibutuhkan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>, 
        
        <br/> <br/>
        Selanjutnya adalah bagian ditolak yang merupakan bagian dimana pengajuan ditolak oleh staf JALINAN BKCU Kalimantan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span>, Kemudian apabila pengajuan disetujui maka akan muncul dibagian disetujui dan tinggal menunggu proses pencairan saja oleh bagian SPD BKCU Kalimantan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">6</span> 
        
        <br/> <br/>
        dan apabila sudah dicairkan maka akan pindah ke bagian Dicairkan dan kemudian apabila dari CU sudah menyerahkan hasil pencairan klaim beserta semua dokumen pendukung kepada ahli waris anggota atau yang bersangkutan maka bisa menekan tombol selesai pada klaim tersebut <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">7</span> dan otomatis pengajuan yang sudah selesai akan pindah ke bagian selesai <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">8</span>

        <br/> <br/>
        Terakhir terdapat juga bagian koreksi <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">9</span> yang bertugas menampung hasil koreksi/perbaikan dalam penginputan klaim JALINAN yang kemudian akan diperiksa oleh bagian JALINAN PUSKOPCUINA terkait pengajuan koreksi terhadap klaim.

        <br/> <br/>
        Kemudian pada ada halaman ini pengguna dapat menambah klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">11</span>,
        mengubah klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">12</span>, 
        verifikasi klaim JALINAN (hanya untuk verifikator Klaim JALINAN) <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">13</span>
        menghapus klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">14</span>
    </p>

    <p>Berikut adalah rincian masing-masing bagian</p>

    <ol>
      <li><strong>Pilih TP/KP</strong> berguna untuk memilah data klaim berdasarkan TP/KP dari anggota</li>
      <li><strong>Tab Verifikasi</strong> untuk menampilkan daftar klaim yang masih belum diverifikasi oleh user pengurus, user pengawas dan user manajemen yang telah ditunjuk dan diberitahukan kepada BKCU Kalimantan untuk bisa melakukan verifikasi</li>
      <li><strong>Tab Menunggu</strong> untuk menampilkan daftar klaim yang masih dalam status memunggu</li>
      <li><strong>Tab Dokument Tidak Lengkap</strong> untuk menampilkan daftar klaim yang masih dalam status memunggu</li>
      <li><strong>Tab Ditolak</strong> untuk menampilkan daftar klaim yang status nya sudah ditolak</li>
      <li><strong>Tab Disetujui</strong> untuk menampilkan daftar klaim yang status nya sudah disetujui dan menunggu dicairkan</li>
      <li><strong>Tab Dicairkan</strong> untuk menampilkan daftar klaim yang status nya sudah dicairkan</li>
      <li><strong>Tab Selesai</strong> untuk menampilkan daftar klaim yang status nya sudah selesai</li>
      <li><strong>Tab Koreksi</strong> untuk menampilkan daftar klaim yang sudah dicairkan tetapi kemudian ditemukan kesalahan dan dilakukan koreksi atau perbaikan.</li>
      <li><strong>Bagian Verifikator</strong> untuk menampilkan siapa saja user yang bertugas atau berhak untuk melakukan verifikasi klaim JALINAN pada tiap CU</li>
      <li><strong>Tambah</strong> untuk menambah klaim JALINAN </li>
      <li><strong>Ubah</strong> untuk mengubah klaim JALINAN yang sudah dipilih pada tabel</li>
      <li><strong>Verifikasi</strong> untuk verifikasi klaim JALINAN yang sudah dipilih pada tabel</li>
      <li><strong>Hapus</strong> untuk menghapus klaim JALINAN yang sudah dipilih pada tabel</li>
    </ol>

    <hr/> 
    <h6>A. Menambah Klaim JALINAN</h6>
    
    <p>Terdapat beberapa cara untuk melakukan Klaim JALINAN. Yaitu sebagai berikut:</p>

    <b>1. Menambah Klaim JALINAN dengan mengisi No. KTP/NIK</b>
    <p>
      Cara pertama untuk menambah data klaim JALINAN adalah melalui tombol tambah pada bagian klaim JALINAN. Disini akan muncul pilihan yaitu memasukkan nomor identitas anggota/NIK (no. KTP) dan apabila data anggota tersebut ada maka akan langsung muncul form untuk mengisi informasi detail terkait klaim.

      <br/><br/>
      Tapi apabila tidak terdapat data anggota terhadap nomor identitas anggota/NIK (no. KTP) maka akan muncul tombol Tambah Anggota CU yang akan mengarahkan ke form untuk menambahkan anggota CU dan setelah selesai mengisi data anggota CU akan dibawa kembali ke form pengajuam klaim untuk melengkapi informasi detail terkait klaim.
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-tambah-ktp.png') }}" class="img-thumbnail" alt="">
    </div>

    <b>2. Menambah Klaim JALINAN yang anggota tidak ditemukan lagi nomor identitas anggota/NIK (no. KTP)</b>
    <p>
      Apabila ternyata anggota yang akan mengajukan klaim tidak terdaftar di SIMO dan sudah tidak bisa ditemukan atau didapatkan lagi nomor identitas anggota/NIK (no. KTP), maka bisa menggunakan nomor sementara yang akan otomatis dibuatkan oleh sistem. 
      
      <br/><br/>
      Kemudian selanjutnya akan muncul tombol Tambah Anggota CU yang akan mengarahkan ke form untuk menambahkan anggota CU dan setelah selesai mengisi data anggota CU akan dibawa kembali ke form pengajuam klaim untuk melengkapi informasi detail terkait klaim.
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-tambah-pilih.png') }}" class="img-thumbnail" alt="">
    </div>

    <b>3. Menambah Klaim JALINAN dengan memilih langsung dari daftar Anggota CU</b>
    <p>
      Cara ketiga adalah apabila sudah memiliki/mengisi data Anggota CU yang akan diajukan klaim di SIMO sebelumnya, maka tinggal memilih saja di tabel pada menu Anggota CU <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> kemudian menekan tombol Ajukan Klaim JALINAN <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> maka akan langsung dibawa ke form klaim dan tinggal melengkapi informasi detail terkait klaim.
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-tambah.png') }}" class="img-thumbnail" alt="">
    </div>
    
    <p>Berikut adalah rincian masing-masing bagian pada form tambah klaim</p>

    <ol>
      <li><strong>Panel identitas anggota CU</strong> menampilkan identitas anggota CU</li>
      <li><strong>Pilih keanggotaan CU</strong> untuk memilih keanggotaan anggota CU</li>
      <li><strong>Pilih tipe</strong> untuk memilih tipe klaim (meninggal atau cacat)</li>
      <li><strong>Informasi produk</strong> untuk menampilkan informasi semua produk yang dimiliki oleh anggota tersebut</li>
      <li><strong>Form JALINAN</strong> untuk menampilkan form klaim yang mesti dilengkapi sesuai dengan keterangannya</li>
      <li><strong>Dokumen</strong> untuk mengirimkan dokumen-dokumen yang dibutuhkan sebagai persyaratan klaim seperti foto ktp, foto surat keterangan meninggal dunia dan sebagainya dalam bentuk format foto</li>
    </ol>

    <hr/> 
    <h6>B. Verifikasi Klaim JALINAN </h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-verifi.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Setelah menambahkan klaim, maka hal selanjutnya adalah meminta kepada user yang memiliki hak akses untuk melakukan verifikasi klaim memeriksa dan melakukan verifikasi terhadap klaim tersebut.

      <br/><br/>
      Untuk verifikasi klaim JALINAN pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol verifikasi dan tombol verifikasi hanya akan muncul di user yang sudah ditentukan/diberitahukan kepada BKCU Kalimantan sebagai verifikator (biasanya 1 dari ketua pengurus, 1 dari ketua pengawas, dan 1 dari pimpinan manajemen/GM).

      <br/><br/>
      Setelah melakukan verifikasi ini baru lah pengajuan klaim akan diterima oleh bagian JALINAN PUSKOPCUINA untuk selanjutkan dilakukan analisis. (klaim tersebut akan berpindah dari tab verifikasi menjadi ke tab menunggu).
    </p>

    <div class="alert bg-warning text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Penting!</span> Proses verifikasi mesti dilakukan untuk agar pengajuan klaim dapat diproses oleh bagian JALINAN di BKCU Kalimantan
    </div>

    <hr/> 
    <h6>C. Analisis Klaim JALINAN - BKCU</h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-analisis.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Setelah klaim yang diajukan berada di tab menunggu, maka bagian JALINAN akan melakukan analisis terhadap klaim dan akan menentukan apakah klaim tersebut disetujui atau tidak.

      <br/><br/>
      Apabila klaim disetujui maka bagian JALINAN akan mengisi total Lintang dan Tunas yang disetujui dan sesuai dengan aturan yang tertuang pada Manual Operasional (MO) JALINAN PUSKOPCUINA
    </p>

    <div class="alert bg-warning text-white alert-styled-left alert-dismissible">
      <span class="font-weight-semibold">Penting!</span> Proses ini dilakukan oleh bagian JALINAN PUSKOPCUINA, jadi CU hanya perlu menunggu proses analisis saja apakah akan disetujui atau ditolak atau dokumen tidak lengkap dengan melihat pada masing-masing tab yang ada.
    </div>

    <hr/> 
    <h6>D. Selesai Klaim JALINAN </h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-selesai.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Ketika klaim sudah disetujui dan kemudian sudah dicairkan oleh PUSKOPCUINA, maka klaim tersebut akan berada di tab disetujui dan disana CU bisa menekan tombol selesai <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> yang menandakan bahwa klaim tersebut sudah diterima oleh CU dan telah diberikan kepada alih waris

        <br/><br/>
        Ketika sudah menekan tombol selesai maka klaim dinyatakan sudah selesai dan tidak bisa dilakukan perubahan apapun lagi.
    </p>
    
    <hr/> 
    <h6>E. Mengubah Klaim JALINAN</h6>
    <p>
        Untuk mengubah identitas klaim JALINAN pengguna mesti memilih data yang akan diubah dibagian konten terlebih dahulu baru kemudian menekan tombol ubah.
    </p>

    <hr/> 
    <h6>F. Menghapus Klaim JALINAN </h6>
    <p>
        Untuk menghapus klaim JALINAN pengguna mesti memilih data yang akan dihapus dibagian konten terlebih dahulu baru kemudian menekan tombol hapus.
    </p>

    <hr/> 
    <h6>G. Koreksi Klaim JALINAN </h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-koreksi.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Koreksi merupakan proses yang mirip seperti dengan mengubah klaim, tetapi bedanya adalah jika mengubah klaim hanya bisa dilakukan ketika status klaim tersebut masih verifikasi CU dan belum diverifikasi oleh semua verifikator. 

        <br/><br/>
        Sedangkan koreksi ini hanya bisa dilakukan setelah melakukan verifikasi dan dapat digunakan apabila ingin melakukan perbaikan apabila ada kesalahan pada klaim.
    </p>

    <hr/> 
    <h6>F. Surat Klaim JALINAN </h6>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/klaimJALINAN-surat.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Terdapat juga tombol Surat Pencairan <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> yang berguna untuk mencetak surat pernyataan dari PUSKOPCUINA yang menjelaskan mengenai status klaim anggota yang telah diajukan.

        <br/><br/>
        Surat ini bisa digunakan dan diberikan kepada alih waris atau keluarga dari anggota CU sebagai bukti <b>apabila diminta.</b>
    </p>

    
  </div>
  
</div>