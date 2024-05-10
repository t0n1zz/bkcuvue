<section id="slider" class="slider-element revslider-wrap h-auto">

	<div class="rev_slider_wrapper" style="width: 100%;margin: 0 auto; background:#000;padding:0px;margin-top:0px;margin-bottom:0px;">
		<!-- START REVOLUTION SLIDER 5.4.8.1 auto mode -->
		<div id="rev_slider_19_1" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.1">
			<ul>
				@foreach($artikelsUtama as $item)
					@php
						$imagepath = 'images/artikel/';
						if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg")){
							$gambar = $imagepath . $item->gambar . '.jpg';
							$gambarThumb = $imagepath . $item->gambar . 'n.jpg';
						}else{
							$gambar = 'images/image-articlen.jpg';
							$gambarThumb = 'images/image-articlen.jpg';
						}
					@endphp
					<li data-index="{{ 'rs-' . $item->id }}" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"  data-thumb="{{asset($gambarThumb)}}"  data-rotate="0"  data-saveperformance="off"  data-title="{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),55) }}" data-param1="{{ $item->kategori ? $item->kategori->name : '-'}}" data-param2="{{ $item->created_at->format('j M Y') }}" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
						<!-- MAIN IMAGE -->
						<img src="{{asset('plugins/rs-plugin/demos/assets/images/dummy.png')}}"  alt="Image"  data-lazyload="{{asset($gambar)}}" data-bgposition="center center" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina>
						<!-- LAYERS -->

						<!-- LAYER NR. 1 -->
						<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme  tp-gradientstyle" id="slide-48-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="full" data-height="['200','200','200','250']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="on" data-frames='[{"from":"y:50px;opacity:0;","speed":2000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 5;"></div>

						<!-- LAYER NR. 3 -->
						<a class="tp-caption font-primary bg-travel tp-resizeme"
							href="{{ route('artikel.lihat.cu',['cu'=>$subdomain,'slug'=>$item->slug]) }}" target="_self" id="slide-48-layer-4" data-x="['left','left','left','left']" data-hoffset="['40','40','30','20']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','120','130','118']" data-fontsize="['40','35','25','25']" data-lineheight="['40','35','25','24']" data-width="['580','480','340','260']" data-height="none" data-whitespace="normal" data-type="text" data-actions='' data-basealign="slide" data-responsive_offset="on" data-frames='[{"from":"y:20px;opacity:0;","speed":2000,"to":"o:1;","delay":200,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]' data-textAlign="['left','left','left','left']"  style="z-index: 6; min-width: 580px; max-width: 580px; white-space: normal; font-size: 40px; line-height: 40px; font-weight: 600; color: rgba(255,255,255,1);text-decoration: none; padding: 15px; border-radius: 2px;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),55) }}</a>

						<!-- LAYER NR. 2 -->
						<div class="tp-caption entry-categories bg-fashion tp-resizeme" id="slide-48-layer-3" data-x="['left','left','left','left']" data-hoffset="['40','40','30','20']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['65','65','48','48']" data-fontsize="10" data-width="auto" data-height="none" data-whitespace="nowarp" data-type="text" data-actions='' data-basealign="slide" data-responsive_offset="on" data-frames='[{"from":"y:20px;opacity:0;","speed":2000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]' data-textAlign="['left','left','left','left']" style="z-index: 6; text-shadow: none;border-radius: 2px; left: auto; bottom:auto; letter-spacing: 1px;"><a href="{{ route('artikel.kategori.cu',['cu'=>$subdomain,'slug'=>$item->kategori->slug]) }}">{{ $item->kategori ? $item->kategori->name : "-"}}</a></div>


						<!-- LAYER NR. 5 -->
						<div class="tp-caption bg-sports tp-resizeme" id="slide-48-layer-6" data-x="['left','left','left','left']" data-hoffset="['40','40','30','20']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['28','28','20','20']"  data-fontsize="14"  data-whitespace="normal" data-type="text" data-actions='' data-basealign="slide" data-responsive_offset="on" data-frames='[{"from":"y:20px;opacity:0;","speed":2000,"to":"o:1;","delay":600,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]' data-textAlign="['left','left','left','left']" style="min-width: 306px; max-width: 306px;z-index: 6; text-shadow: none; color: #DDD !important; font-size: 20px; line-height: 20px; font-weight: 600; font-family: 'Roboto', sans-serif; padding: 3px 5px; border-radius: 2px;">{{ $item->penulis ? $item->penulis->name : ""}} - {{ $item->created_at->format('j F Y') }}</div>

					</li>
				@endforeach
			</ul>
			<div class="tp-bannertimer" style="height: 8px; background: rgba(255,255,255,0.25);"></div>
		</div>
	</div><!-- END REVOLUTION SLIDER -->

</section>