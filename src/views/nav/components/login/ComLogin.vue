<script lang="ts" setup>
import CarbonUserAvatar from '~icons/carbon/user-avatar'
</script>

<template>
  <el-popover v-if="true" placement="bottom-end" :width="200" trigger="hover">
    <template #reference>
      <div class="icon-wrap">
        <carbon-user-avatar />
      </div>
    </template>
    <div class="list">
      <router-link class="user" to="/menu/user/account"> 个人中心 </router-link>
      <div class="logout">退出登录</div>
    </div>
  </el-popover>
  <router-link v-else class="login" to="/menu/login">登录</router-link>
</template>

<style lang="scss" scoped>
.icon-wrap {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}

.list {
  display: flex;
  flex-direction: column;

  .logout,
  .user {
    padding: var(--g-gap-sm);
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: var(--g-border-radius-md);
    &:hover {
      background-color: #eee;
    }
  }
}

.login {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
