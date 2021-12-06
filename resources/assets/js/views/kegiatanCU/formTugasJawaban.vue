<template>
  <div>
    <!-- message -->
    <message
      v-if="errors.any('formJawaban') && submited"
      :title="'Oops, terjadi kesalahan'"
      :errorItem="errors.items"
    >
    </message>

    <message
      v-if="message.show"
      @close="messageClose"
      :title="'Oops terjadi kesalahan'"
      :errorData="message.content"
      :showDebug="false"
    >
    </message>

    <!-- data pertanyaan -->
    <div class="card">
      <div class="card-header bg-light header-elements-inline">
        <h6 class="card-title">{{ selected.name }}</h6>
        <div class="d-none d-sm-block">
          <div class="header-elements">
            <span class="badge badge-primary">{{
              selected.tipe | uppercase
            }}</span>
            <span
              class="badge badge-secondary ml-1"
              v-html="$options.filters.dateTime(selected.created_at)"
            >
            </span>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div v-html="selected.keterangan"></div>
        <div v-if="selected.tipe != 'google form'">
          <div v-if="selected.link">
            <hr />
            <a
              type="button"
              class="btn btn-light btn-block mt-1 mb-1"
              :href="selected.link"
              target="_blank"
              ><i class="icon-file-download"></i> Unduh dokumen pendukung</a
            >
          </div>
          <div v-if="selected.filename">
            <hr />
            <button
              type="button"
              class="btn btn-light btn-block mt-1 mb-1"
              @click.prevent="downloadMateri(selected.filename)"
            >
              <i class="icon-file-download"></i> Unduh dokumen pendukung
            </button>
          </div>
        </div>
      </div>
      <div class="d-block d-sm-none text-center">
        <div class="card-footer">
          <span class="badge badge-primary">{{
            selected.tipe | uppercase
          }}</span>
          <span
            class="badge badge-secondary"
            v-html="$options.filters.dateTime(selected.created_at)"
          >
          </span>
        </div>
      </div>
    </div>

    <!-- jawaban list -->
    <div v-if="tipeUser != 'peserta'">
      <div
        class="card card-body bg-warning text-white text-center"
        v-if="itemDataStat == 'success' && itemData.data.length > 0"
      >
        JAWABAN
      </div>
      <div v-else>
        <div
          class="card card-body bg-secondary text-white text-center"
          v-if="selected.tipe != 'google form'"
        >
          BELUM ADA JAWABAN
        </div>
        <div v-else>
          Tugas ini menggunakan google form sebagai media untuk memberikan
          jawaban, oleh karena itu, untuk memeriksa hasil jawaban dari peserta
          silahkan ke google form berikut:
          <a
            type="button"
            class="btn bg-blue btn-block mt-2 mb-1"
            :href="selected.link"
            target="_blank"
            ><i class="icon-google"></i> Google Form</a
          >
        </div>
      </div>
      <!-- data -->
      <template v-if="itemDataStat == 'success' && itemData.data.length > 0">
        <div
          class="card"
          v-for="jawaban in itemData.data"
          :key="jawaban.id"
          :class="{ 'border-warning': jawaban.terjawab == 1 }"
        >
          <div class="card-header bg-light header-elements-inline">
            <h6 class="card-title">
              <img
                :src="'/images/aktivis/' + jawaban.user.aktivis.gambar + '.jpg'"
                width="30"
                height="30"
                class="rounded-circle"
                alt="user image"
                v-if="jawaban.user.aktivis.gambar"
              />
              <img
                src="/images/no_image_man.jpg"
                width="30"
                height="30"
                class="rounded-circle"
                alt="user image"
                v-else
              />
              <check-value
                :value="jawaban.user.aktivis.name"
                v-if="jawaban.user"
              ></check-value>
              <span v-else>-</span>
              |
              <check-value
                :value="jawaban.cu.name"
                v-if="jawaban.cu"
              ></check-value>
              <span v-else>-</span>
            </h6>
            <div class="d-none d-sm-block">
              <div class="header-elements">
                <span class="badge badge-secondary">
                  <small
                    v-html="$options.filters.dateTime(jawaban.created_at)"
                  ></small>
                </span>
                <div class="list-icons ml-2">
                  <a
                    href="#"
                    class="btn btn-light list-icons-item"
                    @click.prevent="showOpen(jawaban, 'hapus')"
                    v-if="jawaban.id_user == currentUser.id"
                    ><i class="icon-bin2"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body pt-2" v-if="jawaban.keterangan">
            <div v-html="jawaban.keterangan"></div>
            <div v-if="jawaban.link != '' || jawaban.filename != ''">
              <hr class="mb-1" />
              <h5>Dokumen pendukung:</h5>
              <div v-if="jawaban.link">
                <a
                  type="button"
                  class="btn btn-light btn-block mt-1 mb-1"
                  :href="jawaban.link"
                  target="_blank"
                  ><i class="icon-file-download"></i> Unduh dokumen pendukung</a
                >
              </div>
              <div v-if="jawaban.filename">
                <button
                  type="button"
                  class="btn btn-light btn-block mt-1 mb-1"
                  @click.prevent="downloadMateri(jawaban.filename)"
                >
                  <i class="icon-file-download"></i> Unduh dokumen pendukung
                </button>
              </div>
            </div>
          </div>
          <div class="card-footer d-block d-sm-none text-center">
            <span class="badge badge-secondary">
              <small
                v-html="$options.filters.dateTime(jawaban.created_at)"
              ></small>
            </span>
            <button
              class="btn btn-light btn-block mt-2 mb-1"
              @click.prevent="showOpen(jawaban, 'hapus')"
            >
              <i class="icon-bin2"></i> Hapus Komentar
            </button>
          </div>
        </div>
      </template>

      <div v-if="itemDataStat === 'loading'" class="card card-body">
        <h4>Mohon tunggu...</h4>
        <div class="progress">
          <div
            class="
              progress-bar
              progress-bar-info
              progress-bar-striped
              progress-bar-animated
            "
            style="width: 100%"
          >
            <span class="sr-only">100% Complete</span>
          </div>
        </div>
      </div>
      <div v-if="itemDataStat === 'fail'" class="card card-body">
        <h4>Oops.. Terjadi kesalahan, silahkan coba lagi.</h4>
      </div>

      <!-- pagination -->
      <div
        class="card card-body pb-2 pt-2"
        v-if="itemDataStat == 'success' && itemData.data.length > 0"
      >
        <div class="row pre-scrollable">
          <!-- pagination -->
          <!-- desktop -->
          <div class="col-md-12 text-center">
            <!-- pagination success-->
            <div class="btn-group" v-if="itemDataStat === 'success'">
              <button
                href="#"
                class="btn btn-light"
                :class="{ disabled: !itemData.prev_page_url }"
                @click.prevent="goToPage(1)"
              >
                <i class="icon-backward2"></i>
              </button>
              <button
                href="#"
                class="btn btn-light"
                :class="{ disabled: !itemData.prev_page_url }"
                @click.prevent="prevPage"
              >
                <i class="icon-arrow-left5"></i>
              </button>
              <button
                href="#"
                class="btn"
                v-for="(n, index) in pages"
                :key="index"
                :class="{
                  'btn-primary': queryData.page == n,
                  'btn-light': queryData.page != n,
                }"
                @click.prevent="goToPage(n)"
              >
                {{ n }}
              </button>
              <button
                href="#"
                class="btn btn-light"
                :class="{ disabled: !itemData.next_page_url }"
                @click.prevent="nextPage"
              >
                <i class="icon-arrow-right5"></i>
              </button>
              <button
                href="#"
                class="btn btn-light"
                :class="{ disabled: !itemData.next_page_url }"
                @click.prevent="goToPage(itemData.last_page)"
              >
                <i class="icon-forward3"></i>
              </button>
            </div>

            <!-- pagination loading-->
            <div class="btn-group" v-else>
              <button href="#" class="btn btn-light disabled">
                <i class="icon-backward2"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                <i class="icon-arrow-left5"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                <i class="icon-spinner2 spinner"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                <i class="icon-arrow-right5"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                <i class="icon-forward3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- updatestat -->
    <div v-else>
      <div v-if="updateStat == 'loading'">
        <div class="progress">
          <div
            class="
              progress-bar
              progress-bar-info
              progress-bar-striped
              progress-bar-animated
            "
            style="width: 100%"
          >
            <span class="sr-only">100% Complete</span>
          </div>
        </div>
      </div>

      <div v-else>
        <div v-if="!isShowHapus && !isShowUbah">
          <hr />
          <div v-if="selected.tipe != 'google form'">
            <div
              class="card border-warning"
              v-if="formDataStat == 'success' && formData"
            >
              <div class="card-body">
                <div class="form-group">
                  <h5>Jawaban:</h5>

                  <textarea
                    rows="5"
                    type="text"
                    name="keterangan"
                    class="form-control"
                    placeholder="Silahkan masukkan jawaban "
                    v-model="formData.keterangan"
                    readonly
                  ></textarea>
                </div>

                <div v-if="formData.link != '' || formData.filename != ''">
                  <h5>Dokumen pendukung:</h5>
                  <div v-if="formData.link">
                    <a
                      type="button"
                      class="btn btn-light btn-block mt-1 mb-1"
                      :href="formData.link"
                      target="_blank"
                      ><i class="icon-file-download"></i> Unduh dokumen
                      pendukung</a
                    >
                  </div>
                  <div v-if="formData.filename">
                    <button
                      type="button"
                      class="btn btn-light btn-block mt-1 mb-1"
                      @click.prevent="downloadMateri(formData.filename)"
                    >
                      <i class="icon-file-download"></i> Unduh dokumen pendukung
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row">
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-light btn-block mt-1 mb-1"
                      @click.prevent="showOpen(formData, 'edit')"
                    >
                      <i class="icon-pencil5"></i> Ubah Jawaban
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-light btn-block mt-1 mb-1"
                      @click.prevent="showOpen(formData, 'hapus')"
                    >
                      <i class="icon-bin2"></i> Hapus Jawaban
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <form
              @submit.prevent="save"
              enctype="multipart/form-data"
              data-vv-scope="formJawaban"
              v-else
            >
              <div class="form-group">
                <h5>Jawaban:</h5>

                <textarea
                  rows="5"
                  type="text"
                  name="keterangan"
                  class="form-control"
                  placeholder="Silahkan masukkan jawaban "
                  v-model="formJawaban.keterangan"
                ></textarea>
              </div>

              <div class="form-group">
                <h5>
                  Dokumen pendukung:
                  <br />
                  <small class="text-muted"
                    >silahkan diisi apabila ada dokumen pendukung untuk
                    mengerjakan tugas ini</small
                  >
                </h5>

                <!-- format -->
                <div
                  class="form-group"
                  :class="{ 'has-error': errors.has('formJawaban.format') }"
                  v-if="mode == 'create'"
                >
                  <!-- title -->
                  <h5
                    :class="{ 'text-danger': errors.has('formJawaban.format') }"
                  >
                    <i
                      class="icon-cross2"
                      v-if="errors.has('formJawaban.format')"
                    ></i>
                    Pilih Format:
                  </h5>

                  <!-- select -->
                  <select
                    class="form-control"
                    name="format"
                    v-model="formJawaban.format"
                    data-width="100%"
                    v-validate="'required'"
                    data-vv-as="format"
                  >
                    <option disabled value="">Silahkan pilih format</option>
                    <option value="upload">Upload</option>
                    <option value="link">Link</option>
                  </select>

                  <!-- error message -->
                  <small
                    class="text-muted text-danger"
                    v-if="errors.has('formJawaban.format')"
                  >
                    <i class="icon-arrow-small-right"></i>
                    {{ errors.first("formJawaban.format") }}
                  </small>
                  <small class="text-muted" v-else>&nbsp;</small>
                </div>

                <div class="form-group" v-if="formJawaban.format == 'upload'">
                  <!-- title -->
                  <h5>Upload dokumen:</h5>

                  <!-- textarea -->
                  <div class="card-card-body">
                    <input
                      type="file"
                      class="form-control"
                      @change="upload"
                      ref="fileInput"
                    />
                  </div>
                </div>
                <div
                  class="form-group"
                  v-else-if="formJawaban.format == 'link'"
                >
                  <!-- title -->
                  <h5>Link dokumen:</h5>

                  <!-- textarea -->
                  <input
                    type="text"
                    name="link"
                    class="form-control"
                    placeholder="Silahkan masukkan link"
                    v-model="formJawaban.link"
                  />
                  <small class="text-muted"
                    >Silahkan masukkan link ke dokumen</small
                  >
                </div>
              </div>

              <button type="submit" class="btn btn-warning btn-block pb-2">
                <i class="icon-paperplane"></i> Kirim Jawaban
              </button>
            </form>
          </div>

          <div v-else>
            Tugas ini membutuhkan anda untuk mengisi google form, silahkan tekan
            tombol berikut untuk ke google form pada tugas ini dan mengikuti
            petunjuk selanjutnya disana.
            <a
              type="button"
              class="btn bg-blue btn-block mt-2 mb-1"
              :href="selected.link"
              target="_blank"
              ><i class="icon-google"></i> Google Form</a
            >
          </div>
        </div>

        <!-- ubah -->
        <form
          @submit.prevent="save"
          data-vv-scope="formData"
          v-else-if="isShowUbah"
        >
          <div class="form-group">
            <h5>Jawaban:</h5>

            <textarea
              rows="5"
              type="text"
              name="keterangan"
              class="form-control"
              placeholder="Silahkan masukkan jawaban "
              v-model="formData.keterangan"
            ></textarea>
          </div>

          <h5>
            Dokumen pendukung:
            <br />
            <small class="text-muted"
              >silahkan diisi apabila ada dokumen pendukung untuk mengerjakan
              tugas ini</small
            >
          </h5>

          <div v-if="formData.format == 'link'">
            <!-- title -->
            <h5>Link dokumen:</h5>

            <!-- textarea -->
            <input
              type="text"
              name="link"
              class="form-control"
              placeholder="Silahkan masukkan link"
              v-model="formData.link"
            />
            <small class="text-muted">Silahkan masukkan link ke dokumen</small>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <button
                type="button"
                class="btn btn-light btn-block mt-1 mb-1"
                @click.prevent="showBatal()"
              >
                <i class="icon-arrow-left13"></i> Batal
              </button>
            </div>
            <div class="col-sm-6">
              <button type="submit" class="btn btn-primary btn-block mt-1 mb-1">
                <i class="icon-floppy-disk"></i> Simpan
              </button>
            </div>
          </div>
        </form>

        <!-- hapus -->
        <div v-else-if="isShowHapus">
          <div class="card card-body text-center">
            <span class="text-warning pb-2">
              <i class="icon-question3" style="font-size: 3em"></i>
            </span>
            <h3>Hapus jawaban ini?</h3>

            <!-- button -->
            <div class="row">
              <div class="col-sm-6">
                <button
                  class="btn btn-light btn-block mb-2"
                  @click.prevent="showBatal()"
                >
                  <i class="icon-arrow-left13"></i> Batal
                </button>
              </div>
              <div class="col-sm-6">
                <button
                  class="btn btn-warning btn-block mb-2"
                  @click.prevent="showOke()"
                >
                  <i class="icon-checkmark5"></i> Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- divider -->
    <hr />

    <!-- tombol desktop-->
    <div class="text-center d-none d-md-block">
      <button class="btn btn-light" @click.prevent="tutup">
        <i class="icon-cross"></i> Tutup
      </button>
    </div>

    <!-- tombol mobile-->
    <div class="d-block d-md-none">
      <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
        <i class="icon-cross"></i> Tutup
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toMulipartedForm } from "../../helpers/form";
import message from "../../components/message.vue";
import formInfo from "../../components/formInfo.vue";
import checkValue from "../../components/checkValue.vue";
import FileSaver from "file-saver";

