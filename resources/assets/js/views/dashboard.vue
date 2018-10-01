<template><div> 
<!-- Page header -->
<div class="page-header">
	<div class="page-header-content">
		<div class="page-title">
			<h4><i class="icon-home4 position-left"></i> <span class="text-semibold">Dashboard</span>
				<small class="display-block">Selamat datang!</small>
			</h4>
		</div>
	</div>
</div>
<!-- /page header -->
<!-- page container -->
<div class="page-container">
	<div class="page-content">
		<div class="content-wrapper">

			<!-- laporan gerakan + count widget -->
			<div class="row" v-if="profile.can && profile.can['index_laporan_cu']">

				<!-- laporan gerakan -->
				<div class="col-lg-9">
					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">

							<!-- grafik cu -->
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabGrafikName == 'grafikCu'}" @click.prevent="changeGrafikTab('grafikCu')"><i class="icon-stats-dots mr-2"></i> Grafik Perkembangan CU</a>
							</li>

							<!-- grafik pearls -->
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabGrafikName == 'grafikPearls'}" @click.prevent="changeGrafikTab('grafikPearls')"><i class="icon-stats-dots mr-2"></i> Grafik Perkembangan P.E.A.R.L.S. CU</a>
							</li>

							<!-- grafik perkembangan -->
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabGrafikName == 'grafikGerakan'}" @click.prevent="changeGrafikTab('grafikGerakan')"><i class="icon-stats-dots mr-2"></i> Grafik Perkembangan Gerakan</a>
							</li>

						</ul>
					</div>

					<!-- grafik cu -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabGrafikName == 'grafikCu'">
							<infografis-cu
								:title="'Laporan Perkembangan CU'"
								:kelas="'laporanCu'"
								:columnData="columnData"></infografis-cu>
						</div>
					</transition>

					<!-- grafik pearls -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabGrafikName == 'grafikPearls'" v-if="isGrafikPearls">
							<infografis-pearls
								:title="'Laporan Perkembangan P.E.A.R.L.S. CU'"
								:kelas="'laporanCu'"
								:columnData="columnDataPearls"></infografis-pearls>
						</div>
					</transition>

					<!-- grafik gerakan -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabGrafikName == 'grafikGerakan'" v-if="isGrafikGerakan">
							<infografis-gerakan
								:title="'Laporan Perkembangan Gerakan'"
								:kelas="'laporanCu'"
								:columnData="columnData"></infografis-gerakan>
						</div>
					</transition>

					
				</div>

				<!-- count widget -->
				<div class="col-lg-3">

					<!-- cu -->
					<div :class="{'pointer': profile.id_cu == 0}" @click.prevent="goTo(cuWidgetRoute)">
						<count-widget :title="'Jumlah CU dalam gerakan'" :color="'bg-green-400'" :icon="'icon-office'" :count="cuCount"  v-if="profile.can && profile.can['index_cu']"></count-widget>
					</div>
					
					<!-- tp -->
					<div class="pointer" @click.prevent="goTo(tpWidgetRoute)">
						<count-widget class="pointer" :title="'Jumlah TP'" :color="'bg-brown-400'" :icon="'icon-home9'" :count="tpCount"  v-if="profile.can && profile.can['index_tp']"></count-widget>
					</div>
					
					<!-- produkcu -->
					<div class="pointer" @click.prevent="goTo(produkCuWidgetRoute)">
						<count-widget class="pointer" :title="'Jumlah Produk CU'" :color="'bg-warning-400'" :icon="'icon-list3'" :count="produkCuCount" v-if="profile.can && profile.can['index_produk_cu']"></count-widget>
					</div>
					
					<!-- pengelola -->
					<div class="pointer" @click.prevent="goTo(pengelolaWidgetRoute)" >
						<count-widget :title="'Jumlah Pengelola'" :color="'bg-indigo-400'" :icon="'icon-user-tie'" :count="pengelolaCount" v-if="profile.can && profile.can['index_pengelola']"></count-widget>
					</div>

					<!-- pengelola -->
					<div class="pointer" @click.prevent="goTo(userWidgetRoute)" >
						<count-widget :title="'Jumlah User'" :color="'bg-danger-400'" :icon="'icon-user'" :count="userCount" v-if="profile.can && profile.can['index_user']"></count-widget>
					</div>
					
				</div>

			</div>

			<!-- count widget -->
			<div class="row" v-else>

				<!-- cu -->
				<div class="col-lg-3 col-md-3" v-if="profile.can && profile.can['index_cu']" @click.prevent="goTo(cuWidgetRoute)" :class="{'pointer': profile.id_cu == 0}">
					<count-widget :title="'Jumlah CU dalam Gerakan'" :color="'bg-green-400'" :icon="'icon-office'" :count="cuCount"  ></count-widget>
				</div>

				<!-- tp -->
				<div class="col-lg-3 col-md-3 pointer" v-if="profile.can && profile.can['index_tp']" @click.prevent="goTo(tpWidgetRoute)">
					<count-widget :title="'Jumlah TP'" :color="'bg-brown-400'" :icon="'icon-home9'" :count="tpCount" ></count-widget>
				</div>

				<!-- produkCu -->
				<div class="col-lg-3 col-md-3 pointer" v-if="profile.can && profile.can['index_produk_cu']" @click.prevent="goTo(produkCuWidgetRoute)">
					<count-widget :title="'Jumlah Produk CU'" :color="'bg-warning-400'" :icon="'icon-list3'" :count="produkCuCount"></count-widget>
				</div>

				<!-- pengelola -->
				<div class="col-lg-3 col-md-3 pointer" v-if="profile.can && profile.can['index_pengelola']" @click.prevent="goTo(pengelolaWidgetRoute)">
					<count-widget :title="'Jumlah Pengelola'" :color="'bg-indigo-400'" :icon="'icon-user-tie'" :count="pengelolaCount"></count-widget>
				</div>

				<!-- user -->
				<div class="col-lg-3 col-md-3 pointer" v-if="profile.can && profile.can['index_user']" @click.prevent="goTo(userWidgetRoute)">
					<count-widget :title="'Jumlah User'" :color="'bg-danger-400'" :icon="'icon-user'" :count="userCount"></count-widget>
				</div>

			</div>

		</div>
	</div>
