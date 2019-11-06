<template>
<div v-if="serverVersionStat == 'success'">
	<div class="page-content pt-2 pb-0" v-if="clientVersion != serverVersion">
		<div class="content-wrapper pb-0 mb-0">
			<div class="alert alert-warning alert-styled-left mb-0" >
				<span class="font-weight-semibold">Warning!</span> Versi SIMO yang anda pakai saat ini [{{ clientVersion }}] bukanlah yang terbaru [{{ serverVersion }}] , silahkan melakukan <button type="button" class="btn btn-warning btn-sm" @click.prevent="reloadPage()"> <i class="icon-sync"></i> Hard Reload</button> agar semua fungsi dalam aplikasi berfungsi dengan normal.
			</div>
		</div>

		<!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" :color="modalColor" :size="'modal-lg'" @backgroundClick="modalTutup">

			<!-- keluar -->
			<template slot="modal-body1">
				<div>
					<h2>Apa itu hard reload?</h2>
					<p>
						Hard reload mengacu pada proses membersihkan cache browser pada halaman tertentu untuk membuatnya memuat versi terbaru daripada versi cache halaman. 
						<br/><br/>
						Dan karena SIMO memanfaatkan fitur cache pada browser agar pengoperasian SIMO menjadi cepat di perangkat anda maka ketika ada versi baru diperlukan waktu bagi browser untuk memuat halaman versi terbaru SIMO. 
						<br/><br/>
						Oleh karena itu untuk mempercepat/memaksa browser memuat halaman versi terbaru maka mesti melakukan Hard Reload</p>
					<br/>

					<h2>Bagaimana cara melakukan hard reload?</h2>
					<br>

					<div class="row">
						<!-- Google Chrome -->
						<div class="col-lg-6">
							<h4>Google Chrome <i class="icon-chrome"></i></h4>
							<h5><i class="icon-circles"></i> Operasi Windows <i class="icon-windows8"></i> dan Linux <i class="icon-tux"></i></h5>
							<ul>
								<li>Tahan tombol <b>Ctrl</b> dan kemudian klik tombol <b><i class="icon-reload-alt"></i> reload</b>.</li>
								<li>Atau, tahan tombol <b>Ctrl</b> lalu tekan tombol <b>F5</b>.</li>
							</ul>
							<h5><i class="icon-circles"></i> Sistem Operasi Mac <i class="icon-apple2"></i></h5>
							<ul>
								<li>Tahan tombol <b>Shift</b> dan kemudian klik tombol <b><i class="icon-reload-alt"></i> reload</b>.</li>
								<li>Atau, tahan tombol <b>Cmd</b> dan tombol <b>Shift</b> lalu tekan tombol <b>R</b>.</li>
							</ul>
						</div>
						<div class="col-lg-6">
							<img class="img-thumbnail mb-2" src="/images/HR-chrome.png">
						</div>

						<!-- Mozilla Firefox -->
						<div class="col-lg-6">
							<h4>Mozilla Firefox <i class="icon-firefox"></i></h4>
							<h5><i class="icon-circles"></i> Sistem Operasi Windows <i class="icon-windows8"></i> dan Linux <i class="icon-tux"></i></h5>
							<ul>
								<li>Tahan tombol <b>Ctrl</b> dan kemudian klik tombol <b>F5</b>.</li>
								<li>Atau, tahan tombol <b>Shift</b> dan tombol <b>Ctrl</b> lalu tekan tombol <b>R</b>.</li>
							</ul>
							<h5><i class="icon-circles"></i> Sistem Operasi Mac <i class="icon-apple2"></i></h5>
							<ul>
								<li>Tahan tombol <b>Shift</b> dan kemudian klik tombol <b><i class="icon-reload-alt"></i> reload</b>.</li>
								<li>Atau, tahan tombol <b>Cmd</b> dan tombol <b>Shift</b> lalu tekan tombol <b>R</b>.</li>
							</ul>
						</div>
						<div class="col-lg-6">
							<img class="img-thumbnail mb-2" src="/images/HR-mozilla.png">
						</div>

						<!-- Safari -->
						<div class="col-lg-6">	
							<h4>Safari <i class="icon-safari"></i></h4>
							<ul>
								<li>Atau, tahan tombol <b>Option</b> dan tombol <b>Cmd</b> lalu tekan tombol <b>E</b>.</li>
							</ul>
						</div>
						<div class="col-lg-6">
							<img class="img-thumbnail mb-2" src="/images/HR-safari.png">
						</div>

						<!-- Internet Explorer -->
						<div class="col-lg-6">
							<h4>Internet Explorer <i class="icon-IE"></i></h4>
							<ul>
								<li>Atau, tahan tombol <b>Ctrl</b> lalu tekan tombol <b><i class="icon-reload-alt"></i> reload</b>.</li>
								<li>Tahan tombol <b>Ctrl</b> dan kemudian klik tombol <b>F5</b>.</li>
							</ul>
						</div>
						<div class="col-lg-6">
							<img class="img-thumbnail" src="/images/HR-ie.png">
						</div>

					</div>
				</div>
        <div class="text-center">
					<hr>
          <div class=" d-none d-sm-block">
            <button type="button" class="btn btn-light" @click="modalTutup">
              <i class="icon-cross"></i> Tutup</button>
          </div>
          <div class="d-block d-sm-none">
            <button type="button" class="btn btn-light btn-block" @click="modalTutup">
                <i class="icon-cross"></i> Tutup</button>
          </div>
        </div>
			</template>


    </app-modal>
	</div>
</div>
</template>

<script type="text/javascript">
	import appModal from './modal';
    export default {
			props: ['clientVersion'],
			components: {
				appModal
			},
			data(){
				return {
					serverVersion:'',
					serverVersionStat: '',
					modalShow: false,
					modalState: "",
					modalTitle: "",
					modalContent: "",
					modalButton: "",
        	modalColor: "",
				}
			},
			created(){
				this.get();
			},
			watch: {
				serverVersionStat(value){
					if(value == "success"){
						if(this.clientVersion != this.serverVersion){
							this.reloadPage();
						}
					}
				}
			},
			methods: {
				get(){
					this.serverVersionStat = 'loading';
					axios.get('/api/system')
					.then((response) => {
						this.serverVersion = response.data.model.version;
						this.serverVersionStat = 'success';
					})
					.catch(error => {
						console.log(error);
						this.serverVersionStat = 'fail';
					});
				},
				reloadPage(){
					document.location.reload(true);
				},
				modalConfirmOpen() {
					this.modalShow = true;
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
				},
				modalTutup(){
					this.modalShow = false;
				}
			}
    }
</script>