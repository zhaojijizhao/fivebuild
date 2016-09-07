'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var SearchArea = Vue.component('search-area', {
  template: require('./searcharea.html'),
  props: {
    action: {
      default: ''
    }
  },
  data() {
    return {
      types: [
        {
          "name": "作者",
          "value": "search_authors"
        },
        {
          "name": "书名",
          "value": "search_title"
        }
      ],
      search: {
        type: "search_authors",
        key: ''
      }
    }
  },
  methods: {
    submit() {
      return ;
    }
  },
  computed: {
  },
  ready() {
  }
});

module.exports = SearchArea;


