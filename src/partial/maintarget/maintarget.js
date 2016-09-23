'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/piechart/piechart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MainTarget = Vue.extend({
  template: require('./maintarget.html'),

  data() {
    return {
      finance: {
        data: []
      },
      business: {
        data: []
      },
      invest: {
        data: []
      },
      fiveyearsmoney: {
        data: []
      },
      fiveyearspercentage: {
        data: []
      },
      colors: {
        "财务指标分析": color.blue,
        "业务分析(亿)": color.yellow,
        "投资指标(%)": color.green,
        "五年趋势(亿)": color.red,
        "五年趋势(%)": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/main/target').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.finance.data = resp.data.finance;
      _this.business.data = resp.data.business;
      _this.invest.data = resp.data.invest;
      _this.fiveyearsmoney.data = resp.data.fiveyearsmoney;
      _this.fiveyearspercentage.data = resp.data.fiveyearspercentage;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = MainTarget;