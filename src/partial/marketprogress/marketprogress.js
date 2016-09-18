'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MarketProgess = Vue.extend({
  template: require('./marketprogress.html'),

  data() {
    return {
      allCompany: {
        data: []
      },
      contractRank: {
        data: []
      },
      thirdCompany: {
        data: []
      },
      colors: {
        "合同额": color.blue,
        "项目个数": color.yellow,
        "合同额排名": color.green,
        "各公司三级单位": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/market/progress').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.allCompany.data = resp.data.allCompany;
      _this.contractRank.data = resp.data.contractRank;
      _this.thirdCompany.data = resp.data.thirdCompany;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  },
  computed: {
  }
});

module.exports = MarketProgess;