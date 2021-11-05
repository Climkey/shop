<template>
  <div class="register">
    <div class="register-zh">用户注册</div>
    <van-form @submit="onSubmit" class="form">
      <van-field
        @blur="onBlurUserName"
        required
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        required
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/ ,message:'请输入至少6位数,包含一个字母和数字' }]"
      />
      <van-field
      @blur="onBlurRePassword"
        required
        v-model="repassword"
        type="password"
        name="请再输入一次密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写确认密码' },{pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/}]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
      <a class="check-login" is="router-link" tag="a" to="/login">立即登录</a>
    </van-form>
  </div>
</template>

<script>
import axios from 'axios'
import API from '@/api/constants'
import { Toast } from 'vant'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    // 提交表单
    onSubmit(values) {
      // 打印提交的值
      // console.log('submit', values)

      // 判断用户名或密码是否为空，若为空，则不能注册
      if (this.username.trim === '' || this.password.trim === '' || this.repassword.trim === '') {
        Toast('用户名或密码不能为空')
        return false
      }

      // 验证两次密码是否一致，若不一致，则不能注册
      if (this.repassword !== this.password) {
        Toast('两次密码不一致')
        return false
      }

      // 向后端发送请求，判断用户名是否存在，若存在，则不能注册
      axios({
        url: API.API_REGISTER,
        params: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          if (!res.data) {
            Toast('用户名已存在')
            return false
          }
          Toast('注册成功')
          this.$router.replace('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 向后端发送请求，判断用户名是否存在
    onBlurUserName() {
      axios(
        {
          url: API.API_EXIST,
          params: {
            username: this.username,
          },
        },
      )
        .then(res => {
          if (!res.data) {
            // console.log(!res.data)
            Toast('用户已被注册')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 判断两次密码是否一致
    onBlurRePassword() {
      if (this.repassword !== this.password) {
        Toast('两次密码不一致')
      }
    },
  },
}
</script>

<style lang="less" scoped>
  .register{
    .register-zh {
      text-align: center;
      margin-top: 100px;
      font-size: 26px;
    }
    .form {
      margin-top: 100px;
    }
    .check-login {
      float: right;
      margin-right: 40px;
      color: #1989fa;
    }
  }
</style>
