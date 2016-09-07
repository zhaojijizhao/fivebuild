'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var LineChart = require('@component/linechart/linechart');

var MarketProgess = Vue.extend({
  template: require('./marketprogess.html'),

  data() {
    return {
      detailData: [
        {
          name: "房屋建设工程",
          data: [
            {
              company: "总承包公司",
              percent: 84.70,
            },
            {
              company: "三公司",
              percent: 63.64,
            },
            {
              company: "河南公司",
              percent: 63.14,
            },
            {
              company: "山东公司",
              percent: 61.85,
            },
            {
              company: "河北公司",
              percent: 54.28,
            },
            {
              company: "北京公司",
              percent: 51.26,
            },
            {
              company: "安徽公司",
              percent: 50.16,
            },
            {
              company: "广东公司",
              percent: 44.51,
            }
          ]
        },
        {
          name: "基础建设工程",
          data: [
            {
              company: "土木公司",
              percent: 37.88,
            },
            {
              company: "隧道公司",
              percent: 29.97,
            }
          ]
        },
        {
          name: "专业分包公司",
          data: [
            {
              company: "五局装饰",
              percent: 56.15,
            },
            {
              company: "不二幕墙",
              percent: 52.55,
            },
            {
              company: "安装公司",
              percent: 31.89,
            }
          ]
        },
        {
          name: "地产投资公司",
          data: [
            {
              company: "投资公司",
              percent: 136.03,
            },
            {
              company: "信和地产",
              percent: 51.36,
            }
          ]
        }
      ],
      contracts: []
    }
  },
  methods: {
  },
  ready() {
  },
  computed: {
    contracts() {
      return this.detailData.map((v, k) => {
        let result = {
          name: v.name,
          data: {
            labels: v.data.map((dv, dk) => dv.company),
            datasets: [{
              label: v.name,
              backgroundColor: v.data.map((dv, dk) => {
                if (dv.percent >= 90) {
                  return "rgb(6,147,32)";
                } else if (dv.percent >= 80) {
                  return "rgb(242,177,14)";
                } else {
                  return "rgb(215,27,22)";
                }
              }),
              data: v.data.map((dv, dk) => dv.percent)
            }]
          }
        };
        return result;

      });
    }
  },
  components: {
    LineChart: LineChart
  }
});

module.exports = MarketProgess;