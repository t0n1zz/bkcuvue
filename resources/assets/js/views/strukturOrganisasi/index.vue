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

    <div v-for="(division, index) in bidang" :key="index" class="division-card">
      <div class="division-header">
        <h4 v-if="division.level==0">{{ division.divisi.name}}</h4>
        <h4 v-else>BIDANG {{ division.divisi.name }}</h4>
      </div>

      <div class="division-content">
        <div class="form-group">
          <h3 for="manager">Manager/Kabag: {{ division.manager.name }}</h3>
          
        </div>

        <div class="form-group">
          <h4 for="staf">Staff:</h4>
          <ul class="staff-list">
            <li v-for="(staff, index) in division.staff" :key="index">
              {{ staff.staf.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul class="organization-preview"></ul>

    <button
      v-if="bidang != ''"
      @click="$router.push('struktur/edit/'+ currentUser.id_cu)"
      class="btn btn-primary full-width-button center-button"
    >
      <i class="fas fa-pencil"></i> Edit
    </button>

    <button
      v-else
      @click="$router.push('struktur/create')"
      class="btn btn-primary full-width-button center-button"
    >
      <i class="fas fa-plus"></i> Tambah
    </button>
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
      title: "Struktur Organisasi",
      kelas: "struktur",
      titleDesc: "Menginput Struktur Organisasi",
      titleIcon: "icon-collaboration",
      selectCuPath: "struktur",
      divisions: [],
      divisionOptions: [
        { id: 1, name: "PERANGKAT GM" },
        { id: 2, name: "ORGANISASI" },
        { id: 3, name: "USAHA" },
        { id: 4, name: "PEMBERDAYAAN" },
        { id: 5, name: "TATA KELOLA" },
        { id: 6, name: "TEKNOLOGI INFORMASI" },
      ],

      staffOptions: [],
      state: "",
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: "",
      modalSize: "",
      modalColor: "",
    };
  },

  created() {
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
        this.fetch();
      } else if (value == "fail") {
        this.modalContent = this.update.message;
      } else {
        this.modalContent = "";
      }
    },
  },

  methods: {
    addDivision() {
      this.divisions.push({
        divisi: "",
        managerId: "",
        staff: [],
      });
    },

    tambah() {
      this.$router.push({ name: struktur });
    },

    removeDivision(divisionIndex) {
      this.divisions.splice(divisionIndex, 1);
    },
    addStaff(divisionIndex) {
      this.divisions[divisionIndex].staff.push({ staf: "" });
    },
    removeStaff(divisionIndex, staffIndex) {
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

    saveOrganization() {
      this.$store.dispatch("struktur/store", [
        this.currentUser.id_cu,
        this.divisions,
      ]);
    },

    isDivisionSelected(divisionName, currentIndex) {
      return this.divisions.some(
        (division, index) =>
          index !== currentIndex && division.divisi.name === divisionName
      );
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
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      } else if (this.state == "updateTerbitkan") {
        this.$store.dispatch(
          this.kelas + "/updateTerbitkan",
          this.selectedItem.id
        );
      } else if (this.state == "updateUtamakan") {
        this.$store.dispatch(
          this.kelas + "/updateUtamakan",
          this.selectedItem.id
        );
      }
    },
  },

  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),

    ...mapGetters("struktur", {
      bidang: "dataS",
      managers: "managerS",
      staffOption: "staffS",
      update: "update",
      updateStat: "updateStat",
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
  font-weight: bolder;
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
