<template>
  <div class="category">
    <h3 class="category-head">总共有{{total}}种分类</h3>
    <div v-for="(item, index) of items" :key="index">
      <TagLink :need_tag="item"></TagLink>
    </div>
    <!-- <el-pagination
      class="paging"
      layout="prev,pager,next"
      :total="total"
      :page-size="page_size"
      :hide-on-single-page="total/page_size <= 1"
      @current-change="loadPage"
    ></el-pagination> -->
    <Pagination :total="total" :page_size="this.page_size" @changePage="changePage" class="paging"></Pagination>
  </div>
</template>
<script>
import TagLink from "./category-link.vue";
import Pagination from './pagination.vue';
import {slideUpReturn} from '../assests/js/animation'

let tags = [];
let page_size = 10;
export default {
  data() {
    return {
      items: [],
      size: 0,
      page_size:page_size,
      total:0
    };
  },
  mounted() {
    //categories.push('Distributed')
    let that = this;
    tags.length = 0;
    for (let i = 0; i < 100; ++i) {
      tags.push({ tag: "Distributed", count: i });
    }
    that.total = tags.length;
    this.changePage(0,Math.min(page_size,this.total));
    slideUpReturn('.category')
    //this.loadPage(1)
  },
  methods: {
    /* loadPage(page) {
      //解决初始化时，this指向windows作用域因此出现的data undefined问题
      let that = this;
      //page从1开始，数据下标从0开始，所以page-1
      let start = (page - 1) * page_size;
      let end = Math.min(start + page_size,tags.length);
      that.items.length = 0;
      while(start < end) {
        that.items.push(tags[start++]);
      }
    } */
    changePage(start,end) {
      let that = this;
      that.items.length = 0;
      while(start < end) {
        that.items.push(tags[start++])
      }
    }
  },
  components: {
    TagLink,
    Pagination
  },
};
</script>
<style scoped>
.category-head {
  color: #cccccc;
  text-align: center;
  padding-top: 10%;
}
.paging {
  margin-top: 5%;
  text-align: center;
}
</style>