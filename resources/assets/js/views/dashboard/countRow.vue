<template>
  <div class="row">
		
    <!-- cu -->
    <div class="col-lg-3 col-md-3" v-if="currentUser.can && currentUser.can['index_cu']" @click.prevent="goTo(cuWidgetRoute)" :class="{'pointer': currentUser.id_cu == 0}">
      <count-widget :title="'CU'" :color="'bg-green-400'" :icon="'icon-office'" :count="cuCount" :stat="cuCountStat"  ></count-widget>
    </div>

    <!-- tp -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_tp']" @click.prevent="goTo(tpWidgetRoute)">
      <count-widget :title="'TP/KP'" :color="'bg-brown-400'" :icon="'icon-home9'" :count="tpCount" :stat="tpCountStat"></count-widget>
    </div>

    <!-- produkCu -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_produk_cu']" @click.prevent="goTo(produkCuWidgetRoute)">
      <count-widget :title="'Produk CU'" :color="'bg-warning-400'" :icon="'icon-list3'" :count="produkCuCount" :stat="produkCuCountStat"></count-widget>
    </div>

    <!-- aktivis -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_aktivis']" @click.prevent="goTo(aktivisWidgetRoute)">
      <count-widget :title="'Aktivis'" :color="'bg-indigo-400'" :icon="'icon-user-tie'" :count="aktivisCount" :stat="aktivisCountStat"></count-widget>
    </div>

  </div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
  import countWidget from './_component/countWidget.vue';
  
	export default{
		components: {
			countWidget
		},
		data(){
			return{
				artikelWidgetRoute: {},
				artikelPenulisWidgetRoute: {},
				cuWidgetRoute: {},
				tpWidgetRoute: {},
				produkCuWidgetRoute: {},
				aktivisWidgetRoute: {},
				produkCuWidgetRoute: {},
				userWidgetRoute: {}
			}
		},
		created(){
			this.countWidget();
			this.countWidgetRoute();
		},
		methods:{
			countWidget(){
				if(this.currentUser.can && this.currentUser.can['index_artikel']){
					this.$store.dispatch('artikel/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_artikel_penulis']){
					this.$store.dispatch('artikelPenulis/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_cu']){
					this.$store.dispatch('cu/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_tp']){
					this.$store.dispatch('tp/count');
				}
					
				if(this.currentUser.can && this.currentUser.can['index_aktivis']){
					this.$store.dispatch('aktivis/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_produk_cu']){
					this.$store.dispatch('produkCu/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_user']){
					this.$store.dispatch('user/count');
				}
			},
			countWidgetRoute(){
				if(this.currentUser.id_cu != 0){
					this.artikelWidgetRoute = { name: 'artikelCu', params:{cu: this.currentUser.id_cu} };
					this.artikelPenulisWidgetRoute = { name: 'artikelPenulisCu', params:{cu: this.currentUser.id_cu} };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu: this.currentUser.id_cu} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu: this.currentUser.id_cu} };
					this.aktivisWidgetRoute = { name: 'aktivisCu', params:{cu: this.currentUser.id_cu} };
					this.userWidgetRoute = { name: 'userCu', params:{cu: this.currentUser.id_cu} };
				}else{
					this.cuWidgetRoute = { name: 'cu' };
					this.artikelWidgetRoute = { name: 'artikelCu', params:{cu: 'semua'} };
					this.artikelPenulisWidgetRoute = { name: 'artikelPenulisCu', params:{cu: 'semua'} };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu:'semua'} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu:'semua'} };
					this.aktivisWidgetRoute = { name: 'aktivisCu', params:{cu: 'semua'} };
					this.userWidgetRoute = { name: 'userCu', params:{cu:'semua'} };
				}
			},
			goTo(route){
				this.$router.push(route);
    	}	
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('artikel',{
				artikelCount: 'count',
				artikelCountStat: 'countStat'
			}),
			...mapGetters('artikelPenulis',{
				artikelPenulisCount: 'count',
				artikelPenulisCountStat: 'countStat'
			}),
			...mapGetters('cu',{
				cuCount: 'count',
				cuCountStat: 'countStat'
			}),
			...mapGetters('tp',{
				tpCount: 'count',
				tpCountStat: 'countStat'
			}),
			...mapGetters('aktivis',{
				aktivisCount: 'count',
				aktivisCountStat: 'countStat'
			}),
			...mapGetters('produkCu',{
				produkCuCount: 'count',
				produkCuCountStat: 'countStat'
			}),
			...mapGetters('user',{
				userCount: 'count',
				userCountStat: 'countStat'
			}),
		}
	}
</script>

<style scoped>
.pointer{
	cursor: pointer;
}
</style>
