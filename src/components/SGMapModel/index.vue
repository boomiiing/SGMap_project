<template>
  <div id="mapBox" ref="mapBox" class="map_box">
    qwedasd
    <MapTools class="tools_box"></MapTools>
  </div>
</template>
  
  <script>
import SGMapObj from "@/commonjs/SGMapObj";
import MapTools from "@/components/mapTools";
export default {
  name: "SGMapModel",
  components: {
    MapTools,
  },
  created() {},
  mounted() {
    this.initMap();
  },
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      SGMapObj.createMapObj(this.$refs.mapBox);
    },
  },
};
</script>
  
<style scoped lang="scss">
.map_box {
  width: 100%;
  height: 100vh;
  .toolsBox {
    position: absolute;
    left: 0;
    top:0;
    z-index: 1000;
  }
}
</style>
  