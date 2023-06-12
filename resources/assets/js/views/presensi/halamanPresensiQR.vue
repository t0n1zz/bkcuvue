<template>
	<div>
	  <div class="d-flex justify-content-center">
	   <h1 class="text-center" style="font-weight: 700;">PRESENSI</h1>
	  </div>
	  <div class="d-flex justify-content-center">
		<qr-presensi  :id_qr="this.id_qr" @qrChanged="kode = $event"></qr-presensi>
	  </div>
		<div style="margin-top: 20px;">
			<h2 class="text-center" style="font-weight: 300;">JIKA PERANGKAT ANDA TIDAK MENDUKUNG PEMINDAIAN QR KUNJUNGI LINK BERIKUT</h2>
			<h2 class="text-center" style="font-weight: 300;">puskopcuina.org/admins/presensiInputKode ATAU AKSES MENU Organisasi->Presensi->Isi Presensi Dengan Kode</h2>
			<h2 class="text-center" style="font-weight: 300;">DAN MASUKKAN KODE BERIKUT</h2>
			<h1 class="text-center" style="font-weight: 700;">{{ kode }}</h1>
		</div>
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
		 @backgroundClick="modalBackgroundClick">
		</app-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import appModal from '../../components/modal';
import Cleave from 'vue-cleave-component';
import qrPresensi from '../../components/qrPresensi.vue';

export default {
    components: {
			pageHeader,
			appModal,
            Cleave,
			qrPresensi,
		},
		data() {
			return {
				error: '',
				lat:'',
				lon:'',
				qrValue: '',
				isLoading:true,
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'testUpload',
				level2Title: 'Upload Data Anggota',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				kode: '',
				id_qr: '',
				permission: false
			}
		},


		watch:{
			
		},

		created() {
			this.id_qr = this.$route.params.id_qr
		},

		methods: {
			changeCode (value) { 
				this.kode = value
			},
			
			modalOpen(state) {
				this.modalShow = true;
				if (isMobile) {
					this.selectedItem = itemMobile;
				}
			},
	
			modalConfirmOk() {
				this.modalShow = false;
			},
			modalTutup() {
				this.modalShow = false
			},

			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
			},
		},

		computed: {
		...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		...mapGetters('anggotaCuImportEscete',{
				
				Draft :'isDraft'
		}),
		...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
	},
}
</script>