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
      monthRank: {
        data: []
      },
      yearRank: {
        data: []
      },
      yearCompare: {
        data: []
      },
      yearTarget: {
        data: []
      },
      personTarget: {
        data: []
      },
      colors: {
        "本月产值排名": color.red,
        "年累产值排名": color.green,
        "年累产值同比情况": color.yellow,
        "年目标完成情况": color.blue,
        "各单位人均完成值": color.dark
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
      _this.monthRank.data = resp.data.monthRank;
      _this.yearRank.data = resp.data.yearRank;
      _this.yearCompare.data = resp.data.yearCompare;
      _this.yearTarget.data = resp.data.yearTarget;
      _this.personTarget.data = resp.data.personTarget;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductSecondProgress;