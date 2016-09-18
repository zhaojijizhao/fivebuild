'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MarketRank = Vue.extend({
  template: require('./marketrank.html'),

  data() {
    return {
      houseBuild: {
        data: []
      },
      baseFacility: {
        data: []
      },
      professionalDivide: {
        data: []
      },
      houseInvest: {
        data: []
      },
      colors: {
        "房屋建设工程": color.green,
        "基础设施工程": color.green,
        "专业分包工程": color.green,
        "地产投资": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/market/rank').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.houseBuild.data = resp.data.houseBuild;
      _this.baseFacility.data = resp.data.baseFacility;
      _this.professionalDivide.data = resp.data.professionalDivide;
      _this.houseInvest.data = resp.data.houseInvest;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = MarketRank;