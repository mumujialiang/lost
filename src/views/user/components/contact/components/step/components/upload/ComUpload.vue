<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { rules } from './config'
import ComRules from './components/rules/ComRules.md'
import { useUpload } from './composable/upload'
import type { Emits } from './types'

const rawEmit = defineEmits(['submit'])
const emit: Emits = rawEmit

const { form, formElement, onSubmit } = useUpload({ emit })
const dialogVisible = ref(false)
</script>

<template>
  <el-form
    ref="formElement"
    class="el-form"
    :rules="(rules as any)"
    :model="form"
    label-width="120px"
  >
    <el-form-item label="您的真实姓名" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio
        v-for="item in ['男', '女']"
        :key="item"
        v-model="form.sex"
        :label="item"
      >
        {{ item }}
      </el-radio>
    </el-form-item>
    <el-form-item label="上传照片" prop="img">
      <div class="img-wrap">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :show-file-list="false"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
        <div class="tips">
          <div>请手持白纸，拍摄半身照</div>
          <div>并写上您的名字和失物编号</div>
          <div>如右图所示 👉</div>
          <div>本失物编号：xxx</div>
        </div>
        <el-image
          style="width: 250px; height: 250px"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          fit="cover"
          :preview-src-list="[
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          ]"
        ></el-image>
      </div>
    </el-form-item>
    <el-form-item label="同意条款" prop="accept">
      <div class="rules-wrap">
        <el-switch v-model="form.accept" />
        <div class="rules" @click="dialogVisible = true">《认证守则》</div>
      </div>
    </el-form-item>
  </el-form>
  <el-button class="submit" type="primary" @click="onSubmit">
    提交备案信息
  </el-button>
  <el-dialog v-model="dialogVisible" title="《认证守则》" width="500px">
    <ComRules />
  </el-dialog>
</template>

<style lang="scss" scoped>
.el-form {
  margin-top: var(--g-gap-lg);
}
.img-wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.rules-wrap {
  display: flex;
  align-items: center;
  .rules {
    margin-left: var(--g-gap-sm);
    color: var(--g-color-primary);
    cursor: pointer;
  }
}
.submit {
  width: 100%;
}

.tips {
  padding: 0 var(--g-gap-md);
}
</style>
