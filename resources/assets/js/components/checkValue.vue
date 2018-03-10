<template>
    <div>
      <span v-if="value">
        <span v-if="isTrim">
          {{frontText}} <truncate clamp="...selengkapnya" :length="trimLength" less="...kembali" :text="value"></truncate>
        </span>
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
        isTrim:{
          default: true
        },
        empty:{
          default: '-'
        }
    }
  }
</script>