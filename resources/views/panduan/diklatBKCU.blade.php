<div class="card" id="diklatBKCU">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">11. Diklat BKCU</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/diklatBKCU.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
        Halaman diklat BKCU menampilkan semua diklat yang diselenggarakan oleh PUSKOPCUINA. Di halaman ini pengguna dapat mendaftarkan Aktivis CU untuk mengikuti diklat yang diselenggarakan.
    </p>

    <h6>A. Bagaimana cara mendaftar diklat BKCU?</h6>
    <p>
        Untuk mendaftar diklat BKCU maka pertama-tama pastikan status diklat <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> sudah berubah menjadi <span class="badge badge-warning">PENDAFTARAN BUKA</span>, kemudian pengguna tinggal menekan/click ke diklat tersebut, maka pengguna akan dibawa ke halaman detail diklat BKCU
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/diklatBKCU-detail.png') }}" class="img-thumbnail" alt="">
    </div>

     <p>
        Di halaman terdapat 2 tab yaitu tab informasi diklat <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> yang berisi kerangka acuan, jadwal dan informasi mengenai panitia dan fasilitator pada kegiatan ini. Kemudian di tab peserta <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> terdapat daftar peserta yang telah mendaftar pada pelatihan ini. Daftar peserta yang muncul adalah daftar peserta per masing-masing CU.
    </p>

    <p>
      Kemudian untuk melakukan pendaftaran maka apabila status diklat sudah menjadi <span class="badge badge-warning">PENDAFTARAN BUKA</span>, maka pengguna dapat menekan tombol daftar <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span> untuk memilih dari data aktivis mana yang akan didaftarkan menjadi peserta pada pelatihan ini.
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/diklatBKCU-daftar.png') }}" class="img-thumbnail" alt="">
    </div>

     <p>
      Ketika menekan tombol daftar maka akan muncul kotak dialog seperti diatas yang berisi informasi sasaran <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>  yang menentukan aktivis dengan tingkat apa saja yang boleh mendaftar pada diklat ini. Kemudian terdapat tabel aktivis <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>  yang berisi semua aktivis CU yang sudah ada pada database SIMO yang bisa diisi pada menu Aktivis di bawah menu Organisasi. Pengguna tinggal memilih aktivis dengan menekan pada baris di tabel aktivis tersebut. Kemudian setelah tabel aktivis maka pengguna diwajibkan untuk mengisi beberapa informasi khusus <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span> terkait diklat ini seperti:
    </p>

    <ol>
      <li><strong>Nama Di Nametag</strong> nama peserta yang akan dicantumkan pada nametag</li>
      <li><strong>Nama Di Sertifikat</strong> nama peserta yang akan dicantumkan pada sertifikat.</li>
      <li><strong>Tgl. Kedatangan</strong> tanggal kapan peserta akan tiba di lokasi diklat</li>
      <li><strong>Tgl. Pulang</strong> tanggal kapan peserta akan meninggalkan di lokasi diklat</li>
      <li><strong>Keterangan</strong> informasi tambahan yang ingin peserta beritahukan kepada panitia yang terkait selama pelaksanaan diklat</li>
    </ol>

    <p>
      Setelah mendaftarkan peserta, maka semua peserta yang didaftarkan oleh pengguna akan muncul di tabel peserta dan disana pengguna bisa menambah peserta, mengubah informasi khusus dan menghapus peserta dari diklat. Semua peserta yang didaftarkan akan berstatus <span class="badge badge-info">MENUNGGU</span> dan akan berubah nanti ketika bagian Diklat PUSKOPCUINA melakukan verifikasi dan mengubah status dari peserta. Masing-masing CU akan mendapatkan <a href="#komponen-notifikasi">notifikasi</a> ketika terjadi perubahan status peserta serta akan juga muncul di <a href="#dashboard">dashboard</a> 
    </p>

    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/diklatBKCU-widget.png') }}" class="img-thumbnail" alt="">
    </div>

  </div>
  
</div>