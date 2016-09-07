'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var MarketMenu = Vue.extend({
  template: require('./marketmenu.html'),

  data() {
    return {
      links: [
        {
          state: '/index/market/progress',
          name: '中建各工程完成情况'
        },
        {
          state: '/index/market/secondcontract',
          name: '二级单位合同额分析'
        },
        {
          state: '/index/market/thirdcontract',
          name: '三级单位合同额分析'
        },
        {
          state: '/index/market/rank',
          name: '本月中标项目排名'
        },
        {
          state: '/index/market/range',
          name: '二级单位分类分析'
        },
        {
          state: '/index/market/rangearea',
          name: '按地区分析'
        },
        {
          state: '/index/market/rangefield',
          name: '按行业分析'
        }
      ]
    }
  },
  methods: {
    submit() {
      var _this = this;
      // reqwest({
      //   url: utils.APIPrefix() + 'comments?comment=' + this.comment + '&article_id=' + this.aid,
      //   method: 'POST',
      //   data: {
      //     comment: this.comment,
      //     article_id: this.aid
      //   },
      //   headers: {
      //     'Authorization': 'Token token=' + this.token + ',name=' + this.name
      //   }
      // }).then(function (resp) {
      //   Toast.show("发布评论成功");
      //   setTimeout(() => {
      //     _this.update();
      //   }, 2000);
      // }).catch(function (e) {
      //   console.error(e);
      //   Toast.show("发布评论失败");
      // });
    }
  },
  ready() {
  },
  components: {
  }
});

module.exports = MarketMenu;