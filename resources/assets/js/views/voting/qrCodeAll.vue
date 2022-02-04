<template>
	<div>

		<div class="row" ref="qrBig" id="qrBig" >
			<div class="col-md-6" v-for="(item, index) in itemData.data" :key="index">						
				<div class="card pb-2 pt-2 pr-2 pl-2">
					<div class="card-header bg-white">
						<h5 class="card-title">{{ title }}</h5>
					</div>
					
					<div class="card-body">
						<div class="card card-body">
							<qrcode-vue :value="item.link" :size="'130'" :renderAs="'svg'" level="M" class="mr-3 mt-2 ml-2 mb-2"></qrcode-vue>
						</div>

						<div class="card card-body">
							Silahkan scan QR code diatas dengan aplikasi scan QR di smartphone anda ataupun mengetik link dibawah ini
						</div>

						<div class="card card-body">
							<h4>{{ item.link.substring(8) }}</h4>
						</div>
					</div>
					
				</div>
			</div>
		</div>

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
		props:['itemData','title'],
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