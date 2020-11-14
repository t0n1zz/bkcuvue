<template>
	<div>

		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="3">
			<template slot="breadcrumb">
				<router-link :to="{ name:'dashboard' }" class="breadcrumb-item"><i class="icon-home4"></i> Dashboard </router-link>

				<a href="#" @click.prevent="back()" class="breadcrumb-item">Anggota CU </a>

				<a href="#" @click.prevent="kembali()" class="breadcrumb-item" v-if="$route.meta.mode == 'create'">Tambah Anggota CU</a>

				<span class="breadcrumb-item active">{{ title }}</span>
			</template>	
		</page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- identitas -->
					<div class="card">
						<div class="card-header bg-white">
							<h5 class="card-title">Identitas</h5>
						</div>
						<div class="card-body">
							<identitas :itemData="form"></identitas>
						</div>
					</div>

					<!-- identitas -->
					<div class="card">
						<div class="card-header bg-white">
							<h5 class="card-title">Ke Anggotaan Di CU</h5>
						</div>
						<div class="card-body">

							<div class="card card-body text-center" v-for="(item, index) in form.anggota_cu_cu" :key="index">
								<ul class="list-inline list-inline-consensed mb-0 font-size-lg">
									<li class="list-inline-item"><b>CU:</b> {{ item.cu ? item.cu.name : "-" }}</li>
									<li class="list-inline-item"><b>TP:</b> {{ item.tp ? item.tp.name : "-" }}</li>
									<li class="list-inline-item"><b>No. BA:</b> {{ item.no_ba }}</li>
									<li class="list-inline-item"><b>Tgl. Masuk:</b> {{ $options.filters.date(item.tanggal_masuk) }}</li>
									<li class="list-inline-item" v-if="item.tanggal_keluar"><b>Tgl. Keluar:</b> {{ $options.filters.date(item.tanggal_keluar) }}</li>
								</ul>
							</div>

						</div>
					</div>

					<!-- produk -->
					<div class="card">
						<div class="card-header bg-white">
							<h5 class="card-title">Produk</h5>
						</div>
						<div class="card-body pb-2">
							<div class="row">

								<div class="col-md-12">

									<button class="btn btn-light mb-1" @click.prevent="modalOpen('create')">
										<i class="icon-plus22"></i> Tambah
									</button>

									<button class="btn btn-light mb-1" @click.prevent="modalOpen('edit')"
									:disabled="!selectedItem.id">
										<i class="icon-pencil5"></i> Ubah
									</button>

									<button class="btn btn-light mb-1" @click.prevent="modalOpen('transaksi')"
									:disabled="!selectedItem.id">
										<i class="icon-file-text"></i> Transaksi
									</button>

									<button class="btn btn-light mb-1" @click="modalOpen('delete')" :disabled="!selectedItem.id">
										<i class="icon-bin2"></i> Hapus
									</button>

								</div>

							</div>		
						</div>

						<data-table :items="itemData" :columnData="columnData" :itemDataStat="itemDataStat">
							<template slot="item-desktop" slot-scope="props">
								<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
									<td>{{ props.index + 1 }}</td>
									<td>
										<check-value :value="props.item.no_rek"></check-value>
									</td>
									<td>
										<span v-if="currentUser.id_cu == 0">
											<check-value :value="props.item.produk_cu.cu.name" v-if="props.item.produk_cu"></check-value>
											<span v-else>-</span>
										</span>
										<span v-else>{{ currentUser.cu.name }}</span>
									</td>
									<td>
										<check-value :value="props.item.produk_cu.name" v-if="props.item.produk_cu"></check-value>
										<span v-else>-</span>
									</td>
									<td>
										<check-value :value="props.item.produk_cu.tipe" v-if="props.item.produk_cu"></check-value>
										<span v-else>-</span>
									</td>
									<td>
										<check-value :value="props.item.saldo" valueType="currency"></check-value>
									</td>
									<td>
										<check-value :value="props.item.lama_pinjaman"></check-value>
									</td>
									<td>
										<check-value :value="props.item.lama_sisa_pinjaman"></check-value>
									</td>
									<td>
										<span v-if="props.item.tanggal" v-html="$options.filters.date(props.item.tanggal)"></span>
										<span v-else>-</span>
									</td>
									<td>
										<span v-if="props.item.tanggal_target" v-html="$options.filters.date(props.item.tanggal_target)"></span>
										<span v-else>-</span>
									</td>
									<td>
										<check-value :value="props.item.tujuan"></check-value>
									</td>
								</tr>
							</template>	
						</data-table>

					</div>

					<!-- form button -->
					<div class="card card-body">
						<form-button 
							:confirmState="'methods'" 
							:confirmTitle="'selesai'"
							:cancelState="'methods'"
							:cancelTitle="'kembali'" 
							@confirmClick="back" 
							@cancelClick="kembali" 
							v-if="$route.meta.mode == 'create' || $route.meta.mode == 'createJalinan'"></form-button>
						<form-button 
							:isSingleButton="true"
							:cancelState="'methods'"
							:cancelTitle="'kembali'" 
							@cancelClick="back" 
							v-else></form-button>	
					</div>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalTutup">
			 <template slot="modal-title">
				 {{ modalTitle }}
			 </template>

			 <template slot="modal-body1">
					<form-produk :formState="formState" :selected="formModel" @tutup="modalTutup" @tambahProduk="tambahProduk"></form-produk>
			 </template>

			 <template slot="modal-body2">
					<form-transaksi :selected="formModel" @tutup="modalTutup" ></form-transaksi>
			 </template>
		</app-modal>

	</div>
