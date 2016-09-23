'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceCompanyMainTarget = Vue.extend({
  template: require('./financecompanymaintarget.html'),

  data() {
    return {
      budget: {
        data: []
      },
      finish: {
        data: []
      },
      cash: {
        data: []
      },
      colors: {
        "各单位累计营业收入预算指标完成情况排名": color.red,
        "各单位累计利润预算完成情况排名": color.blue,
        "各单位累计现金流预算指标完成情况排名": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/finance/companymaintarget').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.budget.data = resp.data.budget;
      _this.finish.data = resp.data.finish;
      _this.cash.data = resp.data.cash;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = FinanceCompanyMainTarget;