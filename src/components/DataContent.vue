<template>
    <div class="datacontent">
      <data-con-left :DataConLeft="DataConLeft"></data-con-left>
      <data-con-cen :DtaConMap="DtaConMap"></data-con-cen>
      <data-con-right :DataRight="DataRight"></data-con-right>
    </div>
</template>

<script>
    import DataConLeft from "./DataConLeft";
    import DataConCen from "./DataConCen";
    import DataConRight from "./DataConRight";
    export default {
        name: "DataContent",
      components: {DataConRight, DataConCen, DataConLeft},
      props:["DataConLeft","DtaConMap","DataRight"]
    }
</script>

<style scoped>
.datacontent{
    width: 100%;
    height: calc(100% - 105px);
  /*height: 100%;*/
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    }
</style>
