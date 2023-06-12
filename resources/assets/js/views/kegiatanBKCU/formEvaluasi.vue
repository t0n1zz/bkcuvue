<template>
    <div>
        <div class="navbar navbar-expand-lg navbar-dark bg-indigo">
            <div class="navbar-brand wmin-0 mr-0">
                <a href="#" class="d-inline-block">
                    <img src="/images/simo.png">
                </a>
            </div>
            <div>
                <span class="navbar-text ml-lg-3 mr-lg-auto">
                    <span class="badge bg-success-400">PUSKOPCUINA
                    </span>
                </span>
            </div>
        </div>
        <hr>
        <div class="page-content pt-0">
            <div class="content-wrapper">
                <div class="content">
                    <!-- main panel -->
                    <form enctype="multipart/form-data" data-vv-scope="form" @submit.prevent="save">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group col-md-12">
                                    <div class="row">
                                        <p class="mb-3"><strong>Petunjuk Pengisian Evaluasi Kegiatan <span
                                                    v-if="this.itemStat == 'success'">{{ this.item.name }}</span>:
                                            </strong> <br><br>
                                            Pilih tanda <span class="icon-radio-checked" style="color:#0066ff"></span>
                                            pada
                                            angka
                                            pilihan yang Bapak/Ibu anggap paling sesuai dengan Kriteria Nilai :
                                            <strong>1. Kurang sekali 2. kurang 3. Cukup 4. Baik 5. Baik Sekali</strong>
                                        </p>
                                        <hr>
                                        <div class="col-md-6">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            <strong>Pertanyaan Evaluasi</strong>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <template v-if="isDesktop">
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <td>
                                                                <strong>1</strong>
                                                            </td>
                                                            <td>
                                                                <strong>2</strong>
                                                            </td>
                                                            <td>
                                                                <strong>3</strong>
                                                            </td>
                                                            <td>
                                                                <strong>4</strong>
                                                            </td>
                                                            <td>
                                                                <strong>5</strong>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                <!-- divider -->
                                <hr>
                                <div class="form-group col-md-12" v-for="(per, p) in this.itemEvaluasiForm" :key="p">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td><span>
                                                                <span>{{ per.name }}</span><span class="text-danger">
                                                                    *</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- saran -->
                                        <div v-if="per.tipe == 'saran'" class="col-md-6"
                                            :class="{ 'has-error': errors.has('form.saran-' + p) }">
                                            <!-- textarea -->
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <textarea class="form-control" :name="'saran-' + p"
                                                                placeholder="Silahkan masukkan saran"
                                                                @input="updateFormEvaluasi($event.target.value, p, per.id, per.tipe)"
                                                                v-validate="'required'" rows="7">
                                                                </textarea>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- error message -->
                                            <small class="text-danger" v-if="errors.has('form.saran-' + p)">
                                                <i class="icon-arrow-small-right"></i> {{
                                                    "This Field is Required"
                                                }}
                                            </small>
                                            <small class="text-muted" v-else>&nbsp;</small>
                                        </div>
                                        <div v-if="per.tipe == 'pilihan'" class="form-group col-md-6"
                                            :class="{ 'has-error': errors.has('form.radio-' + p) }">
                                            <template v-if="isDesktop">
                                                <table class="table text-nowrap">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 1, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">

                                                            </td>
                                                            <td>
                                                                <input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 2, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">

                                                            </td>
                                                            <td>
                                                                <input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 3, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">

                                                            </td>
                                                            <td>
                                                                <input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 4, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">

                                                            </td>
                                                            <td>
                                                                <input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 5, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- error message -->
                                                <small class="text-danger" v-if="errors.has('form.radio-' + p)">
                                                    <i class="icon-arrow-small-right"></i> {{
                                                        "This Field is Required"
                                                    }}
                                                </small>
                                                <small class="text-muted" v-else>&nbsp;</small>
                                            </template>
                                            <template v-if="!isDesktop">
                                                <table class="table text-nowrap">
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>1</strong>
                                                                <br>
                                                                <input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 1, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">
                                                            </td>
                                                            <td>
                                                                <strong>2</strong>
                                                                <br><input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 2, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">
                                                            </td>
                                                            <td><strong>3</strong>
                                                                <br><input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 3, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">
                                                            </td>
                                                            <td><strong>4</strong>
                                                                <br><input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 4, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">
                                                            </td>
                                                            <td><strong>5</strong>
                                                                <br><input type="radio" :name="'radio-' + p"
                                                                    :value="{ id: per.id, value: 5, tipe: per.tipe }"
                                                                    v-model="formEvaluasi[p]" v-validate="'required'">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- error message -->
                                                <small class="text-danger" v-if="errors.has('form.radio-' + p)">
                                                    <i class="icon-arrow-small-right"></i> {{
                                                        "This Field is Required"
                                                    }}
                                                </small>
                                                <small class="text-muted" v-else>&nbsp;</small>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- form info -->
                        <form-info></form-info>
                        <br />

                        <!-- form button -->
                        <div class="card card-body">
                            <form-button :cancelState="cancelState" :formValidation="'form'"
                                @cancelClick="back"></form-button>
                        </div>
                        <!-- form button -->
                    </form>
                </div>
            </div>
            <!-- modal -->
            <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
                @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"
                @backgroundClick="modalBackgroundClick">
            </app-modal>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import formInfo from "../../components/formInfo.vue";
