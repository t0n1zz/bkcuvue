<template>
	<div>

		<!-- desktop -->
		<div class="card d-none d-md-block d-print-none">
			<div class="card-body">

				<!-- periode -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Periode</span>
					</div>
					<select class="form-control" name="periode" v-model="periode" data-width="100%"
						:disabled="modelDataStat === 'loading'" @change="fetch">
						<option disabled value="">Silahkan pilih periode</option>
						<option disabled value="">----------------</option>
						<option value="2023">2023</option>
						<!-- <option v-for="(data, index) in modelData" :value="data" :key="index">{{data}}</option> -->
					</select>

					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Bulan</span>
					</div>
					<select class="form-control" name="periode" v-model="bulann" data-width="100%"
						:disabled="modelDataStat === 'loading'" @change="fetch">
						<option disabled value="">Silahkan pilih bulan</option>
						<option value="semua">Semua</option>
						<option v-for="(bulan, index) in bulan" :value="index + 1" :key="index">{{ bulan }}</option>
					</select>

					<!-- reload -->
					<div class="input-group-append">
						<button class="btn btn-light" @click="fetch" :disabled="modelDataStat === 'loading'">
							<i class="icon-sync" :class="{ 'spinner': modelDataStat === 'loading' }"></i>
						</button>
					</div>
				</div>

			</div>
		</div>

		<!-- mobile -->
		<div class="card d-block d-md-none d-print-none">
			<div class="card-body">

				<!-- periode -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Data</span>
					</div>
					<select class="form-control" name="periode" v-model="periode" data-width="100%"
						@change="changePeriode($event.target.value)" :disabled="modelDataStat === 'loading'">
						<option disabled value="">Silahkan pilih periode</option>
						<option value="semua">Semua</option>
						<option disabled value="">----------------</option>
						<option v-for="(data, index) in modelData" :key="index" :value="data">{{ data }}</option>
					</select>
				</div>

				<!-- reload  -->
				<div class="pt-2">
					<button class="btn btn-light btn-lg btn-block" @click="fetchData"
						:disabled="modelDataStat === 'loading'">
						<i class="icon-sync" :class="{ 'spinner': modelDataStat === 'loading' }"></i> Reload
					</button>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: ['kelas'],
	data () {
		return {
			periode: '',

			bulan: [
				'Januari',
				'Februari',
				'Maret',
				'April',
				'Mei',
				'Juni',
				'Juli',
				'Agustus',
				'September',
				'Oktober',
				'November',
				'Desember'
			],

			bulann: ''
		}
	},
	created () {
		this.fetchData();
	},
	watch: {
		'$route' (to, from) {
			// check current page meta
			this.fetchData();
		},
		modelDataStat (value) {
			if (value === "success") {
				this.periode = this.$route.params.tahun;
			}
		},
	},
	methods: {
		fetch () {
			if (this.kelas == 'pribadi') {
				this.$router.push({ name: 'indexPresensiPribadi', params: { tahun: this.periode, bulan: this.bulann } });
			} else { 
				this.$router.push({ name: 'indexPresensiAll', params: { tahun: this.periode, bulan: this.bulann } });
			}
			
		},
		fetchData () {
			this.periode = this.$route.params.tahun;
			this.bulann = this.$route.params.bulan;
		},
		changePeriode (periode) {
			this.fetch();
		}
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('presensi', {
			modelData: 'terlambatS',
			modelDataStat: 'terlambatStat',
		}),
	}
}
</script>