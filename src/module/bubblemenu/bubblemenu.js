'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('./bubblemenu.scss');

var BubbleMenu = Vue.component('bubble-menu', {
  template: require('./bubblemenu.html'),
  props: {
    data: {
      default: []
    }
  },
  data() {
    return {
    }
  },
  ready() {
  }
});

module.exports = BubbleMenu;


