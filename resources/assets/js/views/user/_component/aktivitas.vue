<template>
	<div>
		<div class="card-group-control card-group-control-right" id="accordion-control-right" v-if="activityStat == 'success'">

			<div class="card" v-for="item in activity.data" :key="item.id">
				<div class="card-header text-white" :class="{'bg-primary' : item.description == 'created', 'bg-warning' : item.description == 'updated', 'bg-danger' : item.description == 'deleted'}">
					<h6 class="card-title">
						<a data-toggle="collapse" class="text-white collapsed" :href="'#' + item.id" aria-expanded="false">{{ item.description | description }} data <b>{{ item.subject_type | subjectType }}</b> {{ item.created_at | relativeHour }}</a>
					</h6>
				</div>

				<div :id="item.id" class="collapse" data-parent="#accordion-control-right" style="">
					<div class="card-body">
						<strong>Tanggal Aktivitas: </strong> <span v-html="$options.filters.dateTime(item.created_at)"></span>
						<hr/>
						<strong v-if="item.description == 'created'">Data yang ditambah:</strong>
						<strong v-else-if="item.description == 'updated'">Data yang diubah:</strong>
						<strong v-else-if="item.description == 'deleted'">Data yang dihapus:</strong>

						<div v-if="item.properties">
							<pre class="pre-scrollable language-markup content-group text-left"><code>{{ item.properties.attributes }}</code></pre>

							<div v-if="item.properties.old">
								<hr/>
								<strong>Data sebelum diubah</strong>
								<pre class="pre-scrollable language-markup content-group text-left"><code>{{ item.properties.old }}</code></pre>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div  v-if="activity.data.length == 0">
				<div class="card">
					<div class="card-body">
						<h3>Belum terdapat aktivitas apapun...</h3>
					</div>
				</div>
			</div>
		</div>

		<div v-if="activityStat == 'loading'">
			<div class="card">
				<div class="card-body">
					<h4>Mohon tunggu...</h4>
					<div class="progress">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<pagination v-if="activityStat == 'success'" :data="activity" :limit="10" @pagination-change-page="fetchAktivitas" class="pre-scrollable"></pagination>
	</div>
</template>

<script>
	import pagination from "laravel-vue-pagination";
	
	export default {
		props: ['activity','activityStat'],
		components: {
			pagination
		},
		data() {
			return {
			}
		},
		methods: {
			fetchAktivitas(page = 1){
				this.$emit('fetchAktivitas',page);
			},
		},
		filters: {
			description: function (value) {
				if(value == 'created'){
					return 'Menambah';
				}else if(value == 'updated'){
					return 'Mengubah';
				}else if(value == 'deleted'){
					return 'Menghapus';
				}
			},
			subjectType: function (value) {
				if(value == 'App\\Aktivis'){
					return 'Aktivis';
				}else if(value == 'App\\AktivisAnggotaCu'){
					return 'Anggota CU Aktivis';
				}else if(value == 'App\\AktivisKeluarga'){
					return 'Keluarga Aktivis';
				}else if(value == 'App\\AktivisOrganisasi'){
					return 'Organisasi Aktivis';
				}else if(value == 'App\\AktivisPekerjaan'){
					return 'Pekerjaan Aktivis';
				}else if(value == 'App\\AktivisPendidikan'){
					return 'Pendidikan Aktivis';
				}else if(value == 'App\\Artikel'){
					return 'Artikel';
				}else if(value == 'App\\ArtikelKategori'){
					return 'Kategori Artikel';
				}else if(value == 'App\\ArtikelPenulis'){
					return 'Penulis Artikel';
				}else if(value == 'App\\Cu'){
					return 'CU';
				}else if(value == 'App\\Download'){
					return 'Download';
				}else if(value == 'App\\Kegiatan'){
					return 'Kegiatan';
				}else if(value == 'App\\KegiatanPanitia'){
					return 'Panitia Kegiatan';
				}else if(value == 'App\\KegiatanPeserta'){
					return 'Peserta Kegiatan';
				}else if(value == 'App\\KegiatanSasaran'){
					return 'Sasaran Kegiatan';
				}else if(value == 'App\\LaporanCu'){
					return 'Laporan CU';
				}else if(value == 'App\\LaporanCuDiskusi'){
					return 'Diskusi Laporan CU';
				}else if(value == 'App\\LaporanCuDraft'){
					return 'Draft Laporan CU';
				}else if(value == 'App\\LaporanTp'){
					return 'Laporan TP/KP';
				}else if(value == 'App\\LaporanTpDiskusi'){
					return 'Diskusi Laporan TP/KP';
				}else if(value == 'App\\LaporanTpDraft'){
					return 'Draft Laporan TP/KP';
				}else if(value == 'App\\MitraLembaga'){
					return 'Lembaga Mitra';
				}else if(value == 'App\\MitraOrang'){
					return 'Mitra Perseorangan';
				}else if(value == 'App\\Pengumuman'){
					return 'Pengumuman';
				}else if(value == 'App\\ProdukCu'){
					return 'Produk CU';
				}else if(value == 'App\\Saran'){
					return 'Saran';
				}else if(value == 'App\\Tempat'){
					return 'Tempat';
				}else if(value == 'App\\Tp'){
					return 'TP/KP';
				}else if(value == 'App\\User'){
					return 'User';
				}
			}
		}
	}
</script>