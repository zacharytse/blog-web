<template>
  <div class="article">
    <h1 class="title">{{ article_title }}</h1>
    <h5 class="flag">
      Posted on {{ article_time }} | In java | visitors 75 | 本文阅读量80次
    </h5>
    <div class="content" v-html="article_content"></div>
  </div>
</template>
<script>
export default {
  props: ["title", "time", "content"],
  data() {
    return {
      article_title: this.title,
      article_time: this.time,
      article_content: this.content,
    };
  },
  watch: {
    article_title(newVal) {
      this.$emit("update", newVal);
    },
    article_time(newVal) {
      this.$emit("update", newVal);
    },
    article_content(newVal) {
      this.$emit("update", newVal);
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