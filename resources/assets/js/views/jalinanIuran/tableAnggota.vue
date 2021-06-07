<template>
	<div>

		<div class="card">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">Calon</h5>
				<div class="header-elements">
						<button type="button" class="btn btn-light btn-icon mb-1" @click.prevent="fetch()">
							<i class="icon-sync"></i>
						</button>
				</div>
			</div>

			<data-table :items="itemDataCalon" :columnData="columnDataCalon" :itemDataStat="itemDataCalonStat">
				<template slot="item-desktop" slot-scope="props">
					<tr class="text-nowrap" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
							<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
						</td>
						<td>{{ props.item.name }}</td>
						<td>{{ props.item.tanggal_lahir }}</td>
						<td>{{ props.item.tempat_lahir }}</td>
						<td>{{ props.item.status }}</td>
						<td>{{ props.item.pendidikan }}</td>
					</tr>
				</template>	
			</data-table>

		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import dataTable from '../../components/datatable.vue';
	
	export default {
		components: {
			dataTable,
		},
		props: ["itemData"],
		data() {
			return {
				columnDataCalon:[
					{ title: 'No.' },
					{ title: 'No. BA' },
					{ title: 'Nik' },
					{ title: 'Nama' },
					{ title: 'Usia' },
					{ title: 'Alamat' },
					{ title: 'Pekerjaan' },
				],
			}
		},
		created(){
			this.fetch();
		},
		watch: {
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
			},
		},
		computed: {
		}
	}
</script>