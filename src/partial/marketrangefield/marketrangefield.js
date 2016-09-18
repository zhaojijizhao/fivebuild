'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/piechart/piechart');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MarketRangeField = Vue.extend({
  template: require('./marketrangefield.html'),

  data() {
    return {
      byFieldPercentage: {
        data: []
      },
      threeBusiness: {
        data: []
      },
      projectByField: {
        data: []
      },
      colors: {
        "按行业划分占比": color.yellow,
        "三大业务板块": color.red,
        "项目按行业划分情况图": color.green,
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/market/rangefield').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          if (v.name == "项目按行业划分情况图") {
            v.color = _this.colors[v.name];
          }
        });
      });
      _this.byFieldPercentage.data = resp.data.byFieldPercentage;
      _this.threeBusiness.data = resp.data.threeBusiness;
      _this.projectByField.data = resp.data.projectByField;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = MarketRangeField;