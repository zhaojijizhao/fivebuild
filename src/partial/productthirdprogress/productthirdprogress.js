'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductThirdProgress = Vue.extend({
  template: require('./productthirdprogress.html'),

  data() {
    return {
      topTen: {
        data: []
      },
      lastFive: {
        data: []
      },
      colors: {
        "年累产值前十": color.green,
        "去年同期前十": color.yellow,
        "年累产值后五": color.red,
        "去年同期后五": color.blue
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/thirdprogress').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.topTen.data = resp.data.topTen;
      _this.lastFive.data = resp.data.lastFive;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductThirdProgress;