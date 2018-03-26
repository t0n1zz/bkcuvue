<template>
    <div>
      <span v-if="value">
        <span v-if="valueType == 'trim'">
          <truncate clamp="...selengkapnya" :length="trimLength" less="...kembali" :text="frontText + ' ' +value"></truncate>
        </span>
        <span v-else-if="valueType == 'currency'">{{frontText}} {{ value | currency('',0,{ thousandsSeparator: '.'}) }}</span>
        <span v-else-if="valueType == 'percentage'">{{frontText}} {{ value | percentage }}</span>
        <span v-else>{{frontText}} {{value}}</span>
      </span>
      <span v-else>{{frontText}} {{empty}}</span>
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