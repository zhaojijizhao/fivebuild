'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceCompanyIncreaseCompare = Vue.extend({
  template: require('./financecompanyincreasecompare.html'),

  data() {
    return {
      sales: {
        data: []
      },
      income: {
        data: []
      },
      cash: {
        data: []
      },
      colors: {
        "营业收入同期增长排名": color.red,
        "利润总额同比增长排名": color.blue,
        "经营活动现金流量净额同比增额排名": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/finance/companyincreasecompare').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.sales.data = resp.data.sales;
      _this.income.data = resp.data.income;
      _this.cash.data = resp.data.cash;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = FinanceCompanyIncreaseCompare;