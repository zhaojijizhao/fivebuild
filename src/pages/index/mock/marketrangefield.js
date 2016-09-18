module.exports = {
  method: 'POST',
  path: '/api/market/rangefield',
  response: {
    "byFieldPercentage": [
      {
        "name": "按行业划分占比",
        "data": [
          {
            "name": "房建",
            "value": 40
          },
          {
            "name": "钢结构",
            "value": 3
          },
          {
            "name": "基础设施",
            "value": 30
          },
          {
            "name": "装饰",
            "value": 1
          },
          {
            "name": "其他",
            "value": 26
          },
          {
            "name": "安装",
            "value": 0
          }
        ]
      }
    ],
    "threeBusiness": [
      {
        "name": "三大业务板块",
        "data": [
          {
            "name": "房屋建筑",
            "value": 50
          },
          {
            "name": "基础设施",
            "value": 38
          },
          {
            "name": "地产投资",
            "value": 22
          }
        ]
      }
    ],
    "projectByField": [
      {
        "name": "项目按行业划分情况图",
        "data": [
          {
            "name": "三公司中南",
            "value": 84.70
          },
          {
            "name": "三公司",
            "value": 63.64
          },
          {
            "name": "河南公司",
            "value": 63.14
          },
          {
            "name": "山东公司",
            "value": 61.85
          },
          {
            "name": "河北公司",
            "value": 54.28
          },
          {
            "name": "北京公司",
            "value": 51.26
          },
          {
            "name": "安徽公司",
            "value": 50.16
          },
          {
            "name": "广东公司",
            "value": 44.51
          },
          {
            "name": "安徽公司",
            "value": 50.16
          },
          {
            "name": "广东公司",
            "value": 44.51
          }
        ]
      }
    ]
  }
};