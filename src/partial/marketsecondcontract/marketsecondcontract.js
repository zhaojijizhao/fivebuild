'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var MarketSecondContract = Vue.extend({
  template: require('./marketsecondcontract.html'),

  data() {
    return {
    }
  },
  methods: {
  },
  ready() {
    // reqwest({
    //   url: 'http://www.zhexueshuping.com/api/artilces/' + this.aid + '/comments',
    //   method: 'GET'
    // }).then(function (resp) {
    //   console.log(resp);
    // }).catch(function (e) {
    //   console.error(e);
    //   Toast.show("获取评论失败");
    // });
  }
});

module.exports = MarketSecondContract;