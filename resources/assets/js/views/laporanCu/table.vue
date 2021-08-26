<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :excelUploads="excelUploads" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-kolom">
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('anggota')">
					Anggota
				</button>
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('aset')">
					Aset
				</button>
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('shu')">
					SHU
				</button>
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" v-tooltip:top="'Kolom Piutang'" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('piutang')">
					Piutang
				</button>
			</template>

			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_laporan_cu']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- detail-->
				<button @click.prevent="detailData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- table draft konsolidasi -->
				<router-link :to="{ name: 'laporanCuDraft' }" class="btn btn-light btn-icon mb-1" v-if="currentUser.can['upload_laporan_cu'] && laporanCuDraftCountStat == 'success' && laporanCuDraftCount > 0">
					<i class="icon-table2"></i> Laporan Statistik CU [DRAFT]
				</router-link>

				<!-- table draft tp -->
				<router-link :to="{ name: 'laporanTpDraft' }" class="btn btn-light btn-icon mb-1" v-if="currentUser.can['upload_laporan_tp'] && laporanTpDraftCountStat == 'success' && laporanTpDraftCount > 0">
					<i class="icon-table2"></i> Laporan Statistik TP/KP [DRAFT]
				</router-link>

			</template>

      <template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['create_laporan_cu']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- detail-->
				<button @click.prevent="detailData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- table draft konsolidasi -->
				<router-link :to="{ name: 'laporanCuDraft' }" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can['upload_laporan_cu'] && laporanCuDraftCountStat == 'success' && laporanCuDraftCount > 0">
					<i class="icon-table2"></i> Laporan Statistik CU [DRAFT]
				</router-link>

				<!-- table draft tp -->
				<router-link :to="{ name: 'laporanTpDraft' }" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can['upload_laporan_tp'] && laporanTpDraftCountStat == 'success' && laporanTpDraftCount > 0">
					<i class="icon-table2"></i> Laporan Statistik TP/KP [DRAFT]
				</router-link>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 
					'bg-info': selectedItem.id === props.item.id, 
					'bg-warning' : props.item.periode < periode && selectedItem.id !== props.item.id }"
				  class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide && !columnData[1].disable">
						<check-value :value="props.item.cu_name"></check-value>
					</td>
					<td v-if="!columnData[2].hide && !columnData[2].disable">
						<check-value :value="props.item.tp_name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.provinces_name"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<span v-if="props.item.periode < periode" class="label label-warning" v-tooltip:top="'Laporan ini bukanlah laporan periode ' + formatPeriode(periode)"><i
							  class="icon-alert text-size-base"></i></span>
						&nbsp;
						{{ props.item.periode | dateMonth }}
					</td>
					<td v-if="!columnData[6].hide && !columnData[6].disable">
						<check-value :value="props.item.tp"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.l_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.l_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
					<check-value :value="props.item.p_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.p_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.total_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.total_anggota_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.aset" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.aset_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.aset_masalah" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.aset_tidak_menghasilkan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.aset_likuid_tidak_menghasilkan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.aktiva_lancar" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.simpanan_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.simpanan_saham_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.simpanan_saham_des" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.nonsaham_unggulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.nonsaham_harian" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[24].hide">
						<check-value :value="props.item.hutang_spd" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.hutang_tidak_berbiaya_30hari" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[26].hide">
						<check-value :value="props.item.total_hutang_pihak3" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[27].hide">
						<check-value :value="props.item.piutang_beredar" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[28].hide">
						<check-value :value="props.item.piutang_bersih" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[29].hide">
						<check-value :value="props.item.piutang_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.piutang_lalai_1bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[31].hide">
						<check-value :value="props.item.piutang_lalai_12bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[32].hide">
						<check-value :value="props.item.rasio_beredar" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[33].hide">
						<check-value :value="props.item.rasio_lalai" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[34].hide">
						<check-value :value="props.item.dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[35].hide">
						<check-value :value="props.item.dcu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[36].hide">
						<check-value :value="props.item.dana_gedung" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[37].hide">
						<check-value :value="props.item.donasi" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[38].hide">
						<check-value :value="props.item.bjs_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[39].hide">
						<check-value :value="props.item.beban_penyisihan_dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[40].hide">
						<check-value :value="props.item.investasi_likuid" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[41].hide">
						<check-value :value="props.item.total_pendapatan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[42].hide">
						<check-value :value="props.item.total_biaya" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[43].hide">
						<check-value :value="props.item.shu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[44].hide">
						<check-value :value="props.item.shu_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[45].hide">
						<check-value :value="props.item.rata_aset" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[46].hide">
						<check-value :value="props.item.laju_inflasi / 100" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[47].hide">
						<check-value :value="props.item.harga_pasar / 100" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[48].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[49].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :color="modalColor" :button="modalButton" @tutup="modalTutup"
		  @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>
			<template slot="modal-body1">
				<div class="alert bg-info alert-styled-left mt-1 pt-1 pb-1">
					<p>Laporan ini merupakan laporan konsolidasi dari beberapa laporan di Tp. Oleh karena hal tersebut maka untuk
						melakukan perubahan pada laporan konsolidasi mesti melakukan perubahan pada laporan Tp yang dapat dipilih
						dibawah:</p>
				</div>
				<hr>

				<div class="row">
					<div class="col-md-6  pt-1 pb-1" v-for="(index, laporanTp) in listLaporanTpData" :key="index">
						<a class="btn btn-light btn-block" @click.prevent="ubahLaporanTp(laporanTp.id)"><i class="icon-pencil5"></i>
							Ubah Laporan {{laporanTp.tp.name}}</a>
					</div>
				</div>

				<hr>
				<div class="text-center d-none d-md-block">
					<button type="button" @click.prevent="modalTutup" class="btn btn-light">
						<i class="icon-cross"></i> Tutup
					</button>
				</div>
				<div class="d-block d-md-none">
					<button type="button" @click.prevent="modalTutup" class="btn btn-light btn-block" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
				</div>
			</template>
		</app-modal>

	</div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import DataViewer from "../../components/dataviewer2.vue";
