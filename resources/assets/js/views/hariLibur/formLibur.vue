<template>
    <div class="col-md-12">
        <h5>Nama Hari Libur :</h5>
        <div>
            <input type="text" v-model="form.name" class="max-width">
        </div>
        <div style="margin-top: 10px;">
            <h5>Tanggal :</h5>
            <date-picker @dateSelected="form.tanggal = $event" :defaultDate="form.tanggal" v-model="form.tanggal"></date-picker>
        </div>

        <div class="text-center" style="margin-top: 10px;">
            <button class="btn btn-warning" @click.prevent="batal">
                <i class="icon-x"></i>Batal</button>

            <button type="submit" value="submit" class="btn btn-primary" @click.prevent="storeKuliah">
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
            title: 'Absen',
            kelas: 'absen',
            titleDesc: 'Mengelola QR Absen',
            titleIcon: 'icon-collaboration',
            selectCuPath: 'kelolaqr',
            tabName: 'aktif',
            kuliah: [],
            aktiv: '',
            flag: false,
            tanggal: '',
            atribut: [],
            form: {
                name: '',
                tanggal:''
            }
        }

    },

    props: ['data','mode'],

    created () {
        if (this.mode != 'create') {
            this.form.name = this.data.name
            this.form.tanggal = this.data.tanggal
        }
    },

    methods: {
        storeKuliah () {
            if (this.mode == 'create') {
                this.$store.dispatch('hariLibur/store', this.form);
            } else { 
                this.$store.dispatch('hariLibur/update',[this.data.id, this.form]);
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
        })
    }
}
</script>

<style>
.max-width {
  width: 100%; /* Ensures the input takes up the available width within its container */
}
</style>