</div>
<!-- page container -->
</div></template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import countWidget from './dashboard/countWidget.vue';
	import infografisCu from "./laporanCu/infografis.vue";
	import infografisPearls from "./laporanCu/infografisPearls.vue";
	import infografisGerakan from "./laporanGerakan/infografis.vue";

	export default{
		components: {
			countWidget,
			infografisCu,
			infografisPearls,
			infografisGerakan
		},
		watch: {
			profileStat(value){
				if(value == 'success'){
					this.countWidget();
					this.countWidgetRoute();
				}
			}
		},
		data(){
			return{
				tabGrafikName: 'grafikCu',
				isGrafikPearls: false,
				isGrafikGerakan: false,
				cuWidgetRoute: {},
				tpWidgetRoute: {},
				produkCuWidgetRoute: {},
				pengelolaWidgetRoute: {},
				produkCuWidgetRoute: {},
				userWidgetRoute: {}
			}
		},
		created(){

		},
		methods:{
			changeGrafikTab(value) {
				this.tabGrafikName = value;
				if (value == 'grafikGerakan' && !this.isGrafikGerakan) {
					this.isGrafikGerakan = true
				}
				if (value == 'grafikPearls' && !this.isGrafikPearls) {
					this.isGrafikPearls = true
				}
			},
			countWidget(){
				if(this.profile.can && this.profile.can['index_cu']){
					this.$store.dispatch('cu/count');
				}

				if(this.profile.can && this.profile.can['index_tp']){
					this.$store.dispatch('tp/count');
				}
					
				if(this.profile.can && this.profile.can['index_pengelola']){
					this.$store.dispatch('pengelola/count');
				}

				if(this.profile.can && this.profile.can['index_produk_cu']){
					this.$store.dispatch('produkCu/count');
				}

				if(this.profile.can && this.profile.can['index_user']){
					this.$store.dispatch('user/count');
				}
			},
			countWidgetRoute(){
				if(this.profile.id_cu != 0){
					this.tpWidgetRoute = { name: 'tpCu', params:{cu: this.profile.id_cu} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu: this.profile.id_cu} };
					this.pengelolaWidgetRoute = { name: 'pengelolaCu', params:{cu: this.profile.id_cu} };
					this.userWidgetRoute = { name: 'userCu', params:{cu: this.profile.id_cu} };
				}else{
					this.cuWidgetRoute = { name: 'cu' };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu:'semua'} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu:'semua'} };
					this.pengelolaWidgetRoute = { name: 'pengelolaCu', params:{cu:'semua'} };
					this.userWidgetRoute = { name: 'userCu', params:{cu:'semua'} };
				}
			},
			goTo(route){
				this.$router.push(route);
				console.log(route);
    	}	
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('artikel',{
				artikelCount: 'count',
				artikelCountStat: 'countStat'
			}),
			...mapGetters('cu',{
				cuCount: 'count',
				cuCountStat: 'countStat'
			}),
			...mapGetters('tp',{
				tpCount: 'count',
				tpCountStat: 'countStat'
			}),
			...mapGetters('pengelola',{
				pengelolaCount: 'count',
				pengelolaCountStat: 'countStat'
			}),
			...mapGetters('produkCu',{
				produkCuCount: 'count',
				produkCuCountStat: 'countStat'
			}),
			...mapGetters('laporanCu', {
				columnData: 'columnData',
				columnDataPearls: 'columnDataPearls',
			}),
			...mapGetters('user',{
				userCount: 'count',
				userCountStat: 'countStat'
			}),
		}
	}
</script>

<style scoped>
.pointer{
	cursor: pointer;
}
</style>
