

<template>
  <div class="menu-div">
    <el-row>
      <el-menu default-active="1" @select="select">
        <el-menu-item index="1">
          <i class="home-icon"></i>
          <span slot="title">{{ home }}</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="category-icon"></i>
          <span slot="title">{{ category }}</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="tag-icon"></i>
          <span slot="title">{{ tag }}</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="archive-icon"></i>
          <span slot="title">{{ archive }}</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
import menu from "../assests/js/main-menu-const";
import Category from "@/components/category.vue";
import Vue from "vue";

export default {
  data: function () {
    return {
      home: menu.home,
      category: menu.category,
      tag: menu.tag,
      archive: menu.archive,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(index, indexPath) {
      index = parseInt(index)
      switch (index) {
        case 1:
          this.$router.replace("/")
          window.location.reload()
          break;
        case 2:
          this.$router.push("/category");
          break;
        case 3:
          this.$router.push('/tag');
          break;
        case 4:
          this.$router.push('/archive');
          break;
      }
    },
    show: function (event) {
      const selector = document.querySelector(".menu-div");
      selector.classList.add("magictime", null, "slideUpReturn");
    },
  },
  mounted() {
    this.show();
  },
};
</script>

<style scoped>
.home-icon {
  background: url("../assests/images/home.png");
  width: 32px;
  height: 32px;
  display: inline-block;
}
.category-icon {
  background: url("../assests/images/category.png");
  width: 32px;
  height: 32px;
  display: inline-block;
}
.tag-icon {
  background: url("../assests/images/tag.png");
  width: 32px;
  height: 32px;
  display: inline-block;
}
.archive-icon {
  background: url("../assests/images/archive.png");
  width: 32px;
  height: 32px;
  display: inline-block;
}
</style>