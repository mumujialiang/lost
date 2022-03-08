<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ComMiniPage from '@/common/components/miniPage/ComMiniPage.vue'
import ComPassword from './components/password/ComPassword.vue'
import ComMessage from './components/message/ComMessage.vue'
import ComSlideVerify from '@/common/components/slideVerify/ComSlideVerify.vue'
import { useLogin } from './composable/login'

const {
  passwordElement,
  messageElement,
  slideVerifyElement,
  verifyDialogVisible,
  type,
  onLogin,
  success
} = useLogin()

const typeOption = [
  {
    label: '密码登录'
  },
  {
    label: '短信登录'
  }
]

const router = useRouter()
const redirectTo = () => {
  router.push('/nav/register')
}
</script>

<template>
  <ComMiniPage>
    <div class="component-wrap">
      <div class="box">
        <div class="toggle">
          <div
            v-for="(item, index) in typeOption"
            :key="index"
            class="item"
            :class="{
              active: type === index
            }"
            @click="type = index"
          >
            {{ item.label }}
          </div>
        </div>

        <ComPassword v-show="type === 0" ref="passwordElement" />
        <ComMessage v-show="type === 1" ref="messageElement" />

        <div class="min-bar">
          <div class="forget">忘记了密码?</div>
        </div>
        <div class="btn-group">
          <el-button class="login" type="primary" @click="onLogin">
            登录
          </el-button>
          <el-button class="register" @click="redirectTo"> 注册 </el-button>
        </div>
      </div>
      <el-dialog
        v-model="verifyDialogVisible"
        title="验证"
        width="350px"
        :close-on-click-modal="false"
      >
        <div class="dialog-inner">
          <ComSlideVerify ref="slideVerifyElement" @success="success" />
        </div>
      </el-dialog>
    </div>
  </ComMiniPage>
</template>

<style lang="scss" scoped>
.component-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .box {
    width: 70%;
    margin-top: -15vh;
    .toggle {
      display: flex;
      margin-bottom: var(--g-gap-md);
      .item {
        margin-right: var(--g-gap-md);
        cursor: pointer;
        user-select: none;
      }
    }
    .active {
      color: var(--g-color-primary);
    }

    .min-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: var(--g-gap-lg);
      .forget {
        cursor: pointer;
        user-select: none;
        &:hover {
          color: var(--g-color-primary);
        }
      }
    }
    .btn-group {
      display: flex;
      margin-top: var(--g-gap-md);
      .login,
      .register {
        flex: 1;
      }
    }
  }
}

.dialog-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
