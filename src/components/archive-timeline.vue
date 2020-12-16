<template>
  <div>
    <div class="link-head-div" v-show="data.timestamp.length == 0">
      <span style="font-size: 23px">{{ data.content }}</span>
    </div>
    <div class="link-div" v-show="data.timestamp.length != 0">
      <el-link :underline="false" type="info">
        <span style="font-size: 13px;margin-left:24px">{{ data.timestamp.substring(5) }} </span
        >&nbsp;&nbsp;<span style="font-size: 18px;" class="link-content">{{
          data.content
        }}</span>
      </el-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["line_data"],
  data() {
    return {
      data: [],
    };
  },
  watch: {
    line_data: {
      handler(newVal, old) {
        this.data = newVal;
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.link-head-div {
  margin-bottom: 30px;
  margin-left:28px;
}
.link-div {
  width:100%;
  height: 30px;
  border-bottom: 1px dashed #cccccc;
}
.link-content:hover {
  color: black;
}
.link-div:hover {
  border-bottom: 1px dashed black;
}
</style>