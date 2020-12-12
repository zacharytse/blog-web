<template>
  <div class="whole-page">
    <el-row id="whole-page-row">
      <!-- 空出第一列 -->
      <el-col :span="5" id="whole-page-col"></el-col>
        <!-- 第二列放菜单以及文章 -->
      <el-col :span="14" id="whole-page-col">
          <!-- 第二列本身为一行2列，第一列放菜单，第二列放文章 -->
          <el-row id="whole-page-row">
            <!-- 菜单栏 -->
            <el-col :span="6" id="whole-page-col">
              <blogLogo></blogLogo>
              <mainMenu></mainMenu>
            </el-col>
            <!-- 文章栏 -->
            <el-col :span="18" id="whole-page-col">
              <router-view></router-view>
            </el-col>
          </el-row>
      </el-col>
      <el-col :span="5" id="whole-page-col"></el-col> 
    </el-row>
  </div>
</template>

<script>
import blogLogo from "@/components/blogLogo.vue";
import mainMenu from "@/components/mainMenu.vue";

export default {
  components: {
    blogLogo,
    mainMenu,
  },
};
</script>

<style scoped>
.whole-page {
  height: 100%;
}
#whole-page-row {
  height: 100%;
}
#whole-page-col {
  height: 100%;
}
</style>