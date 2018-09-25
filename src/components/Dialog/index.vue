<template>
    <div id="container">
         <el-button
                    size="mini"
                    type="danger"
                    @click="handle"
                   >Click me</el-button>
        <div id="box" :style="{height:height+'px'}" ></div>
        <tabs></tabs>
    </div>
</template>
<script>
import tabs from '../tabs';
export default {
    name:'dialog',
    data(){
        return{
        height:50,
        }
    },
    methods:{
        handle(){
            this.height+=50;
        }
    },
    components:{
        tabs,
    }
    
}
</script>

<style scoped>
    #container{
        position: relative;
    }
    #box{
        background:pink;
        width: 100%;
        height: 20px;
    }
</style>


