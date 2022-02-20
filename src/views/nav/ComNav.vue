<script lang="ts" setup>
import { styleVar } from '@/config'
import ComLogin from './components/login/ComLogin.vue'
import { useMenu } from './composable/useNav/index'

const { activePath, navOption } = useMenu()
</script>

<template>
  <div class="view">
    <div class="nav">
      <el-menu
        :default-active="activePath"
        :background-color="styleVar['color-primary']"
        :ellipsis="false"
        router
        class="el-menu"
        mode="horizontal"
        text-color="#fff"
        active-text-color="#fff"
      >
        <template v-for="(item, index) in navOption" :key="index">
          <el-menu-item :index="item.path">
            <component :is="item.icon" class="icon"></component>
            {{ item.label }}
          </el-menu-item>
        </template>
      </el-menu>
      <div class="login-wrap">
        <ComLogin />
      </div>
    </div>
    <router-view class="page-wrap"></router-view>
  </div>
</template>

<style lang="scss" scoped>
.view {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--g-color-primary);

    .login-wrap {
      position: absolute;
      right: var(--g-gap-xl);
    }

    .icon {
      margin-right: var(--g-gap-xs);
    }

    // 导航组件下有白色边
    .el-menu--horizontal {
      border-bottom: none;
    }
  }

  .page-wrap {
    flex: 1;
  }
}
</style>
