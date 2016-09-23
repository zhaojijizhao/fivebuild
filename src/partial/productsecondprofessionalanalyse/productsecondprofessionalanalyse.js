'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductSecondProfessionAlanalyse = Vue.extend({
  template: require('./productsecondprofessionalanalyse.html'),

  data() {
    return {
      basicInfo: {
        data: []
      },
      threeProfession: {
        data: []
      },
      overseasCompany: {
        data: []
      },
      secondProgress: {
        data: []
      },
      colors: {
        "两个以基础设施为主公司生产完成情况": color.red,
        "三个专业公司生产完成情况": color.yellow,
        "海外公司完成情况": color.green,
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
    api.post('/api/product/secondprofessionalanalyse').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
          v.showline = false;
        });
      });
      _this.basicInfo.data = resp.data.basicInfo;
      _this.threeProfession.data = resp.data.threeProfession;
      _this.overseasCompany.data = resp.data.overseasCompany;
      _this.secondProgress.data = resp.data.secondProgress;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductSecondProfessionAlanalyse;