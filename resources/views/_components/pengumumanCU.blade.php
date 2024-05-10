@php $subdomain = Route::input('cu') @endphp
<!-- pengumuman -->
<div class="section dark m-0 p-3">
  <div class="container">
    <div class="fslider bnews-slider" data-speed="800" data-pause="6000" data-arrows="false" data-pagi="false">
      <div class="flexslider">
        <div class="slider-wrap">
          <div class="slide">Selamat datang di website Credit Union {{ ucwords(str_replace('-', ' ', $subdomain)) }}</div>
          @foreach($pengumumanCUList as $item)
          <div class="slide">{{ $item->name }}</div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</div>