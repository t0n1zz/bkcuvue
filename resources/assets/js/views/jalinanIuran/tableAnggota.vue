<template>
	<div>
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">{{ title }}</h5>
			</div>
			<div class="card-body d-print-none">
				<div class="row">
					<!-- button desktop -->
					<div class="col-md-7 col-lg-9 pb-2 d-none d-sm-block">
						{{ deskripsi }}
					</div>
					<!-- button mobile -->
					<div class="col-md-12 pb-2 d-block d-sm-none">
						{{ deskripsi }}
					</div>

					<div class="col-md-5 col-lg-3 text-right d-none d-sm-block">
						<json-excel 
								class="btn bg-green-300 btn-icon mb-1"
								:data="excel.data"
								:exportFields="excel.fields" 
								:meta="excel.meta" 
								:title="'Data ' + title" 
								:name="title + '.xls'"
								:disabled="itemDataStat === 'loading'"
								><i class="icon-file-excel"></i> Excel</json-excel>   

						<button type="button" class="btn btn-light btn-icon mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
							<i class="icon-sync" :class="{'spinner' : itemDataStat === 'loading'}"></i>
						</button>
					</div>
					<div class="col-md-12 d-block d-sm-none">
						<json-excel 
								class="btn bg-green-300 btn-icon btn-block mb-1"
								:data="excel.data"
								:exportFields="excel.fields" 
								:meta="excel.meta" 
								:title="'Data ' + title" 
								:name="title + '.xls'"
								:disabled="itemDataStat === 'loading'"
								><i class="icon-file-excel"></i> Excel</json-excel>   
						<button type="button" class="btn btn-light btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
							<i class="icon-sync" :class="{'spinner' : itemDataStat === 'loading'}"></i> Reload
						</button>
					</div>
				</div>
			</div>
			<data-table :columnData="columnData" :items="itemData" :itemDataStat="itemDataStat">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)" class="text-nowrap" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.no_ba"></check-value>
						</td>
						<td>
							<check-value :value="props.item.nik"></check-value>
						</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<span v-if="props.item.tanggal_lahir" v-html="$options.filters.date(props.item.tanggal_lahir)"></span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.tanggal_masuk" v-html="$options.filters.ageDiff(props.item.tanggal_masuk, props.item.tanggal_lahir)"></span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.tanggal_lahir" v-html="$options.filters.age(props.item.tanggal_lahir)"></span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.tanggal_cair" v-html="$options.filters.age(props.item.tanggal_cair)"></span>
							<span v-else>-</span>
						</td>
						<td v-for="column in columnData" v-if="column.id">
							<check-value :value="props.item[column.id]" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.plafon" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.pengurang" valueType="currency"></check-value>
						</td>
					</tr>
				</template>	
			</data-table>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import dataTable from '../../components/datatable.vue';
	import checkValue from '../../components/checkValue.vue';
	import jsonExcel from 'vue-json-excel';
	
	export default {
		components: {
			dataTable,
			checkValue,
			jsonExcel
		},
		props: ['kelas','title','deskripsi','produkData','cu','lokasi'],
		data() {
			return {
				selectedItem: [],
				plafon: 0,
				query: {
					order_column: "id",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				columnData:[
					{ 
						title: 'No.',
						name: 'No'
					},
					{
						title: 'No. BA',
						name: 'no_ba',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
            title: 'No. KTP / NIK',
            name: 'name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Nama',
            name: 'name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
            filterDefault: true
          },
					{
            title: 'Tgl. Lahir',
            name: 'tanggal_lahir',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Umur Masuk',
            name: 'tanggal_masuk',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Umur Sekarang',
            name: 'tanggal_lahir',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Umur Cair',
            name: 'tanggal_cair',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
				],
				excel: {
          fields: {},
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
			var produk;
			for (produk of this.produkData){
				if(produk.produk){
					if(produk.produk.jalinan == 1){
						if(this.lokasi == 3 || this.lokasi == 4 || this.lokasi == 5 || this.lokasi == 6 || this.lokasi == 7 || this.lokasi == 8 || this.lokasi == 9 || this.lokasi == 10 || this.lokasi == 11){
							if(produk.produk.tipe == 'Simpanan Wajib' || produk.produk.tipe == 'Simpanan Pokok' || produk.produk.tipe == 'Simpanan Non Saham'){	
								this.columnData.push({
									title: produk.produk.name,
									name: 'X' + produk.produk_cu_id,
									id: 'X' + produk.produk_cu_id,
									tipe: 'numeric',
								});
							}
						}else{
							if(produk.produk.tipe == 'Pinjaman Kapitalisasi' || produk.produk.tipe == 'Pinjaman Umum' || produk.produk.tipe == 'Pinjaman Produktif'){	
								this.columnData.push({
									title: produk.produk.name,
									name: 'X' + produk.produk_cu_id,
									id: 'X' + produk.produk_cu_id,
									tipe: 'numeric',
								});
							}
						}
					}
				}
			}
			this.columnData.push({
				title: 'Total',
				name: 'total',
				tipe: 'numeric',
			});
			this.columnData.push({
				title: 'Plafon',
				name: 'plafon',
				tipe: 'numeric',
			});
			this.columnData.push({
				title: 'Pengurang',
				name: 'pengurang',
				tipe: 'numeric',
			});
			this.fetch(this.query);
		},
		watch: {
			itemDataStat(value){
				if (value == 'success') {
					this.fieldExcel();
				}
			}
		},
		methods: {
			fetch(params){
				this.$store.dispatch(this.kelas + '/indexAnggota',[params, this.$route.params.id, this.cu, this.lokasi]);	
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			fieldExcel() {
        var vm = this;
        vm.excel.fields = {};
        vm.columnData.forEach(function (column) {
          if (!column.hide && !column.disable && column.tipe) {
            if(column.excelName){
              vm.excel.fields[column.title] = column.excelName;
            }else{
              vm.excel.fields[column.title] = column.name;
            }
          }
        });
        vm.excel.data = vm.itemData;
      },
		},
		computed: {
			...mapGetters('jalinanIuran',{
				itemData: 'dataS2',
				itemDataStat: 'dataStatS2',
			}),
		}
	}
</script>