<template>
    <div class="col-md-12">
        <div>
            <h5>Jenis Cuti :</h5>
            <select class="form-control" v-model="form.jenis" data-width="100%" @change="addAktivis">
                <option disabled="true" value="">PILIH JENIS CUTI</option>
                <option value="Cuti Tahunan">Cuti Tahunan</option>
                <option value="Cuti Menikah">Cuti Menikah</option>
                <option value="Cuti Melahirkan">Cuti Melahirkan</option>
                <option value="Cuti Karena Alasan Penting">Cuti Karena Alasan Penting</option>
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

        <div v-if="currentUser.can['verifikasi_personalia'] && page != 'pribadi'" style="margin-top: 10px;">
            <h5>Tanggal Realisasi Mulai:</h5>
            <date-picker @dateSelected="form.realisasi_mulai = $event" :defaultDate="form.realisasi_mulai"></date-picker>
        </div>

        <h5>Alasan :</h5>
        <div class="">
            <textarea name="" v-model="form.alasan" rows="5"></textarea>
        </div>
        <div v-if="flagCheck">
            <div style="color: red;">Cuti Minimal diajukan 30 Hari Sebelum Tanggal Mulai Cuti</div>
        </div>
        <div v-if="flagCheck2">
            <div style="color: red;">Tanggal Masuk Harus Lebih Besar Dari Tanggal Mulai</div>
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


export default {
    components: {
        pageHeader,
        message,
        selectData,
        datePicker,
    },
    data () {
        return {
            tabName: 'aktif',
            kuliah: [],
            aktiv: '',
            flag: false,
            tanggal: '',
            tanggal2: '',
            atribut: [],
            flagCheck: false,
            flagCheck2: false,
            created_at: '',
            isSaturday : false
        }
    },

    props: ['dataCuti', 'tipe', 'page'],

    created () {
        if (this.dataCuti != '' && this.tipe == 'cutiEdit') {
            this.$store.dispatch('presensi/edit', ['cuti', this.dataCuti]);
        } else { 
            this.$store.dispatch('presensi/create','cuti');
        }
    },

    methods: {
        addAktivis () {
            this.flag = true
        },

        storeKuliah () {

            const now = new Date();

            // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
            const dayOfWeek = now.getDay();

            // Check if today is Saturday (dayOfWeek is 6)
            if (dayOfWeek === 6) {
                this.isSaturday = true;
            }

            this.form.id_cu = this.currentUser.id_cu
            this.form.id_aktivis = this.currentUser.id_aktivis
            this.form.id_user = this.currentUser.id

            const start = new Date(this.form.tanggal_mulai);
            const end = new Date(this.form.tanggal_selesai);
            const timeDifference = end.getTime() - start.getTime();
            let cekUpdate = '';
            if (this.form.id && this.tipe== 'cutiEdit') { 
                cekUpdate = new Date(this.form.tanggal_mulai).getTime() - new Date(this.form.created_at).getTime()
            }
            const daysDifCekUpdate = Math.ceil(cekUpdate / (1000 * 3600 * 24))

            const today = new Date();
            const currentDate = today.toISOString().split('T')[0];
            const newToday = new Date(currentDate)
            const timeDifferenceCheck = start.getTime() - newToday.getTime();
            const daysDifferenceCheck = Math.ceil(timeDifferenceCheck / (1000 * 3600 * 24));

            console.log(this.dataCuti)

            if ((daysDifferenceCheck < 30 && this.tipe != 'cutiEdit') || (daysDifCekUpdate <30 && this.dataCuti)) {
                this.flagCheck = true
                console.log('a')
            } else {
                this.flagCheck = false
            }

            if (this.form.tanggal_selesai < this.form.tanggal_mulai) {
                this.flagCheck2 = true
            } else {
                this.flagCheck2 = false
            }

            if ((!this.flagCheck && !this.flagCheck2) || (this.tipe == 'cutiEdit' && !this.flagCheck && !this.flagCheck2)) {
                if (this.tipe == 'cuti') {
                    this.$store.dispatch('presensi/storeCuti', this.form);
                } else {
                    this.$store.dispatch('presensi/updateCuti', [this.dataCuti, this.form]);
                }
            }
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
            form : 'form'
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