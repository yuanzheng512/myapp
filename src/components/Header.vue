<template>
  <h1 @click="up">{{msg}}</h1>
</template>
<script>
    export default{
        props:['msg'],
        methods:{
            up(){
                this.$emit('upup','hhhhhhhhh');
            }
        }
    }
</script>