import appModal from "../../components/modal";
import checkValue from "../../components/checkValue.vue";
import collapseButton from "../../components/collapseButton.vue";

export default {
  components: {
    DataViewer,
    appModal,
    checkValue,
    collapseButton
  },
  props: ["title", "kelas","columnData"],
  data() {
    return {
      query: {
        order_column: "periode",
        order_direction: "desc",
        filter_match: "and",
        limit: 50,
        page: 1
      },
			excelDownloadUrl:'',
			excelUploads:[
				{
					enabled: true,
					url: 'laporanCu/uploadExcel',
					format_url: 'formatLaporanCu.xlsx',
					next_page_route: 'laporanCuDraft',
					button: 'Upload Laporan Konsolidasi CU'
				},
				{
					enabled: true,
					url: 'laporanCu/uploadExcelTp',
					format_url: 'formatLaporanTpSemua.xlsx',
					next_page_route: 'laporanTpDraft',
					button: 'Upload Laporan Tp'
				}
			],
			laporanCuDraftCount: [],
			laporanCuDraftCountStat: '',
			laporanTpDraftCount: [],
			laporanTpDraftCountStat: '',
			periode: '',
			selectedItem: [],
			state: '',
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalColor: "",
      modalButton: ""
    };
  },
  created() {
    this.checkProfile();
		this.fetch(this.query);
		this.columnGroup('semua');
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.isFirstLoad = true;
      this.fetch(this.query);
		},
		
		modelPeriodeStat(value){
			if(value === "success"){
				if(this.$route.meta.mode == 'periode'){
					this.periode = this.$route.params.periode;
				}else{
					this.periode = this.modelPeriode[0].periode;
				}
			}
		},

    // when updating data
    updateStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = "";
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = "";
      }
    }
  },
  methods: {
    fetch(params) {
			var i;
			this.checkProfile();
			
      if (this.$route.meta.mode == "periode") { // laporan cu with periode
				
				for(i = 0; i < this.columnData.length ; i++){
					if([2].includes(i)){
						this.columnData[i].disable = true;
					}else{
						this.columnData[i].disable = false;
					}	
				}

        this.$store.dispatch(this.kelas + "/indexPeriode", [
          params,
          this.$route.params.periode
				]);
				
				this.excelDownloadUrl = this.kelas + '/indexPeriode/' + this.$route.params.periode;
				this.periode = this.$route.params.periode;

      } else if (this.$route.meta.mode == "cu") {
				
				for(i = 0; i < this.columnData.length ; i++){
					if([1,2,3,4].includes(i)){
						this.columnData[i].disable = true;
					}else{
						this.columnData[i].disable = false;
					}	
				}
        
        if (this.$route.params.tp == "konsolidasi") { //laporan cu konsolidasi per cu
        
          this.$store.dispatch(this.kelas + "/indexCu", [
            params,
            this.$route.params.cu
          ]); 
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
					this.periode = '';

        } else { // laporan tp/kp per tp
          
					for(i = 0; i < this.columnData.length ; i++){
						if([1,2,3,4,6].includes(i)){
							this.columnData[i].disable = true;
						}else{
							this.columnData[i].disable = false;
						}	
					}

          this.$store.dispatch(this.kelas + "/indexTp", [
            params,
            this.$route.params.tp
          ]);
					this.excelDownloadUrl = 'laporanTp' + '/indexTp/' + this.$route.params.tp;
					this.periode = '';

        }
      } else if (this.$route.meta.mode == "cuPeriode") { // laporan tp/kp semua tp
				
				for(i = 0; i < this.columnData.length ; i++){
					if([1,3,4,6].includes(i)){
						this.columnData[i].disable = true;
					}else{
						this.columnData[i].disable = false;
					}	
				}

        this.$store.dispatch(this.kelas + "/indexTpPeriode", [
          params,
          this.$route.params.cu,
          this.$route.params.periode
        ]);
				this.excelDownloadUrl = 'laporanTp' + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.periode;
				this.periode = this.$route.params.periode;

      } else { // laporan cu default
				
				for(i = 0; i < this.columnData.length ; i++){
					if([2].includes(i)){
						this.columnData[i].disable = true;
					}else{
						this.columnData[i].disable = false;
					}	
				}

				this.$store.dispatch(this.kelas + "/index", params);
				// this.$store.dispatch(this.kelas + "/indexTotal");
				this.excelDownloadUrl = this.kelas;
      }
    },
		fetchLaporanCuDraft(){
			if(this.currentUser.can['upload_laporan_cu']){
				axios.get('/api/laporanCuDraft/count')
					.then(response => {
						this.laporanCuDraftCount = response.data.model;
						this.laporanCuDraftCountStat = 'success';
					})
					.catch(error => {
						this.laporanCuDraftCount = error.response;
						this.laporanCuDraftCountStat = 'fail';
					});
			}
		},
		fetchLaporanTpDraft(){
			if(this.currentUser.can['upload_laporan_tp']){
				axios.get('/api/laporanTpDraft/count')
					.then(response => {
						this.laporanTpDraftCount = response.data.model;
						this.laporanTpDraftCountStat = 'success';
					})
					.catch(error => {
						this.laporanTpDraftCount = error.response;
						this.laporanTpDraftCountStat = 'fail';
					});
			}
		},
    checkProfile() {
      if (this.currentUser.id_cu != 0) {
        if ( this.$route.meta.mode == "cu" || this.$route.meta.mode == "cuPeriode") {
          if (this.currentUser.id_cu != this.$route.params.cu) {
            this.$router.push({
              name: "notFound"
            });
          }
        } else if (this.$route.meta.mode == "periode") {
          this.$router.push({
            name: "notFound"
          });
        } else {
          this.$router.push({
            name: "notFound"
          });
				}

				this.excelUploads[0].url = 'laporanCu/uploadExcel';
				this.excelUploads[0].format_url = 'formatLaporanCu.xlsx';
				this.excelUploads[1].url = 'laporanTp/uploadExcel';
				this.excelUploads[1].format_url = 'formatLaporanTp.xlsx';
      }else{
				this.excelUploads[0].url = 'laporanCu/uploadExcelAll';
				this.excelUploads[0].format_url = 'formatLaporanCuSemua.xlsx';
				this.excelUploads[1].url = 'laporanTp/uploadExcelAll';
				this.excelUploads[1].format_url = 'formatLaporanTpSemua.xlsx';
			}

			if(this.currentUser.can['upload_laporan_cu']){
				this.excelUploads[0].enabled = true;
			}else{
				this.excelUploads[0].enabled = false;
			}

			if(this.currentUser.can['upload_laporan_tp']){
				this.excelUploads[1].enabled = true;
			}else{
				this.excelUploads[1].enabled = false;
			}
    },
    selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData(id, tp) {
      if (tp) {
        if (tp.id) {
          this.ubahLaporanTp(id);
        } else {
          this.modalShow = true;
          this.modalState = "normal1";
          this.modalColor = "bg-primary";
          this.modalTitle = "Ubah Laporan Konsolidasi";
          this.$store.dispatch("laporanTp/listLaporanTp", [
            this.selectedItem.id_cu,
            this.selectedItem.periode
          ]);
        }
      } else {
        this.$router.push({
          name: this.kelas + "Edit",
          params: {
            id: id
          }
        });
      }
    },
    ubahLaporanTp(id, tp) {
      this.modalShow = false;
      this.$router.push({
        name: "laporanTpEdit",
        params: {
          id: id
        }
      });
    },
    detailData(id, tp) {
      if (tp && tp.id) {
        this.$router.push({
          name: "laporanTpDetail",
          params: {
            id: id
          }
        });
      } else {
        this.$router.push({
          name: "laporanCuDetail",
          params: {
            id: id
          }
        });
      }
		},
		columnGroup(value){
			var i;
			if(value == 'anggota'){
				for(i = 0; i < this.columnData.length ; i++){
					if([0,1,2,3,4,5,6,7,8,9,10,11,12,48,49].includes(i)){
						this.columnData[i].hide = false;
					}else{
						this.columnData[i].hide = true;
					}	
				}
			}else if(value == 'aset'){
				for(i = 0; i < this.columnData.length ; i++){
					if([0,1,2,3,4,5,6,13,14,15,16,17,19,22,23,45,48,49].includes(i)){
						this.columnData[i].hide = false;
					}else{
						this.columnData[i].hide = true;
					}	
				}
			}else if(value == 'shu'){
				for(i = 0; i < this.columnData.length ; i++){
					if([0,1,2,3,4,5,6,34,35,41,42,43,44,48,49].includes(i)){
						this.columnData[i].hide = false;
					}else{
						this.columnData[i].hide = true;
					}
				}
			}else if(value == 'piutang'){
				for(i = 0; i < this.columnData.length ; i++){
					if([0,1,2,3,4,5,6,27,28,29,30,31,32,33,48,49].includes(i)){
						this.columnData[i].hide = false;
					}else{
						this.columnData[i].hide = true;
					}
				}
			}else if(value == 'semua'){
				for(i = 0; i < this.columnData.length ; i++){
						this.columnData[i].hide = false;
				}
			}
		},
    modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalColor = "";
      this.modalState = "confirm-tutup";
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "hapus") {
        this.modalTitle =
          "Hapus " + this.title +  " ?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk() {
      if (this.state == "hapus") {
				 if (this.selectedItem.tp) {
        		this.$store.dispatch("laporanTp/destroy", this.selectedItem.tp);
				 }else{
						this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
				 }
      }
    },
    formatPeriode(value) {
      return Vue.filter("dateMonth")(value);
    }
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser"
    }),
    ...mapGetters("global", {
      idCu: "idCu",
      idTp: "idTp",
      selectData: "data"
    }),
    ...mapGetters("cu", {
      modelCU: "dataS",
      modelCUStat: "dataStatS"
    }),
    ...mapGetters("tp", {
      modelTp: "dataS",
      modelTpStat: "dataStatS"
    }),
    ...mapGetters("laporanCu", {
			totalData: "data",
			totalDataStat: "dataStat",
      itemData: "dataS",
      itemDataStat: "dataStatS",
      modelPeriode: "periode",
      modelPeriodeStat: "periodeStat",
      updateMessage: "update",
      updateStat: "updateStat"
    }),
    ...mapGetters("laporanTp", {
      listLaporanTpData: "data2S",
      listLaporanTpDataStat: "dataStat2S"
    })
  }
};
</script>