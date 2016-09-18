'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MarketSecondContract = Vue.extend({
  template: require('./marketsecondcontract.html'),

  data() {
    return {
      contractValue: {
        data: []
      },
      contractComplete: {
        data: []
      },
      contractCompare: {
        data: []
      },
      uncontract: {
        data: []
      },
      colors: {
        "合同额排名": color.yellow,
        "合同额完成指标": color.red,
        "合同额同比情况": color.red,
        "中标未签合同额排名": color.blue
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/market/secondcontract').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.contractValue.data = resp.data.contractValue;
      _this.contractComplete.data = resp.data.contractComplete;
      _this.contractCompare.data = resp.data.contractCompare;
      _this.uncontract.data = resp.data.uncontract;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = MarketSecondContract;