import formButton from "../../components/formButton.vue";
import wajibBadge from "../../components/wajibBadge.vue";
import appModal from '../../components/modal';
export default {

    components: {
        formInfo,
        formButton,
        wajibBadge,
        appModal,
    },
    data() {
        return {
            title: 'Tambah Evaluasi Kegiatan',
            titleDesc: 'Menambah Evaluasi Kegiatan',
            titleIcon: 'icon-plus3',
            level: 2,
            level2Title: 'Detail Kegiatan',
            kelas: 'kegiatanBKCU',
            titleDesc: '',
            formEvaluasi: {
            },
            submited: false,
            isDesktop: false,
            cancelState: 'methods',
            selectedOption: '',
            state: '',
            modalShow: false,
            modalState: '',
            modalTitle: '',
            modalColor: '',
            modalContent: '',
            item: {},
            itemStat: ''
        }
    },
    created() {
        this.fetch();
        this.fetchWindowSize();
        this.fetchNameKegiatan();
    },
    watch: {
        updateStat(value) {
            this.modalShow = true;
            this.modalState = value;
            this.modalColor = '';

            if (value === "success") {
                this.modalTitle = this.updateResponse.message;
            } else {
                this.modalTitle = 'Oops terjadi kesalahan :(';
                this.modalContent = this.updateResponse;
            }
        },
    },
    methods: {
        fetch() {
            this.$store.dispatch('kegiatanBKCU/indexFormEvaluasi', this.$route.params.id);
        },
        fetchNameKegiatan() {
            axios.get('/api/kegiatanBKCU/getNameKegiatan/' + this.$route.params.id)
                .then(response => {
                    this.item = response.data.model;
                    this.itemStat = 'success';
                })
                .catch(error => {
                    this.item = error.response;
                    this.itemStat = 'fail';
                });
        },
        fetchWindowSize() {
            const desktopQuery = window.matchMedia('(min-width: 768px)')
            this.isDesktop = desktopQuery.matches
            desktopQuery.addListener((query) => {
                this.isDesktop = query.matches
            })
        },
        updateFormEvaluasi(value, index, id, tipe) {
            this.$set(this.formEvaluasi, index, { id: id, value: value, tipe: tipe });
        },
        save() {
            this.$validator.validateAll('form').then((result) => {
                if (result) {
                    this.$store.dispatch('kegiatanBKCU/storeFormEvaluasiNilai', [this.formEvaluasi]);
                } else {
                    this.submited = true;
                }
            });
        },
        back() {
            if (this.currentUser.can['index_diklat_bkcu']) {
                this.$router.push({ name: 'kegiatanBKCU' + 'Detail', params: { id: this.$route.params.id } });
            } else if (this.currentUser) {
                this.$router.push({ name: 'dashboard' });
            }
            else {
                this.$router.push({ name: 'login' });
            }
        },
        modalTutup() {
            if (this.updateStat === 'success') {
                this.back();
            }
            this.modalShow = false;
        },
        modalBackgroundClick() {
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
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
        ...mapGetters('kegiatanBKCU', {
            updateResponse: 'update3',
            updateStat: 'updateStat3',
            itemEvaluasiForm: 'dataForm',
            itemEvaluasiFormtat: 'dataFormStat'
        }),
    }
}
</script>