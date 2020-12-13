<template>
  <div>category</div>
</template>
<script>
export default {
  mounted() {
    this.$axios
      .get("/BLOG-SERVER/articles/title?title=teststras")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>