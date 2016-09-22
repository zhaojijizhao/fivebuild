'use strict';
require('./index.scss');
var VueRouter = require('vue-router');

//框架
var Layout = require('@partial/layout/layout');

//页面
//市场营销
var Market = require('@partial/market/market');
var MarketMenu = require('@partial/marketmenu/marketmenu');
var MarketProgress = require('@partial/marketprogress/marketprogress');
var MarketSecondContract = require('@partial/marketsecondcontract/marketsecondcontract');
var MarketThirdContract = require('@partial/marketthirdcontract/marketthirdcontract');
var MarketRank = require('@partial/marketrank/marketrank');
var MarketRange = require('@partial/marketrange/marketrange');
var MarketRangeArea = require('@partial/marketrangearea/marketrangearea');
var MarketRangeField = require('@partial/marketrangefield/marketrangefield');
//生产技术
var Product = require('@partial/product/product');
var ProductMenu = require('@partial/productmenu/productmenu');
var ProductSecondProgress = require('@partial/productsecondprogress/productsecondprogress');
var ProductThirdProgress = require('@partial/productthirdprogress/productthirdprogress');
var ProductAllAnalyse = require('@partial/productallanalyse/productallanalyse');
var ProductSecondProfessionalAnalyse = require('@partial/productsecondprofessionalanalyse/productsecondprofessionalanalyse');
var ProductSales = require('@partial/productsales/productsales');
var ProductStop = require('@partial/productstop/productstop');
var ProductCompare = require('@partial/productcompare/productcompare');
var ProductCompareArea = require('@partial/productcomparearea/productcomparearea');
var ProductCompareProject = require('@partial/productcompareproject/productcompareproject');

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
        component: Market, //市场营销
        subRoutes: {
          '/menu': {
            component: MarketMenu//泡泡图
          },
          '/progress': {
            component: MarketProgress//中建个工程局完成情况
          },
          '/secondcontract': {
            component: MarketSecondContract//二级单位合同额分析
          },
          '/thirdcontract': {
            component: MarketThirdContract//三级单位合同额分析
          },
          '/rank': {
            component: MarketRank//本月钟表项目排名
          },
          '/range': {
            component: MarketRange//二级单位分类分析
          },
          '/rangearea': {
            component: MarketRangeArea//按地区分析
          },
          '/rangefield': {
            component: MarketRangeField//按行业分析
          },
        }
      },
      '/product': {
        component: Product, //生产技术
        subRoutes: {
          '/menu': {
            component: ProductMenu//泡泡图
          },
          '/secondprogress': {
            component: ProductSecondProgress//二级单位产值完成情况
          },
          '/thirdprogress': {
            component: ProductThirdProgress//三级单位产值完成情况
          },
          '/allanalyse': {
            component: ProductAllAnalyse//全局生产总体情况分析
          },
          '/secondprofessionalanalyse': {
            component: ProductSecondProfessionalAnalyse//二级专业单位产值完成分析
          },
          '/sales': {
            component: ProductSales//中建各工程局营业额情况
          },
          '/stop': {
            component: ProductStop//停工缓建项目情况图
          },
          '/compare': {
            component: ProductCompare//年累产值分类对比分析
          },
          '/comparearea': {
            component: ProductCompareArea//年累产值分析（区域）
          },
          '/compareproject': {
            component: ProductCompareProject//年累产值分析（工程）
          }
        }
      }
    }
  }
});

router.redirect({
  '*': '/index/market/menu'
})

router.start(RootComponent, '#app');
