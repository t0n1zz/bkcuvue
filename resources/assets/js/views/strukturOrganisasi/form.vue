<template>
  <div class="organization-structure">
    <!-- Page header -->
    <page-header
      :title="title"
      :titleDesc="titleDesc"
      :titleIcon="titleIcon"
    ></page-header>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <!-- <h2>Struktur Organisasi</h2> -->

    <div
      v-for="(division, divisionIndex) in divisions"
      :key="divisionIndex"
      class="division-card"
    >
      <div class="division-header">
        <h4>BIDANG {{ division.divisi.name }}</h4>
        <button @click="removeDivision(divisionIndex)" class="close-button">
          &times;
        </button>
      </div>
      <div class="division-content">
        <div class="form-group">
          <label for="division">Bidang:</label>
          <select v-model="division.divisi" class="form-control">
            <option :disabled="true" :value="{ id: '', name: '' }">
              Pilih Bidang
            </option>
            <option
              v-for="divisionOption in divisionOptions"
              :value="{ id: divisionOption.id, name: divisionOption.name }"
              :disabled="isDivisionSelected(divisionOption.name, divisionIndex)"
            >
              {{ divisionOption.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="manager">Manager/Kabag:</label>
          <select
            v-model="division.manager"
            class="form-control"
            @change="managerSelected(division.manager.id)"
          >
            <option :disabled="true" :value="{}">Pilih Manager Manager</option>
            <option
              v-for="manager in managers"
              :value="{
                id: manager.id,
                id_aktivis: manager.id_aktivis,
                name: manager.name,
              }"
            >
              {{ manager.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="staff">Staff:</label>
          <ul class="staff-list">
            <li
              v-for="(staff, staffIndex) in division.staff"
              :key="staffIndex"
              class="staff-item"
            >
              <select v-model="staff.staf" class="form-control">
                <option :disabled="true" value="">Pilih Staff</option>
                <option
                  v-for="staf in staffOptions"
                  :value="{
                    id: staf.id,
                    id_aktivis: staf.id_aktivis,
                    name: staf.name,
                  }"
                >
                  {{ staf.name }}
                </option>
              </select>
              <button
                @click="removeStaff(divisionIndex, staffIndex)"
                class="remove-staff-button"
              >
                &times;
              </button>
            </li>
          </ul>
          <button @click="addStaff(divisionIndex)" class="btn btn-success">
            <i class="fas fa-plus"></i> Tambah Staff
          </button>
        </div>
      </div>
    </div>

    <button
      @click="addDivision"
      class="btn btn-success full-width-button center-button"
    >
      <i class="fas fa-plus"></i>Tambah Bidang
    </button>

    <ul class="organization-preview">
    </ul>

    <button
      @click="saveOrganization"
      class="btn btn-primary full-width-button center-button"
    >
      <i class="fas fa-save"></i> Simpan
    </button>

    <app-modal
      :show="modalShow"
      :state="modalState"
      :title="modalTitle"
      :content="modalContent"
      :size="modalSize"
      :color="modalColor"
      @batal="modalTutup"
      @tutup="modalTutup"
      @confirmOk="modalConfirmOk"
      @successOk="modalConfirmOk"
      @failOk="modalTutup"
      @backgroundClick="modalBackgroundClick"
    >
    </app-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pageHeader from "../../components/pageHeader.vue";
import appModal from "../../components/modal";
export default {

  components: {
    pageHeader,
    appModal,
  },
  data() {
    return {
      data: {
        divisions: '',
        deleted: '',
        deletedDiv:''
      },
      deleted: [],
      deletedDiv:[],
      title: "Struktur Organisasi",
      kelas: "struktur",
      titleDesc: "Menginput Struktur Organisasi",
      titleIcon: "icon-collaboration",
      selectCuPath: "struktur",
      state: "",
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: "",
      modalSize: "",
      modalColor: "",
      flag: false,
    };
  },

  created() {
    this.$store.dispatch("struktur/indexAktivis", 0);
    this.$store.dispatch("struktur/index", 0);
  },

  watch: {
    // when updating data
    updateStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";
      this.modalShow = true;
      if (value == "success") {
        this.modalTitle = this.update.message;
        this.modalContent = "";
        // this.fetch();

      } else if (value == "fail") {
        this.modalContent = this.update.message;
      } else {
        this.modalContent = "";
      }
    },
  },

  methods: {
    addDivision() {
      if (!this.$route.params.id) {
        this.divisions.push({
          divisi: "",
          manager: "",
          staff: [],
        });
      } else {
        this.$store.dispatch("struktur/addDivision");
        this.flag = true;
      }
    },

    removeDivision(divisionIndex) {
      if (!this.$route.params.id) {
        this.divisions.splice(divisionIndex, 1);
      } else {
        this.deletedDiv.push(this.divisions[divisionIndex])
        let idx = divisionIndex;
        if (this.flag == false) {
          idx = divisionIndex - 1;
        }
        this.$store.commit("struktur/removeDivision", idx);
      }
    },

    addStaff(divisionIndex) {
      this.divisions[divisionIndex].staff.push({ staf: "" });
    },
    removeStaff (divisionIndex, staffIndex) {
      this.deleted.push({
        id_user_atasan: this.divisions[divisionIndex].manager.id,
        id_bidang: this.divisions[divisionIndex].divisi.id,
        id_user: this.divisions[divisionIndex].staff[staffIndex].staf.id
      })

      this.divisions[divisionIndex].staff.splice(staffIndex, 1);
    },

    managerSelected(managerId) {
      const manager = this.managers.find((manager) => manager.id === managerId);
      if (manager.tingkat == 5) {
        this.staffOptions = this.staffOption.filter((staff) => {
          return (
            staff.tingkat === 7 || staff.tingkat === 8 || staff.tingkat === 6
          );
        });
      } else {
        this.staffOptions = this.staffOption.filter((staff) => {
          return staff.tingkat === 7 || staff.tingkat === 8;
        });
      }
    },

    saveOrganization () {
      this.data.divisions = this.divisions
      this.data.deleted = this.deleted
      this.data.deletedDiv = this.deletedDiv
      this.$store.dispatch("struktur/store", [
        this.currentUser.id_cu,
        this.data,
      ]);
    },

    isDivisionSelected(divisionName, currentIndex) {
      if (!this.$route.params.id) {
        return this.divisions.some(
          (division, index) =>
            index !== currentIndex && division.divisi.name === divisionName
        );
      }
    },

    modalBackgroundClick() {
      if (this.modalState === "success") {
        this.modalTutup;
      } else if (this.modalState === "loading") {
        // do nothing
      } else {
        this.modalShow = false;
      }
    },

    modalTutup() {
      this.modalShow = false;
    },

    modalConfirmOk() {
        this.$router.push('/struktur');
    },
  },

  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),

    ...mapGetters("struktur", {
      managers: "managerS",
      staffOptions: "staffS",
      update: "update",
      updateStat: "updateStat",
      divisions: "dataS",
      divisionOptions:'bidang'
    }),
  },
};
</script>

<style>
.organization-structure {
  font-family: Arial, sans-serif;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

.division-header h4 {
  padding: 10px;
  margin: 0;
  color: white;
}

.division-card {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: white;
}

.division-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  border-bottom: 1px solid #ccc;
}

.division-header h4 {
  margin: 0;
}

.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  margin: 0;
  color: #ffffff;
}

.division-content {
  padding: 10px;
}

.form-group {
  margin-bottom: 10px;
}

.staff-list {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
}

.staff-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.division-button,
.save-button {
  width: 100%;
}

.remove-staff-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: rgb(0, 0, 0);
  margin-left: 5px;
}

.btn {
  margin-right: 5px;
}

.organization-preview hr {
  margin: 10px 0;
}

/* Blueish color accent */
.btn-primary {
  background-color: #3498db;
  color: #fff;
}

.close-button:hover,
.remove-staff-button:hover {
  color: #ff0000;
}

.btn-primary:hover {
  color: #ffffff;
}

.organization-preview hr {
  border-color: #888;
}

.full-width-button {
  width: 100%;
}

.center-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
</style>
