'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('@module/bubblemenu/bubblemenu');

var ProductMenu = Vue.extend({
  template: require('./productmenu.html'),

  data() {
    return {
      links: [
        {
          left: '60',
          top: '210',
          color: 'grey',
          name: '生产技术',
          sub: [
            {
              left: '80',
              top: '80',
              color: 'yellow',
              state: '/index/market/secondprogress',
              name: '二级单位<br/>产值完成情况',
              lineColor: 'red',
              lineHeight: '150',
              lineDeg: '30'
            },
            {
              left: '40',
              top: '70',
              color: 'blue',
              state: '/index/market/thirdprogress',
              name: '三级单位<br/>产值完成情况',
              lineColor: 'green',
              lineHeight: '160',
              lineDeg: '-30'
            },
            {
              left: '78',
              top: '350',
              color: 'red',
              state: '/index/market/allanalyse',
              name: '全局生产总<br/>体情况分析',
              lineColor: 'yellow',
              lineHeight: '120',
              lineDeg: '150'
            },
            {
              left: '18',
              top: '200',
              color: 'green',
              state: '/index/market/secondprofessionalanalyse',
              name: '二级专业单位<br/>产值完成分析',
              lineColor: 'blue',
              lineHeight: '140',
              lineDeg: '-87'
            },
            {
              left: '18',
              top: '200',
              color: 'green',
              state: '/index/market/sales',
              name: '中建各工程<br/>局营业额情况',
              lineColor: 'blue',
              lineHeight: '140',
              lineDeg: '-87'
            },
            {
              left: '18',
              top: '200',
              color: 'green',
              state: '/index/market/stop',
              name: '停工缓建<br/>项目情况图',
              lineColor: 'blue',
              lineHeight: '140',
              lineDeg: '-87'
            },
            {
              left: '30',
              top: '330',
              color: 'yellow',
              state: '/index/market/compare',
              name: '年累产值分<br/>类对比分析',
              lineColor: 'green',
              lineHeight: '140',
              lineDeg: '-135',
              sub: [
                {
                  left: '15',
                  top: '440',
                  color: 'red',
                  state: '/index/market/comparearea',
                  name: '年累产值<br/>分析（区域）',
                  lineColor: 'green',
                  lineHeight: '140',
                  lineDeg: '-150'
                },
                {
                  left: '48',
                  top: '420',
                  color: 'blue',
                  state: '/index/market/compareproject',
                  name: '年累产值<br/>分析（工程）',
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

module.exports = ProductMenu;