<template>
    <div class="col-md-12">
        <h5 v-if="kelas=='semua' && editFlag==false">Pilih Aktivis :</h5>
            <div v-if="kelas=='semua' && editFlag == false">
                <select class="form-control" v-model="aktiv" data-width="100%" @change="addAktivis">
                    <option disabled="true" value="">PILIH AKTIVIS</option>
                    <option v-for="(user, index) in itemData" :value="{ id: user.id, id_cu: user.id_cu, id_aktivis: user.id_aktivis }"
                        :key="index">{{ user.name }}</option>
                </select>
            </div>
        <h1 v-if="editFlag">{{ editData.aktivis.name }}</h1>
        <div style="margin-top: 10px;">
            <h5 v-if="tipe == 'kegiatan'">Tanggal</h5>
            <h5 v-else>Tanggal Mulai:</h5>
            <date-picker @dateSelected="form.tanggal_mulai = $event" :defaultDate="form.tanggal_mulai"></date-picker>
        </div>

        <div  v-if="tipe == 'izin'" style="margin-top: 10px;">
            <h5>Tanggal Masuk:</h5>
            <date-picker @dateSelected="form.tanggal_selesai = $event" :defaultDate="form.tanggal_selesai"></date-picker>
        </div>

        <h5 v-if="tipe=='kegiatan'">Nama Kegiatan :</h5>
        <h5 v-else>Alasan :</h5>
        <div class="">
            <textarea name="" v-model="form.alasan" rows="5"></textarea>
        </div>

        <div class="text-center" style="margin-top: 10px;">
            <button class="btn btn-warning" @click.prevent="batal">
                <i class="icon-x"></i>Batal</button>

            <button type="submit" value="submit" class="btn btn-primary" @click.prevent="storeKuliah" :disabled="(!aktiv && !editData && kelas!='pribadi') || !form.alasan">
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
            tabName: 'aktif',
            kuliah: [],
            aktiv: '',
            flag: false,
            tanggal: '',
            tanggal2: '',
            atribut: []
        }
    },

     props: {
        tipe: {
            default: 'izin'
         },
         kelas: {
            default: 'pribadi'
         },
         editData: {

         },
         editFlag: {
            default: false
         }
    },

    created () {
        if (this.editFlag) {
            this.form.tanggal_mulai = this.editData.tanggal_mulai
            this.form.tanggal_selesai = this.editData.tanggal_selesai
            this.form.alasan = this.editData.alasan
        } else { 
            this.editData = ''
            this.form.alasan = ''
            this.form.tanggal_mulai = ''
            this.form.tanggal_selesai = ''
        }
    },
    methods: {
        addAktivis () {
            this.flag = true
        },

        storeKuliah () {
            if (this.kelas == 'pribadi') {
                this.form.id_cu = this.currentUser.id_cu
                this.form.id_aktivis = this.currentUser.id_aktivis
                this.form.id_user = this.currentUser.id
                this.form.jenis = this.tipe
            } else {
                this.form.id_cu = this.aktiv.id_cu
                this.form.id_aktivis = this.aktiv.id_aktivis
                this.form.id_user = this.aktiv.id
                this.form.jenis = this.tipe
            }
            if (!this.editFlag) {
                this.$store.dispatch('presensi/storeIzin', this.form);
            } else { 
                this.$store.dispatch('presensi/updateIzin', [this.form, this.editData.id]);
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
            form: 'formIzin'
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