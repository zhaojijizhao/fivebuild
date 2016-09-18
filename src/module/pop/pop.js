'use strict';

var {api, utils} = require('@common');
var Toast = require('@component/toast/toast');
require('./pop.scss');


var Pop = Vue.component('pop', {
  template: `
    <div class="pop__block" v-show="show">
      <ul>
        <li v-for="(index, item) in list" @click='choose(index,item)'>{{item}}</li>
      </ul>
    </div>
  `,
  props: {
    show: {
      default: false
    },
    list: {
      default: []
    },
    index: {
      default: null
    },
    name: {
      default: null
    },
  },
  methods: {
    choose(index, item) {
      this.show = false;
      this.index = index;
      this.name = item;
    }
  },
  data() {
    return {
    }
  },
  ready() {
  }
});

module.exports = Pop;


