<template>
  <div class="cart">
    <!-- 购物车为空 -->
    <van-empty
  class="custom-image"
  image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
  description="购物车为空"
  v-if="cart.length === 0"
>
<router-link to='/home'>去选购商品</router-link>
    </van-empty>
    <!-- 商品卡片 -->
    <template v-else>
<van-swipe-cell
v-for="prod in cart"
:key="prod.id"
>
  <van-card
    :price="prod.minPrice"
    :desc="prod.suggestWord"
    :title="prod.name"
  >

  <!-- 缩略图 -->
  <template #thumb>
    <van-checkbox :value="prod.checked" @click="changeChecked({id:prod.id})"/>
    <div
    class="van-image"
    style="width: 100%;
    height: 100%;">
      <img :src="prod.banners" class="van-image__img">
      </div>
  </template>

  <!-- 步进器 -->
<template #num>
  <van-stepper
  :value="prod.amount"
  theme="round"
  button-size="22"
  show-input
  max='50'
  integer
  @change="modifyAmount({id:prod.id,amount:$event})"
  />
</template>
  </van-card>
  <template #right>
    <van-button
    square
    text="删除"
    type="danger"
    class="delete-button"
    @click="removeFromCart({id:prod.id})"
    />
  </template>
</van-swipe-cell>
    </template>

<!-- 提交订单 -->
<van-submit-bar :price="totalMoney" button-text="提交订单" >
  <van-checkbox :value='allChecked' @click='checkAll({checked:!allChecked})'>全选</van-checkbox>
  <template #tip>
    你的收货地址不支持同城送, <span @click="jumpToAddress">修改地址</span>
  </template>
</van-submit-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['allChecked', 'totalMoney']),
    // allChecked(payload) {
    //   this.$store.geeters('allChecked', payload)
    // },
    cart() {
      return this.$store.state.shop.cart
    },

  },
  methods: {
    removeFromCart(paylaod) {
      this.$store.commit('removeFromCart', paylaod)
    },
    modifyAmount(paylaod) {
      this.$store.commit('modifyAmount', paylaod)
    },
    changeChecked(payload) {
      this.$store.commit('changeChecked', payload)
    },
    checkAll(payload) {
      this.$store.commit('checkAll', payload)
    },
    jumpToAddress() {
      this.$router.push('/address')
    },
  },
}
</script>

<style lang="less" scoped>
  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
   .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  /deep/.van-card__thumb{
    display:flex;
    width:220px;
  }
  /deep/.van-image{
    margin-left:12px;
  }
   /deep/.van-checkbox {
    overflow: visible;
  }
</style>
