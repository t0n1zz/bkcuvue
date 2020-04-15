<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :isUploadExcel="false" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_assesment_access']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="goTo(selectedItem.id,'edit')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_assesment_access']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- penilaian-->
				<button @click.prevent="goTo(selectedItem.id,'penilaian')" class="btn btn-light btn-icon mb-1" v-if="currentUser.id_cu == 0 && currentUser.can && currentUser.can['update_assesment_access']" :disabled="!selectedItem.id">
					<i class="icon-law"></i> Penilaian BKCU
				</button>

				<!-- lihat-->
				<button @click.prevent="goTo(selectedItem.id,'lihat')" class="btn btn-light btn-icon mb-1" :disabled="!selectedItem.id">
					<i class="icon-file-eye"></i> Lihat
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_assesment_access']"  :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['create_assesment_access']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="goTo(selectedItem.id,'edit')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['update_assesment_access']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- penilaian-->
				<button @click.prevent="goTo(selectedItem.id,'penilaian')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.id_cu == 0 && currentUser.can && currentUser.can['update_assesment_access']" :disabled="!selectedItem.id">
					<i class="icon-law"></i> Penilaian BKCU
				</button>

				<!-- lihat-->
				<button @click.prevent="goTo(selectedItem.id,'lihat')" class="btn btn-light btn-icon btn-block mb-1" :disabled="!selectedItem.id">
					<i class="icon-file-eye"></i> Lihat
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_assesment_access']"  :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>
				
			</template>

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<span v-if="props.item.status == 'BELUM DINILAI'" class="badge badge-secondary">{{ props.item.status }}</span>
						<span v-else-if="props.item.status == 'SUDAH DINILAI'" class="badge badge-primary">{{ props.item.status }}</span>
						<span v-else-if="props.item.status == 'BELUM SELESAI DIISI'" class="badge badge-warning">{{ props.item.status }}</span>
						<span v-else-if="props.item.status == 'BELUM SELESAI DINILAI'" class="badge badge-success">{{ props.item.status }}</span>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.periode"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.total_skor_cu" valueType="decimal"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.total_skor_bkcu" valueType="decimal"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.total_bobot_cu" valueType="decimal"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.total_bobot_bkcu" valueType="decimal"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.p1.skor_cu_p1" valueType="decimal" v-if="props.item.p1"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.p2.skor_cu_p2" valueType="decimal" v-if="props.item.p2"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.p3.skor_cu_p3" valueType="decimal" v-if="props.item.p3"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.p4.skor_cu_p4" valueType="decimal" v-if="props.item.p4"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.p1.skor_bkcu_p1" valueType="decimal" v-if="props.item.p1"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.p2.skor_bkcu_p2" valueType="decimal" v-if="props.item.p2"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.p3.skor_bkcu_p3" valueType="decimal" v-if="props.item.p3"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.p4.skor_bkcu_p4" valueType="decimal" v-if="props.item.p4"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.bobot_cu_p1" valueType="decimal" v-if="props.item.p1"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.bobot_cu_p2" valueType="decimal" v-if="props.item.p2"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.bobot_cu_p3" valueType="decimal" v-if="props.item.p3"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.bobot_cu_p4" valueType="decimal" v-if="props.item.p4"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.bobot_bkcu_p1" valueType="decimal" v-if="props.item.p1"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.bobot_bkcu_p2" valueType="decimal" v-if="props.item.p2"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.bobot_bkcu_p3" valueType="decimal" v-if="props.item.p3"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.bobot_bkcu_p4" valueType="decimal" v-if="props.item.p4"></check-value>
					</td>
					<td v-if="!columnData[24].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
					<td v-if="!columnData[25].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import collapseButton from '../../components/collapseButton.vue';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			collapseButton,
			checkValue
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				query: {
					order_column: "periode",
					order_direction: "desc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Status',
						name: 'status',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Periode',
						name: 'periode',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'CU',
						name: 'cu.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: "Total Skor CU",
						name: "total_skor_cu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Total Skor BKCU",
						name: "total_skor_bkcu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Total Bobot CU",
						name: "total_bobot_cu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Total Bobot BKCU",
						name: "total_bobot_bkcu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Keuangan (CU)",
						name: "p1.skor_cu_p1",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Anggota/Pelanggan (CU)",
						name: "p2.skor_cu_p2",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Bisnis Internal (CU)",
						name: "p3.skor_cu_p3",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Pembelajaran (CU)",
						name: "p4.skor_cu_p4",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Keuangan (BKCU)",
						name: "p1.skor_bkcu_p1",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Anggota/Pelanggan (BKCU)",
						name: "p2.skor_bkcu_p2",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Bisnis Internal (BKCU)",
						name: "p3.skor_bkcu_p3",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Skor Prsp. Pembelajaran (BKCU)",
						name: "p4.skor_bkcu_p4",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Keuangan (CU)",
						name: "bobot_cu_p1",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Anggota/Pelanggan (CU)",
						name: "bobot_cu_p2",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Bisnis Internal (CU)",
						name: "bobot_cu_p3",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Pembelajaran (CU)",
						name: "bobot_cu_p4",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Keuangan (BKCU)",
						name: "bobot_bkcu_p1",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Anggota/Pelanggan (BKCU)",
						name: "bobot_bkcu_p2",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Bisnis Internal (BKCU)",
						name: "bobot_bkcu_p3",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Bobot Prsp. Pembelajaran (BKCU)",
						name: "bobot_bkcu_p4",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Ubah',
						name: 'updated_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					}
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
			this.fetch(this.query);
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch(this.query);
			},

      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
    },
		methods: {
			fetch(params){
				if(this.$route.params.cu == 'semua'){
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index', params);
					this.excelDownloadUrl = this.kelas;
				}else{
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
				}
			},
			disableColumnCu(status){
				this.columnData[3].disable = status;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			goTo(id, tipe) {
				if(tipe == 'edit'){
					if(this.selectedItem.status == 'BELUM DINILAI' || this.selectedItem.status == 'BELUM SELESAI DIISI'){
						this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
					}else{
						this.modalShow = true;
						this.modalState = 'tutup';
						this.modalTitle = 'Maaf, data ini sudah dilakukan penilaian dan tidak bisa diubah lagi.';
					}
				}else if(tipe == 'penilaian'){
					if(this.selectedItem.status == 'BELUM SELESAI DIISI'){
						this.modalShow = true;
						this.modalState = 'tutup';
						this.modalTitle = 'Maaf, data ini belum selesai diisi oleh pihak CU.';
					}else{
						this.$router.push({name: this.kelas + 'Penilaian', params: { id: id }});
					}
				}else if(tipe == 'lihat'){
					this.$router.push({name: this.kelas + 'Lihat', params: { id: id }});
				}
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' periode ' + this.selectedItem.periode + ' ini?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('assesmentAccess',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>