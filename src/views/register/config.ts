export const rules = {
  name: [
    {
      required: true,
      message: '昵称为必填',
      trigger: 'blur'
    },
    {
      message: '密码长度不得大于20个字符',
      max: 20,
      trigger: 'blur'
    },
    {
      message: '不得包含空格',
      pattern: /^\S+$/,
      trigger: 'blur'
    },
    {
      message: '昵称已存在',
      trigger: 'blur',
      asyncValidator: (_: unknown, value: string) => {
        return new Promise((resolve, reject) => {
          if (value === 'exist') {
            reject('昵称已经存在') // reject with error message
          } else {
            resolve(true)
          }
        })
      }
    }
  ],
  password: [
    {
      required: true,
      message: '密码为必填',
      trigger: 'blur'
    },
    {
      message: '不得包含空格',
      pattern: /^\S+$/,
      trigger: 'blur'
    },
    {
      message: '密码长度不得小于3个字符',
      min: 3,
      trigger: 'blur'
    },
    {
      message: '密码长度不得大于20个字符',
      max: 20,
      trigger: 'blur'
    }
  ],
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
