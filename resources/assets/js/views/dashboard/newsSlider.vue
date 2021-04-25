<template>
  <div>
		<hooper class="mb-3" style="width:100%;min-height:20em;" :progress="true" :autoPlay="true" :playSpeed="6000" :infiniteScroll="true">
			<slide v-for="(item, index) in sliderItem" :key="index" class="slideStyle" :style="item.style">

				<!-- welcome -->
				<div v-if="item.name == 'welcome'">
					<h1>{{ item.title }}</h1>
					<span v-html="item.content"></span>
					<br/>
					<a :href="item.buttonUrl" class="btn btn-danger mt-1" target="_blank" v-if="item.isButton" v-html="item.buttonTitle">
					</a>
				</div>

				<!-- birthday -->
				<div v-else-if="item.name == 'birthday'">
					<h1>{{ item.title }}</h1>
					<span class="badge bg-blue-400 align-self-center ml-2 mb-1" v-for="(item2, index2) in item.cu" :key="index2">
						<h6 class="mb-0">{{ 'CU ' + item2.name + ' Ke- ' + item2.usia }}</h6>
					</span>
					<br/><br/>
					<h4 v-html="item.content" class="d-none d-md-block"></h4>
				</div>

				<div v-else-if="item.name == 'news'">
					<h1>{{ item.title }}</h1>
					<span v-html="item.content"></span>
				</div>

			</slide>

			<hooper-navigation slot="hooper-addons">
				<i slot="hooper-prev"><i style="color: rgb(255, 251, 251);" class="icon-chevron-left"></i></i>
				<i slot="hooper-next"><i style="color: rgb(255, 251, 251);" class="icon-chevron-right"></i></i>
			</hooper-navigation>
			<hooper-pagination slot="hooper-addons"></hooper-pagination>
		</hooper>  
  </div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
	import 'hooper/dist/hooper.css';
	import CUAPI from '../../api/cu';
	import ARTIKELSIMOAPI from '../../api/artikelSimo';
  
	export default{
		components: {
			Hooper,
			Slide,
			HooperNavigation,
			HooperPagination,
		},
		data(){
			return{
				birthdayData: [],
				birthdayDataStat: '',
				newsData: [],
				newsDataStat: '',
				slideData: [],
				sliderItem: [
					{
						name: 'welcome',
						title: 'Selamat Datang Di SIMO',
						content: '<h5 class="d-none d-md-block">Sistem Informasi Manajemen Organisasi yang menyimpan dan mengolah data CU dalam gerakan PUSKOPCUINA.</h5> Baru pertama kali masuk ke SIMO? <br/>agar tidak bingung silahkan membaca panduan terlebih dahulu',
						isButton: true,
						buttonUrl: 'https://puskopcuina.org/panduan',
						buttonTitle: '<i class="icon-book mr-2"></i>Panduan',
						style: {
							'background-image': 'url("/images/welcomeSIMO.png")',
							'background-position': 'center',
							'background-repeat': 'no-repeat',
							'background-size': 'cover',
							'color': '#FFFFFF',
						}
					},
				],
			}
		},
		created(){
			this.getBirthday();
		},
		watch: {
			birthdayDataStat(value){
				if(value == 'success'){
					if(this.birthdayData.length > 0){
						let item = {
							name: 'birthday',
							title: 'Selamat Ulang Tahun Kepada',
							content: 'Semoga semakin maju berkembang dan bertumbuh bersama anggota',
							cu: [],
							style: {
								'background-image': 'url("/images/birthday.jpg")',
								'background-position': 'center',
								'background-repeat': 'no-repeat',
								'background-size': 'cover',
								'color': '#FFFFFF',
							}
						};
						item.cu = this.birthdayData;
						this.sliderItem.push(item);
					}
					this.getNews();
				}
			},
			newsDataStat(value){
				if(value == 'success'){
					var valData;
					for(valData of this.newsData){
						this.addNewsSlide(valData.name,valData.ringkasan,valData.gambar);
					}
				}
			}
		},
		methods:{
			getBirthday(){
				this.birthdayDataStat = 'loading';

				CUAPI.getBirthday()
        .then((response) => {
					this.birthdayData = response.data.model;
          this.birthdayDataStat = 'success';
        })
        .catch( error => {
					this.birthdayData = error.response;
          this.birthdayDataStat = 'fail';
        });
			},
			getNews(){
				this.newsDataStat = 'loading';

				ARTIKELSIMOAPI.get()
        .then((response) => {
					this.newsData = response.data.model;
          this.newsDataStat = 'success';
        })
        .catch( error => {
					this.newsData = error.response;
          this.newsDataStat = 'fail';
        });
			},
			addNewsSlide(title,content,image){
				let item = {
					name: 'news',
					title: title,
					content: content,
					style: {
						'background-image': 'url("/images/artikel_simo/'+ image +'.jpg")',
						'background-position': 'center',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
					}
				};
				this.sliderItem.push(item);
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			})
		}
	}
</script>

<style>
	.slideStyle {
		padding-top: 3em;
		padding-left: 2em;
		padding-right: 2em;
		text-align: center;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}
</style>