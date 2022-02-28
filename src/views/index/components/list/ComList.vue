<script lang="ts" setup>
import carbonClose from '~icons/carbon/close'
import type { ApiResponse } from '@http'
import type { EmitDto } from '../../types'

const props = defineProps<{
  points: ApiResponse<'/index/queryMapPoints'>['points']
  activeId: string
}>()

const emit = defineEmits<{
  (e: 'change-disable-state', value: EmitDto): void
  (
    e: 'look-details',
    value: ApiResponse<'/index/queryMapPoints'>['points'][number]['presetPayLoad']['details']
  ): void
  (e: 'update:activeId', value: string): void
}>()
</script>

<template>
  <div class="list-wrap">
    <div class="container">
      <div
        v-for="(item, index) in props.points"
        :key="index"
        class="item"
        :class="{
          active: activeId === item.id,
          disable: item.disable,
          enable: !item.disable
        }"
        @click="emit('update:activeId', item.id)"
      >
        <div class="inner">
          <el-image class="el-image" :src="item.img" fit="cover" />
          <div class="disable-mask">
            <carbon-close />
          </div>
          <div class="mask">
            <div
              class="check-btn"
              @click="emit('look-details', item.presetPayLoad.details)"
            >
              查看
            </div>
            <div
              class="include-btn"
              @click="
                emit('change-disable-state', {
                  id: item.id,
                  disable: false
                })
              "
            >
              包含
            </div>
          </div>
        </div>
        <div
          class="close"
          @click="
            emit('change-disable-state', {
              id: item.id,
              disable: true
            })
          "
        >
          <carbon-close />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-wrap {
  height: 100%;
  overflow: auto;
  user-select: none;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1px;
    border-top: var(--g-border);
    border-left: var(--g-border);

    .item {
      position: relative;
      padding-top: 100%;
      border-right: var(--g-border);
      border-bottom: var(--g-border);
      .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 6px solid #fff;

        &:hover .mask {
          opacity: 1;
        }
        .el-image {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .mask {
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          width: 100%;
          color: #fff;
          cursor: pointer;
          opacity: 0;
          @mixin mask-mixin {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            padding: 5px 0;
            background-color: rgba($color: #000000, $alpha: 0.5);
            &:hover {
              background-color: rgba($color: #000000, $alpha: 0.8);
            }
          }
          .check-btn {
            @include mask-mixin;
          }
          .include-btn {
            @include mask-mixin;
            border-left: 1px solid #888;
          }
        }
      }
      .close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        color: #444;
        cursor: pointer;
        background-color: #fff;
        transition: transform 0.2s;
        &:hover {
          color: var(--g-color-primary);
          transform: scale(1.3);
        }
      }
      .disable-mask {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 80px;
        color: var(--g-color-danger);
        background-color: rgba($color: #000000, $alpha: 0.2);
      }
    }

    .active {
      .inner {
        cursor: pointer;
        border-color: var(--g-color-primary) !important;
      }
      .close {
        color: #fff;
        background-color: var(--g-color-primary);
        &:hover {
          color: #fff;
        }
      }
    }
    .disable {
      .inner {
        border-color: rgba($color: #000000, $alpha: 0.2);
      }
      .close {
        display: none !important;
      }
    }
    .enable {
      .disable-mask,
      .include-btn {
        display: none !important;
      }
    }
  }
}
</style>
