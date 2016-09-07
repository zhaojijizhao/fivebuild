'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var SearchArea = require('@module/searcharea/searcharea');

var PageSide = Vue.component('page-side', {
  template: require('./pageside.html'),
  props: {
    list: {
      default: []
    }
  },
  data() {
    return {
      name: localStorage.getItem('NAME'),
      token: localStorage.getItem('TOKEN')
    }
  },
  methods: {
  },
  computed: {
    showInfo() {
      return this.name && this.token;
    }
  },
  ready() {
  },
  components: {
    SearchArea: SearchArea
  }
});

module.exports = PageSide;


