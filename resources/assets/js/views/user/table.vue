<template>
  <div>
    <!-- main panel -->
    <data-viewer :title="title" :source="source" :columnData="columnData" :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" :extSearchQuery1="extSearchQuery1" :params="params"
		@fetch="fetch">

      <!-- desktop -->
      <!-- button desktop -->
      <template slot="button-desktop">

        <!-- tambah -->
        <div class="btn-group pb-5" v-if="profile.can && profile.can['create_' + kelas]">
          <router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' + title">
            <i class="icon-plus3"></i> Tambah
          </router-link>
        </div>

        <!-- ubah-->
        <div class="btn-group pb-5" v-if="profile.can && profile.can['update_' + kelas]">
          <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
            <i class="icon-pencil5"></i> Ubah
          </button>
        </div>

        <!-- hapus -->
        <div class="btn-group pb-5" v-if="profile.can && profile.can['destroy_' + kelas]">
          <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
            <i class="icon-bin2"></i> Hapus
          </button>
        </div>

        <!-- reset password -->
        <div class="btn-group pb-5" v-if="profile.can && profile.can['reset_password']">
          <button @click.prevent="modalConfirmOpen('resetPassword')" class="btn btn-default btn-icon" v-tooltip:top="'Reset password ' + title"  :disabled="!selectedItem.id">
            <i class="icon-history"></i> Reset Password
          </button>
        </div>

        <!-- aktifkan -->                                           
        <div class="btn-group pb-5" v-if="profile.can && profile.can['status_' + kelas]">
          <button @click.prevent="modalConfirmOpen('updateStatus')" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah Status User'"  :disabled="!selectedItem.id">
            <i class="icon-user-check"></i> <span v-if="selectedItem.status == 1">Tidak Aktifkan</span>
            <span v-else-if="selectedItem.status == 0">Aktifkan</span>
            <span v-else>Status</span>
          </button> 
        </div>

        <!-- hak akses -->
        <div class="btn-group pb-5">
          <button @click.prevent="modalHakAksesOpen()" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah Hak Akses User'"  :disabled="!selectedItem.id">
            <i class="icon-key"></i> Hak Akses
          </button>
        </div>

      </template>

      <!-- button context -->
      <template slot="button-context">
        <!-- title -->
        <li class="text-center pb-5 pt-5 bg-primary">
          <b class="text-size-large">Nama | Username</b>
        </li>

        <!-- separator -->
        <li><hr class="no-margin-bottom zz   o-margin-top"/></li>

        <!-- content -->
        <li class="text-center pb-10 pt-10 pl-5 pr-5">
          <span class="text-size-large">{{selectedItem.name}} | {{selectedItem.username}}</span>
        </li>

        <!-- separator -->
        <li><hr class="no-margin-top no-margin-bottom"/></li>

        <!-- update -->
        <li v-if="profile.can && profile.can['update_' + kelas]">
          <div class="pl-5 pr-5 pb-5 pt-10">
            <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah' + title" :disabled="!selectedItem.id">
              <i class="icon-pencil5"></i> Ubah
            </button>
          </div>
        </li>

        <!-- destroy -->
        <li v-if="profile.can && profile.can['destroy_' + kelas]">
          <div class="pl-5 pr-5 pb-5">
            <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
              <i class="icon-bin2"></i> Hapus
            </button>
          </div>
        </li>

        <!-- reset password -->
        <li v-if="profile.can && profile.can['reset_password']">
          <div class="pl-5 pr-5 pb-5">
            <button @click.prevent="modalConfirmOpen('resetPassword')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Reset password ' + title"  :disabled="!selectedItem.id">
              <i class="icon-history"></i> Reset Password
            </button>
          </div>
        </li>

        <!-- aktifkan -->
        <li v-if="profile.can && profile.can['aktifkan_' + kelas]">
          <div class="pl-5 pr-5 pb-5">
            <button @click.prevent="modalConfirmOpen('updateStatus')" class="btn btn-default btn-icon btn-block"  v-tooltip:top="'Ubah Status User'"  :disabled="!selectedItem.id">
              <i class="icon-user-check"></i> <span v-if="selectedItem.status === 1">Tidak Aktifkan</span>
              <span v-else>Aktifkan</span>
            </button>
          </div>
        </li>
      </template>

      <!-- item desktop -->
      <template slot="item-desktop" slot-scope="props">
        <tr :class="{ 'info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)">
          <td v-if="!columnData[0].hide">
            <img :src="'/images/user/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
            <img :src="'/images/no_image_man.jpg'" class="img-rounded img-responsive img-sm" v-else>
          </td>
          <td v-if="!columnData[1].hide" class="warptext">{{props.item.username}}</td>
          <td v-if="!columnData[2].hide" class="warptext">{{props.item.name}}</td>
          <td v-if="!columnData[3].hide" class="warptext">{{props.item.email}}</td>
          <td v-if="!columnData[4].hide && !columnData[4].disable">
            <span v-if="props.item.cu">{{props.item.cu.name}}</span>
            <span v-else>Puskopdit BKCU Kalimantan</span>
          </td>
          <td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.status)"></td>
          <td v-if="!columnData[6].hide" class="text-nowrap" v-html="$options.filters.dateTime(props.item.created_at)"></td>
          <td v-if="!columnData[7].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
        </tr>
      </template>

      <!-- mobile -->
      <!-- button mobile -->
      <template slot="button-mobile" class="hidden-print">
        <!-- tambah -->
        <router-link :to="{ name:kelas + 'Create'}" class="btn btn-default btn-icon btn-block">
          <i class="icon-plus3"></i> Tambah
        </router-link>
      </template>
  
      <!-- item mobile -->
      <template slot="item-mobile" slot-scope="props">
        <div class="panel panel-flat visible-xs">
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr v-if="!columnData[0].hide">
                  <td colspan="2">
                    <img :src="'/images/user/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" class="img-rounded img-responsive center-block" v-else>
                    
                  </td>
                </tr>
                <tr v-if="!columnData[1].hide">
                  <td><b>{{columnData[1].title}}</b></td>
                  <td>: {{props.item.username}}</td>
                </tr>
                <tr v-if="!columnData[2].hide">
                  <td><b>{{columnData[2].title}}</b></td>
                  <td>: {{props.item.name}}</td>
                </tr>
                <tr v-if="!columnData[3].hide">
                  <td><b>{{columnData[3].title}}</b></td>
                  <td>: {{props.item.email}}</td>
                </tr>
                <tr v-if="!columnData[4].hide">
                  <td><b>{{columnData[4].title}}</b></td>
                  <td>
                    <span v-if="props.item.cu">
                      : {{props.item.cu.name}}
                    </span>
                    <span v-else>: Puskopdit BKCU Kalimantan</span>	
                  </td>
                </tr>
                <tr v-if="!columnData[5].hide">
                  <td><b>{{columnData[5].title}}</b></td>
                  <td>
                    : <span v-html="$options.filters.checkStatus(props.item.status)"></span>
                  </td>
                </tr>
                <tr v-if="!columnData[6].hide">
                  <td><b>{{columnData[6].title}}</b></td>
                  <td>
                    : <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
                  </td>
                </tr>
                <tr v-if="!columnData[7].hide">
                  <td><b>{{columnData[7].title}}</b></td>
                  <td>
                    : <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="panel-footer hidden-print">
            <div class="text-center button-toolbar">

              <!-- ubah mobile-->
              <div class="pt-10 pb-10 pl-15 pr-15">
                <button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
                  <i class="icon-pencil5"></i> Ubah
                </button>
              </div>
              
              <!-- hapus mobile-->
              <div class="pb-10 pl-15 pr-15">
                <button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
                  <i class="icon-bin2"></i> <span>Hapus</span>
                </button>
              </div>

              <!-- reset password mobile-->
              <div class="pb-10 pl-15 pr-15">
                <button @click.prevent="modalConfirmOpen('resetPassword',true,props.item)" class="btn btn-default btn-icon btn-block">
                  <i class="icon-history"></i> <span>Reset Password</span>
                </button>
              </div>
              
              <!-- status mobile -->
              <div class="pb-10 pl-15 pr-15">
                <button @click.prevent="modalConfirmOpen('updateStatus',true,props.item)" class="btn btn-default btn-icon btn-block">
                  <i class="icon-user-check"></i> <span v-if="props.item.status === 1">Tidak Aktifkan</span>
                  <span v-else>Aktifkan</span> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>

    </data-viewer>

    <!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :size="modalSize" :color="modalColor" :title="modalTitle" :content="modalContent" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- hak akses -->
			<template slot="modal-body1">
				<!-- hak-akses -->
				<hak-akses :form="modalForm"></hak-akses>
				<!-- divider -->
				<hr>
			</template>

			<template slot="modal-footer1">

				<!-- button -->
				<button class="btn btn-default" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
				<button type="submit" class="btn btn-primary" @click="modalHakAksesSave">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</template>
		</app-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import DataViewer from '../../components/dataviewer.vue';
