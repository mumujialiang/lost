<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { typeOption, rules as rulesConfig } from './config'
import { useSubmit } from './composable/submit/index'

const form = reactive({
  type: '建议',
  content: '',
  tel: ''
})
const rules = reactive(rulesConfig)

watch(
  () => form.type,
  newValue => {
    rules.tel[0].required = typeOption.some(({ value, verify }) => {
      return newValue == value && verify
    })
  }
)

const { onSubmit, finishSubmit, formElement } = useSubmit(form)
</script>

<template>
  <div class="page">
    <h1>留言</h1>
    <el-form ref="formElement" :model="form" :rules="rules" label-width="6em">
      <el-form-item label="填写类型">
        <el-select v-model="form.type" style="width: 100%">
          <el-option
            v-for="item in typeOption"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="填写内容" prop="content">
        <el-input
          v-model="form.content"
          :autosize="{
            minRows: 4,
            maxRows: 8
          }"
          type="textarea"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
    </el-form>
    <el-button :disabled="finishSubmit" type="primary" @click="onSubmit">
      {{ finishSubmit ? '已提交' : '提交' }}
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--g-gap-lg);
}
</style>
