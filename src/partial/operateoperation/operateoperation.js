'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var OperateOperation = Vue.extend({
  template: require('./operateoperation.html'),

  data() {
    return {
      data: {
      },
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/operate/operation').then(function (resp) {
      _this.data = resp.data;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = OperateOperation;