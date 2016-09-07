'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var PageHead = require('@module/pagehead/pagehead');
var PageFoot = require('@module/pagefoot/pagefoot');

var Layout = Vue.extend({
  template: require('./layout.html'),

  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  ready() {
  },
  components: {
    PageHead: PageHead,
    PageFoot: PageFoot
  }
});

module.exports = Layout;


