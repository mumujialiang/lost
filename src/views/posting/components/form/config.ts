import dayjs from 'dayjs'

export const formInit = {
  date: dayjs().format('YYYY-MM-DD'),
  img: null,
  description: '',
  tel: '',
  telPrefix: 86,
  accept: false
}

export const rules = {
  tel: [
    {
      required: true,
      message: '电话号码 为必填',
      trigger: 'blur'
    },
    {
      message: '请输入正确的电话号码',
      pattern: /^1[3|4|5|7|8]\d{9}$/,
      trigger: 'blur'
    }
  ],
  description: [
    {
      required: true,
      message: '描述失物 为必填',
      trigger: 'change'
    }
  ],
  accept: [
    {
      required: true,
      type: 'enum',
      enum: [true],
      message: '必须同意网站免责声明才可以发布信息',
      trigger: 'change'
    }
  ]
}
