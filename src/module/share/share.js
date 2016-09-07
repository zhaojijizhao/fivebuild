'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Share = Vue.component('share', {
  template: require('./share.html'),
  props: {
    title: {
      default: "哲学书评"
    },
    desc: {
      default: "哲学书评主要关注对汉语哲学界出版的新书、重要文章的评论，以及对学术名家的访谈。欢迎关注我们并向我们投稿！"
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  ready() {
    let _this = this;
    let interval = setInterval(() => {
      if (window.bShare) {
        window.bShare.addEntry({
          title: _this.title,
          url: location.href,
          summary: _this.desc
        });
        window.bShare.init();
        clearInterval(interval);
      }
    }, 200);
  }
});

module.exports = Share;


