<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>
					
					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid  bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'p1'}" @click.prevent="changeTab('p1')">1. PERSPEKTIF KEUANGAN</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'p2'}" @click.prevent="changeTab('p2')">2. PERSPEKTIF ANGGOTA</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'p3'}" @click.prevent="changeTab('p3')">3. PERSPEKTIF BISNIS INTERNAL</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'p4'}" @click.prevent="changeTab('p4')">4. PERSPEKTIF PEMBELAJARAN</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'k'}" @click.prevent="changeTab('k')">5. KESIMPULAN</a>
							</li>
						</ul>
					</div>		
          
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'p1'">
							<form-p1 :form="form"></form-p1>
						</div>
					</transition>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!--  -->
			<template slot="modal-body1">
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formP1 from "./form_p1.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			formP1,
		},
		data() {
			return {
				title: 'Self Assesment ACCESS Branding',
				titleDesc: 'Menambah seft assesment ACCESS branding',
				titleIcon: 'icon-plus3',
				level2Title: 'Artikel',
				kelas: 'artikel',
				tabName: 'p1',
        form: {
					p1a1_cu_penilaian: '',
					p1a1_cu_keterangan: '',
					p1a1_bkcu_penilaian: '',
					p1a1_bkcu_keterangan: '',
					p1a1_bkcu_rekomendasi: '',
					p1a2_cu_penilaian: '',
					p1a2_cu_keterangan: '',
					p1a2_bkcu_penilaian: '',
					p1a2_bkcu_keterangan: '',
					p1a2_bkcu_rekomendasi: '',
				},
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				
			}
		},
		created(){
		},
		watch: {
			formStat(value){
				if(value === "success"){

				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){

			},
			changeTab(value) {
				this.tabName = value;
			},
			save() {
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						}else{
							this.$store.dispatch(this.kelas + '/store', this.form);
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.$route.meta.mode === 'edit' && this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>
