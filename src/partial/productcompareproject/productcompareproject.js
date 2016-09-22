'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/piechart/piechart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var ProductCompareProject = Vue.extend({
  template: require('./productcompareproject.html'),

  data() {
    return {
      allTypeProject: {
        data: []
      },
      allFieldOutputProject: {
        data: []
      },
      colors: {
        "年累分工程类对比情况": color.yellow,
        "按行业各单位产值分布情况图": color.green
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/product/compareproject').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          if (v.name == "按行业各单位产值分布情况图") {
            v.color = _this.colors[v.name];
          }
        });
      });
      _this.allTypeProject.data = resp.data.allTypeProject;
      _this.allFieldOutputProject.data = resp.data.allFieldOutputProject;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = ProductCompareProject;