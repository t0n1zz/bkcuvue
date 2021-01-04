<template>
  <div>
    <!-- Page header -->
    <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

    <!-- page container -->
    <div class="page-content pt-0">
      <div class="content-wrapper">
        <div class="content">

            <div class="card-group-control card-group-control-right" id="accordion-control-right">

              <!-- Version 3.3.6 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default" href="#v336">Version 3.3.6<small class="text-muted"> / 5 Desember 2020</small></a> </h5>
                </div>

                <div id="v336" class="collapse show" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi menawarkan peningkatan performa, keamanan dan perbaikan bug
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan fitur untuk membuat QR Code secara banyak pada aset tetap</li>
                      <li>Pengoptimalisasian akses aplikasi menjadi lebih cepat khususnya dalam jaringan internet yang lambat</li>
                      <li>Peningkatan sistem keamanan terhadap serangan DDoS</li>
                      <li>Perbaikan pada pengubahan hak akses user</li>
                      <li>Perbaikan bug tampilan dibeberapa bagian</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.6 -->

              <!-- Version 3.3.5 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default collapsed" href="#v335">Version 3.3.5<small class="text-muted"> / 24 Oktober 2020</small></a> </h5>
                </div>

                <div id="v335" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi menawarkan perbaikan dan peningkatan pada self assesment dan penambahan fitur untuk mengisi dan mengupload transaksi anggota CU
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan download excel untuk hasil self assesment untuk masing-masing perspektif</li>
                      <li>Peningkatan dan perbaikan pada update data secara real time untuk self assesment</li>
                      <li>Penambahan fitur upload excel transaksi simpanan dan pinjaman anggota CU</li>
                      <li>Penambahan fitur mengisi transaksi simpanan dan pinjaman anggota CU</li>
                      <li>Perbaikan bug tampilan dibeberapa bagian</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.5 -->

              <!-- Version 3.3.4 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default collapsed" href="#v334">Version 3.3.4<small class="text-muted"> / 12 Oktober 2020</small></a> </h5>
                </div>

                <div id="v334" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi menawarkan penambahan pada bagian tata kelola
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan upload bukti pada monitoring</li>
                      <li>Penambahan fitur real time data update di monitoring dimana ketika dilakukan penambahan di salah satu perangkat, maka di perangkat lain otomatis akan muncul perubahannya</li>
                      <li>Penambahan tombol simpan draft untuk masing-masing perspektif pada seft assesment yang memungkinkan untuk melakukan penyimpanan di tiap bagian per perspektif</li>
                      <li>Peningkatan sistem upload anggota CU dengan excel</li>
                      <li>Perbaikan bug tampilan dibeberapa bagian</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.4 -->
              
              <!-- Version 3.3.3 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default collapsed" href="#v333">Version 3.3.3<small class="text-muted"> / 18 September 2020</small></a> </h5>
                </div>

                <div id="v333" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi menawarkan perbaikan dan peningkatan pada klaim JALINAN, notifikasi, dan anggota CU
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan upload foto buku simpanan, buku pinjaman anggota CU, dan surat permohonan menjadi anggota yang akan melakukan Klaim JALINAN</li>
                      <li>Penambahan fitur untuk mutasi anggota CU</li>
                      <li>Peningkatan sistem notifikasi yang menampilkan notifikasi secara real time</li>
                      <li>Peningkatan sistem upload anggota CU dengan excel</li>
                      <li>Perbaikan bug pada notifikasi monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.3 -->

              <!-- Version 3.3.2 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default collapsed" href="#v332">Version 3.3.2<small class="text-muted"> / 27 Agustus 2020</small></a> </h5>
                </div>

                <div id="v332" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi menawarkan peningkatan fungsi pemakaian pada beberapa bagian dan juga meningkatkan kecepatan dalam penyaluran update versi SIMO
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Peningkatan dalam kecepatan untuk menyalurkan update versi SIMO kepada para pengguna</li>
                      <li>Peningkatan pada fitur upload data anggota cu</li>
                      <li>Penambahan kategori pekerjaan di aktivis yaitu kolektor dan kelompok inti</li>
                      <li>Penambahan informasi mutasi transaksi untuk simpanan dan pinjaman anggota cu pada form analisa klaim JALINAN</li>
                      <li>Perubahan pada format surat untuk JALINAN</li>
                      <li>Perbaikan pada bagian self assesment agar ketika BKCU melakukan penilaian maka CU tidak dapat melakukan pengubahan data lagi</li>
                      <li>Perbaikan bug pada beberapa tempat</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.2 -->

							<!-- Version 3.3.1 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default collapsed" href="#v331">Version 3.3.1<small class="text-muted"> / 1 Juli 2020</small></a> </h5>
                </div>

                <div id="v331" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada peningkatan pada pengelolaan data user dan peningkatan pada tampilan secara umum.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan halaman activity log yang berguna untuk menampilkan aktivitas semua user</li>
                      <li>Peningkatan pada tampilan informasi aktivitas user</li>
                      <li>Peningkatan pada tampilan pemilihan hak akses user</li>
                      <li>Peningkatan pada pembuatan user dan pengubahan password yang mengharuskan password menggunakan password yang kuat</li>
                      <li>Peningkatan komponen dasar pada tampilan</li>
                      <li>Perbaikan pada pemilihan tanggal</li>
                      <li>Perbaikan bug pada beberapa tempat</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.1 -->

              <!-- Version 3.3.0 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="text-default collapsed" href="#v330" aria-expanded="false">Version 3.3.0<small class="text-muted"> /  19 Juni 2020</small></a> 
                  </h5>
                </div>

                <div id="v330" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini merupakan perbaikan beberapa hal pada bagian diklat BKCU dan pertemuan BKCU.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan bug tombol daftar peserta dibagian diklat dan pertemuan BKCU yang tidak muncul</li>
                      <li>Perbaikan bug tombol-tombol pada tabel peserta dibagian diklat dan pertemuan BKCU yang tidak muncul pada perangkat mobile</li>
                      <li>Menghilangkan pengisian nama pada nametag, tanggal datang dan tanggal pulang apabila diklat ataupun pertemuan bersifat online pada form pendaftaran peserta</li>
                      <li>Mengubah cara pengisian tanggal untuk semua form dari menulis manual sekarang selain menulis manual bisa juga memilih dari kalender yang akan muncul ketika di klik</li>
                      <li>Perbaikan bug tampilan pada form self assesment</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.3.0 -->

              <!-- Version 3.2.9 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v329">Version 3.2.9<small class="text-muted"> / 23 Mei 2020</small></a> </h5>
                </div>

                <div id="v329" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini memperkenalkan diklat BKCU Online, serta menambahkan fitur pada pertemuan BKCU dan memperbaiki bug pada bagian pengumuman
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Menambah fitur diklat online pada diklat BKCU</li>
                      <li>Menambah fitur pemberian dan pengumpulan tugas pada diklat BKCU dan pertemuan BKCU</li>
                      <li>Menambah fitur menandai pertanyaan sudah terjawab dan komentar pertanyaan menjadi jawaban pada diklat BKCU dan pertemuan BKCU</li>
                      <li>Perbaikan bug dan tampilan pada diklat BKCU dan pertemuan BKCU</li>
                      <li>Perbaikan pada bagian pengumuman untuk user BKCU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.9 -->

              <!-- Version 3.2.8 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v328">Version 3.2.8 <small class="text-muted"> / 2 Mei 2020</small></a>
                  </h5>
                </div>

                <div id="v328" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini memperkenalkan pertemuan BKCU yang dapat digunakan untuk mendata dan menyelenggarakan pertemuan baik itu offline maupun online serta beberapa perbaikan dan peningkatan pada diklat BKCU dan notifikasi
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Menambah pertemuan BKCU untuk mengelola semua pertemuan yang dilaksanakan BKCU</li>
                      <li>Menambah fitur untuk bisa melakukan dan mengikuti pertemuan BKCU secara online di dalam pertemuan online ini terdapat fitur distribusi materi, penerimaan tanggapan beserta komentar dan persetujuan, dan pendataan peserta</li>
                      <li>Menambah fitur untuk melakukan perhitungan jumlah CU yang mendaftar, jumlah cu yang hadir, dan jumlah tanggapan pada bagian Pertemuan BKCU</li>
                      <li>Meningkatkan pengalaman penggunaan notifikasi dan kecepatan akses notifikasi</li>
                      <li>Menambahkan dukungan notifikasi pada bagian monitoring</li>
                      <li>Menambahkan dukungan notifikasi pada bagian self assesment access</li>
                      <li>Menambahkan dukungan notifikasi pada bagian klaim JALINAN</li>
                      <li>Menambahkan dukungan notifikasi pada bagian pertemuan BKCU</li>
                      <li>Memperbaiki bug tampilan pada bagian Diklat BKCU</li>
                      <li>Memperbaiki bug pada saat mengubah data panitia/fasilitator pada bagian Diklat BKCU</li>
                      <li>Memperbaiki bug pada saat mengubah keanggota CU pada bagian Anggota CU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.8 -->

              <!-- Version 3.2.7 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v327">Version 3.2.7 <small class="text-muted"> / 24 April 2020</small></a>
                  </h5>
                </div>

                <div id="v327" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini memperkenalkan form monitoring cu dan perbaikan pada anggota CU
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Menambah form monitoring CU yang berguna untuk mendata kegiatan monitoring Puskopdit BKCU Kalimantan di CU</li>
                      <li>Menambah fitur untuk mengubah No. KTP / NIK data anggota CU</li>
                      <li>Memperbaiki bug pada menampilkan data keanggota CU di tabel Anggota CU</li>
                      <li>Memperbaiki bug pada penambahan data anggota apabila tidak memiliki No. KTP / NIK</li>
                      <li>Menambah validasi pada pembuatan username user simo yang melarang adanya username dengan spasi</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.7 -->

              <!-- Version 3.2.6 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v326">Version 3.2.6 <small class="text-muted"> / 5 April 2020</small></a>
                  </h5>
                </div>

                <div id="v326" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini meningkatkan dan memperbaiki self assesment
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Menambahkan fitur simpan draft pada pengisian self assesment ACCESS</li>
                      <li>Menambahkan fitur simpan draft pada penilaian self assesment ACCESS</li>
                      <li>Menambahkan fitur pemeriksaan duplikasi data penilaian self assesment ACCESS</li>
                      <li>Memperbaiki bug tampilan pada form pengisian self assesment ACCESS</li>
                      <li>Memperbaiki bug tampilan pada perhitungan P.E.A.R.L.S</li>
                      <li>Memperbaiki bug tampilan pada halaman public website bagian slider berita utama</li>
                      <li>Memperbaiki bug hak akses pada menu aset tetap</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.6 -->

              <!-- Version 3.2.5 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v325">Version 3.2.5 <small class="text-muted"> / 17 Maret 2020</small></a>
                  </h5>
                </div>

                <div id="v325" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini meningkatkan dan memperbaiki laporan klaim JALINAN
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Memperbaiki laporan klaim JALINAN</li>
                      <li>Merubah penamaan menu laporan klaim JALINAN</li>
                      <li>Merubah cara pencarian laporan klaim JALINAN menjadi lebih mendetail dan fleksibel</li>
                      <li>Menambahkan fitur untuk mengubah identitas dan produk anggota CU yang mengajukan klaim JALINAN yang hanya bisa dilakukan oleh staf JALINAN Puskopdit BKCU Kalimantan guna memperbaiki kesalahan penginputan data anggota CU</li>
                      <li>Perbaikan bug pada perhitungan P.E.A.R.L.S.</li>
                      <li>Perbaikan bug pada tampilan peserta di Diklat BKCU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.5 -->

              <!-- Version 3.2.4 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v324">Version 3.2.4 <small class="text-muted"> / 4 Maret 2020</small></a>
                  </h5>
                </div>

                <div id="v324" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini merubah cara pengisian self assesment ACCESS Branding dan perubahan laporan pada Klaim JALINAN
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Merubah cara pengisian self assesment ACCESS Branding dimana pengisian periode harus sesuai dengan periode yang sudah ada pada laporan perkembangan CU</li>
                      <li>Menyambungkan data self assesment ACCESS Branding dengan laporan perkembangan CU untuk informasi PEARLS</li>
                      <li>Merubah laporan klaim JALINAN pencairan per-cu menjadi laporan klaim berdasarkan status yang akan menampilkan laporan klaim JALINAN sesuai dengan status klaim pada saat tersebut </li>
                      <li>Perbaikan bug pada penambahan klaim JALINAN</li>
                      <li>Perbaikan bug pada koreksi Klaim JALINAN</li>
                      <li>Perbaikan bug pada self assesment ACCESS Branding</li>
                      <li>Perbaikan bug pada indikator PEARLS di R7</li>
                      <li>Perbaikan bug pada tabel indikator PEARLS di dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.4 -->

              <!-- Version 3.2.3 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v323">Version 3.2.3 <small class="text-muted"> / 24 Februari 2020</small></a>
                  </h5>
                </div>

                <div id="v323" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini menambahkan self assesment ACCESS Branding, catalog diklat di website publik BKCU Kalimantan dan koreksi klaim JALINAN
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan form pengisian self assesment ACCESS Branding untuk CU dan penilaian dari Puskopdit BKCU Kalimantan</li>
                      <li>Penambahan fitur koreksi untuk Klaim JALINAN</li>
                      <li>Penambahan catalog diklat di website publik BKCU Kalimantan</li>
                      <li>Penambahan fitur untuk memasukkan foto utama pada masing-masing diklat</li>
                      <li>Merubah menu Keuangan menjadi Tata Kelola</li>
                      <li>Perbaikan bug masih bisa menghapus data anggota yang sudah klaim JALINAN</li>
                      <li>Perbaikan bug pada riwayat profil user yang tidak bisa diubah</li>
                      <li>Perbaikan bug peserta yang sama bisa mendaftar 2 kali pada diklat BKCU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.3 -->

              <!-- Version 3.2.2 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v322">Version 3.2.2 <small class="text-muted"> / 19 Desember 2019</small></a>
                  </h5>
                </div>

                <div id="v322" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini menambah surat pada Klaim JALINAN, upload dokumen pada Klaim JALINAN, QR Code pada Aset Tetap dan perbaikan beberapa bug.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan upload dokumen untuk memenuhi kebutuhan pengajuan Klaim JALINAN</li>
                      <li>Penambahan pemilahan data klaim berdasarkan TP</li>
                      <li>Penambahan surat pada bagian Klaim JALINAN yang terdiri dari surat dokument tidak lengkap, surat penolakan klaim dan surat pencairan klaim</li>
                      <li>Penambahan informasi nomor surat dan tanggal surat untuk surat pada bagian Klaim JALINAN</li>
                      <li>Penambahan fitur ketika logout otomatis maka akan kembali ke halaman terakhir yang dibuka sebelum.</li>
                      <li>Penambahan fitur membuat QR Code untuk aset tetap.</li>
                      <li>Perbaikan bug pada mengajukan klaim melalui menu anggota CU</li>
                      <li>Perbaikan bug error navigasi pada anggota CU</li>
                      <li>Perbaikan bug pada import anggota CU</li>
                      <li>Perbaikan bug pada laporan Klaim JALINAN terkait jumlah anggota pada jenis kelamin Laki-laki</li>
                      <li>Perbaikan bug pada tombol penyelesaian klaim pada Klaim JALINAN</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.2 -->

              <!-- Version 3.2.1 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v321">Version 3.2.1 <small class="text-muted"> / 3 Desember 2019</small></a>
                  </h5>
                </div>

                <div id="v321" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini memperbaiki beberapa bug tampilan data
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan bug pada menampilkan data detail laporan CU untuk akun aset bermasalah</li>
                      <li>Perbaikan bug pada menampilkan data anggota</li>
                      <li>Perbaikan bug pada menampilkan data pembeli dan penanggungjawab di aset tetap</li>
                      <li>Perbaikan bug pada menampilkan data panitia dalam gerakan untuk diklat</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.1 -->

              <!-- Version 3.2.0 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v320">Version 3.2.0 <small class="text-muted"> / 1 Desember 2019</small></a>
                  </h5>
                </div>

                <div id="v320" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini menambah beberapa fitur baru serta melakukan perbaikan bug, error dan peningkatan performa.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Menambah fitur auto reload file terbaru dari server apabila terdapat update dan menambahkan tombol hard reload apabila fitur auto reload gagal berfungsi.</li>
                      <li>Menambah fitur untuk membuatkan NIK sementara kepada anggota CU yang tidak bisa ditemukan/punya NIK lagi agar tetap bisa menginput data untuk anggota CU dan klaim JALINAN</li>
                      <li>Menambah informasi jumlah aktivis pertingkatan (manajemen, pengurus, dsb) pada bagian CU</li>
                      <li>Menambah tombol refresh pada bagian notifikasi untuk mendapatkan notifikasi terbaru sesuai keinginan</li>
                      <li>Mengubah cara mengambil data notifikasi dari setiap perpindahan halaman menjadi setiap 15 menit</li>
                      <li>Menambah fitur di profile masing-masing user untuk bisa mengubah data identitas dan riwayat sendiri</li>
                      <li>Menambah informasi no. KK, nama ibu, suku, dan pekerjaan pada form anggota CU</li>
                      <li>Mengubah tampilan informasi verifikator klaim JALINAN </li>
                      <li>Optimalisasi pengambilan data klaim JALINAN dan data anggota CU ke server menjadi lebih ringkas dan cepat </li>
                      <li>Meningkatkan cara pengisian pekerjaan aktivis menjadi lebih mudah dimengerti</li>
                      <li>Memindahkan menu untuk tabel draft hasil upload excel untuk anggota CU, laporan statistik CU, dan laporan statistik TP ke halaman masing-masing bagian terkait</li>
                      <li>Perbaikan bug pada saat menampilkan aktivis yang aktif dan tidak aktif</li>
                      <li>Perbaikan bug pada tombol anggota keluar</li>
                      <li>Perbaikan bug download excel semua data anggota CU tidak memunculkan sesuai CU tapi semua CU</li>
                      <li>Perbaikan bug download excel anggota CU kolom No. BA dan tanggal jadi anggota</li>
                      <li>Perbaikan bug download excel anggota CU dan aktivis kolom No. KTP digit terakhir hilang</li>
                      <li>Perbaikan bug tampilan persentase laju inflasi dan harga pasar</li>
                      <li>Perbaikan bug pada saat menambah diskusi untuk laporan TP</li>
                      <li>Perbaikan bug pada saat membuka dialog box dan menekan tombol back di browser maka tidak bisa scroll halamannya</li>
                      <li>Perbaikan bug pada penambahan kode jenis aset tetap dan kelompok aset tetap</li>
                      <li>Perbaikan bug pada searching di detail diklat BKCU</li>
                      <li>Perbaikan bug user tidak otomatis terkirim ke halaman login</li>
                      <li>Perbaikan bug gambar user error</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.2.0 -->

              <!-- Version 3.1.9 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v319">Version 3.1.9 <small class="text-muted"> / 26 Oktober 2019</small></a>
                  </h5>
                </div>

                <div id="v319" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada perbaikan di bagian anggota CU, user, aktivis dan klaim jalinan
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Menambah fitur migrasi data anggota CU dari sistem lain melalui excel</li>
                      <li>Menambah informasi tanggal target dan tujuan pada produk anggota CU</li>
                      <li>Perbaikan pada menampilkan data anggota CU di bagian sudah keluar dan sudah meninggal</li>
                      <li>Perubahan pada bagian input No. BA yang hanya memperbolehkan menginput angka saja</li>
                      <li>Perbaikan foto user yang tidak muncul</li>
                      <li>Perbaikan bug tampilan pada informasi jabatan, pendidikan dan organisasi pada bagian aktivis</li>
                      <li>Perbaikan bug mengubah identitas pada anggota CU yang sudah keluar dan meninggal</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.9 -->

              <!-- Version 3.1.8 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v318">Version 3.1.8 <small class="text-muted"> / 18 Oktober 2019</small></a>
                  </h5>
                </div>

                <div id="v318" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada perbaikan di bagian aktivis, penambahan tampilan pada form analisis klaim JALINAN, perubahan tampilan pada daftar produk dan pelayanan CU dan perubahan pada informasi user
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan informasi user yang melakukan verifikasi pada masing-masing klaim JALINAN pada form analisis klaim JALINAN</li>
                      <li>Perubahan tampilan daftar produk dan pelayanan CU menjadi lebih ringkas</li>
                      <li>Perubahan user yang sudah menngikuti data aktivis yang tersambung pada masing-masing user</li>
                      <li>Perbaikan bug informasi TP pada aktivis tidak muncul ketika menginput data aktivis</li>
                      <li>Perbaikan pada informasi TP ketika melakukan export excel data CU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.8 -->

              <!-- Version 3.1.7 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v317">Version 3.1.7 <small class="text-muted"> / 16 Oktober 2019</small></a>
                  </h5>
                </div>

                <div id="v317" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada penambahan dan perbaikan pada bagian anggota CU, Klaim JALINAN dan penambahan fitur baru untuk pengelolaan aset tetap lembaga, mengabungkan informasi data aktivis dengan user.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan fitur verifikasi pengajuan Klaim JALINAN oleh pengurus, pengawas dan manajemen</li>
                      <li>Penambahan fitur data aktivis pada user</li>
                      <li>Penambahan informasi asal TP/KP pada Anggota CU dan Klaim JALINAN</li>
                      <li>Penambahan pengelolaan aset tetap untuk lembaga</li>
                      <li>Perbaikan bug tampilan pada Klaim JALINAN</li>
                      <li>Perbaikan bug tampilan pada User</li>
                      <li>Perbaikan bug tampilan pada Anggota CU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.7 -->

              <!-- Version 3.1.6 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v316">Version 3.1.6 <small class="text-muted"> / 28 September 2019</small></a>
                  </h5>
                </div>

                <div id="v316" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada penambahan dan perbaikan pada bagian anggota CU dan Klaim JALINAN.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan informasi usia dan nama pada panel analisa klaim</li>
                      <li>Penambahan informasi klaim pada panel selesai klaim</li>
                      <li>Penambahan kategori anggota CU yang meninggal</li>
                      <li>Perbaikan pada form penambahan klaim JALINAN yang tidak menampilkan data produk dengan benar</li>
                      <li>Menggabungkan menu tambah pada masing-masing bagian menjadi 1 sub-menu</li>
                      <li>Penambahan waktu time-out aplikasi menjadi 12 jam</li>
                      <li>Pengubahan tampilan form pada profil user</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.6 -->

              <!-- Version 3.1.5 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v315">Version 3.1.5 <small class="text-muted"> / 23 September 2019</small></a>
                  </h5>
                </div>

                <div id="v315" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada perbaikan beberapa bug
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan informasi data produk pada saat menambah klaim JALINAN</li>
                      <li>Perbaikan informasi jabatan pada identitas anggota CU</li>
                      <li>Perbaikan input tanggal yang menyebabkan format tanggal salah</li>
                      <li>Menambah fitur untuk mengeluarkan anggota / mendata anggota keluar</li>
                      <li>Menambah pemberitahuan apabila versi SIMO yang dijalankan di CLIENT tidak sesuai dengan versi yang ada di SERVER agar segera melakukan Hard Reload agar mendapatkan versi terbaru</li>
                      <li>Menambah informasi error menjadi lebih mudah untuk dimengerti</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.5 -->

              <!-- Version 3.1.4 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v314">Version 3.1.4 <small class="text-muted"> / 19 September 2019</small></a>
                  </h5>
                </div>

                <div id="v314" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada fitur klaim JALINAN
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Peningkatan pengalaman penambahan data klaim JALINAN</li>
                      <li>Menambah fitur analisa klaim JALINAN</li>
                      <li>Menambah fitur pencairan klaim JALINAN</li>
                      <li>Menambah laporan pencairan klaim JALINAN</li>
                      <li>Menambah laporan klaim JALINAN berdasarkan penyebab</li>
                      <li>Menambah laporan klaim JALINAN berdasarkan usia</li>
                      <li>Menambah laporan klaim JALINAN berdasarkan lama menjadi anggota</li>
                      <li>Memperbaiki beberapa bug pada proses klaim JALINAN</li>
                      <li>Menambah bagian berita dan ucapan ulang tahun CU pada halaman Dashboard</li>
                      <li>Memperbaiki bug data aktivis tidak muncul pada saat mendaftar diklat</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.4 -->

              <!-- Version 3.1.3 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v313">Version 3.1.3 <small class="text-muted"> / 6 September 2019</small></a>
                  </h5>
                </div>

                <div id="v313" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini fokus pada peningkatan pada data aktivis, anggota CU dan klaim JALINAN
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Peningkatan pengalaman penambahan data aktivis</li>
                      <li>Penambahan bagian aktivis tidak aktif/bekerja yang mengakomodir informasi aktivis yang sudah mengundurkan diri, berhenti, pensiun dan meninggal</li>
                      <li>Penambahan riwayat diklat secara input manual dan pada data aktivis</li>
                      <li>Riwayat diklat terkoneksi dengan data diklat pada SIMO (khusus untuk aktivis yang mendaftar diklat di SIMO)</li>
                      <li>Memunculkan foto anggota CU pada tabel</li>
                      <li>Memperbaiki beberapa bug pada proses klaim JALINAN</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.3 -->

              <!-- Version 3.1.2 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v312">Version 3.1.2 <small class="text-muted"> / 24 Agustus 2019</small></a>
                  </h5>
                </div>

                <div id="v312" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini lebih kepada perbaikan bug-bug yang ada pada fitur-fitur yang sudah ada serta peningkatan pengalaman penoperasian pada beberapa bagian.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan bug di penambahan anggota CU dan produk anggota CU </li>
                      <li>Perbaikan bug di penambahan klaim JALINAN </li>
                      <li>Perbaikan bug di penambahan data aktivis baru </li>
                      <li>Perbaikan bug di pengubahan data panitia/fasilitator pada bagian diklat </li>
                      <li>Perbaikan bug di isi kolom laporan PEARLS yang tidak sesuai dengan judul kolom </li>
                      <li>Perbaikan bug pada perhitungan jumlah anggota perorang dalam gerakan yang disajikan di halaman publik website BKCU Kalimantan </li>
                      <li>Mengubah cara penyajian informasi error kepada user yang lebih mudah dimengerti </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.2 -->

              <!-- Version 3.1.1 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v311">Version 3.1.1 <small class="text-muted"> / 16 Juli 2019</small></a>
                  </h5>
                </div>

                <div id="v311" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Perbaikan bug pada perhitungan laporan PEARLS dan penambahan field baru untuk mitra
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan bug dana gedung yang tidak muncul di pengubahan data PEARLS utk E9</li>
                      <li>Perbaikan bug pada saat menambahkan laporan TP</li>
                      <li>Penambahan field bidang untuk mitra perseorangan dan lembaga</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.1 -->

              <!-- Version 3.1.0 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v310">Version 3.1.0 <small class="text-muted"> / 26 April 2019</small></a>
                  </h5>
                </div>

                <div id="v310" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Mengenalkan fitur pengelolaan data anggota CU perorangan yang memungkinkan gerakan Puskopdit BKCU Kalimantan untuk memiliki data secara mendetail anggota CU Perorangan yang akan memudahkan dalam mengetahui persebaran anggota, perilaku anggota dan menjadi database anggota terbesar dalam gerakan. 
                    <br/><br/> 
                    Pada versi ini juga terdapat integrasi dengan JALINAN untuk proses klaim dengan data anggota CU perorangan dan data produk CU yang diperkenalkan pada versi sebelumnya. Dengan begitu klaim JALINAN diharapkan akan lebih akurat. Dan terdapat pondasi dasar untuk integrasi perhitungan iuran JALINAN.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan fitur mengelola data anggota CU perorangan yang terdiri dari identitas, simpanan dan pinjaman yang terintegrasi dengan fitur data produk CU</li>
                      <li>Penambahan fitur proses klaim JALINAN yang terintegrasi dengan data anggota CU Perorangan</li>
                      <li>Perbaikan pada dashboard dalam penyajian data</li>
                      <li>Perbaikan bug dan peningkatan performa keseluruhan aplikasi</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.1.0 -->

              <!-- Version 3.0.9 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v309">Version 3.0.9 <small class="text-muted"> / 20 Februari 2019</small></a>
                  </h5>
                </div>

                <div id="v309" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini berfokus pada perbaikan di beberapa bagian dan penambahan fitur pelaporan error/
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan fitur rekam semua error yang terjadi pada sistem agar memudahkan pengembang untuk melakukan troubleshooting dan perbaikan bug pada error yang terjadi</li>
                      <li>Perbaikan penampilan data produk dan pelayanan CU</li>
                      <li>Perbaikan pada dashboard dalam penyajian data</li>
                      <li>Perbaikan pada redirect login user</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.9 -->

              <!-- Version 3.0.8 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v308">Version 3.0.8 <small class="text-muted"> / 8 Februari 2019</small></a>
                  </h5>
                </div>

                <div id="v308" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini berfokus pada perbaikan data aktivis dan penambahan fitur pada aktivis
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Pengubahan cara menambah data aktivis, dimana pengguna mesti mengisikan dan melakukan pencarian berdasarkan no. KTP (NIK) untuk memastikan apakah aktivis tersebut sudah ada di dalam SIMO, jika ada maka pengguna tinggal melakukan pengubahan data sedangkan apabila data NIK aktivis tidak ada di dalam SIMO maka pengguna bisa langsung menambahkan data aktivis baru</li>
                      <li>Perbaikan pada perhitungan data aktivis di dashboard</li>
                      <li>Perbaikan pada download semua data di excel untuk aktivis</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.8 -->

              <!-- Version 3.0.7 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v307">Version 3.0.7 <small class="text-muted"> / 29 Januari 2019</small></a>
                  </h5>
                </div>

                <div id="v307" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini berfokus pada perbaikan artikel, aktivis dan peningkatan pada diklat BKCU.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan pada halaman aktivis dalam menampilkan data aktivis yang tanggal selesai sudah melewati tanggal hari ini tapi statusnya masih bekerja</li>
                      <li>Perbaikan pada pengubahan artikel</li>
                      <li>Perbaikan untuk menampilkan artikel pada halaman website publik CU</li>
                      <li>Perbaikan untuk notifikasi pada diklat BKCU</li>
                      <li>Peningkatan tampilan pada halaman detail Diklat BKCU</li>
                      <li>Peningkatan tampilan pada pencarian data untuk semua halaman yang memiliki fitur pencarian data</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.7 -->

              <!-- Version 3.0.6 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v306">Version 3.0.6 <small class="text-muted"> / 25 Januari 2019</small></a>
                  </h5>
                </div>

                <div id="v306" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini berfokus pada perbaikan pada halaman produk CU dan perbaikan pada halaman diklat BKCU.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan field tipe produk CU</li>
                      <li>Perubahan tampilan daftar produk CU pada halaman Produk CU dari tabel menjadi card yang memudahkan dalam melihat informasi terkait produk CU</li>
                      <li>Perubahan tampilan daftar diklat pada halaman Diklat BKCU dari tabel menjadi card yang memudahkan dalam melihat informasi terkait diklat yang tersedia</li>
                      <li>Perbaikan widget Diklat BKCU pada halaman dashboard</li>
                      <li>Perbaikan widget peserta Diklat BKCU pada halaman dashboard</li>
                      <li>Perbaikan widget aktivitas perubahan data organisasi pada halaman dashboard</li>
                      <li>Perbaikan bug modal logout</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.6 -->

              <!-- Version 3.0.5 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v305">Version 3.0.5 <small class="text-muted"> / 22 Januari 2019</small></a>
                  </h5>
                </div>

                <div id="v305" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update versi ini berfokus pada perbaikan untuk proses penambahan dan pendaftaran Diklat BKCU, profile user dan penambahan widget untuk halaman dashboard.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan visualisasi pada penambahan panitia Diklat BKCU</li>
                      <li>Penambahan visualisasi pada penambahan peserta Diklat BKCU</li>
                      <li>Perbaikan bug untuk penambahan peserta Diklat BKCU</li>
                      <li>Penambahan fitur untuk melihat aktivitas masing-masing user</li>
                      <li>Penambahan fitur untuk mengubah nama dan email masing-masing user</li>
                      <li>Perbaikan bug pada ubah password di profile</li>
                      <li>Penambahan widget navigasi halaman pada halaman dashboard</li>
                      <li>Penambahan widget Diklat BKCU pada halaman dashboard</li>
                      <li>Penambahan widget peserta Diklat BKCU pada halaman dashboard</li>
                      <li>Penambahan widget aktivitas perubahan data organisasi pada halaman dashboard</li>
                      <li>Penambahan widget jumlah data organisasi pada halaman dashboard</li>
                      <li>Perbaikan bug pada penampilan informasi error pada modal</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.5 -->

              <!-- Version 3.0.4 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v304">Version 3.0.4 <small class="text-muted"> / 13 Januari 2019</small></a>
                  </h5>
                </div>

                <div id="v304" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update untuk versi ini berfokus pada penyelesaian/perbaikan pada fitur diklat BKCU dan pendaftaran peserta diklat BKCU, perbaikan pada laporan gerakan dan laporan statistik CU, peningkatan kecepatan dan keamanan dengan menggunakan layanan dari pihak ketiga, dan perbaikan serta peningkatan sistem secara keseluruhan agar pengalaman pengoperasian lebih konsisten, cepat dan menyenangkan.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan bug pada fitur data panitia dan fasilitator pada saat menambah Diklat BKCU</li>
                      <li>Perbaikan bug pada fitur daftar Diklat BKCU pada halaman Detail Diklat BKCU</li>
                      <li>Perbaikan perhitungan laporan gerakan</li>
                      <li>Pengubahan format dan jenis informasi yang ditampilkan pada halaman laporan gerakan</li>
                      <li>Perbaikan bug pada laporan CU ketika menambah data</li>
                      <li>Perbaikan bug pada perhitungan P.E.A.R.L.S. CU</li>
                      <li>Pengubahan tampilan dalam pencarian data CU agak lebih mudah dipahami.</li>
                      <li>Peningkatan waktu idle pada user yang terlogin di SIMO dari awalnya kurang dari 1 jam menjadi 3 jam</li>
                      <li>Peningkatan keamanan dan kecepatan transfer data dengan menggunakan CDN dari cloudflare yang menyediakan peningkatan kecepatan loading halaman dan data, perlindungan dari serangan DDos, bots jahat dan intrusi-intrusi jahat lainnya, menambahkan satu lapisan perlindungan tambahan dengan menggunakan DNS cloudflare yang terenkripsi. Keterangan lebih lanjut mengenai cloudflare bisa dilihat <a href="https://www.cloudflare.com/learning/what-is-cloudflare/" target="_blank">di website cloudflare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.4 -->
              
              <!-- Version 3.0.3 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v303">Version 3.0.3 <small class="text-muted"> / 9 Januari 2019</small></a>
                  </h5>
                </div>

                <div id="v303" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update untuk versi ini lebih pada perbaikan bug dan error yang ditemukan pada versi sebelumnya ketika sudah live di server production. Selain itu juga penambahan beberapa fitur yang belum sempat terimplementasikan pada versi sebelumnya
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan fitur data panitia dan fasilitator pada saat menambah Diklat BKCU</li>
                      <li>Penambahan fitur daftar Diklat BKCU pada halaman Detail Diklat BKCU</li>
                      <li>Perbaikan bug pada download excel</li>
                      <li>Perbaikan bug pada form laporan CU</li>
                      <li>Perbaikan bug pada form P.E.A.R.L.S. CU</li>
                      <li>Perbaikan bug pada notifikasi laporan</li>
                      <li>Perbaikan bug pada upload gambar Penulis Artikel dan Tp</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.3 -->

              <!-- Version 3.0.2 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v302">Version 3.0.2 <small class="text-muted"> / 4 Januari 2019</small></a>
                  </h5>
                </div>

                <div id="v302" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update untuk versi ini lebih pada perbaikan bug dan error yang ditemukan pada versi sebelumnya ketika sudah live di server production. Selain itu juga penambahan beberapa fitur yang belum sempat terimplementasikan pada versi sebelumnya
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Penambahan cara menambah hak akses dan peran untuk hak akses user</li>
                      <li>Perbaikan bug tambah dan ubah data untuk pengumuman</li>
                      <li>Perbaikan bug dalam mengambil list CU untuk masing-masing halaman</li>
                      <li>Perbaikan bug pada detail laporan CU</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.2 -->

              <!-- Version 3.0.1 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v301">Version 3.0.1 <small class="text-muted"> / 31 Desember 2018</small></a>
                  </h5>
                </div>

                <div id="v301" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Update untuk versi ini lebih pada perbaikan bug dan error yang ditemukan pada versi sebelumnya ketika sudah live di server production. Selain itu juga penambahan beberapa fitur yang belum sempat terimplementasikan pada versi sebelumnya
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul class="list">
                      <li>Perbaikan bug subdomain dan domain ketika menambahkan "www" didepan alamat website</li>
                      <li>Penambahan fitur untuk menuliskan saran terhadap aplikasi ini</li>
                      <li>Penambahan fitur mengelola pengumuman untuk masing-masing CU yang akan otomatis muncul di website publik di subdomain masing-masing CU</li>
                      <li>Perbaikan bug hak akses user yang selalu menampilkan hak akses untuk CU dan tidak bisa untuk BKCU</li>
                      <li>Optimalisasi aplikasi dengan mengurangi beberapa panggilan data ke server yang redundan</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.1 -->

              <!-- Version 3.0.0 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v300">Version 3.0.0 <small class="text-muted"> / 27 Desember 2018</small></a>
                  </h5>
                </div>

                <div id="v300" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Pada versi ini SIMO yang berbasis sepenuhnya PHP dengan framework laravel telah berubah menjadi Single Page Application (SPA) berbasis javascript dengan framework Vue.js yang menawarkan pengalaman interaksi desktop pada browser.
                    <br/><br/>
                    Tampilan keseluruhan pada SIMO juga telah berubah. Menawarkan tampilan yang terinspirasi dari Material design dan Cupertino design yang menghasilkan sebuah aplikasi berbasis web yang interaktif dan menarik
                    <br/><br/>
                    Pengolahan data juga telah berubah untuk menyesuaikan dengan transaksi data berbasis API yang menawarkan kecepatan dan reliabilitas serta kemudahan untuk pengembangan lebih lanjut.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <div class="row mb-3">
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Frontend PHP menjadi Javascript Single Page Application dari Vue.js yang menawarkan:
                            <ul>
                              <li>Transaksi data berbasis API</li>
                              <li>Keamanan dengan JWT Auth</li>
                              <li>Kecepatan pengoperasian karena hanya 1 kali saja loading asset aplikasi, sisanya adalah loading data dari server</li>
                              <li>Peningkatan interaksi dan animasi pada pengoperasian</li>
                            </ul>
                          </li>
                          <li>Penambahan fitur publikasi website bagi CU, dimana masing-masing user CU telah diberikan halaman website tersendiri yang berisi informasi standar sebuah website perusahaan dan dapat dioleh sendiri dengan fitur:
                            <ul>
                              <li>Memiliki subdomain khusus untuk masing-masing CU</li>
                              <li>Menambah artikel</li>
                              <li>Menambah data produk dan pelayanan</li>
                              <li>Menambah informasi lembaga seperti misi, visi, nilai-nilai, sejarah dan slogan</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Penambahan input data pada laporan sampai dengan laporan per TP/KP dari masing-masing CU yang otomatis akan dikonsolidasikan</li>
                          <li>Penambahan 2 indikator baru pada perhitungan P.E.A.R.L.S</li>
                          <li>Penambahan visualisasi dan analisis data pada laporan keuangan di detail laporan</li>
                          <li>Penambahan upload excel pada laporan Cu dan Laporan Tp</li>
                          <li>Penambahan fitur filter data yang mampu mendukung pencarian secara lebih mendetail</li>
                          <li>Penambahaan fitur manajemen user kepada masing-masing CU</li>
                          <li>Penambahan field-field baru untuk informasi CU seperti npwp, situ, siusp, izin operasional dan lainnya</li>
                          <li>Perbaikan bug dan peningkatan performa</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /version 3.0.0 -->

              <!-- Version 2.1.3 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v213">Version 2.1.3 <small class="text-muted"> / 20 April 2017</small></a>
                  </h5>
                </div>

                <div id="v213" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Pada versi ini <b>AdminBKCU</b> berubah nama menjadi <b>SIMO</b> yang merupakan singkatan dari <b>S</b>istem <b>I</b>nformasi <b>M</b>anajemen <b>O</b>rganisasi. Pemilihan nama ini adalah didasarkan dari fitur yang ditawarkan oleh aplikasi ini yaitu memanajemen informasi dari organisasi (bukan bidang organisasi, melainkan organisasi dalam artian Puskopdit BKCU Kalimantan dan CU Primer anggota).
                    <br/><br/>
                    Dalam versi ini terdapat 2 bagian baru yang ditambahkan di aplikasi ini yaitu bagian <b>Diklat</b> dan bagian <b>Staf</b>. Kedua bagian tersebut merupakan pengembangan dari bagian <b>Kegiatan</b> yang sekarang menjadi <b>Diklat</b> dengan penambahan fitur informasi yang lebih mendetail serta fitur pendaftaran peserta. Kemudian bagian <b>Staf</b> juga ditambahkan beberapa fitur agak dapat saling berinteraksi dengan bagian <b>Diklat</b>, karena peserta adalah berasal dari bagian <b>Staf</b>
                    <br/><br/>
                    Selain itu juga terdapat banyak penambahan serta perbaikan pada aplikasi yang memberikan peningkatan performa, stabilitas, serta pengalaman menggunakan aplikasi ini.
                    <br/><br/>
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <div class="row mb-3">
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>AdminBKCU berubah nama menjadi SIMO</li>
                            <li>Penambahan bagian Diklat yang berfungsi:
                              <ul>
                                <li>Data diklat yang dilaksanakan oleh Puskopdit BKCU Kalimantan</li>
                                <li>Daftar diklat yang bisa dilakukan langsung melalui program oleh CU Primer anggota</li>
                                <li>Data tempat dilaksanakan diklat</li>
                                <li>Penambahan widget kegiatan terdekat, kegiatan berjalan dan kalender pada dashboard</li>
                              </ul>
                            </li>
                            <li>Penambahan bagian Staf yang berfungsi:
                              <ul>
                                <li>Data staf dalam gerakan Puskopdit BKCU Kalimantan</li>
                                <li>Komunikasi data antara bagian Staf dengan bagian Diklat</li>
                              </ul>
                            </li>
                        </ul>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Perubahan navigasi website dimana panel navigasi yang versi sebelumnya berada di tepi kiri menjadi berada di atas</li>
                          <li>Pengubahan semua tabel kecuali tabel bagian laporan CU menjadi tabel yang responsive/mobile friendly</li>
                          <li>Penambahan bagian Panduan untuk memberikan petunjuk pengoperasian aplikasi ini</li>
                          <li>Perbaikan rumusan laporan P.E.A.R.L.S.</li>
                          <li>Perbaikan integrasi plugin upload foto</li>
                          <li>Perbaikan bug dan peningkatan performa</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /version 2.1.3 -->
              
              <!-- Version 2.1.2 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v212">Version 2.1.2 <small class="text-muted"> / 11 Maret 2017</small></a>
                  </h5>
                </div>

                <div id="v212" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Penambahan fitur bagian laporan P.E.A.R.L.S Berikut adalah rincian perubahan pada versi ini</p>
                    <ul class="list">
                      <li>Upgrade template AdminLte ke versi 2.3.12</li>
                      <li>Perubahan model navigasi panel samping</li>
                      <li>Penambahan plugin Mathjax untuk menampilkan kalkulasi perhitungan</li>
                      <li>Penambahan fitur melihat detail perhitungan laporan P.E.A.R.L.S</li>
                      <li>Perbaikan rumus perhitungan laporan P.E.A.R.L.S</li>
                      <li>Perbaikan bug dan peningkatan performa</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 2.1.2 -->

              <!-- Version 2.1.1 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v211">Version 2.1.1 <small class="text-muted"> / 14 Februari 2017</small></a>
                  </h5>
                </div>

                <div id="v211" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Penambahan fitur bagian laporan CU serta fitur diskusi pada laporan CU Berikut adalah rincian perubahan pada versi ini:</p>

                    <div class="row mb-3">
                      <div class="col-sm-4">
                        <ul class="list">
                          <li>Upgrade laravel versi 5.2 ke versi 5.3 yang menawarkan:
                              <ul>
                                  <li>Support Vue.js</li>
                                  <li>Fitur sistem notifikasi</li>
                                  <li>Penyederhanaan struktur folder project</li>
                                  <li>Pembagian rute akses website menjadi dua yaitu untuk akses ke web dan akses melalui aplikasi selain web (API)</li>
                              </ul>
                          </li>
                          <li>Penambahan bagian laporan CU yang berfungsi:
                              <ul>
                                  <li>Menampung dan mengolah data laporan keuangan CU menjadi laporan perkembangan CU serta analisis P.E.A.R.L.S</li>
                                  <li>Menampilkan laporan CU dalam tabel interaktif serta grafik</li>
                                  <li>Input data laporan melalui upload excel <small class="label bg-yellow">beta</small></li>
                              </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-4">
                        <ul class="list">
                          <li>Penambahan bagian laporan CU yang berfungsi:
                              <ul>
                                  <li>Menampilkan pertumbuhan perakun perperiode pada masing-masing laporan</li>
                                  <li>Menampilkan panel overview kondisi CU berdasarkan laporan terbaru</li>
                                  <li>Penambahan fitur pada input data laporan melalui upload excel <small class="label bg-yellow">beta 2</small></li>
                              </ul>
                          </li>
                          <li>Penambahan fitur sistem notifikasi yang berfungsi:
                              <ul>
                                  <li>Memberikan pemberitahuan mengenai laporan CU yang masuk, diubah, dan dihapus</li>
                                  <li>Memberikan pemberitahuan mengenai diskusi laporan CU yang masuk, diubah, dan dihapus</li>
                              </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-4">
                        <ul class="list">
                          <li>Penambahan bagian diskusi laporan CU yang berfungsi:
                              <ul>
                                  <li>Memberikan masukkan kepada CU bahwa laporan telah diterima/diperiksa</li>
                                  <li>Memberikan masukkan/pertanyaan terhadap laporan CU yang telah diterima/diperiksa</li>
                              </ul>
                          </li>
                          <li>Penambahan bagian revisi laporan CU yang berfungsi Menampilkan data apa saja yang telah diubah</li>
                          <li>Penambahan fitur mengubah foto profil admin pada bagian admin</li>
                          <li>Perbaikan bug dan peningkatan performa</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /version 2.1.1 -->

              <!-- Version 2.1.0 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v210">Version 2.1.0 <small class="text-muted"> / 9 Desember 2016</small></a>
                  </h5>
                </div>

                <div id="v210" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Penambahan fitur bagian laporan CU yang berfungsi untuk menampilkan perkembangan Credit Union diserta dengan perhitungan analisis P.E.A.R.L.S serta upgrade sistem utama aplikasi dari versi 4.2 ke versi 5.2 dan peningkatan fitur-fitur pada plugin yang dipakai. Berikut adalah rincian perubahan pada versi ini:</p>

                    <div class="row mb-3">
                      <div class="col-sm-4">
                        <ul class="list">
                          <li>Upgrade laravel versi 4.2 ke versi 5.2 yang menawarkan:
                              <ul>
                                  <li>Support PHP 7</li>
                                  <li>Peningkatan keamanan dengan "middleware"</li>
                                  <li>Peningkatan eksekusi kode program</li>
                                  <li>Penambahan dukungan terhadap plugin-plugin</li>
                                  <li>Proteksi semua input terhadap serangan SQL injection</li>
                              </ul>
                          </li>
                          <li>Penambahan bagian laporan CU yang berfungsi:
                              <ul>
                                  <li>Menampung dan mengolah data laporan keuangan CU menjadi laporan perkembangan CU serta analisis P.E.A.R.L.S</li>
                                  <li>Menampilkan laporan CU dalam tabel interaktif serta grafik</li>
                                  <li>Input data laporan melalui upload excel <small class="label bg-yellow">beta</small></li>
                              </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-4">
                        <ul class="list">
                          <li>Penambahan bagian TP CU untuk mendata informasi TP tiap CU secara lebih mendetail</li>
                          <li>Penambahan bagian admin untuk CU yang memungkinkan staf CU untuk:
                              <ul>
                                  <li>Mengisi / mengubah profil dari CU</li>
                                  <li>Menambah, mengubah dan menghapus data TP di CU</li>
                                  <li>Menambah, mengubah dan menghapus laporan CU</li>
                              </ul>
                          </li>
                          <li>Penambahan fitur dan perubahan penggunaan pada Datatable</li>
                          <li>Penambahan fitur text editor untuk bagian artikel</li>
                          <li>Penambahan fitur pada bagian admin</li>
                          <li>Pengubahan struktur navigasi sidebar</li>
                        </ul>
                      </div>
                      <div class="col-sm-4">
                        <ul class="list">
                          <li>Penambahan fitur validator untuk validasi input</li>
                          <li>Penggunaan input mask untuk pengisian tanggal serta pengisian angka</li>
                          <li>Penggunaan pace untuk animasi loading resource dan request ajax</li>
                          <li>Penggantian Plugin ACL entrust dengan kodeine untuk integrasi lebih lanjut dengan laravel ACL</li>
                          <li>Menghapus plugin flickering untuk akses ke flickr</li>
                          <li>Perbaikan bug dan peningkatan performa</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /version 2.1.0 -->

              <!-- Version 2.0.1 -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v201">Version 2.0.1 <small class="text-muted"> / 2 Januari 2016</small></a>
                  </h5>
                </div>

                <div id="v201" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Pengubahan penggunaan rich text editor dari CKeditor menjadi Summernote. Berikut adalah rincian perubahan pada versi ini:</p>

                    <ul>
                        <li>Penggantian CKeditor menjadi Summernote</li>
                        <li>Pengubahan cara penanganan gambar pada Summernote</li>
                        <li>Peningkatan penanganan upload gambar dengan metode baru yang diperkenalkan
                        pada versi Intervention Image v2.x</li>
                        <li>Penambahan halaman version</li>
                        <li>Perbaikan bug dan peningkatan performa</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /version 2.0.1 -->

              <!-- Initial release -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <a data-toggle="collapse" class="collapsed text-default" href="#v200">Version 2.0.0 <small class="text-muted"> / 31 Desember 2015</small></a>
                  </h5>
                </div>

                <div id="v200" class="collapse" data-parent="#accordion-control-right" style="">
                  <div class="card-body">
                    <p class="mb-3">Rombak ulang keseluruhan tampilan admin menjadi lebih mudah di operasikan, lebih <i>responsive/mobile friendly</i> dan pengubahan code php pada controller dan model untuk peningkatan performa dan konsistensi pada tiap pengoperasian. Berikut adalah rincian perubahan pada versi ini:</p>

                    <div class="row mb-3">
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Pengalaman penggunaan dengan desain yang lebih modern dan responsive</li>
                          <li>Sidebar yang fleksibel dan responsive</li>
                          <li>Upgrade bootstrap v3.3.2</li>
                          <li>Upgrade font-awesome v4.5.0</li>
                          <li>Upgrade Datatables v1.10.10</li>
                          <li>Upgrade Image Intervention v2.x</li>
                          <li>Upgrade Jquery v2.1.3 </li>
                          <li>Penambahan fitur pada semua tabel di halaman kelola yaitu
                              <ul>
                                  <li>Tabel menjadi responsive dan dapat menyesuaikan di hampir semua ukuran layar.
                                      maka apabila layar terlalu kecil untuk kolom, kolom otomatis akan disembunyikan dan
                                      akan muncul tombol untuk menampilkan kolom yang telah di sembunyikan tersebut</li>
                                  <li>Warp text pada masing-masing cell di kolom untuk pemanfaatan ruang kosong pada cell</li>
                                  <li>Colum priority pada kolom hapus,ubah dan detail membuat kolom tersebut tidak akan
                                      tersembunyi apabila ukuran layar terlalu kecil untuk semua tabel</li>
                                  <li>Pengubahan cara berinteraksi pada tiap tabel agar lebih konsisten</li>
                              </ul>
                          </li>
                          <li>Peningkatan cara mengangani error dan penyampaian informasi error yang lebih informatif dan akurat</li>
                          <li>Peningkatan penanganan upload gambar</li>
                          <li>Penambahan halaman detail staf untuk pemberian informasi lengkap mengenai staf</li>
                        </ul>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Penambahan fitur pada semua form di halaman tambah dan ubah yaitu
                              <ul>
                                  <li>Peningkatan desain yang lebih modern dan lebih jelas fungsinya</li>
                                  <li>Penggunaan input mask pada pengisian tanggal untuk mempermudah pengisian tanggal</li>
                                  <li>Peningkatan pada CKeditor dengan menambahkan fitur responsive pada gambar</li>
                                  <li>Penggunaan laravel validation pada input text untuk menginformasikan bagian yang bermasalah</li>
                                  <li>Peningkatan visualisasi dan informasi yang disampaikan pada bagian pemberitahuan setelah melakukan penyimpanan atau pengubahan data</li>
                              </ul>
                          </li>
                          <li>Peningkatan halaman admin (kelola admin,tambah admin, ubah admin) yaitu
                              <ul>
                                  <li>Pengubahan cara mengubah password</li>
                                  <li>Penambahan tipe admin untuk membedakan admin BKCU dan admin CU Primer</li>
                                  <li>Menyatukan tipe admin CU Primer dengan data CU Primer yang dipilih</li>

                              </ul>
                          </li>
                          <li>Perbaikan error routing pada beberapa halaman</li>
                          <li>Perbaikan error pada controller</li>
                          <li>Perbaikan error pada model</li>
                        </ul>
                      </div>
                    </div>

                    <hr/>

                    <p class="mb-3">Rombak ulang seluruh halaman pada website publik dengan tampilan yang lebih bersih, modern,
                    responsive/mobile friendly dan visualisasi yang lebih bai k. Pada update kali ini semua
                    bagian pada halaman telah di desain ulang menyesuaikan tema halaman dengan warna dasar putih
                    dan biru serta background yang dapat disesuaikan dengan keadaan/event yang sedang berlangsung.
                    Serta penambahan halaman CU untuk melakukan pengubahan dan penambahan data pada data CU Primer.
                    Berikut adalah rincian perubahan pada versi ini:</p>

                    <div class="row mb-3">
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Penambahan plugin javascript yaitu:
                              <ul>
                                  <li>jquery.fitvids</li>
                                  <li>nivo-lightbox</li>
                                  <li>jquery.isotope</li>
                                  <li>jquery.appear</li>
                                  <li>count.to</li>
                                  <li>jquery.textillate</li>
                                  <li>jquery.lettering</li>
                                  <li>jquery.easypiechart</li>
                                  <li>jquery.nicescroll</li>
                                  <li>jquery.parallax</li>
                                  <li>jquery.slicknav</li>
                              </ul>
                          </li>
                          <li>Upgrade bootstrap v3.3.2</li>
                          <li>Upgrade font-awesome v4.5.0</li>
                          <li>Upgrade Jquery v2.1.4</li>
                          <li>Upgrade plugin google maps</li>
                          <li>Penghapusan plugin social network sharing</li>
                        </ul>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>Pengubahan fitur sharing social network, tidak bergantung pada plugin lagi tapi
                          dibangun 1-1 sesuai guidelines dari sharing API masing-masing social network</li>
                          <li>Penambahan animasi melalui css pada beberapa komponen halaman</li>
                          <li>Peningkatan carousel pada halaman utama untuk artikel pilihan menjadi lebih elegan
                              dan informatif</li>
                          <li>Peningkatan zoom foto/gambar di seluruh halaman dengan menggunakan lightbox</li>
                          <li>Peningkatan menu yang lebih responsive dengan tampilan yang lebih rapi dan bersih</li>
                          <li>Peningkatan pengalaman membaca artikel dengan tulisan serta layout yang lebih nyaman di mata</li>
                          <li>Peningkatan pengalaman berinteraksi dan konsistensi desain secara keseluruhan pada semua halaman.</li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <!-- /initial release -->
            </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader.vue";

  export default {
    components: {
      pageHeader,
    },
    data() {
      return {
        title: 'Changelog',
        titleDesc: 'Sejarah penambahan fitur dan perbaikan pada sistem',
        titleIcon: 'icon-list',
      }
    },
    created(){
      window.scrollTo(0, 0);
    }
  }
</script>