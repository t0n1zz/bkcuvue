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

				<div class="col-lg-4 col-3 pb-3 cursor-pointer cursor-pointer" v-if="currentUser.can['index_cu'] && currentUser.id_cu == 0" @click.prevent="detail('cu')">
					<p><i class="icon-office icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countCu }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">CU</span>
				</div>

				<div class="col-lg-4 col-3 pb-3 cursor-pointer" v-if="currentUser.can['index_tp']" @click.prevent="detail('tp')">
					<p><i class="icon-home9 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countTp }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">TP/KP</span>
				</div>

				<div class="col-lg-4 col-3 pb-3 cursor-pointer" v-if="currentUser.can['index_produk_cu']" @click.prevent="detail('produk_cu')">
					<p><i class="icon-list3 icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countProdukCu }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Produk & Pelayanan</span>
				</div>

				<div class="col-lg-4 col-3 pb-3 cursor-pointer" v-if="currentUser.can['index_aktivis']" @click.prevent="detail('aktivis')">
					<p><i class="icon-user-tie icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countAktivis }} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Aktivis</span>
				</div>

				<div class="col-lg-4 col-3 pb-3 cursor-pointer" v-if="currentUser.can['index_mitra_orang']" @click.prevent="detail('mitra_orang')">
					<p><i class="icon-briefcase icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countMitraOrang}} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Mitra Perseorangan</span>
				</div>

				<div class="col-lg-4 col-3 pb-3 cursor-pointer" v-if="currentUser.can['index_mitra_lembaga']" @click.prevent="detail('mitra_lembaga')">
					<p><i class="icon-briefcase icon-2x d-inline-block text-info"></i></p>
					<h5 class="font-weight-semibold mb-0">{{ countMitraLembaga}} <i class="icon-spinner2 spinner font-size-xs" v-if="itemdataStat == 'loading'"></i> </h5>
					<span class="text-muted font-size-sm">Lembaga Mitra</span>
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
						this.$router.push({name: 'mitraOrang'});
					}
				}else if(value == 'mitra_lembaga'){
					if(this.currentUser.can['index_mitra_lembaga']){
						this.$router.push({name: 'mitraLembaga'});
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