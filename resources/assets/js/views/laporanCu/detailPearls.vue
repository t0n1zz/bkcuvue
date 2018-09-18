<template>
	<div>	
		<div class="row">
			<!-- p1 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.p1 >= 1, 'bg-danger': itemData.p1 < 1}" @click.prevent="modalBuka(itemData,'p1')" style="cursor:pointer;">
					<div class="media mb-3">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.p1 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.p1 >= 1">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>P1</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Provisi pinjaman lalai di atas 12 bulan</b>
				</div>
			</div>
			<!-- p2 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.p2 > 0.35, 'bg-danger': itemData.p2 <= 0.35}" @click.prevent="modalBuka(itemData,'p2')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.p2 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.p2 > 0.35">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>P2</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Provisi pinjaman lalai 1-12 bulan</b>
				</div>
			</div>
			<!-- e1 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.e1 >= 0.7 && itemData.e1 <= 0.8, 'bg-danger': itemData.e1 < 0.7 || itemData.e1 > 0.8}" @click.prevent="modalBuka(itemData,'e1')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.e1 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.e1 >= 0.7 && itemData.e1 <= 0.8">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>E1</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Piutang bersih / total aset</b>
				</div>
			</div>
			<!-- e5 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.e5 >= 0.7 && itemData.e5 <= 0.8, 'bg-danger': itemData.e5 < 0.7 || itemData.e5 > 0.8}" @click.prevent="modalBuka(itemData,'e5')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.e5 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.e5 >= 0.7 && itemData.e5 <= 0.8">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>E5</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Simpanan non saham / total aset</b>
				</div>
			</div>
		</div>

		<div class="row">
			<!-- e6 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.e6 <= 0.05, 'bg-danger': itemData.e6 > 0.05}" @click.prevent="modalBuka(itemData,'e6')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.e6 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.e6 <= 0.05">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>E6</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Pinjaman kepada pihak luar terhadap total aset</b>
				</div>
			</div>
			<!-- e9 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.e9 >= 0.1, 'bg-danger': itemData.e9 < 0.1}" @click.prevent="modalBuka(itemData,'e9')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.e9 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.e9 >= 0.1">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>E9</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Modal lembaga bersih</b>
				</div>
			</div>
			<!-- a1 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.a1 <= 0.05, 'bg-danger': itemData.a1 > 0.05}" @click.prevent="modalBuka(itemData,'a1')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.a1 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.a1 <= 0.05">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>A1</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Total pinjaman lalai / total ipnjaman beredar</b>
				</div>
			</div>
			<!-- a2 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.a2 < 0.05, 'bg-danger': itemData.a2 >= 0.05}" @click.prevent="modalBuka(itemData,'a2')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.a2 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.a2 < 0.05">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>A2</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Aset yang tidak menghasilkan / total aset</b>
				</div>
			</div>
		</div>

		<div class="row">
			<!-- r7 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.r7_1 == itemData.harga_pasar, 'bg-danger': itemData.r7_1 != itemData.harga_pasar}" @click.prevent="modalBuka(itemData,'r7')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.r7_1 | percentage(2) }} / {{ itemData.r7_2 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.r7_1 == itemData.harga_pasar">
								IDEAL / 
							</span>
							<span v-else>
								TIDAK IDEAL / 
							</span>
							<span class="opacity-75" v-if="itemData.r7_2 == itemData.harga_pasar">
								IDEAL  
							</span>
							<span v-else>
								TIDAK IDEAL 
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>R7</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>BJS saham terhadap rata-rata aset</b>
				</div>
			</div>
			<!-- r9 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.r9 == 0.05, 'bg-danger': itemData.r9 < 0.05, 'bg-danger': itemData.r9 > 0.05}" @click.prevent="modalBuka(itemData,'r9')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.r9 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.r9 == 0.05">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>R9</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Biaya operasional terhadap rata-rata aset</b>
				</div>
			</div>
			<!-- l1 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.l1 >= 0.15 && itemData.l1 <= 0.2, 'bg-danger': itemData.l1 < 0.15 || itemData.l1 > 0.2}" @click.prevent="modalBuka(itemData,'l1')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.l1 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.l1 >= 0.15 && itemData.l1 <= 0.2">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>L1</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>(investasi likuid + aset-aset likuid - hutang jangka pendek < 30 hari) / simpanan non saham</b>
				</div>
			</div>
			<!-- s10 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.s10 > 0.12, 'bg-danger': itemData.s10 <= 0.12}" @click.prevent="modalBuka(itemData,'s10')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.s10 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.s10 >= 0.12">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>S10</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Pertumbuhan anggota</b>
				</div>
			</div>
		</div>

		<div class="row">
			<!-- s11 -->
			<div class="col-sm-3">
				<div class="card card-body" :class="{'bg-primary': itemData.s11 > (0.1 + itemData.laju_inflasi), 'bg-danger': itemData.s11 <= (0.1 + itemData.laju_inflasi)}" @click.prevent="modalBuka(itemData,'s11')" style="cursor:pointer;">
					<div class="media no-margin-top content-group">
						<div class="media-body">
							<h6 class="font-weight-semibold mb-8">{{ itemData.s11 | percentage(2) }}</h6>
							<span class="opacity-75" v-if="itemData.s11 > (0.1 + itemData.laju_inflasi)">
								IDEAL
							</span>
							<span v-else>
								TIDAK IDEAL
							</span>
						</div>

						<div class="ml-3 align-self-center">
							<button type="button" class="btn btn-light btn-icon rounded-round">
								<b>S11</b>
							</button>	
						</div>
					</div>

					<!-- separator -->
					<div class="progress bg-blue mb-2" style="height: 0.125rem;">
						<div class="progress-bar bg-white" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>

					<!-- title -->
					<b>Pertumbuhan aset</b>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" @tutup="modalTutup" @successOk ="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">
				<form-katex 
					:kelas="kelas"
					:modalKatex="modalKatex"
					@tutup="modalTutup"></form-katex>
			</template>

		</app-modal>
	</div>
	
