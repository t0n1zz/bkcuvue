<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- detail -->
				<button @click.prevent="modalOpen()" class="btn btn-light mb-1" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_error_log']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- detail -->
				<button @click.prevent="modalOpen()" class="btn btn-light btn-block mb-1" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_error_log']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)" class="text-nowrap">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.message" :valueType="'modal'"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.context" :valueType="'modal'"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.level"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.level_name"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.channel"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.extra" :valueType="'modal'"></check-value>
					</td>
					<td v-if="!columnData[5].hide" v-html="$options.filters.dateTime(props.item.datetime)"></td>
					<td v-if="!columnData[5].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" :size="modalSize" :color="modalColor" @failOk="modalTutup" @backgroundClick="modalTutup">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- error log -->
			<template slot="modal-body1">
				<!-- error message -->
				<div>
					<span v-if="selectedItem.status == 404">
						<b>ERROR 404:</b>
					</span>
					<span v-else-if="selectedItem.status == 419">
						<b>ERROR 419:</b>
					</span>
					<span v-else-if="selectedItem.status ==  422">
						<b>ERROR 422:</b>
					</span>
					<span v-else-if="selectedItem.status == 500">
						<b>ERROR 500:</b>
					</span>
				</div>
				<br/> 

				<!-- error detail -->
				<div>
					<h4>Level</h4>
					<pre class="pre-scrollable language-markup content-group text-left"><code>{{ selectedItem.level }} / {{ selectedItem.level_name}}</code></pre>
					<hr/>
				</div>

				<!-- error detail -->
				<div>
					<h4>Message</h4>
					<pre class="pre-scrollable language-markup content-group text-left"><code>{{ selectedItem.message }}</code></pre>
					<hr/>
				</div>

				<div>
					<h4>Context</h4>
					<pre class="pre-scrollable language-markup content-group text-left"><code>{{ selectedItem.context }}</code></pre>
					<hr/>
				</div>

				<div>
					<h4>Extra</h4>
					<pre class="pre-scrollable language-markup content-group text-left"><code>{{ selectedItem.extra }}</code></pre>
					<hr/>
				</div>
				
				<div class="text-center d-none d-sm-block">
					<button type="button" class="btn btn-light" @click="modalTutup">Ok</button>
				</div>
				<div class="text-center d-block d-sm-none">
					<button type="button" class="btn btn-light btn-block" @click="modalTutup">Ok</button>
				</div>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				query: {
					order_column: "created_at",
					order_direction: "desc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Message',
						name: 'message',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Context',
						name: 'context',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Level',
						name: 'level',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Level Name',
						name: 'level_name',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Channel',
						name: 'channel',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Extra',
						name: 'extra',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Waktu',
						name: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					
					{
						title: 'Tgl. Tulis',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					}
				],
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalColor: '',
				modalSize: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch(this.query);
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch(this.query);
			},

			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value == "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value == "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
		},
		methods: {
			fetch(params){
					this.$store.dispatch(this.kelas + '/index', params);
					this.excelDownloadUrl = this.kelas + '/index';
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			modalOpen(){
				this.modalShow = true;
				this.modalColor = "bg-primary";
				this.modalSize = 'modal-lg';
				this.modalState = 'normal1';
				this.modalTitle = 'Detail ' + this.title;
				this.modalContent = this.selectedItem.level;
				this.modalButton = 'Ok';
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

			 if (state == 'hapus') {
				 	this.modalColor = '';
					this.modalSize = '';
					this.modalTitle = 'Hapus ' + this.title + ' ?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
			}
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('errorLog',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>