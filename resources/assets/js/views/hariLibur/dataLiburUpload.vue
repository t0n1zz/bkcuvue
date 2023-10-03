<template>
	<div>
			<!-- header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>

		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
					<div class="row">

						<div class="col-sm-12">
							<singleFileUpload title="DATA_LIBUR" ref="formData" @LoadingStat="setLoadingStat" @fileSelected="setFileCount" @fileBatal="remove('DATA_LIBUR')"></singleFileUpload>
						</div>
						
						<div class="col-sm-12">
							<div class="card card-body">
								<input  type="button" value="Upload" @click.prevent="submit" class="btn btn-primary ">
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
				
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
		 @backgroundClick="modalBackgroundClick">

		 <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

		</app-modal>
		<tableData></tableData>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import appModal from '../../components/modal';
import Cleave from 'vue-cleave-component';
import singleFileUpload from '../../components/singleFileUpload';
import tableData from "./table.vue";

export default {
    components: {
			pageHeader,
			appModal,
			Cleave,
			singleFileUpload,
			tableData,
		},
		data() {
			return {
				// tipe:'single',
				// cekTipe:true,
				isLoading:true,
				selectedItem:null,
				title: 'Import ESCETE',
				titleDesc: 'Melakukan upload data CSV ESCETE',
				titleIcon: 'icon-file-upload2',
				kelas: 'testUpload',
				loadingCount:[],
				files:[],
				fileCounter:0,
				modalShow: false,
				isDraft: false,
				//flag sesuaikan dengan jumlah file yang  mau diupload
				flagRekening: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
			}
		},

		watch:{
			loadingCount: function() {
				
				if(this.loadingCount.length!=0){
					if(this.loadingCount.length == this.fileCounter){
						this.files=[]
						this.loadingCount=[]
						this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu, this.currentUser.id]);
						this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
					}
				}
			},

			uploadStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value == "success"){
					this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu]);
					this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
					this.modalTitle = this.uploadResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.uploadResponse;
				}
			},

			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value == "success"){
					this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu]);
					this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},


			files: function () {
				if(this.files.length==0){
					this.isLoading = true
				}
			},

			tipe: function () {
				if (this.tipe=='single') {
					this.cekTipe = true
				}else{
					this.cekTipe=false
				}
			}
		},

		created() {
			this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu, this.currentUser.id]);
			this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
		},


		methods: {
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				if (isMobile) {
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus file '+ this.selectedItem.file_name + '?';
					this.modalButton = 'Iya, Hapus';
				}
				
				if(state=='upload_draft'){
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Upload file ke draft?';
					this.modalButton = 'Upload';
				}

				if(state=='simpan_draft'){
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'simpan draft?';
					this.modalButton = 'Upload';
				}
			},
	
			modalConfirmOk() {
				this.modalShow = false;
			
			},
			modalTutup() {

				// if(this.state == 'hapus'){
					this.modalShow = false
				// }
			},
			modalBackgroundClick() {
				if (this.modalState == 'success') {
					this.modalTutup;
				} else if (this.modalState == 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
				this.isDisableTablePeserta = false;
			},

			submit(){
				this.loadingCount = []
				this.isLoading = true
				this.$refs.formData.submit2()	
			},

			setLoadingStat(value){
				this.loadingCount.push(value);
			},

			// setFileCount(value){
			// 	this.isLoading = false
			// 	//pengecekan if sesuaikan dengan jumlah file yang mau di upload
			// 	if(this.flagRekening==false && value.name == 'DATA_REKENING'){
			// 		this.flagRekening = true
			// 		this.fileCounter++
			// 	}
			// 	let file = {'name': value.name, 'file':value.file}
			// 	this.files.push(file)
			// },

			remove(value){
				if(this.flagRekening==true && value == 'DATA_REKENING'){
					this.flagRekening = false
					this.fileCounter--
				}
				let i = this.files.map(item => item.name).indexOf(value)
				this.files.splice(i,1)
			},

			setSelectedItem(file){
				this.selectedItem = file;
			},


			 SimpanDraft(){
				// console.log(this.currentUser.id_cu);
				
			 },

			//  onCuChange(e){
			// 	console.log(e);
			// }
		},

		computed: {
		...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		...mapGetters('anggotaCuImportEscete',{
				uploadResponse:'update',
				uploadStat : 'updateStat',
				Draft :'isDraft'
		}),
		...mapGetters('fileUpload',{
				dataS :'dataS',
				updateResponse:'update',
				updateStat : 'updateStat'
		}),
		...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
	},
}
</script>