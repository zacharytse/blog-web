<template>
  <div class="tag">
    <SingleTag v-for="(tag, index) in cur_tag" :key="index" :tag_info="tag"></SingleTag>
    <div class="pagination">
      <Pagination
        :page_size="page_size"
        :total="total"
        @changePage="changePage"
      ></Pagination>
    </div>
  </div>
</template>
<script>
import Pagination from "./pagination.vue";
import SingleTag from "./single-tag.vue";
import {slideUpReturn} from '../assests/js/animation'

let tag = [];
let page_size = 130;
export default {
  data() {
    return {
      page_size: page_size,
      cur_tag: [],
      total: 0,
    };
  },
  components: {
    Pagination,
    SingleTag,
  },
  mounted() {
    let that = this;
    tag.length = 0;
    for (let i = 0; i < 2000; ++i) {
      tag.push({ name: "Distributed", color: i, size: (i * 2) % 30 });
    }
    that.total = tag.length;
    this.changePage(0,Math.min(page_size,this.total));
    slideUpReturn('.tag')
  },
  methods: {
    changePage(start, end) {
        let that = this;
        that.cur_tag.length = 0;
        while(start < end) {
            that.cur_tag.push(tag[start++]);
        }
    },
  },
};
</script>
<style scoped>
.pagination {
  text-align: center;
}
.tag {
  padding-left: 10%;
  padding-top:10%;
}
</style>