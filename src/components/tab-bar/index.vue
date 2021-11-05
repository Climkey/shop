<template>
  <ul class="tab-bar">
    <li
      is="router-link"
      tag="li"
      v-for="nav in navs"
      :key="nav.path"
      :to="nav.path"
    >
    <i class="iconfont" v-html='nav.icon'></i>
    <span>{{ nav.title }}</span>
    </li>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'TabBar',
  computed: {
    navs() {
      return (
        routes
          .filter(routes => routes.meta?.inTabBar)
          .map(({ path, meta: { title, icon } }) => ({
            path,
            title,
            icon,
          }))
      )
    },
  },
}
</script>

<style lang="less" scoped>
  // scoped 是保证所书写的样式仅在当前组件
  // 中有作用，在其它组件中无效。
  // 实现的原理是在组件的布局节点上添加自定义
  // 的 data-v-xxx 属性，使用过 [data-v-xxx]
  // 属性的节点添加样式，未使用过的则没有CSS效果
  @font-face {
  font-family: 'iconfont';  /* Project id 2890047 */
  src: url('//at.alicdn.com/t/font_2890047_voo67s9gf1.woff2?t=1635147124869') format('woff2'),
       url('//at.alicdn.com/t/font_2890047_voo67s9gf1.woff?t=1635147124869') format('woff'),
       url('//at.alicdn.com/t/font_2890047_voo67s9gf1.ttf?t=1635147124869') format('truetype');
}
  .iconfont{
    font-family:"iconfont" !important;
    font-size:26px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
    .router-link-exact-active, .router-link-active {
    color: #d81e06;
  }
    .tab-bar {
      display: flex;
      height: 100px;
      border-top: 1px solid #ccc;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        flex:1;
        span {
          font-size: 15px;
        }
      }
    }
    .router-link-exact-active, .router-link-active {
    color: #d81e06;
  }
</style>
