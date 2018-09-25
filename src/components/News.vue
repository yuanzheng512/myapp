<template>
<div>
    <!-- <Header @upup="chg" msg="bitch"></Header> -->
  <h1>{{title}}</h1>
 
  <input v-bind:class="{'btn':true, 'btn-danger':true}"  type="button" value="click me" @click="change">
  <ul>
      <li v-for='(val,key) in list' :key="key">{{val}}</li>
  </ul>
</div>
</template>
<script>
 var _ = require("lodash");

 import Header from "./Header";
    export default{
        data(){
            return {
                title:'this is my first app',
                list:[]
            }
        },
        created(){
        
             this.fetch("/news/list",1).then(res=>{
                this.list = this.list.concat(res);
             });

        },
        methods:{
          change(){
          },
          chg(msg){
              this.title = msg;
          }
        },
        components: {
            Header
        },
        beforeCreate(){
        },
        beforeMount(){
        },
        mounted(){
        },
        beforeUpdate(){
        },
        updated(){
        }
    }
</script>
<style>
li{
    list-style: none;
    text-align: left;
}
</style>
