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
    type: {
      defualt: ''
    },
    change: {
      default: function() {
      }
    },
    changemonth: {
      default: function() {
      }
    }
  },
  methods: {
    choose(index, item) {
      this.show = false;
      this.index = index;
      this.name = item;
      if (this.changemonth) {
        this.changemonth(item);
      }
      if (this.change) {
        this.change(item, this.type);
      }
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


