<template>
<div>
  <h1>{{msg}}</h1>
  <box1></box1>
</div>
</template>
<script>
import box1 from "./box/box1";
    export default{
        data(){
            return {
                msg:'Home'
            }
        },
        components:{
            box1
        }
    }
</script>