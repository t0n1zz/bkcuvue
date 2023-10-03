<template>
    <div>
        <!-- page-header -->
        <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title"
            :level2Route="kelas" @level2Back="back()"></page-header>

        <!-- content -->
        <div class="page-content pt-0">
            <div class="content-wrapper">
                <div class="content">
                    <!-- main panel -->
                    <form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
                        <!-- informasi umum -->
                        <div class="card">
                            <div class="card-header bg-white">
                                <h5 class="card-title">1. Data Tunjangan {{ form.jenis }}</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    <!-- name -->
                                    <div class="col-md-6">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Jenis Tunjangan:
                                            </h5>
                                            <h5>
                                                {{ form.jenis }}
                                            </h5>
                                        </div>
                                    </div>

                                    <!-- name -->
                                    <div class="col-md-6">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Nama Lengkap {{ form.jenis }}:
                                            </h5>
                                            <h5>
                                                {{ form.name }}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Tempat Lahir:
                                            </h5>
                                            <h5>
                                                {{ form.tempat_lahir }}
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Tgl. Lahir:
                                            </h5>

                                            <h5>
                                                {{ $options.filters.date(form.tanggal_lahir) }}
                                            </h5>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Alamat:
                                            </h5>
                                            {{ form.alamat }}
                                        </div>
                                    </div>
                                </div>

                                <div class="row" v-if="form.jenis != 'Anak'">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                KTP:
                                            </h5>
                                            <!-- image preview -->
                                            <div class="card-body text-center">
                                                <img :src="'/images/no_image.jpg'" style="width:15em;"
                                                    v-if="form.ktp == '' || !form.ktp">
                                                <img :src="'/images/tunjangan/' + form.ktp + '.jpg'" style="width:15em;"
                                                    v-else>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5 v-if="form.jenis=='Anak'">
                                                Surat Kelahiran:
                                            </h5>
                                            <h5 v-else>
                                                Surat Perkawinan:
                                            </h5>
                                            <!-- image preview -->
                                            <div class="card-body text-center">
                                                <img :src="'/images/no_image.jpg'" style="width:15em;"
                                                    v-if="form.surat == '' || !form.surat">
                                                <img :src="'/images/tunjangan/' + form.surat + '.jpg'"
                                                    style="width:15em;" v-else>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group">

                                            <!-- title -->
                                            <!-- title -->
                                                <h5 v-if="form.jenis == 'Anak'">
                                                    Akta Kelahiran:
                                                </h5>
                                                <h5 v-else>
                                                    Akta Perkawinan:
                                                </h5>
                                            <!-- upload button -->
                                            <!-- image preview -->
                                            <div class="card-body text-center">
                                                <img :src="'/images/no_image.jpg'" style="width:15em;"
                                                    v-if="form.akta== '' || !form.akta">
                                                <img :src="'/images/tunjangan/' + form.akta + '.jpg'"
                                                    style="width:15em;" v-else>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tempat -->
                        <div class="card" v-if="form.jenis != 'Anak'">
                            <div class="card-header bg-white">
                                <h5 class="card-title">2. Tempat </h5>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    <!-- tipe tempat -->
                                    <div class="col-md-12">
                                        <h5>Tempat Menikah:</h5>
                                        <h5>{{ form.tempat_menikah }}</h5>
                                    </div>

                                    <!-- Provinsi -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Provinsi:</h5>
                                            <h5>{{ form.provinces.name }}</h5>
                                        </div>
                                    </div>

                                    <!-- Regencies -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Kota/Kabupaten:</h5>
                                            <h5>{{ form.regencies.name }}</h5>
                                        </div>
                                    </div>

                                    <!-- Regencies -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Kecamatan:</h5>
                                            <h5>{{ form.districts.name }}</h5>
                                        </div>
                                    </div>

                                    <!-- Regencies -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>Desa/Kelurahan:</h5>
                                            <h5>{{ form.districts.name }}</h5>
                                        </div>
                                    </div>

                                    <!-- mulai -->
                                    <div class="col-md-4">
                                        <div class="form-group">

                                            <!-- title -->
                                            <h5>
                                                Tgl. Menikah:
                                            </h5>

                                            <h5>{{ $options.filters.date(form.tanggal_menikah) }}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- form button -->
                        <div class="card card-body">
                            <div class="text-center d-none d-md-block">

                                <!-- tutup -->
                                <button type="button" @click.prevent="back" class="btn btn-light">
                                    Kembali
                                </button>
                            </div>
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

export default {
    components: {
        pageHeader,
        appModal,
        appImageUpload,
        message,
        formButton,
        formInfo,
        DatePicker
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
        }
    },

    created () {
        this.$store.dispatch('tunjangan/detail', this.$route.params.id);
    },

    watch: {

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