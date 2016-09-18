'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/mapchart/mapchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MarketRangeArea = Vue.extend({
  template: require('./marketrangearea.html'),

  data() {
    return {
      mapPercentage: {
        data: []
      },
      provinceRankTop: {
        data: []
      },
      provinceRankBottom: {
        data: []
      },
      colors: {
        "中建五局合同额占比示意图": color.yellow,
        "前三名": color.red,
        "后三名": color.green,
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
    login: function() {
      var _this = this;
      api.post('/api/market/rangefield').then(function (resp) {
        // _.each(resp.data, (content, type) => {
        //   content.forEach((v, k) => {
        //     if (v.name == "项目按行业划分情况图") {
        //       v.color = _this.colors[v.name];
        //     }
        //   });
        // });
        _this.mapPercentage.data = resp.data.mapPercentage;
        _this.provinceRankTop.data = resp.data.provinceRankTop;
        _this.provinceRankBottom.data = resp.data.provinceRankBottom;
      }).catch(function (e) {
        console.error(e);
        Toast.show("获取信息失败");
      });
    }
  }
});

module.exports = MarketRangeArea;


