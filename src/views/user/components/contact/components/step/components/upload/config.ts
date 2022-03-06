export const rules = {
  name: [
    {
      required: true,
      message: '姓名为必填',
      trigger: 'blur'
    }
  ],
  accept: [
    {
      required: true,
      type: 'enum',
      enum: [true],
      message: '必须同意《认证守则》才可以备案',
      trigger: 'change'
    }
  ]
}
