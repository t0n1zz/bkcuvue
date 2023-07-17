<template>
  <div class="organization-container">
    <div class="organization-structure">
      <div class="node">
        <h2>{{ organization.generalManager.name }}</h2>
        <div v-for="division in organization.divisions" :key="division.id" class="node">
          <h3>{{ division.name }}</h3>
          <div v-for="manager in division.managers" :key="manager.id" class="node">
            <h4>{{ manager.name }}</h4>
            <div v-for="staff in manager.staff" :key="staff.id" class="node">
              <h5>{{ staff.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationStructure',
  data() {
    return {
      organization: {
        generalManager: {
          name: 'John Doe',
        },
        divisions: [
          {
            id: 1,
            name: 'Division A',
            managers: [
              {
                id: 1,
                name: 'Manager A1',
                staff: [
                  { id: 1, name: 'Staff A1' },
                  { id: 2, name: 'Staff A2' },
                ],
              },
              {
                id: 2,
                name: 'Manager A2',
                staff: [
                  { id: 3, name: 'Staff A3' },
                  { id: 4, name: 'Staff A4' },
                ],
              },
            ],
          },
          {
            id: 2,
            name: 'Division B',
            managers: [
              {
                id: 3,
                name: 'Manager B1',
                staff: [
                  { id: 5, name: 'Staff B1' },
                  { id: 6, name: 'Staff B2' },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.organization-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.organization-structure {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.node {
  margin-left: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
}

.node h2,
.node h3,
.node h4,
.node h5 {
  margin: 0;
  padding: 5px 0;
  font-weight: bold;
  color: #333;
}

.node h2 {
  font-size: 20px;
}

.node h3 {
  font-size: 18px;
}

.node h4 {
  font-size: 16px;
}

.node h5 {
  font-size: 14px;
}
</style>
