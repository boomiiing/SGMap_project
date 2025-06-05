<template>
  <div id="mapBox" ref="mapBox" style="width: 100%;height: 100vh;;"></div>
</template>
  
  <script>
export default {
  name: "SGMapModel",
  components: {},
  created() {
    this.initMap();
  },
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      window.SGMap.tokenTask
        .login("key", "secret")
        .then(() => {
         this.map = new window.SGMap.Map({
            // 地图绑定的DOM元素ID
            container: this.$refs.mapBox,
            // 地图样式
            style: "aegis://styles/aegis/Streets-v2",
            // 默认缩放层级
            zoom: 11,
            // 地图中心点
            center: [118.3, 26.1],
            // 地图默认字体
            localIdeographFontFamily: "Microsoft YaHei Regular",
          });
        });
    },
  },
};
</script>
  
  <style>
</style>
  