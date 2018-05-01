<template>
    <div>
			<!-- datetime -->
      <cleave 
        :value="searchQuery1"
        @input="$emit('update:searchQuery1', $event.target.value)"
        class="form-control" 
        :raw="false" 
        :options="cleaveOption.dateTime" 
        placeholder="YYYY-MM-DD HH:MM:SS" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'datetime'"></cleave>
      <span class="input-group-addon" v-if="searchColumnType === 'datetime' && params.search_operator === 'between'">sampai</span>
      <cleave 
        :value="searchQuery2"
        @input="$emit('update:searchQuery2', $event.target.value)" 
        class="form-control" 
        :raw="false" 
        :options="cleaveOption.dateTime" 
        placeholder="YYYY-MM-DD HH:MM:SS" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'datetime' && params.search_operator === 'between'"></cleave>

      <!-- date -->
      <cleave 
        :value="searchQuery1"
        @input="$emit('update:searchQuery1', $event.target.value)" 
        class="form-control" 
        :raw="false" 
        :options="cleaveOption.date" 
        placeholder="YYYY-MM-DD" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'date'"></cleave>
      <span class="input-group-addon" v-if="searchColumnType === 'date' && params.search_operator === 'between'">sampai</span>
      <cleave 
        :value="searchQuery2"
        @input="$emit('update:searchQuery2', $event.target.value)" 
        class="form-control" 
        :raw="false" 
        :options="cleaveOption.date" 
        placeholder="YYYY-MM-DD" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'date' && params.search_operator === 'between'"></cleave>

      <!-- number -->
      <cleave 
        :value="searchQuery1"
        @input="$emit('update:searchQuery1', $event.target.value)"
        class="form-control" 
        :options="cleaveOption.number" 
        placeholder="0-9" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'number'"></cleave>
      <span class="input-group-addon" v-if="searchColumnType === 'number' && params.search_operator === 'between'">sampai</span>
      <cleave 
        :value="searchQuery2"
        @input="$emit('update:searchQuery2', $event.target.value)"
        class="form-control" 
        :options="cleaveOption.number" 
        placeholder="0-9" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'number' && params.search_operator === 'between'"></cleave>

      <!-- numeric -->
      <cleave 
        :value="searchQuery1"
        @input="$emit('update:searchQuery1', $event.target.value)"
        class="form-control" 
        :options="cleaveOption.numeric" 
        placeholder="999.999.999,99" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'numeric'"></cleave>
      <span class="input-group-addon" v-if="searchColumnType === 'numeric' && params.search_operator === 'between'">sampai</span>
      <cleave 
        :value="searchQuery2"
        @input="$emit('update:searchQuery2', $event.target.value)"
        class="form-control" 
        :options="cleaveOption.numeric" 
        placeholder="999.999.999,99" 
        :disabled="itemDataStat === 'loading'" 
        v-if="searchColumnType === 'numeric' && params.search_operator === 'between'"></cleave>
        
      <!-- string -->
      <input 
        type="text" 
        class="form-control" 
        placeholder="Masukkan kata kunci pencarian" 
        :value="searchQuery1"
        @input="$emit('update:searchQuery1', $event.target.value)"
        :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string'">
      <span class="input-group-addon" v-if="searchColumnType === 'string' && params.search_operator === 'between'">sampai</span>
      <input 
        type="text" 
        class="form-control" 
        placeholder="Masukkan kata kunci pencarian" 
        :value="searchQuery2" 
        @input="$emit('update:searchQuery2', $event.target.value)"
        :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string' && params.search_operator === 'between'">
    </div>
</template>

<script type="text/javascript">
  import Cleave from 'vue-cleave-component';

  export default {
    props: ['searchColumnType','searchQuery1', 'searchQuery2','itemDataStat','params'],
    components: {
      Cleave
    },
    data(){
      return {

      }
    },
    methods: {
    }
  }
</script>