'use strict';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/scatter');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

var {color} = require('@common');
var _ = require('lodash');
require('@vendor/china');
require('./mapchart.scss');

var MapChart = Vue.component('map-chart', {
  template: require('./mapchart.html'),
  props: {
    data: {
      default: {}
    },
    chartid: {
      default: 'chartid'
    }
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center'
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#ccc',
              borderColor: '#999'
            },
            emphasis: {
              areaColor: '#999'
            }
          }
        },
        series: [
          {
            name: '5%以下',
            type: 'scatter',
            coordinateSystem: 'geo',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#ccc"
              },
              emphasis: {
                areaColor: "#999"
              }
            },
            data: [
              {name: '河南',  value: 1 }, 
              {name: '云南',  value: 1 }, 
              {name: '辽宁',  value: 1 }, 
              {name: '黑龙江',  value: 1 }, 
              {name: '湖南',  value: 1 }, 
              {name: '山东',  value: 1 }, 
              {name: '江苏',  value: 1 }, 
              {name: '湖北',  value: 1 }, 
              {name: '广西',  value: 1 }, 
              {name: '甘肃',  value: 1 }, 
              {name: '陕西',  value: 1 }, 
              {name: '贵州',  value: 1 }, 
              {name: '青海',  value: 1 }, 
              {name: '海南',  value: 1 }
            ]
          }, 
          {
            name: '5%－20%', 
            type: 'scatter', 
            coordinateSystem: 'geo', 
            label: {
              normal: {
                show: false
              }, 
              emphasis: {
                show: false
              }
            }, 
            data: [
              {name: '重庆',  value: 1 }, 
              {name: '河北',  value: 1 }, 
              {name: '安徽',  value: 1 }, 
              {name: '新疆',  value: 1 }, 
              {name: '浙江',  value: 1 }, 
              {name: '江西',  value: 1 }, 
              {name: '山西',  value: 1 }, 
              {name: '内蒙古',  value: 1 }, 
              {name: '吉林',  value: 1 }, 
              {name: '福建',  value: 1 }, 
              {name: '西藏',  value: 1 }, 
              {name: '四川',  value: 1 }, 
              {name: '宁夏',  value: 1 }
            ]
          }, 
          {
            name: '20%以上', 
            type: 'scatter', 
            coordinateSystem: 'geo', 
            label: {
              normal: {
                show: false
              }, 
              emphasis: {
                show: false
              }
            },
            symbolSize: 12,
            data: [
              {name: '北京',  value: 1, symbolSize: 130}, 
              {name: '天津',  value: 1, symbolSize: 130}, 
              {name: '上海',  value: 1 }, 
              {name: '广东',  value: 1 }, 
              {name: '台湾',  value: 1 }, 
              {name: '香港',  value: 1 }, 
              {name: '澳门',  value: 1 }
            ]
          }
        ]
      }
    }
  },
  methods: {
    setchart() {
      if (this.data && this.data.data && this.data.data.length > 0) {
        //series
        this.option.series[0].data = [];
        var data = _.clone(this.data.data[0].data);
        data.sort(function (a, b) { return a.value - b.value});
        data.forEach((v, k) => {
          this.option.series[0].data.push({
            value: v.value,
            name: v.name,
            itemStyle: {
              normal: {
                color: v.color
              }
            }
          });
        });
        this.mapchart.setOption(this.option);
      }
    }
  },
  ready() {
    this.mapchart = echarts.init(document.getElementById(this.chartid));
    this.$options.methods.setchart.bind(this)();
  },
  watch: {
    'data': {
      handler: 'setchart',
      deep: true
    }
  }
});

module.exports = MapChart;
