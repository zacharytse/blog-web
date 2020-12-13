<template>
  <!-- <div class="article">
    <h1 class="title">{{title}}</h1>
    <h5 class="flag">
      Posted on {{time}} | In java | visitors 75 | 本文阅读量80次
    </h5>
    <div class="content" v-html="content">

    </div>
  </div> -->
  <Article :title="title" :time="time" :content="content"></Article>
</template>

<script>
import Article from './article.vue'

export default {
  data() {
      return {
          title : '',
          time : '',
          content: '',
      }
  },
  components: {
      Article,
  },
  mounted() {
    let _this = this;
    this.$axios
      .get("/BLOG-SERVER/articles/newest")
      .then(function (response) {
          let article_data = response.data.data;
          if(article_data == null) {
              _this.title = '404'
              return
          }
          _this.title = article_data.title
          _this.time = article_data.time
          _this.content = article_data.article
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
