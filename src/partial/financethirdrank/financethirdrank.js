'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/piechart/piechart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var FinanceThirdRank = Vue.extend({
  template: require('./financethirdrank.html'),

  data() {
    return {
    }
  },
  methods: {
  },
  ready() {
  },
  components: {
  }
});

module.exports = FinanceThirdRank;