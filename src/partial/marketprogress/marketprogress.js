'use strict';

var {api, utils} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');

var MarketProgess = Vue.extend({
  template: require('./marketprogress.html'),

  data() {
    return {
      allCompany: {
        legend: true,
        data: []
      },
      contractRank: {
        data: []
      },
      thirdCompany: {
        data: []
      },
      colors: {
        "合同额": "rgb(69,135,239)",
        "项目个数": "rgb(248,187,45)",
        "合同额排名": "rgb(69,136,40)",
        "各公司三级单位": "rgb(231,68,60)"
      }
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/market/progress').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.allCompany.data = resp.data.allCompany;
      _this.contractRank.data = resp.data.contractRank;
      _this.thirdCompany.data = resp.data.thirdCompany;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  },
  computed: {
    // contracts() {
    //   return this.detailData.map((v, k) => {
    //     let result = {
    //       name: v.name,
    //       data: {
    //         labels: v.data.map((dv, dk) => dv.name),
    //         datasets: [{
    //           label: v.name,
    //           backgroundColor: v.data.map((dv, dk) => {
    //             if (dv.value >= 90) {
    //               return "rgb(6,147,32)";
    //             } else if (dv.value >= 80) {
    //               return "rgb(242,177,14)";
    //             } else {
    //               return "rgb(215,27,22)";
    //             }
    //           }),
    //           data: v.data.map((dv, dk) => dv.value)
    //         }]
    //       }
    //     };
    //     return result;

    //   });
    // }
  }
});

module.exports = MarketProgess;