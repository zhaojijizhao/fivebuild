'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var OperateFourusage = Vue.extend({
  template: require('./operatefourusage.html'),

  data() {
    return {
      fourusage: {},
      other: [],
      searchinfo: {},
      companylist: ["中国建筑", "asdfasdfa", "safdasdf"]
    }
  },
  methods: {
  },
  ready() {
    var _this = this;
    api.post('/api/operate/fourusage').then(function (resp) {
      _this.fourusage.data = resp.data.fourusage;
      _this.other.data = resp.data.other;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = OperateFourusage;