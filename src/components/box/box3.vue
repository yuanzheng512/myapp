<template>
    <div>
           <h1>{{title}}</h1>
          <el-button
                    size="mini"
                    type="danger"
                    @click="handleClick"
                 >更新oid</el-button>
          <el-button
                    size="mini"
                    type="danger"
                    @click="handleClick2"
                 >更新 (2) oid</el-button>
                 <br/>
    <box4 :oid="oid" :historykey="historykey" style="marginTop:10px"></box4>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import box4 from './box4';
const {mapGetters,mapActions} = createNamespacedHelpers("home");
export default {
    name:"box3",
    // props:['oid'],
    props:{
        title:{
            type:String,
            default:'this is title',
            required: true
        }
    },
    data(){
        return{
           i :10,
           historykey:Date.now(),
        }
    },
    components:{
        box4
    },
    watch:{
    },
    methods:{
        ...mapActions(['setoid','initDataList']),
        handleClick(){
            this.setoid(this.i+=10);
        },
        handleClick2(){
            this.historykey = Date.now();
        }
    },
    computed:{
        ...mapGetters(['bookList','oid']),
    },
    mounted(){
    }
}
</script>

