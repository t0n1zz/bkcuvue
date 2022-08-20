<template>
  <div>
    <data-viewer :title="title" :itemData="itemData" :columnData="columnData" :itemDataStat="itemDataStat" :query="query" @fetch="fetch" :excelDownloadUrl="excelDownloadUrl" :isDasar="'true'" :isNoKolom="'true'" :isDisable="isDisableTable" :isNoButtonRow="isNoButtonRow" :dataview="dataview">

      <!-- if bkcu -->
      <template slot="button-desktop">
				<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahRekom')" v-if="tipeUser == 'panitia' || tipeUser == 'fasilitator'">
					<i class="icon-plus3"></i> Tambah Rekomendasi
				</button>
			</template>

      <template slot="button-mobile">
				<button class="btn btn-light mb-1 btn-block" @click.prevent="modalOpen('tambahRekom')" v-if="tipeUser == 'panitia' || tipeUser == 'fasilitator'">
					<i class="icon-plus3"></i> Tambah Rekomendasi
				</button>
      </template>


      <!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-md-12">
					<div class="card border-primary">
						<div class="card-body">
							<div class="row">
								<!-- info -->
								<div class="col-md-12">
									<div class="card mb-2 bg-success">
										<div class="card-header">
											<h5 class="card-title"><b>Rekomendasi {{ props.index + 1 }}</b> </h5>
										</div>
										<div class="card-body">
											<h6 v-html="props.item.name"></h6>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4">
											<div class="card mb-1 bg-info" v-tooltip="'PIC'">
												<div class="card-header pt-2 pb-2">
													<span class="card-title">
														<i class="icon-people mr-2"></i>
														<check-value :value="props.item.pic"></check-value>
													</span>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="card mb-1 bg-info" v-tooltip="'Waktu'">
												<div class="card-header pt-2 pb-2">
													<span class="card-title">
														<i class="icon-alarm-check mr-2"></i>
														<check-value :value="props.item.waktu"></check-value>
													</span>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="card mb-1 bg-info" v-tooltip="'Tipe'">
												<div class="card-header pt-2 pb-2">
													<span class="card-title">
														<i class="icon-file-check mr-2"></i>
														<span v-if="props.item.tipe == 1">Per Lembaga</span>
														<span v-else-if="props.item.tipe == 2">Per Peserta</span>
														<span v-else>-</span>
													</span>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="card mb-1 bg-info" v-tooltip="'Tgl. Buat'">
												<div class="card-header pt-2 pb-2">
													<span class="card-title">
														<i class="icon-plus3 mr-2"></i>
														<span v-html="$options.filters.dateTime(props.item.created_at)"></span>
													</span>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="card mb-1 bg-info" v-tooltip="'Tgl. Ubah'">
												<div class="card-header pt-2 pb-2">
													<span class="card-title">
														<i class="icon-pencil5 mr-2"></i>
														<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
														<span v-else>-</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- form -->
								<div class="col-md-12" v-if="tipeUser == 'peserta'">
									<hr/>
									<div class="card card-body mb-0">
										<form-rekom-hasil 
											:selected="props.item"
											:kelas="kelas"
											:isModal="false"
											@tutup="modalTutup" ></form-rekom-hasil>
									</div>
								</div>
								<div class="col-md-12" v-else>
									<hr/>
									<table-rekom-hasil
										:kelas="kelas"
										:selected="props.item"
										:tipeUser="tipeUser"
										@fetch="fetch"></table-rekom-hasil>
									<div class="row" v-if="tipeUser == 'panitia' || tipeUser == 'fasilitator'">
										<div class="col-md-12"><hr/></div>
										
										<div class="col-md-6">
											<button class="btn btn-light mb-1 btn-block" @click.prevent="modalOpen('ubahRekom', props.item)">
												<i class="icon-pencil5"></i> Ubah Rekomendasi
											</button>
										</div>
										<div class="col-md-6">
											<button class="btn btn-light mb-1 btn-block" @click.prevent="modalOpen('hapusRekom', props.item)">
												<i class="icon-bin"></i> Hapus Rekomendasi
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>

    </data-viewer>

  	<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
    @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
    @backgroundClick="modalBackgroundClick">

		 <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- body -->
			<template slot="modal-body1">
				<form-rekom 
				:mode="formModalMode"
				:selected="selectedItem"
				:kegiatan_id="item.id"
				:kelas="kelas"
				@tutup="modalTutup" v-if="state == 'tambahRekom' || state == 'ubahRekom'"></form-rekom>
			</template>

		</app-modal>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex';
  import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";
	import checkbox from '../../components/checkbox.vue';
  import dataTable from '../../components/datatable.vue';
  import Cleave from 'vue-cleave-component';
  import checkValue from '../../components/checkValue.vue';
  import dataViewer from '../../components/dataviewer2.vue';
	import formRekom from "./formRekom.vue";
	import formRekomHasil from "./formRekomHasil.vue";
	import tableRekomHasil from "./tableRekomHasil.vue";

	export default {
		props: ['tipeUser'],
		components: {
      appModal,
			formInfo,
			message,
			checkbox,
      dataTable,
      Cleave,
      checkValue,
      dataViewer,
			formRekom,
			formRekomHasil,
			tableRekomHasil,
		},
		data() {
			return {
				title: 'Rekomendasi',
				kelas: 'kegiatanRekom',
        excelDownloadUrl: '',
        isDisableTable: false,
        selectedItem: '',
				dataview: 'grid',
				isNoButtonRow:'',
				query: {
					order_column: "name",
					order_direction: "desc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Pic',
						name: 'pic',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Waktu',
						name: 'waktu',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
        cleaveOption: {
					date: {
						date: true,
						datePattern: ['Y', 'm', 'd'],
						delimiter: '-'
					},
					year: {
						date: true,
						datePattern: ['Y'],
					},
					number12: {
						numeral: true,
						numeralIntegerScale: 12,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number3: {
						numeral: true,
						numeralIntegerScale: 3,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false
					},
					numeric: {
						numeral: true,
						numeralThousandsGroupStyle: 'thousand',
						numeralDecimalScale: 2,
						numeralDecimalMark: ',',
						delimiter: '.'
					}
				},
        modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
        state: '',
			}
		},
		created() {
      this.fetch(this.query);
		},
		watch: {
      itemStat(value){
        if(value == 'success'){
        }
      },
      updateStat(value) {
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.fetch(this.query);
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
      }
		},
		methods: {
      fetch(params){
				this.$store.dispatch(this.kelas + '/indexKegiatan', [params,this.item.id]);
				this.excelDownloadUrl = this.kelas + '/indexKegiatan/' + this.item.id;					
			},
      selectedRow(item) {
				this.selectedItem = item;
			},
      modalOpen(state, selected) {
				this.modalShow = true;
				this.modalSize = '';
				this.state = state;
				this.isDisableTable = true;

				if (state == 'hapusRekom') {
					this.selectedItem = selected;
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Rekomendasi ' + this.selectedItem.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}else if (state == 'ubahRekom') {
					this.selectedItem = selected;
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Rekomendasi';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'edit';
				} else if (state == 'tambahRekom') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Rekomendasi';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'create';
				}
			},
      modalConfirmOk() {
				if (this.state == 'hapusRekom') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
        }
			},
      modalTutup() {
				this.isDisableTable = false;
				this.modalShow = false;
      },
      modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
				this.isDisableTable = false;
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
      ...mapGetters('kegiatanBKCU', {
        item: 'data',
				itemStat: 'dataStat',
			}),
			...mapGetters('kegiatanRekom', {
        itemData: 'dataS',
				itemDataStat: 'dataStatS',
        updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>