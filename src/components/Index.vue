<template>
  <div class="indexContent">
    <el-container style="height: 100%;">
      <el-main>
        <el-collapse-transition>
          <router-view></router-view>
        </el-collapse-transition>
        <el-footer>
          © 2018 - Edward.Che的博客    -  <a href="https://gitee.com/Aazk/blog">博客源码</a>
          <br>
          Powered by  Vue2  &  Express & MySql
        </el-footer>
      </el-main>
      <el-aside width="300px" height="100%">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            mode='vertical'
            @select='jump'
            height="100%"
            background-color="#00343F"
            text-color="#D0E9FF"
            active-text-color="#37C6C0"
            :router="true"
            >
            <el-menu-item index="/">
              <div>
                <img src="../assets/head.jpg"  width="100%" style="borderRadius: 50%;"/>
              </div>
            </el-menu-item>
            <el-menu-item index="/articleList">
              <i class="el-icon-news"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/file">
              <i class="el-icon-date"></i>
              <span slot="title">归档</span>
            </el-menu-item>
            <el-menu-item index="/tag">
              <i class="el-icon-star-off"></i>
              <span slot="title">标签</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "indexContent",
  data() {
    return {
      msg: "Welcome",
      inpContent: ""
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
          this.$router.push({path: '/articleList'});
          break;
        case '2':
          this.$router.push({path: '/tag'});
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
.indexContent {
  height: 100%;
  width: 100%;
}
.el-menu {
  height: 100%;
}
.el-menu-item {
  font-size: 20px;
  font-weight: bold;
}
.el-menu-item:first-child {
  height: 300px;
}

.el-menu-item:first-child > div > img {
  margin-top: 20px;
}
.el-main::-webkit-scrollbar{
  display: none;
}
.el-main {
  margin-bottom: 50px;
  padding: 0;
}
.el-footer {
  height: 130px;
  border-top: 1px solid rgba(217, 213, 219, 0.952);
  font-size: .9em;
  line-height: 1.8;
  padding: 15px;
  margin: 20px 80px 0px 80px;
  text-align: center;
}
.el-footer a {
  text-decoration: none;
  color: #2479cc;
}
.el-footer a:hover {
  text-decoration: none;
  color: #0f36e6;
}
</style>
