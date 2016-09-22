'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('@module/bubblemenu/bubblemenu');

var MarketMenu = Vue.extend({
  template: require('./marketmenu.html'),

  data() {
    return {
      links: [
        {
          left: '60',
          top: '210',
          color: 'grey',
          name: '市场营销',
          sub: [
            {
              left: '80',
              top: '80',
              color: 'yellow',
              state: '/index/market/progress',
              name: '中建各工程<br/>完成情况',
              lineColor: 'red',
              lineHeight: '150',
              lineDeg: '26'
            },
            {
              left: '40',
              top: '70',
              color: 'blue',
              state: '/index/market/secondcontract',
              name: '二级单位<br/>合同额分析',
              lineColor: 'green',
              lineHeight: '160',
              lineDeg: '-25'
            },
            {
              left: '78',
              top: '350',
              color: 'red',
              state: '/index/market/thirdcontract',
              name: '三级单位<br/>合同额分析',
              lineColor: 'yellow',
              lineHeight: '120',
              lineDeg: '155'
            },
            {
              left: '18',
              top: '200',
              color: 'green',
              state: '/index/market/rank',
              name: '本月中标<br/>项目排名',
              lineColor: 'blue',
              lineHeight: '140',
              lineDeg: '-87'
            },
            {
              left: '30',
              top: '330',
              color: 'yellow',
              state: '/index/market/range',
              name: '二级单位<br/>分类分析',
              lineColor: 'green',
              lineHeight: '140',
              lineDeg: '-140',
              sub: [
                {
                  left: '15',
                  top: '440',
                  color: 'red',
                  state: '/index/market/rangearea',
                  name: '按地区分析',
                  lineColor: 'green',
                  lineHeight: '140',
                  lineDeg: '-150'
                },
                {
                  left: '48',
                  top: '420',
                  color: 'blue',
                  state: '/index/market/rangefield',
                  name: '按行业分析',
                  lineColor: 'red',
                  lineHeight: '140',
                  lineDeg: '145'
                }
              ]
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

module.exports = MarketMenu;