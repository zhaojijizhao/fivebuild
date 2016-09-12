'use strict';
require('./demo.scss');
var echarts = require('echarts');


var RootComponent = Vue.extend({
  template: require('./demo.html'),
  data () {
    return {}
  },
  methods: {
  },
  computed: {
  },
  ready() {
    var myChart = echarts.init(document.getElementById('demo1'));
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: '访问来源',
          type: 'bar',
          radius: '55%',
          data: [
            {value: 400, name: '搜索引擎'},
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 274, name: '联盟广告'},
            {value: 235, name: '视频广告'}
          ],
          itemStyle: {
            normal: {
              color: '#f60'
            }
          }
        }
      ],
      visualMap: {
        // 不显示 visualMap 组件，只用于明暗度的映射
        show: false,
        // 映射的最小值为 80
        min: 80,
        // 映射的最大值为 600
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      }
    });

    var chart2 = echarts.init(document.getElementById('demo2'));
    chart2.setOption({
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [
        {
          type: 'slider',
          xAxisIndex: 0,
          start: 10,
          end: 60
        },
        {
          type: 'inside',
          xAxisIndex: 0,
          start: 10,
          end: 60
        },
        {
          type: 'slider',
          yAxisIndex: 0,
          start: 30,
          end: 80
        },
        {
          type: 'inside',
          yAxisIndex: 0,
          start: 30,
          end: 80
        }
      ],
      series: [
        {
          type: 'scatter', // 这是个『散点图』
          itemStyle: {
            normal: {
              opacity: 0.8
            }
          },
          symbolSize: function (val) {
            return val[2] * 40;
          },
          data: [
            ["14.616", "7.241", "0.896"],
            ["3.958", "5.701", "0.955"],
            ["2.768", "8.971", "0.669"],
            ["9.051", "9.710", "0.171"],
            ["14.046", "4.182", "0.536"],
            ["12.295", "1.429", "0.962"],
            ["4.417", "8.167", "0.113"],
            ["0.492", "4.771", "0.785"],
            ["7.632", "2.605", "0.645"],
            ["14.242", "5.042", "0.368"]
          ]
        }
      ]
    });

    var chart3 = echarts.init(document.getElementById('demo3'));
    chart3.setOption({
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
});

new RootComponent({ el: '#app' });
