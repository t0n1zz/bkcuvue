<template>
  <div class="row">
		
    <!-- artikel -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_artikel']" @click.prevent="goTo(artikelWidgetRoute)">
      <count-widget :title="'Artikel'" :color="'bg-info-400'" :icon="'icon-newspaper'"></count-widget>
    </div>

    <!-- kategori artikel -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_artikel_kategori']" @click.prevent="goTo(artikelKategoriWidgetRoute)">
      <count-widget :title="'Kategori Artikel'" :color="'bg-teal-400'" :icon="'icon-grid6'"></count-widget>
    </div>

    <!-- penulis artikel -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_artikel_penulis']" @click.prevent="goTo(artikelPenulisWidgetRoute)">
      <count-widget :title="'Penulis Artikel'" :color="'bg-orange-400'" :icon="'icon-pencil6'"></count-widget>
    </div>

    <!-- pengumuman -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_pengumuman']" @click.prevent="goTo(pengumumanWidgetRoute)">
      <count-widget :title="'Pengumuman'" :color="'bg-slate-400'" :icon="'icon-megaphone'"></count-widget>
    </div>

    <!-- diklat bkcu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_diklat_bkcu']" @click.prevent="goTo(diklatBKCUWidgetRoute)">
      <count-widget :title="'Diklat BKCU'" :color="'bg-blue-400'" :icon="'icon-graduation2'"></count-widget>
    </div>

    <!-- tempat -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_tempat'] && currentUser.id_cu == '0'" @click.prevent="goTo(tempatWidgetRoute)">
      <count-widget :title="'Tempat'" :color="'bg-purple-400'" :icon="'icon-location4'"></count-widget>
    </div>

		<!-- anggota cu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_anggota_cu']" @click.prevent="goTo(anggotaCuWidgetRoute)">
      <count-widget :title="'Anggota CU'" :color="'bg-success-400'" :icon="'icon-man-woman'"></count-widget>
    </div>

		<!-- anggota cu saldo -->
    <!-- <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_saldo']" @click.prevent="goTo(saldoWidgetRoute)">
      <count-widget :title="'Saldo Anggota CU'" :color="'bg-blue-400'" :icon="'icon-wallet'"></count-widget>
    </div> -->

		<!-- jalinan klaim -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_jalinan_klaim']" @click.prevent="goTo(jalinanKlaimWidgetRoute)">
      <count-widget :title="'Klaim JALINAN'" :color="'bg-warning-400'" :icon="'icon-accessibility2'"></count-widget>
    </div>

    <!-- cu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_cu']" @click.prevent="goTo(cuWidgetRoute)">
      <count-widget :title="'CU'" :color="'bg-green-400'" :icon="'icon-office'"></count-widget>
    </div>

    <!-- tp -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_tp']" @click.prevent="goTo(tpWidgetRoute)">
      <count-widget :title="'TP/KP'" :color="'bg-brown-400'" :icon="'icon-home9'"></count-widget>
    </div>

    <!-- produkCu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_produk_cu']" @click.prevent="goTo(produkCuWidgetRoute)">
      <count-widget :title="'Produk & Pelayanan'" :color="'bg-warning-400'" :icon="'icon-list3'"></count-widget>
    </div>

    <!-- aktivis -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_aktivis']" @click.prevent="goTo(aktivisWidgetRoute)">
      <count-widget :title="'Aktivis'" :color="'bg-indigo-400'" :icon="'icon-user-tie'"></count-widget>
    </div>

    <!-- mitra perseorangan -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_mitra_orang']" @click.prevent="goTo(mitraPerseoranganWidgetRoute)">
      <count-widget :title="'Mitra Perseorangan'" :color="'bg-pink-400'" :icon="'icon-briefcase'"></count-widget>
    </div>

    <!-- mitra lembaga -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_mitra_lembaga']" @click.prevent="goTo(mitraLembagaWidgetRoute)">
      <count-widget :title="'Lembaga Mitra'" :color="'bg-violet-400'" :icon="'icon-briefcase'"></count-widget>
    </div>

    <!-- laporan -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_laporan_cu']" @click.prevent="goTo(laporanCUWidgetRoute)">
      <count-widget :title="'Laporan Statistik CU'" :color="'bg-success-400'" :icon="'icon-stats-bars2'"></count-widget>
    </div>

    <!-- laporan -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_laporan_cu']" @click.prevent="goTo(laporanGerakanWidgetRoute)">
      <count-widget :title="'Laporan Statistik Gerakan'" :color="'bg-grey-400'" :icon="'icon-stats-bars'"></count-widget>
    </div>

    <!-- user -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_user']" @click.prevent="goTo(userWidgetRoute)">
      <count-widget :title="'User'" :color="'bg-primary-400'" :icon="'icon-users'"></count-widget>
    </div>

  </div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
  import countWidget from '../../components/countWidget';
  
	export default{
		components: {
			countWidget
		},
		data(){
			return{
				artikelWidgetRoute: {},
				artikelKategoriWidgetRoute: {},
				artikelPenulisWidgetRoute: {},
				pengumumanWidgetRoute: {},
				diklatBKCUWidgetRoute: {},
				anggotaCuWidgetRoute: {},
				saldoWidgetRoute: {},
				jalinanKlaimWidgetRoute: {},
				cuWidgetRoute: {},
				tpWidgetRoute: {},
				produkCuWidgetRoute: {},
				aktivisWidgetRoute: {},
				produkCuWidgetRoute: {},
				mitraPerseoranganWidgetRoute: {},
				mitraLembagaWidgetRoute: {},
				userWidgetRoute: {},
				laporanCUWidgetRoute: {},
				laporanGerakanWidgetRoute: {},
			}
		},
		created(){
			this.countWidgetRoute();
		},
		methods:{
			countWidgetRoute(){
				this.artikelWidgetRoute = { name: 'artikelCu', params:{cu: this.currentUser.id_cu} };
				this.artikelPenulisWidgetRoute = { name: 'artikelPenulisCu', params:{cu: this.currentUser.id_cu} };
				this.artikelKategoriWidgetRoute = { name: 'artikelKategoriCu', params:{cu: this.currentUser.id_cu} };
				this.pengumumanWidgetRoute = { name: 'pengumumanCu', params:{cu: this.currentUser.id_cu} };
				this.diklatBKCUWidgetRoute = { name: 'diklatBKCU', params:{periode: this.momentYear()} };
				this.saldoWidgetRoute = { name: 'saldo' };
				this.aktivisWidgetRoute = { name: 'aktivisCu', params:{cu: this.currentUser.id_cu, tingkat:'semua'} };
				this.laporanGerakanWidgetRoute = { name: 'laporanGerakan' };
				this.mitraPerseoranganWidgetRoute = { name: 'mitraOrang' };
				this.mitraLembagaWidgetRoute = { name: 'mitraLembaga' };
				this.userWidgetRoute = { name: 'userCu', params:{cu: this.currentUser.id_cu} };

				if(this.currentUser.id_cu != 0){
					this.anggotaCuWidgetRoute = { name: 'anggotaCuCu', params:{cu: this.currentUser.id_cu, tp: 'semua'} };
					this.jalinanKlaimWidgetRoute = { name: 'jalinanKlaimCu', params:{cu: this.currentUser.id_cu, tp:'semua'} };
					this.cuWidgetRoute = { name: 'cuProfile', params:{id: this.currentUser.id_cu}   };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu: this.currentUser.id_cu} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu: this.currentUser.id_cu} };
					this.laporanCUWidgetRoute = { name: 'laporanCuCu', params:{cu: this.currentUser.id_cu, tp:'konsolidasi'} };
				}else{
					this.tempatWidgetRoute = { name: 'tempat' };
					this.anggotaCuWidgetRoute = { name: 'anggotaCuCu', params:{cu: 'semua', tp: 'semua'} };
					this.jalinanKlaimWidgetRoute = { name: 'jalinanKlaimCu', params:{cu: 'semua', tp: 'semua'} };
					this.cuWidgetRoute = { name: 'cu' };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu:'semua'} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu:'semua'} };
					this.laporanCUWidgetRoute = { name: 'laporanCu' };
				}
			},
			goTo(route){
				this.$router.push(route);
			},
			momentYear(){
				return moment().year();
			}	
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			})
		}
	}
</script>