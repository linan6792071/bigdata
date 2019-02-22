<template>
    <div id="carintent">
       <data-title></data-title>
       <data-content :DataConLeft="DataConLeft" :DtaConMap="DtaConMap" :DataRight="DataRight"></data-content>
    </div>
</template>

<script>
   import "../../static/css/index.css"
   import DataTitle from "../components/DataTitle";
   import DataContent from "../components/DataContent";
   import DataConLeft from "../data/DataConLeft";
   import DtaConMap from "../data/DtaConMap";
   import DataRight from "../data/DataRight";
    export default {
        name: "CarIntenet",
      components: {DataContent, DataTitle},
      data(){
          return{
            DataConLeft,
            DtaConMap,
            DataRight
          }
      }
    }
</script>

<style scoped>
#carintent{
  width: 100%;
  height: 100%;
  background: url("../../static/img/map_bg.png");
  background-size: cover;
}
</style>
