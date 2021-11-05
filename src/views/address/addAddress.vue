<template>
  <div class="add-address">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { areaList } from '@vant/area-data'
export default {
  name: 'AddAddress',
  data() {
    return {
      areaList,
      searchResult: [],
    }
  },
  methods: {
    onSave(val) {
      Toast('保存成功')
      this.$store.commit('addAddress', val)
      this.$router.replace('/address')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
          },
          {
            name: '朱家大院',
          },
          {
            name: '开荒世家',
          },
          {
            name: '肖家河大厦',
          },
        ]
      } else {
        this.searchResult = {}
      }
    },
  },
}
</script>

<style lang="less">

</style>
