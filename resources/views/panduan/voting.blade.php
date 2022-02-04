<div class="card" id="voting">
  <div class="card-header bg-white header-elements-inline">
    <h5 class="card-title">22. Voting</h5>
    <div class="header-elements">
      <div class="list-icons">
        <a class="list-icons-item" data-action="collapse"></a>
      </div>
    </div>
  </div>
  <div class="card-body">	
    <div class="mb-3 text-center">
      <img src="{{ asset('images/panduan/voting.png') }}" class="img-thumbnail" alt="">
    </div>
    <p>
      Halaman voting menampilkan semua daftar voting yang ada sesuai dengan CU pada user tersebut. Pada halaman ini pengguna dapat menambahkan voting <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span>,
      
      <br/>
      Kemudian dapat juga mengaktifkan atau menonaktifkan voting <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>, 
      
      Kemudian terdapat juga tombol hapus <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span> yang berguna untuk menghapus voting yang dipilih,
      <br/>
      anda juga dapat melihat detail voting yang dipilih <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>.

      Pada bagian tabel <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">5</span> terdapat ringkasan voting yang menampilkan informasi umum voting dan status voting yang berupa:

        <li><span class="badge badge-warning" style="color: green">&#10004</span> yang berarti bahwa voting dalam status aktif</li>
        <li><span class="badge badge-success" style="color: white">&#10006</span> yang berarti bahwa voting dalam status tidak aktif</li>
      </ol>  
  </p>
  <p>Voting hanya dapat dilakukan jika voting dalam status aktif.</p>
  <hr/> 
  <h6>A. Menambah Voting</h6>
  <div class="mb-3 text-center">
    <img src="{{ asset('images/panduan/tambahVoting.png') }}" class="img-thumbnail" alt="">
  </div>
  <p>
      Untuk menambah voting pengguna harus menekan tombol tambah pada halaman voting , Kemudian mengisi semua bagian yang ada sesuai dengan penjelasannya dan ketika sudah selesai maka menekan tombol simpan untuk menyimpan semua data yang telah diisi. Berikut sedikit penjelasan kotak isian pada Form Voting <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> :
  </p>

  <ul>
    <li><b>Nama</b> : Nama dari voting yang akan ditambahkan.</li>
    <li><b>Kegiatan</b> : Kegiatan yang berkaitan dengan voting yang akan ditambahkan(misalkan kegiatan diklat) jika belum ada pilih saja kegiatan yang tidak terdaftar.</li>
    <li><b>Nama Kegiatan</b> : Jika anda memilih kegiatan yang tidak terdaftar maka anda harus mengisi Nama kegiatan yang berkaitan dengan voting tersebut.</li>
    <li><b>Sumber Data Suara (link voting)</b> : Anda dapat menggunakan sumber data suara yang sudah ada (link voting lama) ataupun membuat sumber data suara baru(link voting baru).</li>
    <li><b>Jumlah Suara</b> : Jumlah suara yang akan diterima dan hanya perlu diisi jika anda memilih Sumber Data Suara dengan Data Suara Baru.(Jumlah Link yang akan tersedia nantinya akan sesuai dengan Jumlah suara)</li>
  </ul>

  <p>Pada Form Pilihan<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2 </span> anda harus menambahkan pilihan yang akan tersedia untuk voting nantinya. (misalkan setuju dan tidak setuju)</p>

  <hr/> 
  <h6>B. Melihat detail Voting</h6>
  <div class="mb-3 text-center">
    <img src="{{ asset('images/panduan/detailVoting.png') }}" class="img-thumbnail" alt="">
  </div>
  <p>
    Untuk melihat detail voting anda harus menekan tombol detail pada halaman voting. Pada halaman ini terdapat dua tab yaitu tab info <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">1</span> menampilkan informasi umum voting seperti total suara, nama voting, pilihan yang tersedia, dan link untuk melakukan voting. tab skor <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> menampilkan hasil dari voting yang sedang dilakukan seperti jumlah suara yang sudah masuk dan perolehan skor. Untuk mengaktifkan voting, anda dapat menekan tombol status <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">3</span>. Voting harus diaktifkan agar link yang telah dibagikan dapat digunakan untuk melakukan voting, jika tidak maka link tidak akan bisa digunakan untuk apapun.
    Jika anda ingin membagikan link voting maka anda dapat mendownloadnya dalam bentuk excel dengan menekan tombol excel<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">4</span>. Pada tab info terdapat status memilih untuk melihat apakah link sudah digunakan untuk melakukan voting atau belum. Jika terdapat simbol <span class="badge badge-warning" style="color: green">&#10004</span> berarti link sudah digunakan untuk melakukan voting, jika terdapat simbol 
    <span class="badge badge-success" style="color: white">&#10006</span> berarti link belum digunakan untuk melakukan pemilihan.
  </p>

  <hr/> 
  <h6>C. Melakukan Voting</h6>
  <p>Sebelum melakukan voting, CU harus sudah membagikan link voting kepada masing-masing orang yang berhak melakukan voting, dan juga mengubah status voting menjadi aktif agar voting dapat dilakukan. Untuk mengubah status voting menjadi aktif dapat dilakukan dengan menekan tombol status yang terdapat pada halaman detail voting atau halaman voting.</p>
  <div class="mb-3 text-center">
    <img src="{{ asset('images/panduan/pemilihanVoting.png') }}" class="img-thumbnail" alt="">
  </div>
  <br>
  <div class="mb-2 text-center">
    <img src="{{ asset('images/panduan/konfirmPemilihanVoting.png') }}" class="img-thumbnail" alt="">
  </div>
  <p>
    Untuk melakukan voting dapat dilakukan dengan mengunjungi link voting yang telah dibagikan, lalu memilih pilihan voting yang tersedia dan kemudian melakukan konfirmasi pemilihan dengan menekan tombol pilih.
  </p>
  <div class="mb-3 text-center">
    <img src="{{ asset('images/panduan/skorVoting.png') }}" class="img-thumbnail" alt="">
  </div>
  <p>
    Setelah melakukan voting akan diarahkan ke halaman skor dimana pemilih dapat melihat hasil voting.
  </p>
  </div>
  
</div>