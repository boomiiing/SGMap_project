<template>
  <div class="tools_box">
    <el-dropdown>
      <el-button type="primary">
        图层切换<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
  
  <script>
export default {
  name: "MapTools",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
  
  <style scoped lang="scss">
.tools_box {
  display: flex;
}
</style>
  