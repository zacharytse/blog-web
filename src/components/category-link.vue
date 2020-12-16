<template>
  <div>
    <el-link type="info" href="#" class="category-specify">
      {{ tag }}({{ count }})
    </el-link>
    <br />
  </div>
</template>
<script>
export default {
  props: ["need_tag"],
  watch: {
    need_tag: {
      handler(newVal, old) {
        this.tag = newVal.tag;
        this.count = newVal.count;
      },
      immediate:true
    },
  },
  data() {
    return {
      tag: "",
      count: "",
    };
  },
};
</script>
<style scoped>
.category-specify {
  margin-left: 10%;
  padding-top: 5%;
  font-size: 20px;
}
</style>