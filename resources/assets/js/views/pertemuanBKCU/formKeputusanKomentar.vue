<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formKomentar') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

    <message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

    <div class="card card-body bg-success text-white text-center">
      KEPUTUSAN
    </div>

    <!-- data keputusan -->
    <div class="card">
      <div class="card-header bg-light header-elements-inline">
        <h6 class="card-title" v-html="$options.filters.dateTime(selected.created_at)"></h6>
        <div class="header-elements">
          <span class="badge badge-primary">
            <check-value :value="selected.cu.name" v-if="selected.cu"></check-value>
            <span v-else>-</span>
            |
            <check-value :value="selected.user.username" v-if="selected.user"></check-value>
            <span v-else>-</span>
          </span>
        </div>
      </div>
      <div class="card-body" v-if="selected.keterangan">
        <div class="row">
          <div class="col-md-6" v-for="pilih in selected.pilih" :key="pilih.id">
            <div class="card" :class="{'border-primary' : pilih.pivot.nilai == 1, 'border-danger' : pilih.pivot.nilai == 2, 'border-secondary' : pilih.pivot.nilai == 3}">
              <div class="card-header text-white" :class="{'bg-primary' : pilih.pivot.nilai == 1, 'bg-danger' : pilih.pivot.nilai == 2, 'bg-secondary' : pilih.pivot.nilai == 3}">
                <span v-if="pilih.pivot.nilai == 1">SETUJU</span>
                <span v-else-if="pilih.pivot.nilai == 2">TIDAK SETUJU</span>
                <span v-else-if="pilih.pivot.nilai == 3">TIDAK PUNYA TANGGAPAN</span>
              </div>
              <div class="card-body">
                <check-value :value="pilih.name"></check-value>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-1 mb-1"/>
        <b>Catatan / Komentar </b>
        <br/>
        <div v-html="selected.keterangan"></div>
      </div>
    </div>
    
    <div v-if="!isShowHapus">
      <div class="card card-body bg-warning text-white text-center">
        KOMENTAR
      </div>
      <!-- komentar -->
      <template v-if="itemDataKomentarStat == 'success' && itemDataKomentar.data.length > 0">
        <div class="card" v-for="komentar in itemDataKomentar.data" :key="komentar.id">
          <div class="card-header bg-light header-elements-inline">
            <h6 class="card-title">
              <img :src="'/images/aktivis/' + komentar.user.aktivis.gambar + '.jpg'" width="30" height="30" class="rounded-circle"  alt="user image" v-if="komentar.user.aktivis.gambar">
              <img src="/images/no_image_man.jpg" width="30" height="30" class="rounded-circle" alt="user image" v-else>
              <check-value :value="komentar.user.aktivis.name" v-if="komentar.user"></check-value>
              <span v-else>-</span>
              |
              <check-value :value="komentar.cu.name" v-if="komentar.cu"></check-value>
              <span v-else>-</span>
            </h6>
            <div class="header-elements">
              <span class="badge badge-secondary">
                <small v-html="$options.filters.dateTime(komentar.created_at)"></small>	
              </span>
              <div class="list-icons ml-2" v-if="komentar.id_user == currentUser.id">
                <a href="#" class="list-icons-item" @click.prevent="hapusOpen(komentar)" ><i class="icon-bin2"></i></a>
              </div>
            </div>
          </div>
          <div class="card-body pb-1 pt-2" v-if="komentar.keterangan">
            <div v-html="komentar.keterangan"></div>
          </div>
        </div>
      </template>

      <div v-if="itemDataKomentarStat === 'loading'" class="card card-body">
        <h4>Mohon tunggu...</h4>
        <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
            <span class="sr-only">100% Complete</span>
          </div>
        </div>
      </div>
      <div v-if="itemDataKomentarStat === 'fail'" class="card card-body">
        <h4>Oops.. Terjadi kesalahan, silahkan coba lagi.</h4>
      </div>

      <!-- komentar pagination -->
      <div class="card card-body pb-2 pt-2" v-if="itemDataKomentarStat == 'success' && itemDataKomentar.data.length > 0">
        <div class="row pre-scrollable">

          <!-- pagination -->
          <!-- desktop -->
          <div class="col-md-12 text-center">
            <!-- pagination success-->
            <div class="btn-group" v-if="itemDataKomentarStat === 'success'">
              <button href="#" class="btn btn-light" :class="{'disabled' : !itemDataKomentar.prev_page_url}" @click.prevent="goToPage(1)">
                  <i class="icon-backward2"></i>
              </button>
              <button href="#" class="btn btn-light" :class="{'disabled' : !itemDataKomentar.prev_page_url}" @click.prevent="prevPage">
                  <i class="icon-arrow-left5"></i>
              </button>
              <button href="#" class="btn" v-for="n in pages" :class="{'btn-primary' : queryKomentar.page == n, 'btn-light' : queryKomentar.page != n}"  @click.prevent="goToPage(n)">
                  {{n}}
              </button>
              <button href="#" class="btn btn-light" :class="{'disabled' : !itemDataKomentar.next_page_url}" @click.prevent="nextPage">
                  <i class="icon-arrow-right5"></i>
              </button>
              <button href="#" class="btn btn-light" :class="{'disabled' : !itemDataKomentar.next_page_url}" @click.prevent="goToPage(itemDataKomentar.last_page)">
                  <i class="icon-forward3"></i>
              </button>
            </div>
            
            <!-- pagination loading-->
            <div class="btn-group" v-else>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-backward2"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-arrow-left5"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-spinner2 spinner"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-arrow-right5"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-forward3"></i>
              </button>
              
            </div>
          </div>

        </div>
      </div>

      <hr/>

      <!-- tulis komentar -->
      <div v-if="updateStat == 'loading'">
        <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
            <span class="sr-only">100% Complete</span>
          </div>
        </div>
      </div>
      <div v-else>
        <form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formMateri">

        <div class="form-group">
          <ckeditor type="classic" :config="ckeditorNoImageConfig" v-model="formKomentar.keterangan"></ckeditor>
        </div>
        <button type="submit" class="btn btn-warning btn-block pb-2">
          <i class="icon-paperplane"></i> Kirim Komentar</button>
        </form>
      </div>
    </div>

    <!-- hapus -->
    <div v-else>
      <div class="card card-body text-center">
        <span class="text-warning pb-2">
          <i class="icon-question3" style="font-size: 3em"></i>
				</span>
        <h3>Hapus komentar ini?</h3>

        <div class="card">
          <div class="card-header bg-light header-elements-inline">
            <h6 class="card-title">
              <img :src="'/images/aktivis/' + selectedKomentar.user.aktivis.gambar + '.jpg'" width="30" height="30" class="rounded-circle"  alt="user image" v-if="selectedKomentar.user.aktivis.gambar">
              <img src="/images/no_image_man.jpg" width="30" height="30" class="rounded-circle" alt="user image" v-else>
              <check-value :value="selectedKomentar.user.aktivis.name" v-if="selectedKomentar.user"></check-value>
              <span v-else>-</span>
              |
              <check-value :value="selectedKomentar.cu.name" v-if="selectedKomentar.cu"></check-value>
              <span v-else>-</span>
            </h6>
            <div class="header-elements">
              <span class="badge badge-secondary">
                <small v-html="$options.filters.dateTime(selectedKomentar.created_at)"></small>	
              </span>
            </div>
          </div>
          <div class="card-body pb-1 pt-2" v-if="selectedKomentar.keterangan">
            <div v-html="selectedKomentar.keterangan"></div>
          </div>
        </div>
        <!-- tombol desktop-->
        <div class="text-center d-none d-md-block">
          <button class="btn btn-light" @click.prevent="isShowHapus = false">
            <i class="icon-arrow-left13"></i> Batal</button>
          <button class="btn btn-warning" @click.prevent="hapus()">
            <i class="icon-checkmark5"></i> Ok</button>
        </div>  

        <!-- tombol mobile-->
        <div class="d-block d-md-none">
          <button class="btn btn-warning btn-block pb-2" @click.prevent="hapus()">
            <i class="icon-checkmark5"></i> Ok</button>
          <button class="btn btn-light btn-block pb-2" @click.prevent="isShowHapus = false">
            <i class="icon-arrow-left13"></i> Batal</button>
        </div> 
      </div>
    </div>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div> 

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { toMulipartedForm } from '../../helpers/form';
	import message from "../../components/message.vue";
  import formInfo from "../../components/formInfo.vue";
  import checkValue from '../../components/checkValue.vue';

	export default {
		props: ['selected','kegiatan_id'],
		components: {
			formInfo,
      message,
      checkValue
		},
		data() {
			return {
        title: '',
        ckeditorNoImageConfig: {
					toolbar: {
						items: [
							'heading',
							'|',
							'bold',
							'italic',
							'link',
							'bulletedList',
							'numberedList',
							'blockQuote',
							'insertTable',
							'mediaEmbed',
							'undo',
							'redo'
						]
					},
					table: {
						contentToolbar: [
							'tableColumn',
							'tableRow',
							'mergeTableCells'
						]
					},
        },
        selectedKomentar: {},
        formKomentar: {
          id: '',
          kegiatan_id: '',
          kegiatan_keputusan_id: '',
					id_user: '',
					id_cu: '',
          keterangan: ''
        },
        pages: [],
        queryKomentar: {
					order_column: "created_at",
					order_direction: "desc",
					filter_match: "and",
					limit: 3,
					page: 1
				},
        message: {
					show: false,
					content: ''
        },
        isShowHapus: false,
				submited: false,
			}
		},
		created() {
      this.formKomentar.kegiatan_keputusan_id = this.selected.id;
      this.fetchKomentar(this.queryKomentar);
		},
		watch: {
      itemDataKomentarStat(value){
        if(value == 'success'){
          this.calculatePagination();
        }
      },
      updateStat(value) {
				if (value == 'success') {
          this.fetchKomentar(this.queryKomentar);
          this.isShowHapus = false;
          this.formKomentar.keterangan = '';
				} else if (value == 'fail') {
          this.message.show = true;
					this.message.content = this.updateResponse;
				}
			}
		},
		methods: {
      fetchKomentar(params){
        this.$store.dispatch('pertemuanBKCU/indexKeputusanKomentar', [params, this.selected.id]);
      },
      save(){
				this.$validator.validateAll('formKomentar').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
              this.formKomentar.id_user = this.currentUser.id;
							this.$store.dispatch('pertemuanBKCU/updateKeputusanKomentar', [this.formKomentar.id, this.formKomentar]);
						}else{
              this.formKomentar.id_user = this.currentUser.id;
							this.formKomentar.id_cu = this.currentUser.id_cu;
							this.$store.dispatch('pertemuanBKCU/storeKeputusanKomentar', [this.kegiatan_id, this.formKomentar]);
            }
					}else{
						this.submited = true;
					}	
				});
      },
      hapusOpen(value){
        this.selectedKomentar = value;
        this.isShowHapus = true;
      },
      hapus(){
        this.$store.dispatch('pertemuanBKCU/destroyKeputusanKomentar', this.selectedKomentar.id);
      },
      calculatePagination() {
        var i = 0;
        var startPage = 0;
        var endPage = 0;
        var diffPage = 0;

        startPage = this.queryKomentar.page < 3 ? 1 : this.queryKomentar.page - 1;
        endPage = 4 + startPage;
        endPage = this.itemDataKomentar.last_page < endPage ? this.itemDataKomentar.last_page : endPage;
        diffPage = startPage - endPage + 4;
        startPage -= startPage - diffPage > 0 ? diffPage : 0;
        this.pages.length = 0;

        for (i = startPage; i <= endPage; i++) {
          this.pages.push(i);
        }
      },
      prevPage() {
        if (this.itemDataKomentar.prev_page_url) {
          this.queryKomentar.page = Number(this.queryKomentar.page) - 1
          this.fetchKomentar(this.queryKomentar);
        }
      },
      goToPage(value) {
        if (this.queryKomentar.page != value) {
          this.queryKomentar.page = value;
          this.fetchKomentar(this.queryKomentar);;
        }
      },
      nextPage() {
        if (this.itemDataKomentar.next_page_url) {
          this.queryKomentar.page = Number(this.queryKomentar.page) + 1
          this.fetchKomentar(this.queryKomentar);
        }
      },
      messageClose(){
				this.message.show = false;
			},
			tutup() {
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
      }),
      ...mapGetters('pertemuanBKCU', {
        itemDataKomentar: 'dataS5',
				itemDataKomentarStat: 'dataStatS5',
				updateResponse: 'update2',
				updateStat: 'updateStat2',
			}),
		}
	}
</script>