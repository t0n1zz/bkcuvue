<template>
	<div>
		<!-- itemdata -->
		<div v-if="itemData.length > 0">
			<div class="panel panel-white border-top-xlg border-top-info" v-for="(diskusi,index) in itemData" >
				<div class="panel-heading">
					<h6 class="panel-title">
						<b>{{diskusi.user.name}}</b> 
						<span class="text-muted">
							<i class="icon-primitive-dot"></i>
							<small v-html="$options.filters.dateTime(diskusi.created_at)"></small>	
						</span>
						<a class="heading-elements-toggle"><i class="icon-more"></i></a>
					</h6>

					<div class="heading-elements">
						<ul class="icons-list icons-list-extended heading-text">
							<li><a data-popup="tooltip" data-container="body" title="Ubah" @click.prevent="modalUbah(diskusi)"><i class="icon-pencil5"></i></a></li>
							<li><a data-popup="tooltip" data-container="body" title="Hapus" @click.prevent="modalHapus(diskusi)"><i class="icon-bin2"></i></a></li>
						</ul>
					</div>
				</div>

				<div class="media panel-body no-margin">
					<div class="media-left">
						<img :src="'/images/user/' + diskusi.user.gambar + 'n.jpg'" style="width: 40px; height: 40px;" class="img-circle"  alt="user image" v-if="diskusi.user.gambar">
						<img src="/images/no_image_man.jpg" style="width: 40px; height: 40px;" class="img-circle" alt="user image" v-else>
					</div>

					<div class="media-body">
						<p v-html="diskusi.content"></p> 
					</div>
				</div>
				
			</div>
		</div>

		<!-- no itemdata -->
		<div v-else>
			<div class="panel panel-white">
				<div class="panel-body">
					<h3>Belum terdapat diskusi apapun...</h3>
				</div>
			</div>
		</div>

		<div class="panel panel-white border-top-xlg border-top-info">
			<div class="panel-body">
				<h5>Silahkan masukkan komentar anda terhadap laporan keuangan ini</h5>
				<app-summernote name="editor" :model="form.content" :config="summernoteconfig" @change="value => { form.content = value }"></app-summernote>

				<hr>

				<button type="submit" class="btn btn-primary btn-block" v-tooltip:top="'Masukkan komentar'" @click.prevent="save()">
					<i class="icon-floppy-disk"></i> Simpan
				</button>
			</div>
		</div>
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">
				<app-summernote name="editor" :model="form.content" :config="summernoteconfig" @change="value => { form.content = value }"></app-summernote>
			</template>

		</app-modal>
	</div>
	
</template>

<script>
	import Vue from 'vue';
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import { toMulipartedForm } from '../../helpers/form';
	import appSummernote from '../../helpers/summernote.js';
	import appModal from '../../components/modal';
	import Cleave from 'vue-cleave-component';

	export default {
		components:{
			appModal,
			appSummernote,
			Cleave
		},
		data(){
			return {
				kelas: 'laporanCuDiskusi',
				idCu: '',
				idTp: '',
				periode: '',
				periodeTp: '',
				selectedItem: [],
				summernoteconfig: {
					height: 200,
					popover: {
						image: [
							/* ['float', ['floatLeft', 'floatRight', 'floatNone']], */
							/* Those are the old regular float buttons */
							['floatBS', ['floatBSLeft', 'floatBSNone', 'floatBSRight']],
							/* Those come from the BS plugin, in any order, you can even keep both! */
							['custom', ['imageAttributes', 'imageShape']],
							['remove', ['removeMedia']],
						],
					},
					toolbar: [
						['style', ['addclass', 'bold', 'italic', 'underline', 'hr']],
						['font', ['strikethrough', 'superscript', 'subscript', 'clear']],
						['color', ['color']],
						['para', ['ul', 'ol']],
						['paragraph', ['paragraph']],
						['table', ['table']],
						['insert', ['link']],
						['misc', ['fullscreen']],
						['misc2', ['undo', 'redo']]
					]
				},
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalSize: '',
				modalColor: '',
				modalButton: '',
				form: {
					id: '',
					id_laporan: '',
					id_user: '',
					content: '',
				},
				cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
				},
			}
		},
		created(){
			this.fetch();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		mounted(){
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetch();
			},
			profileStat(value){
				if(value == 'success'){
					this.form.id_user = this.profile.id;
				}
			},
			itemDataStat(value){
				if(value == 'success'){
				}
			},
			// when updating data
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
			fetch(){
				if(this.$route.meta.mode == 'detail'){
					this.$store.dispatch(this.kelas +'/get',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCuDiskusi/get',this.$route.params.id);
				}
			},
			save(){
				this.form.id_laporan = this.$route.params.id;
				this.form.id_user = this.profile.id;

				this.$store.dispatch(this.kelas + '/store', this.form);
				
				this.modalShow = true;
				this.modalSize = '';
				this.modalColor = '';
			},
			modalTambah(){
				this.modalShow = true;
				this.modalTitle = 'Tambah Komentar';
				this.modalState = 'normal1';
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';
			},
			modalUbah(item){
				this.modalShow = true;
				this.modalTitle = 'Ubah Komentar';
				this.modalState = 'normal1';
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';

				this.selectedItem = item;
				this.form.content = item.content;
			},
			modalHapus(item){
				this.modalShow = true;
				this.modalTitle = 'Hapus Komentar ini?';
				this.modalState = 'confirm-tutup';
				this.modalSize = '';
				this.modalColor = '';
				this.modalButton = 'Iya, Hapus';

				this.selectedItem = item
			},
			modalConfirmOk(){
				this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
			},
			modalTutup(){
				this.modalShow = false;
			},
			formatPeriode(value){
				return Vue.filter('month')(value) + ' ' + Vue.filter('year')(value);
			},
			formatCurrency(value){
				return this.$options.filters.currency(value,'',0,{ thousandsSeparator: '.'});
			},
			formatPercentage(value){
				return Vue.filter('percentage2')(value,2);
			},
			countTotal(value1,value2){
				return value1 - value2;
			},
			countPercentage(value1,value2){
				if(value2 > 0){
					return this.formatPercentage((this.countTotal(value1,value2) / value2));
				}else{
					return this.formatPercentage('0');
				}
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('laporanCuDiskusi',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>