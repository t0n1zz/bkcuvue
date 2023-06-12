<template>
    <div class="col-md-12">
        <h5>Pilih Aktivis :</h5>
        <div>
            <select class="form-control" v-model="aktiv" data-width="100%" @change="addAktivis">
                <option disabled="true" value="">PILIH AKTIVIS</option>
                <option v-for="(user, index) in itemData" :value="{ id: user.id, name: user.name, gambar: user.gambar, id_cu:user.id_cu,id_aktivis:user.id_aktivis }"
                    :key="index">{{ user.name }}</option>
            </select>
        </div>
        <div style="margin-top: 10px;">
            <h5>Tanggal :</h5>
            <date-picker @dateSelected="tanggal = $event" :defaultDate="tanggal"></date-picker>
        </div>

        <div v-if="flag == true" class="text-center" style="margin-top: 10px;">
            <img :src="'/images/' + 'aktivis' + '/' + aktiv.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm"
                v-if="aktiv.gambar">
            <img :src="'/images/no_image_man.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
            <h2>{{ aktiv.name }}</h2>
        </div>

        <div class="text-center" style="margin-top: 10px;">
            <button class="btn btn-warning" @click.prevent="batal">
                <i class="icon-x"></i>Batal</button>

            <button :disabled="!this.aktiv" type="submit" value="submit" class="btn btn-primary" @click.prevent="storeKuliah">
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
            atribut:[]
        }
    },

    props: {
        tipe: '',
    },

    created () {
        
    },

    methods: {
        addAktivis () {
            this.flag = true
        },

        storeKuliah () {
            this.$store.dispatch('presensi/storeKuliah', [this.aktiv.id_cu, this.aktiv.id_aktivis,this.aktiv.id, this.tanggal,this.tipe]);
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