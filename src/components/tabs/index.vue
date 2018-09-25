<template>
    <div class="main-container">
        <el-tabs :lazy=true v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                <tables></tables>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import tables from './tables';
export default {
      data() {
        return {
         activeName: 'first',
         tableData:[]
        }
      },
      created(){
      },
      components:{
          tables
      },
    methods: {
      handleClick(tab, event) {
      },
    }
}
</script>
<style scoped>
  
</style>


