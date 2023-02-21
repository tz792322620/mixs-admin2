<template>
  <div class="map-page-container">
    <el-amap
      :center="center"
      :zoom="zoom"
      @init="init"
    />
  </div>
  <div class="toolbar">
    <button @click="add()">
      添加标号
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { defHttp } from "/@/utils/http/axios";

export default defineComponent({
  data() {
    return {
      zoom: 5,
      center: [121.59996, 31.197646],
      map: null,
      dtxx:[]
    };
  },

  methods: {
    init(map) {
      const marker = new AMap.Marker({
        // position: [121.59996, 31.197646]
      });
      map.add(marker);
      this.map = map;
      console.log('map init: ', map)
      // this.add()

      defHttp.get({url: '/userlist/userList/showPosition',params: { userId: '' }}).then(res=>{
        console.log(res)
        this.dtxx = res
        res.map(item => {
          let dt = [item.longitude,item.latitude]
          console.log('dt',dt)
          this.add(dt);
        })
      });

    },
    add(value) {
      const marker = new AMap.Marker({
        position: value,
        title:'ceshi'
      });
      this.map.add(marker);
    }
  }
})
</script>

<style>
.map-page-container{
  height: 50rem;
  width: 100%;
}
</style>
