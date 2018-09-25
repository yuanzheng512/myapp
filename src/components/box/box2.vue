<template>
    <div>
        <span>this is box2 : {{oid}}</span>
        <!-- <div>{{data}}</div> -->
        <!-- <div class="msg">{{msgTemp}}</div> -->
        <box3 :title="'my baby'" :oid="oid"></box3>
    </div>
</template>
<script>
import box3 from "./box3";
export default {
    name:"box2",
    data(){
        return {
            data:"问题"
        }
    },
    props:['msg','oid'],
    components:{
        box3
    },
    methods:{
        quest(value){
            console.log(value);
            this.data += value;
        }
    },
    computed:{
        msgTemp(){
            return this.msg +"=====";
        }
    },
    watch:{
        msgTemp(){
            return this.msg +"=====";
        }
    }
}
</script>
<style scoped>
    .msg{
        background-color: pink;
    }
</style>
