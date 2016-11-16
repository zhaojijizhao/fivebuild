'use strict';

var {api, utils, color} = require('@common');
var _ = require('lodash');
var Toast = require('@component/toast/toast');
require('@module/commonbox/commonbox');
require('@module/searchbox/searchbox');
require('./operateoperation.scss');

var OperateOperation = Vue.extend({
  template: require('./operateoperation.html'),
  data() {
    return {
      circlerect: {
      },
      fourusage: {},
      other: [],
      searchinfo: {
      },
      respfourusage: [],
      companylist: [],
      projectlist: [],
      dataobj: []
    }
  },
  methods: {
    change(item, type) {
      let _this = this;
      let result = null;
      if (type == 'company') {
        let company = _this.dataobj.find((v, k) => {
          return v.name == item;
        });
        _this.projectlist = company.list.map((v, k) => {return v.name});
        _this.searchinfo.project = _this.projectlist[0];
        _this.monthlist = company.list[0].list.map((v, k) => {return v.name});
        _this.searchinfo.month = company.list[0].list[0].name;
      }
      if (type == 'project') {
        let list = [];
        _this.dataobj.map((v, k) => {
          if (v.name == _this.searchinfo.company) {
            v.list.map((v2, k2) => {
              if (v2.name == item) {
                list = v2.list;
              }
            });
          }
        });
        _this.monthlist = list.map((v, k) => { return v.name});
        _this.searchinfo.month = _this.monthlist[0];
      }
      if (type == 'month') {
      }

      _this.respfourusage.map((v, k) => {
        let info = _this.searchinfo;
        let month = info.month > 9 ? info.month : "0" + info.month;
        if ((info.year + "-" + month == v.yearMonth) && (info.company == v.unitName) && (info.project == v.projectName)) {
          result = v;
          _this.fourusage = v;
        }
      });
      if (!result) {
        alert("没有数据");
      }
    }
  },
  ready() {
    var _this = this;
    api.post('http://yd.cscec5b.com.cn:10103/projectoperation/jsonread').then(function (resp) {
      _this.circlerect = resp.data.circlerect;
      _this.fourusage = resp.data.fourusage[0];
      _this.respfourusage = resp.data.fourusage;
      _this.other = resp.data.other;
      if (resp.data.fourusage && resp.data.fourusage[0]) {
        _this.searchinfo = {
          company: resp.data.fourusage[0].unitName,
          project: resp.data.fourusage[0].projectName,
          year: 2016,
          month: parseInt(resp.data.fourusage[0].yearMonth.slice(5, 7), 10)
        }
      }
      if (resp.data.fourusage) {
        resp.data.fourusage.map((v, k) => {
          let company = _this.dataobj.find((company, ck) => { return v.unitName == company.name});
          if (!company) {
            _this.dataobj.push({
              name: v.unitName,
              list: [
                {
                  name: v.projectName,
                  list: [
                    {
                      name: parseInt(v.yearMonth.slice(5, 7), 10)
                    }
                  ]
                }
              ]
            });
          } else {
            let project = company.list.find((project, pk) => { return v.projectName == project.name});
            if (!project) {
              company.list.push({
                name: v.projectName,
                list: [
                  {
                    name: parseInt(v.yearMonth.slice(5, 7), 10)
                  }
                ]
              })
            } else {
              project.list.push({
                name: parseInt(v.yearMonth.slice(5, 7), 10)
              })
            }
          }
        });
      }
      _this.companylist = _this.dataobj.map((v, k) => { return v.name});
      _this.projectlist = _this.dataobj[0].list.map((v, k) => { return v.name});
      _this.monthlist = _this.dataobj[0].list[0].list.map((v, k) => { return v.name});
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取信息失败");
    });
  }
});

module.exports = OperateOperation;