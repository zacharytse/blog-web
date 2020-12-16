<template>
  <div>
    <el-pagination
      class="paging"
      layout="prev,pager,next"
      :total="total"
      :page-size="_page_size"
      :hide-on-single-page="_total / _page_size <= 1"
      @current-change="loadPage"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ["page_size", "total"],
  data() {
    return {
      _page_size: this.page_size,
      _total:this.total
    };
  },
  watch: {
    page_size: {
      handler(newVal, old) {
        this._page_size = newVal;
      },
      immediate: true,
    },
    total: {
        handler(newVal,old) {
            this._total = newVal
        },
        immediate:true
    }
  },
  methods: {
      loadPage(page) {
          let start = (page - 1) * this._page_size;
          let end = Math.min(start + this._page_size,this._total);
          this.$emit("changePage",start,end);
      }
  }
};
</script>
<style scoped lang='sass'>
.paging{
  ::v-deep.el-pager li.active{
    color:#cccccc;
  }
  ::v-deep.el-pager li:hover{
    color:#cccccc;
  }
}

</style>