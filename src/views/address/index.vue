<template>
  <div class="address">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Address',
  data() {
    return {
      chosenAddressId: '1',
    }
  },
  computed: {
    list() {
      return this.$store.getters.doneList
    },
  },
  methods: {
    onAdd() {
      Toast('新增地址')
      this.$router.push('/addAddress')
    },
    onEdit(item, index) {
      this.$store.commit('editAddress', item)
      this.$router.push('/editAddress')
    },
    onSelect(item, index) {
      console.log(item, index)
      console.log(this.chosenAddressId)
    },
  },
}
</script>

<style lang="less">

</style>
