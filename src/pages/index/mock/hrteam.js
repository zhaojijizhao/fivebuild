module.exports = {
  method: 'POST',
  path: '/api/hr/team',
  response: {
    "education": [
      {
        "name": "学历分析",
        "data": [
          {
            "name": "本科",
            "value": 84.70
          },
          {
            "name": "专科",
            "value": 63.64
          },
          {
            "name": "高中及以下",
            "value": 63.14
          },
          {
            "name": "研究生",
            "value": 61.85
          }
        ]
      }
    ],
    "type": [
      {
        "name": "用工性质",
        "data": [
          {
            "name": "自由员工",
            "value": 84.70
          },
          {
            "name": "派遣员工",
            "value": 63.64
          },
          {
            "name": "其他员工",
            "value": 63.14
          }
        ]
      }
    ],
    "gender": [
      {
        "name": "性别分析",
        "data": [
          {
            "name": "男性",
            "value": 84.70
          },
          {
            "name": "女性",
            "value": 63.64
          }
        ]
      }
    ],
    "age": [
      {
        "name": "年龄构成分析",
        "data": [
          {
            "name": "30岁及以下",
            "value": 84.70
          },
          {
            "name": "30-35",
            "value": 63.64
          },
          {
            "name": "36-45",
            "value": 63.14
          },
          {
            "name": "46－55",
            "value": 61.85
          },
          {
            "name": "56-59",
            "value": 54.28
          },
          {
            "name": "其他",
            "value": 54.28
          }
        ]
      }
    ],
    "workage": [
      {
        "name": "工龄信息分析",
        "data": [
          {
            "name": "3年以内",
            "value": 84.70
          },
          {
            "name": "3-10",
            "value": 63.64
          },
          {
            "name": "11-20",
            "value": 63.14
          },
          {
            "name": "21-30",
            "value": 61.85
          },
          {
            "name": "30以上",
            "value": 54.28
          }
        ]
      }
    ]
  }
};