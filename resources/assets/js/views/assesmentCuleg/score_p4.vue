<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">4. SCORE CARD PERSPEKTIF ORIENTASI BERSAMA</h5>
				<div class="header-elements">
					<div class="list-icons">
						<a href="#" class="list-icons-item" @click.prevent="collapsed = !collapsed">
							<i :class="{'icon-arrow-up12' : collapsed, 'icon-arrow-down12' : !collapsed}"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="text-right d-none d-sm-block">
					<json-excel 
              class="btn bg-green-300 btn-icon"
              :data="excel.data"
              :exportFields="excel.fields" 
              :meta="excel.meta" 
              :title="'Data ' + title" 
              :name="title + '.xls'"
              ><i class="icon-folder-download2"></i> Download Excel</json-excel> 
				</div>	
				<div class="d-block d-sm-none">
					<json-excel 
              class="btn bg-green-300 btn-icon btn-block"
              :data="excel.data"
              :exportFields="excel.fields" 
              :meta="excel.meta" 
              :title="'Data ' + title" 
              :name="title + '.xls'"
              ><i class="icon-folder-download2"></i> Download Excel</json-excel> 
				</div>	
			</div>
			<div class="table-responsive" v-show="!collapsed">
				<table class="table table-bordered">
					<thead class="bg-primary">
						<tr class="text-nowarp">
							<th>INDIKATOR</th>
							<th>SKOR CU</th>
							<th>SKOR BKCU</th>
							<th>KETERANGAN CU</th>
							<th>KETERANGAN BKCU</th>
							<th>REKOMENDASI BKCU</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>4.1. Tanggapan anggota yang berkualitas</td>
							<td><check-value :value="form.p4.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4.2. Tinjauan keluhan yang tepat </td>
							<td><check-value :value="form.p4.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4.3. Keluhan anggota</td>
							<td><check-value :value="form.p4.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4.4. Membangun kesepakatan (consensus) untuk sebuah keputusan</td>
							<td><check-value :value="form.p4.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP4" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP4" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
          
	</div>
</template>

<script>
	import checkValue from "../../components/checkValue.vue";
	import jsonExcel from 'vue-json-excel';

	export default {
		props: ['form','mode','jumlahIndikator','bobotSkor',
			'nilaiSkorCUP4',
			'nilaiSkorBKCUP4',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_orientasi_bersama_' + this.form.cu.no_ba,
				collapsed: false,
				excel: {
          fields: {
						perspektif: 'perspektif',
						skor_cu: 'skor_cu',
						skor_bkcu: 'skor_bkcu',
						keterangan_cu: 'keterangan_cu',
						keterangan_bkcu: 'keterangan_bkcu',
						rekomendasi_bkcu: 'rekomendasi_bkcu',
					},
					data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
			}
		},
		created(){
			this.excel.data = [
				{
					perspektif: '4.1. Tanggapan anggota yang berkualitas',
					skor_cu: this.form.p4.a1_cu_penilaian/1,
					skor_bkcu: this.form.p4.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p4.a1_cu_keterangan,
					keterangan_bkcu: this.form.p4.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '4.2. Tinjauan keluhan yang tepat ',
					skor_cu: this.form.p4.a2_cu_penilaian/1,
					skor_bkcu: this.form.p4.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p4.a2_cu_keterangan,
					keterangan_bkcu: this.form.p4.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '4.3. Keluhan anggota',
					skor_cu: this.form.p4.a3_cu_penilaian/1,
					skor_bkcu: this.form.p4.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p4.a3_cu_keterangan,
					keterangan_bkcu: this.form.p4.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '4.4. Membangun kesepakatan (consensus) untuk sebuah keputusan',
					skor_cu: this.form.p4.a4_cu_penilaian/1,
					skor_bkcu: this.form.p4.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p4.a4_cu_keterangan,
					keterangan_bkcu: this.form.p4.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.a4_bkcu_rekomendasi,
				},
			]
		},
		watch: {
    },
		methods: {
		},
		computed: {
			
		}
	}
</script>
