'use strict';
require('./test.scss');
var echarts = require('echarts');
require('@vendor/china');


var RootComponent = Vue.extend({
  template: require('./test.html'),
  data () {
    return {}
  },
  methods: {
  },
  computed: {
  },
  ready() {
    var barchart = echarts.init(document.getElementById('demo1'));
    barchart.setOption({
      tooltip: {}, 
      xAxis: {
        data: ["投资公司",  "三公司",  "山东公司"], 
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
          textStyle: {
            color: function(val) {
              if (val == 20 || val == 80) {
                return '#999';
              } else {
                return 'transparent';
              }
            }
          }, 
          formatter: function(value,  index) {
            return value + "%"
          }
        }, 
        splitLine: {
          lineStyle: {
            color: [
              'transparent', 
              'rgb(226, 212, 8)', 
              'transparent', 
              'transparent', 
              'rgb(83, 181, 108)', 
              'transparent', 
              'transparent', 
              'transparent', 
              'transparent', 
              'transparent', 
              'transparent'], 
            type: 'dash'
          }
        }
      }, 
      series: [
        {
          type: 'bar', 
          data: [
            {
              value: 130.4, 
              name: '投资公司', 
              itemStyle: {
                normal: {
                  color: 'rgb(207, 97, 19)'
                }
              }
            }, 
            {
              value: 70.9, 
              name: '三公司', 
              itemStyle: {
                normal: {
                  color: 'rgb(83, 181, 108)'
                }
              }
            }, 
            {
              value: 48.4, 
              name: '山东公司', 
              itemStyle: {
                normal: {
                  color: 'rgb(226, 212, 8)'
                }
              }
            }
          ]
        }
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
    });

    var ringchart = echarts.init(document.getElementById('demo2'));
    ringchart.setOption({
      tooltip: {
        trigger: 'item', 
        formatter: "{b}({d}%)"
      }, 
      series: [
        {
          type: 'pie', 
          center: ['50%',  '50%'], 
          radius: ['50%',  '75%'], 
          data: [
            {value: 34,  name: '刚果（布）'}, 
            {value: 28,  name: '加蓬'}, 
            {value: 24,  name: '越南'}, 
            {value: 14,  name: '巴基斯坦'}
          ].sort(function (a,  b) { return a.value - b.value}), 
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
      ], 
      legend: {
        x: 'center', 
        y: 'bottom', 
        itemWidth: 15, 
        itemHeight: 15, 
        textStyle: {
          color: '#999'
        }, 
        data: [
          {
            name: '刚果（布）', 
            icon: 'rect'
          }, 
          {
            name: '加蓬', 
            icon: 'rect'
          }, 
          {
            name: '越南', 
            icon: 'rect'
          }, 
          {
            name: '巴基斯坦', 
            icon: 'rect'
          }
        ]
      }
    });

    var piechart = echarts.init(document.getElementById('demo3'));
    piechart.setOption({
      tooltip: {
        trigger: 'item', 
        formatter: "{b}({d}%)"
      }, 
      series: [
        {
          type: 'pie', 
          center: ['50%',  '50%'], 
          radius: ['0',  '75%'], 
          roseType: 'radius', 
          data: [
            {value: 40,  name: '房建'}, 
            {value: 30,  name: '钢结构'}, 
            {value: 26,  name: '基础设施'}, 
            {value: 3,  name: '装饰'}, 
            {value: 1,  name: '其他'}, 
            {value: 0,  name: '安装'}
          ].sort(function (a,  b) { return a.value - b.value}), 
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
      ],
      legend: {
        x: 'center', 
        y: 'bottom', 
        itemWidth: 15, 
        itemHeight: 15, 
        textStyle: {
          color: '#999'
        }, 
        data: [
          {
            name: '房建', 
            icon: 'circle'
          }, 
          {
            name: '钢结构', 
            icon: 'circle'
          }, 
          {
            name: '基础设施', 
            icon: 'circle'
          }, 
          {
            name: '装饰', 
            icon: 'circle'
          }, 
          {
            name: '其他', 
            icon: 'circle'
          }, 
          {
            name: '安装', 
            icon: 'circle'
          }
        ]
      }
    });

    var mapchart = echarts.init(document.getElementById('demo4'));
    mapchart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        x: 'center', 
        y: 'bottom', 
        data: [
          {
            name: '5%以下', 
            icon: 'circle'
          }, 
          {
            name: '5%－20%', 
            icon: 'circle'
          }, 
          {
            name: '20%以上', 
            icon: 'circle'
          }
        ]
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
    });
  }
});

new RootComponent({ el: '#app' });
