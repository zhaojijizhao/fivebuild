'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
var _ = require('lodash');
require('@module/commonbox/commonbox');
require('@module/pop/pop');
require('./searchbox.scss');


var SearchBox = Vue.component('search-box', {
  template: require('./searchbox.html'),
  props: {
    searchinfo: {
      default: {
        company: null,
        year: null,
        month: null
      }
    },
    companylist: {
      default: []
    }
  },
  methods: {
    focus(types) {
      this[types + 'show'] = true;
    }
  },
  data() {
    return {
      yearlist: _.range(2010, new Date().getYear() + 1900),
      monthlist: _.range(1, 12),
      companyshow: false,
      yearshow: false,
      monthshow: false
    }
  },
  ready() {
  }
});

module.exports = SearchBox;


