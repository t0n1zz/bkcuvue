<template>
    <div>
        <!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>
			<singleFileUpload title="DATA_ANGGOTA" ref="formAnggota" @LoadingStat="setLoadingStat" @fileSelected="setFileCount" @fileBatal="remove('DATA_ANGGOTA')"></singleFileUpload>
			<singleFileUpload title="DATA_REKENING" ref="formRekening" @LoadingStat="setLoadingStat" @fileSelected="setFileCount" @fileBatal="remove('DATA_REKENING')"></singleFileUpload>
			<singleFileUpload title="DATA_DIKLAT" ref="formDiklat" @LoadingStat="setLoadingStat" @fileSelected="setFileCount" @fileBatal="remove('DATA_DIKLAT')"></singleFileUpload>
		<div class="row" style="margin-left:20px; margin-bottom:20px" >
			<input :disabled="isLoading" type="button" value="Upload" @click.prevent="submit" class="btn btn-danger btn-sm">
        </div>
		<div class="container-fluid">
            <div class="card" style="margin-right:10px; margin-left:10px;">
                <div class="card-header">
                    <h3 class="card-title">List File</h3>
                </div>
                <div class="card-body">
                    <div  v-for="file in dataS">
						<div class="card" style="width: auto; " >
							<div class="card-body">
								<h3 class="card-title">{{file.tipe}}</h3>
								<h5 class="card-title">{{file.file_name}}</h5>
								<input  type="button" value="HAPUS" v-on:click.prevent="setSelectedItem(file)" @click.prevent="modalOpen('hapus')" class="btn btn-danger btn-sm">
							</div>
						</div>
					</div>
                </div>
            </div>
			<input v-if="currentUser.id_cu==0" :disabled="dataS.length<=0" type="button" value="Upload Ke Draft" @click.prevent="uploadDraft('single')" class="btn btn-danger btn-sm" style="margin-left:10px; margin-bottom:10px">
			//batch upload jika langsung memasukan file dari FTP tanpa melalui halaman upload
			<input v-if="currentUser.id_cu==0" type="button" value="Batch Upload Ke Draft" @click.prevent="uploadDraft('batch')" class="btn btn-danger btn-sm" style="margin-left:10px; margin-bottom:10px">
			<input v-if="currentUser.id_cu!=0" :disabled="dataS.length<=0" type="button" value="Upload Ke Draft" @click.prevent="uploadDraft('single')" class="btn btn-danger btn-sm" style="margin-left:10px; margin-bottom:10px">
        </div>

		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
		 @backgroundClick="modalBackgroundClick">

		 <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

		</app-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import appModal from '../../components/modal';
import Cleave from 'vue-cleave-component';
import singleFileUpload from '../../components/singleFileUpload';

export default {
    components: {
			pageHeader,
			appModal,
            Cleave,
			singleFileUpload
		},
		data() {
			return {
				isLoading:true,
				selectedItem:null,
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'testUpload',
				level2Title: 'Upload Data Anggota',
				loadingCount:[],
				files:[],
				fileCounter:0,
				modalShow: false,
				//flag sesuaikan dengan jumlah file yang  mau diupload
				flagRekening: false,
				flagAnggota: false,
				flagDiklat: false,
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
						this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
					}
				}
			},

			uploadStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
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
			}
		},

		created() {
			this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
		},
		mounted() {
			
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
					this.modalTitle = 'Hapus file '+ this.selectedItem.file_name;
					this.modalButton = 'Iya, Hapus';}
			},
	
			modalConfirmOk() {
				this.modalShow = false;
				this.$store.dispatch('fileUpload/destroy', this.selectedItem.id);
			},
			modalTutup() {

				if(this.state == 'hapus'){
					this.modalShow = false
				}
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
				this.isDisableTablePeserta = false;
			},
			submit(){
				this.loadingCount = []
				this.isLoading = true
				if(this.flagDiklat===true){
					this.$refs.formDiklat.submit()	
				}
				if(this.flagAnggota===true){
					this.$refs.formAnggota.submit()
				}
				if(this.flagRekening===true){
					this.$refs.formRekening.submit()	
				}
			},
			setLoadingStat(value){
				this.loadingCount.push(value);
			},
			setFileCount(value){
				this.isLoading = false
				//pengecekan if sesuaikan dengan jumlah file yang mau di upload
				if(this.flagAnggota===false && value.name ==='DATA_ANGGOTA'){
					this.flagAnggota = true
					this.fileCounter++
				}else if(this.flagRekening===false && value.name === 'DATA_REKENING'){
					this.flagRekening = true
					this.fileCounter++
				}else if(this.flagDiklat===false && value.name === 'DATA_DIKLAT'){
					this.flagDiklat = true
					this.fileCounter++
				}
				let file = {'name': value.name, 'file':value.file}
				this.files.push(file)
			},

			remove(value){
				if(this.flagAnggota===true && value ==='DATA_ANGGOTA'){
					this.flagAnggota = false
					this.fileCounter--
				}else if(this.flagRekening===true && value === 'DATA_REKENING'){
					this.flagRekening = false
					this.fileCounter--
				}else if(this.flagDiklat===true && value === 'DATA_DIKLAT'){
					this.flagDiklat = false
					this.fileCounter--
				}
				let i = this.files.map(item => item.name).indexOf(value)
				this.files.splice(i,1)
			},

			setSelectedItem(file){
				this.selectedItem = file;
			},

			 uploadDraft(tipe){
				this.$store.dispatch('fileUpload/draft', [this.currentUser.id_cu, this.currentUser.id, tipe]);
			 }
		},

		computed: {
		...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		...mapGetters('fileUpload',{
				dataS :'dataS',
				updateResponse:'update',
				uploadStat : 'updateStat'
		})
	},
}
</script>