<!-- pengumuman -->
<div class="section dark m-0 p-3">
  <div class="container">
    <!-- <span class="badge bg-travel bnews-title" style="border-radius: 2px;">Pengumuman:</span> -->
    <div class="fslider bnews-slider" data-speed="800" data-pause="6000" data-arrows="false" data-pagi="false">
      <div class="flexslider">
        <div class="slider-wrap">
          <div class="slide">Selamat datang di website Federasi Nasional Credit Union Indonesia - PUSKOPCUINA</div>
          @foreach($birthdayList as $item)
          <div class="slide">PUSKOPCUINA mengucapkan dirgahayu kepada CU {{ $item->name }} ke - {{ $item->usia }}</div>
          @endforeach
          @foreach($pengumumanBKCUList as $item)
          <div class="slide">{{ $item->name }}</div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</div>