</template>

<script>
	import moment from 'moment';
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formProduk from "./formProduk.vue";
	import formTransaksi from "./formTransaksi.vue";
	import checkValue from '../../components/checkValue.vue';
	import identitas from "../../components/identitas.vue";

	export default {
		components: {
			pageHeader,
			message,
			dataTable,
			appModal,
			appImageUpload,
			formInfo,
			formButton,
			formProduk,
			formTransaksi,
			checkValue,
			identitas
		},
		data() {
			return {
				title: 'Produk',
				titleDesc: 'Menambah atau mengubah produk yang dimiliki anggota',
				titleIcon: 'icon-list2',
				kelas: 'anggotaCu',
				id_local: '',
				formState: '',
				formModel: {},
				selectedItem: {},
				columnData:[
					{ title: 'No.' },
					{ title: 'No. Rek' },
					{ title: 'CU' },
					{ title: 'Nama' },
					{ title: 'Jenis' },
					{ title: 'Saldo Awal' },
					{ title: 'Lama Pinjaman (BLN)' },
					{ title: 'Lama Sisa Pinjaman (BLN)' },
					{ title: 'Tgl. Buat' },
					{ title: 'Tgl. Target' },
					{ title: 'Tujuan' },
				],
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalImageShow: false,
				modalImageContent: '',
				submited: false,
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';
				this.modalContent = '';
				this.selectedItem = {};

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
					this.fetch();
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/indexProduk',[this.$route.params.id, this.$route.params.cu]);
				this.$store.dispatch(this.kelas + '/edit',this.$route.params.id, this.$route.params.cu);
			},
			back(){
				if(this.$route.meta.mode == 'createJalinan'){
					this.$router.push({name: 'jalinanKlaimCreateNik', params:{nik: this.form.nik}});
				}else if(this.$route.meta.mode == 'editJalinan'){
					if(this.currentUser.id_cu == 0){
						this.$router.push({name: 'jalinanKlaimCu', params:{cu: 'semua', tp: 'semua'}});
					}else{
						this.$router.push({name: 'jalinanKlaimCu', params:{cu: this.currentUser.id_cu, tp: 'semua'}});
					}
				}else{
					if(this.currentUser.id_cu != 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua'}});
					}
				}
			},
			kembali(){
				if(this.$route.meta.mode == 'create'){
					this.$router.push({name: this.kelas + 'CreateEdit', params:{id: this.$route.params.id}});	
				}else if(this.$route.meta.mode == 'createJalinan'){
					this.$router.push({name: this.kelas + 'CreateJalinanEdit', params:{id: this.$route.params.id}})	
				}else{
					this.back();
				}
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			modalOpen(state){
				this.modalShow = true;

				if(state == 'create'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.formState = 'create';
					if(this.modelCuStat != 'success'){
						this.$store.dispatch('cu/getHeader');
					}
					this.modalTitle = 'Tambah produk';
				}else if(state == 'edit'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.formState = 'edit';
					this.modalTitle = 'Ubah produk';
					this.formModel = Object.assign({}, this.selectedItem);
				}else if(state == 'transaksi'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Transaksi';
					this.formModel = Object.assign({}, this.selectedItem);
				}else if(state == 'delete'){
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = this.modalTitle = 'Hapus produk ' + this.selectedItem.produk_cu.name + ' dengan no rekening ' + this.selectedItem.no_rek + ' ?';
				}
			},
			modalTutup() {
				this.modalShow = false;
			},
			tambahProduk() {
				this.modalShow = false;
				let self = this;
				setTimeout(function(){
						self.$router.push({name: 'produkCuCreate'});
				}, 300);
			},
			modalConfirmOk() {
				this.$store.dispatch(this.kelas + '/destroyProduk', this.selectedItem.id);
			},
			cancelClick(){
				this.modalShow = false;
			},
			moment: function () {
				return moment();
			},
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu',{
				form: 'data',
				itemData: 'dataProduk',
				formDataStat: 'dataStat',
				itemDataStat: 'dataProdukStat',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
		},
	}
</script>