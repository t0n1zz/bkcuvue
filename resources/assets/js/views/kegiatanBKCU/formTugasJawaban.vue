<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formKomentar') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

    <message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

    <div class="card card-body bg-info text-white text-center">
      TUGAS
    </div>

    <!-- data pertanyaan -->
    <div class="card">
      <div class="card-header bg-light header-elements-inline">
        <h6 class="card-title">{{selected.name}}</h6>
        <div class="d-none d-sm-block">
          <div class="header-elements">
            <span class="badge badge-primary">{{ selected.tipe | uppercase }}</span>
            <span class="badge badge-secondary ml-1" v-html="$options.filters.dateTime(selected.created_at)">
            </span>
          </div>
        </div>
      </div>
      <div class="card-body" v-if="selected.keterangan">
        <div v-html="selected.keterangan"></div>
      </div>
      <div class="card-footer">
        <div class="d-block d-sm-none text-center">
          <span class="badge badge-primary">{{ selected.tipe | uppercase }}</span>

          <span class="badge badge-secondary" v-html="$options.filters.dateTime(selected.created_at)">
          </span>
        </div>
      </div>
    </div>
    
    <!-- jawaban list -->
    <div v-if="tipeUser != 'peserta'">
      <div class="card card-body bg-warning text-white text-center">
        JAWABAN
      </div>
      <!-- komentar -->
      <template v-if="itemDataKomentarStat == 'success' && itemDataKomentar.data.length > 0">
        <div class="card" v-for="komentar in itemDataKomentar.data" :key="komentar.id" :class="{'border-warning' : komentar.terjawab == 1}">
          <div class="card-header bg-warning text-white text-center" v-if="komentar.terjawab">
            <i class="icon-check"></i> JAWABAN
          </div>
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
            <div class="d-none d-sm-block">
              <div class="header-elements">
                <span class="badge badge-secondary">
                  <small v-html="$options.filters.dateTime(komentar.created_at)"></small>	
                </span>
                <div class="list-icons ml-2">
                  <a href="#" class="btn btn-warning list-icons-item text-white" @click.prevent="showOpen(komentar, 'jawaban')" v-if="!komentar.terjawab"><i class="icon-check"></i></a>
                  <a href="#" class="btn btn-warning list-icons-item text-white" @click.prevent="showOpen(komentar, 'batalJawaban')" v-if="komentar.terjawab"><i class="icon-cross"></i></a>
                  <a href="#" class="btn btn-light list-icons-item" @click.prevent="showOpen(komentar,'hapus')" v-if="komentar.id_user == currentUser.id"><i class="icon-bin2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body pb-1 pt-2" v-if="komentar.keterangan">
            <div v-html="komentar.keterangan"></div>
          </div>
          <div class="card-footer d-block d-sm-none text-center">
            <span class="badge badge-secondary">
              <small v-html="$options.filters.dateTime(komentar.created_at)"></small>	
            </span>

            <button class="btn btn-warning btn-block mt-2 mb-1" @click.prevent="showOpen(komentar,'jawaban')" v-if="!komentar.terjawab"><i class="icon-check"></i> Jadikan Jawaban</button>
            <button class="btn btn-warning btn-block mt-2 mb-1" @click.prevent="showOpen(komentar,'batalJawaban')" v-if="komentar.terjawab"><i class="icon-check"></i> Batal Jawaban</button>
            <button class="btn btn-light btn-block mt-2 mb-1" @click.prevent="showOpen(komentar,'hapus')" ><i class="icon-bin2"></i> Hapus Komentar</button>
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
              <button href="#" class="btn" v-for="(n, index) in pages" :key="index" :class="{'btn-primary' : queryKomentar.page == n, 'btn-light' : queryKomentar.page != n}"  @click.prevent="goToPage(n)">
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
    </div>

    <!-- updatestat -->
    <div v-if="updateStat == 'loading'">
      <div class="progress">
        <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
          <span class="sr-only">100% Complete</span>
        </div>
      </div>
    </div>
    
    <template v-else>
      <div v-if="!isShowHapus">
        

        <hr/>

        <form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formMateri">
          <div class="form-group">
            <ckeditor type="classic" :config="ckeditorNoImageConfig" v-model="formKomentar.keterangan"></ckeditor>
          </div>
          <button type="submit" class="btn btn-warning btn-block pb-2">
            <i class="icon-paperplane"></i> Kirim Komentar</button>
        </form>
      </div>
    
      <!-- hapus -->
      <div v-else-if="isShowHapus">
        <div class="card card-body text-center">
          <span class="text-warning pb-2">
            <i class="icon-question3" style="font-size: 3em"></i>
          </span>
          <h3 v-if="isShowHapus">Hapus komentar ini?</h3>
          <h3 v-if="isShowJawaban">Jadikan ini sebagai jawaban komentar ini?</h3>
          <h3 v-if="isShowBatalJawaban">Batalkan komentar ini sebagai jawaban?</h3>

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
            <button class="btn btn-light" @click.prevent="showBatal()">
              <i class="icon-arrow-left13"></i> Batal</button>
            <button class="btn btn-warning" @click.prevent="showOke()">
              <i class="icon-checkmark5"></i> Ok</button>
          </div>  

          <!-- tombol mobile-->
          <div class="d-block d-md-none">
            <button class="btn btn-warning btn-block pb-2" @click.prevent="showOke()">
              <i class="icon-checkmark5"></i> Ok</button>
            <button class="btn btn-light btn-block pb-2" @click.prevent="showBatal()">
              <i class="icon-arrow-left13"></i> Batal</button>
          </div> 
        </div>
      </div>
    </template>

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
          kegiatan_pertanyaan_id: '',
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
        isShowJawaban: false,
        isShowBatalJawaban: false,
				submited: false,
			}
		},
		created() {
      this.formKomentar.kegiatan_pertanyaan_id = this.selected.id;
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
          this.formKomentar.keterangan = '';
				} else if (value == 'fail') {
          this.message.show = true;
					this.message.content = this.updateResponse;
				}
			}
		},
		methods: {
      fetchKomentar(params){
        this.$store.dispatch('kegiatanBKCU/indexPertanyaanKomentar', [params, this.selected.id]);
      },
      save(){
				this.$validator.validateAll('formKomentar').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
              this.formKomentar.id_user = this.currentUser.id;
							this.$store.dispatch('kegiatanBKCU/updatePertanyaanKomentar', [this.formKomentar.id, this.formKomentar]);
						}else{
              this.formKomentar.id_user = this.currentUser.id;
							this.formKomentar.id_cu = this.currentUser.id_cu;
							this.$store.dispatch('kegiatanBKCU/storePertanyaanKomentar', [this.kegiatan_id, this.formKomentar]);
            }
					}else{
						this.submited = true;
					}	
				});
      },
      showOpen(value, tipe){
        this.selectedKomentar = value;
        if(tipe == 'hapus'){
          this.isShowHapus = true;
        }else if(tipe == 'jawaban'){
          this.isShowJawaban = true;
        }else if(tipe == 'batalJawaban'){
          this.isShowBatalJawaban = true;
        }
      },
      showOke(){
        if(this.isShowHapus){
          this.$store.dispatch('kegiatanBKCU/destroyPertanyaanKomentar', this.selectedKomentar.id);
        }else if(this.isShowJawaban){
          this.$store.dispatch('kegiatanBKCU/jawabanPertanyaan', [this.selectedKomentar.id,'jawaban']);
        }else if(this.isShowBatalJawaban){
          this.$store.dispatch('kegiatanBKCU/jawabanPertanyaan', [this.selectedKomentar.id,'batalJawaban']);
        }
        this.isShowHapus = false;
        this.isShowJawaban = false;
        this.isShowBatalJawaban = false;
      },
      showBatal(){
        this.selectedKomentar = {};
        if(this.isShowHapus){
          this.isShowHapus = false;
        }else if(this.isShowJawaban){
          this.isShowJawaban = false;
        }else{
          this.isShowBatalJawaban = false;
        }
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
      ...mapGetters('kegiatanBKCU', {
        itemDataKomentar: 'dataS5',
				itemDataKomentarStat: 'dataStatS5',
				updateResponse: 'update2',
				updateStat: 'updateStat2',
			}),
		}
	}
</script>