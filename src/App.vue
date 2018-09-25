<template>
  <div id="app">
    <!-- <img width="200px" height="150px" src="./assets/logo.png">
    <loading></loading>
    <div>
      <router-link to="/home">主页</router-link>
      <router-link to="/user">用户</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>
          <router-view></router-view>
    </div> -->
    <!-- <u-editor></u-editor> -->
    <!-- <span>{{msg}}</span> -->
    <!-- <news></news> -->
    <!-- <contents></contents> -->
    <!-- <home></home> -->
    <!-- <upload></upload> -->
    <Content></Content>
  </div>
</template>



<script>
import News from './components/news';
import UEditor from './components/ueditor';
import EsAnimation from './components/transition';
import contents from './components/Dialog';
import Home from './components/Home';
import  Upload from './components/upload';
import  Content from './components/content';

export default {
  name: 'App',
  data(){
    return{
      msg:''  
    }
  },
  created(){
    let datas = [JSON.stringify({code:1,content:"湖南"}),JSON.stringify({code:2,content:'益阳'}),JSON.stringify({code:3,content:'南县'}),null,null]
    this.msg = datas.filter(ele=>{
      return ele;
    }).map(ele=>{
      console.log(ele);
      // return ele.content;
      return JSON.parse(ele).content;
    }).join("/");
  // console.log(msg);
 },
  components: {
    UEditor,
    News,
    EsAnimation,
    contents,
    Home,
    Upload,
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
