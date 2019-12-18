<template>
	<div>
		
		<div class="card card-body">
			<card-data :itemData="selectedItem"></card-data>
		</div>

		<!-- tabel aset -->
		<data-viewer :title="'sub aset tetap'" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetch" :isDasar="'true'" :isNoButtonRow="'true'" v-if="itemData.data && itemData.data.length != 0">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr class="text-nowrap cursor-pointer" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td>
						<img :src="'/images/asetTetap/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td>
						<check-value :value="props.item.kode"></check-value>
					</td>
					<td>
						<check-value :value="props.item.name"></check-value>
					</td>
					<td>
						<check-value :value="props.item.jenis.name" v-if="props.item.jenis"></check-value>
					</td>
					<td>
						<check-value :value="props.item.merk"></check-value>
					</td>
					<td>
						<check-value :value="props.item.tipe"></check-value>
					</td>
					<td>
						<check-value :value="props.item.lokasi.name" v-if="props.item.lokasi"></check-value>
					</td>
					<td>
						<check-value :value="props.item.aktivis.name" v-if="props.item.aktivis"></check-value>
					</td>
					<td v-html="$options.filters.date(props.item.tanggal)">
					</td>
					<td>
						<check-value :value="props.item.pembeli.name" v-if="props.item.pembeli"></check-value>
					</td>
					<td>
						<check-value :value="props.item.has_aset_count" valueType="currency"></check-value>
					</td>
					<td>
						<check-value :value="props.item.harga" valueType="currency"></check-value>
					</td>
					<td>
						<check-value :value="props.item.harga_sub" valueType="currency"></check-value>
					</td>
					<td>
						<check-value :value="props.item.total_harga" valueType="currency"></check-value>
					</td>
					<td>
						<check-value :value="props.item.kondisi"></check-value>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block" v-if="isModal">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none" v-if="isModal">
			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import Message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import DataViewer from '../../components/dataviewer2.vue';
	import cardData from "./card.vue";

	export default {
		props: ['kelas','selectedItem','selectedItemStat','isModal'],
		components: {
			checkValue,
			Message,
			Cleave,
			infoIcon,
			wajibBadge,
			DataViewer,
			cardData
		},
		data() {
			return {
				formData:{},
				modelProdukCu: [],
				modelProdukCuStat: '',
				cleaveOption: {
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
				},
				selectedItemRow: {},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Kode' },
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
					{ title: 'Jenis' },
					{ title: 'Merk' },
					{ title: 'Tipe' },
					{ title: 'Lokasi' },
					{ title: 'Penanggungjawab' },
					{ title: 'Tgl. Beli' },
					{ title: 'Pembeli' },
					{ title: 'Sub' },
					{ title: 'Harga Induk' },
					{ title: 'Harga Sub' },
					{ title: 'Total Harga' },
					{ title: 'Kondisi' },
				],
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			if(this.isModal){
				this.fetch(this.query);
			}
			this.formData = Object.assign({},this.selectedItem);
		},
		watch: {
			modelLokasiStat(value){
				if(value === "success"){
					this.formData = Object.assign({},this.selectedItem);
				}
			},
			selectedItemStat(value){
				if(value === 'success' && !this.isModal){
					this.fetch(this.query);
				}
			}
		},
		methods: {
			save(){
				this.$validator.validateAll('formData').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/update',[this.selectedItem.id, this.formData]);
					}else{
						this.submited = true;
					}	
				});
			},
			selectedRow(item){
				this.selectedItemRow = item;
			},
			fetch(params){
				this.$store.dispatch(this.kelas +'/resetDataS2');
				this.$store.dispatch(this.kelas + '/indexSub', [params, this.selectedItem.id]);
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetap',{
				itemData: 'dataS2',
				itemDataStat: 'dataStatS2',
				updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>