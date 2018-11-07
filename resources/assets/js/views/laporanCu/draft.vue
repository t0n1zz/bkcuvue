<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<div class="card">
						
						 <div class="card-header d-print-none">
								<div class="row">
									<!-- slot button -->
									<!-- button desktop -->
									<div class="col-md-8 col-lg-10 pb-2 d-none d-sm-block">

										<!-- simpan -->
										<button @click.prevent="modalConfirmOpen('simpan')"  class="btn btn-light mb-1">
											<i class="icon-floppy-disk"></i> Simpan ke laporan statistik CU
										</button>

										<!-- hapus -->
										<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" :disabled="!selectedItem.id">
											<i class="icon-bin2"></i> Hapus
										</button>

										<!-- hapus -->
										<button @click.prevent="modalConfirmOpen('hapus_semua')" class="btn btn-light btn-icon mb-1" :disabled="!selectedItem.id">
											<i class="icon-bin2"></i> Hapus Semua
										</button>

									</div>
									<!-- button mobile -->
									<div class="col-md-12 pb-2 d-block d-sm-none">

										<!-- simpan -->
										<button @click.prevent="modalConfirmOpen('simpan')"  class="btn btn-light btn-block">
											<i class="icon-floppy-disk"></i>Simpan ke laporan statistik CU
										</button>

										<!-- hapus -->
										<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" :disabled="!selectedItem.id">
											<i class="icon-bin2"></i> Hapus
										</button>

										<button @click.prevent="modalConfirmOpen('hapus_semua')" class="btn btn-light btn-icon btn-block mb-1" :disabled="!selectedItem.id">
											<i class="icon-bin2"></i> Hapus Semua
										</button>

									</div>
								</div>
								
							</div>

						<!-- table data -->
						<data-table :items="itemData" :columnData="columnData" :itemDataStat="itemDataStat">
							<template slot="item-desktop" slot-scope="props">
								<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
									<td>{{ props.index + 1 }}</td>
									<td>
										<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
										<span v-else>-</span>
									</td>
									<td><check-value :value="props.item.no_ba"></check-value></td>
									<td>{{ props.item.periode | dateMonth }}</td>
									<td>
										<check-value :value="props.item.l_biasa" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.l_lbiasa" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.p_biasa" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.p_lbiasa" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.total_anggota" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.total_anggota_lalu" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.aset" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.aset_lalu" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.aset_masalah" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.aset_tidak_menghasilkan" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.aktiva_lancar" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.simpanan_saham" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.simpanan_saham_lalu" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.simpanan_saham_des" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.nonsaham_unggulan" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.nonsaham_harian" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.hutang_spd" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.hutang_tidak_berbiaya_30hari" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.total_hutang_pihak3" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.piutang_beredar" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.piutang_bersih" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.piutang_anggota" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.piutang_lalai_1bulan" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.piutang_lalai_12bulan" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.rasio_beredar" valueType="percentage"></check-value>
									</td>
									<td>
										<check-value :value="props.item.rasio_lalai" valueType="percentage"></check-value>
									</td>
									<td>
										<check-value :value="props.item.dcr" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.dcu" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.iuran_gedung" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.donasi" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.bjs_saham" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.beban_penyisihan_dcr" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.investasi_likuid" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.total_pendapatan" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.total_biaya" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.shu" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.shu_lalu" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.rata_aset" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.laju_inflasi" valueType="percentage"></check-value>
									</td>
									<td>
										<check-value :value="props.item.harga_pasar" valueType="percentage"></check-value>
									</td>
									<td v-html="$options.filters.dateTime(props.item.created_at)"></td>
									<td>
										<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
										<span v-else>-</span>
									</td>
								</tr>
							</template>	
						</data-table>

					</div>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import appModal from "../../components/modal";
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			dataTable,
			checkValue,
		},
		data() {
			return {
				title: 'Laporan Draft',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data laporan dari file excel',
				titleIcon: 'icon-stats-bars2',
				selectedItem: [],
				columnData: [
					{ title: 'No.' },
					{ title: "CU" },
					{ title: 'No. BA' },
					{ title: 'Periode' },
					{ title: "Lelaki Biasa" },
					{ title: "Lelaki L.Biasa" },
					{ title: "Perempuan Biasa" },
					{ title: "Perempuan L.Biasa" },
					{ title: "Total Anggota" },
					{ title: "Total Anggota Lalu" },
					{ title: "Aset" },
					{ title: "Aset Lalu" },
					{ title: "Aset Masalah" },
					{ title: "Aset Tdk Menghasilkan" },
					{ title: "Aktiva Lancar" },
					{ title: "Simp. Saham" },
					{ title: "Simp. Saham Lalu" },
					{ title: "Simp. Saham Des" },
					{ title: "Simp. Nonsaham Unggulan" },
					{ title: "Simp. Nonsaham Harian" },
					{ title: "Hutang SPD" },
					{ title: "Hutang Tdk Berbiaya" },
					{ title: "Total Hutang Pihak Ke-3" },
					{ title: "Piutang Beredar" },
					{ title: "Piutang Bersih" },
					{ title: "Piutang Anggota" },
					{ title: "Piutang Lalai 1-12 Bulan" },
					{ title: "Piutang Lalai > 12 Bulan" },
					{ title: "Rasio Piutang Beredar" },
					{ title: "Rasio Piutang Lalai" },
					{ title: "DCR" },
					{ title: "DCU" },
					{ title: "Iuran Gedung" },
					{ title: "Donasi" },
					{ title: "BJS Saham" },
					{ title: "Beban Penyisihan DCR" },
					{ title: "Investasi Likuid" },
					{ title: "Total Pendapatan" },
					{ title: "Total Biaya" },
					{ title: "SHU" },
					{ title: "SHU Lalu" },
					{ title: "Rata-rata Aset" },
					{ title: "Laju Inflasi" },
					{ title: "Harga Pasar" },
					{ title: "Tgl. Buat" },
					{ title: "Tgl. Ubah" },
				],
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch();
		},
		watch: {},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + "/indexCuDraft",this.currentUser.id);
			},
			selectedRow(item) {
				this.selectedItem = item;
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = "confirm-tutup";
				this.state = state;

				if (isMobile) {
					this.selectedItem = itemMobile;
				}

				if (state == "hapus") {
					this.modalTitle =
						"Hapus " + this.title + " " + this.selectedItem.name + " ini?";
					this.modalButton = "Iya, Hapus";
				}else if (state == "hapus_semua") {
					this.modalTitle =
						"Hapus semua laporan draft ini?";
					this.modalButton = "Iya, Hapus";
				}else if (state == "simpan") {
					this.modalTitle =
						"Simpan semua laporan draft ini?";
					this.modalButton = "Iya, Simpan";
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + "/resetUpdateStat");
			},
			modalConfirmOk() {
				if (this.state == "hapus") {
					this.$store.dispatch(this.kelas + "/destroyDraft", this.selectedItem.id);
				}else if (this.state == "hapus_semua") {
					this.$store.dispatch(this.kelas + "/destroyDraftAll");
				}else if (this.state == "simpan") {
					this.$store.dispatch(this.kelas + "/storeDraftAll");
				}
			}
		},
		computed: {
			...mapGetters("auth", {
				currentUser: "currentUser"
			}),
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>