'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('./pagehead.scss');

var PageHead = Vue.component('page-head', {
  template: require('./pagehead.html'),
  data() {
    return {
      navs: [
        {
          name: "主要指标",
          link: "/index/main/target",
          icon: "main"
        },
        {
          name: "市场营销",
          link: "/index/market/menu",
          icon: "market"
        },
        {
          name: "生产技术",
          link: "/index/product/menu",
          icon: "product"
        },
        {
          name: "财务管理",
          link: "/index/finance/menu",
          icon: "finance"
        },
        {
          name: "人力资源",
          link: "/index/hr/team",
          icon: "hr"
        },
        {
          name: "项目运营",
          link: "/index/operate/operation",
          icon: "operate"
        }
      ],
      path: this.$route.path
    }
  },
  methods: {
  },
  computed: {
  },
  ready() {
  },
  watch: {
    $route() {
      this.path = this.$route.path;
    }
  }
});

module.exports = PageHead;


