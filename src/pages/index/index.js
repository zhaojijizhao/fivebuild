'use strict';
require('./index.scss');
var VueRouter = require('vue-router');

//框架
var Layout = require('@partial/layout/layout');

//页面
var Market = require('@partial/market/market');
var MarketMenu = require('@partial/marketmenu/marketmenu');
var MarketProgress = require('@partial/marketprogress/marketprogress');
var MarketSecondContract = require('@partial/marketsecondcontract/marketsecondcontract');
var MarketThirdContract = require('@partial/marketthirdcontract/marketthirdcontract');
var MarketRank = require('@partial/marketrank/marketrank');
var MarketRange = require('@partial/marketrange/marketrange');
var MarketRangeArea = require('@partial/marketrangearea/marketrangearea');
var MarketRangeField = require('@partial/marketrangefield/marketrangefield');


Vue.use(VueRouter);

var RootComponent = Vue.extend({
  template: require('./index.html'),
  data () {
    return {}
  },
  methods: {
  },
  computed: {
  },
  ready() {
  }
});

var router = new VueRouter();
router.map({
  '/index': {
    component: Layout,
    subRoutes: {
      '/market': {
        component: Market,
        subRoutes: {
          '/menu': {
            component: MarketMenu
          },
          '/progress': {
            component: MarketProgress
          },
          '/secondcontract': {
            component: MarketSecondContract
          },
          '/thirdcontract': {
            component: MarketThirdContract
          },
          '/rank': {
            component: MarketRank
          },
          '/range': {
            component: MarketRange
          },
          '/rangearea': {
            component: MarketRangeArea
          },
          '/rangefield': {
            component: MarketRangeField
          },
        }
      }
    }
  }
});

router.redirect({
  '*': '/index/market/menu'
})

router.start(RootComponent, '#app');
