<template>
  <div class="conright">
    <div class="ul-1">
      <span id="t-left"></span>
      <span id="t-right"></span>
      <span id="b-left"></span>
      <span id="b-right"></span>
      <div id="mychartone"  style="width:100%;height:100%">

      </div>
    </div>
    <div class="ul-1">

      <span id="t-left"></span>
      <span id="t-right"></span>
      <span id="b-left"></span>
      <span id="b-right"></span>
      <div id="mycharttwo"  style="width:100%;height:100% ">

      </div>
    </div>

    <div class="ul-1">
      <span id="t-left"></span>
      <span id="t-right"></span>
      <span id="b-left"></span>
      <span id="b-right"></span>
      <div id="mychartthree"  style="width:100%;height:100% ">

      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "DataConRight",
    // data(){
    //     return {

    //     }
    // },
    props:["DataRight"],
    mounted(){
      this.one()
      this.two()

      this.three()
    },
    methods:{
      two(){
        let myChart =this.$echarts.init(document.getElementById("mycharttwo"));
        var  optiontwo = {
          title : {
            // backgroundColor:'#051856',
            textStyle: {
              // fontSize:'20px',
              color: '#fff',
              width:'100%'
            },
            text: '报警车辆TOP5',
            x:'left',

          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              var tar = params[0];
              return tar.name + ' : ' + tar.value + '辆';
            }
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['NO.1', 'NO.2', 'NO.3', 'NO.4', 'NO.5'],

          },
          yAxis: {
            type: 'value',
            splitLine:{
              show:true  ,
              lineStyle:{
                color:'#32346c',
                width: 1
              }
            }
          },
          axisLabel: {
            color:'#bac0c0'
          }  ,
          series: [{
            data: [28,22,20,16,12],
            type: 'bar',
            barWidth : 10,//柱图宽度
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              emphasis: {
                barBorderRadius: 10
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius:[10, 10, 10, 10],
                color:'#2e83d4',
                backgroundColor:"#121847",
                label: {//是否展示
                  textStyle: {
                    fontWeight:'bolder',
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                  }
                }
              }
            },

          }]
        };
        myChart.setOption(optiontwo);
        window.onresize = function(){
          myChart.resize();
        }
      },
      one(){
        let myChart = this.$echarts.init(document.getElementById("mychartone"));

        var optionone = {
          fontSize: 18,

          title : {
            // backgroundColor:'#051856',
            textStyle: {
              // fontSize:'20px',
              color: '#fff',
            },
            text: '本月行驶里程TOP5',
            x:'left',

          },
          tooltip : {
            trigger: 'item',
            formatter: "{b} :<br> {c} ({d}%)"
          },
          calculable : true,
          series : [

            {
              type:'pie',
              radius :  [20, 70],
              center : ['50%', '65%'],
              roseType : 'area',
              data:
              this.DataRight.datarightone

            }
          ]
        };
        myChart.setOption(optionone);
        window.onresize = function(){
          myChart.resize();
        }
      },
      three(){
        let myChart = this.$echarts.init(document.getElementById("mychartthree"));

        let data = {
          "chart": [{
            month: "NO.1",
            value: 600,
            ratio: 14.89
          },

            {
              month: "NO.2",
              value: 500,
              ratio: 79.49
            },

            {
              month: "NO.3",
              value: 614,
              ratio: 75.8
            },

            {
              month: "NO.4",
              value: 442,
              ratio: 19.8
            },

            {
              month: "NO.5",
              value: 322,
              ratio: 44.5
            }

          ]
        }


        let xAxisMonth = [],
          barData = [],
          lineData = [];
        for (let i = 0; i < data.chart.length; i++) {
          xAxisMonth.push(data.chart[i].month);
          barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
          });
          lineData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].ratio
          });
        }

        var  optionthree = {
          title : {
            // backgroundColor:'#051856',
            textStyle: {
              // fontSize:'20px',
              color: '#fff',
              width:'100%'
            },
            text: '电池报警车辆TOP10',
            x:'left',

          },
          backgroundColor: "#020d22",
          grid: {
            left: '5%',
            right: '8%',
            bottom: '1%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: function(params) {
              return params[0]["data"].name + "<br/>" + '报警次数: ' + params[0]["data"].value + '次';
            }
          },
          xAxis: [{
            type: 'category',
            show: false,
            data: ['3月', '4月', '5月', '6月', '7月', '8月'],
            axisLabel: {
              textStyle: {
                color: '#b6b5ab',
                fontSize:'5px'
              },

            }
          },
            {
              type: 'category',
              position: "bottom",
              data: xAxisMonth,
              boundaryGap: true,
              // offset: 40,
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#b6b5ab'
                }
              }
            }

          ],
          yAxis: [{
            show: true,
            offset: 10,
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,0.2)"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              color: '#b6b5ab'
            }
          }, {
            show: false,
            type: "value",
            name: "合格率(%)",
            nameTextStyle: {
              color: '#ccc'
            },
            axisLabel: {
              color: '#ccc'
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }],
          color: ['#e54035'],
          series: [{
            barWidth : 60,//柱图宽
            name: '训练人次',
            type: 'pictorialBar',
            xAxisIndex: 1,
            barCategoryGap: '-80%',
            // barCategoryGap: '-5%',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            itemStyle: {
              normal: {
                color: function(params) {
                  let colorList = [
                    'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                    'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                    'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                  ];
                  return colorList[params.dataIndex];
                }
              },
              emphasis: {
                opacity: 1
              }
            },
            data: barData,
          }
          ]

        }
        myChart.setOption(optionthree);
        window.onresize = function(){
          myChart.resize();
        }
      }
    }
  }
</script>

<style scoped>
  .conright {
    width: 23.4375%;
    float: right;
    height: 100%;
  }
  .ul-1 {
    border: 1px solid #01a2d8;
    position: relative;
    padding: 0;
    margin-left: 10px;
    height: 33%;
    margin-bottom: 10px;
  }
.ul-1:last-child{
  margin-bottom: 0;
}
  .ul-2 {
    border: 1px solid #01a2d8;
    position: relative;
    padding: 0;
    margin-left: 10px;
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
