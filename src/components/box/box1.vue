<template>
    <div>
        <span>this is box1 ' oid :{{oid}}</span>
        <div></div>
        <box2 :oid="oid" ></box2>
    </div>
</template>
<script>
import box2 from "./box2";
import { createNamespacedHelpers } from 'vuex'
const {mapGetters,mapActions} = createNamespacedHelpers("home");
export default {
    name:"box1",
    data(){
        return {
            sayhello:"1",
        }
    },
    computed:{
        msg(){
            return this.sayhello+"....."+Date.now();      
        },
        ...mapGetters(['oid']),
    },
   
    methods:{
     
    },
    components:{
        box2
    }
}
</script>