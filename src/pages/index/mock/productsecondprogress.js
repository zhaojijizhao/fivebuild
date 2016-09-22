module.exports = {
  method: 'POST',
  path: '/api/product/secondprogress',
  response: {
    "secondProgress": [
      {
        "name": "二级单位产值完成预警分析",
        "data": [
          {
            "name": "东北公司",
            "value": 84.70
          },
          {
            "name": "广东公司",
            "value": 63.64
          },
          {
            "name": "河南公司",
            "value": 63.14
          },
          {
            "name": "土木公司",
            "value": 61.85
          },
          {
            "name": "阿国公司",
            "value": 54.28
          },
          {
            "name": "山东公司",
            "value": 51.26
          },
          {
            "name": "三公司",
            "value": 50.16
          },
          {
            "name": "安装公司",
            "value": 44.51
          }
        ],
        "line": [
          {
            "value": 90,
            "color": "yellow"
          },
          {
            "value": 80,
            "color": "red"
          }
        ]
      }
    ]
  }
};