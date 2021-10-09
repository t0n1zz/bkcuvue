<template>
	<div>
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">
			<template slot="item-desktop" slot-scope="props">
				<tr class="text-nowrap" v-if="props.item">
					<td>{{ props.index + 1 }}</td>
					<td>
						<img :src="'/images/anggota/' + props.item.anggota_data[0].anggota_cu.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.anggota_data">
						<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td>
						<check-value :value="props.item.anggota_data[0].anggota_cu_cu.no_ba" v-if="props.item.anggota_data"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<check-value :value="props.item.anggota_data[0].anggota_cu.nik" v-if="props.item.anggota_data"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<check-value :value="props.item.anggota_data[0].anggota_cu.name" v-if="props.item.anggota_data"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<span v-if="props.item.anggota_data" v-html="$options.filters.checkStatus(props.item.anggota_data[0].anggota_cu.tanggal_lahir)"></span>
						<span v-else>-</span>
					</td>
					<td><check-value :value="props.item.umur_masuk"></check-value></td>
					<td><check-value :value="props.item.umur_sekarang"></check-value></td>
					<td><check-value :value="props.item.umur_cair"></check-value></td>
					<td><check-value :value="props.item.anggota_data"></check-value></td>
				</tr>
			</template>	
		</data-viewer>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import checkValue from '../../components/checkValue.vue';
	
	export default {
		components: {
			DataViewer,
			checkValue
		},
		props: ['kelas','title','produkData','lokasi'],
		data() {
			return {
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
						title: 'Foto',
						name: 'anggota_cu.gambar',
						hide: false,
					},
					{
						title: 'No. BA',
						name: 'anggota_cu_cu.noba',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
            title: 'No. KTP / NIK',
            name: 'anggota_cu.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Nama',
            name: 'anggota_cu.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
            filterDefault: true
          },
					{
            title: 'Tgl. Lahir',
            name: 'anggota_cu.tanggal_lahir',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Umur Masuk',
            name: 'umur masuk',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Umur Sekarang',
            name: 'umur_sekarang',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
					{
            title: 'Umur Cair',
            name: 'umur_cair',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
				],
			}
		},
		created(){
			var produk;
			for (produk of this.produkData){
				if(produk.produk){
					this.columnData.push({
						title: produk.produk.name,
						name: produk.id,
						tipe: 'numeric',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
					});
				}
			}
			this.fetch(this.query, this.lokasi);
		},
		watch: {
		},
		methods: {
			fetch(params, lokasi){
				this.$store.dispatch(this.kelas + '/indexAnggota',[params, this.$route.params.id, lokasi]);	
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