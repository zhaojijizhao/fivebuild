'use strict';
var echarts = require('echarts');

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
          interval: 20,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
            // textStyle: {
            //   color: function(val) {
            //     if (val == 20 || val == 80) {
            //       return '#999';
            //     } else {
            //       return 'transparent';
            //     }
            //   }
            // },
            // formatter: function(value,  index) {
            //   return value + "%"
            // }
          },
          splitLine: {
            lineStyle: {
              color: 'transparent',
              // color: [
              //   'transparent',
              //   'rgb(226, 212, 8)',
              //   'transparent',
              //   'transparent',
              //   'rgb(83, 181, 108)',
              //   'transparent',
              //   'transparent',
              //   'transparent',
              //   'transparent',
              //   'transparent',
              //   'transparent'],
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
              icon: 'circle',

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
