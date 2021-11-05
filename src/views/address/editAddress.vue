<template>
  <div class="edit-address">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="AddressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      @change-default="onChangeDefault"
    />
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
import { Toast } from 'vant'
export default {
  name: 'EditAddress',
  data() {
    return {
      areaList,
      searchResult: [],
      AddressInfo: this.$store.state.address.now,
    }
  },
  methods: {
    onSave(val) {
      Toast('保存成功')
      this.$store.commit('saveEdit', val)
      this.$router.replace('/address')
    },
    onDelete(val, index) {
      Toast('删除成功')
      this.$store.commit('removeAddress', val)
      this.$router.replace('/address')
    },
    onChangeDefault(val) {
      this.$store.commit('changeDefault', val)
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
