<template>
  <div>
    <div class="card">
			<div class="card-header bg-light">
				<h6 class="card-title">CU Terdaftar</h6>
			</div>
			<data-table :items="itemDataPesertaTerdaftarCU" :columnData="columnDataCU" :itemDataStat="itemDataPesertaTerdaftarCUStat">
				<template slot="item-desktop" slot-scope="props">
					<tr v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.lakilaki"></check-value>
						</td>
						<td>
							<check-value :value="props.item.perempuan"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total"></check-value>
						</td>
					</tr>
				</template>	
			</data-table>
		</div>

		<!-- <div class="card">
			<div class="card-header bg-light">
				<h6 class="card-title">CU Hadir</h6>
			</div>
			<data-table :items="itemDataPesertaHadirCU" :columnData="columnDataCU" :itemDataStat="itemDataPesertaHadirCUStat">
				<template slot="item-desktop" slot-scope="props">
					<tr v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.lakilaki"></check-value>
						</td>
						<td>
							<check-value :value="props.item.perempuan"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total"></check-value>
						</td>
					</tr>
				</template>	
			</data-table>
		</div> -->

  </div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";
	import checkbox from '../../components/checkbox.vue';
  import dataTable from '../../components/datatable.vue';
  import Cleave from 'vue-cleave-component';
  import checkValue from '../../components/checkValue.vue';

	export default {
		props: ['kelas'],
		components: {
			formInfo,
			message,
			checkbox,
      dataTable,
      Cleave,
      checkValue,
		},
		data() {
			return {
        excelDownloadUrl: '',
        isDisableTable: false,
        selectedItem: '',
				columnDataCU: [
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Laki-Laki' },
          { title: 'Perempuan' },
					{ title: 'Total' },
				],
			}
		},
		created() {
      this.fetchStatistik();
		},
		watch: {
      itemStat(value){},
      updateStat(value) {
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
      }
		},
		methods: {
      fetchStatistik(){
				this.$store.dispatch(this.kelas + '/indexPesertaCountCu', this.item.id);
				this.$store.dispatch(this.kelas + '/indexPesertaHadirCountCu', this.item.id);
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
      ...mapGetters('kegiatanBKCU', {
        item: 'data',
				itemStat: 'dataStat',
				itemDataPesertaTerdaftarCU: 'dataS6',
				itemDataPesertaTerdaftarCUStat: 'dataStatS6',
				itemDataPesertaHadirCU: 'dataS7',
				itemDataPesertaHadirCUStat: 'dataStatS7',
        updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>