import appModal from '../../components/modal';
import hakAkses from "../../components/hakAkses.vue";
  
export default {
  components: {
    DataViewer,
    appModal,
    hakAkses
  },
  props:['title','kelas'],
  data(){
    return {
      source: '',
      extSearchQuery1: '',
      extSearchColumn: '',
      selectedItem: [],
      params: {
        column: 'id',
        direction: 'desc',
        per_page: 10,
        page: 1,
        search_column: 'name',
        search_operator: 'like',
        search_query_1: '',
        search_query_2: ''
      },
      columnData: [
        {
          title: 'Foto',
          key: 'gambar',
          sort: false,
          hide: false,
          disable: false
        },
        {
          title: 'Username',
          key: 'username',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterType: 'string'
        },
        {
          title: 'Nama',
          key: 'name',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterType: 'string'
        },
        {
          title: 'E-mail',
          key: 'email',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterType: 'string'
        },
        {
          title: 'CU',
          key: 'id_cu',
          groupKey: 'c_u.name',
          groupNoKey: 'Puskopdit BKCU Kalimantan',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterKey: 'c_u.name',
          filterType: 'string'
        },
        {
          title: 'Status',
          key: 'status',
          sort: true,
          hide: false,
          disable: false
        },
        {
          title: 'Tgl. Buat',
          key: 'created_at',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
					filterType: 'datetime'
        },
        {
          title: 'Tgl. Ubah',
          key: 'updated_at',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterType: 'datetime'
        }
      ],
      modalShow: false,
      modalState: '',
      modalColor: '',
      modalSize: '',
      modalTitle: '',
      modalButton: '',
      modalContent: ''
    }
  },
  created(){
    this.fetch();
  },
  watch: {
    // check route changes
    '$route' (to, from){
      this.fetch();
    },

    profileStat(value){
      if(value == 'success'){
      }
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
    fetch(){
      if(this.$route.params.cu == 'semua'){
        this.disableColumnCu(false);
        this.$store.dispatch(this.kelas + '/index', this.params);
      }else{
        this.disableColumnCu(true);
        this.$store.dispatch(this.kelas + '/indexCu', [this.params,this.$route.params.cu]);
      }
    },
    disableColumnCu(status){
      this.columnData[4].disable = status;
    },
    selectedRow(item){
      this.selectedItem = item;
    },
    ubahData(id) {
      this.$router.push('/' + this.kelas + '/edit/' + id);
    },
    modalConfirmOpen(source, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = 'confirm-tutup';
      this.source = source;

      if(isMobile){
        this.selectedItem = itemMobile;
      }

      if (source == 'hapus') {
        this.modalTitle = 'Hapus ' + this.kelas + ' dengan username ' + this.selectedItem.username + '?';
        this.modalButton = 'Iya, Hapus';
      } else if (source == 'resetPassword') {
        this.modalTitle = 'Reset password user  ' + this.selectedItem.username + ' ini?';
        this.modalButton = 'Iya, reset password';
      } else if (source == 'updateStatus') {
        if (this.selectedItem.status == 0) {
          this.modalTitle = 'Aktifkan user  ' + this.selectedItem.username + ' ini?';
          this.modalButton = 'Iya, aktifkan';
        } else {
          this.modalTitle = 'Non-aktifkan user  ' + this.selectedItem.username + ' ini?';
          this.modalButton = 'Iya, non-aktifkan';
        }
      }
    },
    modalHakAksesOpen(isMobile,itemMobile){
      this.modalShow = true;
      this.modalColor = 'bg-primary';
      this.modalTitle = 'Hak Akses User'
      this.modalState = 'normal1';
      this.modalSize = 'modal-full';

      if(isMobile){
        this.selectedItem = itemMobile;
      }
      this.$store.dispatch(this.kelas + '/editHakAkses', this.selectedItem.id);
      $('.bootstrap-select').selectpicker('render');
    },
    modalHakAksesSave(){
      this.$store.dispatch(this.kelas + '/updateHakAkses', [this.selectedItem.id, this.modalForm]);
    },
    modalTutup() {
      this.modalShow = false;
      this.modalColor = '';
      this.modalTitle = '';
      this.modalSize = '';

      this.$store.dispatch(this.kelas + '/resetUpdateStat');
    },
    modalConfirmOk() {
      var vm = this;
      if (vm.source == 'hapus') {
        this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
      } else if (vm.source == "resetPassword"){
        this.$store.dispatch(this.kelas + '/updateResetPassword', this.selectedItem.id);
      } else if (vm.source == "updateStatus"){
        this.$store.dispatch(this.kelas + '/updateStatus', this.selectedItem.id);
      }
    },
    reload(){
      $('.bootstrap-select').selectpicker('refresh');
      $('.bootstrap-select').selectpicker('render');
    }
  },
  computed:{
    ...mapGetters('user',{
      profile: 'profile',
      profileStat: 'profileStat',
      itemData: 'dataS',
      itemDataStat: 'dataStatS',
      hakAkses: 'data',
      hakAksesStat: 'dataStat',
      updateMessage: 'update',
      updateStat: 'updateStat'
    }),
    ...mapGetters('global',{
      idCu: 'idCu'
    }),
    modalForm(){
      let newData = {};

      if(this.hakAkses.length > 0){
        this.hakAkses.forEach(e => {
          newData[e.name] = true
        })
      }

			return newData;
    }
  }
}
</script>
