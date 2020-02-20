<template>
	<div>

		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Score Card</h5>
			</div>
		</div>
		
		<!-- next button -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua'">
			<div class="card card-body" v-if="form.p4.p4b20_cu_penilaian != '' && form.p4.p4b20_cu_keterangan != ''">
				<div class="text-center d-none d-md-block">
					<button type="button" class="btn btn-light" @click.prevent="prev">
						<i class="icon-arrow-left13"></i> Kembali
					</button>

					<button type="button" class="btn btn-primary" @click.prevent="next">
						<i class="icon-arrow-right14"></i> Selanjutnya
					</button>
				</div>
				<div class="d-block d-md-none">
					<button type="button" class="btn btn-primary btn-block" @click.prevent="next">
						<i class="icon-arrow-right14"></i> Selanjutnya
					</button>

					<button type="button" class="btn btn-light btn-block" @click.prevent="prev">
						<i class="icon-arrow-left13"></i> Kembali
					</button>
				</div>
			</div>
		</div>
		</transition>
          
	</div>
</template>

<script>
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		props: ['form','mode'],
		components: {
			wajibBadge
		},
		data() {
			return {
				tabName: 'semua',
			}
		},
		created(){
		},
		watch: {
    },
		methods: {
			changeTab(value){
				this.tabName = value;
			},
			prev(){
				this.$emit('prev');
			},
			next(){
				this.$emit('next');
			},
		},
		computed: {
			
		}
	}
</script>
