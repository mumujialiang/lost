<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import dayjs from 'dayjs'
import carbonCloudUpload from '~icons/carbon/cloud-upload'
import { showFormVerifyError, telPrefixOption } from '@/common/js/control/index'
import ComDeclaration from './components/declaration/ComDeclaration.md'
import { formInit, rules } from './config'

const form = reactive<
  Omit<typeof formInit, 'img'> & {
    img: null | Record<string, unknown>
  }
>(formInit)

const formElement = ref<InstanceType<typeof ElForm> | null>(null)
const dialogVisible = ref(false)
const imgUrl = ref('')

const beforeUpload = () => {
  form.img = {
    xxx: 'XXX'
  }
  imgUrl.value =
    'https://tse1-mm.cn.bing.net/th/id/R-C.14b4b74e379683bd23230006fe98567d?rik=R1GP9ELf5%2ftOEg&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2020%2f10%2f15%2f69b37a9935dd4c9e8e2ba7d1990d5a53.jpg&ehk=nEx9koLXtYAN%2bQJr4SLVQ7LJNdfKzrS1%2fxsna%2bjnJf8%3d&risl=&pid=ImgRaw&r=0'
}

const disabledDate = (time: Date) => {
  return (
    time.getTime() > Date.now() ||
    time.getTime() < dayjs().subtract(2, 'year').unix() * 1000
  )
}

const getFormData: () => Promise<typeof form> = () => {
  return new Promise((resolve, reject) => {
    if (formElement.value !== null) {
      formElement.value
        .validate()
        ?.then(() => {
          resolve(form)
        })
        .catch(err => {
          showFormVerifyError(err)
          reject()
        })
    } else {
      reject()
    }
  })
}

defineExpose({
  getFormData
})
</script>

<template>
  <div class="form-wrap">
    <el-form
      ref="formElement"
      :model="form"
      :rules="(rules as any)"
      label-width="6em"
    >
      <el-form-item label="拾获日期" prop="date">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="请选择"
          style="width: 100%"
          value-format="YYYY-MM-DD"
          :editable="false"
          :clearable="false"
          :disabled-date="disabledDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="上传图片" prop="img">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          style="width: 100%"
          :before-upload="beforeUpload"
        >
          <div class="upload-inner">
            <template v-if="form.img === null">
              <div class="upload-icon">
                <carbon-cloud-upload />
              </div>
              <div>拖拽图片到这 或 点击上传</div>
            </template>
            <el-image
              v-else
              style="width: 100%; height: 100%"
              :src="imgUrl"
              fit="cover"
            ></el-image>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述失物" prop="description">
        <el-input
          v-model="form.description"
          :autosize="{
            minRows: 3,
            maxRows: 5
          }"
          type="textarea"
          placeholder="请勿泄露对质信息"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input
          v-model="form.tel"
          placeholder="请勿完全相信陌生人，保证自身安全"
        >
          <template #prepend>
            <el-select
              v-model="form.telPrefix"
              placeholder="请选择"
              style="width: 110px"
            >
              <el-option
                v-for="(item, index) in telPrefixOption"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="同意条款" prop="accept">
        <div class="declaration-wrap">
          <el-switch v-model="form.accept"></el-switch>
          <div class="declaration" @click="dialogVisible = true">
            《网站免责声明》
          </div>
        </div>
      </el-form-item>
    </el-form>
    <el-dialog v-model="dialogVisible" title="网站免责声明">
      <ComDeclaration />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.form-wrap {
  // 改变上传图片模块的宽度
  :deep(.el-upload) {
    width: 100%;
    .el-upload-dragger {
      width: 100%;
    }
  }

  .upload-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--g-text-color-placeholder);
    &:hover {
      color: var(--g-color-primary);
    }
    .upload-icon {
      font-size: 40px;
    }
  }

  .declaration-wrap {
    display: flex;
    align-items: center;
    height: 100%;
    .declaration {
      margin-left: var(--g-gap-md);
      color: var(--g-color-primary);
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
