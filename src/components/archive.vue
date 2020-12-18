<template>
  <div class="archive">
    <el-timeline :reverse="false">
      <el-timeline-item
        v-for="(tag, index) in data"
        :key="index"
        :timestamp="tag.timestamp"
        :hide-timestamp="true"
        :color="tag.color"
        :size="tag.size"
        @mouseover.native="enterLine(tag)"
        @mouseleave.native='leaveLine(tag)'
      >
        <ArchiveTimeline :line_data="tag"></ArchiveTimeline>
      </el-timeline-item>
    </el-timeline>
    <Pagination
      class="paging"
      :total="total"
      :page_size="page_size"
      @changePage="changePage"
    ></Pagination>
  </div>
</template>
<script>
//import $ from 'jquery'
import ArchiveTimeline from "./archive-timeline.vue";
import Pagination from "./pagination.vue";
import {slideUpReturn} from '../assests/js/animation'

let all_data = [];
let page_size = 10;
export default {
  data() {
    return {
      data: [],
      total: 0,
      color:'#',
      page_size: page_size,
    };
  },
  mounted() {
    let that = this;
    all_data.length = 0;
    for (let i = 0; i < 10; ++i) {
      all_data.push({ timestamp: "2009-1-9", content: "测试12",color:'',size:'normal'});
    }
    for (let i = 0; i < 10; ++i) {
      all_data.push({ timestamp: "2008-1-9", content: "this is a test",color:'',size:'normal'});
    }
    this.handleData();
    that.total = all_data.length;
    this.changePage(0, Math.min(page_size, this.total));
    slideUpReturn('.archive')
  },
  components: {
    ArchiveTimeline,
    Pagination,
  },
  methods: {
    changePage(start, end) {
      this.data.length = 0;
      while (start < end) {
        this.data.push(all_data[start++]);
      }
    },
    handleData() {
      let pre = "";
      for (let i = 0; i < all_data.length; ++i) {
        let year = all_data[i].timestamp.substring(0, 4);
        if (pre != year) {
          all_data.splice(i, 0, { timestamp: "", content: year,color:'',size:'large'});
          pre = year;
        }
      }
    },
    enterLine(tag) {
      if(tag.timestamp.length != 0) {
        tag.color = '#222222';
      }
    },
    leaveLine(tag) {
      tag.color = '';
    }
  },
};
</script>
<style scoped lang="sass">
.archive {
  padding-left: 10%;
  padding-top: 10%;
  ::v-deep.el-timeline-item__wrapper {
  position: relative;
  padding-left: 5px;
  top: -3px;
  }
}
.timeline-item {
  font-size: 18px;
}
.paging {
  margin-top: 5%;
  text-align: center;
}
.timeline-hover{
  color:black;
}
</style>