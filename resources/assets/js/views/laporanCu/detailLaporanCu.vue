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
							<div @click.prevent="modalBuka('Lelaki Biasa', itemData.l_biasa, itemData.periode, itemDataBefore.l_biasa, itemDataBefore.periode, grafikData.data, [{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
								title="lelaki biasa"
								:itemData="itemData.l_biasa"
								:itemDataBefore="itemDataBefore.l_biasa"
								></widget-data>
							</div>
							
							<div @click.prevent="modalBuka('Lelaki Biasa', itemData.l_biasa, itemData.periode, '0', '', grafikData.data, [{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="lelaki biasa"
									:itemData="itemData.l_biasa"
									:itemDataBefore="'0'"
									></widget-data>
							</div>		
						</div>
						<div class="col-sm-3">
							<widget-data
								title="lelaki l.biasa"
								:itemData="itemData.l_lbiasa"
								:itemDataBefore="itemDataBefore.l_lbiasa"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="lelaki l.biasa"
								:itemData="itemData.l_lbiasa"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="perempuan biasa"
								:itemData="itemData.p_biasa"
								:itemDataBefore="itemDataBefore.p_biasa"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="perempuan biasa"
								:itemData="itemData.p_biasa"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="perempuan l.biasa"
								:itemData="itemData.p_lbiasa"
								:itemDataBefore="itemDataBefore.p_lbiasa"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="perempuan l.biasa"
								:itemData="itemData.p_lbiasa"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
					</div>
					<div class="row">		
						<div class="col-sm-3">
							<widget-data
								title="total anggota"
								:itemData="itemData.total_anggota"
								:itemDataBefore="itemDataBefore.total_anggota"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="total anggota"
								:itemData="itemData.total_anggota"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="total anggota lalu"
								:itemData="itemData.total_anggota_lalu"
								:itemDataBefore="itemDataBefore.total_anggota_lalu"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="total anggota lalu"
								:itemData="itemData.total_anggota_lalu"
								:itemDataBefore="'0'"
								v-else
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
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="aset"
								:itemData="itemData.aset"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="aset lalu"
								:itemData="itemData.aset_lalu"
								:itemDataBefore="itemDataBefore.aset_lalu"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="aset lalu"
								:itemData="itemData.aset_lalu"
								:itemDataBefore="''"
								v-else
								></widget-data>	
						</div>	
						<div class="col-sm-3">
								<widget-data
									title="aset masalah"
									:itemData="itemData.aset_masalah"
									:itemDataBefore="itemDataBefore.aset_masalah"
									v-if="itemDataBefore"
									></widget-data>
								<widget-data
									title="aset masalah"
									:itemData="itemData.aset_masalah"
									:itemDataBefore="'0'"
									v-else
									></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="aset tidak menghasilkan"
								:itemData="itemData.aset_tidak_menghasilkan"
								:itemDataBefore="itemDataBefore.aset_tidak_menghasilkan"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="aset tidak menghasilkan"
								:itemData="itemData.aset_tidak_menghasilkan"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<widget-data
								title="aktiva lancar"
								:itemData="itemData.aktiva_lancar"
								:itemDataBefore="itemDataBefore.aktiva_lancar"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="aktiva lancar"
								:itemData="itemData.aktiva_lancar"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="rata-rata aset"
								:itemData="itemData.rata_aset"
								:itemDataBefore="itemDataBefore.rata_aset"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="rata-rata aset"
								:itemData="itemData.rata_aset"
								:itemDataBefore="'0'"
								v-else
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
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="simp. saham"
								:itemData="itemData.simpanan_saham"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
								<widget-data
									title="simp. saham lalu"
									:itemData="itemData.simpanan_saham_lalu"
									:itemDataBefore="itemDataBefore.simpanan_saham_lalu"
									v-if="itemDataBefore"
									></widget-data>
								<widget-data
									title="simp. saham lalu"
									:itemData="itemData.simpanan_saham_lalu"
									:itemDataBefore="'0'"
									v-else
									></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="simp. saham des"
								:itemData="itemData.simpanan_saham_des"
								:itemDataBefore="itemDataBefore.simpanan_saham_des"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="simp. saham des"
								:itemData="itemData.simpanan_saham_des"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="simp. nonsaham unggulan"
								:itemData="itemData.nonsaham_unggulan"
								:itemDataBefore="itemDataBefore.nonsaham_unggulan"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="simp. nonsaham unggulan"
								:itemData="itemData.nonsaham_unggulan"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
					</div>	
					<div class="row">	
						<div class="col-sm-3">
							<widget-data
								title="simp. nonsaham harian"
								:itemData="itemData.nonsaham_harian"
								:itemDataBefore="itemDataBefore.nonsaham_harian"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="simp. nonsaham harian"
								:itemData="itemData.nonsaham_harian"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>	
						<div class="col-sm-3">
							<widget-data
								title="hutang spd"
								:itemData="itemData.hutang_spd"
								:itemDataBefore="itemDataBefore.hutang_spd"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="hutang spd"
								:itemData="itemData.hutang_spd"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="hutang tidak berbiaya"
								:itemData="itemData.hutang_tidak_berbiaya_30hari"
								:itemDataBefore="itemDataBefore.hutang_tidak_berbiaya_30hari"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="hutang tidak berbiaya"
								:itemData="itemData.hutang_tidak_berbiaya_30hari"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="total hutang pihak ke-3"
								:itemData="itemData.total_hutang_pihak3"
								:itemDataBefore="itemDataBefore.total_hutang_pihak3"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="total hutang pihak ke-3"
								:itemData="itemData.total_hutang_pihak3"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
					</div>
					<div class="row">	
						<div class="col-sm-3">
							<widget-data
								title="piutang beredar"
								:itemData="itemData.piutang_beredar"
								:itemDataBefore="itemDataBefore.piutang_beredar"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="piutang beredar"
								:itemData="itemData.piutang_beredar"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>	
						<div class="col-sm-3">
								<widget-data
									title="piutang bersih"
									:itemData="itemData.piutang_bersih"
									:itemDataBefore="itemDataBefore.piutang_bersih"
									v-if="itemDataBefore"
									></widget-data>
								<widget-data
									title="piutang bersih"
									:itemData="itemData.piutang_bersih"
									:itemDataBefore="'0'"
									v-else
									></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="piutang anggota"
								:itemData="itemData.piutang_anggota"
								:itemDataBefore="itemDataBefore.piutang_anggota"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="piutang anggota"
								:itemData="itemData.piutang_anggota"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="piutang lalai 1-12 bulan"
								:itemData="itemData.piutang_lalai_1bulan"
								:itemDataBefore="itemDataBefore.piutang_lalai_1bulan"
								:isOpposite="true"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="piutang lalai 1-12 bulan"
								:itemData="itemData.piutang_lalai_1bulan"
								:itemDataBefore="'0'"
								:isOpposite="true"
								v-else
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
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="piutang lalai > 12 bulan"
								:itemData="itemData.piutang_lalai_12bulan"
								:itemDataBefore="'0'"
								:isOpposite="true"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
								<widget-data
									title="rasio piutang beredar"
									:itemData="itemData.rasio_beredar"
									:itemDataBefore="itemDataBefore.rasio_beredar"
									:isPercent="true"
									v-if="itemDataBefore"
									></widget-data>
								<widget-data
									title="rasio piutang beredar"
									:itemData="itemData.rasio_beredar"
									:itemDataBefore="'0'"
									:isPercent="true"
									v-else
									></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="rasio piutang lalai"
								:itemData="itemData.rasio_lalai"
								:itemDataBefore="itemDataBefore.rasio_lalai"
								:isPercent="true"
								:isOpposite="true"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="rasio piutang lalai"
								:itemData="itemData.rasio_lalai"
								:itemDataBefore="'0'"
								:isPercent="true"
								:isOpposite="true"
								v-else
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
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="dcr"
								:itemData="itemData.dcr"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="dcu"
								:itemData="itemData.dcu"
								:itemDataBefore="itemDataBefore.dcu"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="dcu"
								:itemData="itemData.dcu"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>	
						<div class="col-sm-3">
							<widget-data
								title="iuran gedung"
								:itemData="itemData.iuran_gedung"
								:itemDataBefore="itemDataBefore.iuran_gedung"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="iuran gedung"
								:itemData="itemData.iuran_gedung"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="donasi"
								:itemData="itemData.donasi"
								:itemDataBefore="itemDataBefore.donasi"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="donasi"
								:itemData="itemData.donasi"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<widget-data
								title="bjs saham"
								:itemData="itemData.bjs_saham"
								:itemDataBefore="itemDataBefore.bjs_saham"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="bjs saham"
								:itemData="itemData.bjs_saham"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="beban penyisihan dcr"
								:itemData="itemData.beban_penyisihan_dcr"
								:itemDataBefore="itemDataBefore.beban_penyisihan_dcr"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="beban penyisihan dcr"
								:itemData="itemData.beban_penyisihan_dcr"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="investasi likuid"
								:itemData="itemData.investasi_likuid"
								:itemDataBefore="itemDataBefore.investasi_likuid"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="investasi likuid"
								:itemData="itemData.investasi_likuid"
								:itemDataBefore="'0'"
								v-else
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
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="total pendapatan"
								:itemData="itemData.total_pendapatan"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="total biaya"
								:itemData="itemData.total_biaya"
								:itemDataBefore="itemDataBefore.total_biaya"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="total biaya"
								:itemData="itemData.total_biaya"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="shu"
								:itemData="itemData.shu"
								:itemDataBefore="itemDataBefore.shu"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="shu"
								:itemData="itemData.shu"
								:itemDataBefore="'0'"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="shu lalu"
								:itemData="itemData.shu_lalu"
								:itemDataBefore="itemDataBefore.shu_lalu"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="shu lalu"
								:itemData="itemData.shu_lalu"
								:itemDataBefore="'0'"
								v-else
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
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="laju inflasi"
								:itemData="itemData.laju_inflasi"
								:itemDataBefore="'0'"
								:isPercent="true"
								v-else
								></widget-data>	
						</div>
						<div class="col-sm-3">
							<widget-data
								title="harga pasar"
								:itemData="itemData.harga_pasar"
								:itemDataBefore="itemDataBefore.harga_pasar"
								:isPercent="true"
								v-if="itemDataBefore"
								></widget-data>
							<widget-data
								title="harga pasar"
								:itemData="itemData.harga_pasar"
								:itemDataBefore="'0'"
								:isPercent="true"
								v-else
								></widget-data>	
						</div>
					</div>
				</div>		

			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">
				<form @submit.prevent="save" data-vv-scope="form">
				<div class="tabbable">
					<ul class="nav nav-tabs nav-tabs-solid nav-justified">
						<li :class="{'active' : modalDetail.tab == 'analisis'}"><a @click.prevent="modalDetail.tab = 'analisis'"><i class="icon-wave2 position-left"></i> Analisis</a></li>
						<li :class="{'active' :  modalDetail.tab == 'tabel'}"><a @click.prevent="modalDetail.tab = 'tabel'"><i class="icon-list2 position-left"></i> Tabel</a></li>
					</ul>
				</div>

				<!-- analisis -->
				<div v-show="modalDetail.tab == 'analisis'">
					<widget-data
						:title="modalDetail.title"
						:itemData="modalDetail.itemData"
						:itemDataBefore="modalDetail.itemDataBefore"
						></widget-data>	

					<hr>

					<div class="well well-sm border-top-lg border-top-blue">
						<h6 v-html="modalDetail.analisis1"></h6>
					</div>
				</div>

				<!-- tabel -->
				<div v-show="modalDetail.tab == 'tabel'">
					<div class="pre-scrollable">
						<table class="table table-striped table-bordered">
							<thead class="bg-primary">
								<tr>
									<th>Periode</th>
									<th>Jumlah </th>
									<th>Pertumbuhan</th>
									<th>Pertumbuhan (%)</th>
								</tr>
							</thead>
							<tbody>
								<tr class="text-nowrap" v-for="grafik in modalDetail.grafikData" :class="{'info': Object.values(grafik)[0] == itemData.periode }">
									<td>{{ Object.values(grafik)[0] | dateMonth }}</td>
									<td>{{ Object.values(grafik)[1] | currency('',0,{ thousandsSeparator: '.'}) }}</td>
									<td v-if="itemData.periode != Object.values(grafik)[0]" :class="{
											'text-primary' : countTotal(modalDetail.itemData,Object.values(grafik)[1]) > 0,
											'text-danger' : countTotal(modalDetail.itemData,Object.values(grafik)[1]) < 0}">
										<i class="icon-chevron-up" v-if="countTotal(modalDetail.itemData,Object.values(grafik)[1]) > 0"></i>
										<i class="icon-chevron-down" v-else-if="countTotal(modalDetail.itemData,Object.values(grafik)[1]) < 0"></i>	
										{{ Math.abs(countTotal(modalDetail.itemData,Object.values(grafik)[1])) | currency('',0,{ thousandsSeparator: '.'}) }}
									</td>
									<td colspan="2" class="text-center" v-else>LAPORAN PERIODE INI</td>
									<td v-if="itemData.periode != Object.values(grafik)[0]">
										<span class="badge pull-right" :class="{
											'badge-primary' : countTotal(modalDetail.itemData,Object.values(grafik)[1]) > 0,
											'badge-danger' : countTotal(modalDetail.itemData,Object.values(grafik)[1]) < 0}">
											<span v-if="countTotal(modalDetail.itemData,Object.values(grafik)[1]) > 0">+</span>
											<span v-else-if="countTotal(modalDetail.itemData,Object.values(grafik)[1]) < 0">-</span>	
											{{ Math.abs(countPercentage(modalDetail.itemData,Object.values(grafik)[1])) | currency('',2,{ thousandsSeparator: '.', decimalSeparator: ','}) }} %
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<hr>

					<div class="alert bg-info alert-styled-left mt-10 pt-5 pb-5">
						<span class="mb-5 text-semibold"><u>Bagaimana membaca tabel ini?</u></span>
						<p>Kolom pertumbuhan adalah perbandingan nilai pada laporan periode ini dibandingan dengan periode lainnya sesuai pada tabel</p>
					</div>
				</div>

				<!-- ubah -->
				<div v-if="modalDetail.isUbah" class="row">
					<hr>
					<div class="col-sm-6" v-if="form.title" v-for="form in modalDetail.form">
						<div class="form-group">
							<h5>{{form.title}}</h5>
							<cleave 
								v-model="form.value" 
								class="form-control" 
								:options="cleaveOption.numeric"
								:placeholder="'Silahkan masukkan ' + form.title"></cleave>
						</div>
					</div>
				</div>

				<hr>
				
				<div class="text-center hidden-xs">
					<button type="button" @click.prevent="modalTutup" class="btn btn-default" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
					<button type="button" @click.prevent="modalDetail.isUbah = true" class="btn btn-default" v-tooltip:top="'Ubah data perhitungan'" v-if="!modalDetail.isUbah">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<button type="button" @click.prevent="modalDetail.isUbah = false" class="btn btn-default" v-tooltip:top="'Batal mengubah data perhitungan'" v-if="modalDetail.isUbah">
						<i class="icon-arrow-left13"></i> Batal
					</button>
					<button type="submit" class="btn btn-primary" v-tooltip:top="'Simpan data perhitungan'" v-if="modalDetail.isUbah">
						<i class="icon-floppy-disk"></i> Simpan
					</button>
				</div>

				<div class="visible-xs">

					<button type="submit" class="btn btn-primary btn-block" v-tooltip:top="'Simpan data perhitungan'" v-if="modalDetail.isUbah && profile.can && profile.can['update ' + kelas]">
						<i class="icon-floppy-disk"></i> Simpan
					</button>

					<button type="button" @click.prevent="modalDetail.isUbah = false" class="btn btn-default btn-block" v-tooltip:top="'Batal mengubah data perhitungan'" v-if="modalDetail.isUbah && profile.can && profile.can['update ' + kelas]">
						<i class="icon-arrow-left13"></i> Batal
					</button>

					<button type="button" @click.prevent="modalDetail.isUbah = true" class="btn btn-default btn-block" v-tooltip:top="'Ubah data perhitungan'" v-if="!modalDetail.isUbah && profile.can && profile.can['update ' + kelas]">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<button type="button" @click.prevent="modalTutup" class="btn btn-default btn-block" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
					
				</div>
				</form>
			</template>

		</app-modal>
	</div>
	