</template>

<script>
	import Vue from 'vue';
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import formKatex from './formKatex.vue';
	import appModal from '../../components/modal';
	import Cleave from 'vue-cleave-component';
	export default {
		components:{
			formKatex,
			appModal,
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
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalSize: '',
				modalColor: '',
				modalButton: '',
				modalKatex: {
					id: '',
					id_cu:'',
					no_ba: '',
					periode: '',
					section: '',
					katex1:[],
					katex2:[],
					form: [],
					indikator: '',
					isUbah: false
				},
				form: [],
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
			grafikDataStat(value){
				if(value == 'success'){
					let periodeNow = this.itemData.periode;
					let itemDataSorted = _.orderBy(this.grafikData.data, ['periode'], ['desc']);
					this.itemDataBefore = _.find(itemDataSorted, function(o){
						return o.periode < periodeNow;
					});
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
					this.$store.dispatch('laporanCu/detailPearls',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCu/detailPearlsTp',this.$route.params.id);
				}
			},
			save(){
				this.form = _.chain(this.modalDetail.form).keyBy('key').mapValues('value').value();

				this.form.periode = this.modalDetail.periode;
				if(this.itemData.id_tp){
					this.form.id_tp = this.modalDetail.id_tp;
					this.form.no_tp = this.modalDetailpr.no_tp;
					this.form.id_cu = this.itemData.tp.cu.id;
					this.form.no_ba = this.itemData.tp.cu.no_ba;
					this.$store.dispatch('laporanCu/updateTp', [this.modalDetail.id,this.form]);
				}else{
					this.form.id_cu = this.modalDetail.id_cu;
					this.form.no_ba = this.modalDetail.no_ba;
					this.$store.dispatch('laporanCu/update', [this.modalDetail.id,this.form]);
				}	
			},
			modalBuka(itemData, type){
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';
				this.modalShow = true;
				this.modalState = 'normal1'; 

				this.modalKatex.id = itemData.id;
				this.modalKatex.no_ba = itemData.no_ba;
				this.modalKatex.periode = itemData.periode;
				this.modalKatex.section = 'CU ' + itemData.cu.name + ' periode ' + this.formatPeriode(itemData.periode);
				
				this.modalKatex.id_cu = itemData.id_cu;
				// p1	
				if(type == 'p1'){
					this.modalTitle = 'P1 - Provisi pinjaman lalai di atas 12 bulan';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
					);
					
					this.modalKatex.indikator = '100% provisi tersedia untuk pinjaman lalai di atas 12 bulan dan setiap triwulan dilakukan charge off secara konsisten.';

					let katex1Content1 = '\\text{P1} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{100} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{P1} = \\dfrac{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p1) +' \\% (\\text{'+ (itemData.p1 >=1 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				// p2
				}else if(type == 'p2'){
					this.modalTitle = 'P2 -  Provisi pinjaman lalai 1 - 12 bulan';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
						{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
					);
					
					this.modalKatex.indikator = '35% provisi tersedia untuk pinjaman lalai 1 – 12 bulan dan setiap triwulan dilakukan charge off dari waktu ke waktu';

					let katex1Content1 = '\\text{P2} = \\dfrac{\\text{Saldo Cadangan Resiko setelah P1}[\\text{'+ this.modalKatex.form[0].title +'} - \\text{'+ this.modalKatex.form[1].title +'}]}{\\text{'+ this.modalKatex.form[2].title +'}} \\times \\text{100} \\% = \\text{Di Atas 35} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{P2} = \\dfrac{'+ this.formatCurrency(this.modalKatex.form[0].value) +' - \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p2) +' \\% (\\text{'+ (itemData.p2 >=0.35 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});

					if(itemData.p1 >= 1){
						this.modalKatex.katex2.push({title:'',content:katex2Content1});
					}else{
						this.modalKatex.katex2.push({title:'Karena tidak ada saldo cadangan resiko setelah P1, maka P2 (TIDAK IDEAL)',content:katex2Content1});
					}

				// e1
				}else if(type == 'e1'){
					this.modalTitle = 'E1 - Piutang bersih / total aset';

					if(itemData.p1 >= 1 && itemData.p2 > 0.35){
						this.modalKatex.form.push(
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
							{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
							{title:'Aset',key:'aset',value:itemData.aset},
						);
					}else{
						this.modalKatex.form.push(
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
							{title:'Aset',key:'aset',value:itemData.aset},
						);
					}
					
					this.modalKatex.indikator = 'Rasio Piutang Bersih adalah 70% – 80% dari total aset dan portofolio pinjaman beragam dengan setidaknya 5 macam produk pinjaman yang berbeda';

					let katex1Content1 = '\\text{E1} = \\dfrac{\\text{Piutang Beredar} - ((\\text{100} \\% \\times \\text{Piutang Lalai Di Atas 12 Bulan}) + (\\text{35} \\% \\times \\text{Piutang Lalai 1 - 12 Bulan}))}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})';

					let katex1Content2 = '\\text{E1} = \\dfrac{\\text{Piutang Beredar} - \\text{Cadangan Resiko}}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})';

					let katex2Content1 = '';
					let katex2Title1 = '';
					if(itemData.p1 >= 1 && itemData.p2 > 0.35){
						katex2Title1 = 'Dikarenakan P1 dan P2 (IDEAL), maka rumus yang digunakan adalah rumus 1'
						katex2Content1 = '\\text{E1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} - ((\\text{100} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}) + (\\text{35} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}))}{\\text{'+ this.formatCurrency(this.modalKatex.form[3].value)+'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e1) +' \\% (\\text{'+ (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					}else{
						katex2Title1 = 'Dikarenakan P1 dan P2 (TIDAK IDEAL), maka rumus yang digunakan adalah rumus 2'
						katex2Content1 = '\\text{E1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} - \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e1) +' \\% (\\text{'+ (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					}	

					this.modalKatex.katex1.push(
						{title:'Rumus 1 - apabila P1 dan P2 (IDEAL)',content:katex1Content1},
						{title:'Rumus 2 - apabila P1 dan P2 (TIDAK IDEAL)',content:katex1Content2}
					);
					this.modalKatex.katex2.push({title:katex2Title1 ,content:katex2Content1});
				
				// e5
				}else if(type == 'e5'){
					this.modalTitle = 'E5 - Simpanan non saham / total aset';

					this.modalKatex.form.push(
						{title:'Simpanan Non Saham Unggulan',key:'nonsaham_unggulan',value:itemData.nonsaham_unggulan},
						{title:'Simpanan Non Saham Harian',key:'nonsaham_harian',value:itemData.nonsaham_harian},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Rasio 70% – 80% dari total aset dan memiliki beragam jenis simpanan minimal 5 jenis produk simpanan yang berbeda.';

					let katex1Content1 = '\\text{E5} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'}}{\\text{'+ this.modalKatex.form[2].title +'}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\%(\\text{IDEAL})';

					let katex2Content1 = '\\text{E5} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e5) +' \\% (\\text{'+ (itemData.e5 >= 0.7 && itemData.e5 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				// e6
				}else if(type == 'e6'){
					this.modalTitle = 'E6 - Pinjaman kepada pihak luar terhadap total aset';

					this.modalKatex.form.push(
						{title:'Total Hutang Pihak Ke-3',key:'total_hutang_pihak3',value:itemData.total_hutang_pihak3},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Jumlah pinjaman kepada pihak eksternal 1% – 5% dari total aset.';

					let katex1Content1 = '\\text{E6} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{E6} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) +' \\% ( \\text{'+ (itemData.e6 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				// e9
				}else if(type == 'e9'){
					this.modalTitle = 'E9 - Modal lembaga bersih';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Cadangan Umum',key:'dcu',value:itemData.dcu},
						{title:'Dana Gedung',key:'dana_gedung',value:itemData.dana_gedung},
						{title:'Donasi',key:'donasi',value:itemData.donasi},
						{title:'SHU Tahun Lalu',key:'shu_lalu',value:itemData.shu_lalu},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
						{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
						{title:'Aset Bermasalah',key:'aset_masalah',value:itemData.aset_masalah},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Modal lembaga bersih sebesar 10% dari total aset.';

					let katex1Content1 = '\\text{E9} = \\dfrac{(\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'} + \\text{'+ this.modalKatex.form[2].title +'} + \\text{'+ this.modalKatex.form[3].title +'} + \\text{'+ this.modalKatex.form[4].title +'}) - ((\\text{100} \\% \\times \\text{'+ this.modalKatex.form[5].title +'}) + (\\text{35} \\% \\times \\text{'+ this.modalKatex.form[6].title +'}) + \\text{'+ this.modalKatex.form[7].title +'})}{\\text{'+ this.modalKatex.form[8].title +'}} \\times \\text{100} \\% = \\text{Lebih Dari Sama Dengan 10} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{E9} = \\dfrac{(\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[4].value) +'}) - ((\\text{100} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[5].value) +'}) + (\\text{35} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[6].value) +'}) + \\text{'+ this.formatCurrency(this.modalKatex.form[7].value) +'})}{\\text{'+ this.formatCurrency(this.modalKatex.form[8].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e9) +' \\% ( \\text{'+ (itemData.e9 >= 0.1 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				// a1
				}else if(type == 'a1'){
					this.modalTitle = 'A1 - Total pinjaman lalai / total pinjaman beredar';

					this.modalKatex.form.push(
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
						{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
						{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
					);
					
					this.modalKatex.indikator = 'Total pinjaman lalai &le; 5% dari total pinjaman beredar.';

					let katex1Content1 = '\\text{A1} = \\dfrac{\\text{Total Pinjaman Lalai}[\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'}]}{\\text{'+ this.modalKatex.form[2].title +'}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{A1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.a1) +' \\% ( \\text{'+ (itemData.a1 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				// a2	
				}else if(type == 'a2'){
					this.modalTitle = 'A2 - Aset yang tidak menghasilkan / total aset';

					this.modalKatex.form.push(
						{title:'Aset Tidak Menghasilkan',key:'aset_tidak_menghasilkan',value:itemData.aset_tidak_menghasilkan},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Aset tidak menghasilkan 5% dari total aset.';

					let katex1Content1 = '\\text{A2} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{A2} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) +' \\% ( \\text{'+ (itemData.a6 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				// r7
				}else if(type == 'r7'){
					this.modalTitle = 'R7 - BJS saham terhadap rata-rata aset';

					this.modalKatex.form.push(
						{title:'BJS Saham',key:'bjs_saham',value:itemData.bjs_saham},
						{title:'Simpanan Saham Bulan Desember',key:'simpanan_saham_des',value:itemData.aset},
						{title:'Simpanan Saham Bulan ' + this.formatPeriodeMonth(itemData.periode),key:'simpanan_saham',value:itemData.simpanan_saham},
						{title:'Simpanan Saham Tahun Lalu',key:'simpanan_saham_lalu',value:itemData.simpanan_saham_lalu},
						{title:'Harga Pasar',key:'harga_pasar',value:itemData.harga_pasar},
					);
					
					this.modalKatex.indikator = 'Dividen saham dibayar 1% lebih tinggi daripada suku bunga pasar';

					if(itemData.simpanan_saham_des != 0){
						let katex1Content1 = '\\text{R7} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{'+ this.modalKatex.form[1].title +'} + \\text{'+ this.modalKatex.form[2].title +'}}{\\text{Jumlah Bulan Berjalan}} \\times \\text{12})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})';

						let katex2Content1 = '\\text{R7} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{(\\frac{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}}{\\text{'+ this.formatPeriodeMonth(itemData.periode) +'}} \\times \\text{12})} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.r7_1) +' \\% ( \\text{'+ (itemData.r7_1 == itemData.harga_pasar ? 'IDEAL' : 'TIDAK IDEAL') +'})';

						this.modalKatex.katex1.push(
							{title:'Jika simpanan saham bersumber dari saldo bulan desember tahun lalu',content:katex1Content1}
						);
						this.modalKatex.katex2.push(
							{title:'',content:katex2Content1}
						);
					}
					
					if(itemData.simpanan_saham_lalu != 0){
						let katex1Content2 = '\\text{R7} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{'+ this.modalKatex.form[3].title +'} + \\text{'+ this.modalKatex.form[2].title +'}}{\\text{2}})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})';

						let katex2Content2 = '\\text{R7} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{(\\frac{\\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}}{\\text{2}})} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.r7_2) +' \\% ( \\text{'+ (itemData.r7_2 == itemData.harga_pasar ? 'IDEAL' : 'TIDAK IDEAL') +'})';
						
						this.modalKatex.katex1.push(
							{title:'Jika simpanan saham bersumber dari saldo tahun lalu bulan ' + this.formatPeriodeMonth(itemData.periode),content:katex1Content2}
						);
						this.modalKatex.katex2.push(
							{title:'',content:katex2Content2}
						);
					}	
					
				//r9	
				}else if(type == 'r9'){
					this.modalTitle = 'R9 - biaya operasional terhadap rata-rata aset';

					this.modalKatex.form.push(
						{title:'Total Biaya',key:'total_biaya',value:itemData.total_biaya},
						{title:'Beban Penyisihan Cadangan Resiko',key:'beban_penyisihan_dcr',value:itemData.beban_penyisihan_dcr},
						{title:'Aset',key:'aset',value:itemData.aset},
						{title:'Aset Tahun Lalu',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Beban operasional terhadap rata-rata aset sebesar 5%.';

					let katex1Content1 = '\\text{R9} = \\dfrac{\\text{Beban Operasional}(\\text{'+ this.modalKatex.form[0].title +'} - \\text{'+ this.modalKatex.form[1].title +'})}{\\text{Rata-rata Aset}(\\frac{\\text{'+ this.modalKatex.form[2].title +'} - \\text{'+ this.modalKatex.form[3].title +'}}{\\text{2}})} \\times \\text{100} \\% = \\text{5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{R9} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\frac{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'}}{\\text{2}}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) +' \\% ( \\text{'+ (itemData.r9 == 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				//l1
				}else if(type == 'l1'){
					this.modalTitle = 'L1 - (investasi likuid + aset-aset likuid - hutang jangka pendek < 30 Hari) / simpanan non saham';

					this.modalKatex.form.push(
						{title:'Investasi Likuid',key:'investasi_likuid',value:itemData.investasi_likuid},
						{title:'Aset Likuid Tidak Menghasilkan',key:'aset_likuid_tidak_menghasilkan',value:itemData.aset_likuid_tidak_menghasilkan},
						{title:'Hutang Tidak Berbiaya < 30 Hari',key:'hutang_tidak_berbiaya_30hari',value:itemData.hutang_tidak_berbiaya_30hari},
						{title:'Total Simpanan Non Saham',key:'tot_nonsaham',value:itemData.tot_nonsaham},
					);
					
					this.modalKatex.indikator = 'Likuiditas sebesar 15% dari total simpanan non saham tetapi tidak melampaui 20% dari total aset.';

					let katex1Content1 = '\\text{L1} = \\dfrac{(\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'}) - \\text{'+ this.modalKatex.form[2].title +'}}{\\text{'+ this.modalKatex.form[3].title +'}} \\times \\text{100} \\% = \\text{15} \\% \\text{ Sampai } \\text{20} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{L1} = \\dfrac{(\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}) - \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.l1) +' \\% (\\text{'+ (itemData.l1 >= 0.15 && itemData.l1 <= 0.2 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				//s10	
				}else if(type == 's10'){
					this.modalTitle = 'S10 - Pertumbuhan anggota';

					this.modalKatex.form.push(
						{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa},
						{title:'Lelaki L. Biasa',key:'l_lbiasa',value:itemData.l_lbiasa},
						{title:'Perempuan Biasa',key:'p_biasa',value:itemData.p_biasa},
						{title:'Perempuan L.Biasa',key:'p_lbiasa',value:itemData.p_lbiasa},
						{title:'Total Anggota',key:'total_anggota',value:itemData.total_anggota, hideForm: true},
						{title:'Total Anggota Tahun Lalu',key:'total_anggota_lalu',value:itemData.total_anggota_lalu},
					);
					
					this.modalKatex.indikator = 'Pertumbuhan anggota di atas 12% per tahun.';

					let katex1Content1 = '\\text{s10} = \\dfrac{\\text{'+ this.modalKatex.form[4].title +'} - \\text{'+ this.modalKatex.form[5].title +'}}{\\text{'+ this.modalKatex.form[5].title +'}} \\times \\text{100} \\% = \\text{Di Atas 12} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{s10} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[4].value) +'}} - \\text{'+ this.formatCurrency(this.modalKatex.form[5].value) +'}{\\text{'+ this.formatCurrency(this.modalKatex.form[5].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.s10) +' \\% ( \\text{'+ (itemData.s10 > 0.12 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				//s11
				}else if(type == 's11'){
					this.modalTitle = 'S11 - Pertumbuhan aset';

					this.modalKatex.form.push(
						{title:'Aset',key:'aset',value:itemData.aset},
						{title:'Aset Tahun Lalu',key:'aset_lalu',value:itemData.aset_lalu},
					);
					
					this.modalKatex.indikator = 'Pertumbuhan aset 10% di atas laju inflasi.';

					let katex1Content1 = '\\text{s11} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'} - \\text{'+ this.modalKatex.form[1].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{10} \\% \\text{ Di Atas Laju Inflasi} (\\text{IDEAL})';

					let katex2Content1 = '\\text{S11} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}} - \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.s11) +' \\% ( \\text{'+ (itemData.s11 > (itemData.laju_inflasi + 0.1) ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				}
			},
			modalKatexReset(){
				this.modalKatex.isUbah = false;
				this.modalKatex.katex1 = [];
				this.modalKatex.katex2 = [];
				this.modalKatex.form = [];
			},
			modalTutup(){
				this.modalSize = '';
				this.modalShow = false;
				this.modalKatexReset();
			},
			formatPeriode(value){
				return Vue.filter('month')(value) + ' ' + Vue.filter('year')(value);
			},
			formatPeriodeMonth(value){
				return Vue.filter('month')(value);
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
			...mapGetters('laporanCu',{
				itemData: 'pearls',
				itemDataStat: 'pearlsStat',
				grafikData: 'grafikPearls',
				grafikDataStat: 'grafikPearlsStat',
				modelPeriode: 'periode',
				modelPeriodeStat: 'periodeStat',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('laporanTp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
		}
	}
</script>