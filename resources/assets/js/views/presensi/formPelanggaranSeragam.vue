<template>
    <div class="col-md-12">
        <h5 v-if="tipe == 'seragam'">Pilih Aktivis :</h5>
        <div v-if="tipe == 'seragam'">
            <select class="form-control" v-model="aktiv" data-width="100%">
                <option disabled="true" value="">PILIH AKTIVIS</option>
                <option v-for="(user, index) in itemData"
                    :value="{ id: user.id, name: user.name, gambar: user.gambar, id_cu: user.id_cu, id_aktivis: user.id_aktivis }"
                    :key="index">{{ user.name }}</option>
            </select>
        </div>
        <div v-if="tipe == 'seragam'" style="margin-top: 10px;">
            <h5>Tanggal :</h5>
            <date-picker @dateSelected="tanggal = $event" :defaultDate="tanggal"></date-picker>
        </div>

        <div v-if="tipe == 'seragam'" class="text-center" style="margin-top: 10px;">
            <img :src="'/images/' + 'aktivis' + '/' + aktiv.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm"
                v-if="aktiv.gambar">
            <img :src="'/images/no_image_man.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
            <h2>{{ aktiv.name }}</h2>
        </div>

        <h1 v-if="tipe == 'seragamEdit'">{{ form.name }}</h1>
        <div class="col-md-9" style="margin-top: 10px;">
            <div class="form-group">

                <!-- title -->
                <h5>Pilih Atribut Yang Dilanggar: </h5>

                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" :value="{ id: 1, name: 'PAKAIAN' }" v-model="atribut">
                        PAKAIAN
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" :value="{ id: 2, name: 'SEPATU' }" v-model="atribut">
                        SEPATU
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" :value="{ id: 3, name: 'NAME TAG' }" v-model="atribut">
                        NAME TAG
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" :value="{ id: 4, name: 'IKAT PINGGANG' }"
                            v-model="atribut">
                        IKAT PINGGANG
                    </label>
                </div>
            </div>
        </div>

        <div class="text-center" style="margin-top: 10px;">
            <button class="btn btn-warning" @click.prevent="batal">
                <i class="icon-x"></i>Batal</button>

            <button :disabled="atribut.length <= 0 || (!aktiv && form.length <= 0)" type="submit" value="submit"
                class="btn btn-primary" @click.prevent="storeKuliah">
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
    props: ['id', 'tipe'],
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
            tanggal: '',
            atribut: []
        }
    },
    created () {
        if (this.tipe == 'seragamEdit') {
            this.$store.dispatch('presensi/edit', ['seragam', this.id]);
        } else {
            this.$store.dispatch('presensi/create', 'seragam');
        }
    },

    watch: {
        itemDataStat (value) {
            if (this.tipe == 'seragamEdit') {
                let a = ''
                this.atribut = []
                for (let index = 0; index < this.form.seragam.length; index++) {
                    a = {
                        id: this.form.seragam[index].id,
                        name: this.form.seragam[index].name,
                    }
                    this.atribut.push(a)
                }
            }
        }
    },
    methods: {
        storeKuliah () {
            this.form.id_user = this.aktiv.id
            this.form.id_aktivis = this.aktiv.id_aktivis
            this.form.id_cu = this.aktiv.id_cu
            if (this.id) {
                this.form.id_absen = this.id
            }
            this.form.seragamName = []
            if (this.form.seragam_kerja) {
                this.form.id_seragam_kerja = this.form.seragam_kerja.id
            } else {
                this.form.id_seragam_kerja = null
            }

            this.form.seragam = []
            for (let index = 0; index < this.atribut.length; index++) {
                this.form.seragam.push(this.atribut[index].id)
                if (index == this.atribut.length - 1) {
                    this.form.seragamName = this.form.seragamName + this.atribut[index].name
                } else {
                    this.form.seragamName = this.form.seragamName + this.atribut[index].name + "," + " "
                }

            }
            this.$store.dispatch('presensi/storePelanggaranSeragam', this.form);
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
            itemDataStat: 'dataStat',
            form: 'form'
        })
    }
}
</script>