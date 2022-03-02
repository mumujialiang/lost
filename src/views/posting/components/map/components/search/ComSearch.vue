<script lang="ts" setup>
import { loadMap } from '@/common/js/map/load'
import type { QuerySearch, SearchCallBack, Location, TipsItem } from './types'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void
  (
    e: 'set-location',
    value: {
      lat: number
      lng: number
    }
  ): void
}>()

const mapPromise = loadMap({
  plugins: ['AMap.AutoComplete']
})

const querySearch: QuerySearch = (queryString, cb) => {
  mapPromise.then(AMap => {
    const autoComplete = new AMap.Autocomplete({
      city: '全国'
    })

    const searchCallBack: SearchCallBack = (status, result) => {
      if (status === 'complete' && result.info === 'OK') {
        const tips = result.tips
          .filter(({ location }) => {
            return location != ''
          })
          .map(({ district, name, location }) => {
            const { lat, lng } = location as Location
            const tipsItem: TipsItem = {
              value: `${district}${name}`,
              lat,
              lng
            }
            return tipsItem
          })

        cb(tips)
      }
    }

    autoComplete.search(queryString, searchCallBack)
  })
}

const handleSelect = ({ lat, lng }: TipsItem) => {
  emit('set-location', {
    lat,
    lng
  })
}
</script>

<template>
  <el-autocomplete
    :model-value="props.modelValue"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    :title="props.modelValue"
    placeholder="请输入"
    style="width: 100%"
    @select="handleSelect"
    @update:model-value="emit('update:model-value', $event)"
  />
</template>

<style lang="scss" scoped></style>
