'use strict';
var echarts = require('echarts');
var {color} = require('@common');
var _ = require('lodash');
require('./ringchart.scss');

var RingChart = Vue.component('ring-chart', {
  template: require('./ringchart.html'),
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
          trigger: 'item',
          formatter: "{b}({d}%)"
        },
        series: [
          {
            type: 'pie',
            center: ['50%',  '50%'],
            radius: ['50%',  '75%'],
            data: [],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
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
        this.ringchart.setOption(this.option);
      }
    }
  },
  ready() {
    this.ringchart = echarts.init(document.getElementById(this.chartid));
    this.$options.methods.setchart.bind(this)();
  },
  watch: {
    'data': {
      handler: 'setchart',
      deep: true
    }
  }
});

module.exports = RingChart;
