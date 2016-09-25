'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceThirdRank = Vue.extend({
  template: require('./financethirdrank.html'),

  data() {
    return {
      rank: {
        data: []
      },
      compare: {
        data: []
      },
      colors: {
        "三级单位营业收入排名（本年累计）": color.green,
        "同比增长": color.blue
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/finance/thirdrank').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.rank.data = resp.data.rank;
      _this.compare.data = resp.data.compare;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = FinanceThirdRank;