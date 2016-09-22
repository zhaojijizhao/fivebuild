'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductSecondProgress = Vue.extend({
  template: require('./productsecondprogress.html'),

  data() {
    return {
      secondProgress: {
        data: []
      },
      colors: {
        "二级单位产值完成预警分析": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/secondprogress').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
          v.showline = false;
        });
      });
      _this.secondProgress.data = resp.data.secondProgress;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductSecondProgress;