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
//财务管理
var Finance = require('@partial/finance/finance');
var FinanceMenu = require('@partial/financemenu/financemenu');
var FinanceMainTarget = require('@partial/financemaintarget/financemaintarget');
var FinancePartIncome = require('@partial/financepartincome/financepartincome');
var FinanceThirdRank = require('@partial/financethirdrank/financethirdrank');
var FinanceTwoPriceAnalyse = require('@partial/financetwopriceanalyse/financetwopriceanalyse');
var FinanceDeserveAmountAnalyse = require('@partial/financedeserveamountanalyse/financedeserveamountanalyse');
var FinanceCompanyMainTarget = require('@partial/financecompanymaintarget/financecompanymaintarget');
var FinanceCompanyIncreaseCompare = require('@partial/financecompanyincreasecompare/financecompanyincreasecompare');
//人力资源
var Hr = require('@partial/hr/hr');
var HrTeam = require('@partial/hrteam/hrteam');
//项目营运
var Operate = require('@partial/operate/operate');
var OperateOperation = require('@partial/operateoperation/operateoperation');
var OperateFourusage = require('@partial/operatefourusage/operatefourusage');
//主要指标
var Main = require('@partial/main/main');
var MainTarget = require('@partial/maintarget/maintarget');

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
      },
      '/finance': {
        component: Finance, //财务管理
        subRoutes: {
          '/menu': {
            component: FinanceMenu//泡泡图
          },
          '/financemaintarget': {
            component: FinanceMainTarget//中建各工程局主要指标情况
          },
          '/financepartincome': {
            component: FinancePartIncome//局三级单位主要指标排名前十
          },
          '/financethirdrank': {
            component: FinanceThirdRank//局各板块营业收入情况
          },
          '/financetwopriceanalyse': {
            component: FinanceTwoPriceAnalyse//财务两金情况分析
          },
          '/financedeserveamountanalyse': {
            component: FinanceDeserveAmountAnalyse//财务应收款项分析
          },
          '/financecompanymaintarget': {
            component: FinanceCompanyMainTarget//各公司主要指标预算完成情况
          },
          '/financecompanyincreasecompare': {
            component: FinanceCompanyIncreaseCompare//各公司主要指标同比增长情况
          }
        }
      },
      '/hr': {
        component: Hr, //人力资源
        subRoutes: {
          '/team': {
            component: HrTeam//员工队伍结构分析
          }
        }
      },
      '/operate': {
        component: Operate, //项目营运
        subRoutes: {
          '/operation': {
            component: OperateOperation//项目运营
          },
          '/fourusage': {
            component: OperateFourusage//一单四用
          }
        }
      },
      '/main': {
        component: Main, //主要指标
        subRoutes: {
          '/target': {
            component: MainTarget//主要指标
          }
        }
      }
    }
  }
});

router.map({
  '/index': {
    component: Layout,
    subRoutes: {
      '/main': {
        component: Main, //主要指标
        subRoutes: {
          '/target': {
            component: MainTarget//主要指标
          }
        }
      }
    }
  }
});

router.redirect({
  '*': '/index/main/target'
})

router.start(RootComponent, '#app');
