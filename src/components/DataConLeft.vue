<template>
 <div class="data_con_left">
   <div class="left_top">
     <div class="left_top_info">
       <div class="info_title">实时统计</div>
       <span class="borders1 borders"></span>
       <span class="borders2 borders"></span>
       <span class="borders3 borders"></span>
       <span class="borders4 borders"></span>
       <div class="infos_main">
         <div class="infos_1" v-for="l in DataConLeft.topinfolists">
           <div class="infos_img"><img :src="l.imgs"></div>
           <div class="infos_text">
             <p>{{l.remarks}}</p>
             <p :style="l.numscolor">{{l.nums}}</p>
           </div>
         </div>
       </div>
     </div>
     <div class="left_top_jobs"  style="width: 100%; height: 38%">
       <span class="borders1 borders"></span>
       <span class="borders2 borders"></span>
       <span class="borders3 borders"></span>
       <span class="borders4 borders"></span>
        <div id="myCharts_1" style="width: 100%; height: 100%"></div>
     </div>
   </div>
   <div class="left_btn" style="width: 100%;height: 25%;">
       <span class="borders1 borders"></span>
       <span class="borders2 borders"></span>
       <span class="borders3 borders"></span>
       <span class="borders4 borders"></span>
       <div id="myCharts_2" style="width: 100%; height: 100%"></div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "DataConLeft",
      props:["DataConLeft"],
      data(){
          return{
            data1:['行业一','行业二','行业三','行业四','行业五']
          }
      },
     mounted() {
       let myCharts_1 = this.$echarts.init(document.getElementById('myCharts_1'));
       // let self =
       myCharts_1.setOption({

         title: { text: '行业分类',textStyle: {color: '#fff'}},
         tooltip: {trigger: 'item', formatter: "{a} <br/>{b}: {c} ({d}%)"},
         legend: {
           orient: 'vertical', x: 'right', y: 'center',
           data:this.data1,
           textStyle:{color: '#fff'}
         },
         series: [
           {name:'访问来源', type:'pie', selectedMode: 'single',
             radius: [0, '35%'], center:['40%','50%'],
             label: {
               normal: {
                 position: 'inner'
               }
             },
             labelLine: {
               normal: {
                 show: false
               }
             },
             data:[
               {value:12,itemStyle:{color:'#af89d6'},},
               {value:13,itemStyle:{color:'#4ac7f5'}},
               {value:70,itemStyle:{color:'#0096ff'}},
               {value:52,itemStyle:{color:'#f36f8a'}},
               {value:35,itemStyle:{color:'#f5c847'}}
             ]
           },
           {
             // name:'访问来源',
             type:'pie', radius: ['50%', '65%'], center:['40%','50%'],
             label: {
               normal: {
                 borderWidth: 1, borderRadius: 4,
                 rich: {
                   a: {
                     color: '#999', lineHeight: 22, align: 'center'
                   },
                   hr: {
                     borderColor: '#aaa', width: '100%', borderWidth: 0.5, height: 0
                   },
                   b: {
                     fontSize: 16, lineHeight: 33
                   },
                   per: {
                     color: '#eee', backgroundColor: '#334455',
                     padding: [2, 4], borderRadius: 2
                   }
                 }
               }
             },
             data:[
               {value:12, name:'行业一',itemStyle:{color:'#af89d6'}},
               {value:13, name:'行业二',itemStyle:{color:'#4ac7f5'}},
               {value:70, name:'行业三',itemStyle:{color:'#0096ff'}},
               {value:52, name:'行业四',itemStyle:{color:'#f36f8a'}},
               {value:35, name:'行业五',itemStyle:{color:'#f5c847'}}
             ]
           }
         ]
       });
       let myCharts_2 = this.$echarts.init(document.getElementById('myCharts_2'));
       myCharts_2.setOption({
         title: { text: '车型分类',textStyle: {color: '#fff'}},
         tooltip : {
           trigger: 'item',
           formatter: "{a} <br/>{b} : {c} ({d}%)"
         },
         legend: {
           // orient: 'vertical',
           left: 'center',
           y:'15%',
           data: ['车型1','车型2','车型3','车型4','车型5'],
           textStyle:{
             color: '#fff'
           }
         },
         series : [
           {
             name: '数量',
             type: 'pie',
             labelLine: {
               normal: {
                 show: false
               }
             },
             label:{
               normal:{
                 position: 'inner',
                 formatter: '{c}'
               }
             },
             radius : '55%',
             center: ['50%', '60%'],
             data:[
               {value:1400,name:'车型1',itemStyle:{color:'#f845f1'}},
               {value:1300,name:'车型2',itemStyle:{color:'#ad46f3'}},
               {value:1200,name:'车型3',itemStyle:{color:'#5045f6'}},
               {value:1100,name:'车型4',itemStyle:{color:'#4777f5'}},
               {value:600,name:'车型5',itemStyle:{color:'#44aff0'}}
             ],
             itemStyle: {
               emphasis: {
                 shadowBlur: 10,
                 shadowOffsetX: 0,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
               }
             }
           }
         ]
       });
       window.onresize = function(){
         myCharts_2.resize();
         myCharts_1.resize();
       }
     }
    }
</script>

<style scoped>
.data_con_left{width: 23.4375%;height: 100%;float: left}
.left_top{width: 100%;height: 75%;margin-bottom: 20px;position: relative;}
.left_top_info{height: 62%;width: 100%;border: 1px solid #20558b;box-sizing: border-box;position: relative;}
.info_title{
   width: 158px;height: 43px;
   background: url(../../static/img/info-title.png) no-repeat;
   position: absolute;top: -22px;left: 50%;margin-left: -74px;color: #fff;
   font-size: 18px;font-weight: 600;line-height: 43px;text-align: center;
 }
.left_top_jobs{
    height: 38%;
    width: 100%;
    background-color: rgba(0,24,106,0.5);
    margin-top: 20px;
    border: 1px solid #20558b;
    box-sizing: border-box;
    position: relative;
  }
.left_btn{
    background-color: rgba(0,24,106,0.5);
    border: 1px solid #20558b;
    box-sizing: border-box;
    position: relative;
}
.infos_main{width: 100%;height: 80%;}
.infos_1{
    width: 275px;
    height: 25%;
    margin: 8px auto;
    background: url("../../static/img/info-text.png") no-repeat;
    overflow: hidden;
  }
.infos_1:first-child{margin-top: 40px;}
.infos_img{
    width: 100px;
    height: 60px;
    position: relative;
    float: left;
  }
.infos_img img{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -24px;
    margin-top: -24px;
  }
.infos_text{
    width: 175px;
    height: 70px;
    padding-left: 30px;
    padding-top: 16px;
    box-sizing: border-box;
    float: left;
  }
.infos_text p:first-child{
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }
.infos_text p:nth-child(2){font-weight: 600; /*color: #ffff44;*/font-size: 22px; }
.borders{width: 8px;height: 8px;position: absolute;}
.borders1{border-left: 2px solid #0089ff;border-top:2px solid #0089ff;left: -1px;top: -1px;}
.borders2{border-right: 2px solid #0089ff;border-top:2px solid #0089ff;right: -1px;top: -1px;}
.borders3{border-left: 2px solid #0089ff;border-bottom:2px solid #0089ff;left: -1px;bottom: -1px;}
.borders4{border-right: 2px solid #0089ff;border-bottom:2px solid #0089ff;right: -1px;bottom: -1px;}
</style>
