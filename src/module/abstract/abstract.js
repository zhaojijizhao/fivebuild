'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Abstract = Vue.extend({
  template: require('./abstract.html'),
  props: {
    article: {
      default: {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  ready() {
  }
});

module.exports = Abstract;