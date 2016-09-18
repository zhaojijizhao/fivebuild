module.exports = {
  method: 'POST',
  path: '/api/market/range',
  response: {
    "byAreaPercentage": [
      {
        "name": "按区块划分占比",
        "data": [
          {
            "name": "华北",
            "value": 29
          },
          {
            "name": "西南",
            "value": 15
          },
          {
            "name": "华东",
            "value": 4
          },
          {
            "name": "西北",
            "value": 7
          },
          {
            "name": "华中",
            "value": 2
          },
          {
            "name": "东北",
            "value": 11
          },
          {
            "name": "华南",
            "value": 2
          },
          {
            "name": "海外",
            "value": 16
          }
        ]
      }
    ],
    "overseasPercentage": [
      {
        "name": "海外占比分析",
        "data": [
          {
            "name": "刚果（布）",
            "value": 34
          },
          {
            "name": "加蓬",
            "value": 28
          },
          {
            "name": "越南",
            "value": 24
          },
          {
            "name": "巴基斯坦",
            "value": 14
          }
        ]
      }
    ]
  }
};