</template>

<script>
	import Vue from 'vue';
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import widgetData from './widgetLaporanCu';
	import appModal from '../../components/modal';
	import Cleave from 'vue-cleave-component';
	export default {
		components:{
			widgetData,
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
				modalDetail: {
					id: '',
					id_cu: '',
					title: '',
					type:'',
					itemData: '',
					itemDataBefore: '',
					grafikData: [],
					form: [],
					analisis1: '',
					tab: 'analisis',
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
					this.$store.dispatch('laporanCu/detail',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCu/detailTp',this.$route.params.id);
				}
			},
			save(){
				this.form = _.chain(this.modalDetail.form).keyBy('key').mapValues('value').value();
				this.form.id_cu = this.modalDetail.id_cu;
				this.form.no_ba = this.modalDetail.no_ba;
				this.form.periode = this.modalDetail.periode;
				
				this.$store.dispatch('laporanCu/update', [this.modalDetail.id,this.form]);
			},
			modalBuka(title, itemData, periode, itemDataBefore,  periodeBefore, grafikData, form, type = 'currency'){
				// modal attribute
				this.modalColor = 'bg-primary';
				this.modalShow = true;
				this.modalState = 'normal1'; 
				this.modalTitle = 'Detail Akun ' + title;

				this.modalDetail.tab = 'analisis';
				this.modalDetail.title = title.toUpperCase();
				this.modalDetail.type = type;
				this.modalDetail.itemData = itemData;
				this.modalDetail.itemDataBefore = itemDataBefore;

				// analisis view
				let selisih = itemData - itemDataBefore;
				let keterangan = '';
				let selisihView = this.formatCurrency(Math.abs(selisih));

				if(selisih > 0){
					keterangan = " mengalami peningkatan sebanyak " + selisihView;
				}else if(selisih < 0){
					keterangan =" mengalami penurunan sebanyak " + selisihView;
				}else{
					keterangan =" tidak mengalami perubahan "
				}

				let formatedPeriodeBefore = '';
				if(periodeBefore != ''){
					formatedPeriodeBefore = " dari periode " . formatPeriode(periodeBefore);
				}
				
				this.modalDetail.analisis1 = "Akun " + title + " sejumlah " + this.formatCurrency(itemData) + ' periode ' + this.formatPeriode(periode) + keterangan + formatedPeriodeBefore;

				// table view
				this.modalDetail.grafikData = _.orderBy(_.map(grafikData, _.partialRight(_.pick, ['periode', 'l_biasa'])), ['periode'],['desc']);

				// ubah view
				this.modalDetail.id = this.itemData.id;
				this.modalDetail.id_cu = this.itemData.id_cu;
				this.modalDetail.no_ba = this.itemData.cu.no_ba;
				this.modalDetail.periode = periode;
				this.modalDetail.form = form;
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
			...mapGetters('laporanCu',{
				itemData: 'data',
				itemDataStat: 'dataStat',
				grafikData: 'grafik',
				grafikDataStat: 'grafikStat',
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