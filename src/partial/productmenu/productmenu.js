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
          left: '52',
          top: '250',
          color: 'grey',
          name: '生产技术',
          sub: [
            {
              left: '85',
              top: '240',
              color: 'yellow',
              state: '/index/product/secondprogress',
              name: '二级单位<br/>产值完成情况',
              lineColor: 'red',
              lineHeight: '150',
              lineDeg: '90'
            },
            {
              left: '75',
              top: '400',
              color: 'blue',
              state: '/index/product/thirdprogress',
              name: '三级单位<br/>产值完成情况',
              lineColor: 'green',
              lineHeight: '160',
              lineDeg: '155'
            },
            {
              left: '78',
              top: '100',
              color: 'red',
              state: '/index/product/allanalyse',
              name: '全局生产总<br/>体情况分析',
              lineColor: 'yellow',
              lineHeight: '200',
              lineDeg: '30'
            },
            {
              left: '20',
              top: '60',
              color: 'red',
              state: '/index/product/secondprofessionalanalyse',
              name: '二级专业单位<br/>产值完成分析',
              lineColor: 'blue',
              lineHeight: '240',
              lineDeg: '-30'
            },
            {
              left: '18',
              top: '220',
              color: 'green',
              state: '/index/product/sales',
              name: '中建各工程<br/>局营业额情况',
              lineColor: 'red',
              lineHeight: '140',
              lineDeg: '-80'
            },
            {
              left: '48',
              top: '110',
              color: 'blue',
              state: '/index/product/stop',
              name: '停工缓建<br/>项目情况图',
              lineColor: 'green',
              lineHeight: '140',
              lineDeg: '-8'
            },
            {
              left: '28',
              top: '350',
              color: 'yellow',
              state: '/index/product/compare',
              name: '年累产值分<br/>类对比分析',
              lineColor: 'blue',
              lineHeight: '140',
              lineDeg: '-140',
              sub: [
                {
                  left: '15',
                  top: '460',
                  color: 'blue dbl',
                  state: '/index/product/comparearea',
                  name: '年累产值<br/>分析（区域）',
                  lineColor: 'red',
                  lineHeight: '100',
                  lineDeg: '-155'
                },
                {
                  left: '46',
                  top: '430',
                  color: 'green dbl',
                  state: '/index/product/compareproject',
                  name: '年累产值<br/>分析（工程）',
                  lineColor: 'yellow',
                  lineHeight: '108',
                  lineDeg: '140'
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