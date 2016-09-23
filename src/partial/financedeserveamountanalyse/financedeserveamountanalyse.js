'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceDeserveAmountAnalyse = Vue.extend({
  template: require('./financedeserveamountanalyse.html'),

  data() {
    return {
      targetRank: {
        data: []
      },
      deserveRank: {
        data: []
      },
      incomeRank: {
        data: []
      },
      colors: {
        "各单位应收款项预算指标完成情况排名": color.yellow,
        "各单位应收总额排名（应收款总额）": color.blue,
        "各单位应收款总额排名（比年初增长率）": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/finance/deserveamountanalyse').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.targetRank.data = resp.data.targetRank;
      _this.deserveRank.data = resp.data.deserveRank;
      _this.incomeRank.data = resp.data.incomeRank;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = FinanceDeserveAmountAnalyse;