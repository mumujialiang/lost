export const rules = {
  tel: [
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
  code: [
    {
      required: true,
      message: '验证码为必填',
      trigger: 'blur'
    },
    {
      message: '请输入正确的验证码',
      pattern: /^\d{4,10}$/,
      trigger: 'blur'
    }
  ]
}
