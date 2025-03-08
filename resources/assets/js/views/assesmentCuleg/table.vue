<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :isUploadExcel="false" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_assesment_culeg']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="goTo(selectedItem.id,'edit')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_assesment_culeg']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- penilaian-->
				<button @click.prevent="goTo(selectedItem.id,'penilaian')" class="btn btn-light btn-icon mb-1" v-if="currentUser.id_cu == 0 && currentUser.can && currentUser.can['update_assesment_culeg']" :disabled="!selectedItem.id">
					<i class="icon-law"></i> Penilaian PUSKOPCUINA
				</button>

				<!-- lihat-->
				<button @click.prevent="goTo(selectedItem.id,'lihat')" class="btn btn-light btn-icon mb-1" :disabled="!selectedItem.id">
					<i class="icon-file-eye"></i> Lihat
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_assesment_culeg']"  :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['create_assesment_culeg']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="goTo(selectedItem.id,'edit')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['update_assesment_culeg']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- penilaian-->
				<button @click.prevent="goTo(selectedItem.id,'penilaian')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.id_cu == 0 && currentUser.can && currentUser.can['update_assesment_culeg']" :disabled="!selectedItem.id">
					<i class="icon-law"></i> Penilaian PUSKOPCUINA
				</button>

				<!-- lihat-->
				<button @click.prevent="goTo(selectedItem.id,'lihat')" class="btn btn-light btn-icon btn-block mb-1" :disabled="!selectedItem.id">
					<i class="icon-file-eye"></i> Lihat
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_assesment_culeg']"  :disabled="!selectedItem.id">
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
						<check-value :value="props.item.total_skor_cu2" valueType="decimal"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.total_skor_bkcu2" valueType="decimal"></check-value>
					</td>
					<td v-if="!columnData[8].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
					<td v-if="!columnData[9].hide">
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
						title: "Total Skor Credit Union Level 10 Principles CU",
						name: "total_skor_cu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Total Skor Credit Union Level 10 Principles PUSKOPCUINA",
						name: "total_skor_bkcu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Total Skor Network Level 4 Aspects Of Integration CU",
						name: "total_bobot_cu",
						tipe: "numeric",
						sort: false,
						hide: false,
						disable: false,
						filter: false
					},
					{
						title: "Total Skor Network Level 4 Aspects Of Integration PUSKOPCUINA",
						name: "total_bobot_bkcu",
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
			...mapGetters('assesmentCuleg',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>