<template>
	<div>
		<!-- navbar -->
		<div class="nav-tabs-responsive mb-3">
			<ul class="nav nav-tabs nav-tabs-solid nav-justified bg-light">
			<li class="nav-item">
					<a href="#" class="nav-link" :class="{'active' : tabName == 'qrBig'}" @click.prevent="changeTab('qrBig')"><i class="icon-enlarge6 mr-2"></i> Ukuran Panjang</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link" :class="{'active' : tabName == 'qrSmall'}" @click.prevent="changeTab('qrSmall')"><i class="icon-shrink6 mr-2"></i> Ukuran Ringkas</a>
				</li>
			</ul>
		</div>
		<!-- navbar -->

		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'qrBig'">
				<div ref="qrBig" id="qrBig">
					<div class="d-flex align-items-end">
						<qrcode-vue :value="qrValue" :size="'130'" :renderAs="'svg'" level="M" class="mr-3 mt-2 ml-2 mb-2"></qrcode-vue>
						<div>
							<ul class="list list-unstyled mb-0">
								<li class="mt-0"><b style="font-size: 24px;"><span style="color:blue;">PUSKOPCUINA</span></b></li>
								<li class="mt-0"><b style="font-size: 18px;">Kode: {{ selectedItem.kode }}</b></li>
								<li class="mt-0"><b style="font-size: 18px;">Nama: {{ selectedItem.name }}</b></li>
							</ul>	
						</div>
					</div>
				</div>
			</div>
		</transition>	

		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'qrSmall'" class="align-items-center">
				<div ref="qrSmall" id="qrSmall">
					<div class="d-flex justify-content-center">
						<div>
							<qrcode-vue :value="qrValue" :size="'150'" :renderAs="'svg'" level="M" class="mt-2"></qrcode-vue>
							<ul class="list list-unstyled mb-0 mt-1">
								<li class="mt-0 mb-0"><b style="font-size: 10px;"><span style="color:blue;">PUSKOPCUINA</span></b></li>
								<li class="mt-0"><b style="font-size: 12px;">Kode: {{ selectedItem.kode }}</b></li>
								<li class="mt-0"><b style="font-size: 12px;">Nama: {{ selectedItem.name }}</b></li>
							</ul>	
						</div>
					</div>
				</div>
			</div>
		</transition>	

		<hr/>

		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
			<button type="button" class="btn btn-light" @click.prevent="download()">
				<i class="icon-file-download"></i> Download</button>
			<button type="button" class="btn btn-light" @click.prevent="print()">
				<i class="icon-printer"></i> Print</button>
		</div> 

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="print()">
				<i class="icon-printer"></i> Print</button>
			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="download()">
				<i class="icon-file-download"></i> Download</button>
			<button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>  
	</div>
</template>

<script>
	import QrcodeVue from 'qrcode.vue';
	import FileSaver from 'file-saver';

	export default {
		components: {
			QrcodeVue,
		},
		props:['selectedItem'],
		data() {
			return {
				tabName: 'qrBig',
				qrValue: '',
			}
		},
		created(){
			this.qrValue = 'puskopcuina.org/admins/asetTetap/detail/' + this.selectedItem.kode;
		},
		methods: {
			changeTab(value) {
				this.tabName = value;
      },
			print(){
        this.$htmlToPaper(this.tabName);
			},
			async download() {
				const options = {
					type: 'dataURL'
				}

				if(this.tabName == 'qrBig'){
					 this.output = await this.$html2canvas(this.$refs.qrBig, options);
				}else{
					this.output = await this.$html2canvas(this.$refs.qrSmall, options);
				}
				
				FileSaver.saveAs(this.output, this.selectedItem.kode);
			},
			tutup(){
				this.$emit('tutup');
			}
		},
	}
</script>