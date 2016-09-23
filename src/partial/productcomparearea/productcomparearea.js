'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/piechart/piechart');
require('@module/mapchart/mapchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductCompareArea = Vue.extend({
  template: require('./productcomparearea.html'),

  data() {
    return {
      byMap: {
        data: []
      },
      byYear: {
        data: []
      },
      colors: {
        "各省年累产值分布图": color.blue,
        "年累分区域对比情况": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/comparearea').then(function (resp) {
      // _.each(resp.data, (content, type) => {
      //   content.forEach((v, k) => {
      //     v.color = _this.colors[v.name];
      //   });
      // });
      _this.byMap.data = resp.data.byMap;
      _this.byYear.data = resp.data.byYear;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductCompareArea;