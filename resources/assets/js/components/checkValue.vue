<template>
    <div style="display:inline">
      <span v-if="value" style="display:inline">
        <span v-if="valueType == 'trim'" style="display:inline">
          <truncate action-class="badge bg-blue" clamp="selengkapnya >" :length="trimLength" less="< kembali" :text="frontText + ' ' +value" style="display:inline;"></truncate>
        </span>
        <span v-else-if="valueType == 'currency'" style="display:inline">{{frontText}} {{ value | currency('',0,{ thousandsSeparator: '.'}) }}</span>
        <span v-else-if="valueType == 'percentage'" style="display:inline">{{frontText}} {{ value | percentage(2) }}</span>
        <span v-else style="display:inline">{{frontText}} {{value}}</span>
      </span>
      <span v-else style="display:inline">{{frontText}} {{empty}}</span>
    </div>
</template>

<script type="text/javascript">
  import truncate from 'vue-truncate-collapsed';

  export default {
    components: {
			truncate
		},
    props: {
        value: {
          default: ''
        },
        frontText:{
          default: ''
        },
        trimLength:{
          default: 50
        },
        valueType:{
          default: 'trim'
        },
        empty:{
          default: '-'
        }
    }
  }
</script>