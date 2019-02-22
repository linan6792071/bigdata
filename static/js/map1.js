

var dom = document.getElementById("map");
var myChart_map_tb = echarts.init(dom);
var app = {};
option = null;
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
        name: '数据',
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
        data:[
            {name: '北京',value: '189' },{name: '天津',value: '250' },
            {name: '上海',value: '167' },{name: '重庆',value: '42' },
            {name: '河北',value: '493' },{name: '河南',value: '203' },
            {name: '云南',value: '174' },{name: '辽宁',value: '41' },
            {name: '黑龙江',value: '393' },{name: '湖南',value: '405' },
            {name: '安徽',value: '311' },{name: '山东',value: '120' },
            {name: '新疆',value: '44' },{name: '江苏',value: '125' },
            {name: '浙江',value: '365' },{name: '江西',value: '125' },
            {name: '湖北',value: '47' },{name: '广西',value: '490' },
            {name: '甘肃',value: '264' },{name: '山西',value: '107' },
            {name: '内蒙古',value: '370' },{name: '陕西',value: '433' },
            {name: '吉林',value: '297' },{name: '福建',value: '126' },
            {name: '贵州',value: '385' },{name: '广东',value: '141' },
            {name: '青海',value: '21' },{name: '西藏',value: '85' },
            {name: '四川',value: '315' },{name: '宁夏',value: '463' },
            {name: '海南',value: '42' },{name: '台湾',value: '490' },
            {name: '香港',value: '425' },{name: '澳门',value: '283' }
        ] //数据
    }]
};


if (option && typeof option === "object") {
    myChart_map_tb.setOption(option, true);
}
window.addEventListener('resize',function(){
    myChart_map_tb.resize();
})
