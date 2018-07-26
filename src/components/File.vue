
<template>
  <div class="fileContent">
    <h1>归档</h1>
    <div class="file" v-for="(o,i) in data" :key="i">
      <h2>{{o[0].year}}年{{o[0].month>10?o[0].month:'0'+o[0].month}}月</h2>
      <ul>
        <li v-for="(n,j) in o" :key="j">
          <router-link  :to="'/article/'+n.a_id" v-if="!flag">{{n.title}}</router-link>
          <router-link  :to="'/edit/'+n.a_id" v-else>{{n.title}}</router-link>
          <time>{{n.createDate.substring(0,10)}}</time>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fileContent',
  data () {
    return {
      flag: false,
      data: ''
    }
  },
  created() {
      this.flag = this.$store.state.login.isLogin
      this.$http.get('api/getFile' + new Date().getTime(),{ params:{b_user:'000'}})
      .then((res) => {
        if(res.data.length>0){
          this.data = res.data
        }
      })
  },
  methods: {
    // getValue () {
    //   this.$http.get('api/test')
    //   .then((res) => {
    //     console.log('res', res)
    //     this.articleList = res.data
    //     this.flag = true
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.fileContent {
  margin: 10px auto;
  width: 80%;
  text-align: left;
}
a, a:hover {
  text-decoration: none;
  color: #2479cc;
  font-size: 20px;
}
time {
  font-style: oblique;
  color: #999;
  margin-left: 20px;
}
.file {
  margin: 30px 0;
}
ul>li {
  margin: 20px 0;
}
</style>
