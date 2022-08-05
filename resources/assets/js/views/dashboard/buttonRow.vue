<template>
  <div class="row">

		<!-- kegiatan berjalan -->
		<div class="col-lg-6 col-md-6 col-sm-12 col-12 cursor-pointer" @click.prevent="goTo(kegiatanBKCUJalanWidgetRoute)" v-if="countJalanStat == 'success'">
      <count-widget 
				:count="'Terdapat ' + countJalan + ' Kegiatan Berjalan'" 
				:title="'Silahkan menekan tombol ini untuk melihat kegiatan yang sedang berlangsung'" 
				:color="'bg-warning'" 
				:icon="'icon-feed'"></count-widget>
    </div>

		<!-- kegiatan diikuti -->
		<div class="col-lg-6 col-md-6 col-sm-12 col-12 cursor-pointer" @click.prevent="goTo(kegiatanBKCUDiikutiWidgetRoute)" v-if="countDiikutiStat == 'success'">
      <count-widget 
				:count="'Terdapat ' + countDiikuti + ' Kegiatan Diikuti'" 
				:title="'Silahkan menekan tombol ini untuk melihat kegiatan yang telah diikuti'" 
				:color="'bg-info'" 
				:icon="'icon-station'"></count-widget>
    </div>

		<div class="col-12"><hr class="mt-0"/></div>

		<!-- profile -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser" @click.prevent="goTo(profileWidgetRoute)">
      <count-widget :title="'Profile'" :color="'bg-primary'" :icon="'icon-user'"></count-widget>
    </div>
		
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
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" @click.prevent="goTo(diklatBKCUWidgetRoute)">
      <count-widget :title="'Diklat PUSKOPCUINA'" :color="'bg-blue-400'" :icon="'icon-graduation2'"></count-widget>
    </div>

    <!-- pertemuan bkcu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" @click.prevent="goTo(pertemuanBKCUWidgetRoute)">
      <count-widget :title="'Pertemuan PUSKOPCUINA'" :color="'bg-pink-400'" :icon="'icon-ungroup'"></count-widget>
    </div>

    <!-- tempat -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_tempat'] && currentUser.id_cu == '0'" @click.prevent="goTo(tempatWidgetRoute)">
      <count-widget :title="'Tempat'" :color="'bg-purple-400'" :icon="'icon-location4'"></count-widget>
    </div>

		<!-- voting -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_voting']" @click.prevent="goTo(votingWidgetRoute)">
      <count-widget :title="'Voting'" :color="'bg-warning-400'" :icon="'icon-point-up'"></count-widget>
    </div>

		<!-- anggota cu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_anggota_cu']" @click.prevent="goTo(anggotaCuWidgetRoute)">
      <count-widget :title="'Anggota CU'" :color="'bg-success-400'" :icon="'icon-man-woman'"></count-widget>
    </div>

		<!-- anggota cu saldo -->
    <!-- <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_saldo']" @click.prevent="goTo(saldoWidgetRoute)">
      <count-widget :title="'Saldo Anggota CU'" :color="'bg-blue-400'" :icon="'icon-wallet'"></count-widget>
    </div> -->

		<!-- jalinan bantuan solidaritas -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_jalinan_klaim']" @click.prevent="goTo(jalinanKlaimWidgetRoute)">
      <count-widget :title="'Bantuan Solidaritas Jalinan'" :color="'bg-warning-400'" :icon="'icon-accessibility2'"></count-widget>
    </div>

    <!-- cu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_cu']" @click.prevent="goTo(cuWidgetRoute)">
      <count-widget :title="'Profil CU'" :color="'bg-green-400'" :icon="'icon-office'"></count-widget>
    </div>

    <!-- tp -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_tp']" @click.prevent="goTo(tpWidgetRoute)">
      <count-widget :title="'Profil TP/KP'" :color="'bg-brown-400'" :icon="'icon-home9'"></count-widget>
    </div>

    <!-- produkCu -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_produk_cu']" @click.prevent="goTo(produkCuWidgetRoute)">
      <count-widget :title="'Produk & Pelayanan'" :color="'bg-warning-400'" :icon="'icon-list3'"></count-widget>
    </div>

    <!-- aktivis -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_aktivis']" @click.prevent="goTo(aktivisWidgetRoute)">
      <count-widget :title="'Aktivis'" :color="'bg-indigo-400'" :icon="'icon-user-tie'"></count-widget>
    </div>

		<!-- pemilihan -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_pemilihan']" @click.prevent="goTo(pemilihanWidgetRoute)">
      <count-widget :title="'Pemilihan'" :color="'bg-warning-400'" :icon="'icon-quill4'"></count-widget>
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

		<!-- surat keluar -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" @click.prevent="goTo(suratKeluarWidgetRoute)" v-if="currentUser && currentUser.can['index_surat']">
      <count-widget :title="'Surat Keluar'" :color="'bg-warning-400'" :icon="'icon-envelop2'"></count-widget>
    </div>

		<!-- surat masuk -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" @click.prevent="goTo(suratMasukWidgetRoute)" v-if="currentUser && currentUser.can['index_surat']">
      <count-widget :title="'Surat Masuk'" :color="'bg-green-400'" :icon="'icon-envelop2'"></count-widget>
    </div>

		<!-- dokumen PUSKOPCUINA -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" @click.prevent="goTo(dokumenGerakanPublikWidgetRoute)">
      <count-widget :title="'Dokumen GERAKAN & PUBLIK'" :color="'bg-violet-400'" :icon="'icon-books'"></count-widget>
    </div>

		<!-- dokumen -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" @click.prevent="goTo(dokumenWidgetRoute)">
      <count-widget :title="'Dokumen'" :color="'bg-info-400'" :icon="'icon-books'"></count-widget>
    </div>

		<!-- aset tetap -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_aset_tetap']" @click.prevent="goTo(asetTetapWidgetRoute)">
      <count-widget :title="'Aset Tetap'" :color="'bg-indigo-400'" :icon="'icon-bag'"></count-widget>
    </div>

		<!-- assesment access -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_assesment_access']" @click.prevent="goTo(assesmentAccessWidgetRoute)">
      <count-widget :title="'Self Assesment Access'" :color="'bg-warning-400'" :icon="'icon-reading'"></count-widget>
    </div>

		<!-- monitoring -->
    <div class="col-lg-2 col-md-3 col-sm-6 col-6 cursor-pointer" v-if="currentUser.can && currentUser.can['index_monitoring']" @click.prevent="goTo(monitoringWidgetRoute)">
      <count-widget :title="'Monitoring'" :color="'bg-green-400'" :icon="'icon-collaboration'"></count-widget>
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
				kegiatanBKCUJalanWidgetRoute: {},
				kegiatanBKCUDiikutiWidgetRoute: {},
				profileWidgetRoute: {},
				artikelWidgetRoute: {},
				artikelKategoriWidgetRoute: {},
				artikelPenulisWidgetRoute: {},
				pengumumanWidgetRoute: {},
				diklatBKCUWidgetRoute: {},
				pertemuanBKCUWidgetRoute: {},
				anggotaCuWidgetRoute: {},
				saldoWidgetRoute: {},
				jalinanKlaimWidgetRoute: {},
				cuWidgetRoute: {},
				tpWidgetRoute: {},
				produkCuWidgetRoute: {},
				aktivisWidgetRoute: {},
				pemilihanWidgetRoute: {},
				votingWidgetRoute: {},
				produkCuWidgetRoute: {},
				mitraPerseoranganWidgetRoute: {},
				mitraLembagaWidgetRoute: {},
				userWidgetRoute: {},
				laporanCUWidgetRoute: {},
				laporanGerakanWidgetRoute: {},
				assesmentAccessWidgetRoute: {},
				monitoringAccessWidgetRoute: {},
				dokumenGerakanPublikWidgetRoute: {},
				dokumenWidgetRoute: {},
				suratKeluarWidgetRoute: {},
				suratMasukWidgetRoute: {},
				asetTetapWidgetRoute: {},
			}
		},
		created(){
			this.countWidgetRoute();
			this.fetchKegiatan();
		},
		methods:{
			countWidgetRoute(){
				this.profileWidgetRoute = { name: 'profile', params:{id: this.currentUser.id} };
				this.artikelWidgetRoute = { name: 'artikelCu', params:{cu: this.currentUser.id_cu} };
				this.artikelPenulisWidgetRoute = { name: 'artikelPenulisCu', params:{cu: this.currentUser.id_cu} };
				this.artikelKategoriWidgetRoute = { name: 'artikelKategoriCu', params:{cu: this.currentUser.id_cu} };
				this.pengumumanWidgetRoute = { name: 'pengumumanCu', params:{cu: this.currentUser.id_cu} };
				this.diklatBKCUWidgetRoute = { name: 'kegiatanBKCU', params:{tipe: 'diklat_bkcu', periode: this.momentYear()} };
				this.pertemuanBKCUWidgetRoute = { name: 'kegiatanBKCU', params:{tipe: 'pertemuan_bkcu', periode: this.momentYear()} };
				this.saldoWidgetRoute = { name: 'saldo' };
				this.aktivisWidgetRoute = { name: 'aktivisCu', params:{cu: this.currentUser.id_cu, tingkat:'semua'} };
				this.laporanGerakanWidgetRoute = { name: 'laporanGerakan' };
				this.mitraPerseoranganWidgetRoute = { name: 'mitraOrang' };
				this.mitraLembagaWidgetRoute = { name: 'mitraLembaga' };
				this.userWidgetRoute = { name: 'userCu', params:{cu: this.currentUser.id_cu} };
				this.kegiatanBKCUJalanWidgetRoute = { name: 'kegiatanBKCUJalan' };
				this.kegiatanBKCUDiikutiWidgetRoute = { name: 'kegiatanBKCUDiikuti' };
				this.dokumenGerakanPublikWidgetRoute = { name: 'dokumenGerakanPublik', params:{cu: 'semua'} };
				this.suratKeluarWidgetRoute = { name: 'suratCu', params:{cu: this.currentUser.id_cu, tipe: 'semua', periode: this.momentYear() } };
				this.suratMasukWidgetRoute = { name: 'suratMasukCu', params:{cu: this.currentUser.id_cu, periode: this.momentYear() } };

				if(this.currentUser.id_cu != 0){
					this.anggotaCuWidgetRoute = { name: 'anggotaCuCu', params:{cu: this.currentUser.id_cu, tp: 'semua'} };
					this.jalinanKlaimWidgetRoute = { name: 'jalinanKlaimCu', params:{cu: this.currentUser.id_cu, tp:'semua'} };
					this.cuWidgetRoute = { name: 'cuProfile', params:{id: this.currentUser.id_cu}   };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu: this.currentUser.id_cu} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu: this.currentUser.id_cu} };
					this.pemilihanWidgetRoute = { name: 'pemilihan', params:{cu: this.currentUser.id_cu} };
					this.votingWidgetRoute = { name: 'voting', params:{cu: this.currentUser.id_cu} };
					this.laporanCUWidgetRoute = { name: 'laporanCuCu', params:{cu: this.currentUser.id_cu, tp:'konsolidasi'} };
					this.assesmentAccessWidgetRoute = { name: 'assesmentAccessCu', params:{cu: this.currentUser.id_cu} };
					this.monitoringWidgetRoute = { name: 'monitoringCu', params:{cu: this.currentUser.id_cu, tp: 'semua'} };
					this.dokumenWidgetRoute = { name: 'dokumenCu', params:{cu: this.currentUser.id_cu} };
				}else{
					this.tempatWidgetRoute = { name: 'tempat' };
					this.anggotaCuWidgetRoute = { name: 'anggotaCuCu', params:{cu: 'semua', tp: 'semua'} };
					this.jalinanKlaimWidgetRoute = { name: 'jalinanKlaimCu', params:{cu: 'semua', tp: 'semua'} };
					this.cuWidgetRoute = { name: 'cu' };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu:'semua'} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu:'semua'} };
					this.pemilihanWidgetRoute = { name: 'pemilihan', params:{cu: 'semua'} };
					this.votingWidgetRoute = { name: 'voting', params:{cu: 'semua'} };
					this.laporanCUWidgetRoute = { name: 'laporanCu' };
					this.assesmentAccessWidgetRoute = { name: 'assesmentAccessCu', params:{cu: 'semua'} };
					this.monitoringWidgetRoute = { name: 'monitoringCu', params:{cu: 'semua', tp: 'semua'} };
					this.dokumenWidgetRoute = { name: 'dokumenCu', params:{cu: 'semua'} };
					this.asetTetapWidgetRoute = { name: 'asetTetap'};
				}
			},
			goTo(route){
				this.$router.push(route);
			},
			fetchKegiatan(){
				this.$store.dispatch('kegiatanBKCU/countJalan');
				this.$store.dispatch('kegiatanBKCU/countDiikuti');
			},
			momentYear(){
				return moment().year();
			}	
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kegiatanBKCU',{
				countJalan: 'count',
				countJalanStat: 'countStat',
				countDiikuti: 'count2',
				countDiikutiStat: 'countStat2',
			}),
		}
	}
</script>