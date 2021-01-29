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
				<div class="row" ref="qrBig" id="qrBig" >
					<div class="col-md-6" v-for="(item, index) in itemData.data" :key="index">						
						<div class="d-flex align-items-end">
							<qrcode-vue :value="'puskopditbkcukalimantan.org/admins/asetTetap/detail/' + item.kode" :size="'130'" :renderAs="'svg'" level="M" class="mr-3 mt-2 ml-2 mb-2"></qrcode-vue>
							<div>
								<ul class="list list-unstyled mb-2">
									<li class="mt-0"><b style="font-size: 1.5em;"><span style="color:blue;">PUSKOPCUINA</span></b></li>
									<li class="mt-0"><b style="font-size: 1em;">Kode: {{ item.kode }}</b></li>
									<li class="mt-0"><b style="font-size: 1em;">Nama: {{ item.name }}</b></li>
								</ul>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>	

		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'qrSmall'" class="align-items-center">
				<div class="row" ref="qrSmall" id="qrSmall" >
					<div class="col-md-3" v-for="(item, index) in itemData.data" :key="index">
						<div class="d-flex justify-content-center">
							<div>
								<qrcode-vue :value="'puskopditbkcukalimantan.org/admins/asetTetap/detail/' + item.kode" :size="'150'" :renderAs="'svg'" level="M" class="mt-2"></qrcode-vue>
								<ul class="list list-unstyled mb-0 mt-1">
									<li class="mt-0 mb-0"><b style="font-size: 0.8em;"><span style="color:blue;">PUSKOPCUINA</span></b></li>
									<li class="mt-0"><b style="font-size: 0.7em;">Kode: {{ item.kode }}</b></li>
									<li class="mt-0"><b style="font-size: 0.7em;">Nama: {{ item.name }}</b></li>
								</ul>	
							</div>
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
		props:['itemData'],
		data() {
			return {
				tabName: 'qrBig',
			}
		},
		created(){},
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
				
				FileSaver.saveAs(this.output, 'aset tetap halaman ' + this.itemData.current_page);
			},
			tutup(){
				this.$emit('tutup');
			}
		},
	}
</script>