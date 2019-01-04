<template>
  <div>
    <!-- main panel -->
    <data-viewer :title="title" :kelas="kelas" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelUrl="excelUrl" :isUploadExcel="false" @fetch="fetch">

      <!-- desktop -->
      <!-- button desktop -->
      <template slot="button-desktop">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- reset password -->
        <button @click.prevent="modalConfirmOpen('resetPassword')" class="btn btn-light mb-1"  v-if="currentUser.can && currentUser.can['reset_password']"  :disabled="!selectedItem.id">
          <i class="icon-history"></i> Reset Password
        </button>

        <!-- aktifkan -->             
        <button @click.prevent="modalConfirmOpen('updateStatus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['status_' + kelas]"  :disabled="!selectedItem.id">
          <i class="icon-user-check"></i> <span v-if="selectedItem.status == 1">Tidak Aktifkan</span>
          <span v-else-if="selectedItem.status == 0">Aktifkan</span>
          <span v-else>Status</span>
        </button> 

        <!-- hak akses -->
        <button @click.prevent="modalHakAksesOpen()" class="btn btn-light mb-1"  v-if="currentUser.can && currentUser.can['hak_akses_' + kelas]" :disabled="!selectedItem.id">
          <i class="icon-key"></i> Hak Akses
        </button>

      </template>

       <!-- button mobile -->
      <template slot="button-mobile">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- reset password -->
        <button @click.prevent="modalConfirmOpen('resetPassword')" class="btn btn-light btn-block mb-1"  v-if="currentUser.can && currentUser.can['reset_password']"  :disabled="!selectedItem.id">
          <i class="icon-history"></i> Reset Password
        </button>

        <!-- aktifkan -->             
        <button @click.prevent="modalConfirmOpen('updateStatus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['status_' + kelas]"  :disabled="!selectedItem.id">
          <i class="icon-user-check"></i> <span v-if="selectedItem.status == 1">Tidak Aktifkan</span>
          <span v-else-if="selectedItem.status == 0">Aktifkan</span>
          <span v-else>Status</span>
        </button> 

        <!-- hak akses -->
        <button @click.prevent="modalHakAksesOpen()" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['hak_akses_' + kelas]" :disabled="!selectedItem.id">
          <i class="icon-key"></i> Hak Akses
        </button>

      </template>

      <!-- item desktop -->
      <template slot="item-desktop" slot-scope="props">
        <tr :class="{ 'bg-info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)">
          <td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
          <td v-if="!columnData[1].hide">
            <img :src="'/images/user/' + props.item.gambar + '.jpg'" class="img-rounded img-fluid wmin-sm" width="40" v-if="props.item.gambar">
            <img :src="'/images/no_image_man.jpg'" class="img-rounded img-fluid wmin-sm" width="40" v-else>
          </td>
          <td v-if="!columnData[2].hide" class="warptext">{{props.item.username}}</td>
          <td v-if="!columnData[3].hide" class="warptext">{{props.item.name}}</td>
          <td v-if="!columnData[4].hide" class="warptext">{{props.item.email}}</td>
          <td v-if="!columnData[5].hide && !columnData[5].disable">
            <span v-if="props.item.cu">{{props.item.cu.name}}</span>
            <span v-else>Puskopdit BKCU Kalimantan</span>
          </td>
          <td v-if="!columnData[6].hide" v-html="$options.filters.checkStatus(props.item.status)"></td>
          <td v-if="!columnData[7].hide" class="text-nowrap" v-html="$options.filters.dateTime(props.item.login)"></td>
          <td v-if="!columnData[8].hide" class="text-nowrap" v-html="$options.filters.dateTime(props.item.created_at)"></td>
          <td v-if="!columnData[9].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
        </tr>
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
				<hak-akses-form :form="modalHakAksesForm" :tipeUser="tipeUser" :data-stat="hakAksesStat"
        @hakForm="hakForm"></hak-akses-form>
				<!-- divider -->
				<hr>
			</template>

			<template slot="modal-footer1">

				<!-- button -->
				<button class="btn btn-light" @click="modalTutup">
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
import DataViewer from '../../components/dataviewer2.vue';
import appModal from '../../components/modal';
import hakAksesForm from "../../components/hakAkses.vue";
  
export default {
  components: {
    DataViewer,
    appModal,
    hakAksesForm
  },
  props:['title','kelas'],
  data(){
    return {
      selectedItem: [],
      query: {
        order_column: "username",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelUrl: '',
      columnData: [
        {
          title: "No.",
          name: "No.",
        },
        {
          title: 'Foto',
          name: 'gambar',
          hide: false,
        },
        {
          title: 'Username',
          name: 'username',
          tipe: 'string',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: true
        },
        {
          title: 'Nama',
          name: 'name',
          tipe: 'string',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        },
        {
          title: 'E-mail',
          name: 'email',
          tipe: 'string',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        },
        {
          title: 'CU',
          name: 'cu.name',
          tipe: 'string',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        },
        {
          title: 'Status',
          name: 'status',
          sort: true,
          hide: false,
          disable: false
        },
        {
          title: 'Login',
          name: 'login',
          tipe: 'datetime',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        },
        {
          title: 'Tgl. Buat',
          name: 'created_at',
          tipe: 'datetime',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        },
        {
          title: 'Tgl. Ubah',
          name: 'updated_at',
          tipe: 'datetime',
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        }
      ],
      tipeUser: '',
      modalHakAksesForm: [],
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
        this.fetch(this.query);
      }else if(value == "fail"){
        this.modalContent = this.updateMessage;
      }else{
        this.modalContent = '';
      }
    },
    hakAksesStat(value){
      if(value == "success"){
        let newData = [];

        if(this.hakAkses.length > 0){
          this.hakAkses.forEach(e => {
            newData.push(e.name);
          })
        }

        this.modalHakAksesForm = newData;
      }
    }
  },
  methods: {
    fetch(params){
      if(this.$route.params.cu == 'semua'){
        this.disableColumnCu(false);
        this.$store.dispatch(this.kelas + '/index', params);
        this.excelUrl = this.kelas;
      }else{
        this.disableColumnCu(true);
        this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
        this.excelUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
      }
    },
    disableColumnCu(status){
      this.columnData[5].disable = status;
    },
    selectedRow(item){
      this.selectedItem = item;
    },
    ubahData(id) {
      this.$router.push('/' + this.kelas + '/edit/' + id);
    },
    hakForm(value){
      this.modalHakAksesForm = value;
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

      if(this.selectedItem.id_cu == 0){
        this.tipeUser = 'bkcu';
      }else{
        this.tipeUser = 'cu';
      }

      this.$store.dispatch(this.kelas + '/editHakAkses', this.selectedItem.id);
    },
    modalHakAksesSave(){
      this.$store.dispatch(this.kelas + '/updateHakAkses', [this.selectedItem.id, this.modalHakAksesForm]);
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
    }
  },
  computed:{
     ...mapGetters('auth',{
      currentUser: 'currentUser'
    }),
    ...mapGetters('user',{
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
  }
}
</script>
