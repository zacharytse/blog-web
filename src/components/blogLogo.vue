<template>
  <div class="blog-logo-div">
    <h3 class="blog-logo-text">练习用的博客</h3>
  </div>
</template>
<script>
import {slideUpReturn} from '../assests/js/animation'
export default {
  methods: {
    show: function (event) {
      slideUpReturn('.blog-logo-text')
    },
  },
  mounted() {
    this.show();
  },
};
</script>
<style scoped>
.blog-logo-text {
  height: 100%;
  color: aliceblue;
  padding-top: 60%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font: 20px Extra large;
}
.blog-logo-div {
  background-color: #222222;
  height: 200px;
  width: 100%;
  justify-content: center; /*在主轴上居中*/
  align-items: center; /*在交叉轴上居中*/
  align-content: center;
  display: flex;
  display: -webkit-flex; /* Safari */
}
</style>