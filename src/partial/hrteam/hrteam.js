'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/ringchart/ringchart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var HrTeam = Vue.extend({
  template: require('./hrteam.html'),

  data() {
    return {
      education: {
        data: []
      },
      type: {
        data: []
      },
      gender: {
        data: []
      },
      age: {
        data: []
      },
      workage: {
        data: []
      },
      colors: {
        "学历分析": color.blue,
        "用工性质": color.blue,
        "性别分析": color.blue,
        "年龄构成分析": color.blue,
        "工龄信息分析": color.red
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/hr/team').then(function (resp) {
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.education.data = resp.data.education;
      _this.type.data = resp.data.type;
      _this.gender.data = resp.data.gender;
      _this.age.data = resp.data.age;
      _this.workage.data = resp.data.workage;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = HrTeam;