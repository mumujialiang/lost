export const rules = {
  account: [
    {
      required: true,
      message: '电话号码为必填',
      trigger: 'blur'
    },
    {
      message: '请输入正确的电话号码',
      pattern: /^1[3|4|5|7|8]\d{9}$/,
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入正确的密码',
      trigger: 'blur'
    }
  ]
}
