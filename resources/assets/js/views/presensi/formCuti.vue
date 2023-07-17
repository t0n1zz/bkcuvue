<template>
    <div class="col-md-12">
        <div>
            <h5>Jenis Cuti :</h5>
            <select class="form-control" v-model="form.jenis" data-width="100%" @change="addAktivis">
                <option disabled="true" value="">PILIH JENIS CUTI</option>
                <option value="CUTI TAHUNAN">CUTI TAHUNAN</option>
                <option value="CUTI KHUSUS">CUTI KHUSUS</option>
            </select>
        </div>
        <div style="margin-top: 10px;">
            <h5>Tanggal Mulai:</h5>
            <date-picker @dateSelected="form.tanggal_mulai = $event" :defaultDate="form.tanggal_mulai"></date-picker>
        </div>

        <div style="margin-top: 10px;">
            <h5>Tanggal Masuk:</h5>
            <date-picker @dateSelected="form.tanggal_selesai = $event" :defaultDate="form.tanggal_selesai"></date-picker>
        </div>

        <!-- <h5>Lama :</h5>
        <div class="">
             <input type="number" name="lama" id="lama" v-model="form.lama">
        </div> -->

        <div v-if="currentUser.can['verifikasi_personalia'] && page !='pribadi'" style="margin-top: 10px;">
                <h5>Tanggal Realisasi:</h5>
                <date-picker @dateSelected="form.realisasi = $event" :defaultDate="form.realisasi"></date-picker>
        </div>

        <h5>Alasan :</h5>
        <div class="">
            <textarea name="" v-model="form.alasan" rows="5"></textarea>
        </div>
        <div v-if="flagCheck">
            <div style="color: red;">Cuti Minimal diajukan 30 Hari Sebelum Tanggal Mulai Cuti</div>
        </div>


        <div class="text-center" style="margin-top: 10px;">
            <button class="btn btn-warning" @click.prevent="batal">
                <i class="icon-x"></i>Batal</button>

            <button type="submit" value="submit" class="btn btn-primary" @click.prevent="storeKuliah"
                :disable="!form.alasan">
                <i class="icon-floppy-disk"></i>Simpan</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import selectData from "../../components/selectCuTp.vue";
import datePicker from '../../components/datePicker.vue';
import moment from 'moment';


export default {
    components: {
        pageHeader,
        message,
        selectData,
        datePicker,
    },
    data () {
        return {
            form: {
                id_user: '',
                id_cu: '',
                id_aktivis: '',
                jenis: '',
                tanggal_mulai: '',
                tanggal_selesai: '',
                alasan: '',
                realisasi:'',
                lama: 0
            },
            tabName: 'aktif',
            kuliah: [],
            aktiv: '',
            flag: false,
            tanggal: '',
            tanggal2: '',
            atribut: [],
            flagCheck: false,
        }
    },

    props: ['dataCuti','tipe','page'],

    created () {
        if (this.dataCuti != '' && this.tipe=='cutiEdit') { 
            this.form.jenis = this.dataCuti.jenis
            this.form.tanggal_mulai = this.dataCuti.tanggal_mulai
            this.form.tanggal_selesai = this.dataCuti.tanggal_selesai
            this.form.alasan = this.dataCuti.alasan
        }
    },
    methods: {
        addAktivis () {
            this.flag = true
        },

        storeKuliah () {
            this.form.id_cu = this.currentUser.id_cu
            this.form.id_aktivis = this.currentUser.id_aktivis
            this.form.id_user = this.currentUser.id

            const start = new Date(this.form.tanggal_mulai);
            const end = new Date(this.form.tanggal_selesai);
            const timeDifference = end.getTime() - start.getTime();
            const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            const today = new Date();
            const currentDate = today.toISOString().split('T')[0];
            const newToday = new Date(currentDate)
            const timeDifferenceCheck = start.getTime() - newToday.getTime();
            const daysDifferenceCheck = Math.ceil(timeDifferenceCheck / (1000 * 3600 * 24));

            if (daysDifferenceCheck < 30) {
                this.flagCheck = true
            } else {
                this.flagCheck = false
            }

            // if (!this.edit
            if (!this.flagCheck) {
                if (this.tipe == 'cuti') {
                    this.$store.dispatch('presensi/storeCuti', this.form);
                } else { 
                    this.$store.dispatch('presensi/updateCuti', [this.dataCuti.id,this.form]);
                }
            }

            // } else {
            //     this.$store.dispatch('presensi/updateIzin', [this.form, this.editData.id]);
            // }
        },

        batal () {
            this.$emit('tutup');
        }
    },

    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
        ...mapGetters('presensi', {
            itemData: 'userS',
            itemDataStat: 'dataStatS',
        })
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