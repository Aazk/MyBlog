<template>
  <div class="loginContent">
    <el-card
      class="box-card"
      shadow="always"
      :body-style="{ padding: '10px' }"
      v-loading="loading"
      element-loading-text="登录中"
    >
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <el-form ref="form" label-width="50px">
        <el-form-item label="账号">
          <el-input v-model="id" prefix-icon="el-icon-arrow-right" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password" prefix-icon="el-icon-arrow-right" clearable autofocus @keyup.enter.native="enter"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="enter">登录</el-button>
      <el-button type="danger">忘记密码</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'loginContent',
    data () {
      return {
        id: '',
        password: '',
        loading: false
      }
    },
    methods: {
      login () {
        if (this.id !== '' && this.password !== '') {
          this.$http.post('api/login?' + new Date().getTime(), {
            id: this.id,
            password: this.password
          }).then(res => {
            if (res.data.flag === false) {
              this.$message('密码错误！')
              this.loading = false
            } else if (res.data.flag === true) {
              if(res.data.role == 1){
                this.$store.dispatch('beAdmin')
              }
              this.$store.dispatch('login')
              this.$router.push('/home')
            }
          })
        } else {
          this.$message('请输入账号密码！')
        }
      },
      enter () {
        this.loading = true
        this.login()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginContent{
    margin: 200px auto;
  }
  .box-card {
    width: 400px;
    margin: 0 auto;
  }
</style>
