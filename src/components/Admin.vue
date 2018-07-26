<template>
  <div class="adminContent">
    <el-container style="height: 100%;">
      <el-aside height="100%">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            mode='vertical'
            height="100%"
            background-color="#0e0e0e"
            text-color="#fefefe"
            active-text-color="#f2f2f2"
            :router="true"
            >
            <el-menu-item index="/admin">
              <div>
                <img src="../assets/head.jpg"  width="100%" height="100%" style="borderRadius: 50%;"/>
              </div>
            </el-menu-item>
            <el-menu-item index="/admin/file">
              <i class="el-icon-date"></i>
              <span slot="title">归档</span>
            </el-menu-item>
            <el-menu-item index="/admin/tag">
              <i class="el-icon-star-off"></i>
              <span slot="title">标签</span>
            </el-menu-item>
            <el-menu-item index="/admin/create">
              <i class="el-icon-edit"></i>
              <span slot="title">发表文章</span>
            </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-collapse-transition>
          <router-view></router-view>
        </el-collapse-transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "adminContent",
  data() {
    return {
      adminContent: "",
    };
  },
  beforeMount() {
    if (!this.$store.state.login.isLogin) {
      this.$router.push('/')
    }
  },
  methods: {  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adminContent {
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
	height: auto;
}

.el-menu-item:first-child > div > img {
  margin: 20px 0;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.el-main {
  padding: 0;
}
.el-aside {
	width:20% !important;
	min-width: 200px;
  max-width: 300px;
}
</style>
