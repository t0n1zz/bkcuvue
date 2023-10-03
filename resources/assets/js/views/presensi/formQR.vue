<template>
    <div>
        <form @submit.prevent="storeQR()" data-vv-scope="formAbsen">
            <div class="col-md-12">
                <div class="form-group">
                    <!-- cu -->
                    <div v-if="currentUser.id_cu === 0 && mode == 'create'">
                        <div class="form-group">

                            <!-- title -->
                            <h5>
                                CU:
                            </h5>

                            <!-- select -->
                            <select class="form-control" name="tipe_cu" v-model="tipe_cu" data-width="100%"
                                @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU"
                                :disabled="modelCU.length === 0">
                                <option value=0>PUSKOPCUINA</option>
                                <option value=1>CU PRIMER</option>
                            </select>

                        </div>
                        <div v-if="tipe_cu == 1" class="form-group">

                            <!-- title -->
                            <h5>
                                CU:
                            </h5>

                            <!-- select -->
                            <select class="form-control" name="cu_id" v-model="form.id_cu" data-width="100%"
                                @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU"
                                :disabled="modelCU.length === 0">
                                <option disabled value="0">
                                    <span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
                                    <span v-else>Silahkan pilih CU</span>
                                </option>
                                <option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{ cu.name }}</option>
                            </select>

                        </div>
                    </div>

                    <div v-if="mode == 'edit'">
                        <h5>
                            KEGIATAN: {{ this.form.kegiatan_name.toUpperCase() }}
                        </h5>

                    </div>

                    <!-- tp -->
                    <!-- <div class="col-md-6"> -->
                    <div v-if="tipe_cu == 1" class="form-group">

                        <!-- title -->
                        <h6>
                            TP/KP:
                        </h6>

                        <!-- select -->
                        <select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%"
                            v-validate="'required'" data-vv-as="TP/KP" @change="changeTp($event.target.value)">
                            <option disabled value="">
                                <span>Silahkan pilih TP/KP</span>
                            </option>
                            <option v-for="(tp, index) in modelTp" :value="tp.id" :key="index">{{ tp.name }}</option>
                        </select>
                    </div>
                    <!-- </div> -->
                    <div v-if="mode == 'create'">
                        <h5>Jenis :</h5>
                        <div class="text-center">
                            <select class="form-control" data-width="100%" v-model="value" @change="check()">
                                <option disabled="true" value="">PILIH JENIS ABSEN</option>
                                <option value="KANTOR">KANTOR</option>
                                <option value="DIKLAT">DIKLAT</option>
                                <option value="PERTEMUAN">PERTEMUAN</option>
                            </select>
                        </div>
                    </div>

                    <div v-if="value == 'DIKLAT'">
                        <h5>Diklat :</h5>
                        <div class="text-center">
                            <select class="form-control" data-width="100%" v-model="form.id_kegiatan">
                                <option disabled="true" value="">PILIH DIKLAT</option>
                                <option v-for="(kegiatan, index) in kegiatan" :value="kegiatan.id" :key="index">{{
                                    kegiatan.name }} || {{ $options.filters.date(kegiatan.mulai) }}</option>
                            </select>
                        </div>
                    </div>

                    <div v-if="value == 'PERTEMUAN'">
                        <h5>PETEMUAN :</h5>
                        <div class="text-center">
                            <select class="form-control" data-width="100%" v-model="form.id_kegiatan" @change="getName()">
                                <option disabled="true" value="">PILIH PERTEMUAN</option>
                                <option v-for="(kegiatan, index) in kegiatan" :value="kegiatan.id" :key="index">{{
                                    kegiatan.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h5>JAM MASUK :</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <select class="form-control" data-width="100%" v-model="jam_masuk">
                                    <option v-for="(jam, index) in jam" :value="jam" :key="index">{{ jam }}</option>
                                </select>
                            </div>
                            <!-- <span style="font-weight: bold;">:</span> -->
                            <div class="col-md-3">
                                <select class="form-control" data-width="100%" v-model="menit_masuk">
                                    <option v-for="(menit, index) in menit" :value="menit" :key="index">{{ menit }}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div v-if="value != 'KANTOR' || (mode == 'edit' && value!='KANTOR')" style="margin-top: 10px;">
                        <label>
                            <input type="checkbox" v-model="isChecked" @change="handle"/>
                            Gunakan Presensi Pulang?
                        </label>
                    </div>

                    <div v-if="isChecked">
                        <h5>JAM PULANG :</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <select class="form-control" data-width="100%" v-model="jam_pulang">
                                    <option v-for="(jam, index) in jam" :value="jam" :key="index">{{ jam }}</option>
                                </select>
                            </div>
                            <!-- <span style="font-weight: bold;">:</span> -->
                            <div class="col-md-3">
                                <select class="form-control" data-width="100%" v-model="menit_pulang">
                                    <option v-for="(menit, index) in menit" :value="menit" :key="index">{{ menit }}</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h5>Jenis QR :</h5>
                        <div class="text-center">
                            <select class="form-control" data-width="100%" v-model="form.jenis">
                                <option disabled="true" value="">PILIH JENIS QR</option>
                                <option value="TETAP">TETAP</option>
                                <option value="BERUBAH PERHARI">BERUBAH PERHARI</option>
                                <option value="BERUBAH SETELAH SCAN">BERUBAH SETELAH SCAN</option>
                            </select>
                        </div>
                    </div>

                    <!-- <div v-if="form.jenis == 'BERUBAH DALAM RENTANG WAKTU TERTENTU'">
                        <h5>Pergantian Setiap :</h5>
                        <div class="d-none d-md-block">
                                <input type="text" name="" id="" data-width="100%" v-model="form.lama_waktu"> <span>Jam</span>
                        </div>
                     </div> -->
                </div>
                <div class="text-center">
                    <button class="btn btn-light" @click.prevent="tutup">
                        <i class="icon-cross"></i>Tutup</button>

                    <button type="submit" class="btn btn-primary">
                        <i class="icon-floppy-disk"></i>Simpan</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            value: 'KANTOR',
            options: ['Kegiatan', 'Masuk Kantor'],
            tp_id: '',
            valueJenis: 'TETAP',
            tipe_cu: 0,
            jam_masuk: '00',
            isChecked:false,
            menit_masuk: '00',
            jam_pulang: '00',
            menit_pulang: '00',
            jenis: '',
            jam: [
                '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
            ],
            menit: [
                '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
            ]
        }
    },

    props: {
        qr: [],
        mode: '',
    },

    created () {

        if (this.currentUser.id_cu != 0) {
            this.fetchTp(this.currentUser.id_cu);
        }


        if (this.mode == 'edit') {
            this.$store.dispatch('presensi/edit', ['qr', this.qr]);
            if (this.qr) {
                if (this.qr.id_cu == 0) {
                    this.tipe_cu = 0
                } else {
                    this.tipe_cu = 1
                }
            }
        } else { 
            this.$store.dispatch('presensi/createFormQR');
        }
    },

    watch: {
        dataStat(value){
            if (value == 'success') { 
                if (this.form.id_kegiatan != 0) {
                    this.value = ''
                }
                if (this.form.jam_pulang != null) {
                    this.isChecked = true
                    this.jam_pulang = this.form.jam_pulang.slice(0, 2)
                    this.menit_pulang = this.form.jam_pulang.slice(3, 5)

                } else {
                    this.form.isPulang = false
                }
                this.jam_masuk = this.form.jam_masuk.slice(0, 2)
                this.menit_masuk = this.form.jam_masuk.slice(3, 5)
                this.tipe_cu = this.form.id_cu
            }
        }
    },

    methods: {
        handle () { 
            this.isChecked
        },

        tutup () {
            this.$emit('tutup');
        },

        check () {
            if (this.value == 'DIKLAT' || this.value == 'PERTEMUAN') {
                this.$store.dispatch('presensi/getKegiatan', [this.cu_id, this.value]);
            }
        },

        changeCu (id) {
            let cu;
            if (id != 0) {
                cu = _.find(this.modelCU, function (o) {
                    return o.id == id;
                });
            }
            this.fetchTp(cu.id);
        },
        changeTp (id) {
            let tp;
            if (id != 0) {
                this.id_cu = this.currentUser.id_cu
                tp = _.find(this.modelTp, function (o) {
                    return o.id == id;
                });
            }
        },

        fetchTp (value) {
            this.$store.dispatch('tp/getCu', value);
        },

        storeQR () {
            let wktmasuk = this.jam_masuk.concat(':', this.menit_masuk)
            let wktpulang = this.jam_pulang.concat(':', this.menit_pulang)
            let a = this.kegiatan.find(item => item.id === this.form.id_kegiatan);

            if (this.value == 'KANTOR') {
                this.form.id_kegiatan = 0
                this.form.kegiatan_name = 'Kantor'
            } else {
                if (this.mode == 'edit') {
    
                } else { 
                    this.form.kegiatan_name = a.name
                }
            }

            if (this.currentUser.id_cu != 0) {
                this.form.id_cu = this.currentUser.id_cu
            }


            if (this.tipe_cu == 0) {
                this.form.id_cu = 0
            }
            this.form.jam_masuk = wktmasuk
            this.form.jam_pulang = wktpulang
            this.form.status = 'tidak aktif'
            this.form.kode_qr = Date.now()
            if (!this.isChecked) {
                this.form.jam_pulang = null
            }
            if (this.mode == 'create') {
                this.form.isPulang = this.isChecked
                this.$store.dispatch('presensi/storeQR', this.form);
            } else {
                this.$store.dispatch('presensi/updateQR', [this.form.id, this.form]);
            }

        }
    },

    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
        ...mapGetters('cu', {
            modelCU: 'headerDataS',
            modelCUStat: 'headerDataStatS',
            updateMessage: 'update',
            updateStat: 'updateStat'
        }),
        ...mapGetters('tp', {
            modelTp: 'dataS',
            modelTpStat: 'dataStatS',
        }),

        ...mapGetters('presensi', {
            kegiatan: 'list_kegiatan',
            form: 'qrForm',
            dataStat:'dataStat',
            pesan: 'message',
            qrstat: 'QRStat'
        })
    }
}
</script>