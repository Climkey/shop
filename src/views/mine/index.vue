<template>
  <div class="mine">
    <div class="top">
      <van-image
        style="float:left;margin: 10px 0 0 10px"
        round
        width="40px"
        height="40px"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <p class="name-mine" v-html="this.$store.state.user.username">&nbsp;</p>
      <p class="login-remove" @click="removeLogin">退出登录 &gt;&nbsp;</p>
    </div>
    <ul class="commodity">
      <li
        v-for="nav in navs"
        :key="nav.icon"
      >
      <i class="iconfont" v-html="nav.icon">
      </i>
      <span class="title">{{nav.title}}</span>
      </li>
    </ul>
    <ul class="extend">
      <li
      v-for="func in funcs"
      :key="func.title"
      is="router-link"
      :to='func.path'
      tag="li"
      >
        <p>{{func.title}}</p>
        <span>&gt;</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Mine',
  data() {
    return {
      navs: [
        {
          icon: '&#xe603;',
          title: '待付款',
        },
        {
          icon: '&#xe602;',
          title: '待发货',
        },
        {
          icon: '&#xe601;',
          title: '待收货',
        },
        {
          icon: '&#xe604;',
          title: '待评价',
        },
        {
          icon: '&#xe610;',
          title: '退款/售后',
        },
      ],
      funcs: [
        {
          title: '我的优惠券',
          path: '',
        },
        {
          title: '我的收货地址',
          path: '/address',
        },
        {
          title: '我的常用联系人',
          path: '',
        },
        {
          title: '在线客服',
          path: '',
        },
        {
          title: '证件信息',
          path: '',
        },
      ],
    }
  },
  methods: {
    removeLogin() {
      this.$store.dispatch('removeAsync').then(() => {
        this.$router.replace('/login')
      }).catch(err => {
        console.log(err)
      })
    },
  },
}
</script>

<style lang="less" scoped>
 @font-face {
  font-family: 'iconfont';  /* Project id 2890047 */
  src: url('//at.alicdn.com/t/font_2890047_0j4v7xgzty5v.woff2?t=1635385319371') format('woff2'),
       url('//at.alicdn.com/t/font_2890047_0j4v7xgzty5v.woff?t=1635385319371') format('woff'),
       url('//at.alicdn.com/t/font_2890047_0j4v7xgzty5v.ttf?t=1635385319371') format('truetype');
}
  .iconfont{
    font-family:"iconfont" !important;
    font-size:26px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  .mine {
    height: 100%;
    background-color: rgb(247, 239, 239);
    overflow: hidden;
    .top {
      height: 200px;
      background-color: white;
      border-bottom: 1px solid rgb(243, 238, 238);
      line-height:100px;
      .name-mine {
        margin-left: 10px;
        float:left;
      }
      .login-remove {
        float:right;
        font-size:12px;
      }
    }
    .commodity {
      height: 180px;
      background-color: white;
      margin: 0 auto;
      display:flex;
      justify-content: space-around;
      li {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        .iconfont {
          font-size: 40px;
        }
        .title {
          font-size:12px;
        }
      }
    }
    .extend {
      font-size:15px;
      margin-top: 20px;
      background-color: white;
      li {
        height: 70px;
        line-height:70px;
        border-bottom: 1px solid rgb(243, 238, 238);
        p {
          float:left;
          margin-left: 10px;
        }
        span {
          float :right;
          margin-right: 10px;
        }
      }
      li:last-child {
        border:none;
      }
    }
  }
</style>
