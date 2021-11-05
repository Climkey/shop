<template>
  <div class="detail">
    <!-- 详情轮播图 -->
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(banner, index) in banners" :key="index">
    <img v-lazy="banner" width="100%"/>
  </van-swipe-item>
</van-swipe>
<!-- 标题 -->
<div class="title">
  {{suggestWord}}
</div>
<span class="price">
  ￥{{minPrice}}
</span >
<span class="origin">
<em>原价：{{maxPrice}}</em>
</span>
<div class="show">
  <van-cell is-link @click="showPopup">更多选择</van-cell>
  <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">

  </van-popup>
</div>
<!-- 图文详情 -->
<van-divider>图文详情</van-divider>
<van-image
v-for="banner in banners" :key="banner.index"
:src="banner"
:style="{width: '100%', display: 'block'}"

/>
<!-- 商品导航 -->
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o"
  text="购物车"
  :badge="$store.getters.totalAmounts"
  to= '/cart'
  />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" @click.stop="addToCart"/>
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
import { getDetail, getDetailMore } from '@/api/detail'
// import { Loading } from 'vant'
export default {
  name: 'Detail',
  data() {
    return {
      // allProduct: null,
      // 轮播图url
      show: false,
      banners: [],
      suggestWord: [],
      minPrice: [],
      maxPrice: [],
    }
  },
  created() {
    const { id } = this.$route.query
    if (id[id.length - 1] === 'a') {
      getDetail(id)
        .then(data => {
          if (data.hasMore === undefined) {
            const products = data.map(item => {
              return item.products
            })
            const allProducts = [].concat(...products)
            const detail = allProducts.filter(item => item.id === parseInt(id))
            const { name, picUrls, suggestWord, minPrice, maxPrice } = detail[0]
            this.name = name
            this.banners = picUrls
            this.suggestWord = suggestWord
            this.minPrice = minPrice
            this.maxPrice = maxPrice
            this.id = id
          } else {
            console.log('获取商品信息失败')
          }
        })
    } else {
      getDetailMore(id)
        .then(data => {
          if (data.hasMore) {
            const { allProduct } = data
            const detail = allProduct.filter(item => item.id === parseInt(id))
            const { name, picUrls, suggestWord, minPrice, maxPrice } = detail[0]
            this.name = name
            this.banners = picUrls
            this.suggestWord = suggestWord
            this.minPrice = minPrice
            this.maxPrice = maxPrice
            this.id = id
          } else {
            console.log('获取商品信息失败')
          }
        })
    }
  },
  methods: {
    addToCart() {
      // 构建当前选购对象
      console.log('添加到购物车...')
      const suggestWord = this.suggestWord
      const minPrice = this.minPrice
      const name = this.name
      const id = this.id
      const banners = this.banners[0]
      const currentProduct = {
        id,
        amount: 1,
        minPrice,
        name,
        suggestWord,
        banners,
      }
      // console.log('当前选购商品', currentProduct)
      // console.log('当前商品name', this.name)
      // 保存到store
      this.$store.commit('addToCart', currentProduct)
      // 提示
      this.$toast({
        type: 'success',
        message: '加入成功',
      })
    },

    showPopup() {
      this.show = true
    },
  },
  // async created() {
  //   // 一
  //   console.log('router.query: ', this.$router)
  //   this.$http.get('/store/api/allProduct/gets?limit=20&offset=0')
  //     .then(data => {
  //       console.log('1:', data)
  //       const { allProduct = [], hasMore = false, count = 0 } = data
  //       console.log('hasMore: ', hasMore, ' count: ', count)
  //       allProduct.length && allProduct.forEach(element => {
  //         console.log('id: ', element.id)
  //       })
  //     }).catch(err => {
  //       console.log('err: ', err)
  //     })
  //     // 二
  //   const allProductData = await this.$http.get('/store/api/allProduct/gets?limit=20&offset=0')
  //   console.log('allProductData: ', allProductData)
  //   const { allProduct = [], hasMore = false, count = 0 } = allProductData
  //   console.log('hasMore: ', hasMore, ' count: ', count)
  //   allProduct.length && allProduct.forEach(item => {
  //     console.log('item.id: ', item.id)
  //   })
  // },
}
</script>

<style lang="less" scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .detail .title{
    font-size: 17px;
  }
  .detail .price{
    margin-top: 10px;
    font-size: 25px;
    color: #d33a31;
  }
   .origin {
      margin-left: 12px;
      color: #ccc;
      em {
        font-style: normal;
        text-decoration: line-through;
      }
    }
</style>
