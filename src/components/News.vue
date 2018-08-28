<template>
<div>
    <Header @upup="chg" msg="bitch"></Header>
  <h1>{{title}}</h1>
 
  <input v-bind:class="{'btn':true, 'btn-danger':true}"  type="button" value="click me" @click="change">
  <ul>
      <li v-for='(val,key) in list' :key="key">{{val}} {{key}}</li>
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
                list:['apple','banana','orange']
            }
        },
        methods:{
          change(){
             this.list.push("purse");
          },
          chg(msg){
              this.title = msg;
          }
        },
        components: {
            Header
        },
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            console.log("beforeMount");
        },
        mounted(){
            console.log("mounted");
        },
        beforeUpdate(){
            console.log("beforeUpdate");
        },
        updated(){
            console.log("updated");
        }
    }
</script>
<style>
li{
    list-style: none;
    text-align: left;
}
</style>
