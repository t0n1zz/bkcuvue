<template>
  <div class="card card-body">	
    <div class="row">
      <div class="col-lg-3 pb-2">
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
      <div class="col-lg-9 pb-2">
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

      <div class="col-12 d-none d-md-block">
        <button class="btn btn-primary" @click.prevent="cariData"  :disabled="pencarian == ''"><i class="icon-search4"></i> Cari</button>
        <button class="btn btn-warning" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
        <button class="btn btn-light" @click.prevent="back" v-if="isBack"><i class="icon-arrow-left13"></i> Batal</button>
      </div>

      <div class="col-12 pb-2 d-block d-md-none">
        <button class="btn btn-primary btn-block" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
      </div>
      <div class="col-12 pb-2 d-block d-md-none" v-if="itemDataStat != ''">
        <button class="btn btn-warning btn-block" @click.prevent="resetData"><i class="icon-reset"></i> Reset pencarian</button>
      </div>
      <div class="col-12 pb-2 d-block d-md-none">
        <button class="btn btn-light btn-block" @click.prevent="back" v-if="isBack"><i class="icon-arrow-left13"></i> Batal</button>
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
    mounted() {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
          if(this.pencarian != '')
            this.cariData();
        }
      });
    },
    methods: {
      cariData(){
        this.isNew = true;
        if(this.jenis == 'KTP'){
          this.$emit('cariDataKTP', this.pencarian);
        }else{
          this.$emit('cariDataBA', this.pencarian);
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
    }
  }
</script>