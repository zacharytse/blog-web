<template>
  <div class="article">
    <h1 class="title">{{ title }}</h1>
    <h5 class="flag">
      Posted on {{ time }} | In java | visitors 75 | 本文阅读量80次
    </h5>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
import ShowDown from "showdown";
let converter = new ShowDown.Converter();
export default {
  props: ["article_title", "article_time", "article_content"],
  data() {
    return {
      title: "",
      time: "",
      content: "",
    };
  },
  watch: {
    article_title(newVal) {
      this.title = newVal;
    },
    article_time(newVal) {
      this.time = newVal;
    },
    article_content(newVal) {
      let html = converter.makeHtml(newVal);
      this.content = html;
    },
  },
};
</script>
<style scoped>
.title {
  margin-top: 20px;
  text-align: center;
  color: #333333;
  word-wrap: break-word;
}
.flag {
  text-align: center;
  color: #555555;
}
.content {
  margin: 40px;
  width: 100%;
}
</style>