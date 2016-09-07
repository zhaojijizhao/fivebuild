'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var PageHead = Vue.component('page-head', {
  template: require('./pagehead.html'),
  data() {
    return {
      navs: [
        {
          name: "最新文章",
          link: "/index/news"
        }
      ]
    }
  },
  methods: {
  },
  computed: {
  },
  ready() {
  }
});

module.exports = PageHead;


