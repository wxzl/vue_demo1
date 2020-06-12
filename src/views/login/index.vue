<template>
  <div class="login-container">
    <div class="login-box">
      <!--头像-->
      <div class="avatar-box">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <el-form
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="loginForm"
        class="login-form"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">用户登录</h3>
        </div>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            :type="passwordType">
            </el-input>
        </el-form-item>
        <div class="btns">
          <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length > 3 && value.length < 10) {
        callback()
      } else {
        callback(new Error('请输入正确的用户名'))
      }
    }
    const vaildPassword = (rule, value, callback) => {
      if (value.length > 3 && value.length < 10) {
        callback()
      } else {
        callback(new Error('请输入正确的密码'))
      }
    }
    return {
      // 登录表单数据绑定
      loginForm: {
        username: 'admin',
        password: 'password'
      },
      passwordType: 'password', // 密码类型
      // 表单验证
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          // { required: true, message: '请输入用户名', trigger: 'blur' },
          // { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' },
          { required: true, validator: validateUsername, trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, validator: vaildPassword, trigger: 'blur' }
          // { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' },
        ]
      },
      loading: false
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录前预验证
    handleLogin() {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('login', this.loginForm).then(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
//重置element-ui css
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;

.login-container {
  background-color: $bg;
  min-height: 100%;
  height: 100%;
  overflow: hidden;

  .login-box {
    width: 400px;
    height: 350px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar-box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login-form {
  position: absolute;
  top: 20%;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.title-container {
  .title {
    font-size: 26px;
    text-align: center;
    font-weight: bold;
    color: $bg;
  }
}
</style>
