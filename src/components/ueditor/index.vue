<template>
  <div class="container">
    <div class="header">
      <div class="header-index">index</div>
      <div class="header-content">content</div>
      <div class="header-pics">pictures</div>
      <div class="header-operator">operator</div>
    </div>
    <div class="body">
      <div ref="ele" class="clearfix" v-for="(item,index) in tableData" :key="index">
        <div class="index">{{index}}</div>
        <div class="content" :style="{height:contentHeight[index]+'px'}"  v-text="item.content" @blur="(evt)=>handleBlur(evt,index)" contenteditable="true"></div>
        <div ref="pics" class="pics">
          <ul class="picList">
            <li v-for="(pitem,pindex) in item.pictures" :key="pindex">
              <img :src="pitem.url" alt="">
              <div class="detail">
                <span></span>
                <i @click="(evt)=>zoomPic(evt,index,pitem)" class="el-icon-zoom-in zoom"></i>
                <i @click="(evt)=>zoomPic(evt,index, pitem)" class="el-icon-delete picDel"></i>
              </div>
            </li>

          </ul>
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" class="loadpic" :show-file-list="false">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

        </div>
        <div class="operator">
          <div>
            <el-button @click="add(index)" type="text">+添加</el-button>
            <el-button @click="moveUp(index)" type="text">上移</el-button>
          </div>
          <div>
            <el-button @click="del(index)" type="text">-删除</el-button>
            <el-button @click="moveDown(index)" type="text">下移</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
}
.clearfix:after {
    display: table;
    content: " ";
    clear: both;
}
.header > ul > li {
  float: left;
}
.header>div{
  /* display: inline-block; */
  float: left;
  border: 1px solid;
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;  
}
.header-index {
  width: 10%;
}
.header-pics {
  width: 210px;
}
.header-operator {
  width: 150px;
}
.body>div>div{
  float: left;
}
.header-content {
  width: calc(90% - 210px - 150px);
}
.row {
  border: 1px solid;
}
.index {
  width: 10%;
  float: left;
}
.pics {
  width: 210px;
  height: 100%;
  float: left;
  min-height: 60px;
  background-color: pink;
}
.content {
  width: calc(90% - 210px - 150px);
  background-color: green;
  word-break: break-all;
  word-wrap: break-word;
  text-overflow: clip;
}
.operator {
  width: 150px;
  height: 100%;
  /* display: inline-block; */
  background: blue;
  float: left;
  display: table-cell;
}
.container {
  width: 800px;
  padding: 0px;
  border: 1px solid;
  position: relative;
}
.body {
  width: 100%;
}
.header {
  width: 100%;
  height: 20px;
}
.picDel {
  color: white;
  position: absolute;
  top: 25px;
  right: 0px;
  width: 25px;
  /* background: red; */
}
.detail {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.detail > i {
  display: none;
  width: 20px;
  height: 20px;
}
.detail:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.detail:hover i {
  display: inline-block;
}
.zoom {
  color: white;
  position: absolute;
  z-index: 100;
  left: 5px;
  top: 25px;
}
.picList {
  padding: 0;
  margin: 0;
}
.picList > li {
  width: 60px;
  height: 60px;
  padding: 0px;
  margin: 0px;
  position: relative;
  float: left;
  margin: 1px;
  list-style-type: none;
}
.picList > li > img {
  display: inline-block;
  width: 60px;
  height: 60px;
  /* border: 1px solid; */
  box-sizing: border-box;
}
.picList > li:hover {
  cursor: pointer;
}
.loadpic {
  margin: 2px;
  width: 60px !important;
  height: 60px !important;
  line-height: 60px !important;
  /* display: inline-block; */
  float: left;
  border: 1px solid;
}
.el-upload-list__item {
  width: 60px !important;
  height: 60px !important;
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
      contentHeight:[60],
      tableData: [
        {
          content: "1111",
          pictures: [
            { url: "https://www.baidu.com/img/baidu_jgylogo3.gif" },
            { url: "https://www.baidu.com/img/baidu_jgylogo3.gif" },
            { url: "https://www.baidu.com/img/baidu_jgylogo3.gif" },
            { url: "https://www.baidu.com/img/baidu_jgylogo3.gif" },
            { url: "https://www.baidu.com/img/baidu_jgylogo3.gif" }
          ]
        }
      ]
    };
  },
  mounted() {
    this.$nextTick((index) => {
        this.contentHeight=[];
        var items = this.$refs.pics;
        items.forEach(e=>{
          this.contentHeight.push(e.clientHeight);
        });
    });
  },
  beforeUpdate(){
  
        // this.contentHeight=[];
        // var items = this.$refs.ele;
        // items.forEach(e=>{
        //   this.contentHeight.push(e.clientHeight);
        // });
        // console.log(this.contentHeight);
  },
  methods: {
    noPadding({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        console.log("noPadding");
        return "noPadding";
      }
    },
    zoomPic(e, index, item) {
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

