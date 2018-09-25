<template>
    <div>
          <el-button
                    size="mini"
                    type="danger"
                    @click="handleClick"
                 >更新 (4) oid</el-button>
                 <!-- <span id="oTitle">{{oid}}</span> -->
        <tabs></tabs>
    </div>
</template>
<script>
import tabs from '../tabs';
import { createNamespacedHelpers } from 'vuex'
const {mapGetters,mapActions} = createNamespacedHelpers("home");
export default {
    name:"box3",
    props:['oid','historykey'],
    data(){
        return{
           i :50,
           mount:0,
           update:0,
        }
    },
    created(){
        this.$nextTick(()=>{
        let oTitle = document.querySelector("#oTitle");

        });
    },
    mounted(){
        console.log("mounted : ",this.mount+=1);
    },
    components:{
        tabs,
    },
    watch:{
      oid:function(newValue,oldValue){
            if(newValue != oldValue ){
                this.initDataList();
            }
        },
        historykey:function(newValue,oldValue){
            console.log(newValue);
            if(newValue != oldValue ){
                this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been re-rendered
                })
            }
        }

    },
    methods:{
        ...mapActions(['setoid','initDataList']),
        handleClick(){
            this.setoid(this.i+=50);
        },
      
    },
    computed:{
       
    },
    updated(){
        this.initDataList(this);
        console.log("updated : ",this.update+=1);
    },

}
</script>

