<template>
  <div class="nav-bar">
    <div
      class="back"
      v-if="!$route.meta.noBack"
      @click="$router.back()">&lt; 返回</div>
    <div class="title">{{ $route.meta.title }}</div>
    <div class="more">
      <van-popover
        v-model="showPopover"
        placement="bottom-end"
        theme="dark"
        trigger="click"
        :actions="actions"
        @select="jump"
      >
        <template #reference>
          <van-icon name="ellipsis" />
        </template>
      </van-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showPopover: false,
      actions: [{
        text: '首页',
        icon: 'wap-home-o',
        path: '/home',
      }, {
        text: '购物车',
        icon: 'cart-o',
        path: '/cart',
      }, {
        text: '我的',
        icon: 'contact',
        path: '/mine',
      }],
    }
  },
  methods: {
    jump(action) {
      this.$router.push(action.path)
    },
  },
}
</script>

<style lang="less">
  .nav-bar {
    height: 80px;
    background: #fafafa;
    display: flex;
    align-items: center;
    font-size: 18px;

    .back, .more {
      margin: 0 24px;
    }

    .title {
      flex: 1;
      text-align: center;
    }
  }
</style>
