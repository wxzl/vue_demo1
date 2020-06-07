<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../../assets/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
    width: 550px;
    height: 400px;
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
      transform: translate(-50%,-50%);
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
</style>
