<template>
	<div>
		<!-- button bar -->
		<div class="navbar navbar-default navbar-xs navbar-component">
			<ul class="nav navbar-nav no-border visible-xs-block">
				<li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-filter"><i class="icon-menu7"></i></a></li>
			</ul>

			<div class="navbar-collapse collapse" id="navbar-filter">
				<ul class="nav navbar-nav">
					<li class="dropdown">
						<a class="dropdown-toggle" @click.prevent="modalTambah()"><i class="icon-plus3"></i> Tambah</a>
					</li>
				</ul>		
			</div>
		</div>

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
							<li><a data-popup="tooltip" data-container="body" title="Ubah" @click.prevent="modalUbah(index)"><i class="icon-pencil5"></i></a></li>
							<li><a data-popup="tooltip" data-container="body" title="Hapus" @click.prevent="modalHapus()"><i class="icon-bin2"></i></a></li>
						</ul>
					</div>
				</div>

				<div class="media panel-body no-margin">
					<div class="media-left">
						<a href="#">
							<img src="/images/no_image_man.jpg" style="width: 40px; height: 40px;" class="img-circle" alt="">
						</a>
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
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">
				<h5>Silahkan masukkan komentar anda terhadap laporan keuangan ini</h5>
				<app-summernote name="editor" :model="form.content" :config="summernoteconfig" @change="value => { form.content = value }"></app-summernote>

				<hr>
				<div class="text-center hidden-xs">
					<button type="button" @click.prevent="modalTutup" class="btn btn-default" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>

					<button type="submit" class="btn btn-primary" v-tooltip:top="'Simpan data perhitungan'" @click.prevent="save()">
						<i class="icon-floppy-disk"></i> Simpan
					</button>
				</div>

				<div class="visible-xs">

					<button type="submit" class="btn btn-primary btn-block" v-tooltip:top="'Simpan data perhitungan'" @click.prevent="save()">
						<i class="icon-floppy-disk"></i> Simpan
					</button>

					<button type="button" @click.prevent="modalTutup" class="btn btn-default btn-block" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
					
				</div>
			</template>

		</app-modal>
	</div>
	
</template>

<script>
	import Vue from 'vue';
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import appSummernote from '../../helpers/summernote.js';
	import appModal from '../../components/modal';
	import Cleave from 'vue-cleave-component';
	export default {
		components:{
			appModal,
			appSummernote,
			Cleave
		},
		props:['kelas','columnData'],
		data(){
			return {
				idCu: '',
				idTp: '',
				periode: '',
				periodeTp: '',
				itemDataBefore: [],
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
					this.$store.dispatch('laporanCuDiskusi/get',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCuDiskusi/get',this.$route.params.id);
				}
			},
			save(){

			},
			modalTambah(){
				this.modalShow = true;
				this.modalTitle = 'Tambah Komentar';
				this.modalState = 'normal1';
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';
			},
			modalUbah(index){
				this.modalShow = true;
				this.modalTitle = 'Ubah Komentar';
				this.modalState = 'normal1';
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';

				this.form.content = this.itemData[index].content;
				this.form.id = this.itemData[index].id;
					console.log(this.form.content);
				
			},
			modalHapus(){

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