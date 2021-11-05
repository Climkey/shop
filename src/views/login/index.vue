<template>
  <div class="login">
    <div class="login-zh">账号登录</div>
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <a is="router-link" tag="a" to="/register" class="check-register">用户注册</a>
  </div>
</template>

<script>
import axios from 'axios'
import API from '@/api/constants'
import { Toast } from 'vant'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      // 打印提交的值
      // console.log(values)

      // 向后端发送请求，判断用户名和密码是否正确
      axios({
        url: API.API_LOGIN,
        params: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          if (!res.data) {
            Toast('用户名或密码错误')
            return false
          }
          this.$store.dispatch('loginAsync', values)
            .then(() => {
              Toast('欢迎登录')
              this.$router.replace('/mine')
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="less" scoped>
  .login{
    .login-zh {
      text-align: center;
      margin-top: 100px;
      font-size: 26px;
    }
    .form {
      margin-top: 100px;
    }
    .check-register {
      float: right;
      margin-right: 40px;
      color: #1989fa;
    }
  }
</style>
