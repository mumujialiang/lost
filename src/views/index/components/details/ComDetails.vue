<script lang="ts" setup>
import type { ApiResponse } from '@http'

const props = withDefaults(
  defineProps<{
    loading: boolean
    details?: ApiResponse<'/index/queryDetails'>
    modelValue: boolean
  }>(),
  {
    details: () => ({
      id: '',
      img: '',
      time: '',
      description: '',
      tel: ''
    })
  }
)

const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
}>()

const clickTel = () => {
  if (props.details.tel) {
    window.location.href = `tel:${props.details.tel}`
  }
}
</script>

<template>
  <el-dialog
    :model-value="props.modelValue"
    title="失物详情"
    width="400px"
    @update:model-value="emit('update:model-value', $event)"
  >
    <div ref="detailsElement" v-loading="loading" class="details">
      <el-image
        class="el-image"
        :src="details.img"
        :preview-src-list="[details.img]"
        fit="contain"
      ></el-image>

      <table>
        <tr>
          <td>
            <span class="label">编号：</span>
            {{ props.details.id }}
          </td>
          <td>
            <span class="label">捡获时间：</span>
            {{ props.details.time }}
          </td>
        </tr>
        <tr>
          <td>
            <span class="label">描述：</span>
            {{ props.details.description }}
          </td>
        </tr>
      </table>
      <el-button class="el-button" type="primary" @click="clickTel">
        <template v-if="props.details.tel">
          联系电话：{{ props.details.tel }}
        </template>
        <template v-else>获取联系</template>
      </el-button>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.details {
  width: 100%;
  user-select: none;
  .el-image {
    width: 100%;
    height: 360px;
  }
  table {
    width: 100%;
    margin-top: var(--g-gap-sm);
    td {
      width: 25%;
      color: #666;
      .label {
        font-weight: bold;
        color: #000;
      }
    }
  }
  .el-button {
    width: 100%;
    margin-top: var(--g-gap-lg);
  }
}
</style>
