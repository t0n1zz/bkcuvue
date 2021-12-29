<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('form2') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="form2">

      <div class="row">

        <!-- cu -->
        <div class="col-sm-12">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Pilih CU</span>
            </div>

            <!-- select -->
            <select class="form-control" name="idCu" v-model="form2.id_cu" data-width="100%"  :disabled="modelCuStat === 'loading'">
              <option disabled value="">Silahkan pilih data</option>
              <slot></slot>
              <option disabled value="">----------------</option>
              <option v-for="(cu, index) in modelCu" :value="cu.id" :key="index">{{cu.name}}</option>
            </select>

            <!-- reload cu -->
            <div class="input-group-append">
              <button class="btn btn-light" @click="fetchCU" :disabled="modelCuStat === 'loading'">
                <i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- bulan -->
        <div class="col-sm-12">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Pilih Bulan</span>
            </div>

            <!-- select -->
            <select class="form-control" name="periodeBulan" v-model="form2.periodeBulan" data-width="100%" :disabled="form2.id_cu == ''">
              <option disabled value="">Bulan</option>
              <option disabled value="">----------------</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>  

        <!-- tahun -->
        <div class="col-sm-12">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> Pilih Tahun</span>
            </div> 
            <!-- select -->
            <select class="form-control" name="periodeTahun" v-model="form2.periodeTahun" data-width="100%" :disabled="form2.periodeBulan == ''">
              <option disabled value="">Tahun</option>
              <option disabled value="">----------------</option>
              <option v-for="(y, index) in itemTahun" :value="y" :key="index">{{y}}</option>
            </select>
          </div>
        </div>
        
        <div class="col-sm-12">
          <!-- divider -->
          <hr>
          
          <!-- tombol desktop-->
          <div class="text-center d-none d-md-block">
            <button class="btn btn-light" @click.prevent="tutup">
              <i class="icon-cross"></i> Tutup</button>

            <button type="submit" class="btn btn-primary">
              <i class="icon-floppy-disk"></i> Simpan</button>
          </div>  

          <!-- tombol mobile-->
          <div class="d-block d-md-none">
            <button type="submit" class="btn btn-primary btn-block pb-2">
              <i class="icon-floppy-disk"></i> Simpan</button>

            <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
              <i class="icon-cross"></i> Tutup</button>
          </div> 
        </div>

      </div>

    </form>	

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		props: ['kelas'],
		components: {
			formInfo,
			message
		},
		data() {
			return {
				title: '',
				form2: {
					id_cu: '',
					periodeBulan: '',
					periodeTahun: '',
        },
        itemTahun: [],
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
			this.generateYear();
		},
		watch: {
		},
		methods: {
      fetchCU(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			},
      save(){
				this.$validator.validateAll('form2').then((result) => {
					this.$store.dispatch(this.kelas + '/create', [this.form2.id_cu, this.form2.periodeBulan, this.form2.periodeTahun]);
				});
      },
			tutup() {
				this.$emit('tutup');
			},
      momentYear(){
				return moment().year();
			},
			generateYear(){
				const years = (back) => {
  				const year = new Date().getFullYear();
  				return Array.from({length: back}, (v, i) => year - back + i + 1);
				}

				this.itemTahun = years(5);
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
      ...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
		}
	}
</script>