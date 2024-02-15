<template>
    <div>
        <!-- page-header -->
        <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title"
            :level2Route="kelas" @level2Back="back()"></page-header>

        <!-- content -->
        <div class="page-content pt-0">
            <div class="content-wrapper">
                <div class="content">
                    <message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'"
                        :errorItem="errors.items">
                    </message>
                    <!-- main panel -->
                    <form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
                        <!-- informasi umum -->
                        <div class="card">
                            <div class="card-header bg-white">
                                <h5 class="card-title">1. Data Suami/Istri/Anak</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    <!-- name -->
                                    <div class="col-md-6">
                                        <div class="form-group" :class="{ 'has-error': errors.has('form.jenis') }">

                                            <!-- title -->
                                            <h5 :class="{ 'text-danger': errors.has('form.jenis') }">
                                                <i class="icon-cross2" v-if="errors.has('form.jenis')"></i>
                                                Jenis Tunjangan: <wajib-badge></wajib-badge>
                                            </h5>

                                            <select name="jenis" class="form-control" data-width="100%" v-model="form.jenis"
                                                v-validate="'required'" data-vv-as="Jenis Tunjangan">
                                                <option disabled="true" value="">PILIH JENIS TUNJANGAN</option>
                                                <option value="Suami">Suami</option>
                                                <option value="Istri">Istri</option>
                                                <option value="Anak">Anak</option>
                                            </select>

                                            <!-- error message -->
                                            <small class="text-muted text-danger" v-if="errors.has('form.jenis')">
                                                <i class="icon-arrow-small-right"></i> {{ errors.first('form.jenis') }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                    </div>

                                    <!-- name -->
                                    <div class="col-md-6">
                                        <div class="form-group" :class="{ 'has-error': errors.has('form.names') }">

                                            <!-- title -->
                                            <h5 :class="{ 'text-danger': errors.has('form.name') }">
                                                <i class="icon-cross2" v-if="errors.has('form.name')"></i>
                                                Nama Lengkap {{ form.jenis }}: <wajib-badge></wajib-badge>
                                            </h5>
                                            <input v-model="form.name" type="text" name="name" class="form-control"
                                                placeholder="Silahkan masukkan nama" v-validate="'required'"
                                                data-vv-as="Nama Lengkap">
                                            <!-- error message -->
                                            <small class="text-muted text-danger" v-if="errors.has('form.name')">
                                                <i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-4">
                                        <div class="form-group" :class="{ 'has-error': errors.has('form.tempat_lahir') }">

                                            <!-- title -->
                                            <h5 :class="{ 'text-danger': errors.has('form.tempat_lahir') }">
                                                <i class="icon-cross2" v-if="errors.has('form.tempat_lahir')"></i>
                                                Tempat Lahir: <wajib-badge></wajib-badge>
                                            </h5>
                                            <input v-model="form.tempat_lahir" type="text" name="tempat_lahir"
                                                class="form-control" placeholder="Silahkan masukkan tempat lahir"
                                                v-validate="'required'" data-vv-as="Tempat Lahir">
                                            <!-- error message -->
                                            <small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
                                                <i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir')
                                                }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group" :class="{ 'has-error': errors.has('form.tanggal_lahir') }">

                                            <!-- title -->
                                            <h5>Tanggal Lahir: <wajib-badge></wajib-badge></h5>
                                            <!-- input -->
                                            <date-picker @dateSelected="form.tanggal_lahir = $event"
                                                :defaultDate="form.tanggal_lahir"></date-picker>
                                            <input v-model="form.tanggal_lahir" name="tanggal_lahir" v-show="false"
                                                v-validate="'required'" data-vv-as="Tgl. Lahir" />
                                            <!-- error message -->
                                            <small class="text-muted text-danger" v-if="errors.has('form.tanggal_lahir')">
                                                <i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_lahir')
                                                }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group" :class="{ 'has-error': errors.has('form.nik') }">

                                            <!-- title -->
                                            <h5 :class="{ 'text-danger': errors.has('form.nik') }">
                                                <i class="icon-cross2" v-if="errors.has('form.nik')"></i>
                                                NIK: <wajib-badge></wajib-badge>
                                            </h5>
                                            <input v-model="form.nik" name="nik" class="form-control" maxlength="16"
                                                placeholder="Silahkan masukkan nik" v-validate="'required'"
                                                data-vv-as="NIK">
                                            <!-- error message -->
                                            <small class="text-muted text-danger" v-if="errors.has('form.nik')">
                                                <i class="icon-arrow-small-right"></i> {{ errors.first('form.nik') }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group" :class="{ 'has-error': errors.has('form.alamat') }">

                                            <!-- title -->
                                            <h5 :class="{ 'text-danger': errors.has('form.alamat') }">
                                                <i class="icon-cross2" v-if="errors.has('form.alamat')"></i>
                                                Alamat: <wajib-badge></wajib-badge>
                                            </h5>
                                            <input v-model="form.alamat" type="text" name="alamat" class="form-control"
                                                placeholder="Silahkan masukkan nama diklat" v-validate="'required'"
                                                data-vv-as="Alamat">
                                            <!-- error message -->
                                            <small class="text-muted text-danger" v-if="errors.has('form.alamat')">
                                                <i class="icon-arrow-small-right"></i> {{ errors.first('form.alamat') }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="row" v-if="form.jenis == 'Istri' || form.jenis == 'Suami'">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                KTP:
                                            </h5>
                                            <app-image-upload :image_loc="'/images/tunjangan/'" :image_temp="form.ktp"
                                                v-model="form.ktp"></app-image-upload>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5 v-if="form.jenis == 'Istri' || form.jenis == 'Suami'">
                                                Surat Perkawinan:
                                            </h5>
                                            <h5 v-else-if="form.jenis == 'Anak'">
                                                Surat Kelahiran:
                                            </h5>
                                            <app-image-upload :image_loc="'/images/tunjangan/'" :image_temp="form.surat"
                                                v-model="form.surat"></app-image-upload>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5 v-if="form.jenis == 'Istri' || form.jenis == 'Suami'">
                                                Akta Perkawinan:
                                            </h5>
                                            <h5 v-else-if="form.jenis == 'Anak'">
                                                Akta Kelahiran:
                                            </h5>
                                            <!-- upload button -->
                                            <app-image-upload :image_loc="'/images/tunjangan/'" :image_temp="form.akta"
                                                v-model="form.akta"></app-image-upload>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tempat -->
                        <div v-if="form.jenis && form.jenis == 'Suami' || form.jenis == 'Istri'" class="card">
                            <div class="card-header bg-white">
                                <h5 class="card-title">2. Tempat </h5>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    <!-- tipe tempat -->
                                    <div class="col-md-12">
                                        <h5>Tempat Menikah:</h5>
                                        <div class="form-group">

                                            <input v-model="form.tempat_menikah" type="text" name="name"
                                                class="form-control" placeholder="Silahkan masukkan nama tempat">
                                        </div>
                                    </div>

                                    <!-- Provinsi -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Provinsi:</h5>


                                            <!-- select -->
                                            <select class="form-control" name="id_provinces" data-width="100%"
                                                v-model="form.id_provinces" data-vv-as="Provinsi"
                                                :disabled="modelProvinces.length === 0"
                                                @change="changeProvinces($event.target.value)">
                                                <option disabled value="">
                                                    <span v-if="modelProvincesStat === 'loading'">Mohon tunggu...</span>
                                                    <span v-else>Silahkan pilih provinsi</span>
                                                </option>
                                                <option v-for="(provinces, index) in modelProvinces" :key="index"
                                                    :value="provinces.id">{{ provinces.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Regencies -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Kota/Kabupaten:</h5>
                                            <!-- select -->
                                            <select class="form-control" name="id_regencies" data-width="100%"
                                                v-model="form.id_regencies" data-vv-as="Provinsi"
                                                :disabled="modelRegencies.length === 0"
                                                @change="changeRegencies($event.target.value)">
                                                <option disabled value="">
                                                    <span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
                                                    <span v-else>Silahkan pilih provinsi</span>
                                                </option>
                                                <option v-for="(regencies, index) in modelRegencies" :key="index"
                                                    :value="regencies.id">{{ regencies.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Regencies -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Kecamatan:</h5>
                                            <!-- select -->
                                            <select class="form-control" name="id_districts" data-width="100%"
                                                v-model="form.id_districts" data-vv-as="Provinsi"
                                                :disabled="modelDistricts.length === 0"
                                                @change="changeDistricts($event.target.value)">
                                                <option disabled value="">
                                                    <span v-if="modelDistrictsStat === 'loading'">Mohon tunggu...</span>
                                                    <span v-else>Silahkan pilih provinsi</span>
                                                </option>
                                                <option v-for="(districts, index) in modelDistricts" :key="index"
                                                    :value="districts.id">{{ districts.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Regencies -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Desa/Kelurahan:</h5>
                                            <!-- select -->
                                            <select class="form-control" name="id_districts" data-width="100%"
                                                v-model="form.id_villages" data-vv-as="Desa"
                                                :disabled="modelVillages.length === 0 && !form.id_villages">
                                                <option disabled value="">
                                                    <span v-if="modelVillagesStat === 'loading'">Mohon tunggu...</span>
                                                    <span v-else>Silahkan pilih desa/kelurahan</span>
                                                </option>
                                                <option v-for="(villages, index) in modelVillages" :key="index"
                                                    :value="villages.id">{{ villages.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- mulai -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Tgl. Menikah:
                                            </h5>

                                            <!-- input -->
                                            <date-picker @dateSelected="form.tanggal_menikah = $event"
                                                :defaultDate="form.tanggal_menikah"></date-picker>
                                            <input name="menikah" v-show="false" v-validate="'required'"
                                                v-model="form.tanggal_menikah" data-vv-as="Tgl. mulai" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- form button -->
                        <div class="card card-body">
                            <form-button :cancelState="cancelState" :formValidation="'form'"
                                @cancelClick="back"></form-button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <!-- modal -->
        <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize"
            :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
            @failOk="modalTutup" @backgroundClick="modalBackgroundClick">

        </app-modal>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';
import pageHeader from "../../components/pageHeader.vue";
import { toMulipartedForm } from '../../helpers/form';
import appImageUpload from '../../components/ImageUpload.vue';
import appModal from '../../components/modal';
import message from "../../components/message.vue";
import formButton from "../../components/formButton.vue";
import formInfo from "../../components/formInfo.vue";
import DatePicker from "../../components/datePicker.vue";
import wajibBadge from "../../components/wajibBadge.vue";

export default {
    components: {
        pageHeader,
        appModal,
        appImageUpload,
        message,
        formButton,
        formInfo,
        DatePicker,
        wajibBadge
    },
    data () {
        return {
            title: 'Tambah Pengajuan Tunjangan Keluarga',
            titleDesc: 'Menambah Pengajuan Tunjangan Keluarga',
            titleIcon: 'icon-plus3',
            level: 2,
            level2Title: 'Tunjangan Keluarga',
            kelas: 'tunjangan',
            sasaran: [],
            tempatData: '',
            jenis: 'Suami',
            id_provinces: '',
            id_districts: '',
            id_regencies: '',
            state: '',
            modalShow: false,
            modalState: '',
            modalTitle: '',
            modalContent: '',
            modalButton: '',
            modalSize: '',
            modalColor: '',
            cancelState: 'methods',
            submited: false
        }
    },

    created () {
        if (this.$route.meta.mode == 'edit') {
            this.$store.dispatch('tunjangan/edit', this.$route.params.id);
            this.id_provinces = this.form.id_provinces
            this.id_regencies = this.form.id_regencies
            this.id_districts = this.form.id_districts
        } else {
            this.$store.dispatch('tunjangan/create', this.currentUser.id_cu)
        }
        
        this.$store.dispatch('provinces/get');
    },

    watch: {
        modelProvincesStat (value) {
            if (value == 'success') {
                if (this.$route.meta.mode == 'edit') {

                } else {
                    this.changeProvinces(this.id_provinces);
                }
            }
        },

        modelRegenciesStat (value) {
            if (value == 'success') {
                if (this.$route.meta.mode == 'edit') {
                    this.changeRegencies(this.form.id_regencies);
                } else {
                    this.changeRegencies(this.id_regencies);
                }
            }
        },

        modelDistrictsStat (value) {
            if (value == 'success') {
                if (this.$route.meta.mode == 'edit') {
                    this.changeDistricts(this.form.id_districts);
                } else {
                    this.changeDistricts(this.id_districts);
                }
            }
        },

        dataStat (value) {
            if (value == 'success') {
                if (this.$route.meta.mode == 'edit') {
                    this.changeProvinces(this.form.id_provinces);
                }
            }
        },

        updateStat (value) {
            this.modalShow = true;
            this.modalState = value;
            this.modalColor = '';

            if (value === "success") {
                this.modalTitle = this.updateResponse.message;
            } else {
                this.modalTitle = 'Oops terjadi kesalahan :(';
                this.modalContent = this.updateResponse;
            }
        }
    },

    methods: {
        changeProvinces (id) {
            this.$store.dispatch('regencies/getProvinces', id);
        },
        changeRegencies (id) {
            this.$store.dispatch('districts/getRegencies', id);
        },
        changeDistricts (id) {
            this.$store.dispatch('villages/getDistricts', id);
        },

        close () {

        },

        back () {
            this.$router.go(-1);
        },

        cancelState () {

        },

        save () {
            this.form.id_user = this.currentUser.id
            this.form.id_aktivis = this.currentUser.id_aktivis
            this.form.id_cu = this.currentUser.id_cu
            const formData = toMulipartedForm(this.form, this.$route.meta.mode);
            this.$validator.validateAll('form').then((result) => {
                if (result) {
                    if (this.$route.meta.mode == 'edit') {
                        this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
                    } else {
                        this.$store.dispatch(this.kelas + '/store', formData);
                    }
                    this.submited = false;
                } else {
                    window.scrollTo(0, 0);
                    this.submited = true;
                }
            });
        },

        modalTutup () {
            this.modalShow = false;
            if (this.modalState == 'success') {
                this.$router.push({ name: 'tunjanganIndex', params: { id_cu: this.currentUser.id_cu, jenis: 'semua' } });
            }
        },

        modalConfirmOk () {
            if (this.state == 'hapus') {
                if (this.tabName == 'seragam') {
                    this.$store.dispatch('tunjangan/destroy', [this.selectedItem.seragam_kerja.id, this.tabName]);
                }
            } else {

            }
        },

        modalBackgroundClick () {
            if (this.modalState === 'success') {
                this.modalTutup;
            } else if (this.modalState === 'loading') {
                // do nothing
            } else {
                this.modalShow = false
            }
        },
    },

    computed: {
        ...mapGetters('provinces', {
            modelProvinces: 'dataS',
            modelProvincesStat: 'dataStatS'
        }),
        ...mapGetters('regencies', {
            modelRegencies: 'dataS',
            modelRegenciesStat: 'dataStatS'
        }),
        ...mapGetters('districts', {
            modelDistricts: 'dataS',
            modelDistrictsStat: 'dataStatS'
        }),
        ...mapGetters('villages', {
            modelVillages: 'dataS',
            modelVillagesStat: 'dataStatS'
        }),
        ...mapGetters('tunjangan', {
            form: 'data',
            dataStat: 'dataStat',
            updateStat: 'updateStat',
            updateResponse: 'update'
        }),
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
    }
}
</script>