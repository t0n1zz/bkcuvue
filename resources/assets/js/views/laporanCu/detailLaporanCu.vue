<template>
	<div>

		<div class="timeline timeline-left content-group">
			<div class="timeline-container">
				<div class="timeline-row">
					<div class="timeline-icon">
						<div class="bg-blue">
							<i class="icon-people"></i>
						</div>
					</div>

					<div class="row">		
						<div class="col-sm-3">
								<widget-data
								title="lelaki biasa"
								:itemData="itemData.l_biasa"
								:itemDataBefore="itemDataBefore.l_biasa"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="lelaki l.biasa"
								:itemData="itemData.l_lbiasa"
								:itemDataBefore="itemDataBefore.l_lbiasa"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="perempuan biasa"
								:itemData="itemData.p_biasa"
								:itemDataBefore="itemDataBefore.p_biasa"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="perempuan l.biasa"
								:itemData="itemData.p_lbiasa"
								:itemDataBefore="itemDataBefore.p_lbiasa"
								></widget-data>
						</div>
					</div>
					<div class="row">		
						<div class="col-sm-3">
								<widget-data
								title="total anggota"
								:itemData="itemData.total_anggota"
								:itemDataBefore="itemDataBefore.total_anggota"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="total anggota lalu"
								:itemData="itemData.total_anggota_lalu"
								:itemDataBefore="itemDataBefore.total_anggota_lalu"
								></widget-data>
						</div>
					</div>

					<!-- separator -->
					<div class="row"><hr/></div> 
					<!-- separator -->
				</div>

				<div class="timeline-row">
					<div class="timeline-icon">
						<div class="bg-orange">
							<i class="icon-briefcase3"></i>
						</div>
					</div>

					<div class="row">	
						<div class="col-sm-3">
							<widget-data
								title="aset"
								:itemData="itemData.aset"
								:itemDataBefore="itemDataBefore.aset"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="aset lalu"
								:itemData="itemData.aset_lalu"
								:itemDataBefore="itemDataBefore.aset_lalu"
								></widget-data>
						</div>	
						<div class="col-sm-3">
								<widget-data
								title="aset masalah"
								:itemData="itemData.aset_masalah"
								:itemDataBefore="itemDataBefore.aset_masalah"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="aset tidak menghasilkan"
								:itemData="itemData.aset_tidak_menghasilkan"
								:itemDataBefore="itemDataBefore.aset_tidak_menghasilkan"
								></widget-data>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<widget-data
								title="aktiva lancar"
								:itemData="itemData.aktiva_lancar"
								:itemDataBefore="itemDataBefore.aktiva_lancar"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="rata-rata aset"
								:itemData="itemData.rata_aset"
								:itemDataBefore="itemDataBefore.rata_aset"
								></widget-data>
						</div>
					</div>

					<!-- separator -->
					<div class="row"><hr/></div> 
					<!-- separator -->
				</div>	

				<div class="timeline-row">
					<div class="timeline-icon">
						<div class="bg-brown">
							<i class="icon-piggy-bank"></i>
						</div>
					</div>

					<div class="row">		
						<div class="col-sm-3">
							<widget-data
								title="simp. saham"
								:itemData="itemData.simpanan_saham"
								:itemDataBefore="itemDataBefore.simpanan_saham"
								></widget-data>
						</div>
						<div class="col-sm-3">
								<widget-data
								title="simp. saham lalu"
								:itemData="itemData.simpanan_saham_lalu"
								:itemDataBefore="itemDataBefore.simpanan_saham_lalu"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="simp. saham des"
								:itemData="itemData.simpanan_saham_des"
								:itemDataBefore="itemDataBefore.simpanan_saham_des"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="simp. nonsaham unggulan"
								:itemData="itemData.nonsaham_unggulan"
								:itemDataBefore="itemDataBefore.nonsaham_unggulan"
								></widget-data>
						</div>
					</div>	
					<div class="row">	
						<div class="col-sm-3">
							<widget-data
								title="simp. nonsaham harian"
								:itemData="itemData.nonsaham_harian"
								:itemDataBefore="itemDataBefore.nonsaham_harian"
								></widget-data>
						</div>	
						<div class="col-sm-3">
								<widget-data
								title="hutang spd"
								:itemData="itemData.hutang_spd"
								:itemDataBefore="itemDataBefore.hutang_spd"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="hutang tidak berbiaya"
								:itemData="itemData.hutang_tidak_berbiaya_30hari"
								:itemDataBefore="itemDataBefore.hutang_tidak_berbiaya_30hari"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="total hutang pihak ke-3"
								:itemData="itemData.total_hutang_pihak3"
								:itemDataBefore="itemDataBefore.total_hutang_pihak3"
								></widget-data>
						</div>
					</div>
					<div class="row">	
						<div class="col-sm-3">
							<widget-data
								title="piutang beredar"
								:itemData="itemData.piutang_beredar"
								:itemDataBefore="itemDataBefore.piutang_beredar"
								></widget-data>
						</div>	
						<div class="col-sm-3">
								<widget-data
								title="piutang bersih"
								:itemData="itemData.piutang_bersih"
								:itemDataBefore="itemDataBefore.piutang_bersih"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="piutang anggota"
								:itemData="itemData.piutang_anggota"
								:itemDataBefore="itemDataBefore.piutang_anggota"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="piutang lalai 1-12 bulan"
								:itemData="itemData.piutang_lalai_1bulan"
								:itemDataBefore="itemDataBefore.piutang_lalai_1bulan"
								:isOpposite="true"
								></widget-data>
						</div>
					</div>
					<div class="row">		
						<div class="col-sm-3">
							<widget-data
								title="piutang lalai > 12 bulan"
								:itemData="itemData.piutang_lalai_12bulan"
								:itemDataBefore="itemDataBefore.piutang_lalai_12bulan"
								:isOpposite="true"
								></widget-data>
						</div>
						<div class="col-sm-3">
								<widget-data
								title="rasio piutang beredar"
								:itemData="itemData.rasio_beredar"
								:itemDataBefore="itemDataBefore.rasio_beredar"
								:isPercent="true"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="rasio piutang lalai"
								:itemData="itemData.rasio_lalai"
								:itemDataBefore="itemDataBefore.rasio_lalai"
								:isPercent="true"
								:isOpposite="true"
								></widget-data>
						</div>
					</div>

					<!-- separator -->
					<div class="row"><hr/></div> 
					<!-- separator -->
				</div>

				<div class="timeline-row">
					<div class="timeline-icon">
						<div class="bg-danger">
							<i class="icon-lifebuoy"></i>
						</div>
					</div>

					<div class="row">	
						<div class="col-sm-3">
							<widget-data
								title="dcr"
								:itemData="itemData.dcr"
								:itemDataBefore="itemDataBefore.dcr"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="dcu"
								:itemData="itemData.dcu"
								:itemDataBefore="itemDataBefore.dcu"
								></widget-data>
						</div>	
						<div class="col-sm-3">
								<widget-data
								title="iuran gedung"
								:itemData="itemData.iuran_gedung"
								:itemDataBefore="itemDataBefore.iuran_gedung"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="donasi"
								:itemData="itemData.donasi"
								:itemDataBefore="itemDataBefore.donasi"
								></widget-data>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<widget-data
								title="bjs saham"
								:itemData="itemData.bjs_saham"
								:itemDataBefore="itemDataBefore.bjs_saham"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="beban penyisihan dcr"
								:itemData="itemData.beban_penyisihan_dcr"
								:itemDataBefore="itemDataBefore.beban_penyisihan_dcr"
								></widget-data>
						</div>
						<div class="col-sm-3">
								<widget-data
								title="investasi likuid"
								:itemData="itemData.investasi_likuid"
								:itemDataBefore="itemDataBefore.investasi_likuid"
								></widget-data>
						</div>
					</div>

					<!-- separator -->
					<div class="row"><hr/></div> 
					<!-- separator -->
				</div>	

				<div class="timeline-row">
					<div class="timeline-icon">
						<div class="bg-grey">
							<i class="icon-cash4"></i>
						</div>
					</div>

					<div class="row">		
						<div class="col-sm-3">
							<widget-data
								title="total pendapatan"
								:itemData="itemData.total_pendapatan"
								:itemDataBefore="itemDataBefore.total_pendapatan"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="total biaya"
								:itemData="itemData.total_biaya"
								:itemDataBefore="itemDataBefore.total_biaya"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="shu"
								:itemData="itemData.shu"
								:itemDataBefore="itemDataBefore.shu"
								></widget-data>
						</div>
						<div class="col-sm-3">
								<widget-data
								title="shu lalu"
								:itemData="itemData.shu_lalu"
								:itemDataBefore="itemDataBefore.shu_lalu"
								></widget-data>
						</div>
					</div>
					<div class="row">			
						<div class="col-sm-3">
							<widget-data
								title="laju inflasi"
								:itemData="itemData.laju_inflasi"
								:itemDataBefore="itemDataBefore.laju_inflasi"
								:isPercent="true"
								></widget-data>
						</div>
						<div class="col-sm-3">
							<widget-data
								title="harga pasar"
								:itemData="itemData.harga_pasar"
								:itemDataBefore="itemDataBefore.harga_pasar"
								:isPercent="true"
								></widget-data>
						</div>
					</div>
				</div>		

			</div>
		</div>

	</div>
	
</template>

<script>
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import widgetData from './widgetLaporanCu';
	export default {
		components:{
			widgetData
		},
		props:['kelas','path','columnData'],
		data(){
			return {
				idCu: '',
				idTp: '',
				periode: '',
				periodeTp: '',
				itemDataBefore: []
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
				if(this.profileStat == 'success'){

				}
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
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'detail'){
					this.$store.dispatch('laporanCu/detail',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCu/detailTp',this.$route.params.id);
				}
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('laporanCu',{
				itemData: 'data',
				itemDataStat: 'dataStat',
				grafikData: 'grafik',
				grafikDataStat: 'grafikStat',
				modelPeriode: 'periode',
				modelPeriodeStat: 'periodeStat',
			}),
			...mapGetters('laporanTp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>