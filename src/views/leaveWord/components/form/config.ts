export const rules = {
  content: [
    {
      required: true,
      message: '内容为必填',
      trigger: 'blur'
    }
  ],
  tel: [
    {
      required: false,
      message: '联系电话为必填',
      trigger: 'blur'
    }
  ]
}

export const typeOption = [
  {
    label: '建议',
    value: '建议',
    verify: false
  },
  {
    label: '投诉',
    value: '投诉',
    verify: false
  },
  {
    label: 'bug反馈',
    value: 'bug',
    verify: false
  },
  {
    label: '遇到问题',
    value: '困难',
    verify: true
  },
  {
    label: '合作相关',
    value: '合作',
    verify: true
  }
]
