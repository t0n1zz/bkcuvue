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
						<router-link :to="{ name:'artikelCreate' }" title="TAMBAH ARTIKEL"  class="btn btn-default btn-icon">
							<i class="icon-plus3" ></i> Tambah
						</router-link>
                    </div>
				</template>
		        <template scope="props"><tr>
	        		<td class="text-center">
	        			<ul class="icons-list">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									<i class="icon-menu9"></i>
								</a>
								<ul class="dropdown-menu dropdown-menu">
									<li><a><i class="icon-reading"></i> Baca Artikel</a></li>
									<li><a @click="modalMenuOpen(props.item)"><i class="icon-pencil5"></i> Ubah Artikel</a></li>
									<li>
										<a @click="modalConfirmOpen(props.item,'updateTerbitkan')"><i class="icon-file-upload"></i> 
											<span v-if="props.item.terbitkan == 0">Terbitkan</span>
											<span v-else>Tidak terbitkan</span>
										</a>
									</li>
									<li>
										<a @click="modalConfirmOpen(props.item,'updateUtamakan')"><i class="icon-pushpin"></i> 
											<span v-if="props.item.utamakan == 0">Utamakaan</span>
											<span v-else>Tidak utamakan</span>
										</a>
									</li>
									<li class="divider"></li>
									<li><a class="text-danger" @click="modalConfirmOpen(props.item,'Hapus')"><i class="icon-bin2"></i> Hapus Artikel</a></li>
								</ul>
							</li>
						</ul>
	        		</td>
	        		<td v-if="!columnData[0].hide">
	        			<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
	        			<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
        			</td>
		        	<td v-if="!columnData[1].hide">{{props.item.nama}}</td>
		        	<td v-if="!columnData[2].hide">{{props.item.artikel__kategori.nama}}</td>
		        	<td v-if="!columnData[3].hide">{{props.item.penulis}}</td>
		        	<td class="text-center cursor-pointer" v-if="!columnData[4].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)" @click="modalConfirmOpen(props.item,'updateTerbitkan')"></td>
		        	<td class="text-center cursor-pointer" v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"  @click="modalConfirmOpen(props.item,'updateUtamakan')"></td>
		        	<td v-if="!columnData[6].hide" class="text-nowrap">{{props.item.created_at | publishDate}}</td>
		        </tr></template>
		    </data-viewer>
		</div>
	</div>
</div>
<!-- page container -->

<!-- modal -->
<!-- table-context-menu -->
<app-modal  :show="modal.show" :state="modal.state" :size="modal.size" :color="modal.color" :modalTitle="modal.title" :modalButton="modal.button" :resultType="modal.resultType" @close="modalClose" @confirmOk="modalConfirmOk" @resultOk="modalClose">
	<template slot="modal-title">
		<i class="icon-pencil5"></i> {{ modal.title }}
	</template>
	<template slot="modal-body">
		
	</template>
	<template slot="modal-footer">
		<button class="btn btn-link legitRipple" @click="modalClose">Batal</button>
	</template>
</app-modal>

</div>
</template>
<script type="text/javascript">
import {bus} from '../../app';
import corefunc from '../../assets/core/app.js'
import moment from 'moment'
import DataViewer from '../../components/dataviewer.vue'
import appModal from '../../components/modal'

export default{
	name: 'ArtikelIndex',
	components:{
		DataViewer,
		appModal,
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
				{title: 'Menu', sort: false},
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
                formType:'',
                resultType:''
            }
		}
	},
	methods: {
		modalFormOpen(){
			this.modal.show = true;
		},
		modalConfirmOpen(data,type,title,button){
			this.modal.show = true;
			this.modal.state = 'confirm';
			this.modal.data = data;
	    	this.source2 = type;

	    	if(type == 'hapus'){
	    		this.modal.title = 'Hapus artikel ini?';
	    		this.modal.button = 'Iya, Hapus';
	    	}else if(type == 'updateTerbitkan'){
	    		if(data.terbitkan == 0){
	    			this.modal.title = 'Terbitkan artikel ini?';
	    			this.modal.button = 'Iya, terbitkan';
	    		}else{
	    			this.modal.title = 'Tidak terbitkan artikel ini?';
	    			this.modal.button = 'Iya, tidak terbitkan';
	    		}
	    	}else if(type == 'updateUtamakan'){
	    		if(data.utamakan == 0){
	    			this.modal.title = 'Utamakan artikel ini?';
	    			this.modal.button = 'Iya, utamakan';
	    		}else{
	    			this.modal.title = 'Tidak utamakan artikel ini?';
	    			this.modal.button = 'Iya, tidak utamakan';
	    		}
	    	}
		},
	    modalError(){
	    	this.modal.title = "Ops terjadi kesalahan :(";
	    	this.modal.resultType = "error";
	    	this.modal.state = 'result';
	    	this.modal.button = 'Ok';
	    },
	    modalSuccess(title){
	    	this.modal.title = title;
	    	this.modal.resultType = "success";
	    	this.modal.state = 'result';
	    	this.modal.button = 'Ok';
	    },
	    modalClose(){
	    	if(this.modal.resultType == "success"){
	    		this.modal.resultType = '';
	    		bus.$emit('fetchData');
	    	}

	    	this.modal.show = false;
	    	this.modal.state = '';
	    },
	    modalConfirmOk(){
	    	var vm = this
	    	vm.modal.state = "loading";
	    	if(this.source2 == 'Hapus'){
                axios.delete(`${this.source}/${this.modal.data.id}`)
                    .then(function(response) {
                        if(response.data.deleted) {
                            vm.modalSuccess(response.data.message);
                        }
                    })
                    .catch(function(error) {
                        vm.modalError();
                    })
	    	}else if(this.source2 == "updateTerbitkan" || this.source2 == "updateUtamakan" ){
	    		axios.post(`${this.source}/${this.source2}/${this.modal.data.id}`)
                    .then(function(response) {
                        if(response.data.saved) {
                            vm.modalSuccess(response.data.message);
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
	    checkStatus2: function(value){
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
