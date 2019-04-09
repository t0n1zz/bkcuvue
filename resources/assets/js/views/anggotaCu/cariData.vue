<template>
  <div>
    <!-- check nik -->
    <div class="card card-body">	
      <div class="row">
        <div class="col-12">
          <h6>
            Silahkan masukkan NIK anggota CU untuk memastikan apakah data anggota CU dengan NIK tersebut sudah terdaftar di SIMO
          </h6>
        </div>
        <div class="col-12 pb-2">
          <!-- text -->
          <cleave 
            name="nik"
            v-model="nik" 
            class="form-control" 
            :options="cleaveOption.number16"
            placeholder="Silahkan masukkan no KTP" :disabled="isNew"></cleave>
        </div>

        <div class="col-4">
          <div class="row">
            <div class="col-6 pb-2">
              <button class="btn btn-primary btn-block" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
            </div>
            <div class="col-6 pb-2" v-if="itemDataStat != ''">
              <button class="btn btn-warning btn-block" @click.prevent="resetData"><i class="icon-reset"></i> Reset pencarian</button>
            </div>
          </div>
          
        </div>

        <!-- loading -->
        <div class="col-12" v-if="itemDataStat == 'loading'">
          <hr/>
          <div class="progress">
            <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
              <span class="sr-only">100% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			Cleave
		},
		data() {
			return {
				kelas: 'anggotaCu',
				isNew: false,
				nik: '',
				isEdit: false,
				cleaveOption: {
          number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
				},
			}
		},
		watch: {
      itemDataStat(value){
        if(value === "success"){
          if(!this.itemData){
            this.isNew = true;
          }
        }
      },
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
				  this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			cariData(){
				this.itemDataStat = 'loading';
        this.isNew = false;
        this.$store.dispatch(this.kelas + '/cariData', this.nik);
			},
			resetData(){
				this.nik = '';
				this.isNew = false;
				this.$store.commit(this.kelas + '/setData','');
				this.$store.commit(this.kelas + '/setDataStat',''); 
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				itemData: 'data',
				itemDataStat: 'dataStat',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>
