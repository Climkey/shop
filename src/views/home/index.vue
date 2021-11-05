<template>
  <div class="home">
    <van-swipe :autoplay="3000" width="375" height="145">
      <van-swipe-item v-for="banner in banners" :key="banner.id">
        <img v-lazy="banner.picStr" :style="{width: '100%', height: '100%'}" />
      </van-swipe-item>
    </van-swipe>
    <ul>
      <li v-for="(item, index) in topics" :key="item.id">
        <div class="top-header">
          <h1>{{ item.columnTitle }}</h1>
          <h2>{{ item.subColumnTitle }}</h2>
        </div>
        <div class="boxs">
          <div class="top-footer" >
          <div class="top-footer-box"
          v-for="item in topics[index].products"
          :key="item.id"
           @click="jumpToDetail(item.id)"
          >
          <div class="top-footer-box-img" ><img :src=" item.coverUrl " alt="" :style="{width:'100px', height:'100px' }"></div>
          <h3 class="van-multi-ellipsis--l2">{{ item.name }}</h3>
          <p>￥{{ item.minPrice }}</p>
          </div>
        </div>
        </div>
      </li>
    </ul>
    <div class="xy">
    <van-card
          v-for="prod in allProduct"
          :key="prod.id"
          :price="prod.minPrice"
          :title="prod.name"
          :thumb="prod.coverUrl"
             @click="jumpToDetailMore(prod.id)"
        />
        </div>
  </div>
</template>

<script>
import { getBanners, getTopics, getBaoKuan } from '@/api/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      topics: [],
      products: [],
      imgurl: [],
      allProduct: [],
    }
  },
  created() {
    getBanners()
      .then(data => {
        this.banners = data.banners
      })
    getTopics()
      .then(data => {
        this.topics = data.data
        this.products = data.data.products
        this.products = data.data.map(({ products }) =>
          products,
        )
      })
    getBaoKuan()
      .then(data => {
        this.allProduct = data.data.allProduct
        // console.log(this.allProduct)
      })
  },
  methods: {
    jumpToDetail(id) {
      this.$router.push('/detail?id=' + id + 'a')
    },
    jumpToDetailMore(id) {
      this.$router.push('/detail?id=' + id + 'b')
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ ul li {
float: left;
width: 750px;
height: 750px;

}
ul{
  overflow: hidden;
}
ul li .top-header{
  width: 750px;
  height: 216px;

}
ul li .boxs {
  width:750px;
  height: 484px;
  overflow: auto;
}
ul li .top-footer{
  width:1500px;
  height: 484px;
   margin-left: 10px;

}
ul li .top-footer-box{
  width: 216px;
  height: 440px;
  float: left;
  margin-left: 5px;
  padding-top: 30px;

}
ul li h3{
  width: 200px;
  height: 66px;
  font-size: 12px;
  font-weight: 400;

}
ul li p{
  width: 200px;
  height: 24px;
  font-size: 12px;
  text-align: center;
  color:red;
}
ul li h1{
  font-size:24px;
   font-weight: 400;
   text-align: center;
  padding-top: 100px;
}
ul li h2{
  font-size:12px;
   font-weight: 400;
   text-align: center;
   color:#999;
}

</style>
