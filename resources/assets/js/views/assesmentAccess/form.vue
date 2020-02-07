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

          <div class="card">
            <div class="card-body">
              <div class="form-group">
									<label class="font-weight-semibold">P1 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai > 12 bulan</label>

                  <div class="card">
                    <div class="card-header bg-white header-elements-inline">
                      <h6 class="card-title">Poor (1)</h6>
                      <div class="header-elements">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="unstyled-radio-left" checked="">
                        </label>
                      </div>
                    </div>
                    
                    <div class="card-body">
                      Kurang dari 50% perse-diaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header bg-white header-elements-inline">
                      <h6 class="card-title">Fair (2)</h6>
                      <div class="header-elements">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="unstyled-radio-left" checked="">
                        </label>
                      </div>
                    </div>
                    
                    <div class="card-body">
                      50-99% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)
                    </div>
                  </div>

								</div>
            </div>
            <div class="table-responsive table-scrollable" style="max-height: 33rem;">
              <table class="table table-striped">
                <thead class="bg-primary">
                  <tr class="d-flex">
                    <th class="col-1">No.</th>
                    <th class="col-2">Aspek Penilaian</th>
                    <th class="col-2">Poor (1)</th>
                    <th class="col-2">Fair (2)</th>
                    <th class="col-2">Good (3)</th>
                    <th class="col-2">Excellent (4)</th>
                    <th class="col-2">Nilai</th>
                    <th class="col-2">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="d-flex">
                    <td class="col-1">1</td>
                    <td class="col-1">
                      
                    </td>
                    <td class="col-2">
                      
                    </td>
                    <td class="col-2">
                      
                    </td>
                    <td class="col-2">
                      100% persediaan DCR untuk kredit lalai di atas 12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan.
                    </td>
                    <td class="col-2">
                      100% persediaan DCR untuk kredit lalai di atas 12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap triwulan atau secara berkala dan konsisten
                    </td>
                    <td class="col-1">
                      <select name="status" data-width="100%" class="form-control" v-model="form.status1a1">
                        <option disabled value="">Silahkan pilih nilai</option>
                        <option value="1">Poor (1)</option>
                        <option value="2">Fair (2)</option>
                        <option value="3">Good (3)</option>
                        <option value="4">Excellent (4)</option>
                      </select>
                    </td>
                    <td class="col-1"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          

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

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
		},
		data() {
			return {
				title: 'Self Assesment ACCESS Branding',
				titleDesc: 'Menambah seft assesment ACCESS branding',
				titleIcon: 'icon-plus3',
				level2Title: 'Artikel',
				kelas: 'artikel',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
        submited: false,
        form: {},
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
