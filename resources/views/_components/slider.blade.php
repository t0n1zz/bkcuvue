<section id="slider" class="slider-element revslider-wrap clearfix">

	<div id="rev_slider_224_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="news-magazine-slider69"
			data-source="gallery" style="margin:0px auto;background:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">
			<!-- START REVOLUTION SLIDER 5.4.8.1 auto mode -->
			<div id="rev_slider_224_1" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.8.1">
					<ul>
							@php 
								$imagepath = 'images/artikel/';
								$i = 0;
							@endphp
							@foreach($artikelsUtama as $items)
							@php $i++ @endphp

							@if($i == 1)
							<li data-index="rs-582" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
									data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
									data-thumb="{{asset('images/transparent.png')}}" data-rotate="0"
									data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3=""
									data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9=""
									data-param10="" data-description="">

									<!-- MAIN IMAGE -->
									<img src="{{asset('images/transparent.png')}}" data-bgcolor='#e5e5e5' style='background:#e5e5e5'
											alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg"
											data-no-retina>

									<!-- LAYERS -->
									
									@php $i2 = 0 @endphp
									@foreach($items as $item)
									@php $i2++ @endphp

											@if($i2 == 1)
											<!-- LAYER NR. 1 -->
											<a href="{{ route('artikel.lihat',$item->slug) }}">
												<div class="tp-caption rev_group" id="slide-582-layer-11" data-x="['left','left','left','left']"
														data-hoffset="['30','30','30','20']" data-y="['top','top','top','top']" data-voffset="['30','30','30','20']"
														data-width="['580','580','718','440']" data-height="['500','500','350','350']" data-whitespace="nowrap"
														data-type="group" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"x:[100%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 5; min-width: 580px; max-width: 580px; max-width: 500px; max-width: 500px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">

														<!-- LAYER NR. 2 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-8" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['580','580','718','440']" data-height="['500','500','350','350']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 6;">

																<!-- image -->
																@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																	<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@else  
																	<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@endif  
														</div>

														<!-- LAYER NR. 3 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-10" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['580','580','718','440']" data-height="['500','500','350','350']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 7;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);"></div>

														<!-- LAYER NR. 4 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-4" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['170','170','170','170']" data-width="none" data-height="none"
																data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[5,5,5,5]" style="z-index: 8; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(94,53,177);">{{ $item->kategori ? $item->kategori->name : "-"}} </div>

														<!-- LAYER NR. 5 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-5" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['50','50','50','50']" data-width="['360','360','360','320']" data-height="none"
																data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 9; min-width: 360px; max-width: 360px; white-space: normal; font-size: 30px; line-height: 35px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;"> {{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>
				
														<!-- LAYER NR. 6 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-6" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 10; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-"}}</div>

														<!-- LAYER NR. 7 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-7" data-x="['left','left','left','left']"
																data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 11; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }} </div>
												</div>
											</a>
											@elseif($i2 == 2)
											<!-- LAYER NR. 8 -->
											<a href="{{ route('artikel.lihat',$item->slug) }}">
												<div class="tp-caption     rev_group" id="slide-582-layer-12" data-x="['left','left','left','left']"
														data-hoffset="['615','615','30','20']" data-y="['top','top','top','top']" data-voffset="['30','30','385','375']"
														data-width="['595','595','355','440']" data-height="['280','280','325','160']" data-whitespace="nowrap"
														data-type="group" data-responsive_offset="on" data-frames='[{"delay":600,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 12; min-width: 595px; max-width: 595px; max-width: 280px; max-width: 280px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
														<!-- LAYER NR. 9 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-13" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['595','595','355','440']" data-height="['280','280','325','160']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 13;">
																@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																	<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@else  
																	<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@endif  
														</div>

														<!-- LAYER NR. 10 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-19" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['595','595','355','440']" data-height="['280','280','325','160']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 14;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
														</div>

														<!-- LAYER NR. 11 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-14" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['50','50','50','50']" data-fontsize="['30','30','30','20']" data-lineheight="['35','35','35','25']"
																data-width="['360','360','315','315']" data-height="none" data-whitespace="normal"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 15; min-width: 360px; max-width: 360px; white-space: normal; font-size: 30px; line-height: 35px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>

														<!-- LAYER NR. 12 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-15" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['130','130','130','110']" data-width="none" data-height="none"
																data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[5,5,5,5]" style="z-index: 16; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(215,0,37);">{{ $item->kategori ? $item->kategori->name : "-" }}
														</div>

														<!-- LAYER NR. 13 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-16" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 17; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-" }} </div>

														<!-- LAYER NR. 14 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-17" data-x="['left','left','left','left']"
																data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 18; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
												</div>
											</a>	
											@elseif($i2 == 3)
											<!-- LAYER NR. 15 -->
											<a href="{{ route('artikel.lihat',$item->slug) }}">
												<div class="tp-caption     rev_group" id="slide-582-layer-27" data-x="['left','left','left','left']"
														data-hoffset="['615','615','390','20']" data-y="['top','top','top','top']" data-voffset="['315','315','385','540']"
														data-width="['295','295','358','440']" data-height="['215','215','160','160']" data-whitespace="nowrap"
														data-type="group" data-responsive_offset="on" data-frames='[{"delay":700,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 19; min-width: 295px; max-width: 295px; max-width: 215px; max-width: 215px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">

														<!-- LAYER NR. 16 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-28" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['295','295','358','440']" data-height="['215','215','160','160']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 20;">
																@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																	<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@else  
																	<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@endif  
														</div>

														<!-- LAYER NR. 17 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-33" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['295','295','358','440']" data-height="['215','215','160','160']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 21;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
														</div>

														<!-- LAYER NR. 18 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-29" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['50','50','50','50']" data-width="255" data-height="none" data-whitespace="normal"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 22; min-width: 255px; max-width: 255px; white-space: normal; font-size: 20px; line-height: 25px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>

														<!-- LAYER NR. 19 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-30" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['110','110','110','110']" data-width="none" data-height="none"
																data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[5,5,5,5]" style="z-index: 23; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #000000; letter-spacing: 0px;font-family:Roboto;background-color:rgb(124,255,159);">{{ $item->kategori ? $item->kategori->name : "-"}}
														</div>

														<!-- LAYER NR. 20 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-31" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 24; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-"}} </div>

														<!-- LAYER NR. 21 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-32" data-x="['left','left','left','left']"
																data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 25; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
												</div>
											</a>
											@elseif($i2 == 4)
											<!-- LAYER NR. 22 -->
											<a href="{{ route('artikel.lihat',$item->slug) }}">
												<div class="tp-caption     rev_group" id="slide-582-layer-20" data-x="['left','left','left','left']"
														data-hoffset="['915','915','390','20']" data-y="['top','top','top','top']" data-voffset="['315','315','550','705']"
														data-width="['295','295','358','440']" data-height="['215','215','160','160']" data-whitespace="nowrap"
														data-type="group" data-responsive_offset="on" data-frames='[{"delay":800,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 26; min-width: 295px; max-width: 295px; max-width: 215px; max-width: 215px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
														<!-- LAYER NR. 23 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-21" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['295','295','358','440']" data-height="['215','215','160','160']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 27;">
																@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																	<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@else  
																	<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
																@endif  
														</div>

														<!-- LAYER NR. 24 -->
														<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-582-layer-26" data-x="['left','left','left','left']"
																data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
																data-width="['295','295','358','440']" data-height="['215','215','160','160']"
																data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 28;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
														</div>

														<!-- LAYER NR. 25 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-22" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['50','50','50','50']" data-width="255" data-height="none" data-whitespace="normal"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 29; min-width: 255px; max-width: 255px; white-space: normal; font-size: 20px; line-height: 25px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>

														<!-- LAYER NR. 26 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-23" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['110','110','110','110']" data-width="none" data-height="none"
																data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[5,5,5,5]" style="z-index: 30; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(0,109,210);">{{ $item->kategori ? $item->kategori->name : "-" }}
														</div>

														<!-- LAYER NR. 27 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-24" data-x="['left','left','left','left']"
																data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 31; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-"}}</div>

														<!-- LAYER NR. 28 -->
														<div class="tp-caption   tp-resizeme" id="slide-582-layer-25" data-x="['left','left','left','left']"
																data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
																data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
																data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
																data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
																data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
																data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
																data-paddingleft="[0,0,0,0]" style="z-index: 32; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
												</div>
											</a>
											@endif

									@endforeach
									
							</li>
							@elseif($i == 2)
							<li data-index="rs-584" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
									data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
									data-thumb="{{asset('images/transparent.png')}}" data-rotate="0"
									data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3=""
									data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9=""
									data-param10="" data-description="">
									<!-- MAIN IMAGE -->
									<img src="{{asset('images/transparent.png')}}" data-bgcolor='#e5e5e5' style='background:#e5e5e5'
											alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg"
											data-no-retina>
									<!-- LAYERS -->

									@php $i2b = 0 @endphp
									@foreach($items as $item)
									@php $i2b++ @endphp
									
											@if($i2b == 1)
											<!-- LAYER NR. 57 -->
											<div class="tp-caption rev_group" id="slide-584-layer-11" data-x="['left','left','left','left']"
													data-hoffset="['30','30','30','20']" data-y="['top','top','top','top']" data-voffset="['30','30','30','20']"
													data-width="['1180','1180','718','440']" data-height="['280','280','350','350']"
													data-whitespace="nowrap" data-type="group" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"x:[100%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
													data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
													data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
													data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
													data-paddingleft="[0,0,0,0]" style="z-index: 5; min-width: 1180px; max-width: 1180px; max-width: 280px; max-width: 280px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
													<!-- LAYER NR. 58 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-8" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['1180','1180','718','440']" data-height="['280','280','350','350']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 6;">
															@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@else  
																<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@endif
													</div>

													<!-- LAYER NR. 59 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-10" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['1180','1180','718','440']" data-height="['280','280','350','350']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 7;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
													</div>

													<!-- LAYER NR. 60 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-5" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['50','50','50','50']" data-width="['640','640','640','320']" data-height="none"
															data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 8; min-width: 640px; max-width: 640px; white-space: normal; font-size: 30px; line-height: 35px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }}</div>

													<!-- LAYER NR. 61 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-4" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['135','135','135','165']" data-width="none" data-height="none"
															data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[5,5,5,5]" style="z-index: 9; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(215,0,37);">{{ $item->kategori ? $item->kategori->name : "-" }}
													</div>

													<!-- LAYER NR. 62 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-6" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 10; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-" }} </div>

													<!-- LAYER NR. 63 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-7" data-x="['left','left','left','left']"
															data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 11; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }} </div>
											</div>
											@elseif($i2b == 2)
											<!-- LAYER NR. 64 -->
											<div class="tp-caption     rev_group" id="slide-584-layer-12" data-x="['left','left','left','left']"
													data-hoffset="['30','30','30','20']" data-y="['top','top','top','top']" data-voffset="['315','315','385','375']"
													data-width="['580','580','355','440']" data-height="['215','215','325','160']" data-whitespace="nowrap"
													data-type="group" data-responsive_offset="on" data-frames='[{"delay":600,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
													data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
													data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
													data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
													data-paddingleft="[0,0,0,0]" style="z-index: 12; min-width: 580px; max-width: 580px; max-width: 215px; max-width: 215px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
													<!-- LAYER NR. 65 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-13" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['580','580','355','440']" data-height="['215','215','325','160']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 13;">
															@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@else  
																<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@endif  
													</div>

													<!-- LAYER NR. 66 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-19" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['580','580','355','440']" data-height="['215','215','325','160']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 14;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
													</div>

													<!-- LAYER NR. 67 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-14" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['50','50','50','50']" data-fontsize="['30','30','30','20']" data-lineheight="['35','35','35','25']"
															data-width="['360','360','315','315']" data-height="none" data-whitespace="normal"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 15; min-width: 360px; max-width: 360px; white-space: normal; font-size: 30px; line-height: 35px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }}</div>

													<!-- LAYER NR. 68 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-15" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['130','130','130','110']" data-width="none" data-height="none"
															data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[5,5,5,5]" style="z-index: 16; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(94,53,177);">{{ $item->kategori ? $item->kategori->name : "-" }}</div>

													<!-- LAYER NR. 69 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-16" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 17; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-" }}</div>

													<!-- LAYER NR. 70 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-17" data-x="['left','left','left','left']"
															data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 18; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
											</div>
											@elseif($i2b == 3)
											<!-- LAYER NR. 71 -->
											<div class="tp-caption     rev_group" id="slide-584-layer-27" data-x="['left','left','left','left']"
													data-hoffset="['615','615','390','20']" data-y="['top','top','top','top']" data-voffset="['315','315','385','540']"
													data-width="['295','295','358','440']" data-height="['215','215','160','160']" data-whitespace="nowrap"
													data-type="group" data-responsive_offset="on" data-frames='[{"delay":700,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
													data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
													data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
													data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
													data-paddingleft="[0,0,0,0]" style="z-index: 19; min-width: 295px; max-width: 295px; max-width: 215px; max-width: 215px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
													<!-- LAYER NR. 72 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-28" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['295','295','358','440']" data-height="['215','215','160','160']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 20;">
															@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@else  
																<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@endif  
													</div>

													<!-- LAYER NR. 73 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-33" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['295','295','358','440']" data-height="['215','215','160','160']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 21;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
													</div>

													<!-- LAYER NR. 74 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-29" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['50','50','50','50']" data-width="255" data-height="none" data-whitespace="normal"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 22; min-width: 255px; max-width: 255px; white-space: normal; font-size: 20px; line-height: 25px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }}</div>

													<!-- LAYER NR. 75 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-30" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['110','110','110','110']" data-width="none" data-height="none"
															data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[5,5,5,5]" style="z-index: 23; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #000000; letter-spacing: 0px;font-family:Roboto;background-color:rgb(124,255,159);">{{ $item->kategori ? $item->kategori->name : "-" }}
													</div>

													<!-- LAYER NR. 76 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-31" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 24; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-" }}</div>

													<!-- LAYER NR. 77 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-32" data-x="['left','left','left','left']"
															data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 25; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
											</div>
											@elseif($i2b == 4)
											<!-- LAYER NR. 78 -->
											<div class="tp-caption     rev_group" id="slide-584-layer-20" data-x="['left','left','left','left']"
													data-hoffset="['915','915','390','20']" data-y="['top','top','top','top']" data-voffset="['315','315','550','705']"
													data-width="['295','295','358','440']" data-height="['215','215','160','160']" data-whitespace="nowrap"
													data-type="group" data-responsive_offset="on" data-frames='[{"delay":800,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
													data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
													data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
													data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
													data-paddingleft="[0,0,0,0]" style="z-index: 26; min-width: 295px; max-width: 295px; max-width: 215px; max-width: 215px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
													<!-- LAYER NR. 79 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-21" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['295','295','358','440']" data-height="['215','215','160','160']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 27;">
															@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
																<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@else  
																<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
															@endif  
													</div>

													<!-- LAYER NR. 80 -->
													<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-584-layer-26" data-x="['left','left','left','left']"
															data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
															data-width="['295','295','358','440']" data-height="['215','215','160','160']"
															data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 28;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
													</div>

													<!-- LAYER NR. 81 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-22" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['50','50','50','50']" data-width="255" data-height="none" data-whitespace="normal"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 29; min-width: 255px; max-width: 255px; white-space: normal; font-size: 20px; line-height: 25px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>

													<!-- LAYER NR. 82 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-23" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['110','110','110','110']" data-width="none" data-height="none"
															data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[5,5,5,5]" style="z-index: 30; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(0,0,0);">{{ $item->kategori ? $item->kategori->name : "-" }}
													</div>

													<!-- LAYER NR. 83 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-24" data-x="['left','left','left','left']"
															data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 31; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-" }}</div>

													<!-- LAYER NR. 84 -->
													<div class="tp-caption   tp-resizeme" id="slide-584-layer-25" data-x="['left','left','left','left']"
															data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
															data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
															data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
															data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
															data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
															data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
															data-paddingleft="[0,0,0,0]" style="z-index: 32; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
											</div>
											@endif
									@endforeach
							</li>
							@elseif($i == 3)
							<li data-index="rs-585" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
									data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
									data-thumb="{{asset('images/transparent.png')}}" data-rotate="0"
									data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3=""
									data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9=""
									data-param10="" data-description="">
									<!-- MAIN IMAGE -->
									<img src="{{asset('images/transparent.png')}}" data-bgcolor='#e5e5e5' style='background:#e5e5e5'
											alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg"
											data-no-retina>
									<!-- LAYERS -->

									@php $i2c = 0 @endphp
									@foreach($items as $item)
									@php $i2c++ @endphp

										@if($i2c == 1)
										<!-- LAYER NR. 85 -->
										<div class="tp-caption     rev_group" id="slide-585-layer-11" data-x="['left','left','left','left']"
												data-hoffset="['30','30','30','20']" data-y="['top','top','top','top']" data-voffset="['30','30','30','20']"
												data-width="['880','880','718','440']" data-height="['500','500','350','350']" data-whitespace="nowrap"
												data-type="group" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"x:[100%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
												data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
												data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]" style="z-index: 5; min-width: 880px; max-width: 880px; max-width: 500px; max-width: 500px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
												<!-- LAYER NR. 86 -->
												<div class="tp-caption   tp-resizeme tp-videolayer" id="slide-585-layer-35" data-x="['left','left','left','left']"
														data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
														data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-videorate="1" data-videowidth="['880px','880px','718px','440px']" data-videoheight="['495px','495px','350px','350px']"
														data-videocontrols="none" data-videoloop="loop" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]"
														data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 6;">
														@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
															<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
														@else  
															<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
														@endif
												</div>

												<!-- LAYER NR. 87 -->
												<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-585-layer-10" data-x="['left','left','left','left']"
														data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
														data-width="['880','880','718','440']" data-height="['500','500','350','350']"
														data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 7;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
												</div>

												<!-- LAYER NR. 88 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-4" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['135','135','135','165']" data-width="none" data-height="none"
														data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[5,5,5,5]" style="z-index: 8; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(215,0,38);">{{ $item->kategori ? $item->kategori->name : "-"}}
												</div>

												<!-- LAYER NR. 89 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-5" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['50','50','50','50']" data-width="['640','640','640','320']" data-height="none"
														data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 9; min-width: 640px; max-width: 640px; white-space: normal; font-size: 30px; line-height: 35px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>

												<!-- LAYER NR. 90 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-6" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 10; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-"}} </div>

												<!-- LAYER NR. 91 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-7" data-x="['left','left','left','left']"
														data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 11; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }} </div>
										</div>
										@elseif($i2c == 2)
										<!-- LAYER NR. 92 -->
										<div class="tp-caption     rev_group" id="slide-585-layer-27" data-x="['left','left','left','left']"
												data-hoffset="['915','915','30','20']" data-y="['top','top','top','top']" data-voffset="['30','30','385','375']"
												data-width="['295','295','718','440']" data-height="['250','250','160','245']" data-whitespace="nowrap"
												data-type="group" data-responsive_offset="on" data-frames='[{"delay":700,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
												data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
												data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]" style="z-index: 12; min-width: 295px; max-width: 295px; max-width: 250px; max-width: 250px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
												<!-- LAYER NR. 93 -->
												<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-585-layer-28" data-x="['left','left','left','left']"
														data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
														data-width="['295','295','718','440']" data-height="['250','250','160','245']"
														data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 13;">
														<!-- image -->
														@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
															<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
														@else  
															<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
														@endif 
												</div>

												<!-- LAYER NR. 94 -->
												<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-585-layer-33" data-x="['left','left','left','left']"
														data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
														data-width="['295','295','718','440']" data-height="['250','250','160','245']"
														data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 14;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
												</div>

												<!-- LAYER NR. 95 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-29" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['50','50','50','50']" data-width="255" data-height="none" data-whitespace="normal"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 15; min-width: 255px; max-width: 255px; white-space: normal; font-size: 20px; line-height: 25px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }}</div>

												<!-- LAYER NR. 96 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-30" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['110','110','110','110']" data-width="none" data-height="none"
														data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[5,5,5,5]" style="z-index: 16; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(0,109,210);">{{ $item->kategori ? $item->kategori->name : "-"}} 
												</div>

												<!-- LAYER NR. 97 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-31" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 17; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-"}} </div>

												<!-- LAYER NR. 98 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-32" data-x="['left','left','left','left']"
														data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 18; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
										</div>
										@elseif($i2c == 3)
										<!-- LAYER NR. 99 -->
										<div class="tp-caption     rev_group" id="slide-585-layer-20" data-x="['left','left','left','left']"
												data-hoffset="['915','915','30','20']" data-y="['top','top','top','top']" data-voffset="['285','285','550','625']"
												data-width="['295','295','718','440']" data-height="['245','245','160','250']" data-whitespace="nowrap"
												data-type="group" data-responsive_offset="on" data-frames='[{"delay":800,"speed":1500,"frame":"0","from":"x:[100%];sX:1;sY:1;opacity:1;fbr:100;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"opacity:0;fbr:100%;","ease":"Power4.easeOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:125%;","style":"c:rgb(255,255,255);"}]'
												data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
												data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]" style="z-index: 19; min-width: 295px; max-width: 295px; max-width: 245px; max-width: 245px; white-space: nowrap; font-size: 20px; line-height: 22px; font-weight: 400; color: #ffffff; letter-spacing: 0px;cursor:pointer;">
												<!-- LAYER NR. 100 -->
												<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-585-layer-21" data-x="['left','left','left','left']"
														data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
														data-width="['295','295','718','440']" data-height="['245','245','160','250']"
														data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 20;">
														<!-- image -->
														@if(!empty($item->gambar) && is_file($imagepath.$item->gambar.".jpg"))
															<div class="tp-element-background" style=" background: url({{ asset($imagepath . $item->gambar . '.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
														@else  
															<div class="tp-element-background" style=" background: url({{ asset('images/image-articlen.jpg') }}) no-repeat center center; background-size: cover; opacity: 1;"></div>
														@endif
												</div>

												<!-- LAYER NR. 101 -->
												<div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-585-layer-26" data-x="['left','left','left','left']"
														data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']"
														data-width="['295','295','718','440']" data-height="['245','245','160','250']"
														data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 21;background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1.00) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);">
												</div>

												<!-- LAYER NR. 102 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-22" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['50','50','50','50']" data-width="255" data-height="none" data-whitespace="normal"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 22; min-width: 255px; max-width: 255px; white-space: normal; font-size: 20px; line-height: 25px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ str_limit(preg_replace('/(<.*?>)|(&.*?;)/', '', $item->name),50) }} </div>

												<!-- LAYER NR. 103 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-23" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['110','110','110','110']" data-width="none" data-height="none"
														data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[5,5,5,5]" style="z-index: 23; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;background-color:rgb(94,53,177);">{{ $item->kategori ? $item->kategori->name : "-"}} </div>

												<!-- LAYER NR. 104 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-24" data-x="['left','left','left','left']"
														data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 24; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->penulis ? $item->penulis->name : "-"}}</div>

												<!-- LAYER NR. 105 -->
												<div class="tp-caption   tp-resizeme" id="slide-585-layer-25" data-x="['left','left','left','left']"
														data-hoffset="['150','150','150','150']" data-y="['bottom','bottom','bottom','bottom']"
														data-voffset="['20','20','20','20']" data-width="none" data-height="none" data-whitespace="nowrap"
														data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
														data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]"
														data-marginleft="[0,0,0,0]" data-textAlign="['inherit','inherit','inherit','inherit']"
														data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
														data-paddingleft="[0,0,0,0]" style="z-index: 25; white-space: nowrap; font-size: 13px; line-height: 20px; font-weight: 400; color: #ffffff; letter-spacing: 0px;font-family:Roboto;">{{ $item->created_at->diffForHumans() }}</div>
										</div>
										@endif
									@endforeach
							</li>
							@endif

							@endforeach
					</ul>
					<div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
			</div>
	</div><!-- END REVOLUTION SLIDER -->

</section>