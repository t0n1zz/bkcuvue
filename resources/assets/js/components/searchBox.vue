<template>
  <div>
    <!-- datetime -->
    <cleave 
      v-model="searchQ1"
      @input="$emit('update:searchQuery1', searchQ1)"
      class="form-control" 
      :raw="false" 
      :options="cleaveOption.dateTime" 
      placeholder="YYYY-MM-DD HH:MM:SS" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'datetime'"></cleave>
    <span class="input-group-addon" v-if="searchColumnType === 'datetime' && params.search_operator === 'between'">sampai</span>
    <cleave 
      v-model="searchQ2"
      @input="$emit('update:searchQuery2', searchQ2)" 
      class="form-control" 
      :raw="false" 
      :options="cleaveOption.dateTime" 
      placeholder="YYYY-MM-DD HH:MM:SS" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'datetime' && params.search_operator === 'between'"></cleave>

    <!-- date -->
    <cleave 
      v-model="searchQ1"
      @input="$emit('update:searchQuery1', searchQ1)"
      class="form-control" 
      :raw="false" 
      :options="cleaveOption.date" 
      placeholder="YYYY-MM-DD" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'date'"></cleave>
    <span class="input-group-addon" v-if="searchColumnType === 'date' && params.search_operator === 'between'">sampai</span>
    <cleave 
      v-model="searchQ2"
      @input="$emit('update:searchQuery2', searchQ2)"
      class="form-control" 
      :raw="false" 
      :options="cleaveOption.date" 
      placeholder="YYYY-MM-DD" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'date' && params.search_operator === 'between'"></cleave>

    <!-- number -->
    <cleave 
      v-model="searchQ1"
      @input="$emit('update:searchQuery1', searchQ1)"
      class="form-control" 
      :options="cleaveOption.number" 
      placeholder="0-9" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'number'"></cleave>
    <span class="input-group-addon" v-if="searchColumnType === 'number' && params.search_operator === 'between'">sampai</span>
    <cleave 
      v-model="searchQ2"
      @input="$emit('update:searchQuery2', searchQ2)"
      class="form-control" 
      :options="cleaveOption.number" 
      placeholder="0-9" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'number' && params.search_operator === 'between'"></cleave>

    <!-- numeric -->
    <cleave 
      v-model="searchQ1"
      @input="$emit('update:searchQuery1', searchQ1)"
      class="form-control" 
      :options="cleaveOption.numeric" 
      placeholder="999.999.999,99" 
      :disabled="itemDataStat === 'loading'" 
      v-if="searchColumnType === 'numeric'"></cleave>
    <span class="input-group-addon" v-if="searchColumnType === 'numeric' && params.search_operator === 'between'">sampai</span>
    <cleave 
      v-model="searchQ2"
      @input="$emit('update:searchQuery2', searchQ2)"
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
      @keyup.enter="submit"
      :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string'">
    <span class="input-group-addon" v-if="searchColumnType === 'string' && params.search_operator === 'between'">sampai</span>
    <input 
      type="text" 
      class="form-control" 
      placeholder="Masukkan kata kunci pencarian" 
      :value="searchQuery2" 
      @input="$emit('update:searchQuery2', $event.target.value)"
      @keyup.enter="submit"
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
        searchQ1: '',
        searchQ2: '',
        cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
          number: {
            numeral: true,
            numeralThousandsGroupStyle: 'none',
            numeralDecimalScale: 0,
            stripLeadingZeroes: false
          },
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          },
          dateTime:{
            blocks: [4,2,2,2,2,2],
            delimiters: ['-','-',' ',':',':'],
            delimiterLazyShow: true
          }
        },
      }
    },
    methods: {
      submit(){
        this.$emit('fetch');
      }
    }
  }
</script>