export default {
  props: ["selected", "kegiatan_id", "kegiatan_tipe", "tipeUser"],
  components: {
    formInfo,
    message,
    checkValue,
  },
  data() {
    return {
      title: "",
      selectedJawaban: {},
      formJawaban: {
        id: "",
        kegiatan_tugas_id: "",
        id_user: "",
        id_cu: "",
        keterangan: "",
        content: "",
        format: "",
        link: "",
      },
      pages: [],
      queryData: {
        order_column: "created_at",
        order_direction: "desc",
        filter_match: "and",
        limit: 5,
        page: 1,
      },
      message: {
        show: false,
        content: "",
      },
      mode: "create",
      isShowHapus: false,
      isShowUbah: false,
      submited: false,
    };
  },
  created() {
    this.formJawaban.kegiatan_tugas_id = this.selected.id;
    this.fetchJawaban(this.queryData);
  },
  watch: {
    itemDataStat(value) {
      if (value == "success") {
        this.calculatePagination();
      }
    },
    updateStat(value) {
      if (value == "success") {
        this.fetchJawaban(this.queryData);
        this.formJawaban.keterangan = "";
      } else if (value == "fail") {
        this.message.show = true;
        this.message.content = this.updateResponse;
      }
    },
  },
  methods: {
    upload(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.formJawaban.content = files[0];
    },
    fetchJawaban(params) {
      if (this.tipeUser == "peserta") {
        this.$store.dispatch("kegiatanCU/editTugasJawaban", this.selected.id);
      } else {
        this.$store.dispatch("kegiatanCU/indexTugasJawaban", [
          params,
          this.selected.id,
        ]);
      }
    },
    save() {
      this.$validator.validateAll("formJawaban").then((result) => {
        if (result) {
          if (this.mode == "edit") {
            this.$store.dispatch("kegiatanCU/updateTugasJawaban", [
              this.formData.id,
              this.formData,
            ]);
            this.isShowUbah = false;
          } else {
            this.formJawaban.id_user = this.currentUser.id;
            this.formJawaban.id_cu = this.currentUser.id_cu;
            const formData = toMulipartedForm(this.formJawaban, this.mode);
            this.$store.dispatch("kegiatanCU/storeTugasJawaban", [
              this.kegiatan_tipe,
              formData,
            ]);
          }
        } else {
          this.submited = true;
        }
      });
    },
    showOpen(value, tipe) {
      this.selectedJawaban = value;
      if (tipe == "hapus") {
        this.isShowHapus = true;
        this.mode = "create";
      } else if (tipe == "edit") {
        this.isShowUbah = true;
        this.mode = tipe;
      }
    },
    showOke() {
      if (this.isShowHapus) {
        this.$store.dispatch("kegiatanCU/destroyTugasJawaban", [
          this.kegiatan_tipe,
          this.selectedJawaban.id,
        ]);
      }
      this.isShowHapus = false;
      this.mode == "create";
    },
    showBatal() {
      this.selectedJawaban = {};
      if (this.isShowHapus) {
        this.isShowHapus = false;
      } else if (this.isShowUbah) {
        this.isShowUbah = false;
      }
    },
    calculatePagination() {
      var i = 0;
      var startPage = 0;
      var endPage = 0;
      var diffPage = 0;

      startPage = this.queryData.page < 3 ? 1 : this.queryData.page - 1;
      endPage = 4 + startPage;
      endPage =
        this.itemData.last_page < endPage ? this.itemData.last_page : endPage;
      diffPage = startPage - endPage + 4;
      startPage -= startPage - diffPage > 0 ? diffPage : 0;
      this.pages.length = 0;

      for (i = startPage; i <= endPage; i++) {
        this.pages.push(i);
      }
    },
    prevPage() {
      if (this.itemData.prev_page_url) {
        this.queryData.page = Number(this.queryData.page) - 1;
        this.fetchJawaban(this.queryData);
      }
    },
    goToPage(value) {
      if (this.queryData.page != value) {
        this.queryData.page = value;
        this.fetchJawaban(this.queryData);
      }
    },
    nextPage() {
      if (this.itemData.next_page_url) {
        this.queryData.page = Number(this.queryData.page) + 1;
        this.fetchJawaban(this.queryData);
      }
    },
    messageClose() {
      this.message.show = false;
    },
    tutup() {
      this.$emit("tutup");
    },
    downloadMateri(filename) {
      if (this.kegiatan_tipe == "diklat_bkcu") {
        axios
          .get("/api/download_folder/" + filename + "/diklat", {
            responseType: "blob",
          })
          .then((response) => {
            FileSaver.saveAs(response.data, filename);
          });
      } else if (this.kegiatan_tipe == "pertemuan_bkcu") {
        axios
          .get("/api/download_folder/" + filename + "/pertemuan", {
            responseType: "blob",
          })
          .then((response) => {
            FileSaver.saveAs(response.data, filename);
          });
      }
    },
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),
    ...mapGetters("kegiatanCU", {
      itemData: "dataS11",
      itemDataStat: "dataStatS11",
      formData: "data4",
      formDataStat: "dataStat4",
      updateResponse: "update2",
      updateStat: "updateStat2",
    }),
  },
};
</script>