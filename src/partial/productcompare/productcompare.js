'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductCompare = Vue.extend({
  template: require('./productcompare.html'),

  data() {
    return {
      compare: {
        data: []
      },
      colors: {
        "年累产值": color.blue,
        "去年同期年累产值": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/compare').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.compare.data = resp.data.compare;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductCompare;