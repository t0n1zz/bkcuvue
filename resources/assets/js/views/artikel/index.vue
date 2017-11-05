<template>
<div>
<!-- Page header -->
<div class="page-header">
	<div class="page-header-content has-visible-elements">
		<div class="page-title">
			<h4><i class="icon-magazine position-left"></i> <span class="text-semibold">Artikel</span> - Mengelola data artikel</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<router-link :to="{ name:'dashboard' }" tag="li"><a>Dashboard</a></router-link>
				<li class="active">Artikel</li>
			</ul>
		</div>
	</div>
</div>
<!-- /page header -->
<!-- page container -->
<div class="page-container">
	<div class="page-content">
		<div class="content-wrapper">
			<!-- panel -->
			<data-viewer :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4">
				<template slot="button">
					<div class="btn-group pb-5">
						<a class="btn btn-default btn-icon" @click="modalFormOpen('Tambah Artikel')"><i class="icon-plus3" ></i> Tambah</a>
                    </div>
				</template>
		        <template scope="props"><tr class="cursor-pointer" @click="modalMenuOpen(props.item)">
	        		<td v-if="!columnData[0].hide">
	        			<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
	        			<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
        			</td>
		        	<td v-if="!columnData[1].hide">{{props.item.nama}}</td>
		        	<td v-if="!columnData[2].hide">{{props.item.artikel__kategori.nama}}</td>
		        	<td v-if="!columnData[3].hide">{{props.item.penulis}}</td>
		        	<td v-if="!columnData[4].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
		        	<td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
		        	<td v-if="!columnData[6].hide" class="text-nowrap">{{props.item.created_at | publishDate}}</td>
		        </tr></template>
		    </data-viewer>
		</div>
	</div>
</div>
<!-- page container -->

<!-- modal -->
<!-- table-context-menu -->
<app-modal  :show="modal.show" :state="modal.state" :size="modal.size" :color="modal.color" :modalTitle="modal.title" :modalButton="modal.button" :resultType="modal.resultType" @close="modalClose" @batal="modalBatal" @confirmOk="modalConfirmOk" @resultOk="modalClose">
	<template slot="modal-body1">
		<div class="panel panel-flat blog-horizontal blog-horizontal-2">
			<div class="panel-body">
				<div class="thumb">
					<img :src="'/images/artikel/' + modal.data.gambar + '.jpg'" class="img-rounded img-responsive" v-if="modal.data.gambar">
					<img :src="'/images/image-article.jpg'" class="img-rounded img-responsive" v-else>
				</div>
				<div class="table-responsive blog-preview">
					<table class="table table-xs">
						<tbody class="text-left">
							<tr>
								<td><b>Judul:</b></td>
								<td>{{ modal.data.nama }}</td>
							</tr>
							<tr>
								<td><b>Kategori:</b></td>
								<td v-if="modal.data.artikel__kategori">{{modal.data.artikel__kategori.nama}}</td>
								<td v-else>-</td>
							</tr>
							<tr>
								<td><b>Penulis:</b></td>
								<td>{{ modal.data.penulis }}</td>
							</tr>
							<tr>
								<td><b>Terbitkan:</b></td>
								<td><span v-html="$options.filters.checkStatus(modal.data.terbitkan)"></span></td>
							</tr>
							<tr>
								<td><b>Utamakan:</b></td>
								<td><span v-html="$options.filters.checkStatus(modal.data.utamakan)"></span></td>
							</tr>
							<tr>
								<td><b>Tgl. Tulis:</b></td>
								<td>{{ modal.data.created_at | publishDate }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<div class="list-unstyled">
					<a class="list-group-item"><i class="icon-reading"></i> Baca</a>
					<a class="list-group-item"><i class="icon-pencil5"></i> Ubah</a>
					<a class="list-group-item" @click.prevent="modalConfirmOpen('hapus')"><i class="icon-bin2"></i> Hapus</a>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="list-unstyled">
					<a class="list-group-item" @click.prevent="modalConfirmOpen('updateTerbitkan')" ><i class="icon-file-upload"></i> 
						<span v-if="modal.data.terbitkan == 0">Terbitkan</span> 
						<span v-else>Tidak Terbitkan</span></a>
					<a class="list-group-item" @click.prevent="modalConfirmOpen('updateUtamakan')"><i class="icon-pushpin"></i> 
						<span v-if="modal.data.utamakan == 0">Utamakan</span> 
						<span v-else>Tidak Utamakan</span></a>
					<a class="list-group-item" @click.prevent="modalClose"><i class="icon-cross"></i> Batal</a>
				</div>
			</div>
		</div>
	</template>
	<template slot="modal-title">
		{{ modal.title }}
	</template>
	<template slot="modal-body2">
		<app-form></app-form>
	</template>
</app-modal>

</div>
</template>
<script type="text/javascript">
import { mapGetters, mapMutations } from 'vuex';
import * as types from '../../store/types';
import {bus} from '../../app';
import corefunc from '../../assets/core/app.js';
import moment from 'moment';
import DataViewer from '../../components/dataviewer.vue';
import appModal from '../../components/modal';
import appForm from './form.vue';

export default{
	name: 'ArtikelIndex',
	components:{
		DataViewer,
		appModal,
		appForm,
	},
	mounted(){
		corefunc.core_function();
	},
	data(){
		return{
			source: '/api/artikel',
			source2 : '',
			filterData: [
				{title:'Judul',key:'nama', operator:'like'},
				{title:'Kategori',key:'artikel_kategori.nama', operator:'like'},
				{title:'Penulis', key:'penulis', operator:'like'},
				{title: 'Tgl. Tulis', key:'created_at', operator:'between'}
			],
			columnData: [
				{title: 'Foto', key: 'gambar', excelType: 'string', sort: false, hide: false},
                {title: 'Judul', key: 'nama', excelType: 'string', sort: true, hide: false},
                {title: 'Kategori', key: 'artikel_kategori_id', groupKey: 'artikel__kategori.nama', excelType: 'string', sort: true, hide: false },
                {title: 'Penulis', key: 'penulis', groupKey: 'penulis', excelType: 'string',sort: true, hide: false},
                {title: 'Terbitkan', key: 'terbitkan', excelType: 'string', sort: true, hide: false},
                {title: 'Utamakan', key: 'utamakan', excelType: 'string', sort: true, hide: false},
                {title: 'Tgl. Tulis', key: 'created_at', texcelType: 'string', sort: true, hide: false}
            ],
            modal: {
                show: false,
                size:'',
                color:'',
                data: '',
                state:'',
                title:'',
                button:'',
                formTitle:'',
                formValue:'',
                formId:'',
                formPlaceholder:'',
                formType:'',
                resultType:''
            }
		}
	},
	computed: {
		...mapGetters({
			getModalShow: types.getModalShow,
			getModalState: types.getModalState
		})
	},
	methods: {
		...mapMutations({
			mutateModalShow: types.mutateModalShow,
			mutateModalState: types.mutateModalState
		}),
		modalFormOpen(modalTitle){
			var vm = this;

			vm.mutateModalShow(true);
			vm.mutateModalState('normal2');
			vm.modal.color = 'bg-primary';
			vm.modal.size = 'modal-full';
			vm.modal.title = modalTitle;
		},
		modalMenuOpen(data){
			var vm = this;

			vm.mutateModalShow(true);
			vm.mutateModalState('normal1');
			vm.modal.color = '';
			vm.modal.size = '';
			vm.modal.title = '';
			vm.modal.data = data;
		},
		modalConfirmOpen(type){
			var vm = this;

			vm.mutateModalState('confirm');
			vm.modal.title = '';
	    	vm.source2 = type;

	    	if(type == 'hapus'){
	    		vm.modal.title = 'Hapus artikel ini?';
	    		vm.modal.button = 'Iya, Hapus';
	    	}else if(type == 'updateTerbitkan'){
	    		if(vm.modal.data.terbitkan == 0){
	    			vm.modal.title = 'Terbitkan artikel ini?';
	    			vm.modal.button = 'Iya, terbitkan';
	    		}else{
	    			vm.modal.title = 'Tidak terbitkan artikel ini?';
	    			vm.modal.button = 'Iya, tidak terbitkan';
	    		}
	    	}else if(type == 'updateUtamakan'){
	    		if(vm.modal.data.utamakan == 0){
	    			vm.modal.title = 'Utamakan artikel ini?';
	    			vm.modal.button = 'Iya, utamakan';
	    		}else{
	    			vm.modal.title = 'Tidak utamakan artikel ini?';
	    			vm.modal.button = 'Iya, tidak utamakan';
	    		}
	    	}
		},
		modalSave(){
			var vm = this;
			vm.mutateModalState('loading');
			axios.put(`${vm.source}/update/${vm.modal.formId}`, vm.modal.formValue)
				.then(function(response){
					if(response.data.saved){
						vm.modalSuccess(response.data.message);
					}else{
						vm.modalError();
					}
				})
				.catch(function(error){
					vm.modalError();
				})
		},
	    modalError(){
	    	var vm = this;

	    	vm.modal.title = "Ops terjadi kesalahan :(";
	    	vm.mutateModalState('error');
	    	vm.modal.button = 'Ok';
	    },
	    modalSuccess(title){
	    	var vm = this;

	    	vm.modal.title = title;
	    	vm.mutateModalState('success');
	    	vm.modal.button = 'Ok';
	    },
	    modalBatal(){
	    	var vm = this;
	    	vm.mutateModalState('normal1');
	    	vm.modal.title= '';
	    },
	    modalClose(){
	    	var vm = this;
	    	if(vm.getModalState == "success"){
	    		bus.$emit('fetchData');
	    	}
	    	vm.mutateModalShow(false);
	    },
	    modalConfirmOk(){
	    	var vm = this;
	    	vm.mutateModalState('loading');
	    	if(vm.source2 == 'hapus'){
                axios.delete(`${vm.source}/${vm.modal.data.id}`)
                    .then(function(response) {
                        if(response.data.deleted) {
                            vm.modalSuccess(response.data.message);
                        }else{
                        	vm.modalError();
                        }
                    })
                    .catch(function(error) {
                        vm.modalError();
                    })
	    	}else if(vm.source2 == "updateTerbitkan" || vm.source2 == "updateUtamakan" ){
	    		axios.post(`${vm.source}/${vm.source2}/${vm.modal.data.id}`)
                    .then(function(response) {
                        if(response.data.saved) {
                            vm.modalSuccess(response.data.message);
                        }else{
                        	vm.modalError();
                        }
                    })
                    .catch(function(error) {
                        vm.modalError();
                    })
	    	}
	    }
	},
	filters: {
	    publishDate: function(value){
	       return moment(value).format('DD MMMM YYYY');
	    },
	    trimString: function(string){
	    	return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) + ' [...]';
	    },
	    checkStatus: function(value){
	    	if(value > 0){
	    		return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>';
	    	}else{
	    		return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>';
	    	}
	    },
	    checkModal: function(value){
	    	if(value > 0){
	    		return '<i class="icon-check"></i>';
	    	}else{
	    		return '<i class="icon-cross3"></i>';
	    	}
	    },
	    checkImages: function(value){
	    	return '/images/artikel/' + value + 'n.jpg';
	    }
	}
}
</script>
