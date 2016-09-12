'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');

var MarketRangeArea = Vue.extend({
  template: require('./marketrangearea.html'),

  data() {
    return {
    }
  },
  methods: {
    login: function() {
      // var _this = this;
      // if (!this.validate()) {
      //   return;
      // }
      // reqwest({
      //   url: utils.APIPrefix() + 'login?name=' + this.name + "&password=" + this.password,
      //   method: 'POST'
      // }).then(function (resp) {
      //   Toast.show('登陆成功');
      //   localStorage.setItem('TOKEN', resp.token);
      //   localStorage.setItem('NAME', resp.name);
      //   setTimeout(() => {
      //     _this.$router.go('/index/news');
      //   }, 2000);
      // }).catch(function (e) {
      //   console.error(e);
      //   Toast.show("登陆失败");
      // });
    }
  }
});

module.exports = MarketRangeArea;


