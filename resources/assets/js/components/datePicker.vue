<template>
    <DatePicker  @change="onChanged" class="w-100" v-model="time" format="DD-MM-YYYY" value-type="format" placeholder="Pilih Tanggal" :editable="true"></DatePicker>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/id';
import moment from 'moment';
export default {
    props:['defaultDate'],
    components:{
        DatePicker
    },
    data() {
        return {
            time: '',
            dateVal:''
        }
    },
    mounted(){
        if(this.defaultDate ==''){
            const today = new Date();
            const date = today.getDate() +'-0'+(today.getMonth()+1)+ '-' + today.getFullYear();
            this.time = date;
            this.dateVal = moment(this.time, "DD-MM-YYYY").format("YYYY-MM-DD");
            this.$emit('dateSelected', this.dateVal );
        }else{
           this.time = moment(this.defaultDate, "YYYY-MM-DD").format("DD-MM-YYYY"); 
           this.$emit('dateSelected', this.time );
        }
    },
    watch: {
        defaultDate: function(newVal, oldVal) {
            this.time = moment(this.defaultDate, "YYYY-MM-DD").format("DD-MM-YYYY");
        }
    },
    methods: {
    onChanged (event) {
      this.dateVal = moment(this.time, "DD-MM-YYYY").format("YYYY-MM-DD");
      this.$emit('dateSelected', this.dateVal );
    },
  },
}
</script>