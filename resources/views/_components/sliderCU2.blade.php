<section id="content">
  <div class="content-warp">
    <div id="oc-images" class="owl-carousel owl-carousel-full news-carousel header-stick mb-6 carousel-widget" data-margin="3" data-loop="true" data-stage-padding="50" data-pagi="false" data-items-xs="1" data-items-lg="2">
    @foreach($artikelsUtama as $item)
      @php
        $imagepath = 'images/artikel/';
        if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg")){
          $gambar = $imagepath . $item->gambar . '.jpg';
        }else{
          $gambar = 'images/image-articlen.jpg';
        }
      @endphp
      <div class="oc-item">
        <img src="{{ asset($gambar) }}" alt="{{ $item->name }}" class="d-block w-100 h-100 object-cover">
        <div class="bg-overlay">
          <div class="bg-overlay-content text-overlay-mask dark align-items-end justify-content-start p-4">
            <div>
              <span class="badge bg-danger">{{ $item->kategori ?$item->kategori->name : '' }}</span>
              <div class="portfolio-desc px-0">
                <h3>{{ $item->name }}</h3>
                <span>{{ $item->created_at->diffForHumans() }}</span>
              </div>
              <a href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}" class="btn btn-sm btn-outline-light mx-0 mb-2">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    @endforeach  
    </div>
    
  </div>
</section>