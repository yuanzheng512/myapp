<template>
    <div>
        <span>总共 : {{tableData.length}} 条</span>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                type="index"
                label="ID"
                align="center"
                >
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                align="center"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                align="center"
                label="姓名"
                >
            </el-table-column>
            <el-table-column
                align="center"
                prop="address"
                label="地址">
        </el-table-column>
        <el-table-column
        
                align="center"
                label="删除">
                <template slot-scope="scope">
                 <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                   >删除</el-button>
                </template>
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const {mapGetters,mapActions} = createNamespacedHelpers("home");
  export default {
    name:'tables',
    // props:['tableData'],
    data() {
      return {
      }
    },
    computed:{
        ...mapGetters(['tableData']),
    },
    methods:{
        handleDelete(index, row){
        }
    },
    created(){
      
       
    },
    updated(){
        console.log("update tables");
    },
    beforeCreate(){
        console.log("beforeCreate tables");
    },
    beforeMount(){
        console.log("beforeMount tables");
    },
    mounted(){
        console.log("update tables");
    },
    beforeUpdate(){
        console.log("beforeUpdate tables");
    },
  }
</script>
