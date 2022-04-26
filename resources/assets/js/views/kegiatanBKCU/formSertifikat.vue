<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formSertifikat">

		<!-- asal -->
		<div class="form-group" :class="{'has-error' : errors.has('formSertifikat')}" v-if="mode == 'create'">

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formSertifikat')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formSertifikat') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<data-viewer :title="'Sertifikat'" :columnData="columnDataSertifikat"  :itemData="itemDataSertifikat" :query="query" :itemDataStat="itemDataSertifikatStat" @fetch="fetch" :isDasar="'true'" :isNoButtonRow="'true'" v-if="mode == 'create'">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemDataSertifikat.current_page-1) * +itemDataSertifikat.per_page + '.'}}
					</td>
					<td>
						<check-value :value="props.item.kode_sertifikat"></check-value>
					</td>
					<td>
						<check-value :value="props.item.name"></check-value>
					</td>
					
				</tr>
			</template>

		</data-viewer>

		<!-- message -->
		<message v-if="errors.any('formSertifikat') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formSertifikat.id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formSertifikat.id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>

		</form> 

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import DataViewer from '../../components/dataviewer2.vue';
	import message from "../../components/message.vue";

	export default {
		props: ['mode','selected'],
		components: {
			DataViewer,
			checkValue,
			message
		},
		data() {
			return {
				title: '',
				kelas: 'sertifikat',
				selectedItem: [],
				formSertifikat:{
					id_sertifikat: '',
                    kode_sertifikat:'',
					name: '',},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 5,
					page: 1
				},
				columnDataSertifikat: [
					{ title: 'No.' },
					{ title: 'Kode Sertifikat' },
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
				],
				submited: false,
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.formSertifikat = Object.assign({}, this.selected);
			}
			this.fetch(this.query);
		},
		updated(){
			
		},
		methods: {
			fetch(params){
				this.$store.dispatch('sertifikatKegiatan/index', params);
			},
			
			deleteSelected(){
				this.formSertifikat.id_sertifikat = '';
				this.selectedItem = '';
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formSertifikat.id_sertifikat = item.id;
				this.formSertifikat.name = item.name;
				this.formSertifikat.kode_sertifikat = item.kode_sertifikat;
				
			},
			save(){
				this.$validator.validateAll('formSertifikat').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editSertifikat',this.formSertifikat);
						}else{
							this.$emit('createSertifikat',this.formSertifikat);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('sertifikatKegiatan',{
				itemDataSertifikat: 'dataS',
				itemDataSertifikatStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),	
		}
	}
</script>