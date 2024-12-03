<template>
  <div class="card">
			<!-- title -->
		<div class="card-header bg-green-400 text-white header-elements-inline">
			<h5 class="card-title"><i class="icon-equalizer mr-2"></i> Data Gerakan Organisasi</h5>
			<div class="header-elements">
				<div class="list-icons">
					<a class="list-icons-item" data-action="collapse"></a>
				</div>
			</div>
		</div>

		<div class="card-body">
			<div class="row text-center">

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer cursor-pointer" v-if="currentUser.can['index_cu'] && currentUser.id_cu == 0" @click.prevent="detail('cu')">
					<p><i class="icon-office icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countCu }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">CU</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_tp']" @click.prevent="detail('tp')">
					<p><i class="icon-home9 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countTp }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">TP/KP</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_produk_cu']" @click.prevent="detail('produk_cu')">
					<p><i class="icon-list3 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countProdukCu }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Produk & Pelayanan</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_aktivis']" @click.prevent="detail('aktivis')">
					<p><i class="icon-user-tie icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countAktivis }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Aktivis</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_mitra_orang']" @click.prevent="detail('mitra_orang')">
					<p><i class="icon-briefcase icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countMitraOrang}} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Mitra Perseorangan</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_mitra_lembaga']" @click.prevent="detail('mitra_lembaga')">
					<p><i class="icon-briefcase icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countMitraLembaga}} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Lembaga Mitra</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_kubn']" @click.prevent="detail('kubn')">
					<p><i class="icon-versions icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countKubn }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">KUBN</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_kubn']" @click.prevent="detail('komunitas')">
					<p><i class="icon-circles2 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countKombas }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Komunitas</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_umkm']" @click.prevent="detail('umkm')">
					<p><i class="icon-store2 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countUmkm }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Umkm</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_enterpreneur']" @click.prevent="detail('enterpreneur')">
					<p><i class="icon-hat icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countEnterpreneur }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Enterpreneur</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_mentor']" @click.prevent="detail('mentor')">
					<p><i class="icon-brain icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countMentor }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Mentor</span>
				</div>

				<div class="col-lg-2 col-sm-4 col-xs-6 pb-3 cursor-pointer" v-if="currentUser.can['index_fasilitator']" @click.prevent="detail('fasilitator')">
					<p><i class="icon-unlink2 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countFasilitator }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Fasilitator</span>
				</div>
				
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import SystemAPI from '../../api/system.js';
  
	export default{
		components: {
			checkValue
		},
		data(){
			return{
				kelas: 'sistem',
				countCu: '',
				countTp: '',
				countProdukCu: '',
				countAktivis: '',
				countMitraOrang: '',
				countMitraLembaga: '',
				countKubn: '',
				countKombas: '',
				countUmkm: '',
				countEnterpreneur: '',
				countMentor: '',
				countFasilitator: '',
				itemData: '',
				itemDataStat: '',
			}
		},
		created(){
			this.fetch();
		},
		methods:{
			fetch(){
				this.itemdataStat = 'loading';

				SystemAPI.countOrganisasi()
        .then((response) => {
					this.countCu = response.data.countCu;
					this.countTp = response.data.countTp;
					this.countProdukCu = response.data.countProdukCu;
					this.countAktivis = response.data.countAktivis;
					this.countMitraOrang = response.data.countMitraOrang;
					this.countMitraLembaga = response.data.countMitraLembaga;
					this.countKubn = response.data.countKubn;
					this.countKombas = response.data.countKombas;
					this.countUmkm = response.data.countUmkm;
					this.countEnterpreneur = response.data.countEnterpreneur;
					this.countMentor = response.data.countMentor;
					this.countFasilitator = response.data.countFasilitator;
          this.itemdataStat = 'success';
        })
        .catch((error) => {
					this.itemdata = error.response;
          this.itemdataStat = 'fail';
				});
			},
			detail(value) {
				let id = this.currentUser.id_cu;

				if(value == 'cu'){
					if(this.currentUser.can['index_cu']){
						this.$router.push({name: 'cu' });
					}
				}else if(value == 'tp'){
					if(this.currentUser.can['index_tp']){
						this.$router.push({name: 'tpCu', params: { cu: id }});
					}
				}else if(value == 'produkCu'){
					if(this.currentUser.can['index_produk_cu']){
						this.$router.push({name: 'produkCuCu', params: { cu: id }});
					}
				}else if(value == 'aktivis'){
					if(this.currentUser.can['index_aktivis']){
						this.$router.push({name: 'aktivisCu', params: { cu: id }});
					}
				}else if(value == 'mitra_orang'){
					if(this.currentUser.can['index_mitra_orang']){
						this.$router.push({name: 'mitraOrangCu', params: { cu: id }});
					}
				}else if(value == 'mitra_lembaga'){
					if(this.currentUser.can['index_mitra_lembaga']){
						this.$router.push({name: 'mitraLembagaCu', params: { cu: id }});
					}
				}else if(value == 'kubn'){
					if(this.currentUser.can['index_kubn']){
						this.$router.push({name: 'kubnCu', params: { cu: id }});
					}
				}else if(value == 'komunitas'){
					if(this.currentUser.can['index_kubn']){
						this.$router.push({name: 'komunitasCu', params: { cu: id }});
					}
				}else if(value == 'umkm'){
					if(this.currentUser.can['index_umkm']){
						this.$router.push({name: 'umkmCu', params: { cu: id }});
					}
				}else if(value == 'enterpreneur'){
					if(this.currentUser.can['index_enterpreneur']){
						this.$router.push({name: 'enterpreneurCu', params: { cu: id }});
					}
				}else if(value == 'mentor'){
					if(this.currentUser.can['index_mentor']){
						this.$router.push({name: 'mentorCu', params: { cu: id }});
					}
				}else if(value == 'fasilitator'){
					if(this.currentUser.can['index_fasilitator']){
						this.$router.push({name: 'fasilitatorCu', params: { cu: id }});
					}
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>