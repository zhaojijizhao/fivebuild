'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/ringchart/ringchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MarketRange = Vue.extend({
  template: require('./marketrange.html'),

  data() {
    return {
      byAreaPercentage: {
        data: []
      },
      overseasPercentage: {
        data: []
      },
      colors: {
        "按区块划分占比": color.yellow,
        "海外占比分析": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/market/range').then(function (resp) {
      // _.each(resp.data, (content, type) => {
      //   content.forEach((v, k) => {
      //     v.color = _this.colors[v.name];
      //   });
      // });
      _this.byAreaPercentage.data = resp.data.byAreaPercentage;
      _this.overseasPercentage.data = resp.data.overseasPercentage;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = MarketRange;