<template>
  <div class="index_mContent">
    <el-container style="height: 100%;">
      <el-header>
        <el-menu
            default-active="1"
            mode='horizontal'
            @select='jump'
            background-color="#00343F"
            text-color="#D0E9FF"
            active-text-color="#37C6C0"
            :router="true"
            height="4rem"
            >
            <el-menu-item index="/articleList_m">
              <i class="el-icon-news"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/file_m">
              <i class="el-icon-date"></i>
              <span slot="title">归档</span>
            </el-menu-item>
            <el-menu-item index="/tag_m">
              <i class="el-icon-star-off"></i>
              <span slot="title">标签</span>
            </el-menu-item>
          </el-menu>
        </el-header>
      <el-main>
        <el-collapse-transition>
          <router-view></router-view>
        </el-collapse-transition>
      </el-main>
      <el-footer>
        © 2018 - Edward.Che的博客    -  <a href="https://gitee.com/Aazk/blog">博客源码</a>
        <br>
        Powered by  Vue2  &  Express & MySql
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index_mContent",
  data() {
    return {
      msg: "Welcome",
      inp_mContent: ""
    };
  },
  beforeMount() {
    if (!this.$store.state.login.isLogin) {
      //this.$router.push("/login");
    }
  },
  methods: {
    jump(key, keyPath) {
      switch(key){
        case '1':
          this.$router.push({path: '/articleList_m'});
          break;
        case '2':
          this.$router.push({path: '/tag_m'});
          break;
        // case '4':
        //   this.$confirm('确认关闭？')
        //     .then(_ => {
        //       this.$router.push({path: '/login'});
        //     })
        //     .catch(_ => {});
        //   break;
        default: break;
      }
    },
    setValue() {
      this.$http
        .post("api/setValue", {
          id: "25060301",
          password: "1"
        })
        .then(res => {
          console.log("res", res);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index_mContent {
  width: 100%;
}
.el-header {
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 99999;
}
.el-menu {
  height: 9rem;
}
.el-menu-item {
  font-size: 4rem;
  font-weight: bold;
  float: left;
  margin: 2rem !important;
}
.el-menu-item i{
  font-size: 4rem;
  margin-right:3rem;
}
.el-main {
  margin-top: 7rem;
}
.el-footer {
  height: 130px;
  border-top: 0.3rem solid rgba(217, 213, 219, 0.952);
  font-size: 2rem;
  line-height: 3.5rem;
  padding: 15px;
  margin: 20px 80px 0px 80px;
  text-align: center;
  height: 12rem !important;
}
.el-footer a {
  text-decoration: none;
  color: #2479cc;
}
.is-active {
  border-bottom: none !important;
}
</style>
