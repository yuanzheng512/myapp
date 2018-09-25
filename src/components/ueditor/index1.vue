<template>
    <div class="container">
        <el-table :cell-class-name="noPadding" :data="tableData" border style="width: 100%">
            <el-table-column label="序号" type="index" width="100">
            </el-table-column>
            <el-table-column label="内容" :resizable="false">
                <template slot-scope="scope">
                    <div class="content" v-text="scope.row.content" @blur="(evt)=>handleBlur(evt,scope.$index)" contenteditable="true"></div>
                </template>
            </el-table-column>
            <el-table-column   prop="picture" width="215" :resizable="false" label="图片">
                <template  slot-scope="scope">
                    <div ref="ele">
                      
                    
                    <ul  class="picList">
                      <li v-for="(item,index) in scope.row.pictures" :key="index">
                        <img :src="item.url" alt="">
                        <div class="detail">
                          <span></span>
                          <i @click="(evt)=>zoomPic(evt,scope.$index,index,item)" class="el-icon-zoom-in zoom"></i>
                          <i @click="(evt)=>zoomPic(evt,scope.$index,index, item)" class="el-icon-delete picDel"></i>
                        </div>
                      </li>
                     
                    </ul>
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        class="loadpic"
                        :show-file-list="false" >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="operator" :width="150" :resizable="false" label="操作">
                <template slot-scope="scope">
                    <div>
                        <el-button @click="add(scope.$index)" type="text">+添加</el-button>
                        <el-button @click="moveUp(scope.$index)" type="text">上移</el-button>
                    </div>
                    <div>
                        <el-button @click="del(scope.$index)" type="text">-删除</el-button>
                        <el-button @click="moveDown(scope.$index)" type="text">下移</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
.noPadding{
  padding: 0px;
}
.picDel{
  color: white;
  position: absolute;
  top: 25px;
  right: 0px;
  width: 25px;
  /* background: red; */
}
.detail{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.detail>i{
  display: none;
  width: 20px;
  height: 20px;
}
.detail:hover{
  background-color:rgba(0,0,0,0.4);
}
.detail:hover i{
  display: inline-block;
}
.zoom{
  color: white;
  position: absolute;
  z-index: 100;
  left: 5px;
  top: 25px
}
.picList{
  padding: 0;
  margin: 0;
}
.picList>li{
  width: 60px;
  height: 60px;
  padding: 0px;
  margin: 0px;
  position: relative;
  float: left;
  margin: 1px;
  list-style-type:none
}
.picList>li>img{
  display: inline-block;
  width: 60px;
  height: 60px;
  /* border: 1px solid; */
  box-sizing:border-box;
}
.picList>li:hover{
  cursor: pointer;
}
.loadpic{
    margin: 2px;
    width: 60px !important;
    height: 60px !important;
    line-height: 60px !important;
    /* display: inline-block; */
    float: left;
    border: 1px solid;
}
.el-upload-list__item{
    width: 60px !important;
    height: 60px !important;
    
}
.content {
  width: 100%;
  height: 100%;
  text-align: left;
}
.content:focus {
  outline: none;
}
</style>

<script>
export default {
  name: "editor",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      tableData: [
        {
          content: "1111",
          pictures: [
            {url:'https://www.baidu.com/img/baidu_jgylogo3.gif'},
            {url:'https://www.baidu.com/img/baidu_jgylogo3.gif'},
            {url:'https://www.baidu.com/img/baidu_jgylogo3.gif'},
            {url:'https://www.baidu.com/img/baidu_jgylogo3.gif'},
            {url:'https://www.baidu.com/img/baidu_jgylogo3.gif'},
            
            ]
        }
      ]
    };
  },
  mounted(){
    this.$nextTick(()=>{
      
      // console.log( this.$refs.ele instanceof );
      setTimeout(()=>{

        var st =  this.$refs.ele.offsetWidth;
      console.log(st);
      },5000);
    
    });
  },
  methods: {
    noPadding({row, column, rowIndex, columnIndex}){
      if(columnIndex == 1){
        console.log("noPadding")
        return "noPadding"
      }
    },
    zoomPic(e,index,picIdex,item){
      this.dialogImageUrl = item.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    saveContent(index, content) {},
    handleBlur(e, index) {
      let content = e.target.innerText;
      if (this.tableData[index].content !== content) {
        this.tableData[index].content = content;
        console.log(content);
        this.saveContent(index, content);
      }
    },
    add(index) {
      this.tableData.splice(index + 1, 0, {
        content: "",
        pictures: []
      });
    },
    del(index) {
      if (index == 0 && this.tableData.length == 1) {
        return;
      }
      this.tableData.splice(index, 1);
    },
    moveUp(index) {
      if (this.tableData.length > 1 && index !== 0) {
        this.swapItems(this.tableData, index, index - 1);
      }
    },
    moveDown(index) {
      if (this.tableData.length > 1 && index !== this.tableData.length - 1) {
        this.swapItems(this.tableData, index, index + 1);
      }
    },
    swapItems(arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    }
  }
};
</script>

