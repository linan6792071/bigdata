<template>
    <div class="data_title">
      <div class="data_title_left"></div>
      <div class="data_title_cen"></div>
      <div class="data_title_right"></div>
    </div>
</template>

<script>
    export default {
        name: "DataTitle"
    }
</script>

<style scoped>
.data_title{
  width: 100%;height: 105px;padding: 30px 0 35px 0;box-sizing: border-box;}
.data_title_left,.data_title_right{
  width: calc(50% - 220px);height: 3px;background: #0089ff;margin-top: 18px;
}
.data_title_cen{
  width: 440px;height: 40px;box-sizing: border-box;border-right: 5px solid #0089ff;
  border-left: 5px solid #0089ff;
  float: left;
  background: url("../../static/img/title.png") no-repeat;
}
.data_title_left{
  float: left;
}
.data_title_right{
  float: right;
}
</style>
