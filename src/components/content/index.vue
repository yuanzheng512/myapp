<template>
    <div>
        <p v-for="item in items" :key="item.id">
            {{item.message}}
        </p>
        <button class="btn" @click="btn1Click()">点我试试</button><br/>
        <button class="btn" @click="btn2Click()">动态赋值</button><br/><br/>
        <button class="btn" @click="btn3Click()">为data新增属性</button>
        <span>{{msg.code}}</span>
    </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      i:0,
      msg:{
          value:"",
          code:0,
      },
      items: [
        { message: "Test one", id: "1" },
        { message: "Test two", id: "2" },
        { message: "Test three", id: "3" }
      ]
    };
  },
  methods: {
    btn1Click: function() {
      this.items.push({ message: "动态新增" }); //为data中的items动态新增一条数据
    },
    btn2Click: function() {
      //Vue methods中的this 指向的是Vue的实例，这里可以直接在this中找到items
    //   this.$set(this.items, 0, { message: "Change Test"+this.i++, id: "10" });
    this.items[0]={ message: "Change Test"+this.i, id: "10" };
    this.msg.code = this.i++;
    },
    btn3Click: function() {
      var itemLen = this.items.length;
      this.$set(this.items, itemLen, { message: "Test add attr", id: itemLen });
    }
  }
};
</script>
