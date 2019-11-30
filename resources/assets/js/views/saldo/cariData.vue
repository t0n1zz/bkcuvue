<template>
  <div class="card card-body">	
    <div class="row">
      <div class="col-lg-12 pb-2">
        <div class="input-group" v-if="this.currentUser.id_cu === 0">
						<div class="input-group-prepend">
							<span class="input-group-text">Pilih CU</span>
						</div>

						<!-- select -->
						<select class="form-control" name="idCu" v-model="idCu" data-width="100%" :disabled="modelCuStat === 'loading'">
							<option disabled value="0">Silahkan pilih CU</option>
							<slot></slot>
							<option disabled value="">----------------</option>
							<option v-for="cu in modelCu" :value="cu.id" v-if="cu">{{cu.name}}</option>
						</select>

						<!-- reload cu -->
						<div class="input-group-append">
							<button class="btn btn-light" @click="fetchCU" :disabled="modelCuStat === 'loading'">
								<i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i>
							</button>
						</div>
					</div>
      </div>
      <div class="col-lg-3 pb-2" v-if="idCu != 0">
        <!-- text -->
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Pilih Jenis Pencarian</span>
          </div>

          <select class="form-control" name="jenis" v-model="jenis" data-width="100%" @change="changeJenis($event.target.value)">
            <option disabled value="">Silahkan pilih jenis pencarian</option>
            <option value="BA">No. BA</option>
            <option value="KTP">No. KTP / NIK</option>
          </select>
        </div>
      </div>
      <div class="col-lg-9 pb-2" v-if="idCu != 0">
        <!-- text -->
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Masukkan pencarian</span>
          </div>

          <cleave 
            name="pencarian"
            v-model="pencarian" 
            class="form-control" 
            :options="cleaveOption.number16"
            :placeholder="placeholder" :disabled="isNew"></cleave>
        </div>
      </div>

      <div class="col-12 d-none d-md-block" v-if="idCu != 0">
        <button class="btn btn-primary" @click.prevent="cariData"  :disabled="pencarian == ''"><i class="icon-search4"></i> Cari</button>
        <button class="btn btn-warning" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
      </div>

      <div class="col-12 pb-2 d-block d-md-none" v-if="idCu != 0">
        <button class="btn btn-primary btn-block mb-1" @click.prevent="cariData"  :disabled="pencarian == ''"><i class="icon-search4"></i> Cari</button>
        <button class="btn btn-warning btn-block" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
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
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex';
  import Cleave from 'vue-cleave-component';

  export default {
    components: {
			Cleave,
		},
    props: {
      itemDataStat: '',
      isBack: true
    },
    data(){
      return {
        idCu: '',
        jenis:'BA',
        pencarian: '',
        placeholder: 'Silahkan masukkan no. BA Anggota',
        isNew: false,
        cleaveOption: {
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
          }
        }
      }
    },
    created(){
			if(this.currentUser.id_pus !== undefined){
				this.fetchCU();
			}	
		},
    mounted() {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
          if(this.pencarian != '')
            this.cariData();
        }
      });
    },
    watch: {
			'$route' (to, from){
				// check current page meta
				this.fetchCU();
			},
			modelCuStat(value){
				if(value === "success"){
					this.idCu = this.currentUser.id_cu;
				}
			},
    },
    methods: {
      fetchCU(){
				if(this.modelCu.length == 0){
					this.$store.dispatch('cu/getHeader', this.currentUser.id_pus);
				}else{
					this.idCu =  this.currentUser.id_cu;
				}
			},
      cariData(){
        this.isNew = true;
        if(this.jenis == 'KTP'){
          this.$emit('cariDataKTP', this.pencarian);
        }else{
          this.$emit('cariDataBA', this.idCu, this.pencarian);
        }
      },
      changeJenis(value){
        if(value == 'KTP'){
          this.placeholder = 'Silahkan masukkan no. KTP / Nomor Induk Kependudukan (NIK)';
        }else{
          this.placeholder = 'Silahkan masukkan no. BA Anggota';
        }
        this.resetData();
      },
      resetData(){
        this.pencarian = '';
        this.isNew = false;
        this.$emit('resetData');
      },
      back(){
        this.$emit('back');
      }
    },
    computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
  }
</script>