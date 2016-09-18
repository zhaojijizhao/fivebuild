'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('./commonbox.scss');

var CommonBox = Vue.component('common-box', {
  template: `
    <div class="common__box">
      <div class="common__box-head" v-if="title">
        <span class="common__box-head-left">{{title}}</span>
        <span class="common__box-head-right">{{subtitle}}</span>
      </div>
      <slot></slot>
    </div>
  `,
  props: {
    title: {
      default: null
    },
    subtitle: {
      default: null
    }
  },
  data() {
    return {
    }
  },
  ready() {
  }
});

module.exports = CommonBox;


