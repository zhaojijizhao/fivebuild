'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceCompanyMainTarget = Vue.extend({
  template: require('./financemaintarget.html'),

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
        "营业收入排名": color.red,
        "净利润排名": color.blue,
        "经营性现金流排名": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/finance/maintarget').then(function (resp) {
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

module.exports = FinanceCompanyMainTarget;