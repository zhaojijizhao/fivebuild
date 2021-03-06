'use strict';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

var {color} = require('@common');
var _ = require('lodash');
require('./linechart.scss');

var LineChart = Vue.component('line-chart', {
  template: require('./linechart.html'),
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
        tooltip: {},
        xAxis: {
          data: [],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#999'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          interval: 10,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#999'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#ccc',
              type: 'solid'
            }
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        series: [
        ],
        label: {
          normal: {
            show: true, 
            position: 'top', 
            formatter: '{c}', 
            textStyle: {
              color: '#999'
            }
          }
        }
      }
    }
  },
  computed: {
    pins() {
      let result = [];
      if (this.data.data && this.data.data.length > 0) {
        this.data.data.map((v, k) => {
          if (v.name.indexOf('今年') > -1) {
            result.push({
              name: new Date().getYear() + 1900,
              color: v.color
            })
          } else if (v.name.indexOf('去年') > -1) {
            result.push({
              name: new Date().getYear() + 1900 - 1,
              color: v.color
            })
          }
        });
      }
      return result;
    }
  },
  methods: {
    setchart() {
      if (this.data && this.data.data && this.data.data.length > 0) {
        //legend
        // if (this.data.legend) {
        //   this.option.legend.data = this.data.data.map((v, k) => {
        //     return {
        //       name: v.name,
        //       icon: 'circle'
        //     }
        //   });
        // }

        //xAxis
        var len = this.data.data[0].data.length;
        this.option.xAxis.data = this.data.data[0].data.map((v, k) => {
          return v.name.split('-').join('\n');
        });

        //yAxis
        if (this.data.data) {
          let linelist = this.data.data[0].line;
          let showline = this.data.data[0].showline;
          let min = this.data.data[0].data[0].value;
          let max = this.data.data[0].data[0].value;
          this.data.data.map((v, k) => {
            v.data.map((item, key) => {
              min = Math.min(item.value, min);
              max = Math.max(item.value, max);
            })
          });

          this.option.yAxis.interval = parseInt((max - min) / 10, 10);
        }

        //   if (showline) {
        //     this.option.yAxis.splitLine.lineStyle.color =
        //     _.range(0, 200, 10).map((v, k) => {
        //       let result = 'transparent';
        //       linelist.forEach((linev, linek) => {
        //         if (linev.value == v) {
        //           result = linev.color;
        //         }
        //       });
        //       return result;
        //     });
        //   }

        //   let bascicolor = this.data.data[0].color;
        //   this.data.data[0].data.forEach((v, k) => {
        //     let itemcolor = bascicolor;
        //     linelist.forEach((linev, linek) => {
        //       if (v.value <= linev.value) {
        //         itemcolor = linev.color;
        //       }
        //     });
        //     v.itemStyle = {
        //       normal: {
        //         color: itemcolor
        //       }
        //     }
        //   });
        // }

        //series
        this.option.series = [];
        this.data.data.forEach((v, k) => {
          this.option.series.push({
            type: 'line',
            data: v.data,
            name: v.name,
            itemStyle: {
              normal: {
                color: v.color
              }
            },
            barGap: '0%',
            barCategoryGap: '50%'
          });
        });
        this.barchart.setOption(this.option);
      }
    }
  },
  ready() {
    this.barchart = echarts.init(document.getElementById(this.chartid));
    this.$options.methods.setchart.bind(this)();
  },
  watch: {
    'data': {
      handler: 'setchart',
      deep: true
    }
  }
});

module.exports = LineChart;
