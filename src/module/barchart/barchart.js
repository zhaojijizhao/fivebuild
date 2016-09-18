'use strict';
var echarts = require('echarts');
var {color} = require('@common');
var _ = require('lodash');
require('./barchart.scss');

var BarChart = Vue.component('bar-chart', {
  template: require('./barchart.html'),
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
        legend: {
          data: [],
          textStyle: {
            color: '#999'
          }
        },
        xAxis: {
          data: [],
          axisLabel: {
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
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'transparent',
              type: 'dash'
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
  methods: {
    setchart() {
      if (this.data && this.data.data && this.data.data.length > 0) {
        //legend
        if (this.data.legend) {
          this.option.legend.data = this.data.data.map((v, k) => {
            return {
              name: v.name,
              icon: 'circle'
            }
          });
        }

        //xAxis
        var len = this.data.data[0].data.length;
        this.option.xAxis.data = this.data.data[0].data.map((v, k) => {
          if (len > 4) {
            return v.name.split('').join('\n');
          } else {
            return v.name;
          }
        });

        //yAxis
        if (this.data.data[0].line) {
          let linelist = this.data.data[0].line;
          this.option.yAxis.axisLabel = {
            show: true,
            textStyle: {
              color: function(val) {
                let result = 'transparent';
                linelist.forEach((v, k) => {
                  if (v.value == val) {
                    result = '#999';
                  }
                });
                return result;
              }
            },
            formatter: function(value,  index) {
              return value + "%"
            }
          };
          this.option.yAxis.splitLine.lineStyle.color =
          _.range(0, 200, 10).map((v, k) => {
            let result = 'transparent';
            linelist.forEach((linev, linek) => {
              if (linev.value == v) {
                result = linev.color;
              }
            });
            return result;
          });
          let bascicolor = this.data.data[0].color;
          this.data.data[0].data.forEach((v, k) => {
            let itemcolor = bascicolor;
            linelist.forEach((linev, linek) => {
              if (v.value <= linev.value) {
                itemcolor = linev.color;
              }
            });
            v.itemStyle = {
              normal: {
                color: itemcolor
              }
            }
          });
        }

        //series
        this.option.series = [];
        this.data.data.forEach((v, k) => {
          this.option.series.push({
            type: 'bar',
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

module.exports = BarChart;
