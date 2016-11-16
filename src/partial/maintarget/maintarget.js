'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/barchart/barchart');
require('@module/piechart/piechart');
require('@module/linechart/linechart');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');

var MainTarget = Vue.extend({
  template: require('./maintarget.html'),

  data() {
    return {
      contract: {
        data: []
      },
      account: {
        data: []
      },
      cash: {
        data: []
      },
      income: {
        data: []
      },
      invest: {
        data: []
      },
      payback: {
        data: []
      },
      bar1: {
        data: []
      },
      bar2: {
        data: []
      },
      bar3: {
        data: []
      },
      colors: {
        "合同额今年": color.blue,
        "合同额去年": color.green,
        "营业额今年": color.blue,
        "营业额去年": color.green,
        "经营性现金净流今年": color.blue,
        "经营性现金净流去年": color.green,
        "利润总额今年": color.blue,
        "利润总额去年": color.green,
        "投资额今年": color.blue,
        "投资额去年": color.green,
        "投资回款今年": color.blue,
        "投资回款去年": color.green,
        "合同额": "#f17522",
        "营业额": "#4976cb",
        "经营性现金净流": "#6baf3e",
        "利润总额": "#663299",
        "投资额": "#0070c1",
        "投资回款": "#c55a10"
      },
      searchinfo: {
        company: "中国建筑第五工程局有限公司",
        year: new Date().getYear() + 1900,
        month: new Date().getMonth() + 1
      },
      companylist: ["中国建筑第五工程局有限公司"]
    }
  },
  methods: {
    getToyearLast(data, str) {
      let _this = this;
      let result = {};
      let toyear = data.find((v, k) => {
        return v.name.indexOf('今年');
      });
      if (toyear.data && toyear.data.length > 0) {
        let obj =  toyear.data[_this.searchinfo.month - 1];
        result = {
          value: obj.value,
          name: str,
          itemStyle: {
            normal: {
              color: _this.colors[str]
            }
          }
        }
      }
      return result;
    },
    changeMonth(e) {
      let _this = this;
      _this.bar1.data = [
        {
          name: "主要指标1",
          data: [
            _this.getToyearLast(_this.contract.data, "合同额"),
            _this.getToyearLast(_this.account.data, "营业额")
          ]
        }
      ];
      _this.bar2.data = [
        {
          name: "主要指标2",
          data: [
            _this.getToyearLast(_this.cash.data, "经营性现金净流"),
            _this.getToyearLast(_this.income.data, "利润总额")
          ]
        }
      ];
      _this.bar3.data = [
        {
          name: "主要指标3",
          data: [
            _this.getToyearLast(_this.invest.data, "投资额"),
            _this.getToyearLast(_this.payback.data, "投资回款")
          ]
        }
      ];
    }
  },
  ready() {
    var _this = this;
    api.post('http://yd.cscec5b.com.cn:10103/mainindicator/jsonread').then(function (resp) {
      // 'http://172.30.201.135:10103/mainindicator/jsonread'
      //'./api/main/target'
      _.each(resp.data, (content, type) => {
        content.forEach((v, k) => {
          v.color = _this.colors[v.name];
        });
      });
      _this.contract.data = resp.data.contract;
      _this.account.data = resp.data.account;
      _this.cash.data = resp.data.cash;
      _this.income.data = resp.data.income;
      _this.invest.data = resp.data.invest;
      _this.payback.data = resp.data.payback;
      _this.bar1.data = [
        {
          name: "主要指标1",
          data: [
            _this.getToyearLast(resp.data.contract, "合同额"),
            _this.getToyearLast(resp.data.account, "营业额")
          ]
        }
      ];
      _this.bar2.data = [
        {
          name: "主要指标2",
          data: [
            _this.getToyearLast(resp.data.cash, "经营性现金净流"),
            _this.getToyearLast(resp.data.income, "利润总额")
          ]
        }
      ];
      _this.bar3.data = [
        {
          name: "主要指标3",
          data: [
            _this.getToyearLast(resp.data.invest, "投资额"),
            _this.getToyearLast(resp.data.payback, "投资回款")
          ]
        }
      ];
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = MainTarget;