module.exports = {
  method: 'POST',
  path: '/api/market/rangearea',
  response: {
    "mapPercentage": [
      {
        "name": "中建五局合同额占比示意图",
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
    "provinceRankTop": [
      {
        "name": "前三名",
        "data": [
          {
            "name": "湖南",
            "value": 29.22
          },
          {
            "name": "广东",
            "value": 9.68
          },
          {
            "name": "河南",
            "value": 7.81
          }
        ]
      }
    ],
    "provinceRankBottom": [
      {
        "name": "后三名",
        "data": [
          {
            "name": "重庆",
            "value": 0.24
          },
          {
            "name": "上海",
            "value": 0.26
          },
          {
            "name": "福建",
            "value": 0.35
          }
        ]
      }
    ]
  }
};