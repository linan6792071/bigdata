<template>
  <div class="data_con_cen">
     <div class="cen_top" id="map" style="width:100%;height:75%">

     </div>

    <div class="ul-2">
      <span id="t-left"></span><span id="t-right"></span>
      <span id="b-left"></span><span id="b-right"></span>
      <div id="mychartfour"  style="width:100%;height:100%">

      </div>
    </div>

  </div>
</template>

<script>
  import "../../static/js/china"
  import echarts from 'echarts'
  // import "../../static/js/map1"
    export default {
        name: "DataConCen",
      props:["DtaConMap"],
        mounted() {
          var dom = document.getElementById("map");
          var myChart_map_tb = this.$echarts.init(dom);
          var app = {};
          var option = null;
          option = {
            chart : {
              backgroundColor: 'transparent'
            },
            title: {

              subtext: '',
              x:'center',
              y : 30,
              textStyle : {
                color: 'rgba(255,255,255,.6)',
                fontSize : 24,
              }
            },
            tooltip : {
              trigger: 'item'
            },
            //左侧小导航图标
            visualMap: {
              show : false,
              splitList: [
                {start: 500, end:600},{start: 400, end: 500},
                {start: 300, end: 400},{start: 200, end: 300},
                {start: 100, end: 200},{start: 0, end: 100},
              ],
              color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
            },

            //配置属性
            series: [{
              name: '车辆数量',
              type: 'map',
              mapType: 'china',
              roam: true,
              label: {
                normal: {
                  show: false  //省份名称
                },
                emphasis: {
                  show: false
                }
              },
              data:this.DtaConMap.mapdatalist//数据
            }]
          };
         if (option && typeof option === "object") {
            myChart_map_tb.setOption(option, true);
          }
          window.addEventListener('resize',function(){
            myChart_map_tb.resize();
          }),
          this.four()
        },
        methods:{
          four(){
            let myChart = this.$echarts.init(document.getElementById("mychartfour"));
            var optionfour = {
              title : {
                // backgroundColor:'#051856',
                textStyle: {
                  // fontSize:12,
                  color: '#fff',
                  width:'100%'
                },
                text: '车辆充电高峰时间',
                x:'left',

              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  lineStyle: {
                    color: '#57617B'
                  }
                }
              },
              grid: {
                left: '3%',
                right: '3%',
                bottom: '1%',
                containLabel: true
              },
              xAxis: [

                {
                  type: 'category',
                  nameTextStyle:{fontSize:4},
                  boundaryGap: false,
                  axisLine: {
                    lineStyle: {
                      color: '#0E2A43'
                    }
                  },
                  axisLabel: {
                    margin: 10,

                    interval:0,
                    rotate:40  ,
                    textStyle: {
                      fontSize: 8,
                      color: '#D5CBE8'
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  data: ['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时']
                }, {
                  axisPointer: {
                    show: false
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#0E2A43'
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  position: 'bottom',
                  offset: 20
                }],
              yAxis: [{
                type: 'value',
                offset: 20,
                splitNumber:5,
                nameTextStyle:{fontSize:4},
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: '#0E2A43'
                  }
                },
                axisLabel: {
                  margin: 10,
                  textStyle: {
                    fontSize: 8,
                    color: '#D5CBE8'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#57617B'
                  }
                }
              }],
              series: [{
                name: '',
                type: 'line',
                smooth: true,
                stack: '总量',
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                animationDelay: 2000,
                animationDuration: 1000,
                markPoint: {
                  // symbol: 'image://url',

                  animationDelay: 3000,
                  animationDuration: 1000
                },
                lineStyle: {
                  normal: {
                    width: 1,
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                        offset: 0, color: '#a4d8cc' // 0% 处的颜色
                      }, {
                        offset: 1, color: '#a4d8cc' // 100% 处的颜色
                      }],
                      globalCoord: true // 缺省为 false
                    },
                    opacity: 0.9
                  }
                },
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                      offset: 0.8,
                      color: '#0e88c7'
                    }], false),

                  }
                },
                itemStyle: {
                  normal: {
                    color: '#7ec2ca',
                    borderWidth: 3
                  }
                },
                data: [710,312,321,754,500,830,710,521,504,660,530,420,710,312,321,754,500,830,710,521,504,660,530,410]
              }, ]
            };
            myChart.setOption(optionfour);
            window.onresize = function(){
              myChart.resize();
            }
          },
        }
    }
</script>

<style scoped>
  .cen_top{
    height: 75%;
  }
.data_con_cen{
  width: 50%;
  height: 100%;
  float: left;
  margin-left: 30px;
}
.ul-2 {
  border: 1px solid #01a2d8;
  position: relative;
  padding: 0;
  /*margin-left: 10px;*/
  margin-top: 20px;
  height: 25%;
}
span {
  display: block;
  width: 10px;
  height: 10px;
  border: 2px solid #00fefa;
}
#t-left {
  border-right: none;
  border-bottom: none;
  position: absolute;
  left: -3px;
  top: -3px;
}

#t-right {
  border-left: none;
  border-bottom: none;
  position: absolute;
  right: -3px;
  top: -3px;
}

#b-left {
  border-top: none;
  border-right: none;
  position: absolute;
  left: -3px;
  bottom: -3px;
}

#b-right {
  border-top: none;
  border-left: none;
  position: absolute;
  right: -3px;
  bottom: -3px;
}
</style>
