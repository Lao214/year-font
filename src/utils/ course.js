var sampleArray = [
  {
    'id' : 1,
    'course' : '领导力与管理技能提升',
    'class' : 'A',
    'children' : [
      {
        'id' : 5,
        'course': '高阶主管的培训课程',
        'class' : 'A-1',
        'children':[
          {
            'id' : 35,
            'course': '政策解读',
            'class' : 'A-1-1',
          },
          {
            'id' : 36,
            'course': '企业文化',
            'class' : 'A-1-2',
          }, 
          {
            'id' : 37,
            'course': '专业能力',
            'class' : 'A-1-3',
          }
        ]
      },
      {
        'id' : 6,
        'course': '中层管理干部培训课程',
        'class' : 'A-2',
        'children':[
          {
            'id' : 38,
            'course': '人员管理',
            'class' : 'A-2-1',
          },
          {
            'id' : 39,
            'course': '工作管理',
            'class' : 'A-2-2',
          }, 
          {
            'id' : 40,
            'course': '综合管理',
            'class' : 'A-2-3',
          }
        ]
      },
      {
        'id' : 7,
        'course': '中层制造主管的培训课程',
        'class' : 'A-3',
        'children':[
          {
            'id' : 41,
            'course': '政策解读',
            'class' : 'A-3-1',
          },
          {
            'id' : 42,
            'course': '企业文化',
            'class' : 'A-3-2',
          }, 
          {
            'id' : 43,
            'course': '专业能力',
            'class' : 'A-3-3',
          }
        ]
      },
      {
        'id' : 8,
        'course': '中基层制造主管的培训课程',
        'class' : 'A-4',
        'children':[
          {
            'id' : 44,
            'course': '政策解读',
            'class' : 'A-4-1',
          },
          {
            'id' : 45,
            'course': '企业文化',
            'class' : 'A-4-2',
          }, 
          {
            'id' : 46,
            'course': '专业能力',
            'class' : 'A-4-3',
          }
        ]
      },
      {
        'id' : 9,
        'course': '基层制造主管的培训课程',
        'class' : 'A-5',
        'children':[
          {
            'id' : 47,
            'course': '政策解读',
            'class' : 'A-5-1',
          },
          {
            'id' : 48,
            'course': '企业文化',
            'class' : 'A-5-2',
          }, 
          {
            'id' : 49,
            'course': '专业能力',
            'class' : 'A-5-3',
          }
        ]
      },
      {
        'id' : 10,
        'course': '个人自我管理技能培训课程',
        'class' : 'A-6',
        'children':[
          {
            'id' : 50,
            'course': '心态管理',
            'class' : 'A-6-1',
          },
          {
            'id' : 51,
            'course': '自我管理',
            'class' : 'A-6-2',
          }, 
          {
            'id' : 52,
            'course': '综合管理',
            'class' : 'A-6-3',
          }
        ]
      }
    ]
  },
  {
    'id' : 2,
    'course' : '岗位专业及技能提升',
    'class' : 'B',
    'children' : [
      {
      'id' : 11,
      'course': '精益IE',
      'class' : 'B-1',
      'children':[
        {
          'id' : 53,
          'course': '效率提升',
          'class' : 'B-1-1',
        },
        {
          'id' : 54,
          'course': '品质',
          'class' : 'B-1-2',
        }, 
        {
          'id' : 55,
          'course': '物流与供应链',
          'class' : 'B-1-3',
        },
        {
          'id' : 56,
          'course': '成本',
          'class' : 'B-1-4',
        },
        {
          'id' : 57,
          'course': '设备',
          'class' : 'B-1-5',
        }
      ]
      },
      {
        'id' : 12,
        'course': '自动化与机器人',
        'class' : 'B-2',
        'children':[
          {
            'id' : 58,
            'course': '机械设计',
            'class' : 'B-2-1',
          },
          {
            'id' : 59,
            'course': '电气设计',
            'class' : 'B-2-2',
          }, 
          {
            'id' : 60,
            'course': '软件设计',
            'class' : 'B-2-3',
          },
          {
            'id' : 61,
            'course': '机器人',
            'class' : 'B-2-4',
          }
        ]
      },
      {
        'id' : 13,
        'course': '信息技术',
        'class' : 'B-3',
        'children':[
          {
            'id' : 62,
            'course': '程序语言',
            'class' : 'B-3-1',
          },
          {
            'id' : 63,
            'course': '软件开发',
            'class' : 'B-3-2',
          }, 
          {
            'id' : 64,
            'course': 'IT架构',
            'class' : 'B-3-3',
          },
          {
            'id' : 65,
            'course': '数据库',
            'class' : 'B-3-4',
          },
          {
            'id' : 66,
            'course': '企业信息管理系统',
            'class' : 'B-3-5',
          },
          {
            'id' : 67,
            'course': '产品管理',
            'class' : 'B-3-6',
          },
          {
            'id' : 68,
            'course': '信息安全',
            'class' : 'B-3-7',
          }
        ]
      },
      {
        'id' : 14,
        'course': '大数据与人工智能',
        'class' : 'B-4',
        'children':[
          {
            'id' : 69,
            'course': '数理统计基础',
            'class' : 'B-4-1',
          },
          {
            'id' : 70,
            'course': '程序语言',
            'class' : 'B-4-2',
          }, 
          {
            'id' : 71,
            'course': '算法',
            'class' : 'B-4-3',
          },
          {
            'id' : 72,
            'course': '架构',
            'class' : 'B-4-4',
          },
          {
            'id' : 73,
            'course': '工业人工智能实战训练',
            'class' : 'B-4-5',
          }
        ]
      },
      {
        'id' : 15,
        'course': '物联网',
        'class' : 'B-5',
        'children':[
          {
            'id' : 74,
            'course': 'IoT硬件',
            'class' : 'B-5-1',
          },
          {
            'id' : 75,
            'course': 'IoT软件',
            'class' : 'B-5-2',
          }, 
          {
            'id' : 76,
            'course': 'IoT网络',
            'class' : 'B-5-3',
          },
          {
            'id' : 77,
            'course': 'IoT系统',
            'class' : 'B-5-4',
          }
        ]
      },
      {
        'id' : 16,
        'course': '研发设计',
        'class' : 'B-6',
        'children':[
          {
            'id' : 78,
            'course': '尺寸工程设计',
            'class' : 'B-6-1',
          },
          {
            'id' : 79,
            'course': '可靠性设计',
            'class' : 'B-6-2',
          }, 
          {
            'id' : 80,
            'course': '产品优化设计',
            'class' : 'B-6-3',
          },
          {
            'id' : 81,
            'course': '工艺研发',
            'class' : 'B-6-4',
          },
          {
            'id' : 82,
            'course': '制造设计',
            'class' : 'B-6-5',
          },
          {
            'id' : 83,
            'course': '研发项目管理',
            'class' : 'B-6-6',
          }
        ]
      }
    ]
  },
  {
    'id' : 3,
    'course' : '专业技能认证与证书获得',
    'class' : 'C',
    'children' : [
      {
      'id' : 17,
      'course': 'PMP认证',
      'class' : 'C-1',
      },
      {
        'id' : 18,
        'course': '经济师证（人力资源方向）',
        'class' : 'C-2',
      },
      {
        'id' : 19,
        'course': '工业互联网设备安装与调试（职业资格鉴定）',
        'class' : 'C-3',
      },
      {
        'id' : 20,
        'course': '工业物联网装调与维护（三级/四级/五级）',
        'class' : 'C-4',
      },
      {
        'id' : 21,
        'course': '电工证（初级）',
        'class' : 'C-5',
      },
      {
        'id' : 22,
        'course': 'Python（二级）',
        'class' : 'C-6',
      },
      {
        'id' : 23,
        'course': '信息处理技术',
        'class' : 'C-7',
      },
      {
        'id' : 24,
        'course': '程序员',
        'class' : 'C-8',
      },
      {
        'id' : 25,
        'course': '系统集成项目管理工程师',
        'class' : 'C-9',
      },
    ]
  },
  {
    'id' : 4,
    'course' : '前沿讲座',
    'class' : 'D',
    'children' : [
      {
      'id' : 26,
      'course': '电动车/新能源汽车',
      'class' : 'D-1',
      },
      {
        'id' : 27,
        'course': '数位医疗',
        'class' : 'D-2',
      },
      {
        'id' : 28,
        'course': '机器人',
        'class' : 'D-3',
      },
      {
        'id' : 29,
        'course': '人工智能/大数据/云计算',
        'class' : 'D-4',
      },
      {
        'id' : 30,
        'course': '半导体',
        'class' : 'D-5',
      },
      {
        'id' : 31,
        'course': '5G/6G新世代通信技术',
        'class' : 'D-6',
      },
      {
        'id' : 32,
        'course': '量子计算',
        'class' : 'D-7',
      },
      {
        'id' : 33,
        'course': '资通安全',
        'class' : 'D-8',
      },
      {
        'id' : 34,
        'course': '数位转型',
        'class' : 'D-9',
      }
    ]
  }
]

export function getArray() {
  // var output1 = sampleArray.find(object => object.keyword === keyword1)
  // var output2 = sampleArray.find(object => object.keyword === keyword2)
  // var output3 = sampleArray.find(object => object.keyword === keyword3)
  // var output4 = sampleArray.find(object => object.keyword === keyword4)
  // var output5 = sampleArray.find(object => object.keyword === keyword5)
  // var keyArray = []
  // keyArray.push(output1)
  // keyArray.push(output2)
  // keyArray.push(output3)
  // keyArray.push(output4)
  // keyArray.push(output5)
  return sampleArray
}