<template>
	<div>

		<div class="row">
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-danger' : cuTabName == 'semua' || cuTabName == '1', 'bg-slate-300' : cuTabName != 'semua' && cuTabName != '1'}" @click="changeTabCU(1)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(1) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Poor(1)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-warning' : cuTabName == 'semua' || cuTabName == '2', 'bg-slate-300' : cuTabName != 'semua' && cuTabName != '2'}" @click="changeTabCU(2)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(2) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Fair(2)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-success' : cuTabName == 'semua' || cuTabName == '3', 'bg-slate-300' : cuTabName != 'semua' && cuTabName != '3'}" @click="changeTabCU(3)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(3) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Good(3)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-primary' : cuTabName == 'semua' || cuTabName == '4', 'bg-slate-300' : cuTabName != 'semua' && cuTabName != '4'}" @click="changeTabCU(4)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(4) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Excellent(4)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-danger' : bkcuTabName == 'semua' || bkcuTabName == '1', 'bg-slate-300' : bkcuTabName != 'semua' && bkcuTabName != '1'}" @click="changeTabBKCU(1)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">BKCU: {{ jumlahPenilaianBKCU(1) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Poor(1)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-warning' : bkcuTabName == 'semua' || bkcuTabName == '2', 'bg-slate-300' : bkcuTabName != 'semua' && bkcuTabName != '2'}" @click="changeTabBKCU(2)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">BKCU: {{ jumlahPenilaianBKCU(2) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Fair(2)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-success' : bkcuTabName == 'semua' || bkcuTabName == '3', 'bg-slate-300' : bkcuTabName != 'semua' && bkcuTabName != '3'}" @click="changeTabBKCU(3)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">BKCU: {{ jumlahPenilaianBKCU(3) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Good(3)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-primary' : bkcuTabName == 'semua' || bkcuTabName == '4', 'bg-slate-300' : bkcuTabName != 'semua' && bkcuTabName != '4'}" @click="changeTabBKCU(4)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">BKCU: {{ jumlahPenilaianBKCU(4) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Excellent(4)</span>
						</div>
					</div>
				</div>
			</div>
			<transition enter-active-class="animated fadeIn" mode="out-in">
				<div class="col-md-12" v-if="cuTabName != 'semua' || bkcuTabName != 'semua'">
					<button type="button" class="btn btn-warning btn-block" @click.prevent="changeTabCU('semua')">
						<i class="icon-reset"></i> Reset pencarian
					</button>
				</div>
			</transition>
			<div class="col-md-12"><hr/></div>
		</div>
          
	</div>
</template>

<script>

	export default {
		props: ['cuTabName','bkcuTabName','jumlahPenilaianCU','jumlahPenilaianBKCU'],
		components: {
		},
		data() {
			return {
			}
		},
		created(){
		},
		watch: {
    },
		methods: {
			changeTabCU(value){
				this.$emit('changeTabCU', value);
			},
			changeTabBKCU(value){
				this.$emit('changeTabBKCU', value);
			},
		},
		computed: {
			
		}
	}
</script>
