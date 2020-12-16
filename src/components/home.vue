<template>
  <!-- <div class="article">
    <h1 class="title">{{title}}</h1>
    <h5 class="flag">
      Posted on {{time}} | In java | visitors 75 | 本文阅读量80次
    </h5>
    <div class="content" v-html="content">

    </div>
  </div> -->
  
  <Article :article_title="title" :article_time="time" :article_content="content">
  </Article>
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
  methods: {
    setData(data) {
      if(data == null) {
        this.title = '404'
        return;
      }
      this.title = data.title;
      this.time = data.time;
      this.content = data.article
    }
  },
  mounted() {
    this.$axios
      .get("/BLOG-SERVER/articles/newest")
      .then(response=>(
          /* let article_data = response.data.data,
          if(article_data == null) {
              _this.title = '404'
              return
          } */
          /* this.title = response.data.data.title,
          this.time = response.data.data.time,
          this.content = response.data.data.article */
          this.setData(response.data.data))) 
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
