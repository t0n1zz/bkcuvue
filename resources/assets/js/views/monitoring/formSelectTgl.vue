<template>
  <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <h5>Silahkan pilih rentang waktu laporan:</h5>
                <div class="border p-3 rounded">
                    <div class="form-group">
                        <h6>Tanggal Mulai:</h6>
                        <date-picker @dateSelected="tanggal_mulai = $event" :defaultDate="tanggal_mulai"></date-picker>
                    </div>
                    <div class="form-group">
                        <h6>Tanggal Akhir:</h6>
                        <date-picker @dateSelected="tanggal_akhir = $event" :defaultDate="tanggal_akhir"></date-picker>
                    </div>
                </div>    
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <h5>Atau centang dibawah untuk semua laporan:</h5>
                <div class="border p-3 rounded">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dc_ls_c" checked="" v-model="semua">
                        <label class="form-check-label" for="dc_ls_c">Pilih Semua Laporan</label>
                    </div>
                </div>
            </div>
        </div>    
        <div class="col-md-12">
            <div class="text-center" style="margin-top: 10px;">
                <button class="btn btn-warning" @click.prevent="batal">
                    <i class="icon-x"></i> Batal</button>
                <button type="submit" value="submit" class="btn btn-primary" @click.prevent="downloadLaporan">
                    <i class="icon-floppy-disk"></i> Download</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import selectData from "../../components/selectCuTp.vue";
import datePicker from '../../components/datePicker.vue';
import FileSaver from 'file-saver';
import moment from 'moment';


export default {
  components: {
      pageHeader,
      message,
      selectData,
      datePicker,
      FileSaver
  },
  data() {
      return {
          tanggal_mulai: '',
          tanggal_akhir: '',
          semua: false
      }
  },
  props: ['id_cu', 'id_tp', 'params'],

  created() {

  },
  methods: {
      downloadLaporan() {
          // this.$emit('loading');
          axios.post('/api/monitoring/laporan', { id_cu: this.id_cu, id_tp: this.id_tp, tgl_mulai: this.tanggal_mulai, tgl_akhir: this.tanggal_akhir, params: this.params, semua: this.semua }, {
              responseType: 'blob'
          }).then((response) => {
              this.$emit('stat');
              FileSaver.saveAs(response.data, 'Laporan Monitoring.xlsx')
          })
      },

      batal() {
          this.$emit('tutup');
      }
  },

  computed: {
      ...mapGetters('auth', {
          currentUser: 'currentUser'
      }),
      ...mapGetters('monitoring', {
          itemData: 'dataS',
          itemDataStat: 'dataStatS',
          updateMessage: 'update',
          updateStat: 'updateStat'
      }),
  }
}
</script>

<style>
textarea {
  height: 100%;
  width: 100%;
  -webkit-box-sizing: border-box;
  /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  /* Firefox, other Gecko */
  box-sizing: border-box;
  /* Opera/IE 8+ */
}
</style>