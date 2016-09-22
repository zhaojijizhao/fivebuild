'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductAllAnalyse = Vue.extend({
  template: require('./productallanalyse.html'),

  data() {
    return {
      productInfo: {
        data: []
      },
      projectInfo: {
        data: []
      },
      stepMonth: {
        data: []
      },
      colors: {
        "产值情况": color.red,
        "项目情况": color.blue,
        "本月": color.green,
        "去年同期": color.yellow
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/allanalyse').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.productInfo.data = resp.data.productInfo;
      _this.projectInfo.data = resp.data.projectInfo;
      _this.stepMonth.data = resp.data.stepMonth;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductAllAnalyse;