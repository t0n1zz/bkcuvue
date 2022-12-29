<template>
	<div>
		<div class="card mb-0">
			<div class="card-body pb-1 pt-2">
				<div class="row">
					<!-- button desktop  -->
          <div class="col-md-9 col-lg-9 d-none d-sm-block">
						<template v-if="tipeUser == 'panitia' || tipeUser == 'fasilitator'">
							<!-- <button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahHasil')">
								<i class="icon-plus3"></i> Tambah Hasil
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahHasil')" :disabled="!selectedItem.id">
								<i class="icon-pencil5"></i> Ubah Hasil
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusHasil')" :disabled="!selectedItem.id">
								<i class="icon-bin"></i> Hapus Hasil
							</button> -->
						</template>
					</div>

					<!-- button mobile -->
          <div class="col-md-12 d-block d-sm-none">
						<!-- <template v-if="tipeUser == 'panitia' || tipeUser == 'fasilitator'">
							<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('tambahHasil')">
								<i class="icon-plus3"></i> Tambah Hasil
							</button>

							<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahHasil')" :disabled="!selectedItem.id">
								<i class="icon-pencil5"></i> Ubah Hasil
							</button>

							<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapusHasil')" :disabled="!selectedItem.id">
								<i class="icon-bin"></i> Hapus Hasil
							</button>
						</template> -->

						<!-- excel -->
						<json-excel 
            class="btn bg-green-300 btn-icon btn-block mb-1"
            :data="excel.data" 
            :exportFields="excel.fields" 
            :meta="excel.meta"
            :title="'Data ' + title" 
            :name="title + '.xls'"
            ><i class="icon-file-excel"></i> Excel</json-excel> 
					</div>

					<!-- button excel -->
					<div class="col-md-3 col-lg-3 text-right d-none d-sm-block">
            <json-excel 
            class="btn bg-green-300 btn-icon mb-1 cursor-pointer"
            :data="excel.data" 
            :exportFields="excel.fields" 
            :meta="excel.meta"
            :title="'Data ' + title" 
            :name="title + '.xls'"
            ><i class="icon-file-excel"></i> Excel</json-excel> 
          </div>

				</div>
			</div>

			<!-- main panel -->
			<data-table :columnData="columnData" :items="itemData"  :itemDataStat="itemDataStat">

				<!-- item desktop -->
				<template slot="item-desktop" slot-scope="props">
					<tr>
						<td v-if="!columnData[0].hide">
							{{ props.index + 1 }}
						</td>
						<td v-if="!columnData[1].hide">
							<check-value :value="props.item.tercapai" :valueType="''"></check-value>
						</td>
						<td v-if="!columnData[2].hide">
							<check-value :value="props.item.keterangan" :valueType="''"></check-value>
						</td>
						<td v-if="!columnData[3].hide">
							<check-value :value="props.item.bukti" :valueType="''"></check-value>
						</td>
						<td v-if="!columnData[4].hide">
							<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
							<span v-else>PUSKOPCUINA</span>
						</td>
						<td v-if="!columnData[5].hide">
							<check-value :value="props.item.user.username" v-if="props.item.user"></check-value>
							<span v-else>-</span>
						</td>
						<td v-if="!columnData[6].hide">
							<img :src="'/images/rekom/' + props.item.gambar + 'n.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
							<img :src="'/images/no_image.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-else>
						</td>
						<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
						<td v-if="!columnData[8].hide">
							<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
							<span v-else>-</span>
						</td>
					</tr>
				</template>

			</data-table>
		</div>

					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :content="modalContent" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- body -->
			<template slot="modal-body1">
				<form-rekom-hasil 
					:selected="selectedItem"
					:kegiatan_rekom_id="selected.id"
					:kelas="kelas"
					:isModal="true"
					:mode="formModalMode"
					@tutup="modalTutup" ></form-rekom-hasil>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';
	import jsonExcel from 'vue-json-excel';
	import formRekomHasil from "./formRekomHasil.vue";

	export default {
		components: {
			dataTable,
			appModal,
			checkValue,
			jsonExcel,
			formRekomHasil
		},
		props:['kelas','selected','tipeUser'],
		data() {
			return {
				title: 'Hasil Rekomendasi',
				selectedItem: [],
				itemData: [],
				excelDownloadUrl: '',
				formModalMode: '',
				query: {
					order_column: "name",
					order_direction: "desc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excel: {
          data: [],
          fields: {
						tercapai: 'tercapai',
						keterangan: 'keterangan',
						bukti: 'bukti',
						cu: 'cu.name',
						user: 'user.username',
					},
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
				columnData: [
					{
						title: 'No.',
						name: 'No.',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Pencapaian',
						name: 'tercapai',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Bukti',
						name: 'bukti',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
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
						title: 'User',
						name: 'user.username',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
					},
					{
						title: 'Tgl. Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Ubah',
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
				modalSize: '',
				modalColor: '',
				modalButton: '',
				modalContent: ''
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
			},
			itemDataStat(value){
				if(value == 'success'){
					this.fetch();
				}
			},	
			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
			},
    },
		methods: {
			fetch(){
				if(this.itemDataStat == 'success'){
					this.itemData = this.selected.hasil;
					this.excel.data = this.selected.hasil;
				}
				// this.itemDataStat = 'loading';
				// axios.get( '/api/kegiatanRekom/indexHasil/' + this.selected.id , {params: params} )
				// .then( (response) => {
				// 	this.itemData = response.data.model;
				// 	this.itemDataStat = 'success';
				// })
				// .catch( error => {
				// 	console.log('ya');
				// 	this.itemData = error.response;
				// 	this.itemDataStat = 'fail';
				// });
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			modalOpen(state) {
				this.modalShow = true;
				this.state = state;

				if (state == 'hapusHasil') {
					this.modalState = 'confirm-tutup';
					this.modalTitle = 'Hapus hasil ' + this.selectedItem.keterangan + ' ?';
					this.modalButton = 'Iya, Hapus';
				}else if (state == 'ubahHasil') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Hasil';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'edit';
				} else if (state == 'tambahHasil') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Hasil';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'create';
				}
			},
			modalTutup() {
				if(this.updateStat == 'success'){
					this.$emit('fetch', this.query);
				}
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat2');
			},
			modalConfirmOk() {
				if (this.state == 'hapusHasil') {
					this.$store.dispatch(this.kelas + '/destroyHasil', this.selectedItem.id);
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('global',{
				idCu: 'idCu'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('kegiatanRekom',{
				itemDataStat: 'dataStatS',
				updateMessage: 'update2',
				updateStat: 'updateStat2'
			}),
		}
	}
</script>