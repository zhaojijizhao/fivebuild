'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/piechart/piechart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceTwoPriceAnalyse = Vue.extend({
  template: require('./financetwopriceanalyse.html'),

  data() {
    return {
      twoPricePercentage: {
        data: []
      },
      twoPriceCompose: {
        data: []
      },
      twoPriceDebate: {
        data: []
      },
      twoPriceFinish: {
        data: []
      },
      twoPriceRank: {
        data: []
      },
      twoPriceRate: {
        data: []
      },
      colors: {
        "全局两金三项占比分析": color.green,
        "全局两金构成分析": color.yellow,
        "欠款情况分类分析": color.red,
        "各单位两金预算指标完成率排名": color.blue,
        "各单位两金情况排名": color.yellow,
        "各单位两金比年初增长率排名": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/finance/twopriceanalyse').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.twoPricePercentage.data = resp.data.twoPricePercentage;
      _this.twoPriceCompose.data = resp.data.twoPriceCompose;
      _this.twoPriceDebate.data = resp.data.twoPriceDebate;
      _this.twoPriceFinish.data = resp.data.twoPriceFinish;
      _this.twoPriceRank.data = resp.data.twoPriceRank;
      _this.twoPriceRate.data = resp.data.twoPriceRate;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = FinanceTwoPriceAnalyse;