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
							<div @click.prevent="modalBuka('Lelaki Biasa', 'l_biasa', itemData.l_biasa, itemData.periode, itemDataBefore.l_biasa, itemDataBefore.periode, grafikData.data, [{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
								title="lelaki biasa"
								:itemData="itemData.l_biasa"
								:itemDataBefore="itemDataBefore.l_biasa"
								></widget-data>
							</div>
							
							<div @click.prevent="modalBuka('Lelaki Biasa', 'l_biasa', itemData.l_biasa, itemData.periode, '0', '', grafikData.data, [{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="lelaki biasa"
									:itemData="itemData.l_biasa"
									:itemDataBefore="'0'"
									></widget-data>
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Lelaki L.Biasa', 'l_lbiasa', itemData.l_lbiasa, itemData.periode, itemDataBefore.l_lbiasa, itemDataBefore.periode, grafikData.data, [{title:'Lelaki L.Biasa',key:'l_lbiasa',value:itemData.l_lbiasa}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="lelaki l.biasa"
									:itemData="itemData.l_lbiasa"
									:itemDataBefore="itemDataBefore.l_lbiasa"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Lelaki L.Biasa', 'l_lbiasa', itemData.l_lbiasa, itemData.periode, '0', '', grafikData.data, [{title:'Lelaki L.Biasa',key:'l_lbiasa',value:itemData.l_lbiasa}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="lelaki l.biasa"
									:itemData="itemData.l_lbiasa"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Perempuan Biasa','p_biasa',  itemData.p_biasa, itemData.periode, itemDataBefore.p_biasa, itemDataBefore.periode, grafikData.data, [{title:'Perempuan Biasa',key:'p_biasa',value:itemData.p_biasa}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="perempuan biasa"
									:itemData="itemData.p_biasa"
									:itemDataBefore="itemDataBefore.p_biasa"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Perempuan Biasa','p_biasa',  itemData.p_biasa, itemData.periode, '0', '', grafikData.data, [{title:'Perempuan Biasa',key:'p_biasa',value:itemData.p_biasa}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="perempuan biasa"
									:itemData="itemData.p_biasa"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Perempuan L.Biasa', 'p_lbiasa', itemData.p_lbiasa, itemData.periode, itemDataBefore.p_lbiasa, itemDataBefore.periode, grafikData.data, [{title:'Perempuan L.Biasa',key:'p_lbiasa',value:itemData.p_lbiasa}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="perempuan l.biasa"
									:itemData="itemData.p_lbiasa"
									:itemDataBefore="itemDataBefore.p_lbiasa"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Perempuan L.Biasa', 'p_lbiasa', itemData.p_lbiasa, itemData.periode, '0', '', grafikData.data, [{title:'Perempuan L.Biasa',key:'p_lbiasa',value:itemData.p_lbiasa}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="perempuan l.biasa"
									:itemData="itemData.p_lbiasa"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
					</div>
					
					<div class="row">		
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Total Anggota', 'total_anggota', itemData.total_anggota, itemData.periode, itemDataBefore.total_anggota, itemDataBefore.periode, grafikData.data, [
								{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa},
								{title:'Lelaki L.Biasa',key:'l_lbiasa',value:itemData.l_lbiasa},
								{title:'Perempuan Biasa',key:'p_biasa',value:itemData.p_biasa},
								{title:'Perempuan L.Biasa',key:'p_lbiasa',value:itemData.p_lbiasa}
							])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="total anggota"
									:itemData="itemData.total_anggota"
									:itemDataBefore="itemDataBefore.total_anggota"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Total Anggota', 'total_anggota', itemData.total_anggota, itemData.periode, '0', '', grafikData.data, [
								{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa},
								{title:'Lelaki L.Biasa',key:'l_lbiasa',value:itemData.l_lbiasa},
								{title:'Perempuan Biasa',key:'p_biasa',value:itemData.p_biasa},
								{title:'Perempuan L.Biasa',key:'p_lbiasa',value:itemData.p_lbiasa}
							])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="total anggota"
									:itemData="itemData.total_anggota"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Total Anggota Lalu','total_anggota_lalu',  itemData.total_anggota_lalu, itemData.periode, itemDataBefore.total_anggota_lalu, itemDataBefore.periode, grafikData.data, [{title:'Total Anggota Lalu',key:'total_anggota_lalu',value:itemData.total_anggota_lalu}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="total anggota lalu"
									:itemData="itemData.total_anggota_lalu"
									:itemDataBefore="itemDataBefore.total_anggota_lalu"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Total Anggota Lalu','total_anggota_lalu',  itemData.total_anggota_lalu, itemData.periode, '0', '', grafikData.data, [{title:'Total Anggota Lalu',key:'total_anggota_lalu',value:itemData.total_anggota_lalu}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="total anggota lalu"
									:itemData="itemData.total_anggota_lalu"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
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
							<div @click.prevent="modalBuka('Aset', 'aset', itemData.aset, itemData.periode, itemDataBefore.aset, itemDataBefore.periode, grafikData.data, [{title:'Aset',key:'aset',value:itemData.aset}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="aset"
									:itemData="itemData.aset"
									:itemDataBefore="itemDataBefore.aset"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Aset', 'aset', itemData.aset, itemData.periode, '0', '', grafikData.data, [{title:'Aset',key:'aset',value:itemData.aset}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="aset"
									:itemData="itemData.aset"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Aset Lalu', 'aset_lalu', itemData.aset_lalu, itemData.periode, itemDataBefore.aset_lalu, itemDataBefore.periode, grafikData.data, [{title:'Aset Lalu',key:'aset_lalu',value:itemData.aset_lalu}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="aset lalu"
									:itemData="itemData.aset_lalu"
									:itemDataBefore="itemDataBefore.aset_lalu"
									></widget-data>
							</div>		
							<div @click.prevent="modalBuka('Aset Lalu', 'aset_lalu', itemData.aset_lalu, itemData.periode, '0', '', grafikData.data, [{title:'Aset Lalu',key:'aset_lalu',value:itemData.aset_lalu}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="aset lalu"
									:itemData="itemData.aset_lalu"
									:itemDataBefore="''"
									></widget-data>	
							</div>	
						</div>	
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Aset Masalah', 'aset_masalah', itemData.aset_masalah, itemData.periode, itemDataBefore.aset_masalah, itemDataBefore.periode, grafikData.data, [{title:'Aset Masalah',key:'aset_masalah',value:itemData.aset_masalah}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="aset masalah"
									:itemData="itemData.aset_masalah"
									:itemDataBefore="itemDataBefore.aset_masalah"
									:isOpposite="true"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Aset Masalah', 'aset_masalah', itemData.aset_masalah, itemData.periode, '0', '', grafikData.data, [{title:'Aset Masalah',key:'aset_masalah',value:itemData.aset_masalah}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="aset masalah"
									:itemData="itemData.aset_masalah"
									:itemDataBefore="'0'"
									:isOpposite="true"
									></widget-data>	
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Aset Tidak Menghasilkan', 'aset_tidak_menghasilkan', itemData.aset_tidak_menghasilkan, itemData.periode, itemDataBefore.aset_tidak_menghasilkan, itemDataBefore.periode, grafikData.data, [{title:'Aset Tidak Menghasilkan',key:'aset_tidak_menghasilkan',value:itemData.aset_tidak_menghasilkan}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="aset tidak menghasilkan"
									:itemData="itemData.aset_tidak_menghasilkan"
									:itemDataBefore="itemDataBefore.aset_tidak_menghasilkan"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Aset Tidak Menghasilkan', 'aset_tidak_menghasilkan', itemData.aset_tidak_menghasilkan, itemData.periode, '0', '', grafikData.data, [{title:'Aset Tidak Menghasilkan',key:'aset_tidak_menghasilkan',value:itemData.aset_tidak_menghasilkan}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="aset tidak menghasilkan"
									:itemData="itemData.aset_tidak_menghasilkan"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Aktiva Lancar', 'aktiva_lancar', itemData.aktiva_lancar, itemData.periode, itemDataBefore.aktiva_lancar, itemDataBefore.periode, grafikData.data, [{title:'Aktiva Lancar',key:'aktiva_lancar',value:itemData.aktiva_lancar}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="aktiva lancar"
									:itemData="itemData.aktiva_lancar"
									:itemDataBefore="itemDataBefore.aktiva_lancar"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Aktiva Lancar', 'aktiva_lancar', itemData.aktiva_lancar, itemData.periode, '0', '', grafikData.data, [{title:'Aktiva Lancar',key:'aktiva_lancar',value:itemData.aktiva_lancar}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="aktiva lancar"
									:itemData="itemData.aktiva_lancar"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Rata-rata Aset', 'rata_aset', itemData.rata_aset, itemData.periode, itemDataBefore.rata_aset, itemDataBefore.periode, grafikData.data, [{title:'Rata-rata Aset',key:'rata_aset',value:itemData.rata_aset}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="rata-rata aset"
									:itemData="itemData.rata_aset"
									:itemDataBefore="itemDataBefore.rata_aset"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Rata-rata Aset', 'rata_aset', itemData.rata_aset, itemData.periode, '0', '', grafikData.data, [{title:'Rata-rata Aset',key:'rata_aset',value:itemData.rata_aset}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="rata-rata aset"
									:itemData="itemData.rata_aset"
									:itemDataBefore="'0'"
									></widget-data>
							</div>		
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
							<div @click.prevent="modalBuka('Simp. Saham', 'simpanan_saham', itemData.simpanan_saham, itemData.periode, itemDataBefore.simpanan_saham, itemDataBefore.periode, grafikData.data, [{title:'Simp. Saham',key:'simpanan_saham',value:itemData.simpanan_saham}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="simp. saham"
									:itemData="itemData.simpanan_saham"
									:itemDataBefore="itemDataBefore.simpanan_saham"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Simp. Saham', 'simpanan_saham', itemData.simpanan_saham, itemData.periode, '0', '', grafikData.data, [{title:'Simp. Saham',key:'simpanan_saham',value:itemData.simpanan_saham}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="simp. saham"
									:itemData="itemData.simpanan_saham"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Simp. Saham Lalu', 'simpanan_saham_lalu', itemData.simpanan_saham_lalu, itemData.periode, itemDataBefore.simpanan_saham_lalu, itemDataBefore.periode, grafikData.data, [{title:'Simp. Saham Lalu',key:'simpanan_saham_lalu',value:itemData.simpanan_saham_lalu}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="simp. saham lalu"
									:itemData="itemData.simpanan_saham_lalu"
									:itemDataBefore="itemDataBefore.simpanan_saham_lalu"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Simp. Saham Lalu', 'simpanan_saham_lalu', itemData.simpanan_saham_lalu, itemData.periode, '0', '', grafikData.data, [{title:'Simp. Saham Lalu',key:'simpanan_saham_lalu',value:itemData.simpanan_saham_lalu}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="simp. saham lalu"
									:itemData="itemData.simpanan_saham_lalu"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Simp. Saham Des', 'simpanan_saham_des', itemData.simpanan_saham_des, itemData.periode, itemDataBefore.simpanan_saham_des, itemDataBefore.periode, grafikData.data, [{title:'Simp. Saham Des',key:'simpanan_saham_des',value:itemData.simpanan_saham_des}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="simp. saham des"
									:itemData="itemData.simpanan_saham_des"
									:itemDataBefore="itemDataBefore.simpanan_saham_des"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Simp. Saham Des', 'simpanan_saham_des', itemData.simpanan_saham_des, itemData.periode, '0', '', grafikData.data, [{title:'Simp. Saham Des',key:'simpanan_saham_des',value:itemData.simpanan_saham_des}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="simp. saham des"
									:itemData="itemData.simpanan_saham_des"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Simp. Nonsaham Unggulan', 'nonsaham_unggulan', itemData.nonsaham_unggulan, itemData.periode, itemDataBefore.nonsaham_unggulan, itemDataBefore.periode, grafikData.data, [{title:'Simp. Nonsaham Unggulan',key:'nonsaham_unggulan',value:itemData.nonsaham_unggulan}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="simp. nonsaham unggulan"
									:itemData="itemData.nonsaham_unggulan"
									:itemDataBefore="itemDataBefore.nonsaham_unggulan"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Simp. Nonsaham Unggulan', 'nonsaham_unggulan', itemData.nonsaham_unggulan, itemData.periode, '0', '', grafikData.data, [{title:'Simp. Nonsaham Unggulan',key:'nonsaham_unggulan',value:itemData.nonsaham_unggulan}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="simp. nonsaham unggulan"
									:itemData="itemData.nonsaham_unggulan"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
					</div>	
					<div class="row">	
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Simp. Nonsaham Harian', 'nonsaham_harian', itemData.nonsaham_harian, itemData.periode, itemDataBefore.nonsaham_harian, itemDataBefore.periode, grafikData.data, [{title:'Simp. Nonsaham Harian',key:'nonsaham_harian',value:itemData.nonsaham_harian}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="simp. nonsaham harian"
									:itemData="itemData.nonsaham_harian"
									:itemDataBefore="itemDataBefore.nonsaham_harian"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Simp. Nonsaham Harian', 'nonsaham_harian', itemData.nonsaham_harian, itemData.periode, '0', '', grafikData.data, [{title:'Simp. Nonsaham Harian',key:'nonsaham_harian',value:itemData.nonsaham_harian}])" 
							style="cursor:pointer;" v-else>		
								<widget-data
									title="simp. nonsaham harian"
									:itemData="itemData.nonsaham_harian"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>	
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Hutang SPD', 'hutang_spd', itemData.hutang_spd, itemData.periode, itemDataBefore.hutang_spd, itemDataBefore.periode, grafikData.data, [{title:'Hutang SPD',key:'hutang_spd',value:itemData.hutang_spd}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="hutang spd"
									:itemData="itemData.hutang_spd"
									:itemDataBefore="itemDataBefore.hutang_spd"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Hutang SPD', 'hutang_spd', itemData.hutang_spd, itemData.periode, '0', '', grafikData.data, [{title:'Hutang SPD',key:'hutang_spd',value:itemData.hutang_spd}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="hutang spd"
									:itemData="itemData.hutang_spd"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Hutang Tidak Berbiaya', 'hutang_tidak_berbiaya_30hari', itemData.hutang_tidak_berbiaya_30hari, itemData.periode, itemDataBefore.hutang_tidak_berbiaya_30hari, itemDataBefore.periode, grafikData.data, [{title:'Hutang Tidak Berbiaya',key:'hutang_tidak_berbiaya_30hari',value:itemData.hutang_tidak_berbiaya_30hari}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="hutang tidak berbiaya"
									:itemData="itemData.hutang_tidak_berbiaya_30hari"
									:itemDataBefore="itemDataBefore.hutang_tidak_berbiaya_30hari"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Hutang Tidak Berbiaya', 'hutang_tidak_berbiaya_30hari', itemData.hutang_tidak_berbiaya_30hari, itemData.periode, '0','', grafikData.data, [{title:'Hutang Tidak Berbiaya',key:'hutang_tidak_berbiaya_30hari',value:itemData.hutang_tidak_berbiaya_30hari}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="hutang tidak berbiaya"
									:itemData="itemData.hutang_tidak_berbiaya_30hari"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Total Hutang Pihak Ke-3', 'total_hutang_pihak3', itemData.total_hutang_pihak3, itemData.periode, itemDataBefore.total_hutang_pihak3, itemDataBefore.periode, grafikData.data, [{title:'Total Hutang Pihak Ke-3',key:'total_hutang_pihak3',value:itemData.total_hutang_pihak3}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="total hutang pihak ke-3"
									:itemData="itemData.total_hutang_pihak3"
									:itemDataBefore="itemDataBefore.total_hutang_pihak3"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Total Hutang Pihak Ke-3', 'total_hutang_pihak3', itemData.total_hutang_pihak3, itemData.periode, '0', '', grafikData.data, [{title:'Total Hutang Pihak Ke-3',key:'total_hutang_pihak3',value:itemData.total_hutang_pihak3}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="total hutang pihak ke-3"
									:itemData="itemData.total_hutang_pihak3"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
					</div>
					<div class="row">	
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Piutang Beredar', 'piutang_beredar', itemData.piutang_beredar, itemData.periode, itemDataBefore.piutang_beredar, itemDataBefore.periode, grafikData.data, [{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="piutang beredar"
									:itemData="itemData.piutang_beredar"
									:itemDataBefore="itemDataBefore.piutang_beredar"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Piutang Beredar', 'piutang_beredar', itemData.piutang_beredar, itemData.periode, '0', '', grafikData.data, [{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="piutang beredar"
									:itemData="itemData.piutang_beredar"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>	
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Piutang Bersih', 'piutang_bersih', itemData.piutang_bersih, itemData.periode, itemDataBefore.piutang_bersih, itemDataBefore.periode, grafikData.data, [{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Piutang Lalai 1-12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},{title:'Piutang Lalai > 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan}
							])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="piutang bersih"
									:itemData="itemData.piutang_bersih"
									:itemDataBefore="itemDataBefore.piutang_bersih"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Piutang Bersih', 'piutang_bersih', itemData.piutang_bersih, itemData.periode, '0', '', grafikData.data, [{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Piutang Lalai 1-12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},{title:'Piutang Lalai > 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan}
							])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="piutang bersih"
									:itemData="itemData.piutang_bersih"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Piutang Anggota', 'piutang_anggota', itemData.piutang_anggota, itemData.periode, itemDataBefore.piutang_anggota, itemDataBefore.periode, grafikData.data, [{title:'Piutang Anggota',key:'piutang_anggota',value:itemData.piutang_anggota}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="piutang anggota"
									:itemData="itemData.piutang_anggota"
									:itemDataBefore="itemDataBefore.piutang_anggota"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Piutang Anggota', 'piutang_anggota', itemData.piutang_anggota, itemData.periode, itemDataBefore.piutang_anggota, itemDataBefore.periode, grafikData.data, [{title:'Piutang Anggota',key:'piutang_anggota',value:itemData.piutang_anggota}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="piutang anggota"
									:itemData="itemData.piutang_anggota"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Piutang Lalai 1-12 Bulan', 'piutang_lalai_1bulan', itemData.piutang_lalai_1bulan, itemData.periode, itemDataBefore.piutang_lalai_1bulan, itemDataBefore.periode, grafikData.data, [{title:'Piutang Lalai 1-12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan}], 'currency', true)" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="piutang lalai 1-12 bulan"
									:itemData="itemData.piutang_lalai_1bulan"
									:itemDataBefore="itemDataBefore.piutang_lalai_1bulan"
									:isOpposite="true"
									></widget-data>
							</div>		
							<div @click.prevent="modalBuka('Piutang Lalai 1-12 Bulan', 'piutang_lalai_1bulan', itemData.piutang_lalai_1bulan, itemData.periode, '0', '', grafikData.data, [{title:'Piutang Lalai 1-12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan}], 'currency', true)" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="piutang lalai 1-12 bulan"
									:itemData="itemData.piutang_lalai_1bulan"
									:itemDataBefore="'0'"
									:isOpposite="true"
									></widget-data>	
							</div>	
						</div>
					</div>
					<div class="row">		
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Piutang Lalai > 12 Bulan', 'piutang_lalai_12bulan', itemData.piutang_lalai_12bulan, itemData.periode, itemDataBefore.piutang_lalai_12bulan, itemDataBefore.periode, grafikData.data, [{title:'Piutang Lalai > 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan}], 'currency', true)" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="piutang lalai > 12 bulan"
									:itemData="itemData.piutang_lalai_12bulan"
									:itemDataBefore="itemDataBefore.piutang_lalai_12bulan"
									:isOpposite="true"
									v-if="itemDataBefore"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Piutang Lalai > 12 Bulan', 'piutang_lalai_12bulan', itemData.piutang_lalai_12bulan, itemData.periode, '0', '', grafikData.data, [{title:'Piutang Lalai > 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan}], 'currency', true)" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="piutang lalai > 12 bulan"
									:itemData="itemData.piutang_lalai_12bulan"
									:itemDataBefore="'0'"
									:isOpposite="true"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Rasio Piutang Beredar', 'rasio_beredar', itemData.rasio_beredar, itemData.periode, itemDataBefore.rasio_beredar, itemDataBefore.periode, grafikData.data, [
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Aset',key:'aset',value:itemData.aset}
							],'percent')" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="rasio piutang beredar"
									:itemData="itemData.rasio_beredar"
									:itemDataBefore="itemDataBefore.rasio_beredar"
									:isPercent="true"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Rasio Piutang Beredar', 'rasio_beredar', itemData.rasio_beredar, itemData.periode, '0', '', grafikData.data, [
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Aset',key:'aset',value:itemData.aset}
							],'percent')" 
							style="cursor:pointer;" v-else>		
								<widget-data
									title="rasio piutang beredar"
									:itemData="itemData.rasio_beredar"
									:itemDataBefore="'0'"
									:isPercent="true"
									></widget-data>	
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Rasio Piutang Lalai', 'rasio_lalai', itemData.rasio_lalai, itemData.periode, itemDataBefore.rasio_lalai, itemDataBefore.periode, grafikData.data, [
							{title:'Piutang Lalai 1-12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
							{title:'Piutang Lalai > 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar}
							],'percent',true)" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="rasio piutang lalai"
									:itemData="itemData.rasio_lalai"
									:itemDataBefore="itemDataBefore.rasio_lalai"
									:isPercent="true"
									:isOpposite="true"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Rasio Piutang Lalai', 'rasio_lalai', itemData.rasio_lalai, itemData.periode, '0', '', grafikData.data, [
							{title:'Piutang Lalai 1-12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
							{title:'Piutang Lalai > 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar}
							],'percent',true)" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="rasio piutang lalai"
									:itemData="itemData.rasio_lalai"
									:itemDataBefore="'0'"
									:isPercent="true"
									:isOpposite="true"
									></widget-data>	
							</div>	
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
							<div @click.prevent="modalBuka('DCR', 'dcr', itemData.dcr, itemData.periode, itemDataBefore.dcr, itemDataBefore.periode, grafikData.data, [{title:'DCR',key:'dcr',value:itemData.dcr}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="dcr"
									:itemData="itemData.dcr"
									:itemDataBefore="itemDataBefore.dcr"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('DCR', 'dcr', itemData.dcr, itemData.periode, '0', '', grafikData.data, [{title:'DCR',key:'dcr',value:itemData.dcr}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="dcr"
									:itemData="itemData.dcr"
									:itemDataBefore="'0'"
									></widget-data>
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('DCU', 'dcu', itemData.dcu, itemData.periode, itemDataBefore.dcu, itemDataBefore.periode, grafikData.data, [{title:'DCU',key:'dcu',value:itemData.dcu}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="dcu"
									:itemData="itemData.dcu"
									:itemDataBefore="itemDataBefore.dcu"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('DCU', 'dcu', itemData.dcu, itemData.periode, '0', '', grafikData.data, [{title:'DCU',key:'dcu',value:itemData.dcu}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="dcu"
									:itemData="itemData.dcu"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>	
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Iuran Gedung', 'dana_gedung', itemData.dana_gedung, itemData.periode, itemDataBefore.dana_gedung, itemDataBefore.periode, grafikData.data, [{title:'Iuran Gedung',key:'dana_gedung',value:itemData.dana_gedung}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="iuran gedung"
									:itemData="itemData.dana_gedung"
									:itemDataBefore="itemDataBefore.dana_gedung"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Iuran Gedung', 'dana_gedung', itemData.dana_gedung, itemData.periode, '0', '', grafikData.data, [{title:'Iuran Gedung',key:'dana_gedung',value:itemData.dana_gedung}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="iuran gedung"
									:itemData="itemData.dana_gedung"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Donasi', 'donasi', itemData.donasi, itemData.periode, itemDataBefore.donasi, itemDataBefore.periode, grafikData.data, [{title:'Donasi',key:'donasi',value:itemData.donasi}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="donasi"
									:itemData="itemData.donasi"
									:itemDataBefore="itemDataBefore.donasi"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Donasi', 'donasi', itemData.donasi, itemData.periode, '0', '', grafikData.data, [{title:'Donasi',key:'donasi',value:itemData.donasi}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="donasi"
									:itemData="itemData.donasi"
									:itemDataBefore="'0'"
									></widget-data>
							</div>		
						</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('BJS Saham', 'bjs_saham', itemData.bjs_saham, itemData.periode, itemDataBefore.bjs_saham, itemDataBefore.periode, grafikData.data, [{title:'BJS Saham',key:'bjs_saham',value:itemData.bjs_saham}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="bjs saham"
									:itemData="itemData.bjs_saham"
									:itemDataBefore="itemDataBefore.bjs_saham"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('BJS Saham', 'bjs_saham', itemData.bjs_saham, itemData.periode, '0', '', grafikData.data, [{title:'BJS Saham',key:'bjs_saham',value:itemData.bjs_saham}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="bjs saham"
									:itemData="itemData.bjs_saham"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Beban Penyisihan DCR', 'beban_penyisihan_dcr', itemData.beban_penyisihan_dcr, itemData.periode, itemDataBefore.beban_penyisihan_dcr, itemDataBefore.periode, grafikData.data, [{title:'Beban Penyisihan DCR',key:'beban_penyisihan_dcr',value:itemData.beban_penyisihan_dcr}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="beban penyisihan dcr"
									:itemData="itemData.beban_penyisihan_dcr"
									:itemDataBefore="itemDataBefore.beban_penyisihan_dcr"
									v-if="itemDataBefore"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Beban Penyisihan DCR', 'beban_penyisihan_dcr', itemData.beban_penyisihan_dcr, itemData.periode, '0', '', grafikData.data, [{title:'Beban Penyisihan DCR',key:'beban_penyisihan_dcr',value:itemData.beban_penyisihan_dcr}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="beban penyisihan dcr"
									:itemData="itemData.beban_penyisihan_dcr"
									:itemDataBefore="'0'"
									></widget-data>
							</div>		
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Investasi Likuid', 'investasi_likuid', itemData.investasi_likuid, itemData.periode, itemDataBefore.investasi_likuid, itemDataBefore.periode, grafikData.data, [{title:'Investasi Likuid',key:'investasi_likuid',value:itemData.investasi_likuid}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="investasi likuid"
									:itemData="itemData.investasi_likuid"
									:itemDataBefore="itemDataBefore.investasi_likuid"
									v-if="itemDataBefore"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Investasi Likuid', 'investasi_likuid', itemData.investasi_likuid, itemData.periode, '0', '', grafikData.data, [{title:'Investasi Likuid',key:'investasi_likuid',value:itemData.investasi_likuid}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="investasi likuid"
									:itemData="itemData.investasi_likuid"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
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
							<div @click.prevent="modalBuka('Total Pendapatan', 'total_pendapatan', itemData.total_pendapatan, itemData.periode, itemDataBefore.total_pendapatan, itemDataBefore.periode, grafikData.data, [{title:'Total Pendapatan',key:'total_pendapatan',value:itemData.total_pendapatan}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="total pendapatan"
									:itemData="itemData.total_pendapatan"
									:itemDataBefore="itemDataBefore.total_pendapatan"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Total Pendapatan', 'total_pendapatan', itemData.total_pendapatan, itemData.periode, '0', '', grafikData.data, [{title:'Total Pendapatan',key:'total_pendapatan',value:itemData.total_pendapatan}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="total pendapatan"
									:itemData="itemData.total_pendapatan"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Total Biaya', 'total_biaya', itemData.total_biaya, itemData.periode, itemDataBefore.total_biaya, itemDataBefore.periode, grafikData.data, [{title:'Total Biaya',key:'total_biaya',value:itemData.total_biaya}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="total biaya"
									:itemData="itemData.total_biaya"
									:itemDataBefore="itemDataBefore.total_biaya"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('Total Biaya', 'total_biaya', itemData.total_biaya, itemData.periode, '0', '', grafikData.data, [{title:'Total Biaya',key:'total_biaya',value:itemData.total_biaya}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="total biaya"
									:itemData="itemData.total_biaya"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('SHU', 'shu', itemData.shu, itemData.periode, itemDataBefore.shu, itemDataBefore.periode, grafikData.data, [{title:'SHU',key:'shu',value:itemData.shu}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="shu"
									:itemData="itemData.shu"
									:itemDataBefore="itemDataBefore.shu"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('SHU', 'shu', itemData.shu, itemData.periode, '0', '', grafikData.data, [{title:'SHU',key:'shu',value:itemData.shu}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="shu"
									:itemData="itemData.shu"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('SHU Lalu', 'shu_lalu', itemData.shu_lalu, itemData.periode, itemDataBefore.shu_lalu, itemDataBefore.periode, grafikData.data, [{title:'SHU Lalu',key:'shu_lalu',value:itemData.shu_lalu}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="shu lalu"
									:itemData="itemData.shu_lalu"
									:itemDataBefore="itemDataBefore.shu_lalu"
									></widget-data>
							</div>	
							<div @click.prevent="modalBuka('SHU Lalu', 'shu_lalu', itemData.shu_lalu, itemData.periode, '0', '', grafikData.data, [{title:'SHU Lalu',key:'shu_lalu',value:itemData.shu_lalu}])" 
							style="cursor:pointer;" v-else>
								<widget-data
									title="shu lalu"
									:itemData="itemData.shu_lalu"
									:itemDataBefore="'0'"
									></widget-data>	
							</div>	
						</div>
					</div>
					<div class="row">			
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Laju Inflasi', 'laju_inflasi', itemData.laju_inflasi, itemData.periode, itemDataBefore.laju_inflasi, itemDataBefore.periode, grafikData.data, [{title:'Laju Inflasi',key:'laju_inflasi',value:itemData.laju_inflasi}])" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="laju inflasi"
									:itemData="itemData.laju_inflasi"
									:itemDataBefore="itemDataBefore.laju_inflasi"
									:isPercent="true"
									v-if="itemDataBefore"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Laju Inflasi', 'laju_inflasi', itemData.laju_inflasi, itemData.periode, '0', '', grafikData.data, [{title:'Laju Inflasi',key:'laju_inflasi',value:itemData.laju_inflasi}])" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="laju inflasi"
									:itemData="itemData.laju_inflasi"
									:itemDataBefore="'0'"
									:isPercent="true"
									></widget-data>	
							</div>	
						</div>
						<div class="col-sm-3">
							<div @click.prevent="modalBuka('Harga Pasar', 'harga_pasar', itemData.harga_pasar, itemData.periode, itemDataBefore.harga_pasar, itemDataBefore.periode, grafikData.data, [{title:'Harga Pasar',key:'harga_pasar',value:itemData.harga_pasar}],'percent')" 
							style="cursor:pointer;" v-if="itemDataBefore">
								<widget-data
									title="harga pasar"
									:itemData="itemData.harga_pasar"
									:itemDataBefore="itemDataBefore.harga_pasar"
									:isPercent="true"
									v-if="itemDataBefore"
									></widget-data>
							</div>
							<div @click.prevent="modalBuka('Harga Pasar', 'harga_pasar', itemData.harga_pasar, itemData.periode, '0', '', grafikData.data, [{title:'Harga Pasar',key:'harga_pasar',value:itemData.harga_pasar}],'percent')" 
							style="cursor:pointer;" v-else>	
								<widget-data
									title="harga pasar"
									:itemData="itemData.harga_pasar"
									:itemDataBefore="'0'"
									:isPercent="true"
									></widget-data>	
							</div>	
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
				<div class="nav-tabs-responsive mb-3">
					<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
						<li class="nav-item">
							<a href="#" class="nav-link" :class="{'active' : modalDetail.tab == 'analisis'}" @click.prevent="modalDetail.tab = 'analisis'"><i class="icon-wave2 mr-2"></i> Analisis</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link" :class="{'active' :  modalDetail.tab == 'tabel'}" @click.prevent="modalDetail.tab = 'tabel'"><i class="icon-list2 mr-2"></i> Tabel</a>
						</li>
					</ul>
				</div>

				<!-- analisis -->
				<div v-show="modalDetail.tab == 'analisis'">
					<widget-data
						:title="modalDetail.title"
						:itemData="modalDetail.itemData"
						:itemDataBefore="modalDetail.itemDataBefore"
						:isPercent="modalDetail.isPercent"
						:isOpposite="modalDetail.isOpposite"
						></widget-data>	

					<div class="card card-body border-top-blue">
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
									<th v-if="!modalDetail.isPercent">Pertumbuhan (%)</th>
								</tr>
							</thead>
							<tbody>
								<tr class="text-nowrap" v-for="grafik in modalDetail.grafikData" :class="{'info': Object.values(grafik)[0] == itemData.periode }">
									<td>{{ Object.values(grafik)[0] | dateMonth }}</td>
									<td v-if="modalDetail.isPercent">{{ Object.values(grafik)[1] | percentage(2) }}</td>
									<td v-else>{{ Object.values(grafik)[1] | currency('',0,{ thousandsSeparator: '.'}) }}</td>
									<td v-if="itemData.periode != Object.values(grafik)[0]" :class="{
											'text-primary' : countTotal(modalDetail.itemData,Object.values(grafik)[1]) > 0,
											'text-danger' : countTotal(modalDetail.itemData,Object.values(grafik)[1]) < 0}">
										<i class="icon-chevron-up" v-if="countTotal(modalDetail.itemData,Object.values(grafik)[1]) > 0"></i>
										<i class="icon-chevron-down" v-else-if="countTotal(modalDetail.itemData,Object.values(grafik)[1]) < 0"></i>	
										<span v-if="modalDetail.isPercent">
											{{ Math.abs(countTotal(modalDetail.itemData,Object.values(grafik)[1])) | percentage(2) }}
										</span>
										<span v-else>
											{{ Math.abs(countTotal(modalDetail.itemData,Object.values(grafik)[1])) | currency('',0,{ thousandsSeparator: '.'}) }}
										</span>
										
									</td>
									<td colspan="2" class="text-center" v-else>LAPORAN PERIODE INI</td>
									<td v-if="itemData.periode != Object.values(grafik)[0] && !modalDetail.isPercent">
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

					<div class="alert bg-info alert-styled-left mt-2 pt-1 pb-1">
						<span class="mb-2 text-semibold"><u>Bagaimana membaca tabel ini?</u></span>
						<p>Kolom pertumbuhan adalah perbandingan nilai pada laporan periode ini dibandingan dengan periode lainnya sesuai pada tabel</p>
					</div>
				</div>

				<!-- ubah -->
				<div v-if="modalDetail.isUbah">
					<hr>
					<div v-if="modalDetail.canUbah">
						<div class="well well-sm border-top-lg border-top-warning">
							<div v-if="form.title" v-for="form in modalDetail.form">
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
					</div>
					<div v-else>
						<div class="alert bg-warning alert-styled-left mt-10 pt-5 pb-5">
							<span class="mb-5 text-semibold"><u>Maaf tidak bisa mengubah data disini.</u></span>
							<p>Laporan berikut merupakan laporan konsolidasi dari beberapa data laporan TP pada periode ini, untuk melakukan pengubahan data silahkan buka laporan TP pada periode ini.</p>
						</div>
					</div>
				</div>

				<hr>
				
				<div class="text-center d-none d-sm-block">
					<button type="button" @click.prevent="modalTutup" class="btn btn-light" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
					<button type="button" @click.prevent="modalDetail.isUbah = true" class="btn btn-light" v-tooltip:top="'Ubah data perhitungan'" v-if="!modalDetail.isUbah && currentUser.can && currentUser.can['update_laporan_cu']">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<button type="button" @click.prevent="modalDetail.isUbah = false" class="btn btn-light" v-tooltip:top="'Batal mengubah data perhitungan'" v-if="modalDetail.isUbah">
						<i class="icon-arrow-left13"></i> Batal
					</button>
					<button type="submit" class="btn btn-primary" v-tooltip:top="'Simpan data perhitungan'" v-if="modalDetail.isUbah && currentUser.can && currentUser.can['update_laporan_cu'] && modalDetail.canUbah">
						<i class="icon-floppy-disk"></i> Simpan
					</button>
				</div>

				<div class="d-block d-sm-none">

					<button type="submit" class="btn btn-primary btn-block" v-tooltip:top="'Simpan data perhitungan'" v-if="modalDetail.isUbah && currentUser.can && currentUser.can['update_laporan_cu'] && modalDetail.canUbah">
						<i class="icon-floppy-disk"></i> Simpan
					</button>

					<button type="button" @click.prevent="modalDetail.isUbah = false" class="btn btn-light btn-block" v-tooltip:top="'Batal mengubah data perhitungan'" v-if="modalDetail.isUbah && currentUser.can && currentUser.can['update_laporan_cu']">
						<i class="icon-arrow-left13"></i> Batal
					</button>

					<button type="button" @click.prevent="modalDetail.isUbah = true" class="btn btn-light btn-block" v-tooltip:top="'Ubah data perhitungan'" v-if="!modalDetail.isUbah && currentUser.can && currentUser.can['update_laporan_cu']">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<button type="button" @click.prevent="modalTutup" class="btn btn-light btn-block" v-tooltip:top="'Tutup'">
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
					title: '',
					type:'',
					itemData: '',
					itemDataBefore: '',
					grafikData: [],
					form: [],
					analisis1: '',
					tab: 'analisis',
					isUbah: false,
					isOpposite: false,
					isPercent: false,
					canUbah: true,
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
			modalBuka(title, key, itemData, periode, itemDataBefore,  periodeBefore, grafikData, form, type = 'currency', isOpposite = false){
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
				this.modalDetail.isUbah = false;
				this.modalDetail.isOpposite = isOpposite;
				
				if(type != 'currency'){
					this.modalDetail.isPercent = true;
				}else{
					this.modalDetail.isPercent = false;
				}

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
					formatedPeriodeBefore = " dari periode " + this.formatPeriode(periodeBefore);
				}
				
				this.modalDetail.analisis1 = "Akun " + title + " sejumlah " + this.formatCurrency(itemData) + ' periode ' + this.formatPeriode(periode) + keterangan + formatedPeriodeBefore;

				// table view
				this.modalDetail.grafikData = _.orderBy(_.map(grafikData, _.partialRight(_.pick, ['periode', key])), ['periode'],['desc']);

				// ubah view
				this.modalDetail.id = this.itemData.id;
				
				if(this.itemData.id_tp){
					this.modalDetail.id_tp = this.itemData.id_tp;
					this.modalDetail.no_tp = this.itemData.no_tp;
					this.modalDetail.canUbah = true;
				}else{
					if(this.itemData.tp){
						this.modalDetail.canUbah = false;
					}else{
						this.modalDetail.canUbah = true;
					}
					this.modalDetail.id_cu = this.itemData.id_cu;
					this.modalDetail.no_ba = this.itemData.cu.no_ba;
				}
				
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
			...mapGetters('auth',{
				currentUser: 'currentUser'
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