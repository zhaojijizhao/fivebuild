'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('@module/bubblemenu/bubblemenu');

var FinancetMenu = Vue.extend({
  template: require('./financemenu.html'),

  data() {
    return {
      links: [
        {
          left: '60',
          top: '210',
          color: 'grey',
          name: '财务管理',
          sub: [
            {
              left: '80',
              top: '80',
              color: 'blue',
              state: '/index/finance/financemaintarget',
              name: '中建各工程局<br/>主要指标情况',
              lineColor: 'green',
              lineHeight: '150',
              lineDeg: '26'
            },
            {
              left: '40',
              top: '70',
              color: 'yellow',
              state: '/index/finance/financethirdrank',
              name: '局三级单位主<br/>要治标排名前十',
              lineColor: 'red',
              lineHeight: '160',
              lineDeg: '-25'
            },
            {
              left: '78',
              top: '350',
              color: 'yellow',
              state: '/index/finance/financepartincome',
              name: '局各板块<br/>营业收入情况',
              lineColor: 'red',
              lineHeight: '120',
              lineDeg: '155'
            },
            {
              left: '18',
              top: '200',
              color: 'blue',
              state: '/index/finance/financetwopriceanalyse',
              name: '财务两金<br/>情况分析',
              lineColor: 'yellow',
              lineHeight: '140',
              lineDeg: '-87'
            },
            {
              left: '30',
              top: '330',
              color: 'red',
              state: '/index/finance/financedeserveamountanalyse',
              name: '财务应收<br/>款项分析',
              lineColor: 'blue',
              lineHeight: '140',
              lineDeg: '-140',
            },
            {
              left: '15',
              top: '440',
              color: 'green',
              state: '/index/finance/financecompanymaintarget',
              name: '各公司主要指<br/>标预算完成情况',
              lineColor: 'yellow',
              lineHeight: '140',
              lineDeg: '-150'
            },
            {
              left: '48',
              top: '420',
              color: 'red',
              state: '/index/finance/financecompanyincreasecompare',
              name: '各公司主要指<br/>标同比增长情况',
              lineColor: 'green',
              lineHeight: '140',
              lineDeg: '145'
            }
          ]
        }
      ]
    }
  },
  ready() {
  },
  components: {
  }
});

module.exports = FinancetMenu;