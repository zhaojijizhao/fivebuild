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
        month: null,
        project: null
      }
    },
    change: {
      default: function() {
      }
    },
    month: {
      default: ''
    },
    projectlist: {
      default: []
    },
    companylist: {
      default: []
    },
    changemonth: {
      default: function() {
      }
    }
  },
  methods: {
    focus(types) {
      this[types + 'show'] = true;
    }
  },
  data() {
    return {
      yearlist: [2016],
      monthlist: _.range(1, new Date().getMonth() + 2),
      companyshow: false,
      yearshow: false,
      monthshow: false,
      projectshow: false
    }
  },
  computed: {
    monthlist() {
      return this.month;
    }
  },
  ready() {
  }
});

module.exports = SearchBox;


