<div class="card" id="menambahUser">
    <div class="card-header bg-white header-elements-inline">
      <h5 class="card-title">B. Menambah User SIMO</h5>
      <div class="header-elements">
        <div class="list-icons">
          <a class="list-icons-item" data-action="collapse"></a>
        </div>
      </div>
    </div>
    <div class="card-body">	
      {{-- <h6>A. Generate Sertifikat Pada Diklat/Kegiatan PUSKOPCUINA</h6> --}}
      <p>
        <b>Langkah pertama.</b> Klik gambar gerigi di sudut kanan atas, bagian bawah profil user <span class="icon-arrow-up13" style="color: rgb(255, 0, 0)" ></span> dan klik <b>User</b>.
       </p>
      <div class="mb-3 text-center">
        <img src="{{ asset('images/panduan/userMenu.png') }}" class="img-thumbnail" alt="">
      </div>
      <hr/> 
      <p>
        <b>Langkah ke 2.</b> Pada halaman user klik tombol <span class="icon-plus2"> </span> <b>Tambah</b> <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>.
      </p>
      
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/halamanUser.png') }}" class="img-thumbnail" alt="">
    </div>
    <hr/>
    <p>
        <b>Langkah ke 3.</b> Masukan data seperti username dan password lalu pilih aktivis yang akan dibuatkan user simo <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>.</p>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/menambahUser.png') }}" class="img-thumbnail" alt="">
    </div>
    <hr/>
    <p>
        <b>Langkah ke 4.</b> Pilih peran user berdasarkan pekerjaan aktivis yang bersangkutan <span class="icon-arrow-down132" style="color: red"></span>.
    </p>
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/pilihHakAkses.png') }}" class="img-thumbnail" alt="">
    </div>
    {{-- <br> --}}
    <p>Berikut adalah rincian masing-masing jenis hak akses :</p>

    <ol>
      <li><strong>Akses Penuh</strong> user akan mempunyai akses ke semua fitur SIMO yang diperuntukkan untuk CU.</li>
      <li><strong>Monitoring</strong> user mempunyai akses untuk melihat ke semua fitur SIMO untuk cu yang sesuai dengan fungsi monitoring aktivis.</li>
      <li><strong>Tata Kelola</strong> user mempunyai akses untuk melihat fitur pemilihan , voting dan coa serta mempunyai akses untuk mengelola Assesment Access, Monitoring, Laporan cu dan Laporan tp/kp.</li>
      <li><strong>Organisasi</strong> user mempunyai akses untuk mengelola data profil cu, tp/kp, produk dan pelayanan cu, aktivis cu, surat masuk, surat keluar, dokumen dan kategori dokumen.</li>
      <li><strong>Kegiatan</strong> user mempunyai akses untuk mendaftar diklat Puskopcuina, pertemuan Puskopcuina dan mengelola voting.</li>
      <li><strong>Publikasi</strong> user mempunyai akses untuk mengelola data artikel, kategori artikel, data penulis artikel dan mengelola data pengumuman yang muncul di website cu.</li>
      <li><strong>Kosong</strong> user tidak diberikan akses apapun ke fitur simo.</li>
      <li><strong>Custom</strong> menambahkan hak akses untuk user sesuai dengan kebutuhan cu.</li>
    </ol>
  <div class="mb-3 text-center">
    <img src="{{ asset('images/panduan/jenisHakAkses.png') }}" class="img-thumbnail" alt="">
  </div>
    <hr/>
  </div>