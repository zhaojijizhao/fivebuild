'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductSales = Vue.extend({
  template: require('./productsales.html'),

  data() {
    return {
      monthSale: {
        data: []
      },
      yearSales: {
        data: []
      },
      salesCompare: {
        data: []
      },
      colors: {
        "本月营业额排名": color.green,
        "年累营业额排名": color.blue,
        "营业额同类排名": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/sales').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.monthSale.data = resp.data.monthSale;
      _this.yearSales.data = resp.data.yearSales;
      _this.salesCompare.data = resp.data.salesCompare;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductSales;